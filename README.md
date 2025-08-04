# 📝 Simple Post App

A minimalistic Node.js + Express web application that allows users to:
- Create posts with a nickname and message
- View posts
- Edit posts via Bootstrap modals
- Delete posts

Built using server-side rendering with EJS.

---

## 📸 Preview

![App Screenshot](preview.png preview2.png) <!-- Dodaj zrzut ekranu aplikacji do katalogu projektu -->

---

## ⚙️ Features

- Add new posts using a form
- Display all posts dynamically
- Edit posts in a modal popup
- Delete posts with a button
- Responsive design with Bootstrap 5
- Server-side rendered using EJS
- Posts stored temporarily in memory (array)

---

## 🚀 Technologies Used

- **Node.js** (runtime)
- **Express.js** (backend framework)
- **EJS** (template engine)
- **Bootstrap 5** (UI styling)

---

## 🛠️ Installation & Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/post-app.git
cd post-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the server
bash
Copy
Edit
node app.js
Visit http://localhost:3000 in your browser

🗃️ Project Structure
pgsql
Copy
Edit
post-app/
├── views/
│   ├── index.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   └── (static files: CSS, JS, images)
├── app.js
├── package.json
└── README.md
🔄 Routes Overview
Method	Route	Description
POST	/submit	Add a new post
POST	/edit	Edit existing post
POST	/delete	Delete a specific post
GET	/	View all posts

📌 Notes
Posts are not stored in a database – they live in a temporary array in memory.

Data will reset on server restart. To persist data, consider integrating a database (e.g. MongoDB, PostgreSQL).

🧠 Future Ideas
 Add client-side validation

 Use MongoDB or another DB for storage

 Add login/authentication

 Add timestamps to posts

 AJAX for editing and deleting (no page reload)

👤 Author
Aleksander Wiącek
📧 a.wiacek@zlotoryja.xyz
🔗 [Your GitHub](https://github.com/Mashiro-jz)

📝 License
This project is open source and available under the MIT License.
