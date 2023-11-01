import Index from "../routes/_index";
import Announcements from "../routes/announcements";
import Puzzles from "../routes/puzzles";
import Lessons from "../routes/lessons";
import Posts from "../routes/posts";
import Profile from "../routes/profile";
import Announcement from "../routes/announcement";
import Leaderboard from "../routes/leaderboard";

const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/posts", title: "Posts", element: <Posts /> },
  { path: "/announcements", title: "Announcements", element: <Announcements /> },
  { path: "/lessons", title: "Lessons", element: <Lessons /> },
  { path: "/puzzles", title: "Puzzles", element: <Puzzles /> },
  { path: "/profile", title: undefined, element: <Profile /> },
  { path: "/announcement", title: undefined, element: <Announcement />},
  { path: "/leaderboard", title: "Leaderboard", element: <Leaderboard />}
];

export { ROUTES };
