// Padding added to avoid uniform size requirements issues

const vertex: string = `#version 300 es

in vec3 in_pos;
in float brightness;

layout (std140) uniform Shared {
    mat4 projection;

    float time;
    float brightness_mult;

    float padding1;
    float padding2;
};

void main() {
    gl_Position = projection * vec4(in_pos, 1.0);
    // gl_Position = vec4(in_pos, 1.0);
    gl_PointSize = brightness * brightness_mult;
}
`;

const fragment: string = `#version 300 es
precision highp float;

out vec4 out_color;

void main() {
    out_color = vec4(1.0);
}
`;

export const shaders: { readonly vertex: string; readonly fragment: string; } = { vertex: vertex, fragment: fragment };
