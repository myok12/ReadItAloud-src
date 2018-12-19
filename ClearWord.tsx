import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';

type Props = {
    onClearWord: () => void
};

export default class ClearWord extends Component<Props> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onClearWord}>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('./images/TrashCan.svg.500px.png')}/>
            </TouchableOpacity>
        )
    }
}

