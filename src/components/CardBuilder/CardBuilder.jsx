import React, { Component } from 'react';
import InputContainer from '../InputContainer/InputContainer';
import ImageButton from '../ImageButton/ImageButton';
import initialProfileImage from '../../img/initial-avatar.png';

class CardBuilder extends Component {
    state = {
        givenName: "",
        surname: "",
        email: "",
        phone: "",
        houseName: "",
        street: "",
        suburb: "",
        state: "",
        postCode: "",
        country: ""
    }

    componentDidMount(){
        var imageURL = initialProfileImage;
        this.setState({
            imageURL
        })
    }

    uploadAvatar = (event) => {
        event.preventDefault();
        var imageURL = URL.createObjectURL(event.target.files[0]);
        this.setState({
            imageURL
        })
    }

    saveCard = (event) => {
        event.preventDefault();
        console.log('Saving form!!');
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return (
            <div className="main-container">
                <div className="container container__form">
                    <h1 className="primary-heading">hCard Builder</h1>
                    <form className="form" onSubmit={this.saveCard}>
                        <h2 className="form__heading">Personal details</h2>
                        <div className="form__row">
                            <InputContainer label="Given Name" type="text" onChange={this.onChange} value={this.state.givenName} name="givenName" />
                            <InputContainer label="Surname" type="text" onChange={this.onChange} value={this.state.surname} name="surname" />
                        </div>
                        <div className="form__row">
                            <InputContainer label="Email" type="email" onChange={this.onChange} value={this.state.email} name="email" />
                            <InputContainer label="Phone" type="tel" onChange={this.onChange} value={this.state.phone} name="phone" />
                        </div>
                        <h2 className="form__heading">Address</h2>
                        <div className="form__row">
                            <InputContainer label="House name or #" type="text" onChange={this.onChange} value={this.state.houseName} name="houseName" />
                            <InputContainer label="Street" type="text" onChange={this.onChange} value={this.state.street} name="street" />
                        </div>
                        <div className="form__row">
                            <InputContainer label="Suburb" type="text" onChange={this.onChange} value={this.state.suburb} name="suburb" />
                            <InputContainer label="State" type="text" onChange={this.onChange} value={this.state.state} name="state" />
                        </div>
                        <div className="form__row">
                            <InputContainer label="Post code" type="number" onChange={this.onChange} value={this.state.postCode} name="postCode" />
                            <InputContainer label="Country" type="text" onChange={this.onChange} value={this.state.country} name="country" />
                        </div>
                        <div className="form__row form__buttons">
                            <ImageButton uploadAvatar={this.uploadAvatar}/>
                        <div className="form__item">
                            <button type="submit" className="btn-default btn-blue">Create hCard</button>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="container container__card">
                    <div className="card-top">
                        <h2 className="card-top__heading">HCard Preview</h2>
                    </div>
                    <div className="card vcard">
                        <div className="card__header">
                            <span className="n">
                                <h2 className="card__name family-name given-name fn">{`${this.state.givenName} ${this.state.surname}`}</h2>
                            </span>
                            <div className="card__image">
                                <img className="photo" alt="Profile" src={this.state.imageURL}></img>
                            </div>
                        </div>
                        <div className="card__content">
                            <div className="card__row">
                                <div className="card__title">
                                    <p>Email</p>
                                </div>
                                <div className="card__detail">
                                    <p className="email">{this.state.email}</p>
                                </div>
                            </div>
                            <div className="card__row">
                                <div className="card__title">
                                    <p>Phone</p>
                                </div>
                                <div className="card__detail">
                                    <p className="tel">{this.state.phone}</p>
                                </div>
                            </div>
                            <span className="adr">
                                <div className="card__row">
                                    <div className="card__title">
                                        <p>Address</p>
                                    </div>
                                    <div className="card__detail">
                                        <p className="street-address">{`${this.state.houseName} ${this.state.street}`}</p> 
                                    </div>
                                </div>
                                <div className="card__row">
                                    <div className="card__title">
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="card__detail">
                                        <p className="locality region">{`${this.state.suburb} ${this.state.state}`}</p> 
                                    </div>
                                </div>
                                <div className="card__row">
                                    <div className="card__title">
                                        <p>Post code</p>
                                    </div>
                                    <div className="card__detail">
                                        <p className="postal-code">{this.state.postCode}</p> 
                                    </div>
                                    <div className="card__title">
                                        <p>Country</p>
                                    </div>
                                    <div className="card__detail">
                                        <p className="country-name">{this.state.country}</p> 
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardBuilder;