//React Router Imports
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//Pages Imports
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Stories from "./Pages/Stories";
import RootLayout from "./RootLayout";

//Router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="stories" element={<Stories />} />
      <Route path="features" element={<Features />} />
      <Route path="pricing" element={<Pricing />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
