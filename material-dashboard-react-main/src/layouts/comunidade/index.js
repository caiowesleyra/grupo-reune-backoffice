import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Comunidade() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Texto de boas-vindas */}
        <MDTypography variant="h6" color="white" mb={2}>
          Participe da nossa comunidade!
        </MDTypography>
        <MDTypography variant="body2" color="white" mb={4}>
          Junte-se aos nossos grupos no WhatsApp e Telegram para trocar experiências, tirar dúvidas,
          ficar por dentro das novidades e interagir com outros membros da REUNEFLIX.
        </MDTypography>

        {/* Mensagem da equipe */}
        <MDBox bgColor="dark" borderRadius="lg" p={3} mb={4} textAlign="center">
          <MDTypography variant="body1" color="white" fontStyle="italic">
            A força da REUNE está em cada pessoa que acredita, compartilha e cresce junto. Juntos
            somos mais fortes!
          </MDTypography>
          <MDTypography variant="caption" color="white" mt={1} display="block">
            — Equipe GRUPO REUNE
          </MDTypography>
        </MDBox>

        {/* Cards dos grupos */}
        <Grid container spacing={3} justifyContent="center">
          {/* Card WhatsApp */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: 408, width: 302, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <MDTypography variant="h6" gutterBottom>
                  Grupo do WhatsApp
                </MDTypography>
                <MDButton
                  variant="contained"
                  color="success"
                  href="https://chat.whatsapp.com/GjASDU9g09VFIPkC2F6Dry"
                  target="_blank"
                  fullWidth
                >
                  Entrar no Grupo
                </MDButton>
              </CardContent>
            </Card>
          </Grid>

          {/* Card Telegram */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ height: 408, width: 302, mx: "auto" }}>
              <CardMedia
                component="img"
                height="200"
                image="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt="Telegram"
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <MDTypography variant="h6" gutterBottom>
                  Grupo do Telegram
                </MDTypography>
                <MDButton
                  variant="contained"
                  color="success"
                  href="https://t.me/+cqmP1KIHqGY0MWNh"
                  target="_blank"
                  fullWidth
                >
                  Entrar no Grupo
                </MDButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Comunidade;
