import React, {Component} from 'react'
import {Image} from 'react-native'
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon
} from 'native-base'

import data from '../../../booths.json'

export default class Tinder extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>Tinder</Text>
          </Body>
        </Header>
        <View>
          <DeckSwiper
            ref={c => this._deckSwiper = c}
            dataSource={data}
            renderEmpty={() =>
              <View style={{alignSelf: "center"}}>
                <Text>Over</Text>
              </View>
            }
            renderItem={item =>
              <Card style={{elevation: 3}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://picsum.photos/50/50?image=' + Math.floor(Math.random() * 1000) }} />
                    <Body>
                      <Text>{item.plan_name}</Text>
                      <Text note>{item.org_name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{height: 150, flex: 1}} source={{uri: 'https://picsum.photos/150/350?image=' + Math.floor(Math.random() * 1000) }} />
                </CardItem>
                <CardItem>
                  <Text>{item.description}</Text>
                </CardItem>
              </Card>
            }
          >
          </DeckSwiper>
        </View>
      </Container>
    )
  }
}
