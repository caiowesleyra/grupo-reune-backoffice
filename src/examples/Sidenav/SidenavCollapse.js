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

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// @mui material components
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import Collapse from "@mui/material/Collapse";

// Custom components
import MDBox from "components/MDBox";

// Estilos personalizados
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";

// Contexto
import { useMaterialUIController } from "context";

function SidenavCollapse({ icon, name, active, children, ...rest }) {
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  // Corrigido: estado de abertura sincronizado corretamente
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Sempre que "active" mudar, sincroniza a abertura
    if (active) setOpen(true);
  }, [active]);

  const handleToggle = () => {
    if (children) setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem component="li" disablePadding sx={{ display: "block" }} onClick={handleToggle}>
        <MDBox
          {...rest}
          sx={(theme) =>
            collapseItem(theme, {
              active: active || open,
              transparentSidenav,
              whiteSidenav,
              darkMode,
              sidenavColor,
            })
          }
        >
          <ListItemIcon
            sx={(theme) =>
              collapseIconBox(theme, {
                transparentSidenav,
                whiteSidenav,
                darkMode,
                active: active || open,
              })
            }
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active: active || open })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          <ListItemText
            primary={name}
            sx={(theme) =>
              collapseText(theme, {
                miniSidenav,
                transparentSidenav,
                whiteSidenav,
                active: active || open,
              })
            }
          />

          {children && (
            <Icon
              sx={{
                ml: "auto",
                transition: "transform 0.3s ease",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              expand_more
            </Icon>
          )}
        </MDBox>
      </ListItem>

      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 4 }}>
            {children}
          </List>
        </Collapse>
      )}
    </>
  );
}

SidenavCollapse.defaultProps = {
  active: false,
  children: null,
};

SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.node,
};

export default SidenavCollapse;
