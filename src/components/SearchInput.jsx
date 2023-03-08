import React from "react";
import EmojiResults from "./EmojiResults";
import data from "./data/data.json";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   showResult = (string, field) => {
    const result = string.trim() !== "" ? data.filter(item => item.title.toLowerCase().includes(string.trim().toLowerCase()) ) : undefined;
    
    this.setState({ [field]: result })
  };
 
  handleInputData = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.showResult(value, "result"));
  
  };

  render() {
    return (
      <div style={{width: "80%", minWidth: "400px", overflow: "hidden", }}>
        
        <input
         style={{width: "100%",  fontSize: "1.5rem", }}
          type="text"
          onChange={this.handleInputData}
          callback = {this.showResults}
          autoComplete="off"
          name="searchInput"
          
        />

     
       
         <EmojiResults data = {this.state.result} />
      </div>
    );
  }
}

export default SearchInput;
