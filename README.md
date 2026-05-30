# Nova Payroll System

A modern payroll management system for companies, built as our final‑year Computer Science diploma project.  
The application allows companies to register, manage employees, track attendance, handle leave requests, and securely authenticate users.

## Features

- **Company Registration** – Companies sign up with name, email, and password.  
- **Role‑Based Dashboards** – HR users see employee management & leave approval interfaces; regular employees access attendance and leave features.  
- **Employee Management (HR)** – Add multiple employees at once, assign roles (`Part‑time`, `Full‑time`, `HR`).  
  - New employees receive a temporary password and a password‑reset email (via Supabase).  
- **Attendance Tracking** – Employees check in and out (via button or QR code) on weekdays.  
  - Automatic calculation of work duration (hours, minutes, seconds).  
  - Late check‑ins and insufficient working hours are flagged.  
  - HR can view attendance history and monitor compliance.  
- **Leave Management** – Employees submit leave applications (type, details).  
  - HR approves or rejects requests; status updates instantly.  
  - Employees can view their leave history.  
- **Profile Editing** – Users can update their display name.  
- **Password Reset** – Secure password recovery via email.  
- **Responsive UI** – Built with Tailwind CSS, works on desktop and mobile.  
- **Authentication** – Fully managed by Supabase Auth.

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
