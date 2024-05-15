import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import ChatListComponent from '@/components/ChatListComponent'


export default function ChatList() {
  return (
    <ScrollView>
      <ChatListComponent/>
    </ScrollView>
  )
}



