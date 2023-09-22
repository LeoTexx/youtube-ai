# YouTube AI: Enhancing Content Creation with AI

YouTube AI is a groundbreaking application that uses artificial intelligence to transcribe videos and provide title and description suggestions based on the content. This repository consists of both a backend API for transcribing content and AI model interactions and a frontend web application that facilitates user interactions.

## 🌟 Features

- **Video Transcription:** Input a video, and the application will use AI to generate a transcription.
- **AI-Powered Suggestions:** Generate potential titles and descriptions based on video content.

- **Fast and Responsive UI:** Leveraging React, Radix UI, Shadcn UI, and Tailwind CSS for a seamless user experience.

- **WebAssembly and ffmpeg.wasm:** Convert videos to audio directly on the frontend, saving processing time and reducing backend load.

## 🚀 Technologies

- React + Typescript
- Radix UI
- Shadcn UI
- Tailwind CSS
- WebAssembly with ffmpeg.wasm
- Axios
- Fastify
- OpenAI
- Prisma

## 🗂 Project Structure

```
.
├── README.md
├── api                           # Backend API
│   ├── package.json
│   ├── prisma                    # Prisma ORM setup and migrations
│   │   ├── dev.db                # SQLite database
│   │   ├── migrations            # Database migrations
│   │   ├── schema.prisma        # Prisma schema
│   │   └── seed.ts              # Database seeding script
│   ├── src                       # API source code
│   │   ├── lib                  # Utility libraries
│   │   │   ├── openai.ts        # OpenAI interactions
│   │   │   └── prisma.ts        # Prisma ORM integrations
│   │   ├── routes               # API routes
│   │   └── server.ts            # Main server setup and entry point
│   └── tmp                      # Temporary storage for processed files
└── web                          # Frontend web application
    ├── components.json
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── src
    │   ├── App.tsx              # Main app component
    │   ├── components           # UI components
    │   ├── ffmpeg               # FFmpeg setup and utility scripts
    │   ├── index.css
    │   ├── lib                  # Utility libraries for the frontend
    │   ├── main.tsx             # Main entry point for the frontend app
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── yarn.lock
```

## 🛠 Setup and Usage

### Backend (`/api`)

1. **Install Dependencies**

```bash
cd api
npm install
```

2. **Setup Prisma**

```bash
npx prisma generate
npx prisma migrate dev
```

1. **Run the Server**

```bash
npm run dev
```

Server starts on port 3333.

### Frontend (`/web`)

1. **Install Dependencies**

```bash
cd web
npm install
```

2. **Run the Frontend**

```bash
npm run dev
```

The Vite development server starts.

## 🌐 API Overview

Backend services feature:

- Transcription route: Converts a video file to transcription using OpenAI and saves it via Prisma ORM.
- AI Completion route: Uses OpenAI to generate AI-based completions.
- Prompt retrieval route: Fetches all available prompts using Prisma ORM.
- Video Upload route: Accepts video, converts to audio, triggers transcription.

## 📦 Dependencies Overview

### Backend (`youtube-ai-api`)

Key dependencies:

- `fastify`: Web server framework
- `prisma`: ORM for database management
- `openai`: OpenAI library for AI interactions

### Frontend (`youtube-ai-web`)

Key dependencies:

- `react`: Frontend UI library
- `ai`: Library for building AI-powered streaming text and chat UIs.
- `@ffmpeg/ffmpeg`: FFmpeg library for browser-based media processing
- `axios`: HTTP client for making requests
