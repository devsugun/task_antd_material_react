import { Layout, Menu, Breadcrumb } from 'antd';
import Dropdown from './Dropdown';
import Card from './Card';

const { Header, Content, Footer } = Layout;
const [requiredskills, setRequiredskill] = useState("");
const [claimed_by, setClaimed_by] = useState("Dev-segun");
const [created_by, setCreated_by] = useState("Dev-segun");
const [status, setStatus] = useState('');
const [category, setCategory] = useState("Frontend Development");
const [expertise, setExpertise] = useState("react", "typescript");
const [priority, setPriority] = useState('High');
const [reviewer, setReviewer] = useState('');
const [related_capability, setRelated_capability] = useState('Task');
const [initiative, setInitiatives] = useState('Improve the activation of OpenUnited');

function RequiredSkills(props) {
  <div className='wrapper'>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} />
      <Menu theme="white" mode="horizontal" defaultSelectedKeys={['2']} 
         key1='Work on Open Products' 
         key2='Add Products' 
         key3='About' 
         img='logo1' 
         beta='beta.png'
         Dropdown=''
         join us on='Join us on'
         discord='discord.png' />
        <Card />
        <Content
         RequiredSkills=''Frontend-Development(django, python, flask)',
                             'Backend-Development(react, javascript, typescript, graphql)',
                             'Full-stack-Developer(django)'' 
         claimed_by='Claimed By: "" ' 
         created_by='Created By: "" ' 
         status='Status: "" ' 
         Category='Catgory: "Frontend Development" ' 
         expertise='Expertise: "react", "typescript" '
         Priority='Priority: "High" '
         reviewer='Reviewer: "" '
         related_capability='Related Capability: "Task" '
         initiative='Initiative: "Improve the activation of OpenUnited"' />
         <Footer
         logo1='logo1.png'
         key1='Privacy Policy'
         key2='Terms of Use'
         key3='Contact Us' />

  </div>
}

class skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RequiredSkills: [{
        skill: "Frontend-Development(django, python, flask)",
      },
      {
        skill: 'Backend-Development(react, javascript, typescript, graphql)',
      },
      {
        skill: 'Full_stack_Developer(django)'
      }]
    }
  }

 


  Reactrender() {
    const {RequiredSkills} = this.state;
    return (
    <Layout className='wrapper'>
      <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu className='menu' theme="white" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" href='' className='key1'>{props.menu.task}</Menu.Item>
          <Menu.Item key="2" href='' className='key2'>{props.menu.product}</Menu.Item>
          <Menu.Item key="3" href='' className='key3'>{props.menu.about}</Menu.Item>
          <Menu.Item className="logo1" />
          <Menu.Item className="beta" />
          <Dropdown 
            className='Dropdown'
          />
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Content.Item className='join us on'>
		{props.content.title}
        </Content.Item>
        <Content.Item className="discord" />
        <Content.Item className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <Card />
        </Content.Item>
        {
          Required_Skills.map((Required_Skills)=>{
            return(
              <Content.Item className='RequiredSkills'>
                Required skills: {( Frontend-Development(django, python, flask),
                            Backend-Development(react, javascript, typescript, graphql),
                            Full-stack-Developer(django))}
              </Content.Item>
            )
          })
        }
        <Content.Item className='claimed_By'>
          {this.state.claimed_by}: {this.setState.claimed_by}
        </Content.Item>
        <Content.Item className='created_by'>
          {this.state.created_by}: {this.setState.created_by}
        </Content.Item>
        <Content.Item className='status'>
          {this.state.status}:{this.setState.status}
        </Content.Item>
        <Content.Item className='Category'>
          {this.state.category}:{this.setState.category}
        </Content.Item>
        <Content.Item className='expertise'>
          {this.state.expertise}:{this.setState.expertise}
        </Content.Item>
        <Content.Item className='Priority'>
          {this.state.priority}: {this.setState.priority}
        </Content.Item>
        <Content.Item className='reviewer'>
          {props.content.name}
        </Content.Item>
        <Content.Item className='related_capability'>
          {props.content.related_capability}
        </Content.Item>
        <Content.Item className='Initiative'>
          {props.content.initiatives}
        </Content.Item>

      </Content>
      <Footer className='footer'>
        <Footer.Item className="logo1" />
          <Footer.Item  theme="white" mode="horizontal" defaultSelectedKeys={['2']} />
            <Footer.Item key="1" href='' className='key1'>{props.footer.ke1}</Footer.Item>
            <Footer.Item key="2" href='' className='key2'>{props.footer.key2}</Footer.Item>
            <Footer.Item key="3" href='' className='key3'>{props.footer.key3}</Footer.Item>
      </Footer>
    </Layout>,
      mountNode
    );
  }
}



export default RequiredSkills;

