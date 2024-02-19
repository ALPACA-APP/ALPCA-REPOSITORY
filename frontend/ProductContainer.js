import { useState, useEffect } from 'react';
import {View, Image, Text} from 'react-native';
import ProdContStyles from './ProdContStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductContainer = (product) =>{

  //PRODUCT
  //This is an object from the database, so it must have:
  //img_url
  //name
  //brand
  //exp_date

  const [daysLeft, setDaysLeft] = useState(0);
  const [expireColor, setExpireColor] = useState('#ff7c7c');


  useEffect(() => {

    const currentDate = new Date();
    //Product exxpiration date
    const expirationDate = new Date(product.exp_date);
    //Diference in mili secs
    const timeDifference = expirationDate - currentDate;
    //Transform difference into days
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    //Assign colors
    switch (daysLeft) {
      case (daysLeft >= 15):
        setExpireColor('#7cffc0');
        break;
      case (daysLeft < 15 && daysLeft > 3):
        setExpireColor('#ffd88b');
        break;
      default:
        setExpireColor('#ff7c7c');
        break;
    }
  }, [daysLeft]);
  
  handleEditProduct = () =>{
    
  };

  handleDeleteProduct = () =>{

  };

  return (
    <View style={ProdContStyles.container} >
      <Image style={ProdContStyles.productImage} source={product.image}></Image>
      <View style={ProdContStyles.containerMain}>
        <Text style={ProdContStyles.productName}>{product.name}</Text>
        <View style={ProdContStyles.containerExpire}>
          <Text style={ProdContStyles.daysLeft}> {daysLeft} days </Text>
          <View style={[ProdContStyles.roundColor, { backgroundColor: expireColor }]}>
          </View>
        </View>
      </View>
      <View style={ProdContStyles.containerButtons}>
        <TouchableOpacity onPress={handleEditProduct}>
          <Image style={ProdContStyles.editBtn} source={'./assets/icons8-editar-512.png'}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteProduct}>
          <Image style={ProdContStyles.deleteBtn} source={'./assets/icons8-basura-512.png'}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductContainer;