import VectorIcon from '@/app/utils/VectorIcons';
import { Colors } from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Header() {

    const [showDropdown, setShowDropdown] = useState(false);

    const navigation = useNavigation();

    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    }

    // const dropdownRef = useRef(null);

    const navigateToSettings = () => {
        setShowDropdown(false);
        navigation.navigate('Settings');
    }

    // const handleOutsideTap = (event: any) => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //         setShowDropdown(false);
    //     }
    // };

    return (
        // onPress={handleOutsideTap}
        // <TouchableWithoutFeedback>
        <View style={styles.container}>
            <Text style={styles.logoStyle}>WhatsApp</Text>

            <View style={styles.headerIcons}>
                <VectorIcon type="MaterialIcons"
                    name="search"
                    color={Colors.white}
                    size={24}
                    style={styles.iconStyle} />
                <TouchableOpacity onPress={toggleDropdown}>
                    <VectorIcon type="Entypo"
                        name="dots-three-vertical"
                        color={Colors.white}
                        size={18} />
                </TouchableOpacity>


            </View>

            <Modal
                visible={showDropdown}
                transparent={true}
                onRequestClose={toggleDropdown}
                animationType='fade'
            >
                <View style={styles.dropdownContainer}>



                    <Text style={styles.dropdownItem}>New Group</Text>
                    <Text style={styles.dropdownItem}>New Message</Text>
                    <Text style={styles.dropdownItem}>Starred Messages</Text>
                    <Text style={styles.dropdownItem}>Payments</Text>
                    <TouchableOpacity onPress={navigateToSettings}>
                        <Text style={styles.dropdownItem}>Settings</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
        // {/* </TouchableWithoutFeedback> */}
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

    headerIcons: {
        flexDirection: 'row',
    },

    iconStyle: {
        marginHorizontal: 22
    },
    dropdownContainer: {
        padding: 10,
        backgroundColor: Colors.primaryColor,
        position: 'absolute',
        top: 45,
        right: 10,
        borderRadius: 8,
        shadowOpacity: 0.5,
        shadowColor: Colors.black,
        shadowRadius: 4,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    dropdownItem: {
        color: Colors.white,
        fontSize: 16,
        paddingVertical: 8,
    }
});
