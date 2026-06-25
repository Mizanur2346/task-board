# 📋 Task Board

A full-stack Task Management application built with **React**, **Django REST Framework**, and **SQLite**. Users can securely register, log in, and manage their own tasks using a Kanban-style board.

---

## 🚀 Features

### Authentication
- User Registration
- User Login (JWT Authentication)
- Logout
- User-specific tasks

### Task Management
- Create Task
- Edit Task
- Delete Task
- Update Task Status
- Search Tasks
- Due Dates
- Priority Levels
- Overdue Task Highlighting

### Kanban Board
- To Do
- In Progress
- Done

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- Context API
- CSS

### Backend
- Django
- Django REST Framework
- Simple JWT
- SQLite

---

## 📂 Project Structure

```
task-board/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── tasks/
├── taskboard_project/
├── manage.py
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Mizanur2346/task-board.git
cd task-board
```

### 2. Backend Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it:

**Windows**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start the backend server:

```bash
python manage.py runserver
```

---

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 🔐 Authentication

This project uses **JWT Authentication**.

Users must:

- Register
- Login
- Receive JWT tokens
- Access only their own tasks

---

## 🌟 Future Improvements

- Drag & Drop Tasks
- Email Notifications
- Task Categories
- Dark Mode
- Docker Support
- PostgreSQL
- Deployment to Render & Vercel

---

## 👨‍💻 Author

**Mizanur Rahman**

GitHub:
https://github.com/Mizanur2346


---

## 📄 License

This project is for educational and portfolio purposes.
