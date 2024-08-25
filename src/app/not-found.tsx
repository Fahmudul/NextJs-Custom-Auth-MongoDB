import Link from "next/link";
import Image from "next/image";
import errorpage from "../../public/error.gif";
export default function NotFound() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center items-center w-full">
      <Image alt="error" src={errorpage} className="w-1/3" />
      <Link className="btn my-5" href="/">
        Return Home
      </Link>
    </div>
  );
}
