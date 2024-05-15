import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import VectorIcon from '@/app/utils/VectorIcons';
import { TextInput } from 'react-native-gesture-handler';

export default function ChatFooter() {

    const [message, setMessage] = useState('');
    const [sendEnable, setSendEnable] = useState(false);

    const onChange = (value: React.SetStateAction<string>) => {
        setMessage(value);
        setSendEnable(true);
    };

    const onSend = () => {
        // chatRef.collection('messages').add({
        //   body: message,
        //   sender: userId,
        //   timestamp: firestore.FieldValue.serverTimestamp(),
        // });
        setMessage('');
        setSendEnable(false);
        Alert.alert('Message sent!')
      };

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.row}>
                    <VectorIcon
                        type="Fontisto"
                        name="smiley"
                        size={20}
                        color={Colors.textGrey}
                    />
                    <TextInput
                        placeholder="Message"
                        placeholderTextColor={Colors.textGrey}
                        onChangeText={value => onChange(value)}
                        style={styles.inputStyle}
                        value={message}
                    />
                </View>
                <View style={styles.row}>
                    <VectorIcon
                        type="MaterialCommunityIcons"
                        name="attachment"
                        size={21}
                        color={Colors.textGrey}
                        style={{ marginHorizontal: 10 }}
                    />
                    {!sendEnable &&
                        (<>
                            <VectorIcon
                                type="FontAwesome"
                                name="camera"
                                size={18}
                                color={Colors.textGrey}
                            />
                        </>)

                    }

                </View>
            </View>
            <View style={styles.rightContainer}>
                {sendEnable ?
                    (<VectorIcon
                        type="Ionicons"
                        name="send"
                        size={25}
                        color={Colors.white}
                        onPress={onSend}
                    />) :
                    (<VectorIcon
                        type="MaterialCommunityIcons"
                        name="microphone"
                        size={25}
                        color={Colors.white}
                    />)
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'none',
        paddingVertical: 12,
        paddingHorizontal: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 2,
        alignItems: 'center',
    },
    leftContainer: {
        width: '85%',
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: 30,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconStyle: {
        marginHorizontal: 25,
    },
    rightContainer: {
        backgroundColor: Colors.teal,
        padding: 10,
        borderRadius: 50,
    },
    inputStyle: {
        fontSize: 17,
        color: Colors.black,
        marginLeft: 5,
    },
});