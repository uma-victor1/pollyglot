# Polyglot Translation App

![Polyglot Logo](https://img.shields.io/badge/Polyglot-Translation-005DB4)

A clean, modern web application for translating text between multiple languages. Built with Next.js and TypeScript, Polyglot offers an intuitive user interface with smooth transitions and real-time feedback.

## ✨ Features

- 🌐 Translate between multiple languages (French, Spanish, Japanese)
- 🔄 Smooth UI transitions with loading indicators
- 📱 Responsive design that works on all devices
- ⚡️ Fast, server-side translations
- 🎨 Clean, modern interface

## 🛠️ Technologies

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Server Actions - For handling translation requests

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/polyglot.git
   cd polyglot
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🎯 Usage

1. Enter text in the input field that you want to translate
2. Select the target language (French, Spanish, or Japanese)
3. Click the "Translate" button
4. View your translation results
5. Click "Start Over" to begin a new translation

## 📁 Project Structure

```
polyglot/
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── translate.ts   # Server-side translation logic
│   │   ├── components/
│   │   │   └── card.tsx       # Main translation UI component
│   │   ├── page.tsx           # Main application page
│   │   └── layout.tsx         # App layout
│   ├── styles/
│   │   └── globals.css        # Global styles
├── public/
│   └── ...                    # Static assets
├── package.json
└── README.md
```

## 🧪 Implementation Details

### Translation Card Component

The main Card component handles the translation flow, including:

- State management for text input and results
- Loading indicators during translation
- Transition effects between views
- Input validation

### Translation Actions

The app uses Next.js server actions to perform translations, allowing for:

- Secure API key handling (server-side)
- Efficient translations without exposing credentials
- Clean separation of UI and translation logic

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

Your Name - [umavictor11@gmail.com](mailto:umavictor11@gmail.com)

Project Link: [https://pollyglot-ten.vercel.app/](https://pollyglot-ten.vercel.app/)
