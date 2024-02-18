import React from 'react';
import './App.css';
import List from './components/list';
import Details from './components/details';
import { ListState, ListStatePosition } from './types/list';

export default class App extends React.Component {
  state: ListStatePosition = {
    listItems: [
      ["Training at the Gym", true],
      ["Play Paddle with friends", false],
      ["Burger BBQ with family", false]
    ],
    position: -1
  };

  selectItem = (position: number) => {
    this.setState({
      position: position
    })
  }

  changeItem = (value: string) => {
    const listItems = this.state.listItems
      .map((item, index) => this.state.position === index ? [value, item[1]] : item);

    this.setState({
      listItems: listItems
    });
  }

  render(): React.ReactNode {
    return (
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="offset-lg-2 col-lg-8">
            <div className="container-fluid p-0 app-body">
              <div className="row g-0 app-full-height">
                <div className="col-lg-4 col-xl-5">
                  <List listItems={this.state.listItems} />
                </div>
                <div className="col-lg-8 col-xl-7 d-none d-lg-block">
                  <Details item={this.state.position < 0 ? ["", false] : this.state.listItems[this.state.position]} 
                    onChange={this.changeItem} position={this.state.position}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

