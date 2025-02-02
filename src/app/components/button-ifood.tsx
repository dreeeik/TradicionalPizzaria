"use client";

import Button from "@mui/material/Button";
import Image from "next/image";
import Ifood from "../../../public/ifood.jpg";

export default function IfoodButton() {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#EA1D2C",
        color: "#fff",
        width: "120px",
        height: "50px",
        "@media (max-width: 600px)": {
          width: "100px",
          height: "40px",
        },
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
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
    </Button>
  );
}
