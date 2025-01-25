import { ImageBackground, StyleSheet, Text, View, Alert, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
// import Label from '@/components/ui/Label';
// import HorizontalScroll from '@/components/ui/HorizontalScroll';
// import DescriptionText from '@/components/ui/DescriptionText';
// import FlatButton from '@/components/ui/FlatButton';
// import Button from '@/components/ui/Button';
// import { postQuest } from '@/api/quest';
// import ImageBottomSheet from '@/components/ImageBottomSheet';
// import PhotoButton from '@/components/ui/PhotoButton';
// import { ImageContext } from '@/store/image-context'
// import { Colors } from '@/constants/styles';
// import { imageUpload } from '../util/imageUpload';
// import Input from '@/components/ui/Input';
import { useRouter } from 'expo-router';
import { data } from './(tabs)';
import Label from '@/components/ui/Label';
import DescriptionText from '@/components/ui/DescriptionText';
import FlatButton from '@/components/ui/FlatButton';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRoute } from '@react-navigation/native';
import { IconSymbol } from '@/components/ui/IconSymbol.ios';
// const route = useRoute();

const CreateScreen = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredCollaborative, setEnteredCollaborative] = useState('');
  const [enteredDifficulty, setEnteredDifficulty] = useState('');
  const [enteredAdditionalNotes, setEnteredAdditionalNotes] = useState('');
  const [titleIsInvalid, setTitleIsInvalid] = useState(false);
  const [AdditionalNotesIsInvalid, setAdditionalNotesIsInvalid] = useState(false);
  const [privatePasscodeIsInvalid, setPrivatePasscodeIsInvalid] = useState(false);
  const router = useRouter();

  function updateInputValueHandler(inputType: string, enteredValue: string) {
    switch (inputType) {
      case 'title':
        setEnteredTitle(enteredValue);
        break;
      case 'collaborative':
        setEnteredCollaborative(enteredValue);
        break;
      case 'difficulty':
        setEnteredDifficulty(enteredValue)
        break;
      case 'additionalNotes':
        setEnteredAdditionalNotes(enteredValue);
        break;
    }
  }

  function showAlert(message: string) {
    Alert.alert("Invalid input", message);
  }

  function validate() {
    let title = enteredTitle.trim();
    // let collaborative = enteredCollaborative.trim();
    let difficulty = enteredDifficulty.trim();
    let additionalNotes = enteredAdditionalNotes.trim();

    const titleIsNotBlank = title !== '';
    const additionalNotesIsNotBlank = additionalNotes !== '';
    const difficultyIsNumber = !isNaN(parseInt(difficulty));

    if (!titleIsNotBlank) {
      setTitleIsInvalid(false)
      return { isValid: false, message: 'Please select the Category to create your Quest!' };
    } else {
      setTitleIsInvalid(true)
    }

    if (!additionalNotesIsNotBlank) {
      setAdditionalNotesIsInvalid(false)
      return { isValid: false, message: 'Tell us everything' };
    } else {
      setAdditionalNotesIsInvalid(true)
    }


    return { isValid: true };
  }



  function goBackHandler() {
    console.log("go back")
    // imgCtx.updateImage(quest.enteredSnapExample);
    router.back();
  }

  async function submitHandler() {
    let id = null;
    const validation = validate();

    if (!validation.isValid) {
      showAlert(validation.message || 'Unknown error');
    } else {

      console.log("Start Quest")
      const data = {
        title: enteredTitle,
        collaborative: enteredCollaborative,
        difficultiy: enteredDifficulty,
        additionalNotes: enteredAdditionalNotes
      }
      try {
        // id = await postQuest(data)
      } catch (error) {
        console.log("퀘스트 생성 직 후 에러")
        console.log(error)
      }

      // router.push(`/detail/${id}`);
    }
  }




  let passcode = null
  // if (enteredStatus && enteredStatus == 'Private') {
  //   passcode = (
  //     <Input
  //       label="Private Passcode*"
  //       onUpdateValue={updateInputValueHandler.bind(this, 'privatePasscode')}
  //       value={enteredPrivatePasscode}
  //       placeholder="ex) 1234"
  //       keyboardType="default"
  //       secure={false}
  //       isInvalid={privatePasscodeIsInvalid}
  //       multiline={false}
  //       numberOflines={1}
  //     />
  //   )
  // }

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <ScrollView style={styles.container}>

          {/* <Label>Title*</Label> */}
          <Input label="Title*"
        onUpdateValue={updateInputValueHandler.bind(this, 'title')}
        value={enteredTitle}
        placeholder="Add something super important here"
        keyboardType="default"
        secure={false}
        isInvalid={privatePasscodeIsInvalid}
        multiline={false}
        numberOflines={1}
        />

          <Label>Collaborative</Label>
          
          {/* <View style={styles.snapExampleContainer}>
            <View style={styles.snapExampleText}>
              <DescriptionText>*Upload the Image</DescriptionText>
              <DescriptionText>that best portrays</DescriptionText>
              <DescriptionText>the quest</DescriptionText>
            </View>
          </View> */}

          <Label>Difficulty Rating</Label>
          <View style={styles.starContainer}>
      {Array.from({ length: 5 }, (_, index) => (
        <IconSymbol
          key={index}
          name="star"
          size={24}
          color={index < parseInt(enteredDifficulty) ? 'gold' : 'gray'} // 'gold' for filled, 'gray' for unfilled
        />
      ))}
    </View>
          
          <Input label="Additional Rates*"
        onUpdateValue={updateInputValueHandler.bind(this, 'title')}
        value={enteredTitle}
        placeholder="Tell us everything"
        keyboardType="default"
        secure={false}
        isInvalid={AdditionalNotesIsInvalid}
        multiline={true}
        numberOflines={5}
        />

          <View style={styles.buttonContainer}>
            {/* <View style={styles.goBack}>
              <FlatButton onPress={goBackHandler}>Go Back</FlatButton>
            </View> */}
            <View style={styles.startQuest}>
              <Button onPress={submitHandler} disabled={false} display={true}>Submit</Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* <ImageBottomSheet page="snapExample" ref={bottomSheetModalRef} /> */}
    </>
  )
}

export default CreateScreen

const styles = StyleSheet.create({

  safeView: {
    flex: 1
  },
  container: {
    padding: 20,
    flex: 5
  },
  snapExampleContainer: {
    flexDirection: 'row'
  },
  snapExampleText: {
    flex: 3,
    justifyContent: "center",
    marginRight: 0
  },
  snapExampleImage: {
    flex: 5,
    borderRadius: 10,

  },
  imageBackground: {

    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 10,
    opacity: 10
  },
  imageView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  goBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startQuest: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewBefore: {
    // backgroundColor: Colors.primary100,
    borderRadius: 20,
    // borderColor: Colors.primary300,
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    overflow: 'hidden'
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  }

})