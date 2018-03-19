import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term : ''
        };
            this.onFormSubmit = this.onFormSubmit.bind( this );
            this.onInputChange = this.onInputChange.bind( this );  

    }
    // if we have a callback function which has a this reference then we need to bind the context
    // of this ::: very important
    onInputChange = (event) => {
        this.setState( { term : event.target.value });
        console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
        this.setState({ term : ''});
        // fetch weather data
    }
    render(){
        return(
            <form onSubmit = { this.onFormSubmit } className="input-group">
                <input 
                    className = "form-control"
                    placeholder="Get the weather forecast for your favorite city"
                    value = { this.state.term }
                    onChange= { this.onInputChange }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-group-secondary"> Search </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps( dispatch ){
    return bindActionCreators({ fetchWeather}, dispatch );
}

export default connect(null, mapDispatchToProps )(SearchBar);