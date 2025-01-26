import { Image, StyleSheet, Platform, View, Text, SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TaskList from '@/components/TaskList';
import { LinearGradient } from 'expo-linear-gradient';

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

export default function CollabScreen() {
  if (!data) {
    return (
      <LinearGradient
            colors={['#f4cccc', '#E7DAF5', '#d9f0fd']} // 색상 배열
            style={styles.safeView}
            start={{ x: 0, y: 0 }} // 사선 시작 (좌측 상단)
              end={{ x: 1, y: 1 }} // 사선 끝 (우측 하단)
          >
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>
            No tasks added yet - start adding some!
          </Text>
        </View>
      </LinearGradient>
    );
  }
  return <TaskList data={data} />;
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    // padding: 20,
    // backgroundColor: "#E7DAF5",
    // justifyContent: "center",
    // alignItems: "center",
  },
  fallbackContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    // color: Colors.error500,
  },
});
