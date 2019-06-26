import React from 'react'
import Option from './Option'
import './styles/Form.css'

const Options = (props) => {
    return (
      <div>

        <button className="btn-remove-all" onClick={props.handleDeleteOptions}><strong>Remove All</strong></button>

        {props.options.length === 0 && <h2 className="add-store-text">Please add a store!</h2> }
       
        {
          props.options.map((option) => (
            <Option
              key={option}
              optionText={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }

      </div>
    );
  };

  export default Options;