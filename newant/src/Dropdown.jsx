import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function DropdownPage(props) {
  <div classname='menu'>
    <Menu
      UserOutLined='UserOutline'
      key0='Your Profile'
      CloseCircleOutlined='CloseCircleOutlined'
      key1='Sign Out' />
      <Dropdown
      ant-dropdown-link='Username'
      DownOutlined=''	  />
	  
  </div> 
}


const menu = (
  <Menu className='menu'>
    <UserOutlined 
      className='UserOutLined'
    />
    <Menu.Item key="0" className='key0'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        {props.menu.user}
      </a>
    </Menu.Item>
    <CloseCircleOutlined 
        className='CloseCircleOutlined'
      />
    <Menu.Item key="1" className='key1'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        {props.menu.title}
      </a>
    </Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Dropdown className='dropdown' overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {props.ant-dropdown-link.name} <DownOutlined className='DownOutlined' />
      </a>
  </Dropdown>,
  mountNode,
);

export default DropdownPage;

