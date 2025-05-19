import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between px-10 h-40 bg-indigo-400 rounded-b-[30px]">
      <Image
        src="/pumpkin.png"
        width={160}
        height={160}
        alt="pumpkin logo"
        className="w-30 h-auto filter drop-shadow-white"
      />
      <nav className="flex items-center">
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
