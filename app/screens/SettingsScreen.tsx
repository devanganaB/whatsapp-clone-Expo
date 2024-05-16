import { View, Text } from 'react-native'
import React from 'react'
import SettingsHeader from '@/components/SettingsHeader'
import SettingsList from '@/components/SettingsList'

export default function SettingsScreen () {
  return (
    <View>
      <SettingsHeader />
      <SettingsList />
    </View>
  )
}

