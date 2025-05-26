import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import axios from "axios";

function ColaboradorIndependente() {
  const [indicados, setIndicados] = useState([]);
  const [saldoComissoes, setSaldoComissoes] = useState(0);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.id) {
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/indicacoes-diretas/${usuario.id}`)
        .then((res) => setIndicados(res.data.indicados))
        .catch((err) => console.error("Erro ao buscar indicados:", err));

      axios
        .get(`https://grupo-reune-backend.onrender.com/api/comissoes-totais/${usuario.id}`)
        .then((res) => setSaldoComissoes(res.data.total))
        .catch((err) => console.error("Erro ao buscar comissões:", err));
    }
  }, []);

  const linkDeIndicacao = "https://www.gruporeune.com.br/?ref=seuusuario";

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="person_add"
                title="Total de Diretos"
                count={indicados.length}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Indicações diretas no projeto",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="paid"
                title="Saldo Total de Indicações"
                count={`R$ ${saldoComissoes.toFixed(2)}`}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Comissões acumuladas como colaborador",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        <MDBox mt={4} p={2} borderRadius="lg" border="1px solid #ccc" textAlign="center">
          <MDTypography variant="h6" mb={2} sx={{ color: "#fff" }}>
            Seu link de indicação
          </MDTypography>
          <MDInput
            value={linkDeIndicacao}
            fullWidth
            readOnly
            sx={{
              mb: 2,
              input: { color: "white" }, // Cor do texto do link para branco
            }}
          />
          <MDButton
            variant="gradient"
            color="info"
            onClick={() => navigator.clipboard.writeText(linkDeIndicacao)}
          >
            Copiar Link
          </MDButton>
          <MDTypography variant="caption" display="block" mt={2} sx={{ color: "#fff" }}>
            Compartilhe esse link para indicar pessoas e ganhar comissões automáticas de 10% por
            cada cota adquirida!
          </MDTypography>
        </MDBox>

        <MDBox mt={6}>
          <MDTypography variant="h6" mb={2} sx={{ color: "#fff" }}>
            Indicados Diretos
          </MDTypography>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <MDBox component="table" width="100%" sx={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        color: "#fff",
                        textAlign: "left",
                        padding: "12px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      Nome/Login
                    </th>
                    <th
                      style={{
                        color: "#fff",
                        textAlign: "left",
                        padding: "12px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      Status
                    </th>
                    <th
                      style={{
                        color: "#fff",
                        textAlign: "left",
                        padding: "12px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      Cotas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {indicados.map((item, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          color: "#fff",
                          padding: "12px",
                          borderBottom: "1px solid #444",
                        }}
                      >
                        {item.nome}
                      </td>
                      <td
                        style={{
                          color: "#fff",
                          padding: "12px",
                          borderBottom: "1px solid #444",
                        }}
                      >
                        <MDBox
                          component="span"
                          px={2}
                          py={0.5}
                          borderRadius="md"
                          color="white"
                          fontWeight="bold"
                          sx={{
                            backgroundColor:
                              item.status === "Fundador"
                                ? "#4caf50"
                                : item.status === "Partner"
                                ? "#2196f3"
                                : "#9e9e9e",
                          }}
                        >
                          {item.status}
                        </MDBox>
                      </td>
                      <td
                        style={{
                          color: "#fff",
                          padding: "12px",
                          borderBottom: "1px solid #444",
                        }}
                      >
                        {item.cotas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ColaboradorIndependente;
