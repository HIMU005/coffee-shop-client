import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import App from './App';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Users from './components/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h4 className='text-center text-7xl font-bold'>404</h4>,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch('https://coffee-store-server-blue-delta.vercel.app/coffee'),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`https://coffee-store-server-blue-delta.vercel.app/coffee/${params.id}`),
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: 'signIn',
        element: <SignIn />,
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch('https://coffee-store-server-blue-delta.vercel.app/users'),
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
