import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from "react";
import { useEffect } from "react";
import { HeatMapComponent, Legend, Tooltip, Inject, Adaptor } from '@syncfusion/ej2-react-heatmap';

/**
 * Heatmap Default sample
 */
const Default = () => {
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    };
    const getDatasource = () => {
        let temp = {};
        temp.dataSource = [];
        temp.xAis = [];
        temp.yAis = [];
        for (let x = 0; x < 12; x++) {
            temp.dataSource.push([]);
            temp.xAis.push(x);
            temp.yAis.push(x);
            for (let y = 0; y < 6; y++) {
                temp.dataSource[x].push(getRndInteger(0, 100));
            }
        }
        return temp;
    };
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return (<div className='control-pane'>

            <div className='control-section'>
                <HeatMapComponent id='heatmap-container' titleSettings={{ text: 'Sales Revenue per Employee (in 1000 US$)', textStyle: { size: '15px', fontWeight: '500', fontStyle: 'Normal', fontFamily: 'Segoe UI' } }} xAxis={{ labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'] }} yAxis={{ labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] }} load={load} dataSource={getDatasource().dataSource}>
                    <Inject services={[Legend, Tooltip, Adaptor]}/>
                </HeatMapComponent>
            </div>
        </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);