const React = require("react");
const ReactDOM = require("react-dom");

const Hello = React.createClass({
    getInitialState: function() {
        return {
            username: 'paolo'
        };
    },

    handleChange: function(ev) {
        this.setState({
            username: ev.target.value
        })
    },

    render: function() {
        return (
            <div>
                Hello {this.state.username},<br/>
                Change name:
                <input type="text" value={this.state.username} onChange={this.handleChange} />
            </div>
        );
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
);
