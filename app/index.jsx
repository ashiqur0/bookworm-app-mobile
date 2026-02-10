import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export default function Index() {

  const { user, token, checkAuth, logout } = useAuthStore();  // Accessing global variable from zustand store
  console.log({ user, token });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Hello, {user?.username}</Text>
      <Text style={styles.title}>{user?.token}</Text>
      <Link href="/(auth)/signup">Signup</Link>
      <Link href="/(auth)/">Login</Link>

      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { color: "green" }
})