import { StyleSheet } from 'react-native';

const ProdContStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between', // Distribute content along the main axis
    alignItems: 'center', // Align items along the cross axis (vertically in this case)
    width: '100%',
    height: 70,
    marginTop: 20,
    paddingHorizontal: 20, // Add padding for better spacing
  },
  containerMain: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  containerExpire: {
    flexDirection: 'row',
  },
  containerButtons: {
    flexDirection: 'row',
  },
  productImage: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    width: 90,
    height: 70,
  },
  productName: {
    color: '#1f1f1f',
    fontSize: 15,
    fontWeight: 'bold',
  },
  productBrand: {
    color: '#7c7c7c',
    fontSize: 11,
  },
  daysLeft: {
    color: '#7c7c7c',
    fontSize: 11,
  },
  roundColor: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginLeft: 20,
    borderWidth: 1,
  },
  editBtn: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  deleteBtn: {
    width: 25,
    height: 25,
    tintColor: 'black',
    marginLeft: 20,
  },
  createBtn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 15,
    borderStyle: "dashed",
    height: 35,
    width: 100,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createBtnText: {
    color: '#1f1f1f',
    fontSize: 11,
  },
  toggle: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleInner: {
    width: 30,
    height: 30,
  },
});

export default ProdContStyles;
