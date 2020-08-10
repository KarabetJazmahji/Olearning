import React, { Component } from 'react';

class SearchBar extends Component{  // Class based component to manage the serach bar
    state = {term: ''};

    onFormSubmit = (event)=>{        // To get the search term inserted by the user 
        event.preventDefault();      // Changing the state.term to the new term
        this.props.onFormSubmit(this.state.term);  // This will allow the parent component that calls the search bar to use it
    };

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className="search-bar">
                <i className="search icon"></i>
                <input type="text"
                       placeholder="Search Courses"  
                       onChange={(e)=>{
                           this.setState({term: e.target.value})}}/>
            </div>
            </form>
        )

    }
}

export default SearchBar;