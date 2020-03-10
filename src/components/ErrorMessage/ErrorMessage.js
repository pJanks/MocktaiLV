import React from 'react';

const ErrorMessage = (error) => {
  if (!error.error) {
    return ''
  } else if (error.error) {

    return (
      <h2>{error}</h2>
    )
  }
}

export default ErrorMessage
