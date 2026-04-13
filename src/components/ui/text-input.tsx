import { Colors } from "@/constants/theme";
import {
  TextInput as PaperTextInput,
  TextInputProps,
} from "react-native-paper";

export function TextInput({ ...props }: TextInputProps) {
  return (
    <PaperTextInput
      mode="outlined"
      theme={{
        colors: {
          primary: Colors.primary[600],
          onSurfaceVariant: Colors.primary[600],
        },
      }}
      {...props}
    />
  );
}
