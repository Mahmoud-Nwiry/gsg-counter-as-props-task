import './App.css';
import Counter from './components/Counter';
import React, { Component } from 'react';

const countersInit = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 2, steps: 2 },
  { id: 3, count: 4, steps: 1 },
  { id: 4, count: 0, steps: 3 },
]

class App extends Component {

  state = {
    counters: countersInit,
    total: countersInit.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)
  }

  onInccrement = (id, steps = 1) => {
    this.setState(prevState => {
      return {
        counters: prevState.counters.map(item => {
          if (item.id === id) {
            return { ...item, count: item.count + steps }
          }
          else return item
        }),
        total : prevState.total + steps
      }
    })
  }

  onDeccrement = (id, count, steps = 1) => {
    this.setState(prevState => {
      return {
        counters: prevState.counters.map(item => {
          if (item.id === id) {
            if (item.count >= steps)
              return { ...item, count: item.count - steps }
            else
              return item
          }
          else return item
        }),
        total : count >= steps ? prevState.total - steps : prevState.total
      }
    })
  }

  render() {
    return (
      <div className="App">

        {
          this.state.counters.map(counter => {
            return (
              <Counter
                key={counter.id}
                data={counter}
                inccrement={this.onInccrement}
                deccrement={this.onDeccrement}
              />
            )
          })
        }
        <p>Total : {this.state.total}</p>
      </div>
    );
  }
}

export default App;
