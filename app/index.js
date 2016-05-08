const React = require("react");
const ReactDOM = require("react-dom");

const FriendsContainer = React.createClass({
    getInitialState: function() {
        return {
            name: "Paolo",
            friends: ["Pippo", "Pluto", "Paperino"]
        };
    },

    addFriend: function(friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    },

    render: function() {
        return (
            <div>
                <h3>Name: {this.state.name}</h3>
                <ShowList names={this.state.friends} />
                <AddFriend addNew={this.addFriend} />
            </div>
        );
    }
});

const AddFriend = React.createClass({
    getInitialState: function() {
        return {
            newFriend: ''
        };
    },

    updateNewFriend: function(ev) {
        this.setState({
            newFriend: ev.target.value
        });
    },

    handleAddNew: function() {
        this.props.addNew(this.state.newFriend); // this calls the addNew prop, which is a function
        this.setState({
            newFriend: ''
        });
    },

    render: function() {
        return (
            <div>
                <input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
                <button onClick={this.handleAddNew}>Add Friend</button>
            </div>
        );
    }
});

const ShowList = React.createClass({
    render: function() {
        const listItems = this.props.names.map(friend => {
            return <li>{friend}</li>;
        });
        return (
            <div>
                <h3>Friends:</h3>
                <ul>{listItems}</ul>
            </div>
        );
    }
});

ReactDOM.render(
    <FriendsContainer />,
    document.getElementById('app')
);
