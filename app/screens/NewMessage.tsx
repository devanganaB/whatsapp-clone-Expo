import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import NewMessageHeader from '@/components/NewMessageHeader'
import NewMessageList from '@/components/NewMessageList'
import { Colors } from '@/constants/Colors'

export default function NewMessage() {
  return (
    <ScrollView style={styles.scrollViewStyle}>
      <NewMessageHeader />
      <NewMessageList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollViewStyle: {
      backgroundColor: Colors.white,
    },
  });