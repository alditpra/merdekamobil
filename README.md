# Merdeka Mobil 🚗

Website untuk car dealership "Merdeka Mobil" di Purwokerto - Jual beli mobil bekas terpercaya.

## ✨ Fitur

- 📱 **Responsive Design** - Mobile-first dengan tampilan optimal di semua device
- 🌙 **Dark Mode** - Toggle dark/light mode dengan persistent state
- 🎨 **Glassmorphic UI** - Modern glassmorphic design dengan brand colors
- 🔍 **Search & Filter** - Cari mobil berdasarkan merk, tahun, harga, dll
- 👁️ **Quick View Modal** - Preview mobil tanpa berpindah halaman
- 📊 **Google Sheets Integration** - Update data via spreadsheet (no API needed!)
- 📷 **Flexible Image Hosting** - Support self-hosted, CDN, atau cloud storage (1-5 foto per mobil)
- 🎥 **YouTube Video** - Embed video review mobil (optional)
- 💬 **WhatsApp Integration** - Floating button + pre-filled message
- ⚡ **Fast Performance** - Static site generation untuk loading super cepat
- 🔖 **SEO Optimized** - Meta tags, Open Graph, Schema.org markup

## 🚀 Tech Stack

- **Framework**: Astro 4.x (Static Site Generation)
- **Styling**: Tailwind CSS 3.x dengan custom design system
- **Data Source**: Google Sheets (Published as CSV)
- **Image Hosting**: Self-hosted / CDN (Cloudinary, Imgur, GitHub+jsDelivr)
- **Deployment**: Vercel (Free Tier)
- **Typography**: Inter dari Google Fonts

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/merdekamobil.git
cd merdekamobil

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env dengan Google Sheets CSV URLs Anda

# Run development server
npm run dev
```

## 🔧 Setup Google Sheets

### 1. Buat Spreadsheet

Buat Google Spreadsheet dengan 2 sheets:

#### Sheet 1: "Cars"
Kolom yang diperlukan (20 kolom):
- `id` - Unique ID (CAR001, CAR002, dst)
- `brand` - Merk (Toyota, Honda, dst)
- `model` - Model/tipe
- `year` - Tahun produksi
- `price` - Harga (angka, tanpa separator)
- `mileage` - Kilometer
- `transmission` - Manual / Automatic
- `fuel` - Bensin / Diesel
- `color` - Warna
- `description` - Deskripsi singkat
- `features` - Fitur (pisah dengan `;`)
- `status` - available / sold
- `image1` - Image URL atau path (REQUIRED)
- `image2` - Image URL atau path (optional)
- `image3` - Image URL atau path (optional)
- `image4` - Image URL atau path (optional)
- `image5` - Image URL atau path (optional)
- `video_url` - YouTube link (optional)
- `featured` - TRUE / FALSE
- `sold_date` - Tanggal terjual (YYYY-MM-DD)
- `date_added` - Tanggal ditambahkan (YYYY-MM-DD)

#### Sheet 2: "Settings"
Format: 2 kolom (`key`, `value`)
- `whatsapp_number`: 628158141112
- `business_name`: Merdeka Mobil
- `business_tagline`: Jual Beli Mobil Bekas Terpercaya
- `business_address`: Alamat lengkap
- `business_city`: Purwokerto

### 2. Publish Spreadsheet as CSV

1. File > Share > **Publish to web**
2. Pilih sheet "Cars" > Format: **Comma-separated values (.csv)**
3. Click **Publish** > Copy URL
4. Ulangi untuk sheet "Settings"
5. Paste URLs ke `.env`:

```env
PUBLIC_CARS_CSV_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0
PUBLIC_SETTINGS_CSV_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=123
```

### 3. Setup Image Hosting

**Option 1: Self-Host (Recommended)**
1. Buat folder `/public/images/cars/` di project
2. Upload foto mobil ke folder tersebut
3. Di spreadsheet, gunakan path: `/images/cars/nama-foto.jpg`

**Option 2: Free CDN**
- **Cloudinary**: Upload di [cloudinary.com](https://cloudinary.com) → copy public URL
- **Imgur**: Upload di [imgur.com](https://imgur.com/upload) → copy direct link  
- **GitHub**: Buat repo images → gunakan jsDelivr CDN

Paste URL atau path ke kolom `image1`, `image2`, dst di spreadsheet.

## 🔄 Update Website Content

Ada **3 cara** untuk rebuild website setelah update spreadsheet:

### Opsi 1: Manual Redeploy (Paling Simple)
1. Update data di Google Sheets
2. Login ke [Vercel Dashboard](https://vercel.com)
3. Pilih project > Click **Redeploy**
4. Done! ✅

### Opsi 2: Browser Bookmarklet (Recommended)
1. Setup Vercel Deploy Hook (one-time):
   - Vercel Dashboard > Settings > Git > Deploy Hooks
   - Create hook, copy URL
2. Buat bookmark di browser:
   - Name: `🚀 Rebuild Merdeka Mobil`
   - URL: 
   ```javascript
   javascript:(function(){fetch('WEBHOOK_URL',{method:'POST'}).then(()=>alert('✅ Rebuilding!'));})();
   ```
3. Usage: Update spreadsheet > Click bookmark > Done! ✅

### Opsi 3: Automated (GitHub Actions)
Auto-rebuild setiap 5-15 menit. Setup via `.github/workflows/scheduled-rebuild.yml`.

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎨 Brand Colors

- **Primary (Navy Blue)**: #000080
- **Accent (Red)**: #FF0000
- **Secondary (Burgundy)**: #9E2A3A
- **Neutral (Dark Brown)**: #3A2525

## 📱 Pages

- `/` - Homepage (hero, stats, featured cars)
- `/mobil-tersedia` - Available cars listing dengan filter
- `/mobil-terjual` - Sold cars listing
- `/mobil/[id]` - Car detail page
- `/kontak` - Contact page

## 🚀 Deployment ke Vercel

1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Add environment variables (CSV URLs)
4. Deploy! ✅

Website akan live di: `https://merdekamobil.vercel.app`

## 📧 Contact

WhatsApp: [0815-8141-112](https://wa.me/628158141112)

## 📄 License

MIT License - Free to use and modify

---

**Built with ❤️ using Astro & Tailwind CSS**
