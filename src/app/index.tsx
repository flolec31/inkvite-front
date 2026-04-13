import {ThemedView} from "@/components/themed-view";
import {TextInput} from "@/components/ui/text-input";
import {BottomTabInset, MaxContentWidth, Spacing} from "@/constants/theme";
import {zodResolver} from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import * as z from "zod";

const formSchema = z.object({
  firstname: z.string(),
  name: z.string(),
  email: z.email(),
  phone: z.string().optional(),
});

export default function HomeScreen() {
  const {t} = useTranslation();

  const {control, handleSubmit} = useForm({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitForm(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Controller
          control={control}
          name="firstname"
          render={({field: {onChange, value}}) => (
            <TextInput
              label={`${t("Firstname")} *`}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="firstname"
          render={({field: {onChange, value}}) => (
            <TextInput
              label={`${t("Name")} *`}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="firstname"
          render={({field: {onChange, value}}) => (
            <TextInput
              label={`${t("Email")} *`}
              value={value}
              onChange={onChange}
            />
          )}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    // alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: "stretch",
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
