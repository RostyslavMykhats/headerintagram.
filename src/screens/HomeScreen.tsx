import { InstagramHeader } from "@/components/Header";
import { Stories } from "@/components/Stories";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InstagramHeader />
      <Stories />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
