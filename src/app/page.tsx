import TranslationInput from "@/components/TranslationInput";
import TranslationResult from "@/components/TranslationResult";
import { BsTranslate } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">JSON translate</code>
        </p>
      </div>

      <section className="flex w-full max-w-5xl justify-evenly items-center gap-4 border border-gray-300 rounded-xl p-10 mt-4">
        <TranslationInput />
        <button className="flex justify-center items-center w-[60px] h-[60px] border-[1px] rounded-full">
          <BsTranslate size={35} />
        </button>
        <TranslationResult />
      </section>
    </main>
  );
}
