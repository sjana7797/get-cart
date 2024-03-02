import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// react query client
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
