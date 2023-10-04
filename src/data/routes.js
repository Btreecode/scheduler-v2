import Index from "../routes/_index";
import Announcements from "../routes/announcements";
import Games from "../routes/games";
import Links from "../routes/links";
import Posts from "../routes/posts";
import Profile from "../routes/profile";

const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/posts", title: "Posts", element: <Posts /> },
  { path: "/announcements", title: "Announcements", element: <Announcements /> },
  { path: "/links", title: "Links", element: <Links /> },
  { path: "/games", title: "Games", element: <Games /> },
  { path: "/profile", title: undefined, element: <Profile /> }
];

export { ROUTES };
