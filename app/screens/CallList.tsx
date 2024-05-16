import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CallLink from '@/components/CallLink'
import LastCall from '@/components/LastCall'
import { Colors } from '@/constants/Colors'


export default function CallList () {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CallLink />
      <LastCall />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.white,
    padding: 16,
  },
});
