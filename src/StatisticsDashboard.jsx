function StatisticsDashboard({ habits, completions }) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Calculate statistics
  const totalHabits = habits.length;
  const activeHabits = habits.filter(habit => {
    const habitCompletions = completions[habit.id] || [];
    return habitCompletions.length > 0;
  }).length;

  // Current streaks
  const currentStreaks = habits.map(habit => {
    const habitCompletions = completions[habit.id] || [];
    if (!habitCompletions.includes(today.toISOString().split('T')[0])) return 0;

    let streak = 0;
    let date = new Date(today);
    while (habitCompletions.includes(date.toISOString().split('T')[0])) {
      streak++;
      date.setDate(date.getDate() - 1);
    }
    return streak;
  });

  const longestCurrentStreak = Math.max(...currentStreaks, 0);
  const totalCurrentStreaks = currentStreaks.reduce((sum, streak) => sum + streak, 0);

  // Monthly completion rate
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthlyCompletions = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dateStr = date.toISOString().split('T')[0];
    const completed = habits.filter(habit =>
      (completions[habit.id] || []).includes(dateStr)
    ).length;
    monthlyCompletions.push(completed);
  }

  const avgMonthlyCompletion = monthlyCompletions.reduce((sum, comp) => sum + comp, 0) / daysInMonth;
  const monthlyCompletionRate = totalHabits > 0 ? Math.round((avgMonthlyCompletion / totalHabits) * 100) : 0;

  // Best performing habits
  const habitStats = habits.map(habit => {
    const habitCompletions = completions[habit.id] || [];
    const completionRate = habitCompletions.length > 0 ?
      Math.round((habitCompletions.length / Math.max(1, (new Date() - new Date(habit.createdAt)) / (1000 * 60 * 60 * 24))) * 100) : 0;

    return {
      ...habit,
      completionCount: habitCompletions.length,
      completionRate
    };
  }).sort((a, b) => b.completionRate - a.completionRate);

  const topHabits = habitStats.slice(0, 3);

  return (
    <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="text-2xl mr-3">📊</div>
        <h2 className="text-2xl font-semibold text-gray-800">Statistics Dashboard</h2>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">{totalHabits}</div>
          <div className="text-sm text-blue-800">Total Habits</div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
          <div className="text-2xl font-bold text-green-600">{activeHabits}</div>
          <div className="text-sm text-green-800">Active Habits</div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200">
          <div className="text-2xl font-bold text-orange-600">{longestCurrentStreak}</div>
          <div className="text-sm text-orange-800">Longest Streak</div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
          <div className="text-2xl font-bold text-purple-600">{monthlyCompletionRate}%</div>
          <div className="text-sm text-purple-800">Monthly Avg</div>
        </div>
      </div>

      {/* Top Performing Habits */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">🏆 Top Performing Habits</h3>
        <div className="space-y-3">
          {topHabits.map((habit, index) => (
            <div key={habit.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="text-lg mr-3">{habit.icon || '🎯'}</div>
                <div>
                  <div className="font-medium text-gray-800">{habit.name}</div>
                  <div className="text-sm text-gray-600">{habit.completionCount} completions</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-green-600">{habit.completionRate}%</div>
                <div className="text-xs text-gray-500">completion rate</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Progress Chart */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">📈 Monthly Progress</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-end space-x-1 h-20">
            {monthlyCompletions.slice(-14).map((completed, index) => {
              const height = totalHabits > 0 ? (completed / totalHabits) * 100 : 0;
              const isToday = index === monthlyCompletions.slice(-14).length - 1;

              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-500 ${
                      isToday ? 'from-green-400 to-green-600' : ''
                    }`}
                    style={{ height: `${Math.max(height, 5)}%` }}
                  />
                  <div className={`text-xs mt-1 ${isToday ? 'font-bold text-green-600' : 'text-gray-500'}`}>
                    {new Date(currentYear, currentMonth, index + (daysInMonth - 13)).getDate()}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center text-sm text-gray-600 mt-2">
            Last 14 days • {monthlyCompletionRate}% average completion rate
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsDashboard;