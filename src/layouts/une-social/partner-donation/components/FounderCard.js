// ✅ FounderCard.js atualizado com valores dinâmicos de cotas vindos do dashboard futuramente
import React from "react";
import { Card, Button, Typography } from "@mui/material";

function FounderCard() {
  const valorMinimo = 1000;
  const cotasNormais = 10;
  const cotasBonus = 10;
  const cotasComBonus = cotasNormais + cotasBonus;

  return (
    <Card
      sx={{
        p: 3,
        boxShadow: 10,
        borderRadius: "20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom style={{ color: "white" }}>
        Plano Fundador
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "white" }}>
        Valor único: R$ {valorMinimo.toFixed(2).replace(".", ",")}
      </Typography>
      <Typography variant="body2" gutterBottom style={{ color: "white" }}>
        Receba <strong>{cotasComBonus} cotas</strong> ({cotasNormais} normais + {cotasBonus} bônus)
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 3,
          backgroundColor: "white",
          color: "#2575fc",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
        onClick={() => {
          alert(
            `Você escolheu o Plano Fundador (R$ ${valorMinimo}) e receberá ${cotasComBonus} cotas.`
          );
        }}
      >
        Contribuir como Fundador
      </Button>
    </Card>
  );
}

export default FounderCard;
