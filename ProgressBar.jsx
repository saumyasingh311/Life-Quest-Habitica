import { useEffect, useState } from 'react';

function ProgressBar({ completed, total }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getProgressColor = () => {
    if (percentage >= 80) return 'bg-gradient-to-r from-green-400 to-green-600';
    if (percentage >= 60) return 'bg-gradient-to-r from-blue-400 to-blue-600';
    if (percentage >= 40) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
    if (percentage >= 20) return 'bg-gradient-to-r from-orange-400 to-orange-600';
    return 'bg-gradient-to-r from-red-400 to-red-600';
  };

  return (
    <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="text-2xl mr-3">📊</div>
          <h2 className="text-xl font-semibold text-gray-800">Today's Progress</h2>
        </div>
        <div className="text-2xl font-bold text-gray-800">{percentage}%</div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
        <div
          className={`h-6 rounded-full transition-all duration-1000 ease-out ${getProgressColor()}`}
          style={{ width: `${animatedPercentage}%` }}
        ></div>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-gray-600">
          <span className="font-semibold text-green-600">{completed}</span> of{' '}
          <span className="font-semibold text-blue-600">{total}</span> habits completed
        </p>
        {percentage === 100 && total > 0 && (
          <div className="text-yellow-500 animate-bounce">🎉</div>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;