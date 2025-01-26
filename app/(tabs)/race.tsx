import React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const RacePage = () => {
  const friends = [
    { name: 'Me', progress: 70 },
    { name: 'Christy', progress: 55 },
    { name: 'Fatimah', progress: 20 },
    { name: 'Vivi', progress: 35 },
    { name: 'Jordan', progress: 80 },
    { name: 'Mia', progress: 10 },
  ];

  return (
    <LinearGradient
      colors={['#f4cccc', '#E7DAF5', '#d9f0fd']}
      style={styles.safeView}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Friend Race</Text>
          <Ionicons name="search" size={24} color="purple" />
        </View>
        <ScrollView style={styles.scrollContainer}>
          {friends.map((friend, index) => (
            <View key={index} style={styles.friendRow}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${friend.progress}%` }]} />
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.navBar}>
          <Pressable style={styles.navItem}>
            <Ionicons name="list" size={24} color="gray" />
            <Text style={styles.navText}>My tasks</Text>
          </Pressable>
          <Pressable style={styles.navItem}>
            <Ionicons name="create-outline" size={24} color="gray" />
            <Text style={styles.navText}>Collaborative</Text>
          </Pressable>
          <Pressable style={styles.navItem}>
            <Ionicons name="flag-outline" size={24} color="purple" />
            <Text style={[styles.navText, styles.activeNavText]}>Race</Text>
          </Pressable>
          <Pressable style={styles.navItem}>
            <Ionicons name="person-outline" size={24} color="gray" />
            <Text style={styles.navText}>Profile</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RacePage;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
  },
  scrollContainer: {
    flex: 1,
  },
  friendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  friendName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  progressBarContainer: {
    flex: 3,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'purple',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'gray',
  },
  activeNavText: {
    color: 'purple',
    fontWeight: 'bold',
  },
});
