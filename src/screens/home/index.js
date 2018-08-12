import React, {Component} from 'react'
import {Alert, View, Text, StatusBar} from 'react-native'
import {
  Container, 
  Header,
  Body,
  Title,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Button,
  Icon,
  Item,
  Input
} from 'native-base'
import data from '../../../booths.json'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {search: false, booths: [].concat(data), searchText: ''}

    this.searchInputChangeHandler = this.searchInputChangeHandler.bind(this)
  }
  searchInputChangeHandler(text) {
    const booths = data.filter(b => b.plan_name && b.plan_name.includes(text))
    this.setState(prev => {return {...prev, searchText: text, booths: booths}})
  }
  getHeader() {
    if (this.state.search) {
      return (
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search"/>
            <Input placeholder="Search" onBlur={() => this.setState(prev => {return {...prev, search: false}})} onChangeText={this.searchInputChangeHandler} value={this.state.searchText}/>
          </Item>
        </Header>
      )
    }

    return (
      <Header>
        <Body>
          <Title>{this.state.searchText===''?'Test':('検索結果:'+this.state.searchText)}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.setState(prev => {return {...prev, search: true}})}>
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
    )
  }
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {this.getHeader()}
        <Content>
          <List
            dataArray={this.state.booths}
            renderRow={(booth, i) => 
              <ListItem thumbnail onPress={() => this.props.navigation.push('Detail', {data: booth})}>
                <Left>
                  <Thumbnail square source={{uri: 'https://picsum.photos/100/100?image=' + Math.floor(Math.random() * 1000)}} />
                </Left>
                <Body>
                  <Text>{booth.plan_name}</Text>
                  <Text style={{fontSize: 10, color: '#666'}} numberOfLines={1}>{booth.description}</Text>
                </Body>
              </ListItem>
            }
          >
          </List>
        </Content>
      </Container>
    )
  }
}

export default Home
