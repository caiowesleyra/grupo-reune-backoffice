import React, { useState } from "react";
import { Card, Button, TextField, Typography } from "@mui/material";
import MDBox from "components/MDBox";

function PartnerCard() {
  const [quantidade, setQuantidade] = useState(1);
  const valorUnitario = 100;
  const valorTotal = quantidade * valorUnitario;

  const handleContribuir = () => {
    alert(`Você escolheu ${quantidade} cota(s) (R$ ${valorTotal.toFixed(2)})`);
  };

  return (
    <Card
      sx={{
        p: 3,
        boxShadow: 10,
        borderRadius: "20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #FDC830 0%, #F37335 100%)",
        color: "white",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Cota de Apoio - Partner
      </Typography>
      <Typography variant="body1" gutterBottom>
        Valor unitário: R$ {valorUnitario.toFixed(2)}
      </Typography>

      <MDBox mt={2} mb={2}>
        <TextField
          type="number"
          label="Quantidade de Cotas"
          variant="filled"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          inputProps={{ min: 1 }}
          fullWidth
        />
      </MDBox>

      <Typography variant="h6" gutterBottom>
        Total: R$ {valorTotal.toFixed(2)}
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 2, backgroundColor: "white", color: "#F37335", fontWeight: "bold" }}
        onClick={handleContribuir}
      >
        CONTRIBUIR AGORA
      </Button>
    </Card>
  );
}

export default PartnerCard;
