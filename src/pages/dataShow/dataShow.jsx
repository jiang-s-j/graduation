import React from 'react'
import { Card } from 'antd'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
    TitleComponent,
    GridComponent,
    DataZoomComponent
} from 'echarts/components';
import {
    BarChart
} from 'echarts/charts';
import {
    CanvasRenderer
} from 'echarts/renderers';

import './dataShow.scss'

const DataShow = (props) => {

  const getOption = () => (
    {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }]
    }
  )
 // 柱状图
  var dataAxis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  var data = [220, 182, 191,210,254,120,130];

  const getBarOption = () => (
    {
      xAxis: {
          data: dataAxis,
          axisLabel: {
              inside: true,
              textStyle: {
                  color: '#fff'
              }
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          z: 10
      },
      yAxis: {
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              textStyle: {
                  color: '#999'
              }
          }
      },
      dataZoom: [
          {
              type: 'inside'
          }
      ],
      series: [
          {
              type: 'bar',
              showBackground: true,
              itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 0, color: '#83bff6'},
                          {offset: 0.5, color: '#188df0'},
                          {offset: 1, color: '#188df0'}
                      ]
                  )
              },
              emphasis: {
                  itemStyle: {
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 0, 1,
                          [
                              {offset: 0, color: '#2378f7'},
                              {offset: 0.7, color: '#2378f7'},
                              {offset: 1, color: '#83bff6'}
                          ]
                      )
                  }
              },
              data: data
          }
      ]
  }
  )

  // 饼图
  const getPieOption = () => (
    {
      tooltip: {
          trigger: 'item'
      },
      legend: {
          orient: 'vertical',
          left: 'left',
      },
      series: [
          {
              name: '性别',
              type: 'pie',
              radius: '50%',
              data: [
                  {value: 1048, name: '男性'},
                  {value: 735, name: '女性'},
                  {value: 580, name: '不详'},
              ],
              emphasis: {
                  itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  }
  )

  // 圆形
  const getCircleOption = () => (
    {
      tooltip: {
          trigger: 'item'
      },
      legend: {
          top: '5%',
          left: 'center'
      },
      series: [
          {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
              },
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '40',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 1048, name: '18-30'},
                  {value: 735, name: '12-15'},
                  {value: 580, name: '30-50'},
                  {value: 484, name: '7-12'},
                  {value: 300, name: '50-100'}
              ]
          }
      ]
  }
  )
  return (
    <>
      <div className='dataShow'>
        <Card
          style={{ marginTop: 16, width: '40vw' }}
          type='inner'
          title="粉丝增长量"
        >
          <ReactECharts
            option={getOption()}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
          />
        </Card>
        <Card
        style={{ marginTop: 16, width: '40vw' }}
        type='inner'
        title="视频播放量"
        >
        <ReactECharts
          option={getBarOption()}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </Card>
      <Card
        style={{ marginTop: 16, width: '40vw' }}
        type='inner'
        title="粉丝性别"
        >
        <ReactECharts
          option={getPieOption()}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </Card>
      <Card
        style={{ marginTop: 16, width: '40vw' }}
        type='inner'
        title="年龄分布"
        >
        <ReactECharts
          option={getCircleOption()}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </Card>

      </div>
      
      
    </>
  )
}

export default DataShow