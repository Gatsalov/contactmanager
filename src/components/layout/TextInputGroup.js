import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup  = ({ value, placeholder, name, onChange, label, type, error})=>{
  // console.log(value, placeholder, name, onChange, label, type, error)
  return(
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
          type={type} 
          className={classnames("form-control form-control-lg", {"is-invalid ": error})}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          />
          {error && <div className="invalid-feedback">{error}</div> }
            
          
      </div>
    )
}

TextInputGroup.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
  type: 'text'
}
export default TextInputGroup;

