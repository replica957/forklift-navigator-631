import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<any> },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ComponentType<any> }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Log to monitoring service
    if (typeof window !== 'undefined') {
      const errorLog = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      const logs = JSON.parse(localStorage.getItem('error_logs') || '[]');
      logs.push(errorLog);
      
      if (logs.length > 50) {
        logs.splice(0, logs.length - 50);
      }
      
      localStorage.setItem('error_logs', JSON.stringify(logs));
    }

    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return React.createElement(FallbackComponent, {
        error: this.state.error,
        resetError: () => this.setState({ hasError: false, error: undefined, errorInfo: undefined })
      });
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error; resetError: () => void }> = ({ error, resetError }) => {
  return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-gray-50',
    children: React.createElement('div', {
      className: 'max-w-md w-full bg-white rounded-lg shadow-md p-6 text-center',
      children: [
        React.createElement('div', {
          className: 'text-red-500 mb-4',
          children: React.createElement('svg', {
            className: 'w-16 h-16 mx-auto',
            fill: 'none',
            stroke: 'currentColor',
            viewBox: '0 0 24 24',
            children: React.createElement('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: 2,
              d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z'
            })
          })
        }),
        React.createElement('h2', {
          className: 'text-xl font-semibold text-gray-900 mb-2',
          children: 'Une erreur inattendue s\'est produite'
        }),
        React.createElement('p', {
          className: 'text-gray-600 mb-4',
          children: 'Nous nous excusons pour ce désagrément. Veuillez réessayer.'
        }),
        React.createElement('button', {
          onClick: resetError,
          className: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors',
          children: 'Réessayer'
        })
      ]
    })
  });
};