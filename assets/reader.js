const params = new URLSearchParams(location.search);
const comic = COMICS.find(c => c.id === params.get("comic")) || COMICS[0];
let index = Math.max(0, comic.chapters.findIndex(ch => String(ch.number) === params.get("chapter")));
if (index < 0) index = comic.chapters.length - 1;

const title = document.querySelector("#readerTitle");
const label = document.querySelector("#chapterLabel");
const pages = document.querySelector("#pages");
const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");
const prevBottom = document.querySelector("#prevBottom");
const nextBottom = document.querySelector("#nextBottom");

document.title = `${comic.title} — KomikKu`;
title.textContent = comic.title;

function render() {
  const ch = comic.chapters[index];
  label.textContent = `Chapter ${ch.number} — ${ch.title}`;
  pages.innerHTML = ch.pages.map((src, i) =>
    `<img src="${src}" alt="${comic.title} halaman ${i + 1}" loading="${i > 1 ? "lazy" : "eager"}">`
  ).join("");
  const atStart = index === 0, atEnd = index === comic.chapters.length - 1;
  [prev, prevBottom].forEach(b => b.disabled = atStart);
  [next, nextBottom].forEach(b => b.disabled = atEnd);
  window.scrollTo({top:0, behavior:"smooth"});
}
function go(delta) {
  const n = index + delta;
  if (n >= 0 && n < comic.chapters.length) { index = n; render(); }
}
prev.onclick = prevBottom.onclick = () => go(-1);
next.onclick = nextBottom.onclick = () => go(1);
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") go(-1);
  if (e.key === "ArrowRight") go(1);
});
render();
