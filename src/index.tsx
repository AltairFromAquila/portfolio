import React from 'react';
import { createRoot } from 'react-dom/client';
import Info from './components/info.js';
import ProjectList from './components/project-list.js';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Background } from './components/background.js';

const rootElement: HTMLElement | null = document.getElementById('root');
const root = createRoot(rootElement!);

const theme = createTheme({
    components: {
        MuiPopover: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiPopper: {
            defaultProps: {
                container: rootElement,
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'rgba(255, 255, 255, 0.12)'
                }
            }
        }
    },
});

root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Background />
                <Info />
                <ProjectList />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);
