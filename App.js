import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
Form,
Checkbox,
Button,
Grid,
Image,
Header,
Segment,
Icon,
Input
}
from "semantic-ui-react";

class App extends Component {
  render () {
    return (
      <div>
      <br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container columns={3}>
      <Grid.Column></Grid.Column>
      <Grid.Column>

      <Header as="h3" color="teal" textAlign="center">
      <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" size="big"/>
      Member Login
      </Header>
      <Segment raised>
      <Form>
      <Form.Field>
        <Input type="email" placeholder='E-mail address' iconPosition="left" >
        <Icon name="user"/>
        <input/>
        </Input>
      </Form.Field>
      <Form.Field>
      <Input type="password" placeholder='Password' iconPosition="left" >
      <Icon name="lock"/>
      <input/>
      </Input>
      </Form.Field>
      <Form.Field center>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button attached color="teal" >Login</Button>
    </Form>
    </Segment>
    <Button attached="bottom">Tidak Punya Akun? Silakan <a href="#">Register</a></Button>
      </Grid.Column>
      <Grid.Column></Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default App;
