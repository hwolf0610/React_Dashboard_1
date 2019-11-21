import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import Table from "components/Table/Table.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import axios from "axios";
export default class TableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name:'',
        email: '',
        password: '',
        confirm:'',
        birthday:'',
        address:'',
        phonenumber:'',
        aboutme:'',
        flag:'',
    }
  }
changename= (e) => { this.setState({ name: e.target.value }); }
changeemail = (e) => { this.setState({ email: e.target.value }); }
changepassword = (e) => { this.setState({ password: e.target.value }); }
changeconfirm = (e) => { this.setState({ confirm: e.target.value }); }
changebirthday = (e) => { this.setState({ birthday: e.target.value }); }
changeaddress = (e) => { this.setState({ address: e.target.value }); }
changephonenumber = (e) => { this.setState({ phonenumber: e.target.value }); }
// changeaboutme = (e) => { this.setState({ aboutme: e.target.value }); }
onSignup=()=>{
  let body={name:this.state.name, birthday:this.state.birthday, address:this.state.address, phonenumber:this.state.phonenumber, email:this.state.email, password:this.state.password, flag:'2'}
        axios.post('http://192.168.1.190:3000/team/add',body)
        .then((res) => {
            console.log(res.data)
            alert("Successful!!");
        }).catch((error) => {
            console.log(error)
        });
        this.setState({name:'',
        email: '',
        password: '',
        confirm:'',
        birthday:'',
        address:'',
        phonenumber:'',
        aboutme:'',
        flag:'',})
}   

    render(){
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
                        id="email-address"
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
                        id="Birthday"
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
                        id="Address"
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
                        id="phonenumber1"
                        value={this.state.phonenumber}
                        onChange={this.changephonenumber}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    {/* <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Phone number 2"
                        id="phonenumber2"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Phone number 3"
                        id="phonenumber3"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem> */}
                  </GridContainer>
                  {/* <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                      <CustomInput
                        labelText="Please input its other information like hobby , like sports name, and personality."
                        id="about-me"
                        value={this.state.aboutme}
                        onChange={this.changeaboutme}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </GridItem>
                  </GridContainer> */}
                </CardBody>
                <CardFooter>
                  <Button color="primary" onClick={this.onSignup}>Add Member</Button>
                </CardFooter>
              </Card>
            </GridItem>
            {/* <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves Kanye
                    I love Rick Owens’ bed design but the back is...
                  </p>
                  <Button color="primary" round>
                    Follow
                  </Button>
                </CardBody>
              </Card>
            </GridItem> */}
          
    
    
    
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4  >Set & Update Member</h4>
                <p  >
                  You could add a member and update itself member  in here.
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["No", "Name", "Address", "phonenumber", "email", "password"]}
                  tableData={[
                    ["1", "Name1","dandong", "15942517255", "name1@outlook.com", "dandong"],
                    ["2", "Name2","dandong", "15942517255", "name2@outlook.com", "dandong"],
                    ["3", "Name3","dandong", "15942517255", "name3@outlook.com", "dandong"],
                    ["4", "Name4","dandong", "15942517255", "name4@outlook.com", "dandong"],
                    ["5", "Name5","dandong", "15942517255", "name5@outlook.com", "dandong"],
                    ["6", "Name6","dandong", "15942517255", "name6@outlook.com", "dandong"],
                    ["7", "Name7","dandong", "15942517255", "name7@outlook.com", "dandong"],
                    ["8", "Name8","dandong", "15942517255", "name8@outlook.com", "dandong"],
                    ["9", "Name9","dandong", "15942517255", "name9@outlook.com", "dandong"],
                    ["10","Name10","dandong", "15942517255", "name10@outlook.com","dandong"],
                    ["11","Name11","dandong", "15942517255", "name11@outlook.com","dandong"],
                    ["12","Name12","dandong", "15942517255", "name12@outlook.com","dandong"],
                    ["13","Name13","dandong", "15942517255", "name13@outlook.com","dandong"],
                    ["14","Name14","dandong", "15942517255", "name14@outlook.com","dandong"],
                    ["15","Name15","dandong", "15942517255", "name15@outlook.com","dandong"]
                  ]}
                />
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
