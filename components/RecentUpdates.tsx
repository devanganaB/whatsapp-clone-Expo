import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Status1 from '../assets/images/status1.jpg';
import { RecentStatusData } from '../app/utils/RecentStatusData'

export default function RecentUpdates() {
  return (
    <View>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
      {RecentStatusData.map(item => (
        <View key={item.id}>
        <TouchableOpacity>
          <View style={styles.storySection}>
            <View style={styles.imgStory}>
              <Image source={Status1} style={styles.statusStyle} />
            </View>
            <View style={styles.statusInfo}>
              <Text style={styles.username}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>

        </TouchableOpacity>
        </View>

      ))}

    </View>
  )
}

const styles = StyleSheet.create({
  statusStyle: {
    height: 42,
    width: 42,
    borderRadius: 50,
  },
  recentUpdates: {
    fontSize: 14,
    color: Colors.textGrey,
    paddingBottom: 10,
    paddingTop: 20,
  },
  imgStory: {
    height: 50,
    width: 50,
    backgroundColor: Colors.background,
    borderColor: Colors.tertiary,
    borderWidth: 4,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
    marginTop: 3,
  },
  storySection: {
    flexDirection: 'row',
    marginTop: 15,
  },
  statusInfo: {
    marginLeft: 15,
  },
});

