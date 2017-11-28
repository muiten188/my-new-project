import React, { Component } from 'react'
import { Container, Spinner, Text } from 'native-base'
import styles from './styles'
export default class extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { message = 'Application Loading...' } = this.props
        return (
            <Container style={styles.container}>
                <Text>{message} MInh tinh</Text>
            </Container>
        )
    }
}