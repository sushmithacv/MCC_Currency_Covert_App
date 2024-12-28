import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Divider,PaperProvider,Text } from 'react-native-paper';

export default function App() {
  return (

    <PaperProvider>
    <View style={styles.container}>
    <Text variant="headlineLarge">Headline Large</Text>
    <Divider />
    <Text variant="bodyMedium" style={styles.body}>Technology has revolutionized the way we live, work, and communicate. Over the past few decades, the rapid advancements in computing and the internet have opened up new possibilities for businesses and individuals alike. From the rise of social media platforms to the widespread use of smartphones, our world is more interconnected than ever before. As technology continues to evolve, we are seeing the emergence of new fields such as artificial intelligence, machine learning, and blockchain, which are poised to reshape industries and transform daily life. However, with these advancements come challenges, including privacy concerns, cybersecurity threats, and the digital divide. As we move forward, it is essential to find a balance between embracing innovation and addressing the ethical and social implications of new technologies</Text>
    
      <StatusBar style="auto" />
    </View>
  </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    padding:10,
    textAlign:'justify'
  }
});
