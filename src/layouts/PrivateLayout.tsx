import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { IAuth } from "../interface/auth";

type PrivateProps = {
  children: React.ReactElement;
};

const PrivateAdmin = ({ children }: PrivateProps) => {
  const data = localStorage.getItem("user");
  console.log(data);

  if (!data) {
    return <Navigate to="/signin" />;
  } else {
    const dataUser = JSON.parse(data as any);
    const role = dataUser.user.role;
    if (role !== 1) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  }
};

export default PrivateAdmin;
