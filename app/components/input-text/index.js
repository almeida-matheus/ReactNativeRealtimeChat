import React, { Component } from 'react';
import {
	TextInput
} from 'react-native';
import * as styles from './style';
import * as utils from '../../utils/';

class InputText extends Component {
	render () {
		const classNames = [
			utils.className(styles.style.default, true),
			utils.className(styles.style.error, this.props.error),
			utils.className(styles.style.expand, this.props.expand)
		];

		return (
			<TextInput
				style={classNames}
				underlineColorAndroid="transparent"
				autoCorrect={this.props.autoCorrect}
				placeholder={this.props.placeholder}
				onChangeText={this.props.onChangeText}
				value={this.props.value}
				secureTextEntry={this.props.secureTextEntry}
				placeholderTextColor="#dfdbdb"
				multiline={this.props.multiline}
				autoFocus
			/>
		);
	}
}

export default InputText;