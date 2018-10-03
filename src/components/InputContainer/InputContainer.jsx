import React, { Component } from 'react';

class InputContainer extends Component {
    render() {
        // Deconstructing
        const { label, type, value, name, onChange } = this.props;
        return (
            <div className="form__item">
                <label className="form__label">{ label }</label>
                <input className="form__input" type={type} name={name} value={value} onChange={onChange}></input>
            </div>
        )
    }
}
export default InputContainer;