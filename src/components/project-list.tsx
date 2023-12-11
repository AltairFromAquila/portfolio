import React from 'react';
import ProjectItem from './project-item.js';
import { Project, projects } from '../data/projects.js';
import { Container, Divider, Grid } from '@mui/material';

export default function ProjectList(): React.JSX.Element {
    const list: React.JSX.Element[] = projects.map((p: Project): React.JSX.Element => (
        <Grid item className='w-full md:w-[49%] bg-slate-600/60 rounded-2xl p-2' key={p.name}>
            <ProjectItem project={p} />
        </Grid>
    ));
    return (
        <Container className='pb-8'>
            <Container className='pt-1 pb-4 bg-slate-800/60 rounded-2xl backdrop-blur-[2px]'>
                <h2 className='mb-0'>Projects</h2>
                <Divider className='mb-4' variant='fullWidth'/>
                <Grid container className='flex flex-row flex-wrap justify-between gap-y-4'>
                    {list}
                </Grid>
            </Container>
        </Container>
    );
}