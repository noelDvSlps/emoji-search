import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./EmojiRow.css";

class EmojiRow extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sampleText: "noel",
    };
  }
  handleRow = (e) => {
  //  console.log(e.target.querySelector('span').textContent)
  console.log(e.target)
   const textContent = e.target.textContent;
   e.target.textContent = "copied";
   setTimeout(() => {
    e.target.textContent = textContent;
  }, 1500);
  };
  render() {
    return (
      <CopyToClipboard
        key={this.props.symbol}
        text={this.props.symbol}
        onCopy={() => this.setState({ copied: true })}
      >
        <div className ="emojiRowWrapper" >
          <div className="emojiRow" onClick={this.handleRow}>
            <label style ={{paddingLeft: "10px", textAlign: "left"}}>
              {this.props.symbol} {this.props.title}{" "}
            </label>

            <span id="span" className="clipboard" value = {this.sampleText} >
              click to copy emoji
            </span>
           
          </div>
          <hr />
          
        </div>
      </CopyToClipboard>
    );
  }
}

export default EmojiRow;
