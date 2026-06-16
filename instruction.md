File ini adalah "Manual Penerjemahan" untuk AI. Ini memberitahu AI bagaimana cara membaca folder Stitch Anda, aturan teknis coding, font, warna, dan target Lighthouse.

Instruction Set: Front-End Development Warkop Pancong Yeye
1. Peran & Konteks
Anda adalah Senior UX Engineer. Tugas Anda adalah mengubah aset desain dari folder Stitch menjadi kode HTML, CSS, dan JS yang produksi-ready.

2. Sumber Daya Desain (MCP Stitch Folder)
Anda memiliki akses ke folder hasil ekspor Google Stitch.

Lokasi Aset: ./stitch-assets/ (Baca semua gambar, layout, dan spesifikasi di dalam folder ini).
Panduan Visual: Desain harus mereplikasi tata letak dari aset Stitch, dengan gaya referensi "Restaurant Food Blog" (Kategori ikon lingkaran, teks judul besar, nuansa hangat).
3. Design System & Spesifikasi Teknis
A. Tipografi (Wajib Patuh)
Judul Banner & Heading (H1, H2): Gunakan font Playfair Display (Fallback: Georgia). Weight: 700.
Navigasi, Harga, Teks Pendukung & Body (P, span, a): Gunakan font Poppins (Fallback: Roboto / Inter). Weight: 400 (Regular) & 600 (Semi-bold).
Panggil Google Fonts via di dengan parameter display=swap.
B. Palet Warna (Earth Tones)
--primary-color: #8B5E3C; (Cokelat Terracotta - Untuk CTA, Heading)
--secondary-color: #F5F0EB; (Krem Gading - Background utama)
--accent-color: #7D8A6E; (Hijau Sage - Elemen sekunder/badge)
--text-main: #2D2D2D; (Hitam pekat - High Contrast untuk Accessibility)
--text-secondary: #5A5A5A; (Abu-abu gelap)
C. Komponen UI
Kartu Produk (Product Cards): Rounded corners 16px, drop shadow halus 0 4px 6px rgba(0,0,0,0.05).
Ikon Kategori (Circle Icons): Bulat sempurna (border-radius: 50%), berwarna solid atau memiliki outline, dengan teks deskripsi di bawahnya.
Tombol CTA: Tinggi minimal 48px (Fitts's Law untuk mobile), border-radius 8px, latar --primary-color, teks putih.
4. Aturan Kode & Target Lighthouse 100
A. HTML & Semantic Web
Gunakan elemen semantik: <header>, <nav>, <main>, <section>, <article>, <footer>.
WAJIB menyuntikkan Schema Markup (JSON-LD) tipe CafeOrCoffeeShop di dalam <head> untuk SEO lokal Bogor.
Setiap gambar WAJIB memiliki atribut alt yang deskriptif (misal: "Kue Pancong Original Warkop Pancong Yeye").
B. Performance & Core Web Vitals
WAJIB gunakan loading="lazy" pada semua tag <img> di bawah fold (below the fold).
WAJIB tentukan width dan height eksplisit pada semua <img> untuk mencegah Cumulative Layout Shift (CLS).
Jangan gunakan framework CSS berat (Tailwind/Bootstrap) jika tidak perlu. Tulis Vanilla CSS yang ringan untuk memaksimalkan skor Performance.
Gambar dari folder Stitch yang berupa PNG/JPG besar, konversi referensinya ke format .webp atau pastikan CSS meng-handle rasio aspeknya agar tidak pecah.
C. Accessibility (a11y - WCAG AA)
Rasio kontras warna teks ke background harus tinggi (Hindari teks abu-abu muda di background putih).
Tambahkan aria-label pada link WhatsApp dan tombol navigasi yang hanya berisi ikon.
5. Alur Eksekusi
Baca struktur dan gambar di dalam ./stitch-assets/.
Buat file index.html, style.css, dan script.js.
Implementasikan layout sesuai aset Stitch dengan mematuhi Design System di atas.
Pastikan semua konten dari prd.md (Alamat, No HP, Harga) tercantum dengan benar.
Review kode sendiri untuk memastikan tidak ada pelanggaran aturan Lighthouse/Accessibility.

D. Fitur Interaktif: Image Gallery / Lightbox
Fungsi: Semua gambar pada section Menu dan Galeri (jika ada) harus dapat diklik.
Mekanisme:
Saat gambar diklik, tampilkan overlay modal full-screen dengan background gelap (opacity 0.9).
Tampilkan gambar versi besar di tengah layar.
Sediakan tombol 'X' di pojok kanan atas untuk menutup.
Modal juga harus bisa ditutup dengan menekan tombol Escape pada keyboard (untuk Accessibility).
Aturan Performa: Jangan gunakan library JavaScript eksternal (seperti Fancybox atau Lightbox2) untuk menjaga skor Performance tetap 100. Tulis logika sederhana menggunakan Vanilla JavaScript dan CSS Transisi.
E. Aturan Perilaku AI (Strict Constraints)
Jangan berhalusinasi: Jika ada bagian data (seperti daftar menu spesifik) yang tidak ada di prd.md maupun di aset stitch-assets, gunakan placeholder yang logis (contoh: "Menu Pancong Spesial") dengan tag [Data Menu Belum Ada] di komentar HTML, dan tanyakan kepada user di akhir output.
Zero Assumption: Jika Anda bingung dengan struktur folder Stitch atau format gambar, hentikan proses dan minta instruksi lebih lanjut kepada user.
