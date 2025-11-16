import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // You could log this to an error reporting service
    console.error('App crashed:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Something went wrong.</h1>
          <p style={{ color: '#475569', marginBottom: 16 }}>An unexpected error prevented the page from rendering.</p>
          <pre style={{ background: '#f1f5f9', padding: 12, borderRadius: 8, overflowX: 'auto' }}>
            {String(this.state.error)}
          </pre>
          <button onClick={() => window.location.reload()} style={{ marginTop: 16, padding: '10px 16px', borderRadius: 8, background: '#0ea5e9', color: 'white', fontWeight: 600 }}>
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
