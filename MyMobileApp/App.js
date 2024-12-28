import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import { Divider, PaperProvider, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./components/Home";
import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
