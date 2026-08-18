const $ = s => document.querySelector(s);

function card(c) {
  const latest = c.chapters?.[c.chapters.length - 1];
  return `<article class="comic-card">
    <a href="reader.html?comic=${encodeURIComponent(c.id)}&chapter=${latest?.number || 1}" class="cover-wrap">
      <img src="${c.cover}" alt="Cover ${c.title}" loading="lazy">
      <span class="badge">${c.status}</span>
    </a>
    <div class="card-body">
      <h3><a href="reader.html?comic=${encodeURIComponent(c.id)}&chapter=${latest?.number || 1}">${c.title}</a></h3>
      <p>${c.author}</p>
      <div class="card-meta"><span>${c.genres[0]}</span><span>Ch. ${latest?.number || 0}</span></div>
    </div>
  </article>`;
}

$("#comicGrid").innerHTML = COMICS.map(card).join("");
$("#popularGrid").innerHTML = [...COMICS].reverse().map(card).join("");
$("#genreList").innerHTML = GENRES.map(g => `<a class="genre" href="#latest" onclick="filterGenre('${g}')">${g}</a>`).join("");

window.filterGenre = function (genre) {
  $("#comicGrid").innerHTML = COMICS.filter(c => c.genres.includes(genre)).map(card).join("");
  $("#latest").scrollIntoView({behavior:"smooth"});
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
$("#themeBtn").onclick = () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
};

$(".menu-btn").onclick = () => $(".nav").classList.toggle("open");
