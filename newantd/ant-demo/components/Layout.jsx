import React from 'react'
import { useState } from 'react';
import { ReactDOM } from 'react';
import { Layout,
  Menu,
  Breadcrumb, 
  Avatar, 
  Image, 
  Dropdown,
  Card,
  Col,
  Row,
  Pagination 
 } from 'antd';
import { UserOutlined,
  DownOutlined,
  MailOutlined,
  AppstoreOutlined, 
  SettingOutlined,
  VideoCameraOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '/src/App.css';
import  TabsCard from '/components/TabsCard.jsx';
import MenuPage from '/components/MenuPage.jsx';

const { Header, Content, Footer } = Layout;

function LayoutPage(props) {
  return (
    <div className='wrapper'>
      <Header />
      <Menu 
        key1-title='Work on Open Project'
        key2-title='Add Product'
        key3-title='About'
        logo1='logo1.png'
        beta='beta.png'
        UserOutlined='<UserOutlined />'
		menupage=''
        <Content		
            discord='discord.png'
            discord-comment='Join us on'
			
            Filter='Filter' 
			card1=''
			card2=''
			card3=''
		    Pagination='' />
			<Footer 
			    logo-key1='Enterprise Customers'
				logo-key2='Privacy Policy'
				logo-key3='Terms of Use'
				logo-key4='Contact Us' />    
    </div>
  );
}


ReactDOM.render (
    <Layout className='wrapper'>
        <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="1" className="key1-title">
              <a href="https://openunited.com" target="_blank" rel="noopener noreferrer">
                {props.menu.title}
              </a>
            </Menu.Item>
            <Menu.Item key="2" className="key2-title">
              <a href="https://openunited.com" target="_blank" rel="noopener noreferrer">
                {props.menu.title}
              </a>
            </Menu.Item>
            <Menu.Item key="3" className='key3-title'>
              <a href="https://openunited.com/about" target="_blank" rel="noopener noreferrer">
                {props.menu.title}
              </a>
            </Menu.Item>
          </Menu>
          <div className="logo1" src='logo.png' />
          <div className="beta" src='beta.png' />
          <Avatar icon={<UserOutlined />} />
          <MenuPage 
		    className='menupage' />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <img className="discord-comment">
		  {props.content.text}
          </img>
		  <div className="discord" src='discord.png' />
          <button className='Filter' type='Primary' onClick={this.handleClick} href='https://openunited.com'>
			  {props.content.button}
          </button>
          <TabsCard 
		    className='card1' />
          <TabsCard 
		    className='card2' />
          <TabsCard 
		    className='card3' />
          <div>
            <Pagination className='Pagination' defaultCurrent={1} total={50} />
          </div>
        </Content>
        <Footer className='footer'>
          <div className="logo1" />
            <Menu theme="plain" mode="horizontal" defaultSelectedKeys={['4']}>
              <Menu.Item className='logo-key1' key="1" href=''>{props.footer.user}</Menu.Item>
              <Menu.Item className='logo-key2' key="2" href=''>{props.footer.content}</Menu.Item>
              <Menu.Item className='logo-key3' key="3" href=''>{prop.footer.content}</Menu.Item>
              <Menu.Item className='logo-key4' key="4" href=''>{props.footer.contact}</Menu.Item>
            </Menu>
        </Footer>
    </Layout>,
      mountNode
    );
};

export default LayoutPage;



