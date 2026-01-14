type Props = {
  onClick: () => void;
};

export default function ChatLauncher({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 shadow-xl flex items-center justify-center text-white text-2xl z-50 hover:bg-blue-700 transition"
      aria-label="Open chat"
    >
      🤖
    </button>
  );
}
