import { Image, Pressable, StyleSheet, Text, View, LayoutAnimation } from "react-native";
import React, { useEffect, useState } from "react";
// import { Colors } from "@/constants/styles";
// import Button from "@/components/ui/Button";
// import IconButton from '@/components/ui/IconButton';
// import addSnap from "@/util/snap";
// import { getLatestSnapDate, getSnap } from "@/api/snap";


const TaskItem: React.FC = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded((prev) => !prev);
  };

  const renderStars = () => {
    const totalStars = 5; // 총 별 개수
    const filledStars = data.difficulty; // 채워진 별 개수
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < filledStars) {
        stars.push(
          <Text key={i} style={styles.star}>
            ★
          </Text>
        );
      } else {
        stars.push(
          <Text key={i} style={[styles.star, styles.outlineStar]}>
            ☆
          </Text>
        );
      }
    }
    return stars;
  }


  
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={toggleExpand}
    >
      <View style={styles.infoContainer}>
        {/* <View style={styles.infoContent}> */}
        {/* {imagePreview} */}

        {/* <View style={{ flex: 4 }}> */}
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.textContainer}>
          <View style={styles.starContainer}>{renderStars()}</View>

        </View>
        {isExpanded && (
          <View style={styles.expandedContent}>
            <Text style={[styles.text, styles.bold]}>Additional Notes:</Text>
            <Text style={styles.text}>{data.additionalNotes}</Text>
          </View>
        )}
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
    backgroundColor: 'white',
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
  expandedContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f3f6f4",
    borderRadius: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
  starContainer: {
    flexDirection: "row",
  },
  star: {
    fontSize: 16,
    color: "purple",
    marginHorizontal: 2,
  },
  outlineStar: {
    color: "purple", // 윤곽선 별 색상
  }
});
