import React from "react";
import bgImage from "assets/images/reuneflix-netflix-style.jpg";

// MUI Components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

// Custom Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function SalaReuneflix() {
  return (
    <MDBox
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Card sx={{ padding: 4, textAlign: "center", maxWidth: 500, opacity: 0.96 }}>
        <MDTypography variant="h4" fontWeight="bold" mb={1}>
          Bem-vindo à Sala Reuneflix!
        </MDTypography>
        <MDTypography variant="body1" color="text" mb={3}>
          Aqui você acessa todos os cursos e vídeos da nossa plataforma exclusiva.
          <br />
          Entre na área de membros abaixo.
        </MDTypography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://www.gruporeune.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar Área de Membros
        </Button>
      </Card>
    </MDBox>
  );
}

export default SalaReuneflix;
