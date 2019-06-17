import React, { Component } from 'react'
import styles from './Die.module.css';

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`${styles.Die} fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

export default Die
