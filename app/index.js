const React = require("react");
const ReactDOM = require("react-dom");

const Hello = React.createClass({
    render: function() {
        return (
            <div>It works, with React!</div>
        );
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById('app')
);
