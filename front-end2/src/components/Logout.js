import React, { useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components';

const StyledLogout = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
align-items: center;
background-color: ivory;
margin: 5%;
margin-bottom: 20%;
border-radius: 20px;

h1{
    font-family: 'cookie', cursive;
    font-size: 4rem;
    color: crimson;
    text-shadow: 1px 1px 2px black, 0 0 25px chocolate, 0 0 5px chocolate;
}
`


const Logout = (props) => {

    useEffect(()=> {
        const token = localStorage.getItem("token");
        axios.post('http://localhost:4000/api/logout', {}, {
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
        .then(resp => {
                localStorage.removeItem('token');
              
                props.history.push('/login');
            });
    }, [props]);

    return (
        <StyledLogout>
        <div className="logout">
            <h1>Logout</h1>
        </div>
        </StyledLogout>
    )
}
export default Logout;