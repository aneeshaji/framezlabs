# FramezLabs

> A premium full-stack web application for custom photo frames and personalized gifts, featuring a modern React frontend and Node.js backend.

FramezLabs is built with a focus on visual excellence and user experience, leveraging a custom "Soft Minimalist" design system with warm terracotta tones, soft sand backgrounds, and glassmorphism effects. The application includes conversion-optimized features like floating CTAs, exit-intent popups, and a fully functional enquiry system.

## 🚀 Tech Stack

### Frontend
- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS with Custom Variables & Design Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **SEO**: React Helmet Async with JSON-LD Schema

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express](https://expressjs.com/)
- **Email Service**: [Nodemailer](https://nodemailer.com/)
- **Environment**: dotenv

## 🎨 Design System

The project uses a custom CSS variable system defined in `frontend/src/index.css`:
- **Colors**: Gold (#E07A5F), Dark (#2D3436), Off-White (#F4F1EA)
- **Typography**: 'Outfit' (Headings) & 'Plus Jakarta Sans' (Body)
- **UI Elements**: Glassmorphism cards, custom scrollbars, micro-interactions

## ✨ Key Features

- **Dynamic Pages**: Home, About, Products, Shop, Gallery, Contact, FAQ
- **Conversion Boosters**: 
  - Floating "Get Quote" button
  - Exit-intent popup with discount offer
  - Sticky WhatsApp integration
- **Enquiry System**: Full-stack form with email notifications
- **SEO Optimized**: Meta tags, sitemap, robots.txt, structured data
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Smooth Animations**: Page transitions and micro-interactions

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/aneeshaji/framezlabs.git
cd framezlabs
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

### 3. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Edit .env and add your email credentials:
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password

node server.js
```
Backend runs on `http://localhost:5000`

## 📜 Scripts

### Frontend
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

### Backend
- `node server.js`: Start backend server

## 📁 Project Structure

```
framezlabs/
├── frontend/           # React + Vite application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Route pages
│   │   ├── utils/      # Animations, helpers
│   │   └── index.css   # Design system
│   ├── public/         # Static assets
│   └── dist/           # Production build
├── backend/            # Node.js API
│   ├── server.js       # Express server
│   └── .env            # Environment variables
└── README.md
```

## 🌐 Deployment

See [deployment_guide.md](deployment_guide.md) for detailed EC2 deployment instructions using PM2 and Nginx.

## 📄 License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

## 📧 Contact

For enquiries: enquiry@framezlabs.store  
Support: support@framezlabs.store
