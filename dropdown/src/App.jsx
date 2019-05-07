import React, { useState } from "react";
import Choices from "./components/Choices";
const data = [
  {
    name: "salad",
    choices: [
      {
        name: "Santa Fe"
      },
      {
        name: "Greek"
      },
      {
        name: "Asian"
      }
    ],
    related: [
      {
        name: "Dressing",
        choices: [
          {
            name: "italian"
          },
          {
            name: "Blue Cheese"
          },
          {
            name: "Ranch"
          }
        ]
      },
      {
        name: "Bread",
        choices: [
          {
            name: "italian"
          },
          {
            name: "Flat"
          },
          {
            name: "Sourdough"
          }
        ]
      }
    ]
  },
  {
    name: "Entree",
    choices: [
      {
        name: "Steak"
      },
      {
        name: "Salmon"
      },
      {
        name: "Rice"
      }
    ],
    related: []
  },
  {
    name: "Soup",
    choices: [
      {
        name: "Minestrone"
      },
      {
        name: "Hot and sour"
      },
      {
        name: "Miso"
      }
    ],
    related: [{ name: "bread", choices: [{ name: "breadsticks" }] }]
  }
];

function App() {
  return (
    <React.Fragment>
      <div className="container m-t-md">

     <h2 className="title is-underline">Restaurant Menu</h2>

{data.map((item,index)=>{
  return (
 <Choices data={item}/>
  )
})}
    
      </div>
    </React.Fragment>
  );
}

export default App;
