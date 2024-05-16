import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import VectorIcon from '@/app/utils/VectorIcons';
// import story1 from '../assets/images/status1.jpg';
import { RecentCallsData } from '../app/utils/RecentCalls'

export default function LastCall() {
    return (
        <>

            <Text style={styles.recent}>Recent</Text>
            {RecentCallsData.map(item => (
                <View key={item.id} style={styles.container}>
                    <View style={styles.row}>
                        <Image source={item.profileImg} style={styles.imgStyle} />
                        <View style={styles.linkSection}>
                            <Text style={styles.callLink}>{item.name}</Text>
                            <View style={styles.callDetails}>
                                {item.incoming && (
                                    <VectorIcon
                                        name="arrow-down-left"
                                        type="Feather"
                                        size={20}
                                        color={Colors.red}
                                    />
                                )}
                                {item.outgoing && (
                                    <VectorIcon
                                        name="arrow-up-right"
                                        type="Feather"
                                        size={20}
                                        color={Colors.tertiary}
                                    />
                                )}
                                <Text style={styles.shareLink}>{item.time}</Text>
                            </View>
                        </View>
                    </View>
                    {item.video && (
                        <VectorIcon
                            name="videocam"
                            type="Ionicons"
                            size={24}
                            color={Colors.tertiary}
                        />
                    )}
                    {item.audio && (
                        <VectorIcon
                            name="phone-alt"
                            type="FontAwesome5"
                            size={16}
                            color={Colors.tertiary}
                        />
                    )}
                </View>
            ))}

        </>
    )
}

const styles = StyleSheet.create({
    recent: {
        fontSize: 14,
        color: Colors.textGrey,
        marginTop: 20,
        paddingBottom: 10,
    },
    imgStyle: {
        height: 45,
        width: 45,
        borderRadius: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    callDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10
    },
    callLink: {
        fontSize: 15,
        color: Colors.black,
        fontWeight: '500',
    },
    shareLink: {
        fontSize: 13,
        color: Colors.black,
        marginLeft: 3,
    },
    linkSection: {
        marginLeft: 15,
    },
    rightSide: {
        flexDirection: 'row',
    }
});