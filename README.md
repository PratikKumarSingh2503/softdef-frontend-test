# 🌿 FloraVision - Frontend Intern Test Project

A modern, responsive plant e-commerce website built with React and Vite. This project showcases a beautiful UI for browsing and purchasing indoor plants with features like trending plants, top-selling items, customer testimonials, and O2 plants sections.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Hero Banner**: Eye-catching hero section with featured plant showcase
- **Trending Plants**: Display of currently trending plant products
- **Top Selling Plants**: Section highlighting best-selling items
- **Customer Testimonials**: Social proof with customer reviews
- **O2 Plants Section**: Special section for air-purifying plants
- **Modern UI**: Built with Tailwind CSS for a sleek, modern interface
- **Interactive Carousels**: Smooth carousel components using Swiper
- **React Icons**: Beautiful iconography throughout the application

## 🛠 Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Swiper 12.0.3** - Modern touch slider
- **React Icons 5.5.0** - Popular icons library
- **ESLint** - Code linting and quality

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

## 🚀 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd clientCopy
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all the required packages listed in `package.json`, including:
   - React and React DOM
   - Vite and its plugins
   - Tailwind CSS
   - Swiper and Embla Carousel
   - React Icons
   - ESLint and related plugins

3. **Wait for installation to complete**. This may take a few minutes depending on your internet connection.

## ▶️ Running the Project

### Development Mode

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:
- **Local**: `http://localhost:5173`
- The port may vary if 5173 is already in use

The dev server will automatically reload when you make changes to the code.

### Preview Production Build

To preview the production build locally:

1. First, build the project:
   ```bash
   npm run build
   ```

2. Then preview the build:
   ```bash
   npm run preview
   ```

This will serve the optimized production build locally, typically at `http://localhost:4173`

## 🏗 Building for Production

To create an optimized production build:

```bash
npm run build
```

This command will:
- Bundle and minify your code
- Optimize assets
- Generate static files in the `dist/` directory

The production-ready files will be in the `dist/` folder, which can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## 📁 Project Structure

```
clientCopy/
├── public/              # Static assets
│   └── vite.svg
├── src/
│   ├── assets/         # Images and media files
│   │   ├── bg.jpg
│   │   ├── logo.png
│   │   ├── first.png through sixth.png
│   │   └── profile images
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── PlantCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── O2PlantsSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── SectionTitle.jsx
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── dist/                # Production build output (generated)
├── node_modules/        # Dependencies (generated)
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── README.md            # This file
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the development server with hot module replacement. The app will reload automatically when you make changes.

### `npm run build`
Creates an optimized production build in the `dist/` folder. This build is ready for deployment.

### `npm run preview`
Previews the production build locally. Run `npm run build` first before using this command.

### `npm run lint`
Runs ESLint to check for code quality issues and potential errors in your codebase.

## 🎨 Technologies Used

### Core Framework
- **React 19.2.0**: Latest version of React with improved performance and features
- **Vite 7.2.2**: Next-generation frontend build tool for fast development and optimized production builds

### Styling
- **Tailwind CSS 4.1.17**: Utility-first CSS framework for rapid UI development
- **@tailwindcss/vite**: Official Vite plugin for Tailwind CSS

### UI Components & Libraries
- **Swiper 12.0.3**: Modern, touch-enabled slider/carousel
- **react-icons 5.5.0**: Comprehensive icon library

### Development Tools
- **ESLint 9.39.1**: Code linting and quality assurance
- **@vitejs/plugin-react**: Official React plugin for Vite

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins. Configuration can be found in `vite.config.js`.

### ESLint Configuration
ESLint is configured with React-specific rules. Configuration is in `eslint.config.js`.

## 📝 Notes

- This is a frontend-only project (no backend API integration)
- All data and images are static/local
- The project uses modern React patterns and functional components
- Tailwind CSS is used for all styling
- The project is optimized for performance with Vite's build system

## 🤝 Contributing

This is a frontend intern test project. If you're working on this project:

1. Make sure to follow the existing code style
2. Run `npm run lint` before committing
3. Test your changes in development mode
4. Ensure the build completes successfully before submitting

## 📄 License

This project is created for frontend intern testing purposes.

---

**Happy Coding! 🌱**
