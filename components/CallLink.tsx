import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import VectorIcon from '@/app/utils/VectorIcons';

export default function CallLink() {
    return (
        <View style={styles.container}>
            <View style={styles.iconBg}>
                <VectorIcon
                    name="link"
                    type="Fontisto"
                    size={20}
                    color={Colors.white}
                />
            </View>
            <View style={styles.linkSection}>
                <Text style={styles.callLink}>Create call link</Text>
                <Text style={styles.shareLink}>
                    Share a link for your Whatsapp call
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        padding: 10
    },
    iconBg: {
        backgroundColor: Colors.tertiary,
        height: 45,
        width: 45,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin:3
    },
    callLink: {
        fontSize:18,
        color: Colors.black,
        fontWeight: '500',
    },
    shareLink: {
        fontSize: 14,
        color: Colors.textGrey,
        marginTop: 3,
    },
    linkSection: {
        marginLeft: 20,
    },
});