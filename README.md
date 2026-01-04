# Portfolio React Vite App

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and DaisyUI components.

## Features

- 🌙 Dark/Light mode toggle with DaisyUI themes
- 📱 Fully responsive design
- ⚡ Modern React components with Vite
- 🎨 Beautiful UI with Tailwind CSS & DaisyUI
- 🎯 Smooth animations with Framer Motion
- 📌 Sticky navigation bar
- 📧 Contact form with animations
- 💼 Project showcase with hover effects
- 🛠️ Skills section with interactive cards
- 💬 Testimonials with smooth transitions
- 📏 Max-width 7xl layout for optimal viewing
- 🚀 Fast development with Vite HMR

## Components

- **Navigation**: Responsive navigation with dark mode toggle (DaisyUI buttons)
- **Hero**: Landing section with animated elements
- **About**: Personal information and statistics (DaisyUI cards)
- **Skills**: Technical skills organized by categories (DaisyUI cards & badges)
- **Projects**: Featured projects with descriptions and tech stacks (DaisyUI cards)
- **Testimonials**: Client testimonials (DaisyUI cards with avatars)
- **Contact**: Contact form and information (DaisyUI form components)
- **Footer**: Social links and site navigation (DaisyUI footer)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the files
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── index.html          # Vite entry point
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx        # Vite entry point
│   └── index.css
├── tailwind.config.js  # Tailwind + DaisyUI config
├── vite.config.js      # Vite configuration
└── package.json
```

## Customization

### DaisyUI Themes

The project uses custom DaisyUI themes defined in `tailwind.config.js`:

- **Light theme**: Clean, modern light colors
- **Dark theme**: Deep purple/black background with purple accents

### Colors

Main colors defined in the config:

- Primary: Purple (#A855F7)
- Secondary: Pink (#EC4899)
- Accent: Purple (#9333EA)

### Content

Update the content in each component file:

- Personal information in `Hero.jsx` and `About.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Testimonials in `Testimonials.jsx`
- Contact information in `Contact.jsx`

### Images

Replace the placeholder images with your own:

- Profile images in `Hero.jsx` and `About.jsx`
- Update the image URLs to point to your actual images

## DaisyUI Components Used

- **Buttons**: `btn`, `btn-primary`, `btn-ghost`, `btn-circle`
- **Cards**: `card`, `card-body`, `card-title`, `card-actions`
- **Forms**: `form-control`, `input`, `textarea`, `label`
- **Navigation**: `navbar`, `menu`
- **Badges**: `badge`, `badge-primary`, `badge-outline`
- **Footer**: `footer`, `footer-center`
- **Avatar**: `avatar`, `placeholder`

## Technologies Used

- React 18
- Vite (Fast build tool)
- Tailwind CSS
- DaisyUI (Tailwind CSS component library)
- Framer Motion (animations)
- Lucide React (icons)

## Development

- **Hot Module Replacement (HMR)**: Instant updates during development
- **Fast builds**: Vite provides lightning-fast build times
- **ES modules**: Modern JavaScript module system
- **Component-based**: Modular React architecture

## License

This project is open source and available under the [MIT License](LICENSE).
