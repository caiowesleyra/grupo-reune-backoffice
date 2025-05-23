import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
import CountUp from "react-countup";

function PremioAcumulado() {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario && usuario.id) {
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/premios-acumulados/${usuario.id}`)
        .then((res) => {
          setTotal(res.data.total || 0);
        })
        .catch((err) => {
          console.error("Erro ao buscar prêmio acumulado:", err);
          setTotal(0);
        });
    }
  }, []);

  return (
    <Card sx={{ p: 2, height: "100%", background: "#2ecc71" }}>
      <MDBox display="flex" alignItems="center" mb={1}>
        <MDBox
          variant="gradient"
          bgColor="white"
          color="white"
          width="3rem"
          height="3rem"
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr={2}
        >
          <Icon fontSize="medium" sx={{ color: "#2ecc71" }}>
            emoji_events
          </Icon>
        </MDBox>
        <MDTypography variant="button" fontWeight="medium" color="white">
          PRÊMIO ACUMULADO TOTAL
        </MDTypography>
      </MDBox>
      <MDTypography variant="h5" fontWeight="bold" color="white">
        R$ {total !== null ? <CountUp end={total} duration={1.2} decimals={2} decimal="," /> : "Carregando..."}
      </MDTypography>
      <MDTypography variant="caption" color="white">
        Total recebido até hoje
      </MDTypography>
    </Card>
  );
}

export default PremioAcumulado;
