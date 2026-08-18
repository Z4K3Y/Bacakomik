# KomikKu — GitHub Pages Comic Template

Template website komik statis: **HTML + CSS + JavaScript**, tanpa database dan tanpa backend.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub.
2. Upload seluruh isi folder ini ke repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Simpan. GitHub akan memberikan URL website.

## Menambah komik

Edit `assets/data.js`:

```js
{
  id: "komik-baru",
  title: "Judul Komik",
  author: "Nama Author",
  status: "Ongoing",
  genres: ["Action", "Fantasy"],
  description: "Deskripsi.",
  cover: "assets/covers/cover-baru.jpg",
  chapters: [
    {
      number: 1,
      title: "Chapter Pertama",
      date: "2026-08-18",
      pages: [
        "comics/komik-baru/001.jpg",
        "comics/komik-baru/002.jpg"
      ]
    }
  ]
}
```

Buat folder `comics/komik-baru/`, lalu masukkan gambar halaman komik di sana.

## Struktur

- `index.html` — beranda/katalog
- `reader.html` — pembaca komik
- `404.html` — halaman error
- `assets/style.css` — semua styling
- `assets/data.js` — data komik
- `assets/app.js` — katalog & tema
- `assets/reader.js` — logic reader
- `assets/covers/` — cover komik
- `comics/` — halaman komik

## Catatan

Template ini tidak menyediakan login, upload, komentar, database, atau panel admin. GitHub Pages hanya menyajikan file statis.
