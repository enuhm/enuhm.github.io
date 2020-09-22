import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Image } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topMenu">
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
        <Container>
          <Header as="h1" textAlign='centered'> Engineering Network at University of Hawaii at Manoa</Header>
          <Image centered src="http://www.enuhm.com/wp-content/uploads/2018/10/0925_ENetwork_KC_logo_01-1024x1024.jpg" size='huge' />
        </Container>
    )
  }
}

class MiddleMessage extends React.Component {
  render() {
    return (
        <Header as="h1">MiddleMenu</Header>
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
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<ENetwork />, document.getElementById('root'));