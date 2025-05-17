import React from "react";
import Grid from "@mui/material/Grid";

// Custom Components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Importando os cards customizados
import TotalCotas from "../../dashboard/components/TotalCotas";
import PercentualCota from "../../dashboard/components/PercentualCota";
import PremioAcumulado from "./components/PremioAcumulado";
import PartnerCard from "./components/PartnerCard";
import FounderCard from "./components/FounderCard";

// Imagem de fundo
import bgImage from "assets/images/partner-bg.jpg";

function PartnerDonation() {
  return (
    <MDBox
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "start",
        justifyContent: "flex-start",
        px: 2,
        py: 6,
        pl: "270px", // Adicionando padding-left para compensar a sidebar
      }}
    >
      <MDBox width="100%">
        <Grid container spacing={3}>
          {/* Cards superiores */}
          <Grid item xs={12} md={4}>
            <TotalCotas />
          </Grid>
          <Grid item xs={12} md={4}>
            <PercentualCota />
          </Grid>
          <Grid item xs={12} md={4}>
            <PremioAcumulado />
          </Grid>

          {/* Título das contribuições */}
          <Grid item xs={12}>
            <MDTypography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "white", textAlign: "center", mt: 4 }}
            >
              Escolha sua forma de contribuição:
            </MDTypography>
          </Grid>

          {/* Cartões de contribuição */}
          <Grid item xs={12} md={6}>
            <PartnerCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <FounderCard />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default PartnerDonation;
