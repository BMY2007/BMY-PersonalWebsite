"use client";

import { useState, useRef } from "react";

export default function SpeechPage() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("当前浏览器不支持语音识别");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "zh-CN"; // 中文识别
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onresult = (event: any) => {
      let result = "";
      for (let i = 0; i < event.results.length; i++) {
        result += event.results[i][0].transcript;
      }
      setText(result);
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold mb-6">
        🎤 实时语音转文字
      </h1>

      {/* 显示识别文本 */}
      <div className="w-full max-w-2xl bg-white/5 rounded-2xl p-6 mb-6 min-h-[120px]">
        {text || "点击开始录音..."}
      </div>

      {/* 按钮 */}
      <div className="flex gap-6">

        <button
          onClick={startListening}
          className="px-6 py-3 bg-green-500 rounded-2xl"
        >
          开始录音
        </button>

        <button
          onClick={stopListening}
          className="px-6 py-3 bg-red-500 rounded-2xl"
        >
          停止
        </button>

      </div>

      {/* 状态 */}
      <p className="mt-6 text-gray-400">
        {listening ? "🎧 正在监听中..." : "⏸ 未录音"}
      </p>
      <button
    onClick={() => window.history.back()}
    className="rounded-2xl px-6 py-3 border border-white hover:bg-white hover:text-black transition"
  >
    ← 返回首页
  </button>

    </div>
  );
}