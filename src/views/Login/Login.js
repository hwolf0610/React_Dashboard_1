import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
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


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        // this.props.flag=1;
    } 
    changeemail=(e)=>{       this.setState({email:e.target.value});    }
    changepass=(e)=>{        this.setState({password:e.target.value}); }
    onSignin = ()=>{
        if (this.state.email == this.state.password) {
            alert("Successfully");
            window.location.href="/admin/dashboard";
        } else {
            alert("Incorrect Password");
        }      
    }

    render(){

        return (
            <div className="container">
                <h1>asdf</h1>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
                        <GridItem xs={6} sm={6} md={5} lg={4} xl={3}>
                            <CustomInput
                                labelText="Email"
                                value={this.email}
                                onChange={this.changeemail}
                                id="email"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
                        <GridItem xs={6} sm={6} md={5} lg={4} xl={3}>
                            <CustomInput
                                labelText="Password"
                                value={this.password}
                                onChange={this.changepass}
                                id="password"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                    </GridItem>
                    <CardFooter>
                        <Button color="primary" onClick={this.onSignin}>Sign IN</Button>
                    </CardFooter>
                </GridContainer>
            </div>
        );

    }
}


export default Login