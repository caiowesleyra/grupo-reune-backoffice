import React, { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function PartnerCard() {
  const [quantidade, setQuantidade] = useState(1);
  const valorCota = 100;

  const handleQuantidadeChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantidade(isNaN(value) ? 1 : value);
  };

  const valorTotal = quantidade * valorCota;

  return (
    <Card sx={{ padding: 4, borderRadius: "xl", boxShadow: 10 }}>
      <MDTypography variant="h5" fontWeight="bold" gutterBottom>
        💼 Cota Partner
      </MDTypography>
      <MDTypography variant="body2" color="text">
        Adquira quantas cotas quiser. Cada cota custa <strong>R$100</strong>.
      </MDTypography>

      <MDBox mt={3} mb={2}>
        <TextField
          label="Quantidade de Cotas"
          type="number"
          value={quantidade}
          onChange={handleQuantidadeChange}
          fullWidth
          InputProps={{ inputProps: { min: 1 } }}
        />
      </MDBox>

      <MDTypography variant="body1" fontWeight="medium">
        Valor total: <strong>R${valorTotal.toFixed(2)}</strong>
      </MDTypography>

      <MDBox mt={3}>
        <Button variant="contained" color="success" fullWidth>
          Contribuir Agora
        </Button>
      </MDBox>
    </Card>
  );
}

export default PartnerCard;
