import React from 'react';
import { Project } from '../data/projects.js';
import { roleToString } from '../data/roles.js';


export default function ProjectItem({ project }: { project: Project }): React.JSX.Element {
    return (
        <>
            <p>{project.name}</p>
            <p>{roleToString(project.role)}</p>
        </>
    );
}