import React, { Component } from "react";
import { Container, Card, Icon, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <p>
          And you as well must die, beloved dust, And all your beauty stand you
          in no stead; This flawless, vital hand, this perfect head, This body
          of flame and steel, before the gust Of Death, or under his autumnal
          frost, Shall be as any leaf, be no less dead Than the first leaf that
          fell,—this wonder fled. Altered, estranged, disintegrated, lost. Nor
          shall my love avail you in your hour. In spite of all my love, you
          will arise Upon that day and wander down the air Obscurely as the
          unattended flower, It mattering not how beautiful you were, Or how
          beloved above all else that dies.
        </p>
        <Card.Group>
        <Card link>
            <Image src="https://cdn.pixabay.com/photo/2014/06/21/08/43/rabbit-373691__340.jpg" />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        <Card link>
            <Image src="https://cdn.pixabay.com/photo/2014/06/21/08/43/rabbit-373691__340.jpg" />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          <Card link>
            <Image src="https://cdn.pixabay.com/photo/2014/06/21/08/43/rabbit-373691__340.jpg" />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
          <Card link>
            <Image src="https://cdn.pixabay.com/photo/2017/02/11/20/51/fashion-2058703_960_720.jpg" />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}

export default App;
