import { useState, useEffect, useRef } from 'react';
import { View, Image, Text, Animated, TouchableHighlight, StyleSheet } from 'react-native';
import ProdContStyles from './ProdContStyles';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CONSTANTS } from './global.js';

const ProductContainer = ({ product, onProductDelete, onGenerateRecipe, onProductEdit, userObject }) => {

  //PRODUCT
  //This is an object from the database, so it must have:
  //img_url
  //name
  //brand
  //exp_date
  const apiUrl = CONSTANTS.API_URL;


  const [daysLeft, setDaysLeft] = useState(0);
  const [expireColor, setExpireColor] = useState('#ff7c7c');
  const [expireColorBorder, setExpireColorBorder] = useState('#ff7c7c');
  const [expanded, setExpanded] = useState(false);
  const animated = useRef(new Animated.Value(0)).current;
  const [pressedDelete, setPressedDelete] = useState(false);

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



    let daysLeft = '';

    if (daysDifference < 10 && daysDifference > 1) {
      daysLeft = '0' + daysDifference + ' days left';
    } else if (daysDifference === 1) {
      daysLeft = '0' + daysDifference + ' day left';
    }
    else {
      daysLeft = daysDifference + ' days left';
    }

    if (daysDifference < 0) {
      daysLeft = 'Expired ' + Math.abs(daysDifference) + ' days ago';
    }


    // Update daysLeft with daysDifference
    setDaysLeft(daysLeft);

    // Assign colors based on daysDifference
    switch (true) {
      case (daysDifference >= 7):
        if (userObject.colourBlind === 0) {
          setExpireColor('#7cffc0');
          setExpireColorBorder('#198e56');
        } else if (userObject.colourBlind === 1) {
          setExpireColor('#ffdfd2');
          setExpireColorBorder('#92765e');
        } else if (userObject.colourBlind === 2) {
          setExpireColor('#b0f0ff');
          setExpireColorBorder('#3d8590');
        }
        break;
      case (daysDifference < 7 && daysDifference > 3):
        if (userObject.colourBlind === 0) {
          setExpireColor('#ffd88b');
          setExpireColorBorder('#a73c00');
        } else if (userObject.colourBlind === 1) {
          setExpireColor('#ffd4a7');
          setExpireColorBorder('#795a00');
        } else if (userObject.colourBlind === 2) {
          setExpireColor('#ffd0dc');
          setExpireColorBorder('#a73a3d');
        }
        break;
      default:
        if (userObject.colourBlind === 0) {
          setExpireColor('#ff7c7c');
          setExpireColorBorder('#ba4646');
        } else if (userObject.colourBlind === 1) {
          setExpireColor('#c39b73');
          setExpireColorBorder('#856741');
        } else if (userObject.colourBlind === 2) {
          setExpireColor('#ff7a83');
          setExpireColorBorder('#b9474b');
        }
        break;
    }
  }, [product.exp_date, userObject.colourBlind]);


  const handleEditProduct = () => {
    onProductEdit(product);
  };



  const handleDeleteProduct = async () => {
    onProductDelete(product);
  };



  const handleToggleHeight = () => {
    setExpanded(!expanded);
    Animated.timing(animated, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false
    }).start();
  }

  const animatedContainer = {
    height: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [70, 150]
    })
  }
  const animatedImage = {
    height: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [70, 93]
    }),
    width: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [90, 120]
    }),
    borderRadius: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 25]
    }),
    borderColor: 'black',
    borderWidth: 2,
  }

  // animate the opacity of the Create Recipe button
  const animatedCreateBtn = {
    opacity: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })
  }

  return (
    <>
    {pressedDelete &&
                <TouchableHighlight style={styles.darkBackground} underlayColor='rgba(0,0,0,0.6)' onPress={() => { setPressedDelete(false) }}>
                    <View style={styles.confirmBox}>
                        <Text style={styles.logoutText}>Are you sure you want to log out?</Text>
                        <View style={styles.buttonsWrapper}>
                            <TouchableHighlight style={styles.confirmButton} onPress={() => { onGoBack() }}>
                                <Text style={styles.confirmText}>Yes, Log Me Out</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.cancelButton} onPress={() => { setPressedDelete(false) }}>
                                <Text style={styles.cancelText}>Nah, Just Kidding</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableHighlight>
      }
      <TouchableWithoutFeedback onPress={handleToggleHeight}>
        <Animated.View style={[ProdContStyles.container, animatedContainer]} >
          <Animated.Image style={[ProdContStyles.imageStyles, animatedImage]} source={{ uri: product.img_url }} />
          <View style={ProdContStyles.containerMain}>
            <Text style={ProdContStyles.productName}>{product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}</Text>
            {expanded && (
              <Text style={ProdContStyles.productBrand}>{product.brand}</Text>
            )}
            <View style={ProdContStyles.containerExpire}>
              <View style={[ProdContStyles.roundColor, { backgroundColor: expireColor, borderColor: expireColorBorder }]}></View>
              <Text style={ProdContStyles.daysLeft}> {daysLeft} </Text>
            </View>
            {expanded && (
              <TouchableOpacity style={ProdContStyles.createBtn} onPress={onGenerateRecipe}>
                <Animated.Text style={[ProdContStyles.createBtnText, animatedCreateBtn]}>+ Create recipe</Animated.Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={ProdContStyles.containerButtons}>
            <TouchableOpacity onPress={() => handleEditProduct(product)}>
              <Image style={[ProdContStyles.editBtn]} source={require('./assets/icons8-editar-512.png')}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { handleDeleteProduct(product) }}>
              <Image style={ProdContStyles.deleteBtn} source={require('./assets/icons8-basura-512.png')}></Image>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </>

  );
};


export default ProductContainer;