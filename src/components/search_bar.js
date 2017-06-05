import React, {Component} from 'react';


// This is the class component
class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = { term: '' };
  }

  render(){
    return (
      <div>
        <input
        value = {this.state.term}
        onChange={event => this.setState({ term: event.target.value }) }
        />
      </div>
    );

    //return <input onChange={this.onInputChange} />;
  }

  // onInputChange(event){
  //   console.log(event.target.value);
  // }

}
export default SearchBar;
