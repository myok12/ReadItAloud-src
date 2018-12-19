/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Word from './Word';
import ClearWord from './ClearWord';
import PlayWord from './PlayWord';
import Letters from './Letters';

interface Props {
}

interface State {
    word: string,
}


export default class App extends Component<Props, State> {
    onLetterClicked = (letter: string) => {
        this.setState(state => ({
                word: state.word + letter,
        }));
    }

    onClearWord = () => {
        this.setState({word: ""});
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            word: "",
        }
    }

    render() {
        const {word} =this.state;
        return (
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <View style={styles.clearWord}>
                        <ClearWord onClearWord={this.onClearWord}/>
                    </View>
                    <View style={styles.word}>
                        <Word word={word}/>
                    </View>
                    <View style={styles.playWord}>
                        <PlayWord word={word}/>
                    </View>
                </View>

                <View style={styles.bottomRow}>
                    <Letters onLetterClicked={this.onLetterClicked}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
        paddingTop: 50,
        paddingBottom: 50,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    word: {
        flex: 1,
    },
    clearWord: {
        marginLeft: 10,
        marginRight: 10,
    },
    playWord: {
        marginLeft: 10,
        marginRight: 10,
    },
    bottomRow: {
        paddingTop: 50,
        flex: 1,
    },
});
