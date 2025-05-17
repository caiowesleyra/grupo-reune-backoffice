import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Tabs,
  Tab,
  Grid,
  Tooltip,
  Chip,
} from "@mui/material";
import { Lock, PictureAsPdf, InsertDriveFile, ShowChart, Description } from "@mui/icons-material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

const categorias = [
  { label: "Indicadores", icon: <ShowChart /> },
  { label: "Livros e PDFs", icon: <PictureAsPdf /> },
  { label: "Ferramentas", icon: <InsertDriveFile /> },
  { label: "Planilhas", icon: <InsertDriveFile /> },
  { label: "Vídeos", icon: <Description /> },
];

const materiais = {
  Indicadores: [
    {
      titulo: "Indicador RSI Pro",
      descricao: "Melhore sua análise técnica com o RSI avançado.",
      link: "#",
    },
    {
      titulo: "MACD Estratégico",
      descricao: "Versão personalizada do MACD para day trade.",
      link: "#",
      bloqueado: true,
    },
  ],
  "Livros e PDFs": [
    {
      titulo: "Trading para Iniciantes",
      descricao: "Guia completo para começar a operar no mercado.",
      link: "#",
    },
    {
      titulo: "Análise Técnica Avançada",
      descricao: "Livro exclusivo para membros Fundadores.",
      link: "#",
      bloqueado: true,
    },
  ],
  Ferramentas: [],
  Planilhas: [],
  Vídeos: [],
};

function MateriaisExtras() {
  const [categoriaAtual, setCategoriaAtual] = useState("Indicadores");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box p={3}>
        <Typography variant="h4" sx={{ color: "#ffffff !important" }} gutterBottom>
          Biblioteca de Materiais Extras
        </Typography>
        <Typography variant="body1" sx={{ color: "#ffffff !important" }} mb={4}>
          Aqui você encontra bônus exclusivos como indicadores, livros, ferramentas, planilhas e
          muito mais!
        </Typography>

        <Tabs
          value={categoriaAtual}
          onChange={(e, novaCategoria) => setCategoriaAtual(novaCategoria)}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 3, background: "#1a1a1a", borderRadius: 2 }}
        >
          {categorias.map((cat) => (
            <Tab
              key={cat.label}
              value={cat.label}
              label={
                <Box display="flex" alignItems="center" gap={1}>
                  {cat.icon} {cat.label}
                </Box>
              }
            />
          ))}
        </Tabs>

        <Grid container spacing={3}>
          {materiais[categoriaAtual].length === 0 ? (
            <Typography sx={{ color: "#ffffff !important" }}>
              Nenhum material disponível nesta categoria ainda.
            </Typography>
          ) : (
            materiais[categoriaAtual].map((mat, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ background: mat.bloqueado ? "#333" : "#222" }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color:
                          mat.titulo === "Indicador RSI Pro" || mat.titulo === "MACD Estratégico"
                            ? "#4caf50 !important"
                            : "#ffffff !important",
                      }}
                    >
                      {mat.titulo} {mat.bloqueado && <Lock fontSize="small" color="warning" />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999" }}>
                      {mat.descricao}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {mat.bloqueado ? (
                      <Tooltip title="Exclusivo para Fundadores ou Partners">
                        <Chip label="Bloqueado" color="warning" icon={<Lock />} />
                      </Tooltip>
                    ) : (
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        href={mat.link}
                        target="_blank"
                      >
                        Baixar
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>

        <Box mt={6}>
          <Typography variant="h6" sx={{ color: "#ffffff !important" }} gutterBottom>
            Sugira novos materiais!
          </Typography>
          <Typography variant="body2" sx={{ color: "#ffffff !important" }} mb={1}>
            Tem algo que gostaria de ver aqui? Envie sua sugestão!
          </Typography>
          <Button variant="outlined" color="secondary">
            Enviar sugestão
          </Button>
        </Box>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default MateriaisExtras;
