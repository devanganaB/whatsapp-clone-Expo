import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import MyStatus from '@/components/MyStatus';
import RecentUpdates from '@/components/RecentUpdates';
import ViewedUpdates from '@/components/ViewedUpdates';

export default function StatusScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
    
        <MyStatus />
        
        <RecentUpdates />

        <ViewedUpdates />
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
    //   backgroundColor: Colors.background,
      padding: 16,
    },
    content: {
        flex: 1,
      },
  });