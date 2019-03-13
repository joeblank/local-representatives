import React, { Component } from 'react';
import Dropdown from './Dropdown';
import RepList from './RepList';
import RepInfo from './RepInfo';
import states from './../data/states';
import congress from './../data/congress';
import './../styles/App.css';

class App extends Component {
  state = {
    stateAbbreviation: '',
    congressionalSelection: '',
    results: [],
    selectedRep: {},
    errorMessage: ''
  }

  handleStateSelection = (stateAbbreviation) => this.setState({ stateAbbreviation });
  handleCongressionalSelection = (congressionalSelection) => this.setState({ congressionalSelection });
  handleRepSelection = (selectedRep) => this.setState({ selectedRep });
  selectionCheck = (representative, repPlaceholderText, stateAbbreviation, statePlaceholderText) => {
    if (!representative || representative === repPlaceholderText) {
      this.setState({ errorMessage: 'Select Representatives or Senators.' })
      return false;
    } else if (!stateAbbreviation || stateAbbreviation === statePlaceholderText) {
      this.setState({ errorMessage: 'Select a state.' })
      return false;
    } else return true;
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { congressionalSelection, stateAbbreviation } = this.state;
    if (!this.selectionCheck(congressionalSelection, congress[0], stateAbbreviation, states[0])) return;
    try {
      const response = await fetch(`http://localhost:3000/${congressionalSelection}/${stateAbbreviation}`);
      const { results } = await response.json();
      this.setState({ results, errorMessage: '', selectedRep: {} })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { errorMessage, results, selectedRep } = this.state;
    return (
      <>
        <h1 className='app-title'>Who's My Representative?</h1>
        <hr className='app-hr-light' />
        <form onSubmit={this.handleSubmit}>
          <Dropdown list={congress} updateSelection={this.handleCongressionalSelection} />
          <Dropdown list={states} updateSelection={this.handleStateSelection} />
          <button type='submit'>submit</button>
          <span className='error-message'>{errorMessage ? errorMessage : null}</span>
        </form>
        <section className='app-info-container'>
          <RepList list={results} repSelection={this.handleRepSelection} />
          <RepInfo selectedRep={selectedRep} />
        </section>
      </>
    )
  }
}

export default App;
