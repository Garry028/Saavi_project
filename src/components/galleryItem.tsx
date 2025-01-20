interface GalleryItemProps {
  text: string;
  onClick: () => void;
  isSelected?: boolean;
}

const GalleryItem = ({ text, onClick, isSelected }: GalleryItemProps) => {
  return (
    <button
      className={`px-4 py-2 rounded transition-all ${
        isSelected
          ? "bg-red-700 text-white border-red-700"
          : "text-red-700 bg-white border-red-700"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GalleryItem;
