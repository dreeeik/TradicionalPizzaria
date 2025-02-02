import { Stack } from "@mui/material";
import Image from "next/image";
import Tradicional from "../../public/Tradicional.jpg";
import Fundo from "../../public/Fundo.jpg";
import WhatsAppButton from "./components/button-zap";
import IfoodButton from "./components/button-ifood";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${Fundo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack
        alignItems="center"
        spacing={2}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "auto",
            aspectRatio: "1/1",
          }}
        >
          <Image
            alt="tradicionalLogo"
            src={Tradicional}
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <IfoodButton />
          <WhatsAppButton />
        </Stack>
      </Stack>
    </div>
  );
}
