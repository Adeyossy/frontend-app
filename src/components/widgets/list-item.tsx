import React from 'react';
import './list-item.css';

export default class ListItem extends React.Component {
  props: {item: Array<string|boolean>} = {
    item: []
  };
  
  render(): React.ReactNode {
    return(
      <div className="container-fluid p-3">
        <div className="row align-items-center app-list-item">
          <div className="col-1">
            <div className="app-list-item-toggle">
              <img src="/check-circle-fill.svg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-9 px-4">
            <p>{this.props.item[0]}</p>
          </div>
          <div className="col-2">
            <button className="app-list-item-toggle-button">Edit</button>
          </div>
        </div>
      </div>
    )
  }
}