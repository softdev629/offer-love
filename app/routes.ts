import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("latest", "routes/latest.tsx"),
  route("offers", "routes/offers.tsx"),
  route("myoffers", "routes/myoffers.tsx"),
] satisfies RouteConfig;
