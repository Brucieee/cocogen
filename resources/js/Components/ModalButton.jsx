export default function ModalButton({ text, onClick }) {
    return (
      <button
        onClick={onClick}
        className="flex w-[408px] h-[44px] px-[20px] py-[10px] justify-center items-center gap-[10px] bg-[#008080] text-white font-inter text-[16px] font-medium leading-[24px]"
      >
        {text}
        Get A Quote
      </button>
    );
  }