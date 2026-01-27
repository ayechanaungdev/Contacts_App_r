// Utility functions for image handling
// 1. detect mime type
export const detectMimeType = (base64: string): string => {
  const signatures = {
    jpeg: "/9j/",
    png: "iVBORw0KGgo",
    gif: "R0lGOD",
    webp: "UklGR",
  };

  if (base64.startsWith(signatures.jpeg)) return "image/jpeg";
  if (base64.startsWith(signatures.png)) return "image/png";
  if (base64.startsWith(signatures.gif)) return "image/gif";
  if (base64.startsWith(signatures.webp)) return "image/webp";

  // fallback
  return "image/jpeg";
};

// 2. convert base64 to uri
export const convertBase64ToUri = (base64: string): string => {
  if (!base64) return base64;

  if (base64.startsWith('data:')) {
    return base64;
  }

  const stripped = base64.replace(/^data:.*;base64,/, '');
  const mime = detectMimeType(stripped);
  return `data:${mime};base64,${stripped}`;
};
