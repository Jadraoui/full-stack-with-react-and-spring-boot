import React from 'react';
import {closeButton, Tab, Toast} from 'react-bootstrap';

class myToast extends React.Component {
    render(){
        const toastCss = {
            position:'fixed',
            top:'20px',
            right:'20px',
            zIndex:'1',
            boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
        };
        return (
            <div style={this.props.children.show ? toastCss :null}>
                <Toast className={"border border-success bg-success text-white"} show={this.props.children.show}>
                    <Toast.Header className={"bg-success text-white"} closeButton={false}>
                        <strong className="mr-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>
                        {this.props.children.message}
                    </Toast.Body>
                </Toast>
            </div>
        );
    }
}
