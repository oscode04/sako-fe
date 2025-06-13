import { useContext } from "react";
import { AuthContext } from "../authContext/authContext";

export const useAuth = () => {
  return useContext(AuthContext);
};
