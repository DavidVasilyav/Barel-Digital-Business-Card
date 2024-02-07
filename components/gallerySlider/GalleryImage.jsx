"use client";

import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export default function GalleryImage({ imgs, width,height, arrow }) {
  const [index, setIndex] = useState(1);
  const [index2, setIndex2] = useState(1);
  const [showArrow, setArrow] = useState(arrow);

  const img = Object.keys(imgs);
  const changeIndex = () => {
    if (index === 3) {
      setTimeout(() => {
        setIndex2(1)
        setIndex(1)
      }, 4000);
      return;
    } else {
      setTimeout(() => {
        setIndex2(index2 + 1);
        setIndex(index2);
      }, 1500);
    }
  };

  const next = () => {
    switch (index) {
      case 1:
        setIndex(2);
        break;
      case 2:
        setIndex(3);
        break;
      case 3:
        setIndex(1);
        break;
    }
  };
  const prev = () => {
    switch (index) {
      case 1:
        setIndex(3);
        break;
      case 2:
        setIndex(1);
        break;
      case 3:
        setIndex(2);
        break;
    }
  };
  useEffect(() => {
    changeIndex();
  }, [index2]);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, }}>
        <Box className="img_container" width={width} height={height}>
          <Image
            src={imgs[`image${index}.jpg`]}
            style={{ width: "100%", height: "100%", borderRadius: 5, }}
            alt="אימונים"
/>
        </Box>
        {showArrow ? <>
          <Box
          className="slider_btn"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            bgcolor="#1A1A1A"
            onClick={next}
            sx={{
              transition: "1s",
              ":hover": {
                bgcolor: "#d12e27",
              },
            }}
          >
            <KeyboardDoubleArrowLeftIcon
              sx={{
                color: "#d12e27",
                transition: "1s",
                bgcolor: "#1A1A1A",
              }}
            />
          </Button>
          <Button
            bgcolor="#1A1A1A"
            onClick={next}
            sx={{
              transition: "1s",

              ":hover": {
                bgcolor: "#d12e27",
              },
            }}
          >
            <KeyboardDoubleArrowRightIcon
              sx={{
                color: "#d12e27",
                transition: "1s",
                bgcolor: "#1A1A1A",
              }}
            />
          </Button>
        </Box>
        
        </> : <></>}
      
      </Box>
    </>
  );
}
