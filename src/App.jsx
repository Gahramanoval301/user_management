import { BrowserRouter } from 'react-router'
import WebRouting from './webrouting'
import { Suspense } from 'react'
import Loading from './components/loading/Loading'
import { ThemeProvider } from '@mui/material'
import theme from '../theme'

function App() {


  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <WebRouting />
      </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
