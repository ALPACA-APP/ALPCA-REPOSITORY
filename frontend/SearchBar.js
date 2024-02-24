import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native'
import SearchIcon from './assets/search-100.png';

const SearchBar = ({ onSearchSubmit, onChangeText }) => {
    const [text, setText] = useState('');

    const handleChangeText = (newText) => {
        setText(newText);
        onChangeText(newText);
    };

    const handleSubmitEditing = () =>{
        onSearchSubmit(text);
    }

    return (
        <View style={styles.container}>
            <Image source={SearchIcon} style={styles.icon} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={text}
                onChangeText={handleChangeText}
                onSubmitEditing={handleSubmitEditing}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 30,
        borderColor: '#5A5A5A',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
});

export default SearchBar;
