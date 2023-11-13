import SingIn from './pages/SingIn/SingIn';
 import Home from './pages/Home/Home';

import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import './App.css';
import SingUp from './pages/SingUp/SingUp';
import NotFound from './pages/NotFound/NotFound';
// import Asistencia from "./Componentes/Asistencia/Asistencia";
import Terminos from './Componentes/Terminos/Terminos';
import Asistencia from './Componentes/Asistencia/Asistencia';
import About from './Componentes/About/About';
import Contact from './Componentes/Contact/Contact';

//import Login from './Login';

function App() {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<SingIn></SingIn>
    },

    {
      path:"/home",
      element:<Home></Home>
    },

    {
      path:"/sing_up",
      element:<SingUp></SingUp>
    },

    {
      path:"/asistencia",
      element:<Asistencia></Asistencia>
    },

    {
      path:"/terminos",
      element:<Terminos></Terminos>
    },

    {
      path:"/about",
      element:<About></About>
    },

    {
      path:"/Contact",
      element:<Contact></Contact>
    },

    {
      path:'*',
      element:<NotFound/>
    },
    
  ])

  return (
            <RouterProvider router={router} ></RouterProvider>
  );
}

export default App;
