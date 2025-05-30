// import React from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
//   Outlet
// } from "react-router-dom";
// import Navbar from "./components/NavBar";
// import HomePage from "./components/Home";
// import ErrorPage from "./components/ErrorPage";
// import PollDetails from "./components/PollDetial";
// import VesselDetailsPage from "./components/Vessel";
// import UserManagementPage from "./components/User";
// import CommodityManagementPage from "./components/Commodity";
// import BankInformationPage from "./components/Bank";
// import ClientManagementPage from "./components/Clients";
// import CategoriesManagementPage from "./components/Categories";
// import ContainerDetailsPage from "./components/Container";
// import AssignSupplier from "./components/assignsupp"

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// };

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<Layout />} errorElement={<ErrorPage />}>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/poll" element={<PollDetails />} />
//       <Route path="/vessel" element={<VesselDetailsPage />} />
//       <Route path="/user" element={<UserManagementPage />} />
//       <Route path="/commodity" element={<CommodityManagementPage />} />
//       <Route path="/bank" element={<BankInformationPage />} />
//       <Route path="/clients" element={<ClientManagementPage />} />
//       <Route path="/category" element={<CategoriesManagementPage />} />
//       <Route path="/container" element={<ContainerDetailsPage />} />
//       <Route path="/assignup" element={<AssignSupplier />} />
//     </Route>
//   )
// );

// function App() {
//   return (
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );
// }

// export default App;

import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";

import Navbar from "./components/NavBar";
import HomePage from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import PollDetails from "./components/PollDetial";
import VesselDetailsPage from "./components/Vessel";
import UserManagementPage from "./components/User";
import CommodityManagementPage from "./components/Commodity";
import BankInformationPage from "./components/Bank";
import ClientManagementPage from "./components/Clients";
import CategoriesManagementPage from "./components/Categories";
import ContainerDetailsPage from "./components/Container";
import AssignSupplier from "./components/assignsupp";
import AddSupplierPage from "./components/AddSupplier";
import SupplierInvoiceEditPage from "./components/SupplierInvoiceEdit";
import DeliveryNotePage from "./components/DeliveryNote";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Optional: a placeholder for routes that intentionally use no layout
const NoLayout = () => <Outlet />;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Layout Routes */}
      <Route element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/poll" element={<PollDetails />} />
        <Route path="/vessel" element={<VesselDetailsPage />} />
        <Route path="/user" element={<UserManagementPage />} />
        <Route path="/commodity" element={<CommodityManagementPage />} />
        <Route path="/bank" element={<BankInformationPage />} />
        <Route path="/clients" element={<ClientManagementPage />} />
        <Route path="/category" element={<CategoriesManagementPage />} />
        <Route path="/container" element={<ContainerDetailsPage />} />
        <Route path="/addsupplier" element={<AddSupplierPage />} />
        <Route path="/invoice-edit" element={<SupplierInvoiceEditPage />} />
        <Route path="/deliverynote" element={<DeliveryNotePage />} />
      </Route>

      {/* No Layout Routes */}
      <Route element={<NoLayout />} errorElement={<ErrorPage />}>
        <Route path="/assignup" element={<AssignSupplier />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
