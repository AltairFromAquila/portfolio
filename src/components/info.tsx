import { Container } from '@mui/material';
import React from 'react';

export default function Info(): React.JSX.Element {
    return (
        <Container className='flex relative pt-8 pb-4'>
            <img src='assets/info-bg.jpg' className='hidden sm:inline w-full rounded-2xl opacity-90' />
            <div className='relative bottom-0 left-0 right-0 bg-slate-800/60 rounded-2xl backdrop-blur-[2px] sm:absolute sm:bottom-4 sm:left-[2%] sm:right-1/2 sm:bg-transparent'>
                <div className='relative mx-[1em]'>
                    <h2 className='drop-shadow-[2.4px_2.4px_0.1rem_rgba(0,0,0,1)]'>Hello! I'm Fabián Arancibia Caprile</h2>
                    <p className='drop-shadow-[2.4px_2.4px_0.1rem_rgba(0,0,0,1)]'>
                        I'm an inquisitive software developer from Chile with over 6 years of experience, most of them developing web videogames
                    </p>
                </div>
            </div>
            <div className='hidden sm:inline absolute bottom-4 left-1/2 right-[2%]'>
                <p className='relative mx-[1em] drop-shadow-[2.4px_2.4px_0.1rem_rgba(0,0,0,1)] text-right'>
                    <a style={{color:'white', textDecoration:'none'}} href='https://www.instagram.com/the_kumomi/' target='_blank' rel='noopener noreferrer'>
                        📷@the_kumomi
                    </a>
                </p>
            </div>
        </Container>
    );
}
