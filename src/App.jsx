import { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { generateQR } from "./utils/generateQR";
import InputPanel from "./components/InputPanel";
import QRPreview from "./components/QRPreview";
import DownloadButtons from "./components/DownloadButtons";
import ThemeToggle from "./components/ThemeToggle";
import { QrCode, ShieldCheck, Sparkles } from "lucide-react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [qrData, setQrData] = useState({ png: null, svg: null });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const debouncedValue = useDebounce(inputValue, 150);

  useEffect(() => {
    if (!debouncedValue) {
      setQrData({ png: null, svg: null });
      return;
    }

    const generate = async () => {
      setIsLoading(true);
      const data = await generateQR(debouncedValue);
      if (data) {
        setQrData(data);
      }
      setIsLoading(false);
    };

    generate();
  }, [debouncedValue]);

  const handleDownloadComplete = (type) => {
    setToastMessage(`Downloaded ${type.toUpperCase()} successfully!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 transition-colors duration-500">
      {/* Toast Notification */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transform transition-all duration-500 ease-out ${
          showToast
            ? "translate-y-0 opacity-100 scale-100"
            : "-translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white px-6 py-3.5 rounded-2xl shadow-2xl border-2 border-gray-200/80 dark:border-gray-700/60 flex items-center gap-3 font-medium text-sm backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
          {toastMessage}
        </div>
      </div>

      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Panel */}
        <div
          className="space-y-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <header className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3.5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/30 rounded-2xl w-fit shadow-sm">
                <QrCode className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <ThemeToggle />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-300 leading-tight tracking-tight">
              QR Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-medium">
              Generate high-quality QR codes instantly.
            </p>
          </header>

          <div className="glass-effect rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/5 dark:shadow-black/20 space-y-6 transition-all duration-300">
            <InputPanel value={inputValue} onChange={setInputValue} />

            <div className="pt-2">
              <DownloadButtons
                pngData={qrData.png}
                svgData={qrData.svg}
                onDownload={handleDownloadComplete}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 justify-center lg:justify-start opacity-70 hover:opacity-100 transition-all duration-300">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-medium">
              Privacy First: Generated locally in your browser.
            </span>
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div
          className="flex flex-col items-center justify-center lg:h-full lg:sticky lg:top-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="w-full max-w-md">
            <QRPreview qrImage={qrData.png} isLoading={isLoading} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
