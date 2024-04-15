/**
 * App container.
 * @module components/theme/App/App
 */

//Main Page and component that contains all other components
//It loads data from mockData to display e-learning courses information

import React, { Component } from 'react';

import dataProtection from '../images/data_protection.png';
import fraudPrevention from '../images/fraud_prevention.png';
import itSecurity from '../images/it_security.png';
import wphg from '../images/wphg.png';
import { Header } from '@plone/volto/components';
import Sidebar from '../Sidebar/Sidebar';
import Title from '../Title/Title';
import Contact from '../Contact/Contact';
import Content from '../ContentArea/Content';
import ContentDetail from '../ContentArea/ContentDetail';
import { mockData } from '../mockData/mockData';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#c4c4c430' }}>
        <Header />
        <div style={{ width: '85%', margin: '0 auto' }}>
          <Breadcrumbs />
          <div style={{ display: 'flex' }}>
            <div>
              <div
                data-testid="sidebar-container"
                style={{ marginTop: '30px' }}
              >
                <Title title={'Navigation'} />
                <Sidebar
                  title={'Money Laundering and Fraud Prevention'}
                  image={fraudPrevention}
                />
                <Sidebar
                  title={'It security and information security'}
                  image={itSecurity}
                />
                <Sidebar title={'Data Protection'} image={dataProtection} />
                <Sidebar title={'WpHG-Compliance'} image={wphg} />

                <div style={{ marginTop: '30px' }}>
                  <Title title={'Contact'} />
                  <Contact
                    title={'Technical support'}
                    name={'John Doe'}
                    email={'it@example.com'}
                  />
                  <Contact
                    title={'Content-didactic topic'}
                    name={'Jane Roe'}
                    email={'content@example.com'}
                  />
                </div>
              </div>
            </div>
            <div style={{ marginLeft: '40px', marginTop: '40px' }}>
              <h2
                style={{
                  color: 'gray',
                  fontSize: '24px',
                  fontWeight: '500',
                }}
              >
                e-Learning Courses
              </h2>
              {mockData.map((group, index) => (
                <Content key={index} image={group.image}>
                  {group.courses.map((course, idx) => (
                    <ContentDetail
                      key={idx}
                      title={course.title}
                      time={course.duration}
                      text={course.text}
                      progress={course.progress}
                    />
                  ))}
                </Content>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
