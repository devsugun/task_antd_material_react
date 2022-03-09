import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '/src/App.css'; 
import { useState } from 'react';


const { SubMenu } = Menu;

function MenuPage(props) {
   return (
     <Menu className='Dropdown'
	    UserOutlined=''
        key0='Your Profile'
        key1='Sign Out'
        Profile='username' />
		<Dropdown
		ant-dropdown-link='Username'
		icon='DownOutlined' />
		
		
      </Menu>
       
   );
}

  
  const menu = (
    <Menu className='Dropdown'>
	  <UserOutlined 
	    className='UserOutlined' />
      <Menu.Item key="0" className='key0'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            {props.title}
          </a>
      </Menu.Item>
      <Menu.Item key="1" className='key1'>
        <LogoutOutlined /> 
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            {props.action}
          </a>
      </Menu.Item>
    </Menu>
  );
  
ReactDOM.render(
  <Dropdown overlay={menu} className='Dropdown-menu'>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      {props.username} <DownOutlined className='icon' />
    </a>
  </Dropdown>,
  mountNode,
);


export default MenuPage;
