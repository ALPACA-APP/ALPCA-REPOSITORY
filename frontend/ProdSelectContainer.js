import { useState, useEffect, useRef } from 'react';
import { View, Image, Text, Animated } from 'react-native';
import ProdContStyles from './ProdContStyles';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Checkmark from './assets/icons8-checkmark-100.png';

const ProdSelectContainer = ({ product, onCheckboxChange, userObject }) => {

    const [daysLeft, setDaysLeft] = useState(0);
    const [expireColor, setExpireColor] = useState('#ff7c7c');
    const [expireColorBorder, setExpireColorBorder] = useState('#ff7c7c');
    const [expanded, setExpanded] = useState(false);
    const animated = useRef(new Animated.Value(0)).current;
    const [selected, setSelected] = useState(false);

    function formatDateString(inputDate) {
        const [day, month, year] = inputDate.split('/');
        const formattedDate = new Date(`${year}-${month}-${day}`);
        const result = formattedDate.getTime(); // Get time in milliseconds
        return result;
    }

    useEffect(() => {
        const currentDate = new Date().getTime(); // Get time in milliseconds
        const expirationDate = formatDateString(product.exp_date);
        const timeDifference = expirationDate - currentDate;
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
        // Update daysLeft with daysDifference
        setDaysLeft(daysDifference);
  
        // Assign colors based on daysDifference
        switch (true) {
          case (daysDifference >= 15):
            if (userObject.colourBlind === 0){
              setExpireColor('#7cffc0');
              setExpireColorBorder('#198e56');
            }else if(userObject.colourBlind === 1){
              setExpireColor('#ffdfd2');
              setExpireColorBorder('#92765e');
            }else if(userObject.colourBlind === 2){
              setExpireColor('#b0f0ff');
              setExpireColorBorder('#3d8590');
            }
            break;
          case (daysDifference < 15 && daysDifference > 3):
            if (userObject.colourBlind === 0){
              setExpireColor('#ffd88b');
              setExpireColorBorder('#a73c00');
            }else if(userObject.colourBlind === 1){
              setExpireColor('#ffd4a7');
              setExpireColorBorder('#795a00');
            }else if(userObject.colourBlind === 2){
              setExpireColor('#ffd0dc');
              setExpireColorBorder('#a73a3d');
            }
            break;
          default:
            if (userObject.colourBlind === 0){
              setExpireColor('#ff7c7c');
              setExpireColorBorder('#ba4646');
            }else if(userObject.colourBlind === 1){
              setExpireColor('#c39b73');
              setExpireColorBorder('#856741');
            }else if(userObject.colourBlind === 2){
              setExpireColor('#ff7a83');
              setExpireColorBorder('#b9474b');
            }
            break;
        }
      }, [product.exp_date, userObject.colourBlind]);

    const animatedContainer = {
        height: 70, 
    }
    const animatedImage = {
        height: 70,
        width: 90,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 2,
    }
    const roundColorStyles = {
        ...ProdContStyles.roundColor,
        marginLeft: 20,
    }

    const toggle = () => {
        setSelected(!selected);
        onCheckboxChange(product.id, !selected);
    }

    return (
        <TouchableOpacity activeOpacity={0.4}  onPress={() => { toggle(); }}>
            <Animated.View style={[ProdContStyles.container, animatedContainer]} >
                <Animated.Image style={[ProdContStyles.imageStyles, animatedImage]} source={{ uri: product.img_url }} />
                <View style={ProdContStyles.containerMain}>
                    <Text style={ProdContStyles.productName}>{product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}</Text>
                    {expanded && (
                        <Text style={ProdContStyles.productBrand}>{product.brand}</Text>
                    )}
                    <View style={ProdContStyles.containerExpire}>
                        <Text style={ProdContStyles.daysLeft}> {daysLeft} days </Text>
                        <View style={[roundColorStyles, { backgroundColor: expireColor, borderColor: expireColorBorder }]}></View>
                    </View>
                </View>
                <View style={ProdContStyles.containerButtons}>
                    <TouchableOpacity onPress={() => { toggle(); }}>
                        <View style={ProdContStyles.toggle}>
                            {selected && <Image source={Checkmark} style={ProdContStyles.toggleInner} />}
                        </View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </TouchableOpacity>

    );
};
export default ProdSelectContainer;