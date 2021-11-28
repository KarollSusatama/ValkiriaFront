// core components
import Dashboard from "views/admin/Dashboard.js";
import Icons from "views/admin/Icons.js";
import Login from "views/auth/Login.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Tables from "views/admin/Tables.js";
// @material-ui/icons components
import AccountCircle from "@material-ui/icons/AccountCircle";
import Dns from "@material-ui/icons/Dns";
import FlashOn from "@material-ui/icons/FlashOn";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";
import Grain from "@material-ui/icons/Grain";
import LocationOn from "@material-ui/icons/LocationOn";
import Palette from "@material-ui/icons/Palette";
import Person from "@material-ui/icons/Person";
import Tv from "@material-ui/icons/Tv";
import VpnKey from "@material-ui/icons/VpnKey";

var routes = [
  {
    path: "/index/:user_id",
    name: "Inicio",
    icon: Tv,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  }, 
  {
    path: "/table/:user_id",
    name: "Registro de mujeres",
    icon: FormatListBulleted,
    iconColor: "Error",
    component: Tables,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "Perfil de la usuaria",
  //   icon: Person,
  //   iconColor: "WarningLight",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: VpnKey,
  //   iconColor: "Info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: AccountCircle,
  //   iconColor: "ErrorLight",
  //   component: Register,
  //   layout: "/auth",
  // },
  {
    divider: true,
  },
  {
    title: "Información de ayuda a la mujer",
  },
  {
    href:
      "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
    name: "Linea 155 Victimas de violencia ",
    icon: FlashOn,
  },
  {
    href:
      "https://api.whatsapp.com/send?phone=573007551846",
    name: "Linea Purpura Whatsapp 3007551846",
    icon: Palette,
  },
  {
    href:
      "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
    name: "Linea Purpura telefóno 195",
    icon: Dns,
  },
];
export default routes;
