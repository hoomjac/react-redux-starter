import React, { PureComponent } from 'react'
import Carousel from '~components/Carousel'
import AppList from '~components/AppList'
import { WhiteSpace } from 'antd-mobile'
import connect from '@connect'

@connect()
class Home extends PureComponent {
  render() {
    return (
      <>
        <Carousel data={['./images/banner1.jpg', './images/banner2.jpg']} />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <AppList />
      </>
    )
  }
}

export default Home
