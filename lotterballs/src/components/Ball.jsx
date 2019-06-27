import React, { Component } from 'react'

 class Ball extends Component {
  
     
    render() {
        const {num} = this.props;
        return (
            <div className='Ball'>
                {num}
            </div>
        )
    }
}

export default Ball;
