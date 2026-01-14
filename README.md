# Jeevith Pranav P - Portfolio Website

A modern, animated personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features stunning visual effects, glassmorphism design, particle backgrounds, and smooth animations.

## Features

- **Mobile-First Design**: Optimized for phones with touch-friendly interactions and responsive layouts
- **Dark Futuristic Theme**: Neon cyan accents on deep black backgrounds with glassmorphism effects
- **Advanced Animations**: 
  - Particle background effects
  - Typing animations in hero section
  - Pop-up animations on scroll
  - Rotating orbital rings around profile image
  - Floating icons with bounce effects
  - Smooth hover effects with glow and scale transforms
- **Interactive Components**:
  - Sticky navigation with smooth scrolling
  - Theme toggle (dark/light mode)
  - Social media links with ripple effects
  - Project cards with image hover effects
  - Skill icons with tooltips
- **Comprehensive Sections**:
  - Hero with animated profile image
  - About Me with quick stats
  - Education timeline
  - Skills with icon-based display
  - Experience cards
  - Project showcase with images
  - Achievements and certifications
  - Contact information

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React, Devicon
- **Fonts**: Poppins, Space Grotesk

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit the data objects in `app/page.tsx`:

- **Personal Info**: Update name, title, bio, location, email, phone
- **Social Links**: Update LinkedIn, GitHub, Instagram URLs
- **Education**: Modify education array with your degrees
- **Skills**: Update technical skills, tools, and soft skills
- **Experience**: Add your internships and work experience
- **Projects**: Update projects array with your work
- **Achievements**: Add your certifications and awards

### Change Profile Image

Replace the image in `public/assets/images/profile.jpg` with your photo.

### Update Project Images

Replace project images in `public/` directory:
- `ai-microcontroller-prompt-interface.jpg`
- `ppe-detection-safety-monitoring.jpg`
- `event-registration-portal.jpg`
- `bldc-motor-design-simulation.jpg`
- `electric-vehicle-charging-system.jpg`
- `solar-iot-lavatory-system.jpg`

### Modify Colors

Update the color scheme in `app/globals.css`:
- Primary colors (cyan/blue tones)
- Background colors
- Text colors
- Border colors

### Adjust Animations

Modify animation settings in `app/globals.css`:
- Animation durations
- Delay timings
- Transform effects
- Glow intensities

## Project Structure

\`\`\`
portfolio/
├── app/
│   ├── page.tsx           # Main portfolio page
│   ├── layout.tsx         # Root layout with fonts
│   └── globals.css        # Global styles and animations
├── components/
│   └── ui/                # shadcn/ui components
├── public/
│   └── assets/
│       └── images/        # Profile and project images
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── README.md
\`\`\`

## Performance Optimizations

- Mobile-first responsive design
- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- Reduced animations on mobile for better performance
- Efficient CSS with Tailwind utilities

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Jeevith Pranav P
- Email: jeevithpranav@gmail.com
- LinkedIn: [linkedin.com/in/jeevith-pranav](https://linkedin.com/in/jeevith-pranav)
- GitHub: [github.com/jeevithpranav](https://github.com/jeevithpranav)

---

Built with ❤️ using Next.js and v0
