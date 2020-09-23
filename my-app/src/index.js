import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Image, Grid, Icon, Segment } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topMenu" inverted>
            <Menu.Item>Engineering Network</Menu.Item>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Events</Menu.Item>
            <Menu.Item>Officers</Menu.Item>
            <Menu.Item>Members</Menu.Item>
            <Menu.Item>Photos</Menu.Item>
            <Menu.Item>Connect with Us</Menu.Item>
            <Menu.Item>Matthew's EE160</Menu.Item>
        </Menu>
    )
  }
}

class ENetworkLogo extends React.Component {
  render() {
    return (
        <Segment className="logo">
          <Container>
            <Image centered src="http://www.enuhm.com/wp-content/uploads/2018/10/0925_ENetwork_KC_logo_01-1024x1024.jpg" size='huge' />
          </Container>
        </Segment>
    )
  }
}

class MiddleMessage extends React.Component {
  render() {
    return (
        <Container>
          <Header as="h1" textAlign='centered' inverted> Engineering Network at University of Hawaii at Manoa</Header><br/>
          <Header as="h2" textAlign='centered' inverted>BRINGING THE LOCAL ENGINEERING COMMUNITY IN HAWAII TOGETHER. GO BOWS!</Header>
        </Container>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Header as="h1">FullWidthImage</Header>
    )
  }
}

class Goals extends React.Component {
  render() {
    return (
        <Grid container columns={4} textAlign="center">
          <Grid.Column>
            <Icon name='user' />
            <Header as="h2">Networking</Header>
            We strive to create stronger interdisciplinary relations throughout different colleges and majors with an emphasis on engineering.
          </Grid.Column>
          <Grid.Column>
            <Icon name='rocket' />
            <Header as="h2">Innovation</Header>
            Our new club provides unique opportunities where students can connect and share their ideas toward a common goal.
          </Grid.Column>
          <Grid.Column>
            <Icon name='send' />
            <Header as="h2">Outreach</Header>
            We seek outreach to a wide range of programs to educate and promote growth in STEM fields.
          </Grid.Column>
          <Grid.Column>
            <Icon name='home' />
            <Header as="h2">Home</Header>
            Engineering Network welcomes all majors. We maintain a supportive environment that supplements and enhances your academic and professional experiences.
          </Grid.Column>
        </Grid>
    )
  }
}

class Announcements extends React.Component {
  render() {
    return (
        <Header as="h1">FullWidthImage</Header>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Header as="h1">FooterMenu</Header>
    )
  }
}

class ENetwork extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <ENetworkLogo/>
          <MiddleMessage/>
          <FullWidthImage/>
          <Goals/>
          <Announcements/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<ENetwork />, document.getElementById('root'));