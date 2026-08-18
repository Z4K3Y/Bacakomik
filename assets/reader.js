// ============================================
// READER.JS
// GitHub Pages Comic Reader
// ============================================

"use strict";


// ============================================
// AMBIL PARAMETER URL
// ============================================

const params = new URLSearchParams(window.location.search);

const comicId = params.get("comic");
const chapterParam = params.get("chapter");


// ============================================
// CARI ELEMEN HTML
// ============================================

const title = document.querySelector("#readerTitle");
const label = document.querySelector("#chapterLabel");
const pagesContainer = document.querySelector("#pages");

const prev = document.querySelector("#prevBtn");
const next = document.querySelector("#nextBtn");

const prevBottom = document.querySelector("#prevBottom");
const nextBottom = document.querySelector("#nextBottom");


// ============================================
// CEK ELEMEN READER
// ============================================

if (!pagesContainer) {
  console.error(
    'Element "#pages" tidak ditemukan di reader.html'
  );
}


// ============================================
// CARI KOMIK
// ============================================

let comic = null;

if (comicId) {
  comic = COMICS.find(
    c => String(c.id) === String(comicId)
  );
}


// Jika comic tidak ditemukan,
// gunakan komik pertama sebagai fallback.

if (!comic) {
  console.warn(
    "Comic tidak ditemukan:",
    comicId
  );

  comic = COMICS[0];
}


// ============================================
// CEK DATA KOMIK
// ============================================

if (!comic) {
  showError(
    "Data komik tidak ditemukan."
  );

  throw new Error(
    "COMICS kosong atau tidak tersedia."
  );
}


// ============================================
// CARI CHAPTER
// ============================================

let index = comic.chapters.findIndex(
  chapter =>
    String(chapter.number) ===
    String(chapterParam)
);


// Jika chapter tidak ditemukan,
// gunakan chapter pertama.

if (index < 0) {
  index = 0;
}


// ============================================
// SET TITLE
// ============================================

document.title =
  `${comic.title} — KomikKu`;

if (title) {
  title.textContent =
    comic.title;
}


// ============================================
// NORMALISASI PATH GAMBAR
// ============================================

function getImagePath(src) {

  if (!src) {
    return "";
  }

  src = String(src).trim();

  // URL absolut
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:")
  ) {
    return src;
  }


  // Jika sudah dimulai dengan /
  // berarti dianggap dari root website.

  if (src.startsWith("/")) {
    return src;
  }


  /*
   * GitHub Pages:
   *
   * https://z4k3y.github.io/Bacakomik/
   *
   * Kita ambil base URL dari halaman saat ini.
   */

  const basePath =
    window.location.pathname
      .substring(
        0,
        window.location.pathname.lastIndexOf("/") + 1
      );


  /*
   * reader.html berada di root:
   *
   * /Bacakomik/reader.html
   *
   * sehingga:
   *
   * comics/xxx/file.webp
   *
   * menjadi:
   *
   * /Bacakomik/comics/xxx/file.webp
   */

  return new URL(
    src,
    window.location.origin +
      basePath
  ).href;
}


// ============================================
// ERROR HANDLER
// ============================================

function showError(message) {

  if (!pagesContainer) {
    return;
  }

  pagesContainer.innerHTML = `
    <div class="reader-error">
      <h2>⚠️ Gagal memuat komik</h2>

      <p>
        ${escapeHTML(message)}
      </p>

      <button
        onclick="location.reload()"
        class="reload-btn"
      >
        Muat Ulang
      </button>
    </div>
  `;
}


// ============================================
// ESCAPE HTML
// ============================================

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


// ============================================
// RENDER READER
// ============================================

function render() {

  const chapter =
    comic.chapters[index];


  // ------------------------------------------
  // Validasi chapter
  // ------------------------------------------

  if (!chapter) {

    showError(
      "Chapter tidak ditemukan."
    );

    return;
  }


  // ------------------------------------------
  // Label chapter
  // ------------------------------------------

  if (label) {

    label.textContent =
      `Chapter ${chapter.number} — ${chapter.title}`;
  }


  // ------------------------------------------
  // Validasi halaman
  // ------------------------------------------

  if (
    !Array.isArray(chapter.pages) ||
    chapter.pages.length === 0
  ) {

    showError(
      "Chapter ini belum memiliki halaman."
    );

    return;
  }


  // ------------------------------------------
  // Bersihkan reader
  // ------------------------------------------

  pagesContainer.innerHTML = "";


  // ------------------------------------------
  // Buat gambar satu per satu
  // ------------------------------------------

  chapter.pages.forEach(
    (src, i) => {

      const img =
        document.createElement("img");


      // Path gambar
      const imagePath =
        getImagePath(src);


      img.src =
        imagePath;


      img.alt =
        `${comic.title} - Chapter ${chapter.number} - Halaman ${i + 1}`;


      img.className =
        "comic-page";


      /*
       * Dua halaman pertama dimuat langsung.
       * Sisanya lazy loading.
       */

      img.loading =
        i < 2
          ? "eager"
          : "lazy";


      img.decoding =
        "async";


      /*
       * Jika gambar gagal dimuat
       */

      img.onerror = function () {

        console.error(
          "Gagal memuat gambar:",
          imagePath
        );


        this.classList.add(
          "image-error"
        );


        this.alt =
          `Gagal memuat halaman ${i + 1}`;


        /*
         * Jangan membuat browser
         * mencoba terus-menerus.
         */

        this.removeAttribute(
          "src"
        );


        const errorBox =
          document.createElement("div");


        errorBox.className =
          "page-error";


        errorBox.innerHTML = `
          <strong>
            ⚠️ Halaman ${i + 1} tidak dapat dimuat
          </strong>

          <small>
            ${escapeHTML(imagePath)}
          </small>

          <button>
            Coba Lagi
          </button>
        `;


        errorBox
          .querySelector("button")
          .onclick = () => {

            this.src =
              imagePath;

            errorBox.remove();
          };


        pagesContainer
          .insertBefore(
            errorBox,
            this.nextSibling
          );
      };


      /*
       * Tambahkan gambar ke reader
       */

      pagesContainer.appendChild(
        img
      );
    }
  );


  // ------------------------------------------
  // Status tombol chapter
  // ------------------------------------------

  const atStart =
    index === 0;

  const atEnd =
    index ===
    comic.chapters.length - 1;


  [
    prev,
    prevBottom
  ].forEach(button => {

    if (button) {

      button.disabled =
        atStart;
    }
  });


  [
    next,
    nextBottom
  ].forEach(button => {

    if (button) {

      button.disabled =
        atEnd;
    }
  });


  // ------------------------------------------
  // Scroll ke atas
  // ------------------------------------------

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });


  // ------------------------------------------
  // Debug
  // ------------------------------------------

  console.log(
    "================================"
  );

  console.log(
    "Komik:",
    comic.title
  );

  console.log(
    "Chapter:",
    chapter.number
  );

  console.log(
    "Jumlah halaman:",
    chapter.pages.length
  );

  console.log(
    "Halaman pertama:",
    getImagePath(
      chapter.pages[0]
    )
  );

  console.log(
    "================================"
  );
}


// ============================================
// NAVIGASI CHAPTER
// ============================================

function go(delta) {

  const newIndex =
    index + delta;


  if (
    newIndex >= 0 &&
    newIndex <
      comic.chapters.length
  ) {

    index =
      newIndex;


    render();
  }
}


// ============================================
// EVENT BUTTON
// ============================================

if (prev) {

  prev.onclick =
    () => go(-1);
}


if (prevBottom) {

  prevBottom.onclick =
    () => go(-1);
}


if (next) {

  next.onclick =
    () => go(1);
}


if (nextBottom) {

  nextBottom.onclick =
    () => go(1);
}


// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key ===
      "ArrowLeft"
    ) {

      go(-1);
    }


    if (
      event.key ===
      "ArrowRight"
    ) {

      go(1);
    }
  }
);


// ============================================
// MULAI READER
// ============================================

render();