"use client";

import Button from "@mui/material/Button";
import Image from "next/image";
import Ifood from "../../../public/ifood.jpg";

export default function IfoodButton() {
  return (
    <Button
      variant="contained"
      sx={{
        background: "linear-gradient(45deg, #EA1D2C, #C81A28)",
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
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() =>
        window.open(
          "https://www.ifood.com.br/delivery/caraguatatuba-sp/pizza-tradicional-centro/b370d506-8cd5-4f6a-91c3-5de617e4f505?utm_medium=share ",
          "_blank"
        )
      }
    >
      <Image
        alt="Ifood"
        src={Ifood}
        fill
        style={{
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    </Button>
  );
}
