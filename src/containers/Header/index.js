import React, { Component } from 'react'
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
    Text
} from 'native-base'
import styles from './styles'
export default class extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { styles } = this.props
        return (
            <Header style={styles.header}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>User</Text>
                    </Button>
                </Right>
            </Header>
        )
    }
}