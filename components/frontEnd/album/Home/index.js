import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    View,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity
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
                <View style={styles.albumContent}>
                    <FlatList
                        data={albumDataInProps.data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Detail',
                                    {
                                        getFullPicture: item.urls.full,
                                    }
                                )}>
                                <Item
                                    photos={item.urls.small}
                                    descriptions={item.alt_description}
                                    names={item.user.name}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.user.id}
                    />
                </View>
            )
        }
    }

    return (
        <View>
            <AlbumHandle />
        </View>
    );
}

const styles = StyleSheet.create({
    albumContent: {
        paddingTop: 15,
        width: '100%',
    }
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
