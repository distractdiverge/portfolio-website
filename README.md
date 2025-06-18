# Astrid Lapinski - Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my professional experience, projects, skills, and provides a way to get in touch.

## ✨ Features

- **Modern Stack**: Built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Built-in dark/light mode support
- **Performance Optimized**: Fast page loads and smooth animations
- **SEO Friendly**: Proper metadata and semantic HTML
- **Accessibility**: WCAG 2.1 compliant components and proper ARIA attributes

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom configuration
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Form Handling**: React Hook Form
- **Deployment**: [Vercel](https://vercel.com/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/distractdiverge/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
.
├── src/
│   ├── app/                    # App Router pages and layouts
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page and form
│   │   ├── education/          # Education and skills page
│   │   ├── experience/         # Work experience page
│   │   ├── projects/           # Projects showcase
│   │   └── globals.css         # Global styles
│   │
│   ├── components/           # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── ProjectCard.tsx    # Project card component
│   │   └── Services.tsx       # Services component
│   │
│   └── lib/                  # Utility functions and constants
│
├── public/                    # Static assets
│   └── assets/                 # Images and other media
│
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies and scripts
```

## 🎨 Styling

This project uses Tailwind CSS for styling with a custom color palette defined in `tailwind.config.js`. The primary color is set to a custom purple shade, and the design follows a clean, modern aesthetic with proper spacing and typography.

### Custom Colors

- **Primary**: `#8A5CE8` (Purple)
- **Secondary**: Various colors from the Progress Pride flag used in the experience section

## 🌟 Features in Detail

### Experience Timeline
- Color-coded work history using Progress Pride flag colors
- Responsive design that works on all screen sizes
- Hover effects and smooth animations

### Projects Showcase
- Grid layout for project cards
- Each card includes project details, technologies used, and links
- Responsive design with proper image handling

### Contact Form
- Client-side form validation
- Email obfuscation for security
- Responsive layout with proper spacing

## 🚀 Deployment

This project is configured for deployment on Vercel. To deploy your own version:

1. Fork this repository
2. Connect your GitHub repository to [Vercel](https://vercel.com/new)
3. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📬 Contact

For any questions or feedback, please open an issue or reach out through the contact form on the website.
