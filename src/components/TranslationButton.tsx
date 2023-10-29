import React from 'react';
import { BsTranslate } from "react-icons/bs";

interface TranslationButtonProps {
  onClick: (e: any) => void; 
}

function TranslationButton({ onClick }: TranslationButtonProps) {
  return (
    <button onClick={onClick} className="flex justify-center items-center w-[60px] h-[60px] border-[1px] rounded-full">
    <BsTranslate size={35} />
    </button>
  );
}

export default TranslationButton