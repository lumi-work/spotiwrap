# Spotiwrap

**Spotiwrap** is an open-source web application that recreates the **Spotify Wrapped** experience. It allows users to view their most listened tracks, artists, and genres with a clean, interactive interface. Built with **Next.js** and **TypeScript**, it provides fast performance and a modern developer experience.

---

## Features

- Fetch user listening data via the Spotify API
- Display top tracks, artists, and genres
- Interactive and responsive UI
- Built with Next.js for high performance and SEO optimization
- Optimized font loading with Vercel’s **Geist** font

---

## Getting Started

### Prerequisites
- Node.js (>=18)
- A Spotify Developer account with API credentials

### Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/lumi-work/spotiwrap.git
    cd spotiwrap
    npm install
or yarn install
or pnpm install

2. Create a .env.local file in the root folder and add your Spotify API credentials:

SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/api/auth/callback

3. Run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev

Open your browser at http://localhost:3000

#Deployment
The easiest way to deploy this project is with Vercel
After connecting your repository, make sure to add the required environment variables in the Vercel dashboard.

#Contributing
Contributions, issues, and feature requests are welcome!
Feel free to open a pull request or report a bug via the issues pages.

#License
This project is licensed under the MIT License.
