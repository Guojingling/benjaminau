import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
                route("orders", "./orders/orders.tsx"),
] satisfies RouteConfig;
