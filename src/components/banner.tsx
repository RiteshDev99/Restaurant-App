import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

export default function Banner() {
    return (
        <View>
            <ScrollView horizontal={true} decelerationRate={0}

                snapToInterval={320}
                snapToAlignment={'center'}
                style={Styles.Container}>
                <View style={[Styles.card, Styles.ElevatedCardOne]}>
                    <Image
                        source={{

                            uri: 'https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?semt=ais_hybrid',

                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardTwo]}>
                    <Image
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardThree]}>
                    <Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQAUhn-vT5nWL0ba7kWwvhvpCUi_XF5Z02g&s',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardFour]}>
                    <Image
                        source={{
                            uri: 'https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/add-drinks-to-make-a-delightful-food-combo.jpg',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardFive]}>
                    <Image
                        source={{
                            uri: 'https://thumbs.dreamstime.com/b/diverse-array-high-calorie-treats-junk-food-spread-diverse-array-high-calorie-treats-junk-food-spread-array-popular-310413888.jpg',
                        }}
                        style={Styles.image}
                    />
                </View>
                <View style={[Styles.card, Styles.ElevatedCardSix]}>
                    <Image
                        source={{
                            uri: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg',

                        }}
                        style={Styles.image}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const Styles = StyleSheet.create({
    Container: {
        padding: 8,
        // backgroundColor: '#FF3E4D',
        marginTop:3,
    },
    card: {
        height: 180,
        width: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 8,
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        borderRadius: 8,
    },
    ElevatedCardOne: {
        backgroundColor: '#6366f1',
    },
    ElevatedCardTwo: {
        backgroundColor: '#a78bfa',
    },
    ElevatedCardThree: {
        backgroundColor: '#db2777',
    },
    ElevatedCardFour: {
        backgroundColor: '#fda4af',
    },
    ElevatedCardFive: {
        backgroundColor: '#0d9488',
    },
    ElevatedCardSix: {
        backgroundColor: '#64748b',
    },
});
