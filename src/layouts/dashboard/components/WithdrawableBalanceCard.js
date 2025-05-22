import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
import CountUp from "react-countup";

function WithdrawableBalanceCard() {
  const [saldo, setSaldo] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.id) {
      axios
        .get(`https://grupo-reune-backend.onrender.com/api/saldo-disponivel/${usuario.id}`)
        .then((res) => {
          setSaldo(res.data.saldo || 0);
        })
        .catch((err) => {
          console.error("Erro ao buscar saldo disponível:", err);
          setSaldo(0);
        });
    } else {
      console.warn("Usuário não identificado.");
      setSaldo(0);
    }
  }, []);

  return (
    <Card sx={{ p: 2, height: "100%", background: "#f39c12" }}>
      <MDBox display="flex" alignItems="center" mb={1}>
        <MDBox
          variant="gradient"
          bgColor="white"
          width="3rem"
          height="3rem"
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr={2}
        >
          <Icon fontSize="medium" sx={{ color: "#f39c12" }}>
            account_balance_wallet
          </Icon>
        </MDBox>
        <MDTypography variant="button" fontWeight="medium" color="white">
          SALDO DISPONÍVEL PARA SAQUE
        </MDTypography>
      </MDBox>
      <MDTypography variant="h5" fontWeight="bold" color="white">
        R${" "}
        {saldo !== null ? (
          <CountUp end={saldo} duration={1.2} decimals={2} decimal="," />
        ) : (
          "Carregando..."
        )}
      </MDTypography>
      <MDTypography variant="caption" color="white">
        (Prêmio do Dia + Comissão de Indicação)
      </MDTypography>
    </Card>
  );
}

export default WithdrawableBalanceCard;
