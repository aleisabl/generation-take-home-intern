import React from 'react'
import AddOption from  './AddOption'
import Options from './Options'

class StoreForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
       /*  options: props.options */
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
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
    render() {

      return (
        <div>
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }

  export default StoreForm


















/* import React from 'react';

class StoreForm extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);

      this.state = {value: ''};
    }

    componentDidMount() {

        try {
          
          const json = localStorage.getItem('stores');
          const stores = JSON.parse(json)
  
          if (stores) {
            this.setState(() => ({ stores }) )
          }
  
        } catch (e) {
          //Do nothing at all ¬¬
        }
  
        
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevState.value.length !== this.state.value.length) {
          const json = JSON.stringify(this.state.value)
          localStorage.setItem('stores', json);
        }
      }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleRemoveAll() {
        this.setState({value: ''});
    }
  
    handleSubmit(event) {
      alert('Tienda ' + this.state.value + ' agregada exitosamente');
      event.preventDefault();

    }
  
    render() {
      return (

        <div>

        <form onSubmit={this.handleSubmit}>
          <label className="store-form">
          <h2> Tienda: <input type="text" className="form-control"  
          value={this.state.value} onChange={this.handleChange} />
          <input className="btn-submit" type="submit" value="Enviar" /> </h2> 
          </label>

         <p id="input-value">  {localStorage.getItem('stores')} </p>
          
        </form>

        <button onClick={this.handleRemoveAll}>Remove</button>

        </div>
        
      );
    }
  }

  export default StoreForm; */