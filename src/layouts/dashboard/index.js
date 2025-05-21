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
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import DonationActivityTimeline from "./components/DonationActivityTimeline";
import lucroEspecialistasHoje from "layouts/dashboard/data/lucroEspecialistas";
import PhotoCarousel from "layouts/dashboard/components/PhotoCarousel";
import RankingDoadores from "layouts/dashboard/components/ranking/RankingDoadores";
import TargetOfTheDay from "layouts/dashboard/components/TargetOfTheDay";
import SpecialistProfitCard from "layouts/dashboard/components/SpecialistProfit";
import WithdrawableBalanceCard from "layouts/dashboard/components/WithdrawableBalanceCard";
import SocialImpactCard from "layouts/dashboard/components/SocialImpactCard";

// ✅ NOVOS CARDS CONECTADOS AO BANCO
import CardTotalCotas from "components/CardTotalCotas";
import CardPorcentagemCota from "components/CardPorcentagemCota";
import PremioDoDiaCard from "layouts/dashboard/components/PremioDoDiaCard";
import SaldoColaboradorCard from "layouts/dashboard/components/SaldoColaboradorCard"; // ✅ NOVO

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <CardTotalCotas />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <CardPorcentagemCota />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <PremioDoDiaCard />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <SaldoColaboradorCard />
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
