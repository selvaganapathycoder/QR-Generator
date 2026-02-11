
# 📱 Modern QR Code Generator

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)

A high-performance, client-side QR Code Generator built with modern web technologies. Create, customize, and download QR codes instantly with a clean, responsive interface.

[**🔴 Live Demo**](https://qr-generator-jp1oxdhki-selvaganapathys-projects-840a79fb.vercel.app/)

## ✨ Key Features

- **⚡ Real-time Generation**: Instant QR code updates as you type, optimized with debouncing for performance.
- **🎨 extensive Customization**: 
  - Adjust background and foreground colors.
  - Set custom dimensions (size) and margins.
  - Choose error correction levels (Low, Medium, Quartile, High).
- **🌗 Dark/Light Mode**: Fully responsive theme switching with system preference detection.
- **📥 Multiple Formats**: Download your QR codes in high-quality **PNG** or scalable **SVG** formats.
- **📱 Responsive Design**: A mobile-first approach ensuring a seamless experience on all devices.
- **🛡️ 100% Client-Side**: Privacy-focused; no data is sent to any server. All processing happens in your browser.

## 🛠️ Tech Stack

This project is built with a focus on performance, maintainability, and modern developer experience.

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **QR Engine**: [node-qrcode](https://github.com/soldair/node-qrcode)
- **Linting**: ESLint

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/selvaganapathycoder/QR-Generator.git
   cd QR-Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to see the application running.

## 📖 Usage

1. **Enter Text/URL**: Type the content you want to convert into the input field.
2. **Customize**: Use the settings panel to change colors, size, and error correction levels.
3. **Preview**: See the changes in real-time.
4. **Download**: Click the "Download PNG" or "Download SVG" buttons to save your QR code.

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components
│   ├── InputPanel.jsx   # user input and configuration
│   ├── QRPreview.jsx    # visual display of the QR code
│   ├── ThemeToggle.jsx  # dark/light mode switcher
│   └── DownloadButtons.jsx # export functionality
├── hooks/               # Custom React hooks
│   └── useDebounce.js   # performance optimization
├── utils/               # Helper functions
│   └── generateQR.js    # QR generation logic
├── App.jsx              # Main application layout
└── main.jsx             # Entry point
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions or find bugs, please open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Selvaganapathy**

- GitHub: [@selvaganapathycoder](https://github.com/selvaganapathycoder)

---

*Made with ❤️ and clean code.*
