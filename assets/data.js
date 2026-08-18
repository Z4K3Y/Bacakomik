// ============================================
// DATA KOMIK — edit bagian ini untuk menambah komik
// Gambar bisa memakai URL atau file lokal di repo.
// ============================================
const COMICS = [
  {
    id: "Daiji_na_Musume_o_Okuridashita._Ch1",
    title: "Daiji na Musume o Okuridashita",
    author: "610cc",
    status: "Completed",
    genres: ["SMALL BREAST", "NETORARE", "NAKADASHI", "LOLI", "KEMOMIMI", "INCEST", "DRUGS", "DEFLORATION", "DAUGHTER", "COLLAR", "BLOWJOB", "BLINDFOLD", "ANAL", "AHEGAO", "TWINTAILS", "TEACHER", "SWIMSUIT", "STOCKING", "BIG PENIS"],
    description: "Seorang loli terewe.",
    cover: "assets/covers/776e4d53-c1a5-4cb0-9d7b-685ee2f6a7d7.webp",
    chapters: [
      {
        number: 3,
        title: "Daiji na Musume o Okuridashita",
        date: "2026-08-18",
        pages: ["comics/Daiji_na_Musume_o_Okuridashita._Ch1/Daiji_na_Musume_o_Okuridashita_Ch1_no01.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no02.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no03.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no04.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no05.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no06.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no07.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no08.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no09.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no10.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no11.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no12.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no13.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no14.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no15.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no16.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no17.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no18.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no19.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no20.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no21.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no22.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no23.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no24.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no25.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no26.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no27.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no28.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no29.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no30.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no31.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no32.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no33.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no34.webp", "Daiji_na_Musume_o_Okuridashita_Ch1_no35.webp"]
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
