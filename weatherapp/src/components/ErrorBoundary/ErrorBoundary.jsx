import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        console.log('const');
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log('test1');
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('test2');
        console.log(this.state.hasError);
        this.setState({ hasError: true })
    }

    render() {
        console.log('render');
        console.log(this.state.hasError);
        return (
            this.state.hasError ?
                (<h1>test1</h1>)
                : (this.props.children)
        )
    }
}

export default ErrorBoundary;