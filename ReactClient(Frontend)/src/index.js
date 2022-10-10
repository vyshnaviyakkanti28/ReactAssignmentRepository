import React from 'react';
import { createRoot } from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.css';
import NavComponent from './Nav';
import NameComponent from './Name';
import BioComponent from './Bio';
import ArticleComponent from './SpaceData';
import Clark from './Clark_Kent_-_Tyler_Hoechlin.webp'
const maincontainer = document.getElementById('root')
const mainroot = createRoot(maincontainer)


class MainComponent extends React.Component{
    render(){
        return (
            <div>
                <NavComponent/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='text-center'>
                                <img src={Clark} alt='profile' className='rounded img-fluid' style={{width: 300 + 'px', height: 300 + 'px'}} />
                            </div>
                        </div>
                        <div className='col-5'>
                            <NameComponent/><br/>
                            <BioComponent/>
                        </div>
                    </div><br/>
                    <div className='row'>
                        <h3 className='text-center pb-3'>Here is the latest Space News from Spaceflight News API</h3>
                        <ArticleComponent/>
                    </div>
                </div>
            </div>
        )
    }
}

mainroot.render(<MainComponent />);