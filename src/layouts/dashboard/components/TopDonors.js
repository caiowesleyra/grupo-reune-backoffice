// layouts/dashboard/components/TopDonors.js

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import rankingData from "layouts/dashboard/data/rankingData";

function TopDonors() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Ranking de Doadores do Mês 💎
        </MDTypography>
      </MDBox>
      <Divider />
      <MDBox p={2}>
        {rankingData.map((user, index) => (
          <MDBox key={user.id} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
            <MDTypography variant="button" fontWeight="medium">
              {index + 1}º - {user.nome}
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text">
              {user.cotas} cotas
            </MDTypography>
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}

export default TopDonors;
