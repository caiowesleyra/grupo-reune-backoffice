// layouts/dashboard/components/DonationActivityTimeline.js

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TimelineItem from "examples/Timeline/TimelineItem";
import axios from "axios";

function DonationActivityTimeline() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("https://grupo-reune-backend.onrender.com/api/atividades-recentes")
      .then((res) => {
        setActivities(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar atividades recentes:", err);
      });
  }, []);

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

          switch (activity.tipo) {
            case "donation":
              icon = "volunteer_activism";
              color = "success";
              title = `${activity.usuario} doou ${activity.cotas} cotas`;
              break;
            case "up":
              icon = "trending_up";
              color = "primary";
              title = `${activity.usuario} subiu para o ${activity.posicao}º lugar`;
              break;
            case "down":
              icon = "trending_down";
              color = "error";
              title = `${activity.usuario} caiu para o ${activity.posicao}º lugar`;
              break;
            case "new":
              icon = "person_add";
              color = "warning";
              title = `Novo doador entrou: ${activity.usuario}`;
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
