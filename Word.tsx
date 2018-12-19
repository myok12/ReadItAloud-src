import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
    word: string,
};

export default class Word extends Component<Props> {
    render() {
        const {word} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.style}>
                    {word}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    style: {
        fontSize: 72,
    }
});
