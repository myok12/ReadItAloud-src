import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Letter from './Letter'

type Props = {
   onLetterClicked: (letter: string) => void
};

export default class Letters extends Component<Props> {
    onLetterClicked = (letter: string) => {
        return () => {
            this.props.onLetterClicked(letter);
        }
    }

    render() {
        const charCodeA = 'A'.charCodeAt(0);
        const letters = [];
        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode(charCodeA + i);
            letters.push(
                <View key={letter} style={styles.letter} >
                    <Letter letter={letter} onClicked={this.onLetterClicked(letter)}/>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                {letters}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap',
    },
    letter: {
        textAlign: 'center',
        width: 60,
    },
});
