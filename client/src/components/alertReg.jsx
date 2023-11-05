import React, { useState } from 'react';

export const AlertButton = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleShowAlert}
      >
        Show Alert
      </button>

      {showAlert && (
        <div className="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div className="py-1"><i className="fas fa-info-circle"></i></div>
            <div>
              <p className="font-bold">Informational Message</p>
              <p className="text-sm">This is a sample informational message.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
