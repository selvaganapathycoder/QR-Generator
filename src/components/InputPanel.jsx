import { X, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function InputPanel({
  value,
  onChange,
  placeholder = "Enter URL or text to generate QR code...",
}) {
  const [copied, setCopied] = useState(false);

  const handleClear = () => {
    onChange("");
  };

  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 w-full">
      <div className="relative group">
        <label htmlFor="qr-input" className="sr-only">
          QR Content
        </label>
        <textarea
          id="qr-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-32 md:h-40 p-5 rounded-2xl bg-gray-100/80 dark:bg-gray-800/80 border-2 border-gray-200/50 dark:border-gray-700/50 focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900/50 outline-none transition-all duration-300 resize-none text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 font-medium shadow-sm hover:shadow-md focus:shadow-xl focus:ring-4 focus:ring-blue-500/10"
          spellCheck="false"
        />

        {/* Action Buttons inside Textarea */}
        <div className="absolute top-3 right-3 flex items-center space-x-2">
          {value && (
            <button
              onClick={handleClear}
              className="p-2 rounded-xl bg-gray-200/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Clear input"
              title="Clear text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {value && (
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-gray-200/70 dark:bg-gray-700/70 backdrop-blur-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Copy text"
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500 dark:text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center text-xs font-semibold text-gray-500 dark:text-gray-500 px-1">
        <span
          className={
            value.length > 0
              ? "text-blue-600 dark:text-blue-400 transition-colors"
              : ""
          }
        >
          {value.length} characters
        </span>
        <span className="opacity-70">Supports Text, Keys & URLs</span>
      </div>
    </div>
  );
}
