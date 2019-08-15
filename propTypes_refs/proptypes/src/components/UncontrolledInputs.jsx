import React, { Component } from 'react'

class UncontrolledInputs extends Component {
    state = {

    }
    render() {
        return (
     <section>
         <form>
             <input type="text" name="name"/>
             <input type="email" name="email" id=""/>
             <input type="submit" value="Submit"/>
         </form>
     </section>
        )
    }
}

export default UncontrolledInputs
