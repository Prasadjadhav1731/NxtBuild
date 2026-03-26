# 🚀 NxtBuild – AI-Powered Web App Builder

NxtBuild is a full-stack AI-powered web application that allows users to generate complete working web apps using natural language prompts.

Instead of manually writing HTML, CSS, and JavaScript, users can simply describe what they want — and the AI generates a fully functional application with live preview.

---

## 🧠 Problem Statement

Developers often face a gap between **idea and implementation**:

* Setting up project structure
* Writing boilerplate code
* Styling and responsiveness
* Debugging and testing

Even a simple landing page can take **4–8 hours**.

---

## 💡 Solution

NxtBuild solves this by:

* Converting **natural language → working code**
* Providing **instant live preview**
* Allowing **iterative development via chat**

---

## ✨ Features

* 🔐 **Authentication**

  * JWT-based login/register
  * Secure password hashing using bcrypt

* 📁 **Project Management**

  * Create, view, rename, delete projects
  * Each project stores chat + generated code

* 🤖 **AI Code Generation**

  * Powered by Google Gemini API
  * Generates complete HTML/CSS/JS apps

* 💬 **Chat Interface**

  * Conversational UI for app building
  * Iterative updates like:

    * "Make header blue"
    * "Add login form"

* 🖥️ **Live Preview**

  * Real-time rendering using iframe

* 📝 **Code Editor**

  * View and edit generated code

* 📥 **Download Code**

  * Export as standalone HTML file

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* React Router
* Axios
* Context API
* CSS

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt (password hashing)

### AI Integration

* Google Gemini API (`@google/genai`)

---

## 📂 Project Structure

```
build-your-own-lovable/
├── server/
│   ├── server.js
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── utils/
│
└── client/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── context/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/nxtbuild.git
cd nxtbuild
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
GEMINI_API_KEY=your_api_key
CLIENT_URL=http://localhost:5173
```

Run server:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔄 How It Works

1. User logs in
2. Creates a project
3. Sends prompt → AI
4. Backend:

   * Builds prompt
   * Calls Gemini API
   * Parses response
   * Saves code + chat
5. Frontend:

   * Displays chat
   * Shows live preview
   * Allows editing

---

## 🧠 Architecture

```
Frontend (React)
   ↓
API (Express)
   ↓
Services Layer
   ↓
MongoDB + Gemini AI
```

---

## 🔐 Authentication Flow

* User logs in → receives JWT
* Token stored in cookies
* Sent in every request
* Middleware verifies token

---

## 🚀 Future Improvements

* 🔄 Version rollback system
* 🧩 Multi-file project support (React apps)
* 🎨 UI customization panel
* 🌐 Deployment integration (Netlify/Vercel)
* ⚡ Streaming AI responses

---

## 💡 Inspiration

Inspired by:

* Bolt.new
* Lovable.dev
* v0.dev
* Replit AI

---

## 🧑‍💻 Author

**Prasad Jadhav**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to contribute!
