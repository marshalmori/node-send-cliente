import { useContext, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import authContext from "@/context/auth/authContext";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  // Extraer el Usuario autenticado del Storage
  const AuthContext = useContext(authContext);
  const { usuarioAutenticado } = AuthContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);

  return (
    <Layout>
      <h1 className="container">Index</h1>
    </Layout>
  );
}
