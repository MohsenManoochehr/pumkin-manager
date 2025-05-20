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
        className="w-30 h-auto"
        style={{
          filter: "drop-shadow(0 0 5px rgba(200, 200, 200, 0.85))",
        }}
      />
      <nav className="flex items-center gap-2">
        <Link
          href="/sign-in"
          className="py-3 px-2 text-white text-3xl rounded border-l-indigo-800"
        >
          Sign In
        </Link>
        <Link href="/sign-up" className="py-3 px-2 text-white text-3xl">
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
