// src/pages/free-donation/index.js

import React from "react";
import bgImage from "assets/images/free-donation-bg.jpg";

// MUI Components
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Custom Components
import MDBox from "components/MDBox";

function FreeDonationPage() {
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
      <Card sx={{ padding: 4, maxWidth: 500, width: "100%", opacity: 0.95 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} textAlign="center">
          Seja um <span style={{ color: "#2e7d32" }}>LIVRE DOADOR</span>
        </Typography>

        <Typography variant="body1" textAlign="center" mb={3}>
          Doe com amor. Cada real faz a diferença. 🙏
        </Typography>

        <TextField fullWidth label="Nome completo" margin="normal" />
        <TextField fullWidth label="Valor da doação (mínimo R$1)" type="number" margin="normal" />

        <Typography variant="body2" mt={2} mb={1}>
          Envie seu Pix para: <strong>doar@gruporeune.com.br</strong>
        </Typography>

        <Typography variant="body2" mt={2}>
          Envie o comprovante:
        </Typography>
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          style={{ marginTop: 8, marginBottom: 16 }}
        />

        <hr style={{ margin: "20px 0" }} />

        <Typography variant="h6" textAlign="center" mb={1}>
          Quer ser voluntário?
        </Typography>

        <TextField fullWidth label="Nome completo" margin="normal" />
        <TextField fullWidth label="WhatsApp com DDD" margin="normal" />
        <TextField fullWidth label="Cidade e Estado" margin="normal" />

        <Button fullWidth variant="contained" color="success" sx={{ mt: 2 }}>
          Enviar Cadastro
        </Button>
      </Card>
    </MDBox>
  );
}

export default FreeDonationPage;
