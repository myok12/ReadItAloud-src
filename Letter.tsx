import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
    letter: string,
    onClicked: () => void,
};

export default class Letter extends Component<Props> {
    render() {
        const {letter} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onClicked}>
                    <Text style={styles.letter}>{letter}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    letter: {
        fontSize: 72,
        textAlign: 'center',
    }
});
