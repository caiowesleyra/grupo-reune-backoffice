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

import { useEffect, useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom"; // ADICIONADO useNavigate
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Custom components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Custom examples
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Importando a nova logo
import logo from "assets/images/reune1.png";

// Context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";

function Sidenav({ color, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const pathname = location.pathname;
  const collapseName = pathname.replace("/", "");

  const [openCollapse, setOpenCollapse] = useState(null);

  const navigate = useNavigate(); // ← Hook para redirecionar

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  const toggleCollapse = (key) => {
    setOpenCollapse((prev) => (prev === key ? null : key));
  };

  const renderRoutes = (routes) =>
    routes.map(({ type, name, icon, title, noCollapse, key, href, route, collapse }) => {
      if (type === "collapse") {
        const isActiveParent =
          collapseName === key || (collapse || []).some((r) => r.key === collapseName);

        if (collapse && Array.isArray(collapse)) {
          return (
            <SidenavCollapse
              key={key}
              name={name}
              icon={icon}
              active={openCollapse === key || isActiveParent}
              onClick={() => toggleCollapse(key)}
            >
              {(openCollapse === key || isActiveParent) &&
                collapse.map((subItem) => (
                  <NavLink key={subItem.key} to={subItem.route}>
                    <SidenavCollapse
                      name={subItem.name}
                      icon={subItem.icon}
                      active={subItem.key === collapseName}
                    />
                  </NavLink>
                ))}
            </SidenavCollapse>
          );
        }

        return href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : (
          <NavLink key={key} to={route}>
            <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
          </NavLink>
        );
      } else if (type === "title") {
        return (
          <MDTypography
            key={key}
            color={textColor}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </MDTypography>
        );
      } else if (type === "divider") {
        return (
          <Divider
            key={key}
            light={
              (!darkMode && !whiteSidenav && !transparentSidenav) ||
              (darkMode && !transparentSidenav && whiteSidenav)
            }
          />
        );
      }

      return null;
    });

  const handleLogout = () => {
    localStorage.clear(); // Remove tokens e dados locais
    navigate("/auth/login"); // Redireciona para tela de login
  };

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>

        {/* LOGO DA REUNE */}
        <MDBox
          component={NavLink}
          to="/"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MDBox
            component="img"
            src={logo}
            alt="Logo REUNE"
            width="140px"
            height="auto"
            sx={{ mb: 1 }}
          />
        </MDBox>
      </MDBox>

      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />
      <List>{renderRoutes(routes)}</List>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "info",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
