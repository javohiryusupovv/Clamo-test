export default function Loading() {
    return (
      <div className="fixed top-0 left-0 overflow-hidden w-full h-full z-50 flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  