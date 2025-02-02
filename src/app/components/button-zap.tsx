"use client";

import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsAppButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#25D366",
        color: "#fff",
        width: "120px",
        height: "50px",
        "@media (max-width: 600px)": {
          width: "100px",
          height: "40px",
        },
      }}
      onClick={() => window.open("https://wa.me/5512991980766", "_blank")}
    >
      <WhatsAppIcon style={{ fontSize: "30px" }} />
    </Button>
  );
}
