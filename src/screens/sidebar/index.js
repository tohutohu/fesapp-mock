import React, {Component} from 'react'
import {Text} from 'react-native'
import {
  Content,
  Container,
  List,
  ListItem,
  Left,
  Right,
  Button
} from "native-base"

const datas = [
  {
    name: "Home",
    route: "Home"
  },
  {
    name: "Tinder",
    route: "Tinder"
  }
]

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    }
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{flex: 1, backgroundColor: '#fff', top: -1}}
        >
          <List
            dataArray={datas}
            renderRow={data => 
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.name}
                  </Text>
                </Left>
                <Right>
                  <Text>
                  a
                  </Text>
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    )
  }
}

export default SideBar
