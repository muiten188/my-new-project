import React, { Component } from 'react'
import {
    TouchableOpacity
} from 'react-native'
import {
    Container,
    Spinner,
    Text,
    Button
} from 'native-base'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles'
import theme from '../../../themes/default/styles'
import * as loginAction from '../../actions/login_action'
import { debug } from 'util';

class login extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        debugger;
        return (
            <Container style={styles.container}>
                <Text>Login Screen</Text>
                <TouchableOpacity style={theme.button} onPress={(e) => alert("kho khan qua thi ve day co anh cho")}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </Container>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        loginReducer: state.loginReducer,
    }
};
function mapToDispatch(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction , dispatch),
    }
}

export default connect(mapStateToProps, mapToDispatch)(login);