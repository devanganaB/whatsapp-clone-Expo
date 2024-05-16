import { View, Text, StyleSheet, Modal, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import VectorIcon from '@/app/utils/VectorIcons';
import story1 from '../assets/images/status1.jpg';

// interface Props {
//     showStatusModal: { [key: string]: boolean }; // Changed the type to an object with string keys
//     setShowStatusModal: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>; // Changed the type to accept an object with string keys
//     item: { id: string; image: string }; // Assuming 'id' is a string
//     setStatusTime: (itemId: string) => void; // Assuming 'id' is a string
// }

export default function StoryModal(props: {
    showStatusModal: any;
    setShowStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
    item: any;
    setStatusTime: any;
}) {

    const { showStatusModal, setShowStatusModal, item, setStatusTime } = props;

    const updateModal = () => {
        setShowStatusModal(prev => ({ ...prev, [item.id]: false }));
    };


    return (
        <View>
            <Modal
                animationType='fade'
                visible={showStatusModal}
                onRequestClose={updateModal}
            >
                <View style={styles.container}>
                    {/* <ProgressBar setStatusTime={setStatusTime} /> */}
                    {/* <View style={styles.topContainer}>
                        <View style={styles.profileSection}>
                            <VectorIcon
                                name="arrow-back"
                                type="Ionicons"
                                size={24}
                                color={Colors.white}
                                onPress={() =>
                                    setShowStatusModal(prev => ({ ...prev, [item.id]: false }))
                                }
                            />
                            <Image source={story1} style={styles.profileImg} />
                            <Text style={styles.username}>usrrname</Text>
                        </View>
                        <VectorIcon
                            type="Entypo"
                            name="dots-three-vertical"
                            color={Colors.white}
                            size={18}
                        />
                    </View> */}
                    <Image source={item.storyImg} style={styles.storyImg} />
                    <Text style={styles.storyMsg}>{item.storyMsg}</Text>
                    {/* <View style={styles.replySection}>
                        <VectorIcon
                            type="Entypo"
                            name="chevron-small-up"
                            color={Colors.white}
                            size={24}
                            onPress={() =>
                                setShowStatusModal(prev => ({ ...prev, [item.id]: false }))
                            }
                        />
                        <Text style={styles.reply}>Reply</Text>
                    </View> */}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    storyImg: {
        height: '75%',
        width: '100%',
    },
    storyMsg: {
        fontSize: 17,
        color: Colors.white,
        textAlign: 'center',
    },
    container: {
        backgroundColor: Colors.primaryColor,
        height: '100%',
        justifyContent: 'space-between',
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 50,
    },
    username: {
        fontSize: 17,
        color: Colors.white,
        marginLeft: 10,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reply: {
        fontSize: 15,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: 10,
    },
    replySection: {
        alignItems: 'center',
    },
});