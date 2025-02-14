export default function ModalButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full max-w-[408px] h-[44px] px-5 py-2 justify-center items-center gap-2 bg-[#008080] text-white font-inter text-sm md:text-base font-medium rounded-lg transition-all hover:bg-[#006666] active:scale-95"
    >
      {text}
      Get A Quote
    </button>
  );
}
