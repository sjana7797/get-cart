import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@repo/ui";
import Products from "./routes/products";
import Header from "./components/home/header";

// react query client
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
