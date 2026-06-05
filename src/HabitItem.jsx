import { useState } from 'react';

function HabitItem({ habit, isCompletedToday, streak, onToggleComplete, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(habit.name);
  const [editDescription, setEditDescription] = useState(habit.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(habit.id, { name: editName.trim(), description: editDescription.trim() });
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditName(habit.name);
    setEditDescription(habit.description);
    setIsEditing(false);
  };

  return (
    <div className={`p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 mb-4 ${isCompletedToday ? 'ring-2 ring-green-300 animate-celebrate' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
          />
          <div className="flex space-x-3">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              ✓ Save
            </button>
            <button type="button" onClick={handleEditCancel} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              ✕ Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <button
                onClick={() => onToggleComplete(habit.id)}
                className={`w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl transition-all duration-300 mr-4 ${
                  isCompletedToday
                    ? 'bg-green-500 border-green-500 text-white transform scale-110'
                    : 'hover:border-blue-400 hover:scale-105'
                }`}
              >
                {isCompletedToday ? '✓' : habit.icon || '○'}
              </button>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold ${isCompletedToday ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {habit.name}
                </h3>
                {habit.description && (
                  <p className={`text-sm ${isCompletedToday ? 'text-gray-400' : 'text-gray-600'}`}>
                    {habit.description}
                  </p>
                )}
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-500 mr-2">🔥</span>
                  <span className="text-sm font-medium text-orange-600">{streak} day streak</span>
                  {streak >= 7 && <span className="ml-2 text-yellow-500">⭐</span>}
                  {streak >= 30 && <span className="ml-1 text-purple-500">👑</span>}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => onDelete(habit.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HabitItem;