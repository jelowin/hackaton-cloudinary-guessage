import Head from "next/head";
import { useState } from "react";
import {
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder,
} from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import CountUp from "react-countup";

const cld = new Cloudinary({
  cloud: {
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
  },
  url: {
    secure: true,
  },
});

export default function Guess(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const checkWinner = () => {
  //   if ()
  // }

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const { ageInput } = event.target.elements;
    setIsSubmitting(true);
  };

  return (
    <>
      <Head>
        <title>Guess my age</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="h-full flex flex-col items-center justify-around">
        <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-center lg:text-left pb-4">
          How old is he or she?
        </h1>
        <AdvancedImage
          width={props.data?.cloudinaryData?.width}
          height={props.data?.cloudinaryData?.height}
          cldImg={cld.image(
            `${props.data?.cloudinaryData?.public_id}.${props.data?.cloudinaryData?.format}`
          )}
          plugins={[lazyload(), responsive(), accessibility(), placeholder()]}
        />

        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="ageInput" hidden>
            Enter age
          </label>
          <input
            id="ageInput"
            type="text"
            placeholder="Enter the age you think he/she is"
          />
          <button type="submit">Check</button>
          {/* <div class="flex flex-col-reverse relative focus group">
            <input
              id="ageInput"
              type="text"
              class="border-2 border-black px-3 py-2 leading-9"
            />

            <span class="absolute text-lg text-gray-500 transform -translate-y-3 left-4 transition leading-10 group-focus-within:-translate-y-16">
              Enter the age you think he/she is
            </span>
            <button type="submit">Check</button>
          </div> */}
        </form>
      </article>
      {isSubmitting && (
        <div className="h-full w-full fixed top-0 left-0 bg-slate-800/[.6] flex flex-col justify-center items-center">
          <div className="w-full flex justify-around">
            <div className="flex flex-col items-center font-bold text-5xl md:text-9xl text-white p-8">
              <label className="text-base md:text-2xl font-normal">You</label>
              <CountUp
                start={0}
                end={props.data?.realAge}
                delay={1}
                duration={1}
              />
            </div>
            <div className="flex flex-col items-center font-bold text-5xl md:text-9xl text-white p-8">
              <label className="text-base md:text-2xl font-normal">Real</label>
              <CountUp
                start={0}
                end={props.data?.realAge}
                delay={1}
                duration={1}
              />
            </div>
            <div className="flex flex-col items-center font-bold text-5xl md:text-9xl text-white p-8">
              <label className="text-base md:text-2xl font-normal">
                Cloudinary
              </label>
              <CountUp
                start={0}
                end={props.data?.realAge}
                delay={1}
                duration={1}
              />
            </div>
          </div>
          <button
            onClick={() => {
              setIsSubmitting(false);
            }}
            className="w-40 border-0 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg text-white flex text-lg p-1 cursor-pointer transition font-montserrat font-bold "
          >
            <span className="w-40 text-xl lg:text-2xl py-4 px-6 rounded-lg transition hover:bg-transparent active:scale-90">
              Next
            </span>
          </button>
        </div>
      )}
      {/* <span>EDAD REAL: {props.data?.cloudinaryData.realAge}</span>
        <span>
          EDAD ClOUDINARY:{" "}
          {
            props.data?.cloudinaryData.cloudinaryData.info.detection.adv_face.data[0]
              .attributes.age
          }
        </span> */}
      {/* <footer>
        <span>
          Made with () by <a href="https://github.com/jelowin">Jelowin</a>{" "}
        </span>
      </footer> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/hello`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}