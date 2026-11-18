const openSearch = document.querySelector(".search-open");
const dialog = document.querySelector(".search-dialog");

if (openSearch && dialog && typeof dialog.showModal === "function") {
  const input = dialog.querySelector(".search-input");
  const status = dialog.querySelector(".search-status");
  const results = dialog.querySelector(".search-results");
  const pages = [...document.querySelectorAll(".main-nav a")];
  let indexPromise;

  async function loadIndex() {
    return (await Promise.all(pages.map(async (link) => {
      const current = link.getAttribute("aria-current") === "page";
      let page = document;

      if (!current) {
        const response = await fetch(link.href, { mode: "same-origin" });
        if (!response.ok) throw new Error("Could not load " + link.textContent);
        page = new DOMParser().parseFromString(await response.text(), "text/html");
      }

      return [...page.querySelectorAll("[data-search]")].map((entry) => ({
        title: entry.querySelector("h1, h2, h3, .event-title")?.textContent.trim() || link.textContent,
        page: link.textContent,
        url: link.href + "#" + entry.id,
        text: entry.textContent.toLowerCase().replace(/\s+/g, " ").trim(),
      }));
    }))).flat();
  }

  function getIndex() {
    if (!indexPromise) {
      indexPromise = loadIndex().catch((error) => {
        indexPromise = undefined;
        throw error;
      });
    }
    return indexPromise;
  }

  async function showResults() {
    const query = input.value.toLowerCase().trim();
    results.replaceChildren();

    if (query.length < 2) {
      status.textContent = "Enter at least two characters.";
      return;
    }

    status.textContent = "Searching…";
    let index;
    try {
      index = await getIndex();
    } catch {
      if (query === input.value.toLowerCase().trim()) {
        status.textContent = "Search is unavailable. Try again or use the site navigation.";
      }
      return;
    }
    if (query !== input.value.toLowerCase().trim() || !dialog.open) return;

    const terms = query.split(/\s+/);
    const matches = index.filter((entry) => terms.every((term) => entry.text.includes(term)));
    status.textContent = matches.length === 1 ? "1 match" : matches.length + " matches";
    const items = matches.map((entry) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      const page = document.createElement("small");
      link.href = entry.url;
      link.textContent = entry.title;
      page.textContent = entry.page;
      item.append(link, page);
      return item;
    });
    results.replaceChildren(...items);
  }

  openSearch.hidden = false;
  openSearch.addEventListener("click", () => {
    dialog.showModal();
    input.focus();
    showResults();
  });
  input.addEventListener("input", showResults);
  results.addEventListener("click", (event) => {
    if (event.target.closest("a")) dialog.close();
  });
}
