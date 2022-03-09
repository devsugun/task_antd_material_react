import React from 'react';
import { Descriptions } from 'antd';

function Content(props) {
    <div className='User Info'>
        <Description
            Comment='These cypress tests are from ~6 months ago and were never merged into master, and also never setup in our CI/CD. They may also reference our old test environment on Heroku (no longer there). The cypress tests need to be checked and updated.'
            Task='OpenUnited Product Factory/Tasks/Check and update cypress tests, ensure they provide a solid foundation (later: get running in CI/CD pipeline)'
            Work='Check and update cypress tests, ensure they provide a solid foundation (later: get running in CI/CD pipeline)'
            Url='Please see: https://github.com/OpenUnited/product-factory-frontend/pull/72'
            Text='As a next step after this task is complete, we will need to get these tests running in our CI/CD pipeline.' 
            />,
    </div>
}


ReactDOM.render(
  <Descriptions title="User Info" className='UserInfo'>
    <Descriptions.Item label="Comment" className='Comment'>
        {props.Description.comment}
    </Descriptions.Item>
    <Descriptions.Item label="Task" className='Task'>
       {props.Description.task}
    </Descriptions.Item>
    <Descriptions.Item label="Work" className='Work'>
        {props.Description.work}
    </Descriptions.Item>
    <Descriptions.Item className='button'>
        <button  type='button' className='Claimthetask' href=''>{props.discription.claimthetask}</button>
    </Descriptions.Item>    
    <Descriptions.Item label="Url" className='Url'>
        {props.Description.url}
    </Descriptions.Item>
    <Descriptions.Item label="Text" className='Text'>
       {props.Description.text}
    </Descriptions.Item>
  </Descriptions>,
  mountNode,
);

export default Content;

