import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Image, Grid, Icon, Segment } from 'semantic-ui-react';
import enetworkLogo from './images/enetwork-logo-1024-cropped.jpg';

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
            <Image centered src={ enetworkLogo } size='huge' />
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
            <Segment inverted>
              <Icon name='user' size='big' />
              <Header as="h2">Networking</Header>
              We strive to create stronger interdisciplinary relations throughout different colleges and majors with an emphasis on engineering.
              </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted>
              <Icon name='rocket' size='big' />
              <Header as="h2">Innovation</Header>
            Our new club provides unique opportunities where students can connect and share their ideas toward a common goal.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted>
              <Icon name='send' size='big' />
              <Header as="h2">Outreach</Header>
              We seek outreach to a wide range of programs to educate and promote growth in STEM fields.
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted>
              <Icon name='home' size='big' />
              <Header as="h2">Home</Header>
              Engineering Network welcomes all majors. We maintain a supportive environment that supplements and enhances your academic and professional experiences.
            </Segment>
          </Grid.Column>
        </Grid>
    )
  }
}

class Announcements extends React.Component {
  render() {
    return (
        <Segment>
          <Header as="h1">Announcements</Header>
          <Header as="h2">Thank you for coming out to Friendsmas on 12/9!</Header>
          It was a pleasure to see both familiar and new faces!
          Check out our events page for more events and information here.
        </Segment>
    )
  }
}

class Alumni extends React.Component {
  render() {
    return (
        <Grid container centered>
          <Grid.Column width='4'>
            <Header as='h2'>Our student membership is proud of be a part of the following majors:</Header>
            <br/>Biochemistry
            <br/>Biological Engineering
            <br/>Civil Engineering
            <br/>Computer Engineering
            <br/>Computer Science
            <br/>Electrical Engineering
            <br/>Marketing
            <br/>Mechanical Engineering
            <br/>
          </Grid.Column>
          <Grid.Column width='6'>
            <Header as='h1'>Just Started!</Header>
            We are still growing out club! Thanks for being a part of history.
            <br/>Alumni:
            <br/>Scott Fukuhara—B.S. Civil Engineering (Spring 2020)
            <br/>Brian Lam—B.S. Civil Engineering (Spring 2020)
            <br/>Kacie Shimabukuro—B.S. Mechanical Engineering (Spring 2020)
            <br/>Jing Zheng—B.S. Civil Engineering (Fall 2019)
            <br/>Anthony Simon—B.S. Civil Engineering (Spring 2019)
            <br/>Marcus Chun—B.S. Civil Engineering (Spring 2019)
            <br/>Brittney Mopas—B.S. Biochemistry (Fall 2019)
            <br/>
          </Grid.Column>
        </Grid>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Segment inverted >
          <Grid centered container>
            <Grid.Row/>
            <Grid.Row centered>
              <br/>Engineering Network
              <br/>Connecting since 2018
              <br/>Honolulu, HI   96822
              <br/>enetwork@hawaii.edu
            </Grid.Row>
            <Grid.Row/>
            <Grid.Row>
              <Grid.Column centered width={9}>
                <i>Although this RIO has members who are University of Hawai’i at Mānoa students, faculty, or employees, the RIO is independent of the University which is not responsible for the RIO’s contracts, acts or omissions.</i>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row><i>Engineering Network 2020, All Rights Reserved</i></Grid.Row>
          </Grid>
        </Segment>

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
          <Alumni/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<ENetwork />, document.getElementById('root'));