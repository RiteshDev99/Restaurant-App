import React from 'react';
import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native';

const NavBar = () => {
    const isLightMode = useColorScheme() === 'light';

    return (
        <View style={styles.main}>
            <Image
                source={require('./public/Icons/filter-3-line.png')}
                style={[styles.image, isLightMode ? styles.darkText : styles.whiteText]}
            />
            <View style={styles.navElement}>
                <Text style={styles.restaurantName}>Navratan Cafe</Text>
                <Image
                    source={require('./public/Icons/Search.png')}
                    style={[styles.image, isLightMode ? styles.darkText : styles.whiteText]}
                />
                <Image
                    source={require('./public/Icons/notificationBar.png')}
                    style={[styles.image, isLightMode ? styles.darkText : styles.whiteText]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    navElement: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    restaurantName: {
        fontSize: 25,
        letterSpacing: 1,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#218F76',
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    whiteText: {
        tintColor: '#ffffff',
    },
    darkText: {
        tintColor: '#000000',
    },
});

export default NavBar;
