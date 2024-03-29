"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { Box, Button, ButtonGroup, Zoom } from "@mui/material";
import styles from "./page.module.css";
import Image from "next/image";
import mainLogoBright from "@/public/img/main-logo-bright.png";
import circleLogo from "@/public/img/main-logo-black-circle.png";
import Category from "@/components/category/Category";
import Links from "@/components/links/Links";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { TypeAnimation } from "react-type-animation";
import { CategoryIndictor } from "@/style/homepage.style";
import ArrowDropDownCircleTwoToneIcon from "@mui/icons-material/ArrowDropDownCircleTwoTone";
const trainingType = ["לקוחות מרוצים", "לפני אחרי", "ילדים"];

function Home() {
  const [display, setDisplay] = useState({
    kids: true,
    beforeAndAfter: false,
    reviews: false,
  });
  const [category, setCategory] = useState("ילדים");
  const [showLogo, setShowLogo] = useState(false);
  const [links, setlinks] = useState(false);
  const [bgAttachment, setAttachment] = useState("");
  const [scrollPosition, setScrollPosition] = useState("");
  const bottomRef = useRef(null);
  // const handleScroll = () => {
  //   console.log(window.pageYOffset);
  //   const position = window.scrollY;
  //   setScrollPosition(position);
  //   // console.log(position);
  // };

  const checkIfIphone = () => {
    let isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
      setAttachment("none");
    } else {
      setAttachment("fixed");
    }
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowLogo(true);
  };
  const handleScroll = (event) => {
    if (display.kids || display.beforeAndAfter || display.reviews === true) {
      setShowLogo(true);
      setlinks(true);
      return;
    }
    setDisplay({
      ...display,
      kids: true,
      beforeAndAfter: false,
      reviews: false,
    });
  };

  const updateState = (e) => {
    setCategory(e.target.value);
    switch (e.target.value) {
      case "ילדים":
        setDisplay({
          ...display,
          kids: true,
          beforeAndAfter: false,
          reviews: false,
        });
        break;
      case "לפני אחרי":
        setDisplay({
          ...display,
          kids: false,
          beforeAndAfter: true,
          reviews: false,
        });
        break;

      case "לקוחות מרוצים":
        setDisplay({
          ...display,
          kids: false,
          beforeAndAfter: false,
          reviews: true,
        });
        break;
    }
  };
  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    // window.addEventListener("scroll", onScroll, { passive: true });
    // checkIfIphone()
    // return () => {
      // window.removeEventListener("scroll", onScroll, { passive: true });
    // };
  }, [display, category, showLogo, bgAttachment]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          overflow: "auto",
          bgcolor: "red",
        }}
        onScroll={handleScroll}
      >
        <Box overflow={"hidden"}>
          <Box
            className={styles.main_text}
            sx={{
              backgroundAttachment: bgAttachment,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 0,
              position: "relative",
              top: "80%",
              gap: "10px",
              height: "100vh",
            }}
            textAlign={"center"}
          >

            <Fade  in={true} timeout={1000}>
              <Box mt={{xs: 0, md: 1}}>

              <Image src={circleLogo} alt="mainLogoBright" width={200} />
              </Box>
            </Fade>
            <Zoom in={true} timeout={1000}>
              <Box
                sx={{ fontSize: { xs: 18, md: 20 } }}
                bgcolor={"#050505bc"}
                p={1}
                borderRadius={2}
                dir="rtl"
              >
                <TypeAnimation
                  sequence={[
                    // "בסטודיו פרטי אימונים אישיים או בקבוצות לילדים",
                    "אימוני כושר אישים או קבוצתיים בסטודיו פרטי לילדים",
                    1200,
                    "אימוני כושר אישים או קבוצתיים בסטודיו פרטי לבוגרים",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </Box>
            </Zoom>
            <Box className={styles.shadow} dir="ltr">
              <Category
                arrow={false}
                width={{ xs: 300, sm: 350, md: 400 }}
                height={{ xs: 250, sm: 260, md: 240 }}
                pathToImg="random"
              />
            </Box>
            <Box width={175} m={{ xs: 1, sm: 0 }} borderRadius={2}>
              <Links fadeIn={true} timeout={4000} />
            </Box>
            <Box  className={styles.bounce}>
              <Slide direction="up" in={true} timeout={3000}>
                <Box
                  dir="rtl"
                  bgcolor={"#050505bc"}
                  p={1}
                  borderRadius={2}
                  sx={{
                    fontSize: { xs: 11, md: 13 },
                  }}
                >
                  <h2> לפרטים נוספים גלגלו למטה!</h2>
                </Box>
              </Slide>
              <Button
                sx={{ color: "white", width: "50px" }}
                onClick={scrollToBottom}
              >
                <Slide direction="up" in={true} timeout={4000}>
                  <ArrowDropDownCircleTwoToneIcon
                    sx={{ color: "black", bgcolor: "red", borderRadius: 10 }}
                    fontSize="large"
                  />
                </Slide>
              </Button>
            </Box>
          </Box>
        </Box>
        {/* //////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <Box
          className={styles.main_box}
          sx={{
            bgcolor: "black",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            borderRight: "4px solid red",
            borderLeft: "4px solid red",
            gap: 4
          }}
        >
          <Fade in={showLogo} timeout={3000}>
            <Box pt={2}>

            <Image
              src={mainLogoBright}
              alt="mainLogoBright"
              height={200}
              ></Image>
              </Box>
          </Fade>

          <Links fadeIn={showLogo} timeout={4500} />
          <Zoom in={showLogo} timeout={2500}>
            <Box
              className={styles.content}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                p: 1,
              }}
            >
              <Box bgcolor={"#000000db"} height={36} borderRadius={5} mb={1.5}>
                <ButtonGroup
                  key={"btn-group"}
                  sx={{
                    gap: 1,
                    ".MuiButtonGroup-grouped": {
                      borderColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#fffffeb8",
                      },
                      color: "#ffffff",
                    },
                  }}
                  variant="text"
                >
                  {trainingType.map((type) => (
                    <>
                      <CategoryIndictor active={type === category}>
                        <Button
                          value={type}
                          onClick={updateState}
                          key={type.id}
                          sx={{ borderColor: "red" }}
                          dir="rtl"
                        >
                          {type}
                        </Button>
                      </CategoryIndictor>
                    </>
                  ))}
                </ButtonGroup>
              </Box>

              <Box
                className="gallery"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  mt:{xs:5, md:0}
                }}
              >
                {display.kids ? (
                  <Box>
                    <div dir="rtl">
                      <TypeAnimation
                        speed={65}
                        cursor={false}
                        timeout={2000}
                        sequence={["אימוני ילדים עם יחס אישי לכול ילד!"]}
                      />
                    </div>
                    <Box className="category-gallery">
                      <Category
                        arrow={true}
                        width={{ xs: 300, sm: 350, md: 400 }}
                        height={{ xs: 250, sm: 300, md: 350 }}
                        pathToImg="ילדים"
                      />
                    </Box>
                  </Box>
                ) : (
                  <></>
                )}
                {display.beforeAndAfter ? (
                  <>
                    <div>
                      <TypeAnimation
                        cursor={false}
                        speed={75}
                        style={{ whiteSpace: "pre-line", display: "block" }}
                        sequence={["ביקורות של המתאמנים האלופים שלנו"]}
                      />
                    </div>
                    <Box className="category_gallery">
                      <Category
                        mt={1}
                        arrow={true}
                        width={{ xs: 300, sm: 350, md: 400 }}
                        height={{ xs: 250, sm: 300, md: 350 }}
                        pathToImg="לפני אחרי"
                      />
                    </Box>
                  </>
                ) : (
                  <></>
                )}
                {display.reviews ? (
                  <>
                    <div dir="rtl">
                      <TypeAnimation
                        cursor={false}
                        speed={65}
                        style={{
                          whiteSpace: "pre-line",
                          height: "50px",
                          display: "block",
                        }}
                        sequence={[
                          ` ואיך אפשר בלי תוצאות של עבודה קשה של המתאמנים שלנו
                         \nבעזרת ההדרכה האישית והמקצועית של בראל!`,
                        ]}
                      />
                    </div>

                    <Box className="category-gallery">
                      <Category
                        mt={1}
                        arrow={true}
                        width={{ xs: 300, sm: 350, md: 400 }}
                        height={{ xs: 250, sm: 300, md: 350 }}
                        pathToImg="לקוחות מרוצים"
                      />
                    </Box>
                  </>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          </Zoom>
        </Box>
        <div ref={bottomRef} />
      </div>
    </>
  );
}

export default Home;
