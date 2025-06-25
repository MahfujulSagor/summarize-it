import { CheckCheck, Copy, Sun } from "lucide-react"

import "./style.css"

import { GoogleGenAI } from "@google/genai"
import React, { useState } from "react"
import { GridLoader } from "react-spinners"

const ai = new GoogleGenAI({ apiKey: process.env.PLASMO_PUBLIC_GEMINI_API_KEY })

function IndexPopup() {
  const [clicked, setClicked] = useState(false)
  const [summary, setSummary] = useState("Hello")
  const [loading, setLoading] = useState(false)

  const getPageText = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    })

    let [{ result: pageText }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.innerText
    })

    pageText = pageText.slice(0, 4000)
    return pageText
  }

  const handleSummarize = async () => {
    setLoading(true)

    try {
      const pageText = await getPageText();

      if (!pageText) {
        setSummary("⚠️ No text found on this page to summarize.")
        setLoading(false)
        return
      }

      const res = await fetch(`${process.env.PLASMO_PUBLIC_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ pageText })
      });

      const data = await res.json();
      setSummary(data.summary || "No summary generated.");

    } catch (error) {
      console.error(error)
      setSummary("⚠️ An error occurred while summarizing. Please try again.")
    }

    setLoading(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(summary)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 2000)
  }

  return (
    <div className="w-[450px] max-h-[450px] pt-10 ">
      <nav className="bg-slate-800 fixed top-0 left-0 right-0 text-white flex justify-between item-center py-4 px-2">
        <div className="text-2xl font-semibold ">SummarizeIt</div>
        <div className=" flex text-2xl">
          <div className="flex justify-center items-center cursor-pointer">
            <Sun />
          </div>
        </div>
      </nav>

      {loading ? (
        <div className="my-10 text-center">
          <GridLoader color="#14b8a6" />
        </div>
      ) : summary ? (
        <div className=" flex flex-col gap-4 my-10 text-lg px-2 overflow-hidden min-h-[350px]">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-black">Summary</div>
            <div
              className="flex justify-end items-center"
              onClick={handleCopy}>
              {clicked ? (
                <CheckCheck className="cursor-pointer text-teal-600" />
              ) : (
                <Copy className="cursor-pointer" />
              )}
            </div>
          </div>
          <div className="py-4 markdown-body ">
            {summary}
          </div>
        </div>
      ) : (
        <div className="my-10  ">
          <div className="text-xl font-medium text-center my-4 ">
            Do you want to summarize this page?
          </div>
          <div className="flex justify-center items-center ">
            <button
              onClick={handleSummarize}
              className="bg-teal-400/60 py-2 px-4 text-lg border rounded-lg ">
              Summarize
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPopup
