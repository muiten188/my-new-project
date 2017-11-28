import React, { Component } from 'react'
import { Container, Spinner, Text } from 'native-base'
import styles from './styles'
export default class extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container style={styles.container}>
                <Text>Login Screen</Text>
            </Container>
        )
    }
}