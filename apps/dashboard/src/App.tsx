import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@repo/ui/components/ui/sonner";
import Products from "./routes/products";
import Root from "./routes/root";
import LoadingBar from "react-top-loading-bar";
import { useAppSelector } from "./lib/store/hooks";
import { useDispatch } from "react-redux";
import { setProgress } from "~/lib/store/features/topLoadingBarSlice";
import AddProduct from "./routes/add-product";
import Banner from "./routes/banner";
import Brand from "./components/brand";

// react query client
const queryClient = new QueryClient();

function App() {
  // loading bar states
  const progress = useAppSelector((state) => state.topLoadingBar.progress);

  // redux dispatch
  const dispatch = useDispatch();

  // set progress dispatch
  const setProgressDispatch = (progress: number) => {
    dispatch(setProgress(progress));
  };

  // react router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/add-product", element: <AddProduct /> },
        { path: "/banner", element: <Banner /> },
        { path: "/brand", element: <Brand /> },
      ],
      loader: () => {
        return <div>Loading...</div>;
      },
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgressDispatch(0)}
      />
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
