import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Colors } from '@/constants/Colors'
import VectorIcon from '@/app/utils/VectorIcons'
import { MessagesData } from '@/app/utils/MessageData'
import { firestore, getDocs, collection } from '@/firebase/firebaseconfig'

type message = {
  index: number,
  sender: boolean,
  message: string
}

export default function ChatBody() {
  const scrollViewRef = useRef<ScrollView>(null);

  const [messages, setMessages] = useState([]);

  const [fmessage, setFMessage] = useState<message[]>([]);

  // const UserId = "1";

 

  useEffect(() => {
    const fetchData = async () => {
      const chatRef = collection(firestore, "message")
      const querySnapshot = await getDocs(chatRef)

      const msg: message[] = [];

      querySnapshot.forEach((chat) => {
        const { index, sender, message } = chat.data();
        msg.push({ index, sender, message })
      }
      )

      console.log(msg)

      setFMessage(msg)

    }

    fetchData()
  }, [])

  const SenderMessage = ({message}: {message:string} ) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          {/* <Text style={styles.time}>{time}</Text> */}
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            color={Colors.blue}
            size={12}
            style={styles.doubleCheck}
          />
        </View>
      </View>
    );
  };

  const OtherMessage = ({message}: {message:string}) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          {/* <Text style={styles.time}>{time}</Text> */}
        </View>
      </View>
    );
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };


  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
        showsVerticalScrollIndicator={false}>

        <View>
          {fmessage.map(item => (
            <>
              {item.sender ? (
                <SenderMessage message={item.message} />
              ) : (
                <OtherMessage message={item.message} />
              )}
            </>
          ))}


        </View>

      </ScrollView>

      <View style={styles.scrollIcon}>
        <View style={styles.scrollDownArrow}>
          <VectorIcon
            name="angle-dobule-down"
            type="Fontisto"
            size={12}
            color={Colors.white}
            onPress={scrollToBottom}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userInnerContainer: {
    backgroundColor: Colors.userText,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 13,
    color: Colors.black,
  },
  time: {
    fontSize: 9,
    color: Colors.black,
    marginLeft: 5,
  },
  doubleCheck: {
    marginLeft: 5,
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});