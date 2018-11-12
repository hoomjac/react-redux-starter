import React, { PureComponent } from 'react'
import connect from '@connect'

@connect()
class Home extends PureComponent {
  render() {
    return <div>Hi There</div>
  }
}

export default Home
