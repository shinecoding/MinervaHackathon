import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import TaskItem from "./TaskItem";
import { FlashList } from "@shopify/flash-list";
// import { AuthContext } from "@/store/auth-context";
// import MenuButton from '@/components/ui/MenuButton';
import { useRouter } from "expo-router";


interface TaskListProps {
  data: any[];
}

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean);
  // const authCtx = useContext(AuthContext);
  // authCtx.isAuthenticated ? setIsAuthenticated(true) : setIsAuthenticated(false);
  const router = useRouter();

  function selectQuestHandler(id: number) {
    if (isAuthenticated) {
      // router.push(`/detail?questId=${id}`);
    } else {
      // router.push("/auth");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.listContainer}>
        <FlashList
          contentContainerStyle={styles.list}
          numColumns={1}
          data={data}
          // keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem data={item} onSelect={selectQuestHandler} />
          )}
          estimatedItemSize={200}
        />
      </View>
    </SafeAreaView>
  );
}

export default TaskList;

const styles = StyleSheet.create({

  listContainer: {
    flex: 1
  },
  list: {
    padding: 14
  }
});
