import { Colors } from "@/constants/theme";
import { convertBase64ToUri } from "@/hooks/utils/convertBase64";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const IndexScreen = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Mg Mg", profile: "", ph_no: "09887765542" },
    { id: 2, name: "Soe Soe", profile: "", ph_no: "09876654432" },
    { id: 3, name: "Toe Toe", profile: "", ph_no: "09877787765" },
    { id: 4, name: "Thu Thu", profile: "", ph_no: "09176652232" },
  ]);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput placeholder="Search your contacts here ..." />
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => router.push("/user/add")}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.safeArea}>
          <FlatList
            data={contacts}
            ListEmptyComponent={<Text>There are no users.</Text>}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item}>
                <View style={styles.avatorContainer}>
                  <Image
                    source={
                      item.profile
                        ? { uri: convertBase64ToUri(item.profile) }
                        : require("@/assets/images/default_profile.png")
                    }
                    style={styles.avator}
                  />
                </View>
                <View style={styles.contentContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.phone_no}>{item.ph_no}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) =>
              item.id?.toString() || Math.random().toString()
            }
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "8%",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listContainer: {
    flex: 1,
  },
  addBtn: {
    height: 40,
    width: 40,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  plusText: {
    fontSize: 26,
    color: Colors.textPrimary,
    fontWeight: "300",
  },

  safeArea: {
    flex: 1,
  },
  listContent: {
    padding: 10,
    paddingBottom: 20,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 16,
    margin: 5,
    backgroundColor: Colors.surface,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatorContainer: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 40,
    height: 80,
    width: 80,
    overflow: "hidden",
    marginRight: 10,
  },
  avator: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    minHeight: 70,
  },
  name: {
    marginHorizontal: 13,
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  phone_no: {
    marginHorizontal: 13,
    fontSize: 14,
    color: Colors.textSecondary,
  },
});
