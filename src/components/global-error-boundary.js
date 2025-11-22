'use client'
import React from 'react'
import CrashError from './crash-error'

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('CRITICAL UI CRASH:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })

    if (this.props.onReset) {
      this.props.onReset()
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleReset)
      }

      return <CrashError error={this.state.error} resetType="hard" onReset={this.handleReset} />
    }

    return this.props.children
  }
}

export default GlobalErrorBoundary
