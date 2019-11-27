import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Button from "components/CustomButtons/Button.js";

import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from "axios";
// import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataList: [],
      datatwo: [12, 19, 3, 5, 6, 5, 3, 3, 3, 3, 3, 3, 3, 3, 9],
      dataone: [],
      dataBar: {
        labels: ["Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red"],
        datasets: [
          {
            label: "% of Votes",
            data: [12, 19, 3, 5, 6, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            backgroundColor: [
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)",
              "rgba(255, 134,159,0.4)"
            ],
            borderWidth: 2,
            borderColor: [
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)",
              "rgba(255, 134, 159, 1)"
            ]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }

      }



    }
    var key = 2
    //  key = _01
    //  key = _2019

    axios.post('http://localhost:3003/todos/getchart')
      .then((res) => {
        if (res.data.length > 0)
          this.setState({ dataList: res.data })
      }).catch((error) => {
        console.log(error)
      });


    axios.post('http://localhost:3003/todos/getchart' + key)
      .then((res) => {
        let { dataone, dataBar } = this.state
        if (res.data.length > 0) {
          dataone = res.data
          dataBar.datasets.data = dataone.price
          this.setState({ dataone, dataBar })
        }

      }).catch((error) => {
        console.log(error)
      });

    // if (localStorage.getItem("key") == 1) {
    //   window.location.href = "/admin/login";
    // } else {

    // }
    this.state.dataBar.datasets.data = this.state.datatwo;
  }
  render() {
    return (
      <div>

        {/* <GridContainer>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </GridContainer> */}
        <GridContainer >
          <MDBContainer>
            <h3 className="mt-5">Plan & Current Quality</h3>
            <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
          </MDBContainer>
        </GridContainer>
        <Table
                                // className={classes.table}
                                aria-labelledby="tableTitle"
                                size={'medium'}
                                aria-label="enhanced table"
                            >

                                <TableHead>
                                    <TableRow>
                                    <TableCell padding="checkbox">
                                            <span>No</span>
                                        </TableCell>
                                        <TableCell padding="checkbox">
                                            <span>Date</span>
                                        </TableCell>
                                        <TableCell padding="checkbox">
                                            <span>Name</span>
                                        </TableCell>
                                        <TableCell padding="checkbox">
                                            <span>Price</span>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    {

                                        this.state.dataList.map((item, index) => {
                                            return (

                                                <TableRow
                                                    hover
                                                    tabIndex={-1}
                                                    key={index}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <span>{index}</span>
                                                    </TableCell>
                                                    <TableCell padding="checkbox">
                                                        <span>{item.date}</span>
                                                    </TableCell>
                                                    <TableCell padding="checkbox">
                                                        <span>{item.name}</span>
                                                    </TableCell>
                                                   <TableCell padding="checkbox">
                                                        <span>{item.price}</span>
                                                    </TableCell>
                                                   
                                                </TableRow>

                                            )
                                        })
                                    }



                                </TableBody>
                            </Table>
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* {
this.state.datatwo.map((item, index) => {
    return (
        
         
            <div    style={{height:item*100,width:"25px",color:"green"}}>
                <span>{item*100}</span>
            </div>        

    )
})
} */}
        {/* <div id="chartdiv">
          <iframe width="100%" src="./chart.html" />
        </div> */}





      </div>
            );
          }

}
