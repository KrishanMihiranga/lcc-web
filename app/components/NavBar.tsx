import Image from "next/image"
import lccLogoBlack from "@/public/lccLogoBlack.png"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
      <nav>
        <Image src={lccLogoBlack} alt={"lcc tea collectors logo"} />
        <ul>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Rates</Link>
          <Link href={'#'}>Services</Link>
          <Link href={'#'}>Contacts</Link>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar