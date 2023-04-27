import Image from "next/image";
import Head from "next/head";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>React Node Send</title>
      </Head>

      <Image alt="Logomarca" src="logo.svg" width={100} height={50} />

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <main className="mt-20">{children}</main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
