import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NavComponent extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="http://localhost:3000">
                            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"
                                className="d-inline-block align-text-top"/>
                            &nbsp;The Bio
                        </a>
                    </div>
                </nav><br/><br/>
            </div>
        )
    }
}

export default NavComponent;