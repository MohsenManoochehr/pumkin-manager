import Image from "next/image";
import Link from "next/link";

function SignIn() {
  return (
    <div className="flex w-full justify-end relative">
      <div className="ps-20 flex flex-col absolute h-[80vh] left-0 justify-center w-[30%]">
        <Image
          className="w-40 h-auto mb-2"
          src="/pumpkin.png"
          width={300}
          height={300}
          alt="pumpkin"
        />
        <h1 className="text-5xl font-bold">Pumpkin Manager</h1>
        <p className="mt-2">
          Sign in to your account with your{" "}
          <b className="text-red-600 hover:text-red-800">
            <Link href="/info/secret-key">Secret Key</Link>
          </b>
        </p>
        <div className="mt-10 flex flex-col gap-1">
          <label className="font-semibold text-[16px]">Email</label>
          <input
            placeholder="example@pumpkin.boo"
            className="py-3 px-5 ring-1 bg-[var(--creamy)] rounded-xl w-80 placeholder:text-[inherit] placeholder:opacity-80"
          />
          <label className="font-semibold text-[16px] mt-2">Password</label>
          <input
            placeholder="$!Gthrh4ihoh@#"
            className="py-3 px-5 ring-1 bg-[var(--creamy)] rounded-xl w-80 placeholder:text-[inherit] placeholder:opacity-80"
          />
          <Link
            href="/forgot-password"
            className="mt-1 text-[14px] hover:text-indigo-400 transition-all"
          >
            Forgot Password?
          </Link>
          <p className="mt-4 text-[14px] text-red-600 w-90">
            Forgetting your secret key means losing all your data!{" "}
            <span>Please it write it down so you'll never lose any data</span>
          </p>
          <label className="font-semibold text-[16px] mt-2">Secret Key</label>
          <input
            placeholder="tr45-56io-32ui-90ux"
            className="py-3 px-5 ring-1 bg-[var(--creamy)] rounded-xl w-80 placeholder:text-[inherit] placeholder:opacity-80"
          />
        </div>
      </div>
      <div>
        <Image
          src="/auth/bg-auth.png"
          width={2000}
          height={1600}
          alt="sign-in-photo"
          className="h-[100vh] w-auto"
        />
      </div>
    </div>
  );
}

export default SignIn;
