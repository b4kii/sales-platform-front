export const Container = ({ children }) => {
  return (
    <div className="flex gap-8 bg-white py-10 px-4 dark:bg-slate-600 lg:px-32">
      {children}
    </div>
  );
};
