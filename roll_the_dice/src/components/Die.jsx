import React,{Fragment} from 'react'

const Die = (props) => {
    return (
    <Fragment>
        
         
         <i style={{ color: "darkblue",marginRight:"20px" }} className={`fas fa-dice-${props.die} fa-10x diceanimation`} />
       
    </Fragment>
    )
}

export default Die
