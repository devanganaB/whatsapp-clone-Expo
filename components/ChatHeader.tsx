import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Profile from '../assets/images/user1.jpg'
import { Colors } from '@/constants/Colors';
import VectorIcon from '@/app/utils/VectorIcons';
// import {getImage} from '../utils/helper';
import { useNavigation } from '@react-navigation/native';

export default function ChatHeader() {
    const navigation = useNavigation();

    const [user, setUser] = useState({});

    // useEffect(() => {
    //     getContactData();
    //   }, [contactUserRef]);


    // const getContactData = async () => {
    //     const contactSnapshot = await contactUserRef.get();
    //     const data = contactSnapshot.data();
    //     const name = data.name;
    //     const profile = await getImage(data.profile);
    //     setUser({name, profile});
    //   };


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
                <Image source={Profile} style={styles.profilePhoto} />
                <View>
                <Text style={styles.username}>Programmer</Text>
                <Text style={{marginLeft: 10,marginTop: 4, color:'white', fontSize:12}}>Online</Text>
                </View>
                
            </View>

            <View style={styles.innerContainer}>
                <VectorIcon
                    name="videocam"
                    type="Ionicons"
                    size={24}
                    color={Colors.white}
                />
                <VectorIcon
                    name="phone-alt"
                    type="FontAwesome5"
                    size={16}
                    color={Colors.white}
                    style={styles.iconStyle}
                />
                <VectorIcon
                    name="dots-three-vertical"
                    type="Entypo"
                    size={18}
                    color={Colors.white}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profilePhoto: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginHorizontal:10
    },
    username: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        marginHorizontal: 20,
    },
});