"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

// Define some predefined color palettes
interface ColorPalette {
  red: number;
  green: number;
  blue: number;
}

const colorPalettes: Record<string, ColorPalette> = {
  cool: { red: 50, green: 100, blue: 200 },
  warm: { red: 220, green: 120, blue: 80 },
  neutral: { red: 150, green: 150, blue: 150 },
  vibrant: { red: 255, green: 0, blue: 150 },
};

const ColorPaletteGenerator: React.FC = () => {
  const [red, setRed] = useState<number>(150);
  const [green, setGreen] = useState<number>(150);
  const [blue, setBlue] = useState<number>(150);
  const [hexColor, setHexColor] = useState<string>('#969696');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [colorHistory, setColorHistory] = useState<string[]>([]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toHex = (value: number): string => {
    const hexValue = Math.round(value).toString(16);
    return hexValue.length === 1 ? '0' + hexValue : hexValue;
  };

  const handlePaletteChange = (palette: string) => {
    const selectedPalette = colorPalettes[palette as keyof typeof colorPalettes];
    if (selectedPalette) {
      setRed(selectedPalette.red);
      setGreen(selectedPalette.green);
      setBlue(selectedPalette.blue);
      updateHexColor(selectedPalette);
    }
  };

  const updateHexColor = (color: ColorPalette) => {
    const hex = `#${toHex(color.red)}${toHex(color.green)}${toHex(color.blue)}`;
    setHexColor(hex);
  };

  const addToColorHistory = (color: string) => {
    if (!colorHistory.includes(color)) {
      setColorHistory([...colorHistory, color]);
    }
  };

  const handleDarkModeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-start mb-4">
        <Label htmlFor="darkMode" className="mr-2 text-sm font-medium">
          Dark Mode
        </Label>
        <Switch id="darkMode" checked={isDarkMode} onCheckedChange={handleDarkModeToggle} />
      </div>
      <Card className="w-[400px] dark:bg-zinc-800 dark:text-zinc-100">
        <CardHeader>
          <CardTitle>Interactive Color Palette</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* Color Palette Select Dropdown */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Select onValueChange={handlePaletteChange}>
                <SelectTrigger className="w-[180px] dark:bg-zinc-700 dark:text-zinc-100 dark:ring-zinc-600 dark:focus:ring-primary">
                  <SelectValue placeholder="Select a palette" />
                </SelectTrigger>
                <SelectContent className="dark:bg-zinc-700 dark:text-zinc-100 dark:ring-zinc-600">
                  {Object.entries(colorPalettes).map(([key]) => (
                    <SelectItem key={key} value={key} className="dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-600 dark:focus:bg-zinc-600">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => addToColorHistory(hexColor)} variant="outline">Save Color</Button>
            </div>
          </div>

          {/* Sliders and Input for RGB Values */}
          {['red', 'green', 'blue'].map((color, index) => (
            <div key={color} className="flex items-center space-x-4">
              <Label htmlFor={color.charAt(0).toUpperCase() + color.slice(1)}>{color.charAt(0).toUpperCase() + color.slice(1)}:</Label>
              <Slider
                id={color}
                defaultValue={[color === 'red' ? red : color === 'green' ? green : blue]}
                max={255}
                onValueChange={(value) => {
                  if (color === 'red') setRed(value[0]);
                  else if (color === 'green') setGreen(value[0]);
                  else setBlue(value[0]);
                  updateHexColor({ red, green, blue });
                }}
                className="dark:bg-zinc-700"
              />
              <Input
                className="w-16 dark:bg-zinc-700 dark:text-zinc-100 dark:ring-zinc-600 dark:focus:ring-primary"
                type="number"
                min="0"
                max="255"
                value={color === 'red' ? red : color === 'green' ? green : blue}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  if (color === 'red') setRed(value);
                  else if (color === 'green') setGreen(value);
                  else setBlue(value);
                  updateHexColor({ red, green, blue });
                }}
              />
            </div>
          ))}

          {/* Display Selected Color */}
          <div className="h-24 rounded-md" style={{ backgroundColor: hexColor }} />

          <div className="flex justify-between items-center">
            <p className="dark:text-zinc-100">Hex Code: <span className="font-semibold">{hexColor}</span></p>
            <Button onClick={() => navigator.clipboard.writeText(hexColor)} className="dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80">
              Copy Hex
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Color Preview Cards Section */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {colorHistory.map((color, index) => (
          <div key={index} className="p-4 border rounded-md shadow-md dark:bg-zinc-700">
            <div className="h-16 rounded-md" style={{ backgroundColor: color }} />
            <p className="mt-2 text-center dark:text-zinc-100">{color}</p>
            <Button onClick={() => navigator.clipboard.writeText(color)} className="mt-2 w-full dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80">
              Copy Hex
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPaletteGenerator;