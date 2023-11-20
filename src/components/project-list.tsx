import React from 'react';
import ProjectItem from './project-item.js';
import { Project, projects } from '../data/projects.js';

export default function ProjectList(): React.JSX.Element {
    const list: React.JSX.Element[] = projects.map((p: Project): React.JSX.Element => <ProjectItem project={p} />);
    return (
        <>
            {list}
        </>
    );
}