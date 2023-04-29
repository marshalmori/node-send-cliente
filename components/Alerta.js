import { useContext } from "react";
import authContext from "@/context/auth/authContext";

const Alerta = () => {
  const AuthContext = useContext(authContext);
  const { mensaje } = AuthContext;

  return (
    <div className="bg-green-600 py-2 px-3 w-full my-3 max-w-lg text-center text-white font-bold mx-auto">
      {mensaje}
    </div>
  );
};

export default Alerta;
