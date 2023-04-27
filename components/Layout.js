import Image from "next/image";
import Head from "next/head";
import { Fragment } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>React Node Send</title>
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <Header />
          <main className="mt-20">{children}</main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
