import React from 'react'
import AddOption from  './AddOption'
import Options from './Options'

class StoreForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
    
    //always fires
    componentDidMount() {

      try {
        
        const json = localStorage.getItem('options');
        const options = JSON.parse(json)

        if (options) {
          this.setState(() => ({ options }) )
        }

      } catch (e) {
        //Do nothing at all ¬¬
      }

      
    }
    //fires when a state is updated
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json);
      }
    }
    //fires when switching pages
    componentWillUnmount() {
        console.log('component will unmount')
    }
    
    handleDeleteOptions() {
      this.setState(() => ({ options: [] }));
    }
   /*  handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    } */
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
      }));
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This store already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    render() {

      return (
        <div>
          <h1 className="favorite-stores" >Favorite stores:</h1>
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          
        </div>
      );
    }
  }

  export default StoreForm;