import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
