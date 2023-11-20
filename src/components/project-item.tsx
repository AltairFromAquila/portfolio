import React from 'react';
import { Project } from '../data/projects.js';
import { roleToString } from '../data/roles.js';
import { Box, Button, Grid } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';


export default function ProjectItem({ project }: { project: Project }): React.JSX.Element {
    const buildContent: (
        openInNewIcon: React.JSX.Element
    ) => React.JSX.Element = (
        openInNewIcon: React.JSX.Element
    ): React.JSX.Element => {
        return (
                <Grid container>
                    <Grid item xs={11} className='font-bold' style={{color:'white'}}>
                        {project.name}
                    </Grid>
                    <Grid item xs={1} className='flex justify-end' style={{color:'gainsboro'}}>
                        {openInNewIcon}
                    </Grid>
                    <Grid item xs={10} style={{color:'gainsboro'}}>
                        {roleToString(project.role)}
                    </Grid>
                    <Grid item xs={2} className='text-right' style={{color:'gainsboro'}}>
                        {project.year}
                    </Grid>
                </Grid>
        );
    };

    return (project.url === null) ? (
        <Box>
            {buildContent((<></>))}
        </Box>
    ) : (
        <a style={{textDecoration:'none'}} href={project.url} target='_blank' rel='noopener noreferrer'>
            {buildContent((<OpenInNew />))}
        </a>
    );
}