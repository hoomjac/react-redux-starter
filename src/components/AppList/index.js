import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconTraining from '../AppIcons/training'
import IconAnnouncement from '../AppIcons/announcement'
import IconNews from '../AppIcons/news'
import IconDataBase from '../AppIcons/database'
import IconDuty from '../AppIcons/duty'
import IconScheduling from '../AppIcons/scheduling'
import IconWage from '../AppIcons/wage'
import IconFace from '../AppIcons/face'

const StyledAppList = styled.div`
  > .app-list {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    justify-content: space-between;

    > .app {
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: center;
      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`

class AppList extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <StyledAppList>
        <div className="app-list">
          <Link to="training" className="app">
            <div>
              <IconTraining />
              <span>培训管理</span>
            </div>
          </Link>
          <Link to="announcement" className="app">
            <div>
              <IconAnnouncement />
              <span>电子公告</span>
            </div>
          </Link>
          <Link to="news" className="app">
            <div>
              <IconNews />
              <span>院内新闻</span>
            </div>
          </Link>
          <Link to="database" className="app">
            <div>
              <IconDataBase />
              <span>科室资料库</span>
            </div>
          </Link>
        </div>
        <div className="app-list">
          <Link to="duty" className="app">
            <div>
              <IconDuty />
              <span>值班查询</span>
            </div>
          </Link>
          <Link to="scheduling" className="app">
            <div>
              <IconScheduling />
              <span>排班查询</span>
            </div>
          </Link>
          <Link to="wage" className="app">
            <div>
              <IconWage />
              <span>工资查询</span>
            </div>
          </Link>
          <Link to="face" className="app">
            <div>
              <IconFace />
              <span>人脸采集</span>
            </div>
          </Link>
        </div>
      </StyledAppList>
    )
  }
}

export default AppList
