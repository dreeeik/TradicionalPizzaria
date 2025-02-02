"use client";

import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function InstagramButton() {
  return (
    <Button
      variant="contained"
      sx={{
        background:
          "linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
        color: "#fff",
        width: "120px",
        height: "50px",
        borderRadius: "25px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        },
        "@media (max-width: 600px)": {
          width: "100px",
          height: "40px",
          borderRadius: "20px",
        },
      }}
      onClick={() =>
        window.open(
          "https://www.instagram.com/pizzaria_tradicional1?igsh=MWNia3p5dW0zbjFraA%3D%3D&utm_source=qr ",
          "_blank"
        )
      }
    >
      <InstagramIcon
        sx={{
          color: "#fff",
          fontSize: "30px",
          "@media (max-width: 600px)": {
            fontSize: "25px",
          },
        }}
      />
    </Button>
  );
}
