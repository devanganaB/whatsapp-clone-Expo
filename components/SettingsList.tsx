import { View, Text, StyleSheet, Image, Pressable, Switch } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Profile from '../assets/images/user1.jpg';
import VectorIcon from '@/app/utils/VectorIcons';

export default function SettingsList() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image source={Profile} style={styles.profileStyle} />
                <View style={styles.statusContainer}>
                    <Text style={styles.username}>Programmer</Text>
                    <Text style={styles.status}>Hey there, I am using Whatsapp.</Text>
                </View>
            </View>


            {/* Account Section */}
            <View style={styles.section}>
                <View style={styles.icon}>
                    <VectorIcon
                        type="MaterialIcons"
                        name="key"
                        size={20}
                        color={Colors.textGrey}
                    />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.sectionHeader}>Account</Text>
                        <View style={styles.row}>
                            <Text style={styles.settingTitle}>Privacy, security, change number</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Chats Section */}
            <View style={styles.section}>
                <View style={styles.icon}>
                    <VectorIcon
                        type="MaterialIcons"
                        name="message"
                        color={Colors.textGrey}
                        size={20}
                    />
                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.sectionHeader}>Chats</Text>
                        <View style={styles.row}>
                            <Text style={styles.settingTitle}>Theme, Wallpapers, Chat history</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Notifications Section */}
            <View style={styles.section}>
                <View style={styles.icon}>
                    <VectorIcon
                        type="MaterialIcons"
                        name="notifications"
                        size={20}
                        color={Colors.textGrey}
                    />
                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.sectionHeader}>Notifications</Text>
                        <View style={styles.row}>
                            <Text style={styles.settingTitle}>Message, group & call tones</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Storage Data Section */}
            <View style={styles.section}>
                <View style={styles.icon}>
                    <VectorIcon
                        type="MaterialCommunityIcons"
                        name="checkbox-blank-circle-outline"
                        size={20}
                        color={Colors.textGrey}
                    />
                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.sectionHeader}>Storage and Data</Text>
                        <View style={styles.row}>
                            <Text style={styles.settingTitle}>Network usage, auto-download</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Help */}
            <View style={styles.section}>
                <View style={styles.icon}>
                    <VectorIcon
                        type="MaterialIcons"
                        name="help-outline"
                        size={20}
                        color={Colors.textGrey}
                    />
                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.sectionHeader}>Help</Text>
                        <View style={styles.row}>
                            <Text style={styles.settingTitle}>Help centre, contact us, privacy policy</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Invute Friend */}
            <View style={styles.section}>
                <View style={styles.icon}>
                    <VectorIcon
                        type="MaterialIcons"
                        name="group"
                        size={20}
                        color={Colors.textGrey}
                    />
                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.sectionHeader}>Invite a Friend</Text>
                    </View>
                </View>
            </View>

            {/* <View style={styles.lastElementContainer}> */}


                <View style={styles.bottomElement}>
                    <Text style={{ fontSize: 13, color: Colors.textGrey }}>from</Text>
                    <Text style={{ fontWeight: "800", fontSize: 15 }}>Facebook</Text>
                </View>

            {/* </View> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        margin: 15,
    },
    profile: {
        flexDirection: 'row',
        marginBottom: 20
    },
    profileStyle: {
        borderRadius: 60,
        height: 60,
        width: 60,
        position: 'relative',
    },
    username: {
        fontSize: 18,
        color: Colors.black,
        fontWeight: 'bold',
        marginBottom: 5
    },
    status: {
        fontSize: 14,
        color: Colors.textGrey,
        marginTop: 3,
    },
    statusContainer: {
        marginLeft: 15,
    },
    section: {
        marginBottom: 25,

    },
    leftContainer: {
        margin: 15
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.textColor
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    settingTitle: {
        fontSize: 14,
        color: Colors.textGrey
    },
    switch: {
        // customize switch styles
    },
    selectionValue: {
        color: 'gray',
        fontSize: 14,
    },
    icon: {
        alignItems: 'center',
        marginLeft: 15,
        flexDirection: 'row'
    },
    lastElementContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    lastElement: {
        alignItems: 'center',
    },
    bottomElement: {
        alignItems: 'center',
        margin: 40, 
    },
});
