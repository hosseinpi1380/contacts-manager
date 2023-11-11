import React, { Component } from 'react'

export default class ErrorSample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }
    render() {
        if (this.state.hasError) {
            return <h1>something bad happen! 😭</h1>
        }
        return this.props.children
    }
}
