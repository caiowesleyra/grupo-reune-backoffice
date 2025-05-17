import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Dados de exemplo — você poderá trocar por dados reais depois
const ranking = [
  { id: "USR123", nome: "Caio M.", cotas: 120, premio: "🥇 Moto" },
  { id: "USR456", nome: "Larissa F.", cotas: 98, premio: "🥈 iPhone 14" },
  { id: "USR789", nome: "João P.", cotas: 90, premio: "🥉 PlayStation 5" },
  { id: "USR101", nome: "Marina T.", cotas: 70 },
  { id: "USR202", nome: "Bruno C.", cotas: 65 },
  { id: "USR303", nome: "Andreia S.", cotas: 60 },
  // ...até o 20º
];

function RankingDoadores() {
  return (
    <Card sx={{ p: 3, mt: 3 }}>
      <MDTypography variant="h6" gutterBottom>
        🏆 Ranking dos Maiores Doadores do Mês
      </MDTypography>
      <Grid container spacing={2}>
        {ranking.map((user, index) => (
          <Grid item xs={12} key={user.id}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
              bgcolor={index === 0 ? "#ffe6cc" : index === 1 ? "#f0f8ff" : index === 2 ? "#f3e6ff" : "#f9f9f9"}
              borderRadius="12px"
              boxShadow={index < 3 ? 3 : 1}
            >
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: "#2196f3", mr: 2 }}>{index + 1}</Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {user.nome} ({user.id})
                  </Typography>
                  <Typography variant="body2">Cotas: {user.cotas}</Typography>
                </Box>
              </Box>
              {user.premio && (
                <Typography variant="body1" fontWeight="medium">
                  {user.premio}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}

export default RankingDoadores;
