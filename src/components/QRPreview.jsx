import { QrCode } from "lucide-react";

export default function QRPreview({ qrImage, isLoading }) {
  return (
    <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl border-2 border-gray-200/60 dark:border-gray-700/60 flex items-center justify-center overflow-hidden transition-all duration-500 shadow-2xl shadow-black/5 dark:shadow-black/20 group hover:shadow-3xl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-purple-500/[0.03] dark:from-blue-500/[0.08] dark:via-transparent dark:to-purple-500/[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

      <div className="relative z-10 w-full h-full flex items-center justify-center p-10">
        {isLoading ? (
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 animate-pulse flex items-center justify-center shadow-inner">
            <QrCode className="w-14 h-14 text-gray-400 dark:text-gray-500 animate-spin-slow opacity-40" />
          </div>
        ) : qrImage ? (
          <div className="relative group/image w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-2xl blur-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            <img
              src={qrImage}
              alt="QR Code Preview"
              className="relative w-full h-full object-contain drop-shadow-2xl transition-all duration-500 ease-out group-hover/image:scale-[1.02]"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center space-y-5 text-gray-400 dark:text-gray-500">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700/80 shadow-lg">
              <QrCode className="w-14 h-14 opacity-40" />
            </div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              Enter text to generate QR code
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
