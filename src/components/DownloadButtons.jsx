import { Download, FileImage, FileCode } from "lucide-react";

export default function DownloadButtons({ pngData, svgData, onDownload }) {
  const handleDownload = (type, data) => {
    if (!data) return;

    const link = document.createElement("a");

    if (type === "svg") {
      const blob = new Blob([data], { type: "image/svg+xml" });
      link.href = URL.createObjectURL(blob);
    } else {
      link.href = data; // data URL for png
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    link.download = `qr-code-${timestamp}.${type}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onDownload) onDownload(type);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <button
        onClick={() => handleDownload("png", pngData)}
        disabled={!pngData}
        className="flex-1 group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[2px] disabled:opacity-40 disabled:cursor-not-allowed disabled:grayscale transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98] hover:scale-[1.02]"
      >
        <div className="relative h-full w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 px-6 py-3.5 rounded-[14px] flex items-center justify-center gap-2.5 text-white font-semibold overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <FileImage className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
          <span className="relative z-10">Download PNG</span>
          <span className="relative z-10 text-xs px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-sm ml-1 font-medium">
            512px
          </span>
        </div>
      </button>

      <button
        onClick={() => handleDownload("svg", svgData)}
        disabled={!svgData}
        className="flex-1 group rounded-2xl bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border-2 border-gray-300/50 dark:border-gray-700/50 hover:border-blue-500/60 dark:hover:border-blue-500/60 hover:bg-white dark:hover:bg-gray-900/50 px-6 py-3.5 flex items-center justify-center gap-2.5 font-semibold disabled:opacity-40 disabled:cursor-not-allowed disabled:grayscale transition-all duration-300 hover:shadow-xl active:scale-[0.98] hover:scale-[1.02]"
      >
        <FileCode className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400" />
        <span>Download SVG</span>
      </button>
    </div>
  );
}
