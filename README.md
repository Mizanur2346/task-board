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
## 📸 Screenshots

### Login Page
<img width="776" height="637" alt="image" src="https://github.com/user-attachments/assets/200c1c19-c54f-4489-b0b6-56e53308c071" />



---

### Register Page

<img width="712" height="546" alt="image" src="https://github.com/user-attachments/assets/cd2f4c0b-a20e-4469-ad80-80bb72aa112e" />


---

### Dashboard

<img width="1107" height="797" alt="image" src="https://github.com/user-attachments/assets/73e6df2f-a243-444e-a63d-ede1fc7b7e98" />

<img width="1862" height="472" alt="image" src="https://github.com/user-attachments/assets/ff12e1f8-bd17-4d99-8293-744e9f5c1e1e" />

---

### Overdue Task

<img width="622" height="432" alt="image" src="https://github.com/user-attachments/assets/939ebce8-b3f4-4d3a-99b3-094dbc84607f" />

---

### User Authentication

Each user only sees their own tasks.
User-A
<img width="1882" height="966" alt="image" src="https://github.com/user-attachments/assets/cfc28fd8-d880-4317-b253-9136cf9bf37f" />

User-B
<img width="1901" height="937" alt="image" src="https://github.com/user-attachments/assets/effb18b3-01bc-4aff-8766-0552e762251a" />


## 👨‍💻 Author

**Mizanur Rahman**

GitHub:
https://github.com/Mizanur2346


---

## 📄 License

This project is for educational and portfolio purposes.
