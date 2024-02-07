"use client";
import { useEffect, useState, useRef } from "react";
import {
  Container,
  Box,
  Button,
  ButtonGroup,
  Paper,
  Zoom,
} from "@mui/material";
import styles from "./page.module.css";
import Image from "next/image";
import mainLogo from "@/public/img/main-logo.png";
import Category from "@/components/category/Category";
const trainingType = ["לפני אחרי", "לקוחות מרוצים", "ילדים"];
import { CategoryIndictor } from "@/style/homepage.style";
import Links from "@/components/links/Links";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import BgAnimation from "@/components/bgAnimation/BgAnimation";
import { TypeAnimation } from "react-type-animation";
import ArrowDropDownCircleTwoToneIcon from "@mui/icons-material/ArrowDropDownCircleTwoTone";
import secondBackground from "@/public/img/secondBackground.jpg";

function Home() {
  const [display, setDisplay] = useState({
    kids: true,
    beforeAndAfter: false,
    reviews: false,
  });
  const [category, setCategory] = useState("ילדים");
  const [showLogo, setShowLogo] = useState(false);
  const [links, setlinks] = useState(false);
  const bottomRef = useRef(null);
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
  useEffect(() => {}, [display, category, showLogo]);
  return (
    <>
      <div
        style={{
          height: "100vh",
          overflow: "auto",
          borderRight: "4px solid red",
          borderLeft: "4px solid red",
        }}
        onScroll={handleScroll}
      >
        <Box className={styles.logo}>
          <Box
            className={styles.main_text}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: 0,
              position: "relative",
              top: "80%",
              height: "800px",
            }}
            dir="rtl"
            textAlign={"center"}
          >
            <Box dir="ltr">
              <Category
                arrow={false}
                width={250}
                height={280}
                pathToImg="לקוחות מרוצים"
              />
            </Box>
            <Zoom in={true} timeout={1000}>
              <Box
                sx={{ fontSize: { xs: 20, md: 30 } }}
                bgcolor={"#050505bc"}
                p={1}
                borderRadius={2}
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
            <Box bgcolor={'#fff2'} width={200} m={1} borderRadius={2} >
            <Links fadeIn={true} timeout={4000} />
            </Box>
            <Box className={styles.bounce}>
              <Slide direction="up" in={true} timeout={3000}>
                <Box
                  dir="rtl"
                  bgcolor={"#050505bc"}
                  p={1}
                  borderRadius={2}
                  mt={2}
                  sx={{
                    fontSize: { xs: 11, md: 15 },
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
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#000000bf",
          }}
        >
          <Box className={styles.links} id="links_logo"></Box>
          <Fade in={showLogo} timeout={3000}>
            <Image src={mainLogo} alt="mainLogo" height={200}></Image>
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
              }}
            >
              <ButtonGroup
                sx={{
                  gap: 1,
                  mb: 2,
                  ".MuiButtonGroup-grouped": {
                    borderColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#f21a17",
                    },
                    color: " #fffffe",
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
                        sx={{ borderColor: "red", }}
                        dir="rtl"
                      >
                        {type}
                      </Button>
                    </CategoryIndictor>
                  </>
                ))}
              </ButtonGroup>
              <Box
                className="gallery"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: 320
                }}
              >
                {display.kids ? (
                  <Box >
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
                        width={450}
                        height={300}
                        pathToImg="ילדים"
                      />
                    </Box>
                  </Box>
                ) : (
                  <></>
                )}
                {display.beforeAndAfter ? (
                  <>
                    <div dir="rtl">
                      <TypeAnimation
                        cursor={false}
                        speed={75}
                        style={{ whiteSpace: 'pre-line', display: 'block' }}
                        sequence={[
                         ` ואיך אפשר בלי תוצאות של עבודה קשה של המתאמנים שלנו
                           \nבעזרת ההדרכה האישית והמקצועית של בראל!`
                        ]}
                      />
                    </div>
                    <Box className="category-gallery">
                      <Category
                        arrow={true}
                        width={450}
                        height={300}
                        pathToImg="לפני אחרי"
                      />
                    </Box>
                  </>
                ) : (
                  <></>
                )}
                {display.reviews ? (
                  <>
                    <TypeAnimation 
                     cursor={false}
                     speed={65}
                     style={{ whiteSpace: 'pre-line', height: '50px', display: 'block' }}
                    sequence={['ביקורות של המתאמנים האלופים שלנו']}
                    />
                    <Box className="category-gallery">
                      <Category
                        arrow={true}
                        width={450}
                        height={300}
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
      </div >
    </>
  );
}

export default Home;
