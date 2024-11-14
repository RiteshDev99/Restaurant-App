import React from 'react';
import { View, StyleSheet, Text, Image, useColorScheme } from 'react-native';

const PremiumFood = () => {
    const colorScheme = useColorScheme(); // Detect light or dark mode
    const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText, { color: textColor }]}>Premium Food</Text>
                <Image
                    source={require('./public/Icons/DownArrow.png')}
                    style={styles.arrowImage}
                />
            </View>
            <View style={styles.headerItem}>
                <View style={styles.main}>
                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image
                                source={{
                                    uri: 'https://cf-img-a-in.tosshub.com/lingo/atbn/images/story/202301/fotojet_57-sixteen_nine.jpg?size=948:533',
                                }}
                                style={styles.cardImage}
                            />
                        </View>
                        <Text style={styles.SnacksText}>Anda wrap</Text>
                        <View style={styles.priceSection}>
                            <Text style={styles.itemText}>Egg Rolls</Text>
                            <View style={styles.priceText}>
                                <Text style={styles.price} >Price</Text>
                                <Text style={styles.rupees} >₹30</Text>

                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image
                                source={{
                                    uri: 'https://t4.ftcdn.net/jpg/09/19/90/27/360_F_919902730_Xe1nlfdgWq9oZkrP1vpMsPSzrh3bGTKv.jpg',
                                }}
                                style={styles.cardImage}
                            />
                        </View>
                        <Text style={styles.SnacksText}>Noodles</Text>
                        <View style={styles.priceSection}>
                            <Text style={styles.itemText}>Maggie</Text>
                            <View style={styles.priceText}>
                                <Text style={styles.price} >Price</Text>
                                <Text style={styles.rupees} >₹40</Text>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.main}>
                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image
                                source={{
                                    uri: 'https://freashgrocery.com/wp-content/uploads/2024/06/images-11.jpeg',
                                }}
                                style={styles.cardImage}
                            />
                        </View>
                        <Text style={styles.SnacksText}>Paneer Fried-Rice</Text>
                        <View style={styles.priceSection}>
                            <Text style={styles.itemText}>Paneer Rice</Text>
                            <View style={styles.priceText}>
                                <Text style={styles.price} >Price</Text>
                                <Text style={styles.rupees} >₹60</Text>

                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardImage}>
                            <Image
                                source={{
                                    uri: 'https://t3.ftcdn.net/jpg/05/05/40/28/360_F_505402811_prL7D5Go35LZKpQeUVEUiCLnO6spS3sk.jpg',
                                }}
                                style={styles.cardImage}
                            />
                        </View>
                        <Text style={styles.SnacksText}>Dosa</Text>
                        <View style={styles.priceSection}>
                            <Text style={styles.itemText}>Masala Dosa</Text>
                            <View style={styles.priceText}>
                                <Text style={styles.price} >Price</Text>
                                <Text style={styles.rupees} >₹60</Text>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: '#FF3E4D',
        marginTop: 15,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2F363F',
    },
    arrowImage: {
        height: 19,
        width: 19,
        marginLeft: 10,
    },
    headerItem: {
        gap: 25,
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    card: {
        height: 190,
        width: 170,
        backgroundColor: '#25CCF7',
        borderRadius: 8,


    },
    cardImage: {
        height: 110,
        width: 170,
        backgroundColor: '#d2edc2',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        objectFit: 'fill',
    },

    SnacksText: {
        marginHorizontal: 11,
        marginVertical: 4,
        fontSize: 13,
        color: '#616C6F',
    },
    priceSection: {},
    itemText: {
        paddingHorizontal: 11,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
    },
    priceText: {
        paddingHorizontal: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
    },
    rupees: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000000',
    },
});

export default PremiumFood;
