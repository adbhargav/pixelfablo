// All categories use the same images: /assets/p1.jpg to /assets/p10.jpg
// Now each preset has a different dummy price!

export const presetImages = Array.from({ length: 10 }, (_, i) => ({
  name: `Preset ${i + 1}`,
  image: `/assets/p${i + 1}.jpg`,
  description: `Preset example ${i + 1}.`,
  price: `$${(9.99 + i * 4.5).toFixed(2)}`, // Example: $9.99, $14.49, $18.99, etc.
}));

export const presetSections = [
  {
    title: "Cinematic",
    description:
      "Inspired by Hollywood films. Deep contrast, desaturated shadows, and dramatic color tones to create mood and emotion in every frame.",
    presets: presetImages,
  },
  {
    title: "Teal & Orange",
    description:
      "Popular stylized look with warm skin tones and cool teal shadows. High contrast and eye-catching for travel vlogs and action content.",
    presets: presetImages,
  },
  
  
 
];