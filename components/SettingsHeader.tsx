import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import VectorIcon from '@/app/utils/VectorIcons'
import { Colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native';

export default function SettingsHeader() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <VectorIcon
                    name="arrow-back"
                    type="Ionicons"
                    size={22}
                    color={Colors.white}
                    onPress={() => navigation.goBack()}
                />

                <View>
                    <Text style={styles.settings}>Settings</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 10,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between',
    },
    settings: {
        height: 25,
        width: 110,
        fontSize: 20,
        color: Colors.white,
        fontWeight: '500',
        marginLeft: 40
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin:8
    },
    iconStyle: {
        marginHorizontal: 20,
    },
});

