export type ButtonType = "primary" | "secondary";

interface ButtonTheme {
  class: string;
  hover: string;
  focus?: string;
  border?: string;
}

export const buttonThemes: Record<ButtonType, ButtonTheme> = {
  primary: {
    class: "bg-green-500 text-white font-bold px-2 rounded-sm space-x-4",
    hover: "hover:bg-green-600",
  },
  secondary: {
    class: "bg-blue-500 text-white font-bold px-2 rounded",
    hover: "hover:bg-blue-600",
  },
};
