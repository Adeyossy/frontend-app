import React from 'react';
import './list-item.css';

export default class ListItem extends React.Component {
  props: { item: Array<string | boolean> } = {
    item: []
  };

  render(): React.ReactNode {
    return (
      <div className="app-list-item-container px-3 pb-3">
        <div className="container-fluid">
          <div className="row align-items-center app-list-item">
            <div className="col-1">
              <div className="app-list-item-toggle">
                <img src="/check-circle-fill.svg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-8 px-4">
              <p>{this.props.item[0]}</p>
            </div>
            <div className="col-3 py-2">
              <button className="app-list-item-toggle-button">Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}