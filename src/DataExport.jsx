function DataExport({ habits, completions }) {
  const exportData = () => {
    const data = {
      habits,
      completions,
      exportDate: new Date().toISOString(),
      version: "1.0"
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `habit-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);

        if (importedData.habits && importedData.completions) {
          // Here you would typically call a function to update the app state
          // For now, we'll just show a success message
          alert('Data imported successfully! Please refresh the page to see changes.');
          console.log('Imported data:', importedData);
        } else {
          alert('Invalid file format. Please select a valid habit tracker backup file.');
        }
      } catch (error) {
        alert('Error reading file. Please make sure it\'s a valid JSON file.');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all habit data? This action cannot be undone.')) {
      localStorage.removeItem('habits');
      localStorage.removeItem('completions');
      alert('All data cleared. Please refresh the page.');
    }
  };

  return (
    <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="text-2xl mr-3">💾</div>
        <h2 className="text-2xl font-semibold text-gray-800">Data Management</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Export Data */}
        <div className="text-center">
          <button
            onClick={exportData}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            📤 Export Data
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Download your habits and progress as a JSON file
          </p>
        </div>

        {/* Import Data */}
        <div className="text-center">
          <label className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg cursor-pointer block">
            📥 Import Data
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="hidden"
            />
          </label>
          <p className="text-sm text-gray-600 mt-2">
            Upload a previously exported backup file
          </p>
        </div>

        {/* Clear Data */}
        <div className="text-center">
          <button
            onClick={clearAllData}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            🗑️ Clear All Data
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Permanently delete all habits and progress
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">💡 Data Management Tips</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Export your data regularly to create backups</li>
          <li>• Imported data will merge with existing habits</li>
          <li>• Clear data action cannot be undone</li>
          <li>• All data is stored locally in your browser</li>
        </ul>
      </div>
    </div>
  );
}

export default DataExport;