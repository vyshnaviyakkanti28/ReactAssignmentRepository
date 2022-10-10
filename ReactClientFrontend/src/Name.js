import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NameComponent extends React.Component{
    state = {
        value: "Clark Kent",
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
            <div>
                <input 
                type="text" defaultValue={this.state.value}
                ref="theTextInput"
                />
                <button onClick={this.changeEditMode}>X</button>
                <button onClick={this.updateComponentValue}>OK</button>
            </div>
        )
    }
    
    renderDefaultView = () => {
        return (
        <div onClick={this.changeEditMode}>
            <h1>{this.state.value}</h1>
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

export default NameComponent