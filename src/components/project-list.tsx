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
        <Container className='pt-4 pb-8'>
            <Container className='py-4 bg-slate-800/60 rounded-2xl backdrop-blur-[2px]'>
                <h2>Projects</h2>
                <Divider variant='fullWidth'/>
                <Grid container className='gap-4 md:grid-cols-2 pl-2 py-4'>
                    {list}
                </Grid>
            </Container>
        </Container>
    );
}