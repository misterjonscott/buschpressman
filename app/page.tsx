import ColorPaletteGenerator from '@/components/ColorPaletteGenerator'; // Adjust import path if needed

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Shadcn UI Showcase</h1>
      <ColorPaletteGenerator />
    </div>
  );
}