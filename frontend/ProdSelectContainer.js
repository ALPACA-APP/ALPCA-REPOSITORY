import { useState, useEffect, useRef } from 'react';
import { View, Image, Text, Animated } from 'react-native';
import ProdContStyles from './ProdContStyles';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Checkmark from './assets/icons8-checkmark-100.png';

const ProdSelectContainer = ({ product, onCheckboxChange }) => {

    //PRODUCT
    //This is an object from the database, so it must have:
    //img_url
    //name
    //brand
    //exp_date

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
                setExpireColor('#7cffc0');
                setExpireColorBorder('#198E56');
                break;
            case (daysDifference < 15 && daysDifference > 3):
                setExpireColor('#ffd88b');
                setExpireColorBorder('#A73C00');
                break;
            default:
                setExpireColor('#ff7c7c');
                setExpireColorBorder('#BA4646');
                break;
        }
    }, [product.exp_date]);

    const animatedContainer = {
        height: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [70, 70]
        })
    }
    const animatedImage = {
        height: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [70, 70]
        }),
        width: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [90, 90]
        }),
        borderRadius: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 15]
        }),
        borderColor: 'black',
        borderWidth: 2,
    }
    const roundColorStyles = {
        ...ProdContStyles.roundColor,
        marginLeft: [20, 'auto'],
    }

    const toggle = () => {
        setSelected(!selected);
        onCheckboxChange(product.id, !selected);
    }

    return (
        <TouchableOpacity activeOpacity={0.4}  onPress={() => { toggle(); }}>
            <Animated.View style={[ProdContStyles.container, animatedContainer]} >
                <Animated.Image style={[ProdContStyles.imageStyles, animatedImage]} source={{ uri: product.image }} />
                <View style={ProdContStyles.containerMain}>
                    <Text style={ProdContStyles.productName}>{product.name}</Text>
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