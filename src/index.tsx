import React from 'react';
import { createRoot } from 'react-dom/client';
import Info from './components/info.js';
import ProjectList from './components/project-list.js';

const root = createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <Info />
        <ProjectList />
    </React.StrictMode>
);
