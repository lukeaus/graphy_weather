import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data) / data.length);
}

function first(data){
  return data[0];
}

function last(data){
  return data[data.length - 1];
}

function dateToMonthYearStr(dateTS) {
  // convert json date to native JS Date length
  const date = new Date(dateTS * 1000);
  return `${date.getDate()}/${date.getMonth() + 1}`;
}


export default (props) => {
  return (
    <div className="sparkline-graph">
      <Sparklines height={120} width={120} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="sparklines-graph-details">
        <span>{dateToMonthYearStr(first(props.dts))}</span>
        <span>{dateToMonthYearStr(last(props.dts))}</span>
        <br />
      </div>
      <div className="sparklines-graph-details">
        <span>{_.round(first(props.data), 1)}</span>
        <span>{_.round(last(props.data), 1)}</span>
        <br />
      </div>
      <div className="sparklines-graph-details-meta">
        <div>Avg {average(props.data)}</div>
        <div>Min {_.round(_.min(props.data), 1)}</div>
        <div>Max {_.round(_.max(props.data), 1)}</div>
      </div>
    </div>
  );
};
