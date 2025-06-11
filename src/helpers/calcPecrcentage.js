export function calcPercentage(tasks = []) {
  //  Completed tasks
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  // All tasks
  const totalTasks = tasks.length;

  // Calculate completion percentage
  const completionPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Progress bar stroke based on percentage
  const progressStrokeDasharray = `${completionPercentage} 100`;

  return {
    progressStrokeDasharray,
    completionPercentage,
  };
}
