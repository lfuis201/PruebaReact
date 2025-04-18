import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/login.tsx"), // Esto hace que "/" apunte a login

  route("dashboard", "routes/dashboard.tsx"),

] satisfies RouteConfig;
