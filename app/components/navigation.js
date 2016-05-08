/**
 * Created by ljunb on 16/5/8.
 * 利用Navigator简单封装一个导航栏,样式为白色
 */

import React from 'react';
import {
    Navigator,
    Component,
    View,
    StyleSheet,
} from 'react-native';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: '', component: this.props.component}}
                configureScene={() => {
                        return Navigator.SceneConfigs.FloatFromBottom;
                    }}
                renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <View style={styles.container}>
                                <Component navigator = {navigator} route = {route} {...route.passProps} />
                            </View>
                        )
                    }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})