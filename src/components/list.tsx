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
      <div className="app-list">
        <div className="app-header">
          <div className="container-fluid">
            <div className="row">
              <div className="offset-1 col-2"></div>
              <div className="col-7 text-white">
                <p className="text-shadow app-user-name mb-2">Hello, Jhon</p>
                <h1 className="text-shadow app-subtitle pb-3">What are your plans for today?</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="app-list-ad"></div>
        <div className="app-list-items">
          { items }
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