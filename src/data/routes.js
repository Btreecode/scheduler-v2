import Index from "../routes/_index";
import Announcements from "../routes/announcements";
import Games from "../routes/games";
import Profile from "../routes/profile";
import Posts from "../routes/posts";

const ROUTES = [
  { path: "/", title: "Home", element: <Index /> },
  { path: "/posts", title: "Posts", element: <Posts /> },
  { path: "/announcements", title: "Announcements", element: <Announcements /> },
  { path: "/profile", title: "Profile", element: <Profile /> },
  { path: "/games", title: "Games", element: <Games /> }
];

export { ROUTES };
