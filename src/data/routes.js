import Index from "../routes/_index";
import Announcements from "../routes/announcements";
import Puzzles from "../routes/puzzles";
import Lessons from "../routes/lessons";
import Posts from "../routes/posts";
import Profile from "../routes/profile";

const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/posts", title: "Posts", element: <Posts /> },
  { path: "/announcements", title: "Announcements", element: <Announcements /> },
  { path: "/lessons", title: "Lessons", element: <Lessons /> },
  { path: "/puzzles", title: "Puzzles", element: <Puzzles /> },
  { path: "/profile", title: undefined, element: <Profile /> }
];

export { ROUTES };
