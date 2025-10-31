import { motion } from "motion/react";

const Courses = () => {
  const courses = [
    { name: "Data Structures", category: "Core" },
    { name: "Database Systems", category: "Core" },
    { name: "Object-Oriented Programming", category: "Core" },
    { name: "Artificial Intelligence", category: "Advanced" },
    { name: "Theory of Computation", category: "Theory" },
    { name: "Linear Algebra", category: "Math" },
    { name: "Statistics & Probability", category: "Math" },
    { name: "Intermediate Programming", category: "Core" },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Core: "from-blue-500/10 to-blue-600/10 border-blue-500/40 hover:border-blue-400",
      Advanced: "from-purple-500/10 to-purple-600/10 border-purple-500/40 hover:border-purple-400",
      Theory: "from-green-500/10 to-green-600/10 border-green-500/40 hover:border-green-400",
      Math: "from-orange-500/10 to-orange-600/10 border-orange-500/40 hover:border-orange-400",
    };
    return colors[category];
  };

  const getCategoryBadgeColor = (category) => {
    const colors = {
      Core: "bg-blue-500/20 text-blue-300",
      Advanced: "bg-purple-500/20 text-purple-300",
      Theory: "bg-green-500/20 text-green-300",
      Math: "bg-orange-500/20 text-orange-300",
    };
    return colors[category];
  };

  return (
    <div className="relative flex flex-col w-full h-full p-4 md:p-6">
      <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl md:mb-4">Relevant Courses</h3>
      
      {/* Grid of courses - 2 columns on mobile, 4 on desktop */}
      <div className="grid flex-1 grid-cols-2 gap-2 md:gap-3 md:grid-cols-4">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
            className={`relative overflow-hidden rounded-lg border bg-gradient-to-br ${getCategoryColor(
              course.category
            )} p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <div className="flex flex-col gap-1 md:gap-2">
              <span className={`text-[9px] md:text-[10px] font-semibold uppercase tracking-wide ${getCategoryBadgeColor(course.category)} px-1.5 md:px-2 py-0.5 md:py-1 rounded-full w-fit`}>
                {course.category}
              </span>
              <span className="text-xs font-medium leading-tight text-white md:text-sm">
                {course.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;