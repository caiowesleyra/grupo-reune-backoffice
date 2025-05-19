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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Icon from "@mui/material/Icon";

// Importando as páginas
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Suas páginas personalizadas
import UneSocial from "layouts/une-social";
import SalaReuneflix from "layouts/sala-reuneflix";
import Colaborador from "layouts/colaborador";
import Comunidade from "layouts/comunidade";
import Extrato from "layouts/extrato";
import Saques from "layouts/saques";
import Materiais from "layouts/materiais";
import FreeDonation from "layouts/une-social/free-donation";
import PartnerDonation from "layouts/une-social/partner-donation";
import Cadastro from "layouts/cadastro";

// Importa o componente de rota protegida
import PrivateRoute from "components/PrivateRoute";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Cadastro",
    key: "cadastro",
    icon: <Icon fontSize="small">person_add</Icon>,
    route: "/cadastro",
    component: <Cadastro />,
  },
  {
    type: "collapse",
    name: "Perfil",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "UNE SOCIAL",
    key: "une-social",
    icon: <Icon fontSize="small">volunteer_activism</Icon>,
    collapse: [
      {
        name: "Free Donation",
        key: "free-donation",
        icon: <Icon fontSize="small">card_giftcard</Icon>,
        route: "/une-social/free-donation",
        component: (
          <PrivateRoute>
            <FreeDonation />
          </PrivateRoute>
        ),
      },
      {
        name: "Partner Donation",
        key: "partner-donation",
        icon: <Icon fontSize="small">volunteer_activism</Icon>,
        route: "/une-social/partner-donation",
        component: (
          <PrivateRoute>
            <PartnerDonation />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    type: "collapse",
    name: "Sala Reuneflix",
    key: "sala-reuneflix",
    icon: <Icon fontSize="small">live_tv</Icon>,
    route: "/sala-reuneflix",
    component: (
      <PrivateRoute>
        <SalaReuneflix />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Colaborador",
    key: "colaborador",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/colaborador",
    component: (
      <PrivateRoute>
        <Colaborador />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Comunidade",
    key: "comunidade",
    icon: <Icon fontSize="small">forum</Icon>,
    route: "/comunidade",
    component: (
      <PrivateRoute>
        <Comunidade />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Extrato",
    key: "extrato",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/extrato",
    component: (
      <PrivateRoute>
        <Extrato />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Saques",
    key: "saques",
    icon: <Icon fontSize="small">account_balance_wallet</Icon>,
    route: "/saques",
    component: (
      <PrivateRoute>
        <Saques />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Materiais Extras",
    key: "materiais",
    icon: <Icon fontSize="small">menu_book</Icon>,
    route: "/materiais",
    component: (
      <PrivateRoute>
        <Materiais />
      </PrivateRoute>
    ),
  },
];

export default routes;
