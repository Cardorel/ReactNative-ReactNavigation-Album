import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    static getDerivedStateFromError(err) {
        return { hasError: true };
    }

    componentDidCatch(err, info) {
        logErrorToService(err, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <View>
                    <Text>Something went wrong</Text>
                </View>
            )
        }
        return this.props.children;
    }
}
