import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class BioComponent extends React.Component{
    state = {
        value: "My Name is Clark and I am a great Football player. I love sushi and saving the universe. My wife's name is Lois and she is a reporter at Daily Planet. I have two kids named Jordan and Jonathan. They are both twins. We all live in Smallville.",
        isInEditMode: false
    }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode:false,
            value: this.refs.theTextInput.value
        })
    }

    renderEditView = () => {
        return (
            <div className='form-floating'>
                <textarea className='form-control'
                defaultValue={this.state.value}
                ref="theTextInput" style={{height: 200 + 'px'}}
                />
                <button onClick={this.changeEditMode}>X</button>
                <button onClick={this.updateComponentValue}>OK</button>
            </div>
        )
    }
    
    renderDefaultView = () => {
        return (
        <div onClick={this.changeEditMode}>
            {this.state.value}
        </div>
        )
    }

    render(){
        return (
        this.state.isInEditMode ?
        this.renderEditView() :
        this.renderDefaultView()
        )
    }
}

export default BioComponent