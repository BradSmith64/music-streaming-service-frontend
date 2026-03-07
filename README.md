# Music Streaming Service - Frontend

A modern, high-performance music streaming interface built with **Next.js 16** and **React 19**. This application serves as the primary "Driving Adapter" for the backend's hexagonal core.

## 🚀 Tech Stack

### Core Frameworks
- **Framework:** Next.js 16 (App Router) — Leverages the latest server-side rendering (SSR) and client-side navigation features.
- **UI Library:** React 19 — Utilizes modern hooks and concurrent rendering capabilities.
- **Language:** TypeScript — Ensures type safety across all components and API interactions.

### Styling & UI
- **Styling:** **Tailwind CSS v4** — A utility-first CSS framework for rapid UI development with enhanced performance.
- **Components:** Radix UI — Accessible, unstyled primitives for building high-quality design systems.
- **Icons:** Lucide React — A clean and consistent icon library.
- **Animation:** `tw-animate-css` for smooth transitions and interactive feedback.

### Architecture (The "Driving Adapter")
In our **Hexagonal Architecture**, this frontend is a "Primary" or "Driving" Adapter. It:
1.  **Translates User Actions:** Converts clicks and interactions into structured API calls.
2.  **Orchestrates State:** Manages the playback, liking, and discovery flows on the client side.
3.  **Interfaces with the Core:** Communicates with the .NET 8 backend via standardized JSON contracts.

---

## 🛠️ Local Development

### 1. Prerequisites
- **Node.js** (LTS recommended)
- **npm** or **yarn**

### 2. Configuration
Create a `.env.local` file in the root of this directory:
```env
NEXT_PUBLIC_ENV_URL="http://localhost:5119"
```

### 3. Getting Started
```bash
npm install
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).

---

## ☁️ Production Infrastructure (Azure)

This frontend is optimized for **Azure Static Web Apps (SWA)**, which provides:
- **Global CDN:** Assets are served from the edge for maximum speed.
- **Managed SSR:** Automatic support for Next.js Server-Side Rendering.
- **CI/CD:** Automated builds and deployments via GitHub Actions.

For detailed deployment steps, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).
