import React from 'react'

const Option = (props) => {
    return (
      <div>
        <p className="option-text"> {props.optionText} </p>
        <button
          className="btn-remove"
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
         <strong>Remove Store</strong> 
        </button>
      </div>
    );
  };

  export default Option;