import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function FounderCard() {
  const valorFundador = 1000;
  const cotasRecebidas = 20;

  return (
    <Card sx={{ padding: 4, borderRadius: "xl", boxShadow: 10, backgroundColor: "#e3f2fd" }}>
      <MDTypography variant="h5" fontWeight="bold" gutterBottom>
        👑 Plano Fundador
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Ao adquirir <strong>10 cotas (R$1.000)</strong>, você recebe <strong>{cotasRecebidas} cotas</strong> no sistema!
      </MDTypography>

      <MDBox mt={3} mb={2}>
        <MDTypography variant="body1" fontWeight="medium">
          Valor a pagar: <strong>R${valorFundador.toFixed(2)}</strong>
        </MDTypography>
      </MDBox>

      <MDBox>
        <Button variant="contained" color="primary" fullWidth>
          Tornar-se Fundador
        </Button>
      </MDBox>
    </Card>
  );
}

export default FounderCard;
