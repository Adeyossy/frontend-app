import React from "react";
import ListItem from "./widgets/list-item";
import { ListState } from "../types/list";
import Header from "./widgets/header";

export default class List extends React.Component {
  state: ListState = {
    listItems: [
      ["Training at the Gym", true],
      ["Play Paddle with friends", false],
      ["Burger BBQ with family", false]
    ]
  };

  render(): React.ReactNode {
    const items = this.state.listItems.map(listItem => <ListItem item={listItem} />);
    return (
      <div className="app-list app-full-height">
        <div className="app-header">
          <div className="container-fluid">
            <div className="row py-2">
              <div className="offset-1 col-2 text-end">
                <img src="/avatar.png" alt="User picture" className="app-avatar" />
              </div>
              <div className="col-8 text-white">
                <p className="text-shadow app-user-name">Hello, Jhon</p>
                <h1 className="text-shadow app-subtitle">What are your plans for today?</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="app-list-ad">
          <div className="app-list-item-container pb-3">
            <div className="container-fluid">
              <div className="row align-items-center app-ad-item">
                <div className="col-3">
                  <img src="/achievement.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-7">
                  <p>Go Pro Upgrade Now</p>
                </div>
                <div className="col-2 py-2">
                  <div className="app-ad-price d-flex justify-content-center align-items-center">
                    <p>$1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-list-items">
          {items}
        </div>
        <div className="app-list-fab text-white d-flex justify-content-center align-items-center">
          <p className="text-shadow">+</p>
        </div>
      </div>
    )
  }
}

// export default function List() {
//   return (
//     <div className="app-list">
//       <div className="app-list-ad"></div>
//       <div className="app-list-items">
//         <ListItem></ListItem>
//       </div>
//     </div>
//   )
// }