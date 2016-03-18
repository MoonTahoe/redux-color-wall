import { Component } from 'react'
import { connect } from 'react-redux'
import { addColor } from '../../actions/colors'

class AddColorForm extends Component {

    submit() {
        const { dispatch } = this.props;
        const { title, color } = this.refs;
        dispatch(addColor(color.value, title.value));
        title.value = '';
        color.value = '#000000';
    }

    render() {
        return (
            <form action="javascript:void(0)"
                  className="add-color"
                  onSubmit={this.submit.bind(this)}>

                <div>
                    <input ref="title" type="text" placeholder="color title..." required/>
                </div>

                <div>
                    <input ref="color" type="color" required/>
                    <button>Add Color</button>
                </div>

            </form>
        );
    }

}

module.exports = connect()(AddColorForm);