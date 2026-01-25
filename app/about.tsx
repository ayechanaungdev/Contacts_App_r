import { Colors } from "@/constants/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <>
      {/* set the header color */}
      <Stack.Screen
        options={{
          title: "About",
          headerTintColor: Colors.primaryDark,
        }}
      />

      {/* about content */}
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/contacts_icon.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Contacts App</Text>
        </View>

        <Text style={styles.description}>
          Contacts App is a simple offline-first mobile application that allows
          users to create, view, update, and delete contact information.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.item}>• Add new contacts</Text>
          <Text style={styles.item}>• Edit existing contacts</Text>
          <Text style={styles.item}>• Delete contacts</Text>
          <Text style={styles.item}>• Customize/ Manage Contact Groups</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technology</Text>
          <Text style={styles.item}>• React Native (Expo)</Text>
          <Text style={styles.item}>• Local Storage / SQLite</Text>
          <Text style={styles.item}>• TypeScript</Text>
        </View>

        <Text style={styles.footer}>Version 1.0.0</Text>

        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
  titleContainer: {
    alignItems: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: Colors.accentLight,
    borderRadius: 60,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 70,
    height: 70,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 28,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    lineHeight: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.primaryDark,
    fontWeight: "600",
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    marginLeft: 8,
    marginBottom: 4,
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    opacity: 0.6,
    marginTop: 16,
  },
});
