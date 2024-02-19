import { useState, useEffect } from 'react';
import {View, Image, Text} from 'react-native';
import ProdContStyles from './ProdContStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductContainer = ({product}) =>{

  //PRODUCT
  //This is an object from the database, so it must have:
  //img_url
  //name
  //brand
  //exp_date

  const [daysLeft, setDaysLeft] = useState(0);
  const [expireColor, setExpireColor] = useState('#ff7c7c');


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

  return (
    <View style={ProdContStyles.container} >
      <Image style={ProdContStyles.productImage} source={{ uri: product.image }} />
      <View style={ProdContStyles.containerMain}>
        <Text style={ProdContStyles.productName}>{product.name}</Text>
        <View style={ProdContStyles.containerExpire}>
          <Text style={ProdContStyles.daysLeft}> {daysLeft} days </Text>
          <View style={[ProdContStyles.roundColor, { backgroundColor: expireColor }]}></View>
        </View>
      </View>
      <View style={ProdContStyles.containerButtons}>
        <TouchableOpacity onPress={handleEditProduct}>
          <Image style={ProdContStyles.editBtn} source={require('./assets/icons8-editar-512.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteProduct}>
          <Image style={ProdContStyles.deleteBtn} source={require('./assets/icons8-basura-512.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductContainer;