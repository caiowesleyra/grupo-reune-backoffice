import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import CountUp from "react-countup";

function WithdrawableBalanceCard() {
  const premioDoDia = 705.0;
  const comissaoHoje = 80.0;
  const saldoDisponivel = premioDoDia + comissaoHoje;

  return (
    <Card sx={{ p: 2, height: "100%", background: "#f39c12" }}>
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
          <Icon fontSize="medium" sx={{ color: "#f39c12" }}>
            account_balance_wallet
          </Icon>
        </MDBox>
        <MDTypography variant="button" fontWeight="medium" color="white">
          SALDO DISPONÍVEL PARA SAQUE
        </MDTypography>
      </MDBox>
      <MDTypography variant="h5" fontWeight="bold" color="white">
        R$ <CountUp end={saldoDisponivel} duration={1.2} decimals={2} decimal="," />
      </MDTypography>
      <MDTypography variant="caption" color="white">
        (Prêmio do Dia + Comissão de Indicação)
      </MDTypography>
    </Card>
  );
}

export default WithdrawableBalanceCard;
