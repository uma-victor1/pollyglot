import Head from "next/head";
import Card from "./components/card";

export default function TranslatorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-black bg-gray-100 p-4">
      <Head>
        <title>PollyGlot - Perfect Translation Every Time</title>
        <meta
          name="description"
          content="Translate text quickly and accurately"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm">
        {/* Header */}
        <div className="bg-[#001d3d] p-5 flex items-center gap-3">
          <div className="relative w-10 h-10">
            {/* Logo SVG instead of Image for simplicity */}
            <svg viewBox="0 0 50 50" className="w-full h-full">
              <circle cx="25" cy="25" r="20" fill="#4dff00" />
              <circle cx="15" cy="20" r="5" fill="#005db4" />
              <circle cx="35" cy="20" r="3" fill="#ff4d00" />
              <circle cx="25" cy="35" r="4" fill="#ffcc00" />
            </svg>
          </div>
          <span className="text-[#4dff00] text-2xl font-bold">PollyGlot</span>
          <span className="text-white text-xl ml-auto">✨ ✨</span>
        </div>
        <Card />
      </div>
    </div>
  );
}
