import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import ChatListComponent from '@/components/ChatListComponent'
import VectorIcon from '../utils/VectorIcons'
import { Colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native'




export default function ChatList() {

  const navigation = useNavigation();

  const onNavigate =() =>{
navigation.navigate('NewMessage')
  }


  return (
    <View>
      <ScrollView>
        <ChatListComponent />
      </ScrollView>
      <TouchableOpacity style={styles.messageIcon} onPress={onNavigate}>
        <VectorIcon
          type="MaterialIcons"
          name="message"
          color={Colors.white}
          size={25}
        />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  messageIcon: {
    backgroundColor: Colors.primaryColor,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  // container: {
  //   position: 'relative',
  //   flex: 1
  // }
})



