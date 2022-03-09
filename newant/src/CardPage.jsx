import React from 'react';
import { Card } from 'antd';

function CardPage(props) {
  <div className='site-card-border-less-wrapper'>
    <Card title="Card title" bordered={false} style={{ width: 300 }}
      Avatar="Ellipse2.png" 
      Title='OpenUnited Product Factory '
      url='https://openunited.com'
      Summary='Summary'
      initiatives='initiatives'
      Task='Task'
      ProductTree='Product Tree'
      IdeaBugs='Idea&Bugs'
      People='People' />,
  </div>
}

ReactDOM.render(
  <div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <Avatar src="Ellipse2.png" />
      <Card.Item className='Title'>
        {props.card.title}
      </Card.Item>
      <Card.Item className='url'>
        {props.card.url}
      </Card.Item>
      <Card.Item className='Summary' id='content' type='button' href=''>
        {props.card.summary}
      </Card.Item>
      <Card.Divider />
      <Card.Item className='initiatives' id='content' type='button' href=''>
        {props.card.initiatives}
      </Card.Item>
      <Card.Divider />
      <Card.Item className='Task' id='content' type='button' href=''>
        {props.card.task}
      </Card.Item>
      <Card.Divider />
      <Card.Item className='ProductTree' id='content' type='button' href=''>
        {props.card.producttree}
      </Card.Item>
      <Card.Divider />
      <Card.Item className='IdeaBugs' id='content' type='button' href=''>
        {props.card.ideabugs}
      </Card.Item>
      <Card.Divider />
      <Card.Item className='People' id='content' type='button' href=''>
        {props.card.people}
      </Card.Item>
      <Card.Divider />
    </Card>
  </div>,
  mountNode,

);

export default CardPage;
