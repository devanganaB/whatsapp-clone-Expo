import { View, Text, Pressable, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
// import Profile from '@/assets/images/user1.jpg'
import { Colors } from '@/constants/Colors';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@/firebase/firebaseconfig'

export default function CameraTab() {
  const [selectedImage, setSelectedImage] = useState<string>();




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
      await uploadImageAsync(result.assets[0].uri);
    }
  };

  // Function to handle image removal
  const removeImage = () => {
    setSelectedImage("");
  };


  async function uploadImageAsync(uri: string) {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const filename = uri.split('/').pop();
      const storageRef = ref(getStorage(), `profileImages/${filename}`);
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);
      console.log(url);
    }
    catch (error) {
      console.error("Error uploading image: ", error);
    }
  }

  async function retrieveImage() {
    try {
      const url = await getDownloadURL(ref(getStorage(), 'profileImages/imageFileName'));
      console.log("Image URL: ", url);
      // Use the retrieved URL to display the image
    } catch (error) {
      console.error("Error retrieving image: ", error);
    }
  }

  return (

    <View style={styles.container}>
      {/* {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.profileImage} />
      )} */}
      <View style={styles.profileHeader}>
        <Text style={{fontWeight:'800'}}>Profile Picture</Text>
      </View>
      <View style={styles.imageContainer}>
        <Pressable onPress={pickImageFromGallery}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholderCircle} />
          )}
        </Pressable>
      </View>
      {selectedImage && (
        <>
          <Pressable style={styles.button} onPress={removeImage}>
            <Text style={styles.buttonText}>Remove Image</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={pickImageFromGallery}>
            <Text style={styles.buttonText}>Choose Image</Text>
          </Pressable>
        </>
      )}

      {!selectedImage && (
        <Pressable style={styles.button} onPress={pickImageFromGallery}>
          <Text style={styles.buttonText}>Choose Image</Text>
        </Pressable>
      )}
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
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    overflow: 'hidden',
  },
  placeholderCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    margin: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

