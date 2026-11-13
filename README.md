# راهگشا — گروه حقوقی راهگشا (Next.js)

وب‌سایت گروه حقوقی راهگشا؛ ساخت‌شده با **Next.js (App Router)**، React 19، TypeScript، Tailwind CSS v4، Framer Motion و GSAP.

سایت به‌صورت یک **سرویس Node.js** روی سرور اجرا می‌شود (نه export استاتیک):
- صفحه‌های ثابت (`/`، `/about`، `/services`، …) هنگام build پیش‌رندر و از سمت سرور سرو می‌شوند.
- مسیرهای داینامیک (`/services/[slug]`، `/articles/[slug]`) در هر درخواست، **روی سرور** رندر (SSR) می‌شوند.

## پیش‌نیازها

- Node.js ≥ 20.9 (تست‌شده با Node 26)

## نصب و اجرای توسعه

```bash
npm install
npm run dev
```

سایت در `http://localhost:3000` بالا می‌آید.

## build و اجرای سرویس

```bash
npm run build
npm run start
```

`next start` یک سرور Node را روی پورت 3000 اجرا می‌کند؛ پورت را با متغیر `PORT` تغییر دهید:

```bash
PORT=8080 npm run start
```

### اجرای به‌صورت سرویس (systemd)

```ini
# /etc/systemd/system/rahgosha.service
[Unit]
Description=Rahgosha Legal Group — Next.js
After=network.target

[Service]
WorkingDirectory=/var/www/rahgosha
ExecStart=/usr/bin/npm run start
Environment=PORT=3000
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now rahgosha
```

یا با PM2:

```bash
pm2 start npm --name rahgosha -- run start
pm2 save
```

## ساختار پروژه

```
src/
├── app/                 # صفحات App Router (layout، page ها و مسیرهای [slug])
├── components/          # کامپوننت‌های اشتراکی و سکشن‌های صفحه اصلی
│   └── home/
└── data.ts              # داده‌های سایت (خدمات، مقالات، تیم، فرم‌ها، تماس)
public/
├── images/              # تصاویر سایت
└── favicon.svg
```

## نکته

تصویرها از `public/` سرو می‌شوند و بدون نیاز به کانفیگ `images` در `next.config.ts` کار می‌کنند.
فونت‌های Vazirmatn و Amiri با `next/font/google` در زمان build دانلود و کش می‌شوند؛ برای build روی سرور بدون اینترنت، پوشه `.next/cache` باید موجود باشد یا اتصال اینترنت فراهم باشد.
