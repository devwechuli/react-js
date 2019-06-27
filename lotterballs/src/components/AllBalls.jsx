import React,{Component,Fragment} from 'react'
import Ball from './Ball';



class AllBalls extends Component{
static defaultProps
    
    render(){
    
        return(
            <Fragment>
              <Ball num={2}/>
              <Ball num={3}/>
            </Fragment>
        )
    }
}

export default AllBalls;