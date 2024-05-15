import React from 'react'
import { View } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface VectorIconProps {
    name: string;
    size: number;
    color: string;
    type: string;
    onPress?: () => void;
    style?: object;
  }
  
  const VectorIcon: React.FC<VectorIconProps> = ({
    name,
    size,
    color,
    type,
    onPress,
    style,
  }) => {
    return (
      <View style={style}>
        {type === 'MaterialCommunityIcons' ? (
          <MaterialCommunityIcons
            onPress={onPress}
            name={name}
            size={size}
            color={color}
          />
        ) : type === 'FontAwesome' ? (
          <FontAwesome onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'FontAwesome5' ? (
          <FontAwesome5 onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'Feather' ? (
          <Feather onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'AntDesign' ? (
          <AntDesign onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'Entypo' ? (
          <Entypo onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'Ionicons' ? (
          <Ionicons onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'EvilIcons' ? (
          <EvilIcons onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'Octicons' ? (
          <Octicons onPress={onPress} name={name} size={size} color={color} />
        ) : type === 'Fontisto' ? (
          <Fontisto onPress={onPress} name={name} size={size} color={color} />
        ) : (
          <MaterialIcons
            onPress={onPress}
            name={name}
            size={size}
            color={color}
          />
        )}
      </View>
    );
  };
  
  // const VectorIcons: React.FC = () => {
  //   return (
  //     <View>
  //       <VectorIcon
  //         type="MaterialCommunityIcons"
  //         name="example-icon"
  //         size={30}
  //         color="red"
  //       />
  //       {/* Add more VectorIcon components with different props as needed */}
  //     </View>
  //   );
  // }
  
  export default VectorIcon;

// export default function VectorIcons() {
//   return (
//     <View>
      
//     </View>
//   )
// }
