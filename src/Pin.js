import React, {Component} from 'react';


export default class Pin extends Component {
    render() {
        const {size=45, onClick} = this.props;
        return (
            <div>
                <img 
                    src={require("./images/cuffs.png")}
                    height={size}
                    width={size} 
                    onClick={onClick}
                    alt={'X'}/>
            </div>
        );
    }
};

