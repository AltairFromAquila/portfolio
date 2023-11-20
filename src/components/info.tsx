import { Box, Container } from '@mui/material';
import React from 'react';

export default function Info(): React.JSX.Element {
    return (
        <Container className='flex relative pt-8 pb-4'>
            <img src='assets/info-bg.jpg' className='w-full rounded-2xl' />
            {/* <div className='absolute bottom-0 left-[2%] right-1/2 bg-[#17020619] backdrop-blur-sm rounded-2xl'> */}
            <div className='absolute bottom-4 left-[2%] right-1/2'>
                <div className='relative mx-[1em]'>
                    <h2 className='drop-shadow-[2.4px_2.4px_0.1rem_rgba(0,0,0,1)]'>Hello! I'm Fabián Arancibia Caprile</h2>
                    <p className='drop-shadow-[2.4px_2.4px_0.1rem_rgba(0,0,0,1)]'>
                        I'm an inquisitive software developer from Chile with over 6 years of experience, most of them developing web videogames
                    </p>
                </div>
            </div>
            <div className='absolute bottom-4 left-1/2 right-[2%]'>
                <p className='relative mx-[1em] drop-shadow-[2.4px_2.4px_0.1rem_rgba(0,0,0,1)] text-right'>
                    <a href='https://www.instagram.com/the_kumomi/' style={{color:'white', textDecoration:'none'}}>📷@the_kumomi</a>
                </p>
            </div>
        </Container>
    );
}
