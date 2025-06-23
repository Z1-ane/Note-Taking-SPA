export function renderHome() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <section class="home-page">
      <h1>Welcome to Note App 📝</h1>
      <p>This is a simple note-taking single-page app built with HTML, CSS, and JavaScript.</p>
      <a href="/notes" data-link class="go-notes">View My Notes →</a>
    </section>
  `;
}
