import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

export default function Item({ photos, names, descriptions }) {

    return (
        <View style={styles.imagesContainer}>
            <Image
                style={styles.images}
                source={{ uri: photos }}
            />
            <View style={styles.namesContainer}>
                <Text style={styles.descriptions}>{descriptions}</Text>
                <Text style={styles.names}>{names}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagesContainer: {
        flexDirection: "column",
        margin: 15,
        elevation: 5,  //Android
        flex: 1,
        shadowColor: "black",   //IOS
        shadowOffset: { width: 0, height: 4 }, //IOS
        shadowOpacity: 0.21,  //IOS
        shadowRadius: 6, //IOS
    },
    images: {
        width: '100%',
        height: 210,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginBottom: 1,
    },
    namesContainer: {
        backgroundColor: "#ddd",
        padding: 15,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    names: {
        alignSelf: "center",
        fontSize: 19,
        color: "#fff"
    },
    descriptions: {
        fontSize: 10,
        width: '100%',
        textAlign: "center",
    }

})
