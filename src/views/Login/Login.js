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
import Axios from "axios";


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name:'',
            birthday:'',
            address:'',
            phonenumber:'',
            flag:'',
        }
        let body={name:'admin',birthday:'10/6/1996',address:'dandong',phonenumber:'1993836374',email:'hwolf0610@outlook.com',password:'admin',flag:'1'}
        Axios.post('http://192.168.1.190:3000/team/start',body)
        .then((res) => {
            console.log(res.data)
            alert("Successful!!");
        }).catch((error) => {
            console.log(error)
        });
        // this.props.flag=1;
    }
    changeemail = (e) => { this.setState({ email: e.target.value });alert(this.state.email) }
    changepass = (e) => { this.setState({ password: e.target.value }); }
    onSignin = () => {
        let body={email:this.state.email, password:this.state.password}
        Axios.post('http://192.168.1.190:3000/team/login',body)
        .then((res)=>{
            console.log(res.data)
            window.location.href = "/admin/dashboard";
        }).catch((error)=>{
            console.log(error)
        })
        this.setState({email:'',password:''})
        // if (this.state.email == this.state.password) {
        //     alert("You are logged in!"+this.state.email+"-"+this.state.password);
        //     window.location.href = "/admin/dashboard";
        // } else {
        //     alert("Wrong username or password!");
        // }
    }
    vaildateForm=()=>{
        
    }
    render() {

        return (
            <div className="container">
                <h1>You are Welcome! </h1>
                <div>
                    <p>
                        If the user enters the right username and password, the program should output a message saying “You are logged in!”. If not the program should display the message “Wrong username or password!”.
                    </p>
                </div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
                        <GridItem xs={6} sm={6} md={5} lg={4} xl={3}>
                            <CustomInput
                                labelText="Email"
                                value={this.state.email}
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
                                value={this.state.password}
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