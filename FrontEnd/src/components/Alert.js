import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div className={`p-4 mb-4 text-lg ${props.mode === 'light' ? 'text-gray-800' : 'text-white'} bg-${props.alert.type}-500 rounded-lg`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
