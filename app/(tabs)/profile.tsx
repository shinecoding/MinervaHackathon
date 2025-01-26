import { Image, StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useRef, useContext, useLayoutEffect } from 'react'
// import { Colors } from '@/constants/styles'
// import ImageBottomSheet from '@/components/ImageBottomSheet'
import 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
// import { ImageContext } from '@/store/image-context'
// import { getCompletedQuestCount, getMyQuestCount } from '@/api/quest';
// import PriceBox from '@/components/ui/PriceBox';
// import { AuthContext } from '@/store/auth-context';
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
// import { BottomSheetModal } from '@gorhom/bottom-sheet';

const MyPageScreen = () => {
  const [name, setName] = useState('');
  const [pic, setPic] = useState('')
  const [inProgressCnt, setInProgressCnt] = useState(0);
  const [completedCnt, setCompletedCnt] = useState(0);

  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // const imgCtx = useContext(ImageContext);
  // const authCtx = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    async function displayFirstname() {
      // const firstname = await authCtx.getGivenName()
      setName("Christy");
    }
    displayFirstname();


    async function getInProgress() {
      try {
        // const questCnt = await getMyQuestCount();
        // setInProgressCnt(questCnt);
      } catch (error) {
        console.log(error)
      }
    }
    getInProgress();
    async function getCompleted() {
      try {
        // const questCnt = await getCompletedQuestCount();
        // setCompletedCnt(questCnt);
      } catch (error) {
        console.log(error)
      }
    }
    getCompleted();
  }, [])

  // useEffect(() => {
  //   setPic(imgCtx.image)
  // }, [imgCtx.image])


  // function handleBottomSheet() {
  //   console.log("바텀시트 클릭", imgCtx.isShelfOpen)
  //   if (imgCtx.isShelfOpen) {
  //     bottomSheetModalRef.current?.dismiss();
  //   } else {
  //     bottomSheetModalRef.current?.present();
  //   }
  //   imgCtx.toggleShelf(!imgCtx.isShelfOpen);
  // }

  let imagePreview = <Image style={styles.image} source={require("@/assets/images/profile.jpeg")} />

  if (pic) {
    imagePreview = <Image style={styles.image} source={{ uri: pic }} />
  }



  return (
    <>
      <LinearGradient
        colors={['#f4cccc', '#E7DAF5', '#d9f0fd']} // 색상 배열
        style={styles.safeView}
        start={{ x: 0, y: 0 }} // 사선 시작 (좌측 상단)
        end={{ x: 1, y: 1 }} // 사선 끝 (우측 하단)
      >
        <View style={styles.container}>
          <View>
            {/* <ImagePicker onTakeImage={takeImageHandler} page="MyPage" /> */}
            {/* <Pressable onPress={handleBottomSheet} style={styles.imageBorder}> */}
            {imagePreview}
            {/* </Pressable> */}
          </View>
          <Text style={styles.nameText}>{name}</Text>
        
        <Pressable style={({ pressed }) => [styles.menu, pressed && styles.pressed]}
          onPress={() => null}>
          <Ionicons
            name="people-outline"
            size={18}
            color="red"
          // color={Colors.primary500}
          />
          <View style={styles.text}>
            <Text>Friends</Text>
          </View>

        </Pressable>
        <Pressable style={({ pressed }) => [styles.menu, pressed && styles.pressed]}
          onPress={() => null}>
          <Ionicons
            name="log-out-outline"
            size={18}
            color="red"
          // color={Colors.primary500}
          />
          <View style={styles.text}>
            <Text>Log Out</Text>
          </View>

        </Pressable>
        <Pressable style={({ pressed }) => [styles.menu, pressed && styles.pressed]}
        // onPress={changePassword}
        >

          <Ionicons
            name="lock-closed-outline"
            size={18}
            color="red"
          />
          <View style={styles.text}>
            <Text>Change Password</Text>
          </View>
        </Pressable>
        <Pressable style={({ pressed }) => [styles.menu, pressed && styles.pressed]}
          onPress={() => { router.push('/terms') }}
        >

          <Ionicons
            name="document-text-outline"
            size={18}
            color="red"
          />
          <View style={styles.text}>
            <Text>Terms & Conditions</Text>
          </View>
        </Pressable>
        </View>
      </LinearGradient>
      {/* <ImageBottomSheet page="profilePic" ref={bottomSheetModalRef} /> */}
    </>
  )
}

export default MyPageScreen

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    // padding: 20,
  },
  container: {
    margin: 20,
    borderRadius: 20,
    padding: 20,
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imageBorder: {
    // borderColor: Colors.primary500,
    borderWidth: 10,
    borderRadius: 70,
    marginTop: 20,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 30,
    fontFamily: 'logo-font',
    letterSpacing: 1.5,
    // borderColor: Colors.primary500,
  },
  questStatusTitle: {
    // color: Colors.primary500,
    marginBottom: 4,
    marginTop: 8,
    alignItems: 'flex-start'
  },
  statusContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    // borderColor: Colors.primary300,
    marginTop: 20
  },
  statusLeft: {
    paddingRight: 10, marginVertical: 20, paddingLeft: 20, alignItems: 'center', borderRightWidth: 1,
    // borderColor: Colors.primary300,
  },
  statusRight: {
    paddingLeft: 10, marginVertical: 20, paddingRight: 20, alignItems: 'center'
  },
  statusNumber: {
    fontSize: 20,
    // color: Colors.primary500
  },
  statusText: {
    // color: Colors.primary500
  },
  text: {
    paddingLeft: 10
  },
  menu: {
    width: '100%',
    paddingVertical: 12,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  pressed: {
    backgroundColor: "gray",
    opacity: 0.5,
  },
})