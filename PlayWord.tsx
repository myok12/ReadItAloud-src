import React, {Component} from 'react';
import {Image, TouchableOpacity, Alert} from 'react-native';

type Props = {
    word: string,
};

export default class PlayWord extends Component<Props> {
    playWord = () => {
        const {word} = this.props;
        Alert.alert('Should be saying ' + word);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.playWord}>

            <Image
                style={{width: 50, height: 50}}
                source={require('./images/Speaker.svg.640px.png')}/>
            </TouchableOpacity>
        )
    }
}

