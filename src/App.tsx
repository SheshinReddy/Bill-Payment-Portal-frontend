import './App.css'
import {RouterProvider} from "react-router-dom";
import { router } from './routes/HomePageRoutes';
import { LoginProvider } from './context/LoginContext';

function App() {
  return (
    <LoginProvider>
      <RouterProvider
        router={router}
      />
    </LoginProvider>
  )
}

export default App