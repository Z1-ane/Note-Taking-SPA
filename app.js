import { router } from "./router.js";

function handleClick(e) {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.history.pushState(null, null, href);
    router();
  }
}

document.addEventListener("click", handleClick);
window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);
