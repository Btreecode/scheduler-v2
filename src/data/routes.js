import Index from "../routes/_index";
import HeatMap from "../routes/heat-map";

const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/heatmap", title: "Heatmap", element: <HeatMap />}
];

export { ROUTES };
