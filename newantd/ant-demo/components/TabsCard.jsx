import { React } from 'react';
import { useState } from 'react';
import { Card, Row, Col } from 'antd';

const [status, setStatus] = useState("Available");
const [priority, setPriority] = useState('Medium');
const [skills, setSkills] = useState("Frontend-Development(django, python, flask)");


function TabsCard(props) {
  return (
      <div className='Task-title'>
	    <Row />
		    <Col />
			    <Card-title-1
                    discription='Check and update cypress test, ensure they provide a solid foundation, (later:get running in CI/CD pipeline)'
                    comment='we have cypress Test sitting in PR...'
                    ref='input'
                    Product-title='Product'
                    Video-title='OpenUnited Product Factory' 
                    Priority-title='Priority: 'Medium''
                    Status-title='Status: 'Available''
                    Skill='Required skills:  'Frontend-Development(django, python, flask)''
                    Product-title='Product' />
				<Product-title 
				    content2 
				/>,
                    				
      </div>
  );
}

const tabList = [
  {
    key: 'task',
    tab: 'tab1',
  },
  {
    key: 'product',
    tab: 'tab2',
  },
];

  const contentList = {
    Tasks: <div className="Task-title">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card-title-1" bordered={false}>
                <Car.Item className='discription'>
                  {props.card.discription}
                </Card.Item>
                <Card.Item className='Task-Comment'>
                  {props.card.task-comment}
                </Card.Item>
                <Card.Item className='Product-title'>
                  {props.card.product-title}
                </Card.Item>
                <Card.Item className='Product-Video-title'>
                  <VideoCameraOutlined />
                    {props.card.video-title}
                </Card.Item> 
                <Card.Item className='Priority'>
                   {this.state.priority}:{this.setState.priority}
                </Card.Item>  
                <Card.Item className='Status'>
                  {this.state.status}:{this.setState.status}
                </Card.Item>  
                <Card.Item className='Skills'>
                  {this.state.skills}:{this.setState.skills} 
                </div>
              </Card>
            </Col>
          </Row>
        </div>,
  Product:<div className='Product-title'> 
            content2
          </div>,  
};





const TabsCard = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
 

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };
  const onTab2Change = key => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="Task"
        extra={<a href="#"></a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#"></a>}
        onTabChange={key => {
          onTab2Change(key);
        }}
      >
          {contentListNoTitle[activeTabKey2]}
        </Card>
      </>
    );
};

export default TabsCard;