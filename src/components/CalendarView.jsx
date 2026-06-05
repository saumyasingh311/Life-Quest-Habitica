import { useState } from 'react';

function CalendarView({ completions, habits }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const getCompletionStatus = (date) => {
    if (!date) return null;

    const dateStr = date.toISOString().split('T')[0];
    const totalHabits = habits.length;
    const completedHabits = habits.filter(habit =>
      (completions[habit.id] || []).includes(dateStr)
    ).length;

    if (completedHabits === 0) return 'none';
    if (completedHabits === totalHabits) return 'full';
    return 'partial';
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="text-2xl mr-3">📅</div>
          <h2 className="text-2xl font-semibold text-gray-800">Calendar View</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            ←
          </button>
          <button
            onClick={goToToday}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 text-sm"
          >
            Today
          </button>
          <button
            onClick={() => navigateMonth(1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            →
          </button>
        </div>
      </div>

      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold text-gray-700">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}

        {days.map((date, index) => {
          const status = getCompletionStatus(date);
          const isToday = date && date.toDateString() === new Date().toDateString();

          return (
            <div
              key={index}
              className={`aspect-square p-1 flex items-center justify-center text-sm relative ${
                date ? 'cursor-pointer hover:bg-gray-50' : ''
              }`}
            >
              {date && (
                <>
                  <span className={`font-medium ${isToday ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
                    {date.getDate()}
                  </span>
                  {status && (
                    <div
                      className={`absolute bottom-1 right-1 w-2 h-2 rounded-full ${
                        status === 'full' ? 'bg-green-500' :
                        status === 'partial' ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}
                    />
                  )}
                  {isToday && (
                    <div className="absolute inset-0 border-2 border-blue-500 rounded-lg" />
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span>All habits completed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <span>Some habits completed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
          <span>No habits completed</span>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;