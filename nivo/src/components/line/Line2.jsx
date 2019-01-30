import React from "react";
import { ResponsiveLine } from "@nivo/line";
import linedata from "./linedata.json";

const Line2 = () => {
  return (
    <React.Fragment>
      <div style={{height:"500px",width:"1000px"}}>
      <ResponsiveLine
          data={[{id: 'Sensor1',data: [
            {x:['2019-01-11T12:19:22.377Z'] ,y: [56]},
            {x: '2019-01-11T12:20:24.826Z',y: 45},
            {x: '2019-01-11T12:22:30.279Z',y: 56},
            {x: '2019-01-11T12:23:32.428Z',y: 78},
            {x: '2019-01-11T12:25:37.185Z',y: 340},
            {x: '2019-01-11T12:26:39.728Z',y: 20}
          
          ]},{id: 'Sensor2',data: [
            {x: '2019-01-11T12:19:22.377Z',y: 89},
            {x: '2019-01-11T12:20:24.826Z',y: 45},
            {x: '2019-01-11T12:22:30.279Z',y: 55},
            {x: '2019-01-11T12:23:32.428Z',y: 70},
            {x: '2019-01-11T12:25:37.185Z',y: 34},
            {x: '2019-01-11T12:26:39.728Z',y: 22}
          
          ]}]
       }
        margin=
        {{
          top: 50,
          right: 110,
          bottom: 50,
          left: 60
        }}
        xScale={{type: 'time',format: '%Y-%m-%dT%H:%M:%S.%fZ',precision: 'minute'}}
        // axisBottom={{format: '%I:%M:%S %p'}}
        axisBottom={{format: '%I:%M %p'}}
        yScale=
        {{
          type: "linear",
          stacked: false,
          min: "auto",
          max: "auto"
        }}
        curve="monotoneX"
        axisTop={null} axisRight={null} 
        
        // axisBottom=
        // {{
        //   orient: "bottom",
        //   tickSize: 5,
        //   tickPadding: 5,
        //   tickRotation: 0,
        //   legend: "transportation",
        //   legendOffset: 36,
        //   legendPosition: "middle"
        // }}
        axisLeft=
        {{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle"
        }}
        dotSize={10}
        dotColor="inherit:darker(0.3)" dotBorderWidth={2}
        dotBorderColor="#ffffff" enableDotLabel={true}
        dotLabel="y" dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends=
        {[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      >
      
      </ResponsiveLine>
      </div>
     
      <div>
        yes
      </div>
    </React.Fragment>
  );
};

export default Line2;
