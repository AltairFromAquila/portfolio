import React, { ReactNode, forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import Scene from '../background/scene';


interface CanvasSize {
    width: number;
    height: number;
}


type CanvasSizeState = [CanvasSize, React.Dispatch<React.SetStateAction<CanvasSize>>];


function initWebGL(canvas: HTMLCanvasElement): RenderingContext | null {
    const wgl: RenderingContext | null = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (wgl === null) {
        console.warn('WebGL context unavailable!');
        return null;
    }

    return wgl;
}


export const Background = forwardRef<HTMLCanvasElement>(
    function Background(props: {}, forwardedRef: React.ForwardedRef<HTMLCanvasElement>): ReactNode {
        const [canvasSize, setCanvasSize]: CanvasSizeState = useState({
            width: window.innerWidth,
            height: window.innerHeight
        });
        const canvasRef = useRef<HTMLCanvasElement>(null!);
        const sceneRef = useRef<Scene>(null!);

        useImperativeHandle(forwardedRef, (): HTMLCanvasElement => canvasRef.current);

        useLayoutEffect(() => {
            if (sceneRef.current) {
                sceneRef.current.updateViewPort();
                sceneRef.current.render();
                return;
            }

            const canvas = canvasRef.current;
            const wgl = initWebGL(canvas);

            if (wgl === null) {
                return;
            }

            const gl = wgl as WebGL2RenderingContext;
            
            sceneRef.current = new Scene(gl);
            sceneRef.current.render();
        });

        useEffect(() => {
            const handleResize = () => {
                setCanvasSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, [ canvasSize ]);

        return <canvas className='fixed -z-10' width={canvasSize.width} height={canvasSize.height} ref={canvasRef} {...props}></canvas>
    }
);
