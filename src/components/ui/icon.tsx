import * as icons from "lucide-react-native/icons";

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

export function Icon({ name, color, size }: IconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
}
