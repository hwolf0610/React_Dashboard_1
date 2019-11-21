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

import {  MDBContainer, MDBAlert ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);

export default function Gotquality() {
    const classes = useStyles();
    return (
        <GridContainer>



            <GridItem xs={12} sm={12} md={12}>
                <MDBDropdown dropright xs={12} sm={12} md={12}>
                    <MDBDropdownToggle caret color="primary">
                        Dropup
      </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>

                <MDBAlert color="primary" >
        A simple primary alert—check it out!
      </MDBAlert>
            </GridItem>



            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Add working list</h4>
                        <p className={classes.cardCategoryWhite}>Complete our member's working list</p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={5}>
                                <CustomInput
                                    labelText="Date"
                                    id="date"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={5}>
                                <CustomInput
                                    labelText="Name"
                                    id="name"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={10}>
                                <CustomInput
                                    labelText="Job Title"
                                    id="date"
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
                                    labelText="Date"
                                    id="date"
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
                                    id="about-me"
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
                        <Button color="primary">Add Working list</Button>
                    </CardFooter>
                </Card>
            </GridItem>


            {/* <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Set & Update Member</h4>
            <p className={classes.cardCategoryWhite}>
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
      </GridItem> */}
            <GridItem xs={12} sm={12} md={12}>
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
                                ["10", "Name10", "18/11/2019", "$56,142", "freelancer"],
                                ["11", "Name11", "18/11/2019", "$56,142", "freelancer"],
                                ["12", "Name12", "18/11/2019", "$56,142", "freelancer"],
                                ["13", "Name13", "18/11/2019", "$56,142", "freelancer"],
                                ["14", "Name14", "18/11/2019", "$56,142", "freelancer"],
                                ["15", "Name15", "18/11/2019", "$56,142", "freelancer"]

                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
