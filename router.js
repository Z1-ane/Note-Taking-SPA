import { renderHome } from "./pages/home.js";
import { renderNotes } from "./pages/notes.js";
import { renderNewNote } from "./pages/newNote.js";
import { renderAbout } from "./pages/about.js";
import { renderNotFound } from "./pages/notfound.js";

//creating a map of routers:
const routes = {
  "/": renderHome,
  "/notes": renderNotes,
  "/new": renderNewNote,
  "/about": renderAbout,
  "/notfound": renderNotFound,
};

// writing a router function:
export function router() {
  const path = window.location.pathname;
  const render = routes[path] || renderNotFound;
  router();
}
