import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => ({ error }));

      if (!error) {
        e.target.elements.option.value = '';
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form className="form-style" onSubmit={this.handleAddOption}>
            <input type="text" className="input-store" name="option" />
            <button className="btn-add-option"><strong>Add Store</strong></button>
          </form>
        </div>
      );
    }
  }

  export default AddOption;