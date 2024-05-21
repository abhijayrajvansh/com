import Image from "next/image";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white items-center pt-20">
      <p className="text-2xl text-center sm:text-3xl p-4 ">
        welcome to abhijay's
      </p>
      <h1 className="text-5xl font-medium">404 not-found!</h1>

      <Link href={"/"} className="text-center text-lg py-5">
        click here to go to{" "}
        <span className="text-primary-500 underline underline-offset-4 font-semibold">
          home.
        </span>
      </Link>

      <Image
        height={500}
        width={1080}
        src="/images/404-meme.png"
        alt="abhijay-404-meme"
        className="w-full sm:w-3/4 py-5"
      />
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="py-5 text-lg sm:text-xl"
        href={"https://x.com/rajvanshtwt"}
      >
        lol, follow me on twitter{" "}
        <span className="text-primary-500 font-semibold">@rajvanshtwt.</span>
      </Link>
    </div>
  );
};

export default Notfound;
