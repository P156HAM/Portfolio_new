interface LoadingProps {
  isLoading: boolean;
}

export const Loading = ({ isLoading }: LoadingProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="text-8xl mb-8 animate-bounce">👋</div>
        <div className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
          Loading Magic...
        </div>
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full animate-pulse"
            style={{ width: "70%" }}
          />
        </div>
      </div>
    </div>
  );
};
