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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      px={1.5}
      py={2}
    >
      <MDTypography variant="body2" fontWeight="regular" sx={{ color: "#fff", fontSize: size.sm }}>
        © 2025, criado por <strong>GRUPO REUNE</strong> por uma web melhor
      </MDTypography>
    </MDBox>
  );
}

// Removemos `company` e `links` por não serem mais utilizados
Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
