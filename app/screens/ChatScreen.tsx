import { View, Text,StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import ChatHeader from '@/components/ChatHeader'
import ChatBody from '@/components/ChatBody'
import ChatFooter from '@/components/ChatFooter'
import Wallpaper from '@/assets/images/whatsapp-bg.png'

export default function ChatScreen () {
  return (
    <>
      <ChatHeader />
      <ImageBackground source={Wallpaper} style={styles.wallpaper}>
      <ChatBody />
      </ImageBackground>
      <ChatFooter />
    </>
  )
}

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 5,
  },
});