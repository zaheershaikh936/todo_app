import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
  
// !other import
import App from './App.tsx'
import './index.css'
import Error from './component/Error';
import SignIn from './component/auth/Singin';
import Home from './component/home/Home.tsx';
import SignUp from './component/auth/SignUp.tsx';
import store from './utilities/redux/store.ts';



export const AppLayout = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [{
      path: '/',
      element: <SignIn />,
    }, {
      path: '/Home',
      element: <Home />,
      },
    {
      path: '/signup',
      element: <SignUp/>,
    }]
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={AppLayout} />
    </Provider>
  </React.StrictMode>,
)
