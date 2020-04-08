import React, { Component, PureComponent } from "react";

class Article extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen,
      count: 0,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //console.log("---", "should Component Update");

  //   return this.state.isOpen !== nextState.isOpen;
  // }

  componentWillMount() {
    //console.log("---", "component Will Mount");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) {
      this.setState({
        isOpen: nextProps.defaultOpen,
      });
    }
  }

  componentWillUpdate() {
    console.log("---", "component Will Update");
  }

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && (
      <section className="card-text">{article.text}</section>
    );

    return (
      <div className="card mx-auto" style={{ width: "80%" }}>
        <div className="card-header">
          <h2 onClick={this.incrementCounter}>
            {article.title}
            <span>
              {" "}
              <small> clicked {this.state.count}</small>
            </span>
            <button
              onClick={this.handleClick}
              className="btn btn-primary btn-sm float-right"
            >
              {this.state.isOpen ? "close" : "open"}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            creation date: {new Date(article.date).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    );
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

export default Article;
