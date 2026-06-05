import HabitItem from './HabitItem';

function HabitList({ habits, completions, onToggleComplete, onEditHabit, onDeleteHabit }) {
  const today = new Date().toISOString().split('T')[0];

  const getStreak = (habitId) => {
    const habitCompletions = completions[habitId] || [];
    if (!habitCompletions.includes(today)) return 0;

    let streak = 0;
    let date = new Date(today);
    while (habitCompletions.includes(date.toISOString().split('T')[0])) {
      streak++;
      date.setDate(date.getDate() - 1);
    }
    return streak;
  };

  const totalStreaks = habits.reduce((sum, habit) => sum + getStreak(habit.id), 0);
  const longestStreak = habits.length > 0 ? Math.max(...habits.map(habit => getStreak(habit.id))) : 0;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="text-2xl mr-3">📋</div>
          <h2 className="text-2xl font-semibold text-gray-800">Your Habits</h2>
        </div>
        {habits.length > 0 && (
          <div className="text-right">
            <div className="text-sm text-gray-600">Total Streaks</div>
            <div className="text-lg font-bold text-orange-600">{totalStreaks} 🔥</div>
            <div className="text-xs text-gray-500">Longest: {longestStreak} days</div>
          </div>
        )}
      </div>

      {habits.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4 opacity-50">🎯</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No habits yet</h3>
          <p className="text-gray-500">Add your first habit above to get started!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {habits.map((habit) => (
            <HabitItem
              key={habit.id}
              habit={habit}
              isCompletedToday={(completions[habit.id] || []).includes(today)}
              streak={getStreak(habit.id)}
              onToggleComplete={onToggleComplete}
              onEdit={onEditHabit}
              onDelete={onDeleteHabit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HabitList;