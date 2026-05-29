const root = document.documentElement;
const savedTheme = localStorage.getItem("blog-theme");

if (savedTheme) {
  root.dataset.theme = savedTheme;
}

document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = nextTheme;
  localStorage.setItem("blog-theme", nextTheme);
});

const searchInput = document.querySelector("[data-post-search]");
const cards = Array.from(document.querySelectorAll("[data-post-card]"));

searchInput?.addEventListener("input", (event) => {
  const keyword = event.target.value.trim().toLowerCase();

  cards.forEach((card) => {
    const haystack = `${card.dataset.title || ""} ${card.dataset.tags || ""}`;
    card.hidden = keyword.length > 0 && !haystack.includes(keyword);
  });
});
