import { useState, useEffect } from 'react';
import {View, Image, Text} from 'react-native';
import ProdContStyles from './ProdContStyles';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ProductContainer = ({product}) =>{

  //PRODUCT
  //This is an object from the database, so it must have:
  //img_url
  //name
  //brand
  //exp_date

  const [daysLeft, setDaysLeft] = useState(0);
  const [expireColor, setExpireColor] = useState('#ff7c7c');
  const [expanded, setExpanded] = useState(false);

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
            break;
        case (daysDifference < 15 && daysDifference > 3):
            setExpireColor('#ffd88b');
            break;
        default:
            setExpireColor('#ff7c7c');
            break;
    }
}, [product.exp_date]);

  
  const handleEditProduct = () =>{
    
  };

  const handleDeleteProduct = () =>{

  };


  const handleToggleHeight = () =>{
    setExpanded(!expanded);
  }

  const containerStyles = {
    ...ProdContStyles.container,
    height: expanded ? 150 : 70,
  }
  const imageStyles = {
    ...ProdContStyles.productImage,
    height: expanded ? 119 : 70,
    width: expanded ? 153 : 90,
    borderRadius: expanded ? 25 : 15
  }
  const roundColorStyles = {
    ...ProdContStyles.roundColor,
    marginLeft: expanded ? 30 : 'auto',
  }
  
  return (
    <TouchableWithoutFeedback onPress={handleToggleHeight}>
      <View style={containerStyles} >
        <Image style={imageStyles} source={{ uri: product.image }} />
        <View style={ProdContStyles.containerMain}>
          <Text style={ProdContStyles.productName}>{product.name}</Text>
          {expanded && (
            <Text style={ProdContStyles.productBrand}>{product.brand}</Text>
          )}
          <View style={ProdContStyles.containerExpire}>
            <Text style={ProdContStyles.daysLeft}> {daysLeft} days </Text>
            <View style={[roundColorStyles, { backgroundColor: expireColor }]}></View>
          </View>
          {expanded && (
            <TouchableOpacity style={ProdContStyles.createBtn}>
                <Text style={ProdContStyles.createBtnText}>+ Create recipe</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={ProdContStyles.containerButtons}>
          {!expanded && (
            <TouchableOpacity onPress={handleEditProduct}>
              <Image style={ProdContStyles.editBtn} source={require('./assets/icons8-editar-512.png')}></Image>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleDeleteProduct}>
            <Image style={ProdContStyles.deleteBtn} source={require('./assets/icons8-basura-512.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
};
export default ProductContainer;