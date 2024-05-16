import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
// import story1 from '../assets/images/status1.jpg';
import { RecentStatusData } from '../app/utils/RecentStatusData'
import StoryModal from './StoryModal';

export default function RecentUpdates() {
  const [showStatusModal, setShowStatusModal] = useState(false)

  const setStatusTime = (itemId:number) => {
    setShowStatusModal(prev => ({...prev, [itemId]: false}));
  };

  return (
    <View>
      <Text style={styles.recentUpdates}>Recent Updates</Text>
      {RecentStatusData.map(item => (
        <View key={item.id}>
          <TouchableOpacity>
            <View style={styles.storyArea}>
              <View style={styles.imgStory}>
                <Image source={item.storyImg} style={styles.statusStyle} />
              </View>
              <View style={styles.storyInfo}>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>

          </TouchableOpacity>

          <StoryModal
            showStatusModal={showStatusModal || false}
            setShowStatusModal={setShowStatusModal}
            item={item}
            setStatusTime={() => setStatusTime(item.id)}
          />
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
  storyArea: {
    flexDirection: 'row',
    marginTop: 15,
  },
  storyInfo: {
    marginLeft: 15,
  },
});

