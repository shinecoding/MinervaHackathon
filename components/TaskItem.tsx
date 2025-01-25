import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// import { Colors } from "@/constants/styles";
// import Button from "@/components/ui/Button";
// import IconButton from '@/components/ui/IconButton';
// import addSnap from "@/util/snap";
// import { getLatestSnapDate, getSnap } from "@/api/snap";


const TaskItem: React.FC = ({ data, onSelect }) => {


  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect.bind(this, data.id)}
    >
      <View style={styles.infoContainer}>
        {/* <View style={styles.infoContent}> */}
        {/* {imagePreview} */}

        {/* <View style={{ flex: 4 }}> */}
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{data.difficulty}</Text>
          <Text style={styles.text}>{data.additionalNotes}</Text>
        </View>
        {/* </View> */}
        {/* <View style={styles.icon}> */}
        {/* <IconButton icon="chevron-forward-outline" color={Colors.primary500} size={40} onPress={goDetail} /> */}
        {/* </View> */}
        {/* </View> */}
        {/* <View style={styles.button}>
          <Button onPress={takePhoto} disabled={isButtonDisabled} display={true}>Snap</Button>
        </View> */}
      </View>

    </Pressable>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  item: {
    // flexDirection: "row",
    // alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: '5%',
    paddingHorizontal: 12,
    width: '90%',
    // height: 200,
    backgroundColor: 'pink',
    // backgroundColor: Colors.gray300,
    // borderColor: Colors.primary500,
    // borderWidth: 3,
  },
  pressed: {
    opacity: 0.9,
  },
  infoContainer: {
    // flex: 1,
    padding: 12,
  },
  infoContent: {
    height: '87%'
    // flexDirection: 'row',
    // alignItems: 'stretch'
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    // color: Colors.primary500,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 13,
    // color: Colors.primary500
  },
  icon: {
    // flex: 1, alignItems: 'flex-end', marginLeft: 0
  },
  button: {
    bottom: 10
  },
  address: {
    fontSize: 12,
    // color: Colors.primary500,
  },
});
