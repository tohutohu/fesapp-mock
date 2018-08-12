import React, {Component} from 'react'
import {Text, Image} from 'react-native'
import {
  Container, 
  Header, 
  Body, 
  Content,
  Thumbnail,
  Card,
  CardItem,
  Left,
  Button,
  Title,
  Right,
  Icon
} from 'native-base'

class Detail extends Component {
  render () {
    const data = this.props.navigation.getParam('data', {})
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>詳細</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://picsum.photos/50/50?image=' + Math.floor(Math.random() * 1000) }} />
                <Body>
                  <Text>{data.plan_name}</Text>
                  <Text note>{data.org_name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={{height: 150, flex: 1}} source={{uri: 'https://picsum.photos/150/350?image=' + Math.floor(Math.random() * 1000) }} />
            </CardItem>
            <CardItem>
              <Text>{data.description}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
      )
  }
}

export default Detail
