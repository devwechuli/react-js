import React, { Component } from 'react'
import styles from './Die.module.css';

class Die extends Component {
    render() {
        return (
          
                <i className={`${styles.Die} fas fa-dice-${this.props.face} ${this.props.rolling ? styles.rolling : ""}`}></i>
     
        )
    }
}

export default Die
