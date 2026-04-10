/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    text: "#000000",
    background: "#ffffff",
    backgroundElement: "#F0F0F3",
    backgroundSelected: "#E0E1E6",
    textSecondary: "#60646C",
  },
  dark: {
    text: "#ffffff",
    background: "#000000",
    backgroundElement: "#212225",
    backgroundSelected: "#2E3135",
    textSecondary: "#B0B4BA",
  },
  primary: {
    50: "rgb(240, 244, 233)",
    100: "rgb(209, 220, 187)",
    200: "rgb(187, 203, 154)",
    300: "rgb(156, 179, 108)",
    400: "rgb(137, 165, 79)",
    500: "rgb(107, 142, 35)",
    600: "rgb(97, 129, 32)",
    700: "rgb(76, 101, 25)",
    800: "rgb(59, 78, 19)",
    900: "rgb(45, 60, 15)",
  },
  secondary: {
    50: "rgb(234, 236, 238)",
    100: "rgb(190, 195, 201)",
    200: "rgb(158, 166, 175)",
    300: "rgb(114, 126, 138)",
    400: "rgb(86, 101, 115)",
    500: "rgb(44, 62, 80)",
    600: "rgb(40, 56, 73)",
    700: "rgb(31, 44, 57)",
    800: "rgb(24, 34, 44)",
    900: "rgb(18, 26, 34)",
  },
  black: {
    50: "rgb(232, 232, 232)",
    100: "rgb(185, 185, 185)",
    200: "rgb(151, 151, 151)",
    300: "rgb(103, 103, 103)",
    400: "rgb(73, 73, 73)",
    500: "rgb(28, 28, 28)",
    600: "rgb(25, 25, 25)",
    700: "rgb(20, 20, 20)",
    800: "rgb(15, 15, 15)",
    900: "rgb(12, 12, 12)",
  },
  red: {
    50: "rgb(249, 235, 234)",
    100: "rgb(235, 194, 189)",
    200: "rgb(226, 164, 157)",
    300: "rgb(213, 122, 113)",
    400: "rgb(205, 97, 85)",
    500: "rgb(192, 57, 43)",
    600: "rgb(175, 52, 39)",
    700: "rgb(136, 40, 31)",
    800: "rgb(106, 31, 24)",
    900: "rgb(81, 24, 18)",
  },
  cream: {
    50: "rgb(254, 253, 249)",
    100: "rgb(253, 247, 236)",
    200: "rgb(252, 244, 227)",
    300: "rgb(250, 238, 214)",
    400: "rgb(249, 235, 206)",
    500: "rgb(248, 230, 194)",
    600: "rgb(226, 209, 177)",
    700: "rgb(176, 163, 138)",
    800: "rgb(136, 127, 107)",
    900: "rgb(104, 97, 81)",
  },
  golden: {
    50: "rgb(251, 246, 232)",
    100: "rgb(242, 226, 183)",
    200: "rgb(235, 211, 148)",
    300: "rgb(226, 191, 100)",
    400: "rgb(221, 179, 69)",
    500: "rgb(212, 160, 23)",
    600: "rgb(193, 146, 21)",
    700: "rgb(151, 114, 16)",
    800: "rgb(117, 88, 13)",
    900: "rgb(89, 67, 10)",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
