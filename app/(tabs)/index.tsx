import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskList from '@/components/TaskList';

export const data = [
  {
    id: 1,
    title: "Buy ingredients for Friday dinner",
    collaborators: ["Christy", "Fatimah"],
    difficulty: 2,
    additionalNotes: "salad (C), chicken (F), cream (C), bread (C)"
  },
  {
    id: 2,
    title: "Prepare presentation slides",
    collaborators: ["John", "Doe"],
    difficulty: 3,
    additionalNotes: "Include charts and graphs"
  },
];

export default function HomeScreen() {
  if (!data) {
    return (
      // <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>
            No tasks added yet - start adding some!
          </Text>
        </View>
      // </SafeAreaView>
    );
  }
  return <TaskList data={data} />;
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    // color: Colors.error500,
  },
});
