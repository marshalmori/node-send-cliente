import { Fragment, useContext, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import authContext from "@/context/auth/authContext";
import appContext from "@/context/app/appContext";
import Link from "next/link";
import Dropzone from "../components/Dropzone";
import Alerta from "@/components/Alerta";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  // Extraer el Usuario autenticado del Storage
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  // Extraer el mensaje de error de archivos
  const AppContext = useContext(appContext);
  const { mensaje_archivo, url } = AppContext;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      usuarioAutenticado();
    }
  }, []);

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        {url ? (
          <Fragment>
            <p className="text-center text-2xl">
              <span className="font-bold text-red-700 text-3xl uppercase">
                Tu URL es:{" "}
              </span>
              {`${process.env.NEXT_PUBLIC_FRONTEND_URL}/enlaces/${url}`}
            </p>

            <button
              type="button"
              className="bg-red-500 hover:bg-gray-900 w-full p-2 mt-10 text-white uppercase font-bold rounded-lg"
              onClick={() =>
                navigator.clipboard.writeText(
                  `${process.env.NEXT_PUBLIC_FRONTEND_URL}/enlaces/${url}`
                )
              }
            >
              Copiar Enlace
            </button>
          </Fragment>
        ) : (
          <Fragment>
            {mensaje_archivo && <Alerta />}

            <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
              <Dropzone />

              <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
                <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">
                  Compartir archivos de forma sencilla y privada
                </h2>

                <p className="text-lg leading-loose">
                  <span className="text-red-500 font-bold">ReactNodeSend</span>{" "}
                  te permite compartir archivos con cifrado de extremo a extremo
                  y un archivo que es eliminado después de ser descargado. Así
                  que puedes mantener lo que compartes en privado y asegurarte
                  de que tus cosas no permanezcan en línea para siempre.
                </p>

                <Link
                  href="/crearcuenta"
                  className="text-red-500 font-bold text-lg hover:text-red-700"
                >
                  Crea una cuenta para mayores beneficios
                </Link>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Layout>
  );
}
