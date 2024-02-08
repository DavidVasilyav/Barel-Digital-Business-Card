"use client";
import { Box, Fade } from "@mui/material";
import styles from "./links.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

import Link from "next/link";
const category = [
  {
    id: 0,
    name: "Whatsapp",
    link: "https://api.whatsapp.com/send/?phone=%2B972503220261&text&type=phone_number&app_absent=0",
    bgcolor: "#25D266",
    className: styles.whatsapp,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/bfitness353/",
    bgcolor: "",
    className: styles.instagram,
  },
  {
    id: 3,
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100063482096697",
    bgcolor: "",
    className: styles.facebook,
  },
];
export default function Links({ fadeIn, timeout }) {
  console.log(timeout);
  return (
    <>
      <Fade in={fadeIn} timeout={timeout}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            transform: "1s",
            transition: "1s",
          }}
        >
        
          <Box
            sx={{
              border: "solid 0px #d12e27",
              transition: "border-width 0.3s linear",
              // transitionTimingFunction: 'linear',

              ":hover": {
                borderBottomWidth: "3px",
              },
            }}
          >
            <Link href={category[1].link} target="_blank">
              <InstagramIcon
                sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}
                fontSize="large"
                className={styles.instagram_icon}
              />
            </Link>
          </Box>

          <Box
            sx={{
              border: "solid 0px #d12e27",
              transition: "border-width 0.3s linear",
              // transitionTimingFunction: 'linear',
              ":hover": {
                borderBottomWidth: "3px",
              },
            }}
          >
            <Link href={category[2].link} target="_blank">
              <FacebookIcon
                sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}
                fontSize="large"
                className={styles.facebook_icon}
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              mt: 2,
              mb: 2,
              border: "solid 0px #d12e27",
              transition: "border-width 0.3s linear",
              // transitionTimingFunction: 'linear',
              ":hover": {
                borderBottomWidth: "3px",
              },
            }}
          >
            <Link href={category[0].link} target="_blank">
              <WhatsAppIcon
                sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}
                fontSize="large"
                className={styles.whatsapp_icon}
              />
            </Link>
          </Box>
        </Box>
      </Fade>
    </>
  );
}
