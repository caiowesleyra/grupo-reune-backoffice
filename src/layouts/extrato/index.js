// src/layouts/extrato/index.js

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { MonetizationOn, ArrowDownward, ArrowUpward } from "@mui/icons-material";

const extratoGanhos = [
  {
    tipo: "pr",
    descricao: "Você ganhou R$ 10,00 pela divisão do prêmio recompensa de hoje.",
    data: "13/05/2025 10:30",
    icone: <MonetizationOn color="success" />,
    bgColor: "#e8f5e9", // verde claro
  },
  {
    tipo: "indicacao",
    descricao: "Você recebeu R$ 100,00 pela contribuição direta do usuário: joaodasilva.",
    data: "12/05/2025 15:20",
    icone: <MonetizationOn color="success" />,
    bgColor: "#e8f5e9",
  },
];

const extratoFinanceiro = [
  {
    tipo: "contribuicao",
    descricao: "Você contribuiu com 5 cotas no valor de R$ 500,00.",
    data: "11/05/2025 14:00",
    icone: <ArrowUpward color="primary" />,
    bgColor: "#e3f2fd", // azul claro
  },
  {
    tipo: "saque",
    descricao: "Você realizou um saque no valor de R$ 200,00.",
    data: "10/05/2025 09:45",
    icone: <ArrowDownward color="error" />,
    bgColor: "#ffebee", // vermelho claro
  },
];

function Extrato() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        {/* Histórico de Ganhos */}
        <Box mb={4}>
          <Typography variant="h5" style={{ color: "white" }} gutterBottom>
            Histórico de Ganhos
          </Typography>
          <Card>
            <CardContent>
              {extratoGanhos.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  mb={2}
                  p={2}
                  borderRadius={2}
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.icone}
                  <Box ml={2}>
                    <Typography variant="body2">{item.descricao}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.data}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>

        {/* Contribuições e Saques */}
        <Box mb={4}>
          <Typography variant="h5" style={{ color: "white" }} gutterBottom>
            Contribuições e Saques
          </Typography>
          <Card>
            <CardContent>
              {extratoFinanceiro.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  mb={2}
                  p={2}
                  borderRadius={2}
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.icone}
                  <Box ml={2}>
                    <Typography variant="body2">{item.descricao}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {item.data}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Extrato;
