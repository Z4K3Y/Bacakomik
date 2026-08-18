// ============================================
// DATA KOMIK
// ============================================

// Folder tempat semua halaman Chapter 1 berada
const comicFolder = "comics/Daiji_na_Musume_o_Okuridashita._Ch1/";

// Otomatis membuat:
// no01.webp
// no02.webp
// no03.webp
// ...
// no35.webp
const pages = Array.from({ length: 35 }, (_, i) => {
  const number = String(i + 1).padStart(2, "0");

  return `${comicFolder}Daiji_na_Musume_o_Okuridashita_Ch1_no${number}.webp`;
});


const COMICS = [
  {
    id: "Daiji_na_Musume_o_Okuridashita._Ch1",

    title: "Daiji na Musume o Okuridashita",

    author: "610cc",

    status: "Completed",

    genres: [
      "SMALL BREAST",
      "NETORARE",
      "NAKADASHI",
      "LOLI",
      "KEMOMIMI",
      "INCEST",
      "DRUGS",
      "DEFLORATION",
      "DAUGHTER",
      "COLLAR",
      "BLOWJOB",
      "BLINDFOLD",
      "ANAL",
      "AHEGAO",
      "TWINTAILS",
      "TEACHER",
      "SWIMSUIT",
      "STOCKING",
      "BIG PENIS"
    ],

    description: "Seorang loli terewe.",

    cover: "assets/covers/776e4d53-c1a5-4cb0-9d7b-685ee2f6a7d7.webp",

    chapters: [
      {
        number: 1,

        title: "Daiji na Musume o Okuridashita",

        date: "2026-08-18",

        pages: pages
      }
    ]
  },


  // ============================================
  // KOMIK 2
  // ============================================

  {
    id: "moonlight",

    title: "Moonlight Café",

    author: "Komikus Demo",

    status: "Complete",

    genres: [
      "Romance",
      "Slice of Life"
    ],

    description:
      "Cerita hangat tentang sebuah kafe kecil yang hanya buka saat malam.",

    cover: "assets/covers/moonlight.svg",

    chapters: [
      {
        number: 1,

        title: "Malam Pertama",

        date: "2026-08-10",

        pages: [
          "comics/sample-comic/001.svg",
          "comics/sample-comic/002.svg"
        ]
      }
    ]
  },


  // ============================================
  // KOMIK 3
  // ============================================

  {
    id: "neon-city",

    title: "Neon City",

    author: "Komikus Demo",

    status: "Ongoing",

    genres: [
      "Action",
      "Sci-Fi"
    ],

    description:
      "Kota masa depan, hacker misterius, dan sebuah rahasia yang harus dibongkar.",

    cover: "assets/covers/neon.svg",

    chapters: [
      {
        number: 1,

        title: "Signal",

        date: "2026-08-01",

        pages: [
          "comics/sample-comic/003.svg"
        ]
      }
    ]
  },


  // ============================================
  // KOMIK 4
  // ============================================

  {
    id: "forest-spirit",

    title: "Forest Spirit",

    author: "Komikus Demo",

    status: "Ongoing",

    genres: [
      "Fantasy",
      "Adventure"
    ],

    description:
      "Petualangan seorang anak yang dapat berbicara dengan roh hutan.",

    cover: "assets/covers/forest.svg",

    chapters: [
      {
        number: 1,

        title: "Roh Penjaga",

        date: "2026-07-25",

        pages: [
          "comics/sample-comic/002.svg"
        ]
      }
    ]
  }
];


// ============================================
// DAFTAR GENRE OTOMATIS
// ============================================

const GENRES = [
  ...new Set(
    COMICS.flatMap(comic => comic.genres)
  )
].sort();