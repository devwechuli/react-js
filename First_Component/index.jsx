class Hello extends React.Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <h1>Hi</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
        <h1>Hello there!</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
