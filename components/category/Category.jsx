import React, { useEffect } from 'react'
import GalleryImage from '../gallerySlider/GalleryImage'
const trainingType = ["kids", "before and after", "reviews"];
import { Box } from '@mui/material';
import Zoom from '@mui/material/Zoom';

function importAll(r) {
    let images = {};
     r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
   }

function Category({pathToImg, width,height,arrow, direction, mt}) {
  // const images = importAll(require.context(`../../src/app/img/kids`, false, ));
 let images = 'ילדים';
const returnPhotos = () => {
  if(pathToImg === 'ילדים'){
   return images = importAll(require.context(`../../src/app/img/kids`, false, ));
  } if (pathToImg === 'לפני אחרי') {
   return images = importAll(require.context(`../../src/app/img/beforeAndAfter`, false, ));

  }if (pathToImg === 'לקוחות מרוצים') {
    return images = importAll(require.context(`../../src/app/img/reviews`, false, ));
 
   } if(pathToImg === 'random'){
    return images = importAll(require.context(`../../src/app/img/random`, false, ));

   }

}

returnPhotos()
useEffect(() => {
 },[])


  return (
    <Zoom direction={direction} in={true} timeout={1000} >
    <Box   >
    <GalleryImage mt={mt} arrow={arrow} width={width} height={height} imgs={images} />
    </Box>
    </Zoom>
  )
}

export default Category