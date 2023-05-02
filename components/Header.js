import { useContext, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import authContext from "@/context/auth/authContext";

const Header = () => {
  const AuthContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <header className="py-8 flex flex-col md:flex-row items-center justify-between">
      <Link href={"/"}>
        <Image
          className="w-64 mb-8 md:mb-0 "
          src="logo.svg"
          alt="Logo React Node Send"
          width={300}
          height={300}
        />
      </Link>

      <div>
        {usuario ? (
          <div className="flex items-center">
            <p className="mr-3">Hola {usuario.nombre}</p>
            <button
              type="button"
              className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-5"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </div>
        ) : (
          <Fragment>
            <Link
              href={"/login"}
              className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-5"
            >
              Iniciar Sesión
            </Link>

            <Link
              href={"/crearcuenta"}
              className="px-5 py-3 rounded-lg text-gray-600 font-bold uppercase border-solid border-2 border-gray-600 "
            >
              Crear Cuenta
            </Link>
          </Fragment>
        )}
      </div>
    </header>
  );
};

export default Header;
