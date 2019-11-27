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

export default class TableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      birthday: '',
      address: '',
      phonenumber: '',
      aboutme: '',
      flag: '',
      dataList: [],
    }
    axios.post('http://localhost:3003/todos/show')
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
  changename = (e) => { this.setState({ name: e.target.value }); }
  changeemail = (e) => { this.setState({ email: e.target.value }); }
  changepassword = (e) => { this.setState({ password: e.target.value }); }
  changeconfirm = (e) => { this.setState({ confirm: e.target.value }); }
  changebirthday = (e) => { this.setState({ birthday: e.target.value }); }
  changeaddress = (e) => { this.setState({ address: e.target.value }); }
  changephonenumber = (e) => { this.setState({ phonenumber: e.target.value }); }
  // changeaboutme = (e) => { this.setState({ aboutme: e.target.value }); }
  onSignup = () => {
    var namev = document.getElementById('username').value;
    var emailv = document.getElementById('email').value;
    var passwordv = document.getElementById('password').value;
    var confirmv = document.getElementById('confirm').value;
    var birthdayv = document.getElementById('birthday').value;
    var addressv = document.getElementById('address').value;
    var phonenumberv = document.getElementById('phonenumber').value;
    if (passwordv === confirmv) {
      let body = { name: namev, birthday: birthdayv, address: addressv, phonenumber: phonenumberv, email: emailv, password: passwordv, flag: "2" }
      axios.post('http://192.168.1.190:3003/todos/add', body)
        .then((res) => {
          console.log(res.data)
          alert("Successful!!");
        }).catch((error) => {
          console.log(error)
        });
    } else {
      alert("not same password with confirm!");
    }

    this.setState({
      name: '',
      email: '',
      password: '',
      confirm: '',
      birthday: '',
      address: '',
      phonenumber: '',
      aboutme: '',
      flag: '',
    })
  }
  update = (data) => {
    alert("item update clicked : " + data)
    let id = data
    let body = this.state.dataList
    axios.post('http://192.168.1.190:3003/todos/userupdate' + id, body)
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
    axios.delete('http://192.168.1.190:3003/todos/userdelete/' + id)
      .then((res) => {
        console.log(res.data)
        alert("Successful_del!!");
      }).catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <GridContainer>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 >Add Member</h4>
              <p  >Complete our member list</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    className="form-control"
                    labelText="Username"
                    id="username"
                    value={this.state.name}
                    onChange={this.changename}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Email address"
                    id="email"
                    value={this.state.email}
                    onChange={this.changeemail}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    value={this.state.password}
                    onChange={this.changepassword}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Password Confirm"
                    id="confirm"
                    value={this.state.confirm}
                    onChange={this.changeconfirm}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Birthday"
                    id="birthday"
                    value={this.state.birthday}
                    onChange={this.changebirthday}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Address"
                    id="address"
                    value={this.state.address}
                    onChange={this.changeaddress}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Phone number 1"
                    id="phonenumber"
                    value={this.state.phonenumber}
                    onChange={this.changephonenumber}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={this.onSignup}>Add Member</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4  >Set & Update Member</h4>
              <p  >
                You could add a member and update itself member  in here.
                </p>
            </CardHeader>
            <CardBody>
              {/* <Table
                    tableHeaderColor="primary"
                    tableHead={["Name", "Birthday", "Address", "phonenumber", "email", "password"]}
                    tableData={[this.state.dataList,]}
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
                      <span>Name</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>Birthday</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>Address</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>Phonenumber</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>Email</span>
                    </TableCell>
                    <TableCell padding="checkbox">
                      <span>Password</span>
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
                            <span>{item.name}</span>
                          </TableCell>
                          <TableCell padding="checkbox">
                            <span>{item.birthday}</span>
                          </TableCell>
                          <TableCell padding="checkbox">
                            <span>{item.address}</span>
                          </TableCell>
                          <TableCell padding="checkbox">
                            <span>{item.phonenumber}</span>
                          </TableCell>
                          <TableCell padding="checkbox">
                            <span>{item.email}</span>
                          </TableCell>
                          <TableCell padding="checkbox">
                            <span>{item.password}</span>
                          </TableCell>
                          {/* <TableCell padding="checkbox">
                                                        <Button
                                                             onClick = {this.update.bind(this, item.date)}
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


            </CardBody>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardHeader plain color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Quality of our team
                </h4>
                <p className={classes.cardCategoryWhite}>
                  You could add the fact and  update it in here.
                </p>
              </CardHeader>
              <CardBody>
                <Table
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
                    ["10","Name10","18/11/2019", "$56,142", "freelancer"],
                    ["11","Name11","18/11/2019", "$56,142", "freelancer"],
                    ["12","Name12","18/11/2019", "$56,142", "freelancer"],
                    ["13","Name13","18/11/2019", "$56,142", "freelancer"],
                    ["14","Name14","18/11/2019", "$56,142", "freelancer"],
                    ["15","Name15","18/11/2019", "$56,142", "freelancer"]
                    
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem> */}
      </GridContainer>);
  }
}
