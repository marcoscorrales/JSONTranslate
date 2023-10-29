'use client'
import React, { useState, ChangeEvent } from "react";
const TranslationResult = () => {

    const [language, setLanguage] = useState<string>("EN");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setLanguage(e.target.value);
    };
  return (
    <form className="flex flex-col gap-4">
      <label>Target JSON</label>
      <textarea
        className="w-full min-w-[400px] h-full min-h-[200px] p-4 text-sm border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white"
      />
      <input
        type="text"
        className="bg-transparent border border-gray-600 dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white rounded-md text-base p-1"
        placeholder="Specify the target language" value={language} onChange={handleInputChange}
      ></input>
    </form>
  );
};

export default TranslationResult;
