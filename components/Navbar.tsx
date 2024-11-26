import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.webp";
import {Search, Menu} from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div>
          <button>
            <Menu />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={50} height={50} />
          </Link>
          <Link href="/">
            <h1 className="font-bold ml-3">Fusion of Flavor</h1>
          </Link>
        </div>
        <div>
          <button>
            <Search/>
          </button>
        </div>
      </nav>
      <hr className="mt-2" style={{ border:'1px solid black'}}/>
    </header>
  )
}

export default Navbar;
