import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    View,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { albumAction } from '../../../backEnd/REDUX/Action'
import Item from './Item';


const Home = ({ albumDataInProps, dispatchAlbumFunc, navigation }) => {
    //use effect every time when component did mount
    useEffect(() => {
        dispatchAlbumFunc();
    }, [dispatchAlbumFunc]);

    
    const AlbumHandle = () => {
        //Check if not Data => shw spinner
        if (!albumDataInProps.loading) {
            return <ActivityIndicator color="#85C1E9" size="large" />;
        } else {
            //else show data
            return (
                albumDataInProps.data.map(item => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail',
                            {
                                getFullPicture: item.urls.full,
                            }
                        )}
                        
                        key={item.id}
                    >
                        <Item
                            photos={item.urls.small}
                            names={item.user.name}
                        />
                    </TouchableOpacity>
                ))
            )
        }
    }

    return (
        <ScrollView>
            <View style={styles.containerGallery}>
                <AlbumHandle />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerGallery: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#eee",
        justifyContent: "center",
        alignContent: "center",
    },
})

//Get data in the Store
const mapStateToProps = state => {
    return {
        albumDataInProps: state
    }
}

//dispatch data in the store
const mapDispatchToProps = dispatch => {
    return {
        dispatchAlbumFunc: () => {
            dispatch(albumAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
