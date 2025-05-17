/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// IMPORTS PADRÕES
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// DADOS E COMPONENTES CUSTOMIZADOS
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import DonationActivityTimeline from "./components/DonationActivityTimeline";
import lucroEspecialistasHoje from "layouts/dashboard/data/lucroEspecialistas";
import PhotoCarousel from "layouts/dashboard/components/PhotoCarousel";
import RankingDoadores from "layouts/dashboard/components/ranking/RankingDoadores";
import TargetOfTheDay from "layouts/dashboard/components/TargetOfTheDay";
import SpecialistProfitCard from "layouts/dashboard/components/SpecialistProfit"; // ✅ ALTERADO AQUI
import WithdrawableBalanceCard from "layouts/dashboard/components/WithdrawableBalanceCard";
import SocialImpactCard from "layouts/dashboard/components/SocialImpactCard"; // ✅ NOVO CARD IMPORTADO

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const totalCotas = 100;
  const minhasCotas = 15;
  const porcentagemCota = ((minhasCotas / totalCotas) * 100).toFixed(2);
  const cotasVendidasHoje = 8;
  const comissao = cotasVendidasHoje * 10;

  const crescimentoCotas = {
    labels: ["03/05", "04/05", "05/05", "06/05", "07/05", "08/05", "09/05"],
    datasets: {
      label: "Cotas indicadas",
      data: [2, 4, 1, 5, 3, 6, 8],
    },
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="person_add"
                title="TOTAL DE COTAS"
                count={minhasCotas}
                percentage={{
                  color: "warning",
                  amount: "",
                  label: "VOCÊ É UM FUNDADOR",
                }}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="weekend"
                title="% DA SUA COTA"
                count={`${porcentagemCota}%`}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "DESDE A ÚLTIMA SEMANA",
                }}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="PRÊMIO DO DIA"
                count="R$ 705,00"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "ONTEM",
                }}
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="leaderboard"
                title="SALDO DE COLABORADOR"
                count={`R$ ${comissao > 0 ? comissao.toFixed(2) : "0,00"}`}
                percentage={{
                  color: "primary",
                  amount: "",
                  label: "10% sobre cotas indicadas hoje",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <SpecialistProfitCard />
              </MDBox>
              <MDBox mb={3}>
                <TargetOfTheDay />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <PhotoCarousel />
              </MDBox>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <WithdrawableBalanceCard />
              </MDBox>
              <MDBox mb={3}>
                <SocialImpactCard />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <RankingDoadores />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DonationActivityTimeline />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>

      <MDBox mt={4} display="flex" justifyContent="center" />
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
