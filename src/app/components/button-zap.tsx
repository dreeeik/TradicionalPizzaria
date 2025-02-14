"use client";

import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton() {
  return (
    <Button
      variant="contained"
      sx={{
        background: "linear-gradient(45deg, #25D366, #128C7E)",
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
      onClick={() => window.open("https://wa.me/5512981113726", "_blank")}
    >
      <WhatsAppIcon
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
