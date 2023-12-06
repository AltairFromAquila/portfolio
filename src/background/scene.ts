import { shaders } from "./shaders";
import { vertices } from "./vertices";


interface StarsLayer {
    readonly vao: WebGLVertexArrayObject;
    readonly vbo: WebGLBuffer;
}

type GLShaderType = (
    WebGLRenderingContextBase['VERTEX_SHADER'] |
    WebGLRenderingContextBase['FRAGMENT_SHADER']
);


const shaderTypeToString = {
    0x8B31: 'VERTEX_SHADER',
    0x8B30: 'FRAGMENT_SHADER'
}


function orthoProj(mat: Float32Array, left: number, right: number, bottom: number, top: number, near: number, far: number): Float32Array {
    // Based on gl Matrix module
    const lr = 1 / (left - right);
    const bt = 1 / (bottom - top);
    const nf = 1 / (near - far);

    mat[0] = -2 * lr;
    mat[1] = mat[2] = mat[3] = mat[4] = 0;
    mat[5] = -2 * bt;
    mat[6] = mat[7] = mat[8] = mat[9] = 0;
    mat[10] = 2 * nf;
    mat[11] = 0;
    mat[12] = (left + right) * lr;
    mat[13] = (top + bottom) * bt;
    mat[14] = (far + near) * nf;
    mat[15] = 1;

    return mat;
}

function initStarsLayer(gl: WebGL2RenderingContext, program: WebGLProgram): StarsLayer {
    const vao = gl.createVertexArray();
    const vbo = gl.createBuffer();

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const stride = vertices.BYTES_PER_ELEMENT * 4; // 4 components 
    const brightnessStart = vertices.BYTES_PER_ELEMENT * 3; // 4th component

    const posAttr = gl.getAttribLocation(program, 'in_pos');

    gl.vertexAttribPointer(posAttr, 3, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(posAttr);

    const brightnessAttr = gl.getAttribLocation(program, 'brightness');

    gl.vertexAttribPointer(brightnessAttr, 1, gl.FLOAT, false, stride, brightnessStart);
    gl.enableVertexAttribArray(brightnessAttr);

    return {
        vao: vao!,
        vbo: vbo!
    };
}

function terminateStarsLayer(gl: WebGL2RenderingContext, layer: StarsLayer): void {
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);

    gl.deleteBuffer(layer.vbo);
    gl.deleteVertexArray(layer.vao);
}

function compileShader(gl: WebGL2RenderingContext, type: GLShaderType, source: string): WebGLShader | null {
    const shader = gl.createShader(type)!;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const msg = gl.getShaderInfoLog(shader);

    if (msg && msg.length > 0) {
        console.warn(`Shader error! ${shaderTypeToString[type]}\n${msg}`);

        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

function initProgram(gl: WebGL2RenderingContext, vSrc: string, fSrc: string): WebGLProgram | null {
    const vs = compileShader(gl, gl.VERTEX_SHADER, vSrc);

    if (vs === null) {
        return null;
    }

    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fSrc);

    if (fs === null) {
        gl.deleteShader(vs);
        return null;
    }

    const program = gl.createProgram()!;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);

    gl.linkProgram(program);

    gl.deleteShader(vs);
    gl.deleteShader(fs);

    return program;
}

function initUniformBuffer(gl: WebGL2RenderingContext, program: WebGLProgram): WebGLBuffer {
    const ubo = gl.createBuffer();

    gl.bindBuffer(gl.UNIFORM_BUFFER, ubo);
    gl.bufferData(gl.UNIFORM_BUFFER, Float32Array.BYTES_PER_ELEMENT * (16 + 4), gl.STREAM_DRAW);

    const sharedIdx = gl.getUniformBlockIndex(program, 'Shared');

    gl.uniformBlockBinding(program, sharedIdx, 0);
    gl.bindBufferBase(gl.UNIFORM_BUFFER, 0, ubo);

    return ubo!;
}

function uniformSetProjection(gl: WebGL2RenderingContext, ubo: WebGLBuffer, projMatrix: Float32Array): void {
    gl.bindBuffer(gl.UNIFORM_BUFFER, ubo);
    gl.bufferSubData(gl.UNIFORM_BUFFER, 0, projMatrix);
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
}

const timeBuffer: Float32Array = new Float32Array(1);
function uniformSetTime(gl: WebGL2RenderingContext, ubo: WebGLBuffer, time: number): void {
    timeBuffer[0] = time;

    gl.bindBuffer(gl.UNIFORM_BUFFER, ubo);
    gl.bufferSubData(gl.UNIFORM_BUFFER, Float32Array.BYTES_PER_ELEMENT * 16, timeBuffer);
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
}

const brightnessMultBuffer: Float32Array = new Float32Array(1);
function uniformSetBrightnessMult(gl: WebGL2RenderingContext, ubo: WebGLBuffer, brightnessMult: number): void {
    brightnessMultBuffer[0] = brightnessMult;

    gl.bindBuffer(gl.UNIFORM_BUFFER, ubo);
    gl.bufferSubData(gl.UNIFORM_BUFFER, Float32Array.BYTES_PER_ELEMENT * 17, brightnessMultBuffer);
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
}


export default class Scene {

    private _gl: WebGL2RenderingContext | null;

    private _starsLayer: StarsLayer | undefined;
    private _ubo: WebGLBuffer | undefined;
    private _program: WebGLProgram | null;

    private _projMatrix: Float32Array | undefined;


    public get isValid(): boolean {
        return this._gl !== null;
    }


    public constructor(gl: WebGL2RenderingContext) {
        this._gl = gl;
        
        this._program = initProgram(this._gl, shaders.vertex, shaders.fragment);

        if (this._program === null) {
            console.warn('Error when creating the program');
            this._gl = null;

            return;
        }

        this._starsLayer = initStarsLayer(this._gl, this._program);
        this._ubo = initUniformBuffer(this._gl, this._program);
        this._projMatrix = new Float32Array(16);

        const aspect = window.innerWidth / window.innerHeight;
        
        uniformSetProjection(this._gl, this._ubo, orthoProj(this._projMatrix, aspect * -2, aspect * 2, -2, 2, -1, 1));
        uniformSetTime(this._gl, this._ubo, 0);
        uniformSetBrightnessMult(this._gl, this._ubo, 0.5);
    }

    public render(): void {
        if (!this._gl) {
            console.warn('Scene was previously terminated!');
            return;
        }

        const gl = this._gl;
        const aspect = window.innerWidth / window.innerHeight;
        
        uniformSetProjection(gl, this._ubo!, orthoProj(this._projMatrix!, aspect * -2, aspect * 2, -2, 2, -1, 1));

        gl.clearColor(0.01, 0.02, 0.09, 1);
        // gl.clearColor(Math.random() * 0.1, 0.02, 0.09, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(this._program);
        gl.drawArrays(gl.POINTS, 0, vertices.length / vertices.BYTES_PER_ELEMENT);
        gl.useProgram(null);
    }

    public updateViewPort(): void {
        this._gl!.viewport(0, 0, window.innerWidth, window.innerHeight);
    }

    public terminate(): void {
        if (!this._gl) {
            console.warn('Scene was previously terminated!');
            return;
        }

        terminateStarsLayer(this._gl, this._starsLayer!);
        this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, null);    
        this._gl.deleteBuffer(this._ubo!);
        this._gl.deleteProgram(this._program);

        this._gl = null;
    }

}
