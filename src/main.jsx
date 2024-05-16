import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import User from './components/User/User.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
/* creating route/path to navigate to pages */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    /* we use errorElement to though an error or page that not found.  we can use it on parent element and also can use it specifically on child element. */
    errorElement:<ErrorPage></ErrorPage>,
    /* nesting the routes */
    /* also, if we want show these nested routes in home, We need to tell the home route where we want it to render its child routes, using <outlet></outlet */
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        /* In react router, we use loader to load data. and will receive this data in user component */
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }, 

      /* all the routes above are Fixed routes, it will take us to the specific path mention on it, we can make it dynamic by adding a semicolon*/
      {
        path: '/user/:userId', 
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      }, 
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
