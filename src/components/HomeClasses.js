import React, {Component} from 'react';
import ContainerPropsClass from './ContainerPropsClass';
import App from '../App';
import CondicionarRenderClasses from '../ComponentsViews/CondiconarRenderClasses';
class HomeClasses extends Component {
    render(){
        return(
            <div>
                {/** 
                <div style={{float: "left"}}>
                    <ContainerPropsClass />
                </div>
                <div style={{float: "right", padding: '100px', paddingRight: '500px', paddingTop: '30px'}}>
                    <ComponentStateClasses />
                </div>
                */}
                <div style={{width: "50%"}}>
                    <ContainerPropsClass />
                    <CondicionarRenderClasses />
                </div>
                <div style={{width: "50%"}}>
                    <App />
                </div>
            </div>
        )
    }
}
export default HomeClasses;