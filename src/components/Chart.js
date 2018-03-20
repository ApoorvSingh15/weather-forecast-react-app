import _ from 'lodash'; 
import React from 'react';
import { Sparklines , SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {

    const average = (data) => {
       let sum = 0;
        let average = 0;
        data.map( (i) => {sum+=i; 
        })
        average = sum / props.data.length;
        return _.round(average);
    }
        return(
            <div>
                <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color}  />
                    <SparklinesReferenceLine type="avg" />
                </Sparklines>
                <div><p style={{textAlign : 'center'}}>{average(props.data)}&nbsp;{props.units}</p></div>
            </div>    
        );
    }