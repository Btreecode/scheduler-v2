import Index from "../routes/_index";
import Contact from "../routes/contact";
import NewPage from "../routes/new-page";

const ROUTES = [
  { path: "/", title: "Home", element: <Index /> },
  { path: "/contact", title: "Contact", element: <Contact /> },
  { path: "/newpage", title: "New Page", element: <NewPage /> }
];

export { ROUTES };
