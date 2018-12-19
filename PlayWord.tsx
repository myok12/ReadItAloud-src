import React, {Component} from 'react';
import {Image, TouchableOpacity, Alert} from 'react-native';
// @ts-ignore
import Tts from 'react-native-tts';

type Props = {
    word: string,
};

type State = {
    ttsInitialized: boolean
}

interface Voice {
    language: string,
}

export default class PlayWord extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {ttsInitialized: false};
    }

    playWord = () => {
        const {word} = this.props;

        if (this.state.ttsInitialized) {
            Tts.speak(word.toLowerCase());
        }
    }

    componentDidMount = async () => {
        await Tts.getInitStatus();
        this.setState({ttsInitialized: true})
        // const voices = await Tts.voices();
        // console.log(voices.filter((voice : Voice) => voice.language == "en-US"));
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

