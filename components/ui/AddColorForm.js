import { PropTypes, Component } from 'react'

class AddColorForm extends Component {

    submit() {
        const { onAddColor } = this.props;
        const { title, color } = this.refs;
        onAddColor(color.value, title.value);
        title.value = '';
        color.value = '#000000';
    }

    render() {
        return (
            <form action="javascript:void(0)"
                  className="add-color"
                  onSubmit={this.submit.bind(this)}>

                <div>
                    <input ref="title" type="text" placeholder="color title..." defaultValue="" required="required"/>
                </div>

                <div>
                    <input ref="color" type="color" required="required" defaultValue="#000000;"/>
                    <button>ADD</button>
                </div>

            </form>
        );
    }

}

AddColorForm.propTypes = {
    onAddColor: PropTypes.func
};

module.exports = AddColorForm;