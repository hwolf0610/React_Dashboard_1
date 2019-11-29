import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
// import Table from "components/Table/Table.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import axios from "axios";
export default class Gotquality extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: '',
            name: '',
            jobtitle: '',
            clientname: '',
            price: '',
            timeline: '',
            review: '',
            dataList: [],
            dataname: [],
        }
        axios.post('http://localhost:3003/todos/showdistinct')
      .then((res) => {
        if (res.data.length > 0)
          this.setState({ dataname: res.data })
      }).catch((error) => {
        console.log(error)
      });

        axios.post('http://localhost:3003/todos/jobshow')
            .then((res) => {
                if (res.data.length > 0)
                    this.setState({ dataList: res.data })
            }).catch((error) => {
                console.log(error)
            });
 


        if (localStorage.getItem("key") == 1) {
            window.location.href = "/admin/login";
        } else {

        }

    }
    onAddjob = () => {
        var monthv = document.getElementById('month').value;
        var dayv = document.getElementById('day').value;
        var yearv = document.getElementById('year').value;
        var namev = document.getElementById('name').value;
        var jobtitlev = document.getElementById('jobtitle').value;
        var clientnamev = document.getElementById('clientname').value;
        var pricev = document.getElementById('price').value;
        var timelinev = document.getElementById('timeline').value;
        var reviewv = document.getElementById('review').value;
        let body = { month: monthv, day:dayv, year:yearv, name: namev, jobtitle: jobtitlev, clientname: clientnamev, price: pricev, timeline: timelinev, review: reviewv }
        axios.post('http://192.168.1.190:3003/todos/working', body)
            .then((res) => {
                console.log(res.data)
                alert("Successful!!");
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            });
    }

    update = (data) => {
        alert("item update clicked : " + data)
        let id = data
        let body = this.state.dataList
        axios.post('http://192.168.1.190:3003/todos/workupdate' + id, body)
            .then((res) => {
                console.log(res.data)
                alert("Successful!!");
            }).catch((error) => {
                console.log(error)
            });
    }
    delete = (data) => {
        alert("item clicked : " + data)
        let id = data
        axios.delete('http://192.168.1.190:3003/todos/workdelete/' + id)
            .then((res) => {
                console.log(res.data)
                alert("Successful_del!!");
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
            <div>
                <p><a href="/admin/dashboard">Dashboard</a> &nbsp; <a href="/admin/table">admin Panel</a>&nbsp; <a href="/admin/login">Logout</a></p><br/>
           
            
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4  >Add working list</h4>
                            <p  >Complete our member's working list</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="month"
                                        id="month"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="day"
                                        id="day"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="year"
                                        id="year"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                    <select id="name" style={{ fontSize: '35px', width: '100%' }}>
                                        {
                                            this.state.dataname.map((item, index) => {
                                                return (
                                                    <option key={index}>{item.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={10}>
                                    <CustomInput
                                        labelText="Job Title"
                                        id="jobtitle"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Client Name"
                                        id="clientname"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Price"
                                        id="price"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CustomInput
                                        labelText="Timeline"
                                        id="timeline"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>

                            </GridContainer>

                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}>Review</InputLabel>
                                    <CustomInput
                                        labelText="Please input its other information about working."
                                        id="review"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 5
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" onClick={this.onAddjob}>Add Member</Button>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                    <Card plain>
                        <CardHeader plain color="primary">
                            <h4  >
                                Quality of our team
                </h4>
                            <p  >
                                You could add the fact and  update it in here.
                </p>
                        </CardHeader>
                        <CardBody>

                            {/* {
                this.state.dataList.map(item => {
                  return (
                    <div> */}

                            {/* <Table
                        tableHeaderColor="primary"
                        tableHead={["date", "name", "jobtitle", "clientname", "price", "timeline", "review"]}
                        tableData={[[item.date, item.name, item.jobtitle, item.clientname, item.price, item.timeline, item.review],]}
                      /> */}

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
                                            <span>Job Title</span>
                                        </TableCell>
                                        <TableCell padding="checkbox">
                                            <span>Client Name</span>
                                        </TableCell>
                                        <TableCell padding="checkbox">
                                            <span>Price</span>
                                        </TableCell>
                                        <TableCell padding="checkbox">
                                            <span>Timeline</span>
                                        </TableCell>
                                        <TableCell padding="checkbox">
                                            <span>Review</span>
                                        </TableCell>
                                        {/* <TableCell padding="checkbox">
                                            <span>Update</span>
                                        </TableCell> */}
                                        <TableCell padding="checkbox">
                                            <span>Delete</span>
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
                                                        <span>{index+1}</span>
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
                                                        <span>{item.jobtitle}</span>
                                                    </TableCell>
                                                    <TableCell padding="checkbox">
                                                        <span>{item.clientname}</span>
                                                    </TableCell>
                                                    <TableCell padding="checkbox">
                                                        <span>{item.price}</span>
                                                    </TableCell>
                                                    <TableCell padding="checkbox">
                                                        <span>{item.timeline}</span>
                                                    </TableCell>
                                                    <TableCell padding="checkbox">
                                                        <span>{item.review}</span>
                                                    </TableCell>
                                                    {/* <TableCell padding="checkbox">
                                                        <Button
                                                             onClick = {this.update.bind(this, item._id)}
                                                        >Update                                                       
                                                        </Button>
                                                    </TableCell> */}
                                                    <TableCell padding="checkbox">
                                                        <Button
                                                            onClick={this.delete.bind(this, item._id)}
                                                        >Delete
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>

                                            )
                                        })
                                    }



                                </TableBody>
                            </Table>
                            {/* </div>

                  )
                })
              } */}
                            {/* <Table
                                tableHeaderColor="primary"
                                tableHead={["No", "Name", "date", "money", "other"]}
                                tableData={[
                                    ["1", "Name1", "18/11/2019", "$36,738", "freelancer"],
                                    ["2", "Name2", "18/11/2019", "$23,789", "freelancer"],
                                    ["3", "Name3", "18/11/2019", "$56,142", "freelancer"],
                                    ["4", "Name4", "18/11/2019", "$56,142", "freelancer"],
                                    ["5", "Name5", "18/11/2019", "$56,142", "freelancer"],
                                    ["6", "Name6", "18/11/2019", "$56,142", "freelancer"],
                                    ["7", "Name7", "18/11/2019", "$56,142", "freelancer"],
                                    ["8", "Name8", "18/11/2019", "$56,142", "freelancer"],
                                    ["9", "Name9", "18/11/2019", "$56,142", "freelancer"],
                                    ["10", "Name10", "18/11/2019", "$56,142", "freelancer"],
                                    ["11", "Name11", "18/11/2019", "$56,142", "freelancer"],
                                    ["12", "Name12", "18/11/2019", "$56,142", "freelancer"],
                                    ["13", "Name13", "18/11/2019", "$56,142", "freelancer"],
                                    ["14", "Name14", "18/11/2019", "$56,142", "freelancer"],
                                    ["15", "Name15", "18/11/2019", "$56,142", "freelancer"]

                                ]}
                            /> */}
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
            </div>
        );
    }

}
