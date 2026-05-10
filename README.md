# 🐄 QurbaniHat – অনলাইন কুরবানির পশুর হাট

> আধুনিক, দ্রুত এবং সম্পূর্ণ রেসপন্সিভ একটি অনলাইন কুরবানির পশুর হাট প্ল্যাটফর্ম যেখানে ব্যবহারকারীরা সহজেই পশু ব্রাউজ, ফিল্টার, লগইন এবং নিজেদের প্রোফাইল ম্যানেজ করতে পারে।

![QurbaniHat Banner](https://raw.githubusercontent.com/SyntaxAdil/qurbani-hat/main/public/baner.png)

---

# 🌐 Live Website

🔗 [https://qurbani-hat-bd.vercel.app](https://qurbani-hat-bd.vercel.app)

---

# 📌 প্রজেক্টের উদ্দেশ্য

QurbaniHat তৈরি করা হয়েছে যেন ব্যবহারকারীরা ঘরে বসেই সহজে বিভিন্ন কুরবানির পশু দেখতে, দাম অনুযায়ী ফিল্টার করতে এবং পছন্দের পশু খুঁজে নিতে পারে।

এখানে আধুনিক UI/UX, Animation, Authentication এবং Responsive Design ব্যবহার করা হয়েছে যাতে সব ধরনের ডিভাইসে সুন্দর অভিজ্ঞতা পাওয়া যায়।

---

# ✨ প্রধান ফিচারসমূহ

* 🔐 **Authentication System** — Better Auth দিয়ে Email/Password Login & Register
* 👤 **User Profile Management** — প্রোফাইল আপডেট ও ছবি পরিবর্তন
* 🐄 **সকল পশুর তালিকা** — বিভিন্ন ক্যাটাগরির পশু ব্রাউজ
* 💰 **দাম অনুযায়ী Sort & Filter**
* 🖼️ **Avatar Fallback Support** — ছবি না থাকলে নামের Initials দেখাবে
* 💀 **Skeleton Loading UI**
* 🎞️ **Smooth Animation & Motion Effects**
* 🔒 **Protected Routes**
* 🚫 **Custom 404 Page**
* 📱 **Fully Responsive Design**
* 🌙 **Modern UI with shadcn/ui**
* 🍞 **Toast Notification System**
* ⚡ **Next.js 16 App Router Support**

---

# 📸 Screenshots

| Home                                                                                          | Login                                                                                           | All Animals                                                                                            | Profile                                                                                              |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| ![Home](https://raw.githubusercontent.com/SyntaxAdil/qurbani-hat/main/public/home.png) | ![Login](https://raw.githubusercontent.com/SyntaxAdil/qurbani-hat/main/public/login.png) | ![Animals](https://raw.githubusercontent.com/SyntaxAdil/qurbani-hat/main/public/all-animal.png) | ![Profile](https://raw.githubusercontent.com/SyntaxAdil/qurbani-hat/main/public/profile.png) |

---

# 🛠️ ব্যবহৃত টেকনোলজি

| Technology                 | Usage                |
| -------------------------- | -------------------- |
| **Next.js 16**             | Fullstack Framework  |
| **React 19**               | UI Library           |
| **Tailwind CSS**           | Styling              |
| **shadcn/ui**              | Modern UI Components |
| **Better Auth**            | Authentication       |
| **MongoDB + Mongoose**     | Database             |
| **Motion / Framer Motion** | Animation            |
| **React Hook Form**        | Form Handling        |
| **Lucide React**           | Icon Library         |
| **React Hot Toast**        | Notification System  |

---

# 📦 ব্যবহৃত NPM Packages

```bash
better-auth
mongoose
motion
react-hook-form
react-hot-toast
lucide-react
class-variance-authority
clsx
tailwind-merge
```

---

# 📁 Project Structure

```bash
qurbani-hat/
├── app/
│   ├── (animals)/
│   │   └── animal/
│   │       └── page.jsx
│   │
│   ├── login/
│   │   └── page.jsx
│   │
│   ├── register/
│   │   └── page.jsx
│   │
│   ├── profile/
│   │   ├── page.jsx
│   │   └── loading.jsx
│   │
│   └── layout.jsx
│
├── components/
│   ├── animal/
│   │   ├── AnimalCard.jsx
│   │   └── AnimalContainer.jsx
│   │
│   ├── profile/
│   │   ├── EditProfile.jsx
│   │   └── ProfileSkeleton.jsx
│   │
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── ui/
│       └── shadcn components
│
├── lib/
│   ├── auth/
│   │   ├── auth.js
│   │   └── auth-client.js
│   │
│   ├── db/
│   │   └── connectDB.js
│   │
│   └── animal.js
│
├── models/
│   └── Animal.js
│
├── public/
│   └── assets/
│       ├── home.png
│       ├── login.png
│       └── all-animal.png
│
├── utils/
│   └── NavLink.jsx
│
└── middleware.js
```

---

# 🔐 Environment Variables

Root এ `.env.local` ফাইল তৈরি করুন:

```env
# MongoDB
MONGO_URI=your_mongodb_uri

# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> ⚠️ `.env.local` কখনো GitHub এ push করবেন না।

---

# 🚀 লোকাল মেশিনে রান করার নিয়ম

```bash
# Repository Clone করুন
git clone https://github.com/SyntaxAdil/qurbani-hat.git

# Project Folder এ যান
cd qurbani-hat

# Dependencies Install করুন
npm install

# Development Server চালু করুন
npm run dev
```

তারপর Browser এ ওপেন করুন:

```bash
http://localhost:3000
```

---

# 📄 গুরুত্বপূর্ণ পেইজসমূহ

| Route       | Access    | Description       |
| ----------- | --------- | ----------------- |
| `/`         | Public    | Homepage          |
| `/animal`   | Public    | সকল পশুর তালিকা   |
| `/profile`  | Protected | ইউজার প্রোফাইল    |
| `/login`    | Guest     | লগইন পেইজ         |
| `/register` | Guest     | রেজিস্ট্রেশন পেইজ |

---

# 🏗️ Deployment

এই প্রজেক্টটি **Vercel** এ Deploy করা হয়েছে।

🔗 Live: [https://qurbani-hat-bd.vercel.app](https://qurbani-hat-bd.vercel.app)

Deploy করার আগে সব Environment Variable যোগ করতে ভুলবেন না।

---

# 👨‍💻 Developer

<div align="center">

### ✨ Developed with ❤️ by

# **Abdur Rahman Adil**

Frontend Developer • Next.js Enthusiast • MERN Stack Learner

🔗 GitHub: [@SyntaxAdil](https://github.com/SyntaxAdil)

</div>

---

# ⭐ Support

যদি প্রজেক্টটি ভালো লাগে তাহলে GitHub Repository তে একটি ⭐ দিয়ে সাপোর্ট করতে পারেন।
