import React from "react";
import EmojiRow from "./EmojiRow";


class EmojiResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    render() {
        const data = this.props.data && (this.props.data.length ? this.props.data.slice(0,20) : undefined)
        return(
          <div style={{overflowY: "visible",  height: "auto", maxHeight: "80vh", width: "99.8%", overflowX: "hidden", border: "1px solid white",
           
          }}>
            {data !== undefined && 
            data.map((item => (
                <EmojiRow 
                key = {item.symbol + item.title}
                symbol = {item.symbol} 
                title = {item.title}
                />
            )))
            
            }
          </div>
        )
    }
}

export default EmojiResults;