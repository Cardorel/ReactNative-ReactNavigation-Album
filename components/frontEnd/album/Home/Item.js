import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';


export default function Item({ photos, names }) {

    return (
        <View style={styles.imagesContent}>
            <Image
                style={styles.images}
                source={{ uri: photos }}
            />
            <View style={styles.namesContainer}>
                <Text style={styles.names}>{names}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  
    images: {
        flex: 1,
        width: null,
        alignSelf: "stretch",
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        marginBottom: 2,
    },
    namesContainer: {
        backgroundColor: "#ddd",
        padding: 10,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    names: {
        alignSelf: "center",
        fontSize: 15,
        color: "#fff",
        textAlign: "center",
    },
    imagesContent: {
        margin: 2,
        padding: 2,
        height: Dimensions.get("window").height/4,
        width: Dimensions.get("window").width/2.1,
    }
})
