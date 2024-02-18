import React, { ChangeEvent } from "react";

type DetailsProps = { 
  item: Array<string | boolean>;
  onChange: (value: string) => void;
  position: number
}

export default class Details extends React.Component {
  props: DetailsProps = {
    item: ["", false],
    onChange: (value: string): void => {},
    position: -1
  };

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  }
  
  render(): React.ReactNode {
    return (
      <div className="app-full-height app-details">
        <div className="app-header d-flex justify-content-center align-items-center">
          <p className="text-shadow text-white">Edit task</p>
        </div>
        <div className="app-details-body p-3">
          <div className="app-details-input">
            <label htmlFor="app-list-item-edit" className="d-block">Task Name</label>
            <input type="text" name="app-list-item-edit" id="app-list-item-edit"
              placeholder="Type your task here" value={this.props.item[0] as string} 
              className="mt-2 p-3 d-block w-100" onChange={(e) => this.onChange(e)}/>
          </div>
          <div className="app-details-buttons container-fluid">
            <div className="row g-0">
              <div className="col-3 p-1">
                <button className="app-accent-button p-3">Delete</button>
              </div>
              <div className="col-9 p-1">
                <button className="p-3">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}