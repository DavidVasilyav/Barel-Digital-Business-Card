"use client";

import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

export default function GalleryImage({ imgs, width, height, arrow }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const img = Object.keys(imgs);

  useEffect(() => {}, []);

  return (
    <>
      <Box className="navigation-wrapper" sx={{ width: width, }}>
        <div dir="rtl" ref={sliderRef} className="keen-slider">
          {img.map((image) => (
            <>
              <Box
                className="keen-slider__slide "
                height={height}
                key={image}
              >
                <Image
                  style={{ borderRadius: 5 }}
                  src={imgs[`${image}`]}
                  fill={true}
                  alt="error"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
              </Box>
            </>
          ))}
        </div>
      </Box>
    </>
  );
}
