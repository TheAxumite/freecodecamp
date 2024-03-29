class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Change code below this line
      this.toggleVisibility = this.handleClick.bind(this)
      // Change code above this line
    }
    // Change code below this line
    handleClick() {
      if (this.state.visibility) {
        this.setState((state, props) => ({
          visibility: false
        }));
      }
      else {
        this.setState((state, props) => ({
          visibility: true
        }));
      }
    }
    // Change code above this line
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }