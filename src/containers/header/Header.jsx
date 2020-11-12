import React from "react";
import { SearchBar } from "../../components"

import { StyleSheet, View, Text, Image } from 'react-native';

export const Header = ({ onSearch }) => {
    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/icons/moviefy-icon.png')} 
                />
                <Text style={styles.span}>MOVIEFY</Text>
                <View/>
            </View>

            <SearchBar
                onSearchChange={onSearch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center", 
        height: 150,
        justifyContent: "center",
        display: "flex",
        justifyContent: "space-between",
        marginTop: 40
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        flexDirection: "row",
    },   
    logo: {
        height: 100
    },
    span: {
        fontSize: 48,
        color: "#3D5AFE"
    }
})