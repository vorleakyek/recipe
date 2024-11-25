import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.webp";

const Navbar = () => {
  return (
    <header className="pt-5">
      <nav>
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
          <Link href="/">
            <h1 className="font-bold ml-3">Fusion of Flavor</h1>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
