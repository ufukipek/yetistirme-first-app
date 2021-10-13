import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

// Dimension API kullanımı
const dimensions = Dimensions.get('screen');
const width = dimensions.width;
const height = dimensions.height;

// Margin - Padding farkı
// Responsive olsun diye ekran width'i kullanma
const App = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>ANASAYFA</Text>
            </View>
            <View style={styles.campaignsContainer}>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
            </View>
            <View style={styles.products} />
            <View style={styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex:1,
    },
    header: {
        backgroundColor: 'pink',
        // flex:0.2,
        height: width * 0.2,
    },
    campaignsContainer: {
        backgroundColor: 'white',
        // flex:0.3,
        flexGrow:0.5,//geriye kalan alanın yarısı
    },
    products: {
        backgroundColor: 'orange',
        // flex:0.45,
        flexGrow:0.5,
        //flexGrow:1, //geriye kalan alanı products alır
    },
    footer: {
        backgroundColor: 'lightgreen',
        // flex:0.15,
        height: width * 0.2,
    },
});

export default App;