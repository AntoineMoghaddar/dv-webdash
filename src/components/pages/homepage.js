import React, {Component} from 'react';
import "react-vis/dist/style.css";
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries
} from 'react-vis' ;
import my_data from './../data/dataone'

const patients = (data) => {
    return data.map((data) => ({
        y: data.Patients_Per_10000,
        x: data.Age_group,
        label: data.Country
    }));
};

class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            data: patients(my_data),
        };
    }

    render() {
        return (
            <XYPlot
                xType="ordinal"
                width={1000}
                height={500}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis title="Country" />
                <YAxis title="Average age" />
                <MarkSeries
                    className="mark-series-example"
                    strokeWidth={2}
                    opacity="0.8"
                    sizeRange={[5, 15]}
                    data={patients(my_data)}
                    style={{stroke: 'violet', strokeWidth: 1}}
                />
            </XYPlot>
        );
    }
}

export default Homepage;


