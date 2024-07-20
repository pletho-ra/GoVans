import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home, About, Vans, VansDetail, NotFoundPage } from "./Pages/index";
import { loader as vansLoader } from "./Pages/Vans/Vans.jsx";
import {
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanPhotos,
  HostVanPricing,
  HostVansDetail,
  HostVaninfo,
} from "./Pages/Host/index.js";
import { Layout, HostLayout, Error } from "./components";
import "./App.css";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VansDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans/:id" element={<HostVansDetail />}>
          <Route index element={<HostVaninfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
