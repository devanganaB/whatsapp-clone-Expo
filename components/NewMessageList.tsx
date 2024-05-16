import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler';
// import pic from '../assets/images/user1.jpg'
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

import { NewMessageData } from '@/app/utils/NewMessageData'

export default function NewMessageList() {
    const navigation = useNavigation();

    const [users, setUsers] = useState([]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contacts on Whatsapp</Text>
            {/* {users.map(item => ( */}
            {NewMessageData.map(item => (
                <View style={styles.contactContainer}>
                    {/* <TouchableOpacity
                        // onPress={() => onNavigate(item.id)} */}
                        
                        {/* > */}
                        <Image source={item.userImg} style={styles.imgStyle} />
                        <Text style={styles.username}>{item.name}</Text>
                    {/* </TouchableOpacity> */}
                </View>
            ))}

            {/* ))} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //   backgroundColor: Colors.white,
        padding: 16,
        flex: 1,
    },
    imgStyle: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    username: {
        fontSize: 16,
        color: Colors.black,
        marginLeft: 15,
        fontWeight: '500'
    },
    title: {
        fontSize: 15,
        color: Colors.textGrey,
        marginVertical: 5,
        fontWeight: '500'
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
});