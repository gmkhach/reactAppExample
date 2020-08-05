function ReactApp() {
    return React.createElement("div", null, [
        React.createElement("h1", null, "My awesome React app!"),
        React.createElement("p", null, "This exercise concentrates on learning how to create a react app from scratch, using html, javascript, and the react library."),
    ])
}

ReactDOM.render(React.createElement(ReactApp), document.querySelector("#app"))