import React, { Component } from 'react';

class InputContainer extends Component {
    render() {
        // Deconstructing
        const { label, value, name, onChange } = this.props;
        return (
            <div className="form__item">
                <label className="form__label" name="">{ label }</label>
                <input className="form__input" type="" name={name} value={value} onChange={onChange}></input>
            </div>
        )
    }
}
export default InputContainer;