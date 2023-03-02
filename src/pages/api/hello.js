// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cloudinary = require("cloudinary").v2;
import { getAge, getRandomRange } from "@/utils/index.js";

cloudinary.config({
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
});

async function handler(req, res) {
  if (req.method === "GET") {
    const getRandomPage = getRandomRange(1, 50);
    const getRandomResult = getRandomRange(1, 19);

    const responsePopular = await fetch(
      `${process.env.NEXT_PUBLIC_THEMOVIEDB_BASE_URL}/person/popular?api_key=${process.env.NEXT_PUBLIC_THEMOVIEDB_API_KEY}&language=es-ES&page=${getRandomPage}`
    );
    const popularCharacters = await responsePopular.json();

    const responseDetails = await fetch(
      `${process.env.NEXT_PUBLIC_THEMOVIEDB_BASE_URL}/person/${popularCharacters?.results[0].id}?api_key=${process.env.NEXT_PUBLIC_THEMOVIEDB_API_KEY}&language=es-ES`
    );
    const characterDetails = await responseDetails.json();

    const age = getAge(characterDetails?.birthday);

    const cloudinaryUploadData = await cloudinary.uploader.upload(
      `${process.env.NEXT_PUBLIC_THEMOVIEDB_IMAGE_URL}${popularCharacters?.results[0].profile_path}`,
      {
        transformation: [
          {
            aspect_ratio: "1.0",
            gravity: "face",
            height: 500,
            width: 500,
            crop: "thumb",
            zoom: "0.75",
            dpr: "auto",
          },
          { radius: "max" },
          { fetch_format: "webp" },
        ],
        // detection: "adv_face",
      }
    );

    res.status(200).json({
      cloudinaryData: cloudinaryUploadData,
      characterDetails,
      realAge: age,
      cloudinaryAge: 30,
    });
  }
}

export default handler;