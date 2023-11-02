"use client";
import React, { useState, ChangeEvent } from "react";
import { translateText } from "@/api/translate";
import { BsGithub, BsTranslate } from "react-icons/bs";
import logo from "../../public/logo.png";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [dataSource, setDataSource] = useState<string>("");
  const [dataTarget, setDataTarget] = useState<string>("");

  const [languageSource, setLanguageSource] = useState<string>("ES");
  const [languageTarget, setLanguageTarget] = useState<string>("EN");

  const handleInputChangeSource = (e: ChangeEvent<HTMLInputElement>): void => {
    setLanguageSource(e.target.value);
  };

  const handleInputChangeTarget = (e: ChangeEvent<HTMLInputElement>): void => {
    setLanguageTarget(e.target.value);
  };

  const handleTranslate = async () => {
    const translation = await translateText(
      dataSource,
      languageSource,
      languageTarget
    );
    setDataTarget(translation);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 max-[675px]:p-2">
      <ToastContainer />
      <div className="flex justify-between w-full max-w-5xl">
        <div className="flex z-10 max-w-5xl w-full items-center gap-3 text-sm">
          <Image src={logo} alt="logo" className="w-14 h-14" />
          <p className="flex w-auto justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static border bg-gray-200 lg:dark:bg-zinc-800/30">
            <code className="font-bold">JSON translator</code>
          </p>
        </div>
        <p className="flex w-auto justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 backdrop-blur-2xl rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static border bg-gray-200 lg:dark:bg-zinc-800/30">
          <a href="https://github.com/marcoscorrales/JSONTranslate" target="_blank" className="flex items-center gap-2">
            <BsGithub size={25} />
            <code className="font-bold whitespace-nowrap max-[400px]:hidden">
              Star on github
            </code>
          </a>
        </p>
      </div>

      <section className="flex flex-col min-[1174px]:flex-row w-full max-w-5xl justify-evenly items-center gap-4 min-[675px]:border border-gray-300 rounded-xl p-10 mt-4">
        <form className="flex flex-col gap-4">
          <label>Source JSON</label>
          <textarea
            className="w-full min-w-[400px] max-[400px]:min-w-[315px] h-full min-h-[200px] p-4 text-sm border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white outline-none"
            placeholder="Paste your JSON here"
            value={dataSource}
            onChange={(e) => setDataSource(e.target.value)}
          />
          <input
            type="text"
            className="bg-transparent border border-gray-600 dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white rounded-md text-base p-1 outline-none"
            placeholder="Specify the source language"
            value={languageSource}
            onChange={handleInputChangeSource}
          ></input>
        </form>
        <button
          onClick={handleTranslate}
          className="flex justify-center items-center w-[60px] h-[60px] border-[1px] rounded-full"
        >
          <BsTranslate size={35} />
        </button>
        <form className="flex flex-col gap-4">
          <label>Target JSON</label>
          <textarea
            className="w-full min-w-[400px] max-[400px]:min-w-[315px] h-full min-h-[200px] p-4 text-sm border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white outline-none"
            value={dataTarget}
            onChange={(e) => setDataTarget(e.target.value)}
          />
          <input
            type="text"
            className="bg-transparent border border-gray-600 dark:border-neutral-800 dark:bg-zinc-800/30 dark:text-white rounded-md text-base p-1 outline-none"
            placeholder="Specify the target language"
            value={languageTarget}
            onChange={handleInputChangeTarget}
          ></input>
        </form>
      </section>
    </main>
  );
}
