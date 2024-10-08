import Index from "../routes/_index";
import HeatMap from "../routes/heat-map";
import Timetable from "../routes/timetable";

const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/timetable", title: "Timetable", element: <Timetable />},
  { path: "/heatmap", title: "Heatmap", element: <HeatMap />}
];

export { ROUTES };
