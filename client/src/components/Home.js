import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import '../cards.css';
import { Image, Icon, Card, Grid, Container } from 'semantic-ui-react';
import Tom from './assets/tom.png'
import styled from 'styled-components';


class Home extends Component {
  state = { profiles: [] }

  componentDidMount() {
    axios.get('/api/profiles')
      .then( res => this.setState({ profiles: res.data }) )
    }

    
 
  profiles = () => {
  
    return this.state.profiles.map( p =>
      <Card key={p.id}>
        <Image src={Tom} avatar/>
        <Card.Content>
          <Card.Header>
            {p.user_name}
          </Card.Header>
          <Card.Description>
            <p>Age: {p.age}</p>
            <p>Contact: {p.contact}</p>
            <p>Quote: {p.quote}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
      </Card>
    )
  }

  render() {
  const Header = styled.div`
 background: linear-gradient(to bottom right, aliceblue, yellow);
  font-size: 35px;
  text-align: center;
  height: 25px;
  padding: 5px;
  margin: 10px;
`
    return (
      <Container>
        <Header>MIESPACIO</Header>
          <Card.Group itemsPerRow={4}>
           { this.profiles() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { profiles: state.profiles }
}

export default Home;