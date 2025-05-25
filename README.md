# 🔐 PassOP — Personal Password Manager

![GitHub repo size](https://img.shields.io/github/repo-size/priyapandey09/password-manager-mongo)
![GitHub stars](https://img.shields.io/github/stars/priyapandey09/password-manager-mongo?style=social)
![GitHub forks](https://img.shields.io/github/forks/priyapandey09/password-manager-mongo?style=social)
![GitHub license](https://img.shields.io/github/license/priyapandey09/password-manager-mongo)
![Made with MERN](https://img.shields.io/badge/Made%20with-MERN-blueviolet)

A simple and secure password manager built with **React**, **Express.js**, **Node.js**, and **MongoDB**.
It allows you to save, view, edit, and delete your login credentials for various websites securely via a clean UI. 

## 📸 Screenshots   
**With data:**      
![image](https://github.com/user-attachments/assets/63203d63-4534-400d-89a8-a4cc16ed00dd)

**Without data:**
![image](https://github.com/user-attachments/assets/c241f3aa-bf10-4991-8c80-35fa56889025)

## 🚀 Features
✅ Save website URL, username, and password  
✅ View saved credentials in a clean, responsive table  
✅ Copy site URL, username, or password to clipboard instantly  
✅ Edit existing credentials with prefilled forms  
✅ Delete credentials with confirmation prompts  
✅ Toggle password visibility  
✅ Real-time toast notifications for actions  
✅ Modular components including `Navbar` and `Footer`  
✅ Data stored securely in a MongoDB database via Express backend

## 🛠️ Tech Stack
- **React** (Frontend)
- **Express.js** (Backend)
- **MongoDB** (Database)
- **React Toastify** for notifications
- **Body-parser & CORS** for backend utilities

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/priyapandey09/password-manager-mongo.git
cd password-manager-mongo
```
### 2️⃣ Install Dependencies  
**Backend (Express)**  
```bash
cd backend
npm install
```
**Frontend (React)**
```bash
cd frontend
npm install
```
### 3️⃣ Start MongoDB
Ensure MongoDB is running locally:  
```bash
mongod
```
### 4️⃣ Run Backend Server
```bash
cd backend
node server.js
```
Server runs at http://localhost:3000/  

### 5️⃣ Run React Frontend 
```bash
cd frontend
npm run dev
```
Frontend runs at http://localhost:5173/ (if using Vite)

## 📂 Project Structure
```pgsql
password-manager-mongo/  
├── backend/  
│    ├── server.js  
│    └── package.json  
│
├── public/  
│    ├── favicon/  
│    └── icons/  
│
├── src/  
│    └── components/  
│        ├── Manager.jsx  
│        ├── Navbar.jsx  
│        └── Footer.jsx 
│
├── index.html  
├── .gitignore  
├── LICENSE    
└── README.md    
```

## 📑 API Endpoints  
```GET /```  
Fetch all stored passwords   

```POST /```  
Save a new password

```PUT /update/:id```  
Update an existing password by _id

```DELETE /:id```  
Delete a password by _id

### 💡 Future Improvements
- Add encryption for passwords before saving to the database
- Add user authentication system
- Deploy to a cloud hosting platform (Render / Vercel / Railway)
- Improve UI with animations, dark mode, and mobile optimization

### 📃 License
This project is open-source under the <a href="LICENSE">MIT License</a>

### 🙌 Acknowledgments
Built for personal learning and to practice full-stack MERN development. 🚀
Icons provided by <a href="https://lordicon.com/">Lordicon</a>

### 📞 Contact
Have feedback, ideas, or want to collaborate?
Reach out via <a href="https://www.linkedin.com/in/priya-pandey-03708498/">LinkedIn</a> or open an issue on this repo!



