# Hevents Backend

This is the backend API for the Hevents event management platform. It provides endpoints for managing events, user signups, and user role verification, leveraging Supabase for authentication and data storage.

---

## 📘 Overview

This backend powers the Hevents frontend. It exposes RESTful API endpoints for:

* Fetching and managing events
* Signing up for events
* Fetching user roles (e.g., staff vs user)

It is deployed on Render and uses Supabase for authentication and database operations.

---

## 🔐 Test Account Access

**Email:** `test@hevents.com`
**Password:** `test1234`

Use this account to:

* Browse and sign up for events
* Access the admin dashboard (`/admin`) as a staff user

---

## 🚀 Features

* RESTful API with CRUD operations for events
* Signup flow for users
* Supabase-authenticated routes
* Role-based access for staff users
* Connected to frontend deployed on Vercel

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

* Node.js (v18+ recommended)
* Supabase project with relevant tables (`events`, `signups`, `users`)

### 1. Clone the Repo

```bash
git clone https://github.com/sdmlr/hevents-backend
cd hevents-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Run Locally

```bash
npm run dev
```

---

## API Reference 📘

Full documentation of API endpoints is available in [`endpoints.json`](./endpoints.json) or [`api-docs.md](./api-docs.md) for a friendly readable version.

---

## 🧪 Deployment

The backend is deployed on [Render](https://hevents-backend.onrender.com), configured to auto-build from the `main` branch.

---

## 🛠 Tech Stack

* Node.js with Express
* Supabase (PostgreSQL & Auth)
* TypeScript
* Render (deployment)

---

> Made with ❤️ for the Hevents Project
