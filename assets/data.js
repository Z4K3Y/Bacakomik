// ============================================
// DATA KOMIK — edit bagian ini untuk menambah komik
// Gambar bisa memakai URL atau file lokal di repo.
// ============================================
const COMICS = [
  {
    id: "sample-comic",
    title: "The Last Hero",
    author: "Nama Author",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy"],
    description: "Seorang pahlawan terakhir memulai perjalanan untuk menyelamatkan kotanya.",
    cover: "assets/covers/last-hero.svg",
    chapters: [
      {
        number: 3,
        title: "Awal Perjalanan",
        date: "2026-08-18",
        pages: ["comics/sample-comic/001.svg", "comics/sample-comic/002.svg", "comics/sample-comic/003.svg"]
      }
    ]
  },
  {
    id: "moonlight",
    title: "Moonlight Café",
    author: "Komikus Demo",
    status: "Complete",
    genres: ["Romance", "Slice of Life"],
    description: "Cerita hangat tentang sebuah kafe kecil yang hanya buka saat malam.",
    cover: "assets/covers/moonlight.svg",
    chapters: [
      {
        number: 1,
        title: "Malam Pertama",
        date: "2026-08-10",
        pages: ["comics/sample-comic/001.svg", "comics/sample-comic/002.svg"]
      }
    ]
  },
  {
    id: "neon-city",
    title: "Neon City",
    author: "Komikus Demo",
    status: "Ongoing",
    genres: ["Action", "Sci-Fi"],
    description: "Kota masa depan, hacker misterius, dan sebuah rahasia yang harus dibongkar.",
    cover: "assets/covers/neon.svg",
    chapters: [
      {
        number: 1,
        title: "Signal",
        date: "2026-08-01",
        pages: ["comics/sample-comic/003.svg"]
      }
    ]
  },
  {
    id: "forest-spirit",
    title: "Forest Spirit",
    author: "Komikus Demo",
    status: "Ongoing",
    genres: ["Fantasy", "Adventure"],
    description: "Petualangan seorang anak yang dapat berbicara dengan roh hutan.",
    cover: "assets/covers/forest.svg",
    chapters: [
      {
        number: 1,
        title: "Roh Penjaga",
        date: "2026-07-25",
        pages: ["comics/sample-comic/002.svg"]
      }
    ]
  }
];

const GENRES = [...new Set(COMICS.flatMap(c => c.genres))].sort();
