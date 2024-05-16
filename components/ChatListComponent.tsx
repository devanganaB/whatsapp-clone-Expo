import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

// import User1 from '../assets/images/user1.jpg'

import { Colors } from '@/constants/Colors'
import { ChatListData } from '../app/utils/data.js'
import { useNavigation } from '@react-navigation/native'





export default function ChatListComponent() {

    const navigation = useNavigation();

    const onNavigate = () => {
        navigation.navigate('ChatScreen');
        };
        // , {
        //     contactId: contactId,
        //     userId: userId,
        // }
    
    

    return (
        <>
            {ChatListData.map(item => (
                
                <View key={item.id}>
                    <TouchableOpacity
                        onPress={() => onNavigate(item.id)}
                        style={styles.container}>
                        <View style={styles.leftContainer}>
                            <Image
                                source={item.profile}
                                style={styles.profileImg}
                            />
                            <View>
                                <Text style={styles.username}> {item.name}</Text>
                                <Text style={styles.message}> {item.message}</Text>

                            </View>
                        </View>


                        <Text style={styles.timeStamp}>{item.time}</Text>

                    </TouchableOpacity>
                </View>

            ))}

        </>


    )
}

const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 50,
        height: 50,
        width: 50,
        marginRight: 15,
    },
    container: {
        backgroundColor: Colors.white,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        color: Colors.textColor,
        fontSize: 18,
        fontWeight: '500'
    },
    message: {
        color: Colors.textGrey,
        fontSize: 14,
        marginTop: 5,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    timeStamp: {
        color: Colors.textGrey,
        fontSize: 12,
    },
    muteIcon: {
        marginTop: 5,
        marginLeft: 20,
    },
})