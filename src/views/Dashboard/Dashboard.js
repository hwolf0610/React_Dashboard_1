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
import { border } from "@material-ui/system";

const useStyles = makeStyles(styles);

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    // var date = new Date().getDate(); //Current Date
    // var month = new Date().getMonth() + 1; //Current Month
    // var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    var today = new Date(),
    date = today.getMonth() + 1;
    var today1 = new Date(),
    year=today1.getFullYear();


    this.state = {
      dataList: [],
      dataone: [],
      currentmonth: date,
      currentyear: year,
      dataBar: {
        labels: [],
        datasets: [
          {
            label: "% of Votes",
            data: [],
            backgroundColor: [
            ],
            borderWidth: 2,
            borderColor: [
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
    if (localStorage.getItem("key") == 0) {
      window.location.href = "/admin/login";
  } else {

  }
  }



  componentDidMount = () => {

    axios.post('http://localhost:3003/todos/getchart')
      .then((res) => {

        let { dataone, dataBar, dataList, currentmonth, currentyear } = this.state

        if (res.data.length > 0){
          dataList = res.data
          this.setState({dataList})
          this.update_data_bar( )
        }
        console.log("array list : ", dataList)
      }).catch((error) => {
        console.log(error)
      });
  }
  updateYearState = (e) => { this.setState({ currentyear: e.target.value }) }
  updateMonthState = (e) => { this.setState({ currentmonth: e.target.value })}
  update_data_bar = ( )=>{

    let {currentmonth, currentyear, dataList, dataBar}=  this.state

    
    let gainObject = {}
    let barData = []
    let backgroundColor = []
    let borderColor = []
    let labels = []

    // currentmonth = month
    // currentyear = year
    // console.log("selected month : ", month, year)
    dataList.map(item => {
      if (item.month == currentmonth && item.year==currentyear) {
        if (gainObject[item.name]) {
          gainObject[item.name] += item.price * 1.0
        } else {
          gainObject[item.name] = item.price * 1.0
          backgroundColor.push("rgba(255, 134,159,0.4)")
          borderColor.push("rgba(255, 134, 159, 1)")
        }
      } else {
      }
    })

    console.log("gainObject ;", gainObject)
    console.log("getObject values: ", gainObject["admin"]);

    let keys = Object.keys(gainObject);
    for (var index = 0; index < keys.length; index++) {
      labels.push(keys[index])
      barData.push(gainObject[keys[index]])
    }
    dataBar.labels = labels
    dataBar.datasets[0].data = barData
    dataBar.datasets[0].backgroundColor = backgroundColor
    dataBar.datasets[0].borderColor = borderColor
    this.setState({ dataBar, currentmonth })  
  
  }

  


//   setmonth = () => {
//     var year = document.getElementById('selectyear').value;
//     var month = document.getElementById('selectmonth').value;
//     console.log("month value : ",  month)
//     // this.setState({ currentmonth: month })
//     this.update_data_bar(month,year)
//     // window.location.reload();
//   }

  render() {
    return (
      <div>
         <p><a href="/admin/table">admin Panel</a> &nbsp; <a href="/admin/gotquality">Plan Quality</a>&nbsp; <a href="/admin/login">Logout</a></p><br/>
        <GridContainer>
                         
        Year:<select value={this.state.currentyear} onChange={this.updateYearState} id="selectyear">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>
          {/* <input type="text"  value= {this.state.currentmonth} />          */}
          Month:<select value={this.state.currentmonth} onChange={this.updateMonthState} id="selectmonth">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option> 
          </select>
          <button onClick={this.update_data_bar} className="btn btn-success">Change</button>
        </GridContainer>
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
                <span>Month</span>
              </TableCell>
              <TableCell padding="checkbox">
                <span>Day</span>
              </TableCell>
              <TableCell padding="checkbox">
                <span>Year</span>
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
                      <span>{index + 1}</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>{item.month}</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>{item.day}</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>{item.year}</span>
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
