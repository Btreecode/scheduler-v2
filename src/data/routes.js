import Index from "../routes/_index";
import Timetable from "../routes/timetable";

const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/timetable", title: "Timetable", element: <Timetable />}
];

export { ROUTES };
