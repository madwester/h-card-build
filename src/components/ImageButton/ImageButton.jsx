import React, { Component } from 'react';

class ImageButton extends Component {
    render() {
        return (
            <div className="form__item">
                <input type="file" id="uploadAvatar" style={{display: 'none'}} onChange={this.props.uploadAvatar}/>
                <label type="button" className="btn-default" htmlFor="uploadAvatar">Upload Avatar</label>
            </div>
        )
    }
}
export default ImageButton;