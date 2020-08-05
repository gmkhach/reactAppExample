function ReactApp() {
    return React.createElement("div", null, [
        React.createElement("h1", null, "My awesome React app!"),
        React.createElement("p", null, "This exercise concentrates on learning how to create a react app from scratch, using html, javascript, and the react library."),
        React.createElement("p", null, `Current time: ${new Date().toLocaleString()}.`),
    ])
}

// This setInterval function will only rerender the Current time element of the app every 1000 milisecond,
// because react only rerenders the components that have updated. This is why React is powerful!
setInterval(function() {
    ReactDOM.render(React.createElement(ReactApp), document.querySelector("#app"))
}, 1000);