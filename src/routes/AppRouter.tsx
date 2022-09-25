import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routesList } from ".";
import LayoutComponent from "../pages/LayoutComponent";
import Login from "../pages/Login";

const AppRouter: React.FC = () => {
  const auth = true;

  return (
    <Routes>
      {routesList.map((el) => {
        if (auth && el.private) {
          return (
            <Route
              path={el.path}
              element={<LayoutComponent children={<el.component />} />}
            />
          );
        } else {
          return <Route path="*" element={<Login auth={auth} />} />;
        }
      })}
    </Routes>
  );
};

export default AppRouter;
