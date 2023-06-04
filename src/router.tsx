import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";
import { TodoListPage } from "./pages/ToDoListPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <TodoListPage />
      },
      {
        path: '/list',
        element: <ViewList />,
      },
      {
        path: '/list/:id',
        element: <ViewListItem />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], 
{ basename: '/GLO-ToDo-app' }
)
