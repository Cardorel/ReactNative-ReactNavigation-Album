import React from 'react';
import {
    View,
    Image,
    Button,
    StyleSheet,
} from 'react-native';



function Detail({ route, navigation }) {
    const linkFullPicture = route.params.getFullPicture
        ;
    return (
        <View style={styles.modalContainer}>
            {
                linkFullPicture &&
                <View>
                    <View style={styles.closeBtn}>
                        <Button
                            title="X"
                            color="red"
                            onPress={() => navigation.goBack()}
                        />
                    </View>
                    <Image
                        style={styles.fullPicture}
                        source={{ uri: linkFullPicture }}
                        resizeMode="cover"
                    />
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
        position: "relative",
        paddingTop: 30,
    },
    fullPicture: {
        width: '100%',
        height: '100%',
    },
    closeBtn: {
        width: 25,
        position: "absolute",
        zIndex: 1,
        right: 3,
        top: 5,
        borderRadius: 6,
        backgroundColor: 'red',
        fontWeight: "800"
    }
})

export default Detail;