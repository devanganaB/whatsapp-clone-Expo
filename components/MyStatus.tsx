import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Profile from '@/assets/images/user1.jpg'
import VectorIcon from '../app/utils/VectorIcons';

export default function MyStatus() {
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.profileStyle} />
      <View style={styles.iconBg}>
        <VectorIcon
          name="pluscircle"
          type="AntDesign"
          size={20}
          color={Colors.tertiary}
        />
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.myStatus}>My Status</Text>
        <Text style={styles.addStatus}>Tap to add status update</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin:5
  },
  profileStyle: {
    borderRadius: 50,
    height: 50,
    width: 50,
    position: 'relative',
  },
  myStatus: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: '500',
  },
  addStatus: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 3,
  },
  statusContainer: {
    marginLeft: 15,
  },
  iconBg: {
    backgroundColor: Colors.white,
    height: 20,
    width: 20,
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    left: 30,
  },
});