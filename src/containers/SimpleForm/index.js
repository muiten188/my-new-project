import React , { Component } from 'react';
import Expo from 'expo';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FieldsetLegend from '../../components/FieldSet'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const submit=values => {
    return sleep(1000).then(() => {
        // if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        //     throw new SubmissionError({
        //       username: 'User does not exist',
        //       _error: 'Login failed!'
        //     })
        //   } else if (values.password !== 'redux-form') {
        //     throw new SubmissionError({
        //       password: 'Wrong password',
        //       _error: 'Login failed!'
        //     })
        //   } else {
      // simulate server latency  
        alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
         //}
    })
}
const validate = values => {
  const error= {};
  error.email= '';
  error.name= '';
  var ema = values.email;
  var nm = values.name;
  if(values.email === undefined){
    ema = '';
  }
  if(values.name === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }

  if(nm.length > 8){
    error.name= 'max 8 characters';
  }
return error;
};
class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.renderInput = this.renderInput.bind(this);
  }
  renderInput({ input, label, type, meta: { touched, error, warning } }){
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }
    return( <Item style= {{ margin: 10 }} error= {hasError}>
                        <Input {...input}/>
                        {hasError ? <Text>{error}</Text> : <Text />}
                    </Item> )
  }
  render(){
     const { handleSubmit, reset } = this.props;
        return (
            <Container style= {{ backgroundColor: "#fff"}}>
                <FieldsetLegend style={{margin:15}} legend="Simple from with legend">
                    <Header>
                        <Body>
                        <Title>Redux Form</Title>
                        </Body>
                    </Header>
                    <Content padder>
                        <Field name="email" component={this.renderInput} />
                        <Field name="name" component={this.renderInput} />
                    <Button style= {{ margin: 10 }} block primary onPress= {handleSubmit}>
                        <Text>Submit</Text>
                    </Button>
                    </Content>
                </FieldsetLegend>
            </Container>
        )
}
}

function mapStateToProps(state, props) {
    return {
        loginReducer: state.loginReducer,
    }
  };

export default reduxForm({
  form: 'test',
  validate,
  onSubmit: submit
})(connect(mapStateToProps)(SimpleForm))
