import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
width: 100%;
nav {
    position: relative;
}
button{
    background-color: peru;
    padding: .5% 4%;
    border-radius: 20px;
    border: 0;
    color: white;
    font-family: 'frijole', cursive;
    font-size: 1.5rem;
    margin:1%;
}

button:hover {
    background-color: sandybrown;
    color: black;
    cursor: pointer;
}

`

const Header = () => {
    const isLoggedIn = localStorage.getItem('token');

    return(
        <StyledHeader>
        <nav className="nav">
            <div className='nav-top'>
                <div className="right-img">
                </div>
            </div>
            <div className='nav-bar'>
                <div className="links">
                <nav>
                    <Link to='/'><button>Home</button></Link>
                    <Link className="link" to='/signup'><button>SignUp</button></Link>
                    <Link className="link" to='/login'><button>Login</button></Link>
                    {
                        isLoggedIn && <Link className="link" to='/logout'><button>LogOut</button></Link>
                    }
                    {
                       isLoggedIn && <Link className="link" to='/recipes'><button>Recipes</button></Link> 
                    }
                    
                    <Link className="link" to='/guest'><button>Guest</button></Link>
                </nav>
                </div>
            </div>
        </nav>
       </StyledHeader> 
    )
}

export default Header;