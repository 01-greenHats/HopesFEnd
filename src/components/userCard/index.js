import React, { useEffect, useState } from 'react';
import { TextField, Button, CardActionArea } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card } from 'react-bootstrap'
import './userCard.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createNewPayment } from '../../apiActions/payments';
import { addToDonorFavList } from '../../apiActions/donors';


function UserCard(props) {

    const [nameFilter, setNameFilter] = useState('All');
    const [nationalIdFilter, setNationalIdFilter] = useState('All');
    const [currentUser, setCurrentUser] = useState('');

    console.log('props : ', props);
    function getLogoText(str) {
        var result = '';
        str.split(' ').forEach(word => {
            result = result + word[0];
        });
        return result.toUpperCase();
    }

    async function handleAddToFavList(token, favUserId) {
        let addToFavReult = await addToDonorFavList(token, favUserId);
        console.log('addToFavReult>>>', addToFavReult);

    }


    function handleDonate(user) {
        console.log('handleDonate called');
        // console.log('currentUser>> ',currentUser);
        // createNewPayment();
        console.log('123>>>', user.name);
        let paymentData = {};
        paymentData.email = user.email;
        paymentData._id = user._id;
        paymentData.amoount = 50;
        console.log('payment data>>', paymentData);
        let paymentProcessResult = createNewPayment(paymentData);
        console.log('paymentProcessResult>>', paymentProcessResult);


    }

    useEffect(() => { // Update the document title using the browser API
    });


    // function handleDonate1() {
    //     console.log('handleDonate1 called');
    //     // createNewPayment();
    // }

    function filterData(data) {
        let result = [];
        data.forEach(item => { // double filteration
            if (nameFilter !== 'All' && nationalIdFilter !== 'All') {
                if (item.name.toUpperCase() == nameFilter.toUpperCase() && item.nationalNo.toString() == nationalIdFilter) {
                    result.push(item)
                }
            } else if (nameFilter !== 'All' && item.name.toUpperCase() == nameFilter.toUpperCase()) {
                result.push(item)
            } else if (nationalIdFilter !== 'All' && item.nationalNo.toString() == nationalIdFilter) {
                result.push(item)
            }
        });
        return result.length == 0 ? data : result;
    }
    return (
        <>
            <div className="filterSearchPanel">
                <div class="row d-flex justify-content-between mx-auto mt-4 mb-3">
                    <h1 class="h3 ml-2 mb-3 text-info">Users</h1>
                    <div class="col-lg-8 col-md-12">
                        <div class="row justify-content-end">
                            <div class="input-group col-lg-10 col-md-12">
                                <div class="input-group-prepend"><span class="form-control bg-light text-white rounded-0 text-primary"><i class="fa fa-search" aria-hidden="true"></i></span></div>
                                <input class="form-control" id="search-box" type="text" name="search" placeholder="Search for... " required="required" />
                                <div class="input-group-append">
                                    <select class="form-control bg-light rounded-0 text-capitalize" id="search-filter" name="search-filter">
                                        <option value="listitem">All</option>
                                        <option value="name">Name</option>
                                        <option value="address">Address</option>
                                        <option value="email">Email</option>
                                        <option value="status">Status</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <TextField id="standard-secondary" className="searchInput" onChange={(e) => { setNationalIdFilter(e.target.value) }} label="National Number" />
                <TextField id="standard-secondary" className="searchInput" onChange={(e) => { setNameFilter(e.target.value) }} label="Name" /> */}
                <form className="serchForm">

                    {/* <label className="searchLabel">
                        <input id="standard-secondary" className="searchInput" placeholder="National Number" onChange={(e) => { setNationalIdFilter(e.target.value) }} label="National Number" />
                    </label>
                    <label>
                        <input id="standard-secondary" className="searchInput" placeholder="Name" onChange={(e) => { setNameFilter(e.target.value) }} label="Name" />
                    </label> */}

                    <div className="field" tabindex="1">
                        <label className="label" for="username">
                            <i className="far fa-user"></i>Name
                        </label>
                        <input className="input" name="username" type="text" placeholder="e.g. Hisham Alnaji"
                            onChange={
                                (e) => {
                                    setNameFilter(e.target.value)
                                }
                            } />
                    </div>
                    <div className="field" tabindex="2">
                        <label for="email">
                            <i className="far fa-envelope"></i>National Number
                    </label>
                        <input className="input" name="email" type="text" placeholder="e.g. 9968918472"
                            onChange={
                                (e) => {
                                    setNationalIdFilter(e.target.value)
                                }
                            } />
                    </div>

                </form>
            </div>
            <div className="userCardContainer">
                {
                    filterData(props.data).map((item, idx) => {
                        return (
                            <>
                                <div className="background"></div>

                                <div className="outer-div">
                                    <div className="inner-div">
                                        <div className="front">
                                            <div className="front__bkg-photo"></div>
                                            <div className="front__face-photo_Edited">
                                                <div className="front_face-text">
                                                    {
                                                        getLogoText(item.name)
                                                    }</div>
                                            </div>
                                            <div className="front__text">
                                                <h3 className="front__text-header">
                                                    {
                                                        item.name
                                                    }</h3>


                                                <p className="front__text-para"><LocationOnIcon className="front-icons" />Gaza</p>


                                            </div>
                                        </div>
                                        <div className="backFace">
                                            <div className="social-media-wrapper">


                                                <div className="card__details">
                                                    <ul>
                                                        <li>Date of Bith: {
                                                            item.dob
                                                        }</li>
                                                        <li>Social Status: {
                                                            item.socialStatus
                                                        }</li>
                                                        <li>Health Status: {
                                                            item.healthStatus
                                                        }</li>
                                                        <li>Family Count: {
                                                            item.familyCount
                                                        }</li>
                                                        <li>Income: {
                                                            item.income
                                                        } </li>
                                                        <li>Expenses: {
                                                            item.expencsies
                                                        }</li>
                                                        <li>Email: {
                                                            item.email
                                                        }</li>
                                                        <div style={
                                                            {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                margin: "0px 10px"
                                                            }
                                                        }>
                                                            <button className="viewMoreButton">
                                                                <Link style={
                                                                    { color: '#000' }
                                                                }
                                                                    to={
                                                                        {
                                                                            pathname: "/user_payments/" + item._id,
                                                                            state: item
                                                                        }
                                                                    }>Donate</Link>
                                                            </button>
                                                            <button onClick={
                                                                () => {
                                                                    handleAddToFavList(props.token, item._id)
                                                                }
                                                            }
                                                                style={
                                                                    {
                                                                        backgroundColor: "#0F5257",
                                                                        border: "none"
                                                                    }
                                                                }><FavoriteIcon className="FavoriteIcon" style={
                                                                    { color: "#49111C" }
                                                                } /></button>
                                                        </div>

                                                        {/* <button className="viewMoreButton"><Link to={{ pathname: "/user_payments/" + item._id, state: item }}>View Payments history</Link> </button> */}

                                                        {/* <button onClick={() => {
                                                            //setCurrentUser({item},handleDonate())
                                                            handleDonate(item);
                                                        }} className="viewMoreButton">Donate</button> */} </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </>
                        );
                    })
                } </div>
        </>
    )
}

//        token: state.token.token,

const mapStateToProps = state => ({ posts: state.posts.posts, token: state.auth.token, loggedIn: state.auth.loggedIn });
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
