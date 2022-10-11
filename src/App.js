import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import QuizDetails from "./Components/QuizDetails/QuizDetails";
import Statistics from "./Components/Statistics/Statistics";

import Main from "./layout/Main";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", loader:()=> fetch('https://openapi.programming-hero.com/api/quiz')  , element: <Home></Home> },
        { path: "/home", loader:()=> fetch('https://openapi.programming-hero.com/api/quiz')  , element: <Home></Home> },
        {path:'/home/:quizId', loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`) ,element:<QuizDetails></QuizDetails>},
     
        {path:'/statistics', element:<Statistics></Statistics>},
        {path:'/blog', element:<Blog></Blog>},
      
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
