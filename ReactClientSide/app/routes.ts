import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("order","routes/order.tsx"),
    route("cafemenu","routes/cafemenu.tsx"),
    route("login","routes/login.tsx"),
    route("register/userprofile","register/userprofile.tsx"),
    route("register","register/signup.tsx")
] satisfies RouteConfig;
