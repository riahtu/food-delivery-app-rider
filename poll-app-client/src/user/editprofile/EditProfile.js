// import React, { Component } from 'react';
// import { editprofile, checkUsernameAvailability, checkEmailAvailability } from '../../util/APIUtils';
// import './EditProfile.css';
// import { Link } from 'react-router-dom';
// import {
//     NAME_MIN_LENGTH,
//     NAME_MAX_LENGTH,
//     USERNAME_MIN_LENGTH,
//     USERNAME_MAX_LENGTH,
//     EMAIL_MAX_LENGTH,
//     PASSWORD_MIN_LENGTH,
//     PASSWORD_MAX_LENGTH,
//     LICENSE_MIN_LENGTH,
//     LICENSE_MAX_LENGTH,
//     ADDRESS_MIN_LENGTH,
//     ADDRESS_MAX_LENGTH,
//     CONTACT_MIN_LENGTH, CONTACT_MAX_LENGTH
// } from '../../constants';
//
// import { Form, Input, Button, notification } from 'antd';
// const FormItem = Form.Item;
//
// class EditProfile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: {
//                 value: ''
//             },
//             username: {
//                 value: ''
//             },
//             email: {
//                 value: ''
//             },
//             password: {
//                 value: ''
//             },
//             license:{
//                 value:''
//             },
//             address:{
//                 value:''
//             },
//             contact:{
//                 value:''
//             }
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
//         this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
//         this.isFormInvalid = this.isFormInvalid.bind(this);
//     }
//
//     handleInputChange(event, validationFun) {
//         const target = event.target;
//         const inputName = target.name;
//         const inputValue = target.value;
//
//         this.setState({
//             [inputName] : {
//                 value: inputValue,
//                 ...validationFun(inputValue)
//             }
//         });
//     }
//
//     handleSubmit(event) {
//         event.preventDefault();
//
//         const signupRequest = {
//             name: this.state.name.value,
//             email: this.state.email.value,
//             username: this.state.username.value,
//             license:this.state.license.value,
//             address:this.state.address.value,
//             password: this.state.password.value,
//             contact:this.state.contact.value
//         };
//         editprofile(signupRequest)
//             .then(response => {
//                 notification.success({
//                     message: 'Foodie App',
//                     description: "Saved",
//                 });
//                 this.props.history.push("/login");
//             }).catch(error => {
//             notification.error({
//                 message: 'Foodie App',
//                 description: error.message || 'Sorry! Something went wrong. Please try again!'
//             });
//         });
//     }
//
//     isFormInvalid() {
//         return !(this.state.name.validateStatus === 'success' &&
//             this.state.username.validateStatus === 'success' &&
//             this.state.email.validateStatus === 'success' &&
//             this.state.license.validateStatus === 'success'&&
//             this.state.address.validateStatus === 'success'&&
//             this.state.contact.validateStatus === 'success'&&
//             this.state.password.validateStatus === 'success'
//         );
//     }
//
//     render() {
//         return (
//             <div className="signup-container">
//             <h1 className="page-title">Edit Profile</h1>
//         <div className="signup-content">
//             <Form onSubmit={this.handleSubmit} className="signup-form">
//             <FormItem
//         label="Full Name"
//         validateStatus={this.state.name.validateStatus}
//         help={this.state.name.errorMsg}>
//             <Input
//         size="large"
//         name="name"
//         autoComplete="off"
//         placeholder="Your full name"
//         value={this.state.name.value}
//         onChange={(event) => this.handleInputChange(event, this.validateName)} />
//         </FormItem>
//         <FormItem label="Username"
//         hasFeedback
//         validateStatus={this.state.username.validateStatus}
//         help={this.state.username.errorMsg}>
//             <Input
//         size="large"
//         name="username"
//         autoComplete="off"
//         placeholder="A unique username"
//         value={this.state.username.value}
//         onBlur={this.validateUsernameAvailability}
//         onChange={(event) => this.handleInputChange(event, this.validateUsername)} />
//         </FormItem>
//         <FormItem
//         label="Email"
//         hasFeedback
//         validateStatus={this.state.email.validateStatus}
//         help={this.state.email.errorMsg}>
//             <Input
//         size="large"
//         name="email"
//         type="email"
//         autoComplete="off"
//         placeholder="Your email"
//         value={this.state.email.value}
//         onBlur={this.validateEmailAvailability}
//         onChange={(event) => this.handleInputChange(event, this.validateEmail)} />
//         </FormItem>
//         <FormItem
//         label="License"
//         hasFeedback
//         validateStatus={this.state.license.validateStatus}
//         help={this.state.license.errorMsg}>
//             <Input
//         size="large"
//         name="license"
//         type="license"
//         autoComplete="off"
//         placeholder="Your license"
//         value={this.state.license.value}
//         onBlur={this.validateLicenseAvailability}
//         onChange={(event) => this.handleInputChange(event, this.validateLicense)} />
//         </FormItem>
//         <FormItem
//         label="Address"
//         hasFeedback
//         validateStatus={this.state.address.validateStatus}
//         help={this.state.address.errorMsg}>
//             <Input
//         size="large"
//         name="address"
//         type="address"
//         autoComplete="off"
//         placeholder="Your address"
//         value={this.state.address.value}
//         onBlur={this.validateAddressAvailability}
//         onChange={(event) => this.handleInputChange(event, this.validateAddress)} />
//         </FormItem>
//         <FormItem
//         label="Contact"
//         hasFeedback
//         validateStatus={this.state.contact.validateStatus}
//         help={this.state.contact.errorMsg}>
//             <Input
//         size="large"
//         name="contact"
//         type="contact"
//         autoComplete="off"
//         placeholder="Your contact"
//         value={this.state.contact.value}
//         onBlur={this.validateContactAvailability}
//         onChange={(event) => this.handleInputChange(event, this.validateContact)} />
//         </FormItem>
//         <FormItem
//         label="Password"
//         validateStatus={this.state.password.validateStatus}
//         help={this.state.password.errorMsg}>
//             <Input
//         size="large"
//         name="password"
//         type="password"
//         autoComplete="off"
//         placeholder="A password between 6 to 20 characters"
//         value={this.state.password.value}
//         onChange={(event) => this.handleInputChange(event, this.validatePassword)} />
//         </FormItem>
//         <FormItem>
//         <Button type="primary"
//         htmlType="submit"
//         size="large"
//         className="signup-form-button"
//         disabled={this.isFormInvalid()}>Submit</Button>
//         </FormItem>
//         </Form>
//         </div>
//         </div>
//     );
//     }
//
//     // Validation Functions
//
//     validateName = (name) => {
//         if(name.length < NAME_MIN_LENGTH) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
//             }
//         } else if (name.length > NAME_MAX_LENGTH) {
//             return {
//                 validationStatus: 'error',
//                 errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
//             }
//         } else {
//             return {
//                 validateStatus: 'success',
//                 errorMsg: null,
//             };
//         }
//     }
//
//     validateAddress = (address) => {
//         if(address.length < ADDRESS_MIN_LENGTH) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: `Address is too short (Minimum ${ADDRESS_MIN_LENGTH} characters needed.)`
//             }
//         } else if (address.length > ADDRESS_MAX_LENGTH) {
//             return {
//                 validationStatus: 'error',
//                 errorMsg: `Address is too long (Maximum ${ADDRESS_MAX_LENGTH} characters allowed.)`
//             }
//         } else {
//             return {
//                 validateStatus: 'success',
//                 errorMsg: null,
//             };
//         }
//     }
//
//
//
//     validateContact = (contact) => {
//         if(contact.length < CONTACT_MIN_LENGTH) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: `Contact is too short (Minimum ${CONTACT_MIN_LENGTH} characters needed.)`
//             }
//         } else if (contact.length > CONTACT_MAX_LENGTH) {
//             return {
//                 validationStatus: 'error',
//                 errorMsg: `Contact is too long (Maximum ${CONTACT_MAX_LENGTH} characters allowed.)`
//             }
//         } else {
//             return {
//                 validateStatus: 'success',
//                 errorMsg: null,
//             };
//         }
//     }
//
//
//     validateLicense = (license) => {
//         if(license.length < LICENSE_MIN_LENGTH) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: `License is too short (Minimum ${LICENSE_MIN_LENGTH} characters needed.)`
//             }
//         } else if (license.length > LICENSE_MAX_LENGTH) {
//             return {
//                 validationStatus: 'error',
//                 errorMsg: `License is too long (Maximum ${LICENSE_MAX_LENGTH} characters allowed.)`
//             }
//         } else {
//             return {
//                 validateStatus: 'success',
//                 errorMsg: null,
//             };
//         }
//     }
//     validateEmail = (email) => {
//         if(!email) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: 'Email may not be empty'
//             }
//         }
//
//         const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
//         if(!EMAIL_REGEX.test(email)) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: 'Email not valid'
//             }
//         }
//
//         if(email.length > EMAIL_MAX_LENGTH) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
//             }
//         }
//
//         return {
//             validateStatus: null,
//             errorMsg: null
//         }
//     }
//
//     validateUsername = (username) => {
//         if(username.length < USERNAME_MIN_LENGTH) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
//             }
//         } else if (username.length > USERNAME_MAX_LENGTH) {
//             return {
//                 validationStatus: 'error',
//                 errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
//             }
//         } else {
//             return {
//                 validateStatus: null,
//                 errorMsg: null
//             }
//         }
//     }
//
//     validateUsernameAvailability() {
//         // First check for client side errors in username
//         const usernameValue = this.state.username.value;
//         const usernameValidation = this.validateUsername(usernameValue);
//
//         if(usernameValidation.validateStatus === 'error') {
//             this.setState({
//                 username: {
//                     value: usernameValue,
//                     ...usernameValidation
//                 }
//             });
//             return;
//         }
//
//         this.setState({
//             username: {
//                 value: usernameValue,
//                 validateStatus: 'validating',
//                 errorMsg: null
//             }
//         });
//
//         checkUsernameAvailability(usernameValue)
//             .then(response => {
//                 if(response.available) {
//                     this.setState({
//                         username: {
//                             value: usernameValue,
//                             validateStatus: 'success',
//                             errorMsg: null
//                         }
//                     });
//                 } else {
//                     this.setState({
//                         username: {
//                             value: usernameValue,
//                             validateStatus: 'error',
//                             errorMsg: 'This username is already taken'
//                         }
//                     });
//                 }
//             }).catch(error => {
//             // Marking validateStatus as success, Form will be recchecked at server
//             this.setState({
//                 username: {
//                     value: usernameValue,
//                     validateStatus: 'success',
//                     errorMsg: null
//                 }
//             });
//         });
//     }
//
//     validateEmailAvailability() {
//         // First check for client side errors in email
//         const emailValue = this.state.email.value;
//         const emailValidation = this.validateEmail(emailValue);
//
//         if(emailValidation.validateStatus === 'error') {
//             this.setState({
//                 email: {
//                     value: emailValue,
//                     ...emailValidation
//                 }
//             });
//             return;
//         }
//
//         this.setState({
//             email: {
//                 value: emailValue,
//                 validateStatus: 'validating',
//                 errorMsg: null
//             }
//         });
//
//         checkEmailAvailability(emailValue)
//             .then(response => {
//                 if(response.available) {
//                     this.setState({
//                         email: {
//                             value: emailValue,
//                             validateStatus: 'success',
//                             errorMsg: null
//                         }
//                     });
//                 } else {
//                     this.setState({
//                         email: {
//                             value: emailValue,
//                             validateStatus: 'error',
//                             errorMsg: 'This Email is already registered'
//                         }
//                     });
//                 }
//             }).catch(error => {
//             // Marking validateStatus as success, Form will be recchecked at server
//             this.setState({
//                 email: {
//                     value: emailValue,
//                     validateStatus: 'success',
//                     errorMsg: null
//                 }
//             });
//         });
//     }
//
//     validatePassword = (password) => {
//         if(password.length < PASSWORD_MIN_LENGTH) {
//             return {
//                 validateStatus: 'error',
//                 errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
//             }
//         } else if (password.length > PASSWORD_MAX_LENGTH) {
//             return {
//                 validationStatus: 'error',
//                 errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
//             }
//         } else {
//             return {
//                 validateStatus: 'success',
//                 errorMsg: null,
//             };
//         }
//     }
//
// }
//
// export default EditProfile;