import React from 'react';
import './list-item.css';

export default class ListItem extends React.Component {
  props: { 
    item: Array<string | boolean>, 
    selectItem: () => void,
    updateToggle: () => void
  } = {
    item: [],
    selectItem: () => void {},
    updateToggle: () => void {}
  };

  render(): React.ReactNode {
    return (
      <div className="app-list-item-container px-3 pb-3">
        <div className="container-fluid">
          <div className="row align-items-center app-list-item">
            <div className="col-1">
              <div className="app-list-item-toggle d-flex justify-content-center align-items-center"
                onClick={this.props.updateToggle}>
                <img src="/check-circle-fill.svg" alt="" className={this.props.item[1] ? "img-fluid" : "d-none"} />
              </div>
            </div>
            <div className="col-8 px-4">
              <p className={this.props.item[1] ? 'disabled' : ''}>{this.props.item[0]}</p>
            </div>
            <div className="col-3 py-2">
              <button className="app-list-item-toggle-button"
               onClick={this.props.selectItem}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}