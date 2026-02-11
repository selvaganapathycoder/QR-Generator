import QRCode from 'qrcode';

export const generateQR = async (text) => {
  if (!text) return null;
  
  try {
    // Generate PNG Data URL (High Resolution 512px)
    // Using a white background for better scannability, but user might want transparent.
    // Standard QRs usually have white bg. Let's stick to white for reliability unless specified.
    // Wait, the user asked for "Glassmorphism effect" in UI, but QR code itself should be scannable.
    // I will use transparent background if possible, or white.
    // Standard practice for reliable QR codes is high contrast. White background is safest.
    // However, if the user downloads a PNG, they might want transparent.
    // Let's use transparent background for the QR code itself so it can be placed anywhere?
    // Actually, many readers struggle with transparent backgrounds if placed on dark surface.
    // I'll stick to #ffffff for light color.
    
    const options = {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 512,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    };

    const png = await QRCode.toDataURL(text, options);
    
    const svgOptions = {
      ...options,
      type: 'svg',
    };
    
    const svg = await QRCode.toString(text, svgOptions);
    
    return { png, svg };
  } catch (err) {
    console.error('Error generating QR code:', err);
    return null;
  }
};
