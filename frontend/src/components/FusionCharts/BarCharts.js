import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: 'Average Grades',
    subcaption: ' By Course',
    yaxisname: 'Average Grade by Percent',
    numvisibleplot: '10',
    labeldisplay: 'auto',
    theme: 'candy',
  },
  categories: [
    {
      category: [
        {
          label: 'Algebra',
        },
        {
          label: 'Precalculus',
        },
        {
          label: 'English',
        },
        {
          label: 'Chemistry',
        },
        {
          label: 'Physics',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'Study Wizards',
      data: [
        {
          value: '86',
        },
        {
          value: '85',
        },
        {
          value: '92',
        },
        {
          value: '87',
        },
        {
          value: '82',
        },
      ],
    },
    {
      seriesname: 'No Tutoring',
      data: [
        {
          value: '71',
        },
        {
          value: '67',
        },
        {
          value: '74',
        },
        {
          value: '66',
        },
        {
          value: '70',
        },
      ],
    },
  ],
};

const BarCharts = () => {
  return (
    // <div className="container">
    <ReactFusioncharts
      type="scrollcolumn2d"
      width="100%"
      height="150%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
    // </div>
  );
};

export default BarCharts;
