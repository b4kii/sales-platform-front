export const CategoryContainer = ({ children }) => {
  return (
    <div className="flex gap-8 h-screen bg-white py-10 px-10 dark:bg-slate-600 lg:px-40">
      {children}
    </div>
  );
};
