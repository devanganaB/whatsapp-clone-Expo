import VectorIcon from '@/app/utils/VectorIcons';
import { Colors } from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.logoStyle}>WhatsApp</Text>

            <View style={styles.headerIcons}>
                <VectorIcon type="MaterialIcons"
                    name="search"
                    color={Colors.white}
                    size={24} 
                    style={styles.iconStyle}/>

                <VectorIcon type="Entypo"
                    name="dots-three-vertical"
                    color={Colors.white}
                    size={18} />

            </View>




        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    logoStyle: {
        height: 25,
        width: 110,
        fontSize: 20,
        color: Colors.white,
        fontWeight: '500'
    },

    headerIcons:{
        flexDirection: 'row',
    },

    iconStyle:{
        marginHorizontal: 22
    }
});
