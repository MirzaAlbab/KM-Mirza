import React from 'react';
import {
	View,
	ActivityIndicator,
	StyleSheet,
	Platform
} from 'react-native';
import Monserrat from './Monserrat';

const Loading = () => (
	<View style={styles.loading}>
		<ActivityIndicator size="large" color={Platform.OS === "ios" ? "white" : "#EA0000"} />
		<Monserrat size={16} type='Bold' color='white'>Loading ...</Monserrat>
	</View>
);

const styles = StyleSheet.create({
	loading: {
		flex: 1,
		justifyContent: 'center'
	}
});

export default Loading;