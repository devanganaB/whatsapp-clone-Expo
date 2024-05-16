import { View, Text , Pressable, StyleSheet, Alert, Image} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import Profile from '@/assets/images/user1.jpg'

export default function CameraTab() {
  const [selectedImage, setSelectedImage] = useState(null);



  // Function to handle image selection from gallery
  const pickImageFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
<View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.profileImage} />
      )}

      <Pressable style={styles.button} onPress={pickImageFromGallery}>
        <Text style={styles.buttonText}>Choose Image</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

