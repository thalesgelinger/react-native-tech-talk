import React from "react";
import { TouchableOpacity, TextInput, View, StyleSheet, Image } from "react-native";

const ENTER_CHARCODE = 13;

export const SearchBar = ({ onSearchChange, onSearch }) => {
    return (
        <View style={styles.searchBar}>
            <TouchableOpacity onPress={onSearch}>    
                <Image 
                    source={require('../../assets/icons/search-icon.png')} 
                />
            </TouchableOpacity>
            <TextInput 
                style={styles.input}
                onChangeText={onSearchChange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        width: "80%",
        flexDirection: "row",
        height: 30,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    input: {
        backgroundColor: "#D1C4E9",
        width: "100%",
        borderRadius: 60
    }
})