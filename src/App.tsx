import { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/loader";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import NotFoundPage from "./page/404";

const LazyLandingView = lazy(() => import("./page/landing/index"));
const LazyLoginPage = lazy(() => import("./page/login/index"));
const LazyRegisterPage = lazy(() => import("./page/registration/index"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LazyLandingView />} />
            <Route path="signUp" element={<LazyRegisterPage />} />{" "}
            <Route path="login" element={<LazyLoginPage />} />{" "}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
