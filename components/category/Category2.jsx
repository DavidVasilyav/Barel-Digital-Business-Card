import {useState} from "react";
import Image from "next/image";
import { Box, ImageListItem, ImageList, Fade, Paper } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const imagesKids = importAll(require.context(`../../src/app/img/kids`, false));
const beforeAndAfter = importAll(
  require.context(`../../src/app/img/beforeAndAfter`, false)
);
const reviews = importAll(require.context(`../../src/app/img/reviews`, false));
function mapArray() {
  Object.keys(imagesKids).forEach(function (key, index) {
    imagesKids[key] *= 2;
  });
  console.log(imagesKids);
}
const kidsImagesArray = Object.entries(imagesKids);
const kidsImagesArray2 = kidsImagesArray.map((kids) => kids[1].default.src);
const beforeAndAfterArray1 = Object.entries(beforeAndAfter);
const beforeAndAfterArray2 = beforeAndAfterArray1.map(
  (kids) => kids[1].default.src
);
const reviewsArray1 = Object.entries(reviews);
const reviewsArray2 = reviewsArray1.map((kids) => kids[1].default.src);
const allImages = kidsImagesArray2.concat(beforeAndAfterArray2);
// console.log(kidsImagesArray[1][1].default.src);
// console.log(kidsImagesArray.map((kids) => console.log(kids[1].default.src)));
function photosOrder() {
  let images = [];
  images = kidsImagesArray2.join("");
}

export default function QuiltedImageList({trueOrnNot, timeout}) {
  const [showBefore, setShowBefore] = useState(false);
  const [showReview, setShowReview] = useState(false);
  return (
    <>
      <Box mt={2} pt={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
        אימוני ילדים
        {kidsImagesArray2.map((fuck) => (
          <>
            <Image style={{padding: 5}} src={fuck} width={200} height={200} />
            <Box dir='rtl'>
            </Box>
          </>
        ))}
        <div style={{width: '100%', height: 50 ,}} onMouseOver={ () => setShowBefore(true)}></div>
      </Box>
    <Fade in={showBefore} timeout={1000}>
      <Box mt={2} pt={2} sx={{bgcolor: '#000000a0'}}>
        {beforeAndAfterArray2.map((fuck) => (
          <>
            <Image style={{padding: 1}} src={fuck} width={200} height={200} />
          </>
        ))}
                <div style={{width: '100%', height: 50 ,}} onMouseOver={ () => setShowReview(true)}></div>

      </Box>
      </Fade>
      <Fade in={showReview} timeout={1000}>
      <Box mt={2} pt={2} sx={{bgcolor: '#000000a0'}}>
        {reviewsArray2.map((fuck) => (
          <>
            <Image src={fuck} width={200} height={200} />
          </>
        ))}

      </Box>
      </Fade>

    </>
  );
}

const itemData = [
  {
    img: allImages[0],
    title: "Breakfast",
    rows: 2,
    cols: 4,
  },
  {
    img: allImages[1],
    title: "Burger",
    rows: 3,
    cols: 2,
  },
  {
    img: allImages[2],
    title: "Camera",
  },
  // {
  //   img: allImages[3],
  //   title: "Coffee",
  //   cols: 2,
  // },
  // {
  //   img: allImages[4],
  //   title: "Hats",
  //   cols: 2,
  // },
  // {
  //   img: allImages[5],
  //   title: "Honey",
  //   author: "@arwinneil",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: allImages[6],
  //   title: "Basketball",
  // },
  // {
  //   img: allImages[0],
  //   title: "Fern",
  // },
  // {
  //   img: allImages[0],
  //   title: "Mushrooms",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: allImages[0],
  //   title: "Tomato basil",
  // },
  // {
  //   img: allImages[0],
  //   title: "Sea star",
  // },
  // {
  //   img: allImages[0],
  //   title: "Bike",
  //   cols: 2,
  // },
];
