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
        <form className="flex flex-col gap-4">
          <label>Source JSON</label>
          <textarea
            className="w-full min-w-[400px] h-full p-4 text-sm border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white"
            placeholder="Paste your JSON here"
          />
          <input
            type="text"
            className="bg-transparent border border-gray-600 dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white rounded-md text-base p-1"
            placeholder="Specify the source language"
          ></input>
        </form>
        <button className="flex justify-center items-center w-[60px] h-[60px] border-[1px] rounded-full">
          <BsTranslate size={35} />
        </button>
        <form className="flex flex-col gap-4">
          <label>Target JSON</label>
          <textarea
            className="w-full min-w-[400px] h-full p-4 text-sm border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white"
            placeholder="Paste your JSON here"
          />
          <input
            type="text"
            className="bg-transparent border border-gray-600 dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white rounded-md text-base p-1"
            placeholder="Specify the target language"
          ></input>
        </form>
      </section>
    </main>
  );
}
