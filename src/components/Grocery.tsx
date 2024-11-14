import React from 'react';
import { View, StyleSheet, Text, Image, useColorScheme } from 'react-native';

const Grocery = () => {
    const isLightMode = useColorScheme() === 'light';
    return (
        <View style={[Styles.Container]}>
            <View style={Styles.Card}>
                <View style={Styles.imageCard}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/4418/4418219.png',
                        }}
                        style={Styles.image}
                    />
                </View>
                <Text style={[Styles.cardText, isLightMode ? Styles.DarkText : Styles.WhiteText]}>Drinks</Text>
            </View>
            <View style={Styles.Card}>
                <View style={Styles.imageCard}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/6594/6594483.png',
                        }}
                        style={Styles.image}
                    />
                </View>
                <Text style={[Styles.cardText, isLightMode ? Styles.DarkText : Styles.WhiteText]}>Burger</Text>
            </View>

            <View style={Styles.Card}>
                <View style={Styles.imageCard}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/1721/1721533.png',
                        }}
                        style={Styles.image}
                    />
                </View>
                <Text style={[Styles.cardText, isLightMode ? Styles.DarkText : Styles.WhiteText]}>Beverages</Text>
            </View>
            <View style={Styles.Card}>
                <View style={Styles.imageCard}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.freepik.com/512/10611/10611992.png',
                        }}
                        style={Styles.image}
                    />
                </View>
                <Text style={[Styles.cardText, isLightMode ? Styles.DarkText : Styles.WhiteText]}>Cold Drink</Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    Container: {
        // padding: 8,
        // backgroundColor: '#FF3E4D',
        marginTop: 3,
        flexDirection: 'row',
        justifyContent:'center',
    },
    Card: {
        height: 98,
        width: 90,
        // backgroundColor: '#7CEC9F',
        flexDirection: 'column',
        margin: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        // padding: 8,
    },
    imageCard: {
        height: 78,
        width: 80,
        backgroundColor: '#d2edc5',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
    },
    cardText: {
        fontSize: 15,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#091211',
    },
    image: {
        height: 60,
        width: 60,
        objectFit: 'fill',
        borderRadius: 4,
    },

    WhiteText: {
        color: '#ffffff',
    },
    DarkText: {
        color: '#000000',
    },
});

export default Grocery;
