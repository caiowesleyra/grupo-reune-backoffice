import React from "react";
import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";

function SocialImpactCard() {
  const contribuicoes = 0;
  const meta = 100000;
  const progresso = (contribuicoes / meta) * 100;

  return (
    <Card
      sx={{
        backgroundColor: "#fff3e0", // Laranja bem claro
        borderRadius: 3,
        boxShadow: 4,
        height: "100%", // Preenche altura máxima
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Box
            sx={{
              backgroundColor: "#fb8c00",
              color: "white",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: "bold",
              mr: 2,
            }}
          >
            ♻
          </Box>
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Impacto Social Total
          </Typography>
        </Box>

        <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
          {"R$ "}
          {contribuicoes.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={1}>
          {"Meta: R$ "}
          {meta.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={1}>
          {"Progresso: "}
          {progresso.toFixed(1)}%
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progresso}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#ffe0b2",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#fb8c00",
              transition: "width 2s ease-in-out",
            },
          }}
        />
      </CardContent>
    </Card>
  );
}

export default SocialImpactCard;
