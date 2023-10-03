import Index from "../routes/_index";
import Announcements from "../routes/announcements";
import Games from "../routes/games";
import NewPage from "../routes/new-page";
import Posts from "../routes/posts";

const ROUTES = [
  { path: "/", title: "Home", element: <Index /> },
  { path: "/newpage", title: "New Page", element: <NewPage /> },
  { path: "/announcements", title: "Announcements", element: <Announcements /> },
  { path: "/posts", title: "Posts", element: <Posts /> },
  { path: "/games", title: "Games", element: <Games /> }
];

export { ROUTES };
