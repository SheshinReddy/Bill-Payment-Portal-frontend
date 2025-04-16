import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material'
import { globalTheme } from './themes/gloobalTheme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
