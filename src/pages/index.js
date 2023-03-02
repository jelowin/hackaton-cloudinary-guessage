import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Guess my age</title>
        <meta
          name="description"
          content="Can you guess the age of these celebrities?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="h-full flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-10">
        <div className="h-full w-1/2 flex gap-4 lg:gap-2">
          <Image
            className="w-0 grow object-cover opacity-8 transition ease-in delay-300 hover:cursor-pointer hover:w-72 hover:opacity-100 hover:contrast-150"
            src="/peep-94.svg"
            alt="open peeps avatar"
            width="150"
            height="150"
          />
          <Image
            className="w-0 grow object-cover opacity-8 transition ease-in delay-300 hover:cursor-pointer hover:w-72 hover:opacity-100 hover:contrast-150"
            src="/peep-62.svg"
            alt="open peeps avatar"
            width="150"
            height="150"
          />
          <Image
            className="w-0 grow object-cover opacity-8 transition ease-in delay-300 hover:cursor-pointer hover:w-72 hover:opacity-100 hover:contrast-150"
            src="/peep-65.svg"
            alt="open peeps avatar"
            width="150"
            height="150"
          />
          <Image
            className="w-0 grow object-cover opacity-8 transition ease-in delay-300 hover:cursor-pointer hover:w-72 hover:opacity-100 hover:contrast-150"
            src="/peep-63.svg"
            alt="open peeps avatar"
            width="150"
            height="150"
          />
        </div>
        <div className="h-full w-full lg:w-1/2 flex flex-col lg:justify-center">
          <h1 className="font-inter font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-4xl lg:text-5xl xl:text-7xl text-center lg:text-left pb-4">
            Guess my age!
          </h1>
          <p className="font-inter text-slate-800 text-center lg:text-left w-full lg:w-10/12 text-lg lg:text-xl xl:text-2xl leading-8 pb-8">
            Between you and Cloudinary, who will be able to get closer to the
            celebrities's real age?
          </p>
          <Link href="/guess">
            <button className="w-full h-full border-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg text-white flex text-lg p-1 cursor-pointer transition font-montserrat font-bold ">
              <span className="w-full h-full bg-slate-800 text-xl lg:text-2xl py-4 px-6 rounded-lg transition hover:bg-transparent active:scale-90">
                Try it
              </span>
            </button>
          </Link>
        </div>
      </article>
    </>
  );
}
