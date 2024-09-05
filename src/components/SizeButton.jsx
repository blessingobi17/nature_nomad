const SizeButton = ({ item, selectedItem, handleSizeSelect, sizeBtns }) => {
  return (
    <main className="absolute bottom-8 px-4 w-full">
      {selectedItem === item && (
        <div
          className={
            sizeBtns
              ? "bg-white text-black dark:bg-slate-950 dark:text-white w-full flex justify-between py-1 px-2"
              : "hidden"
          }
        >
          {selectedItem.sizes.map((size) => (
            <button
              key={size}
              className="w-12 py-3 hover:bg-gray-200 dark:hover:text-black font-medium"
              onClick={() => handleSizeSelect(size, selectedItem)}
            >
              {size}
            </button>
          ))}
        </div>
      )}
    </main>
  );
};

export default SizeButton;
