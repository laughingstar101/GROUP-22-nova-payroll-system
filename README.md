# Nova Payroll System

A modern payroll management system for companies, built as our final‑year Computer Science diploma project.  
The application allows companies to register, manage employees, track attendance, handle leave requests, and securely authenticate users.

## Key Highlights

- **Company registration** – Sign up with name, email, password.  
- **Role‑based dashboards** – HR manages employees & leave; employees track attendance & leave.  
- **Employee management (HR)** – Bulk add employees, assign roles, send password‑reset emails.  
- **Attendance tracking** – Check in/out (button or QR code), automatic work duration & late detection.  
- **Leave management** – Submit requests, HR approves/rejects, status updates instantly.  
- **Profile editing** – Update name, reset password.  
- **Authentication** – Supabase Auth (email/password).  
- **Responsive UI** – Tailwind CSS, works on desktop & mobile.

## Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Frontend    | React 19, React Router DOM, Tailwind CSS        |
| Backend     | Supabase (PostgreSQL, Auth)                     |
| Build Tool  | Vite                                            |
| Language    | JavaScript (ES2022) / JSX                       |

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm or yarn
- A Supabase account (free tier works)

### Installation

1. **Clone the repository**
2. **Install dependencies**
```
npm install
```
3. **Run the development server**
```
npm run dev
```
### Database Setup

Execute the SQL in [`src/utils/supabase/schema.sql`](src/utils/supabase/schema.sql) in your Supabase SQL editor.

### Security Notes
- Passwords are never stored client‑side; Supabase Auth handles hashing.
- Temporary passwords are set to 123456 for demo; in production, generate a random strong password.
- Row Level Security is disabled – the application relies on Supabase Auth sessions and explicit query conditions.

### Testing
- Use a test email service (e.g., Mailhog) to catch password‑reset emails during development.
- Supabase’s local emulator can be used for offline testing.

### License
This project is for educational purposes as part of a diploma final year project. Free to use and modify for learning.
