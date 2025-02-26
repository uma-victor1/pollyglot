"use client";
import React, { useState } from "react";
import { translateText } from "../actions/translate";

function Card() {
  const [translatedText, setTranslatedText] = useState("");
  const [text, setText] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSetTranslatedText = (newTranslatedText: string) => {
    if (newTranslatedText) {
      setIsTransitioning(true);
      // Small delay to show transition effect
      setTimeout(() => {
        setTranslatedText(newTranslatedText);
        setIsTransitioning(false);
      }, 300);
    } else {
      setTranslatedText("");
    }
  };

  const handleClearText = () => {
    setIsTransitioning(true);
    // Small delay to show transition effect
    setTimeout(() => {
      setTranslatedText("");
      setText("");
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div>
      {isTransitioning ? (
        <div className="p-5 flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#005db4]"></div>
        </div>
      ) : translatedText ? (
        <OriginalText
          text={text}
          translatedText={translatedText}
          onStartOver={handleClearText}
        />
      ) : (
        <TextToTranslate
          text={text}
          setText={setText}
          setTranslatedText={handleSetTranslatedText}
        />
      )}
    </div>
  );
}

export default Card;

// Spinner component
const Spinner = () => (
  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
);

// original text component
const OriginalText = ({
  text,
  translatedText,
  onStartOver,
}: {
  text: string;
  translatedText: string;
  onStartOver: () => void;
}) => {
  return (
    <div className="p-5">
      {/* Original Text Section */}
      <div className="mb-5">
        <div className="text-[#005db4] font-bold mb-3 flex items-center">
          Original text <span className="ml-1">👇</span>
        </div>
        <div className="bg-gray-100 rounded p-4 min-h-[60px]">{text}</div>
      </div>

      {/* Translation Result */}
      <div className="mb-5">
        <div className="text-[#005db4] font-bold mb-3 flex items-center">
          Your translation <span className="ml-1">👇</span>
        </div>
        <div className="bg-gray-100 rounded p-4 min-h-[60px]">
          {translatedText}
        </div>
      </div>

      {/* Start Over Button */}
      <button
        onClick={onStartOver}
        className="w-full bg-[#005db4] text-white py-2 px-4 rounded font-bold"
      >
        Start Over
      </button>
    </div>
  );
};

// Text to translate component
const TextToTranslate = ({
  setTranslatedText,
  text,
  setText,
}: {
  setTranslatedText: (text: string) => void;
  text: string;
  setText: (text: string) => void;
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("french");
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;

    setIsLoading(true);
    try {
      const translatedText = await translateText(text, selectedLanguage);
      // @ts-expect-error - translatedText type needs to be properly defined from translateText response
      setTranslatedText(translatedText?.text);
    } catch (error) {
      console.error("Translation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="p-5">
      {/* Text Input Section */}
      <div className="mb-5">
        <div className="text-[#005db4] font-bold mb-3 flex items-center">
          Text to translate <span className="ml-1">👈</span>
        </div>
        <div className="bg-gray-100 rounded p-4 min-h-[60px]">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-transparent outline-none resize-none"
            rows={2}
            disabled={isLoading}
            placeholder="How are you?"
          />
        </div>
      </div>

      {/* Language Selection */}
      <div className="mb-5">
        <div className="text-[#005db4] font-bold mb-3 flex items-center">
          Select language <span className="ml-1">👇</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="french"
              name="language"
              value="french"
              checked={selectedLanguage === "french"}
              onChange={() => setSelectedLanguage("french")}
              className="mr-2"
              disabled={isLoading}
            />
            <label htmlFor="french">French</label>
            <span className="ml-2">🇫🇷</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="spanish"
              name="language"
              value="spanish"
              checked={selectedLanguage === "spanish"}
              onChange={() => setSelectedLanguage("spanish")}
              className="mr-2"
              disabled={isLoading}
            />
            <label htmlFor="spanish">Spanish</label>
            <span className="ml-2">🇪🇸</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="japanese"
              name="language"
              value="japanese"
              checked={selectedLanguage === "japanese"}
              onChange={() => setSelectedLanguage("japanese")}
              className="mr-2"
              disabled={isLoading}
            />
            <label htmlFor="japanese">Japanese</label>
            <span className="ml-2">🇯🇵</span>
          </div>
        </div>
      </div>

      {/* Translate Button */}
      <button
        onClick={handleTranslate}
        className="w-full bg-[#005db4] text-white py-2 px-4 rounded font-bold flex items-center justify-center"
        disabled={isLoading || !text.trim()}
      >
        {isLoading ? (
          <>
            <Spinner />
            <span className="ml-2">Translating...</span>
          </>
        ) : (
          "Translate"
        )}
      </button>
    </div>
  );
};
