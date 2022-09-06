//error boundary uses class component we cannot use

import React, { Component } from "react";
import FallbackUI from "../FallbackUI";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    //these methods are exicuted when error occur like filter,map otherwise childers are exicute
    console.log("getDerivedStateFromError is exicuted");
    console.log(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    //these methods are exicuted when error occur like filter,map otherwise childers are exicute
    console.log("componentDidCatch is exicuted");
    console.log(error);
    console.log(info);
  }

  render() {
    {
      if (this.state.hasError) {
        return (
          <div>
            <FallbackUI />
          </div>
        );
      } else {
        return this.props.children;
      }
    }
  }
}
