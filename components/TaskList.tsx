import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import TaskItem from "./TaskItem";
import { FlashList } from "@shopify/flash-list";
// import { AuthContext } from "@/store/auth-context";
// import MenuButton from '@/components/ui/MenuButton';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";


interface TaskListProps {
  data: any[];
}

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean);
  // const authCtx = useContext(AuthContext);
  // authCtx.isAuthenticated ? setIsAuthenticated(true) : setIsAuthenticated(false);
  const router = useRouter();


  return (
    <LinearGradient
      colors={['#f4cccc', '#E7DAF5', '#d9f0fd']} // 색상 배열
      style={styles.safeView}
      start={{ x: 0, y: 0 }} // 사선 시작 (좌측 상단)
        end={{ x: 1, y: 1 }} // 사선 끝 (우측 하단)
    >
    {/* <SafeAreaView style={styles.safeView}> */}
      <View style={styles.listContainer}>
        <FlashList
          contentContainerStyle={styles.list}
          numColumns={1}
          data={data}
          // keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem data={item} />
          )}
          estimatedItemSize={200}
        />
      </View>
    {/* </SafeAreaView> */}
      </LinearGradient>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    // padding: 20,
    // backgroundColor: "#E7DAF5",
    // justifyContent: "center",
    // alignItems: "center",
  },
  listContainer: {
    flex: 1
  },
  list: {
    padding: 14
  }
});
