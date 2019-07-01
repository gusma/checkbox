import React, { Component } from 'react';
import { without as _without } from 'lodash';
import CheckBox from './CheckBox';

class App extends Component {
  constructor(context) {
    super(context);

    this.state = {
      checkboxs: [
        0, 1, 2,
      ],
      checked: [1],
    }
  }

  toggleMe(itemId) {
    let { checked } = this.state;

    if (checked.includes(itemId)) {
      checked = _without(checked, itemId);
    } else {
      checked.push(itemId);
    }

    this.setState({
      checked,
    });
  }

  buildForm() {
    return (
      <form>
        <div className="form-control">
          <label>Item 0</label>
          <input type="checkbox" onClick={() => this.toggleMe(0)} checked={this.state.checked.includes(0)} />
         <CheckBox />
         </div>
        <div className="form-control">
          <label>Item 1</label>
          <input type="checkbox" onClick={() => this.toggleMe(1)} checked={this.state.checked.includes(1)} />
         <CheckBox />
         </div>
      <div className="form-control">
          <label>Item 2</label>
          <input type="checkbox" onClick={() => this.toggleMe(2)} checked={this.state.checked.includes(2)} />
          <CheckBox />
          </div>

        <div className="form-control" style={{ marginTop: 20 }}>
          <button onClick={() => alert(JSON.stringify(this.state.checked))}>
            Enviar!
          </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <main>
        <div className="container">
          <h2>{`Estás por mandar ${this.state.checked.length} opciones`}</h2>
          {this.buildForm()}
        </div>
      </main>
    );
  }
}

export default App;
