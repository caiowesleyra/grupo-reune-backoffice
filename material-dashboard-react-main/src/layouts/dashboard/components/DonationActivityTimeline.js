// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Timeline item component
import TimelineItem from "examples/Timeline/TimelineItem";

// Lista de atividades simuladas
const activities = [
  {
    type: "donation",
    user: "joaodasilva",
    value: 15,
    timestamp: "12 Mai 2025 às 01:32",
  },
  {
    type: "up",
    user: "carlos",
    position: 2,
    timestamp: "12 Mai 2025 às 01:10",
  },
  {
    type: "down",
    user: "fernanda",
    position: 3,
    timestamp: "12 Mai 2025 às 01:05",
  },
  {
    type: "new",
    user: "luana2025",
    timestamp: "12 Mai 2025 às 00:55",
  },
];

function DonationActivityTimeline() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Atividades Recentes dos Doadores
        </MDTypography>
        <MDTypography variant="button" color="text" fontWeight="regular">
          Atualizações em tempo real
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        {activities.map((activity, index) => {
          let icon = "notifications";
          let color = "info";
          let title = "";
          switch (activity.type) {
            case "donation":
              icon = "volunteer_activism";
              color = "success";
              title = `${activity.user} doou ${activity.value} cotas`;
              break;
            case "up":
              icon = "trending_up";
              color = "primary";
              title = `${activity.user} subiu para o ${activity.position}º lugar`;
              break;
            case "down":
              icon = "trending_down";
              color = "error";
              title = `${activity.user} caiu para o ${activity.position}º lugar`;
              break;
            case "new":
              icon = "person_add";
              color = "warning";
              title = `Novo doador entrou: ${activity.user}`;
              break;
            default:
              break;
          }

          return (
            <TimelineItem
              key={index}
              color={color}
              icon={icon}
              title={title}
              dateTime={activity.timestamp}
              lastItem={index === activities.length - 1}
            />
          );
        })}
      </MDBox>
    </Card>
  );
}

export default DonationActivityTimeline;
