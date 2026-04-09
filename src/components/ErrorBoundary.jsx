import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // Could send to logging service here
    // console.error(error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-xl w-full bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold text-red-600">Something went wrong</h2>
            <pre className="mt-4 text-sm text-gray-700 whitespace-pre-wrap">{String(this.state.error)}</pre>
            <div className="mt-4 flex gap-2">
              <button onClick={() => window.location.reload()} className="px-4 py-2 bg-[#E1306C] text-white rounded">Reload</button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
