import { Image, StyleSheet, Platform, View, Text, ImageBackground, SafeAreaView } from 'react-native';

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
      <SafeAreaView style={styles.safeView}>
            <Text style={styles.fallbackText}>
              No tasks added yet - start adding some!
            </Text>
      </SafeAreaView>
    );
  }
  return <TaskList data={data} />;
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    // padding: 20,
    // backgroundColor: "#E7DAF5",
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    // color: Colors.error500,
  },

  background: {
    flex: 1, // 전체 화면을 채우도록 설정
    resizeMode: 'cover', // 배경 이미지가 화면 크기에 맞게 조정됨
  }
});
