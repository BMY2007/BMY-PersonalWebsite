"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-black text-white">
      {/* Hero 首页 */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            你好！这里是比目鱼！
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            我用代码构建智能系统，用想象力创造世界
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push("/projects")}
              className="rounded-2xl px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              我的项目
            </button>
            <button
              onClick={() => router.push("/about")}  // 修改为跳转到“关于我”页面
              className="rounded-2xl px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              摸摸鱼！
            </button>
          </div>
        </motion.div>

        {/* 背景光效 */}
        <div className="absolute inset-0 -z-10">
          <div className="w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full absolute top-[100px] left-[100px]" />
          <div className="w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full absolute bottom-[100px] right-[100px]" />
        </div>
      </div>

      {/* Projects 项目展示区 */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">体验模块</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* 项目卡片 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/5 rounded-2xl backdrop-blur cursor-pointer"
            onClick={() => router.push("/projects/click-fish")} // 可跳转到详情页
          >
            <h3 className="text-xl font-semibold mb-2">摸鱼模块</h3>
            <p className="text-gray-400 text-sm">
            点击放松一下，记录你的摸鱼次数。
            </p>
          </motion.div>

          {/* 项目卡片 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/5 rounded-2xl backdrop-blur cursor-pointer"
            onClick={() => router.push("/projects/speech")}
          >
            <h3 className="text-xl font-semibold mb-2">简单语音识别</h3>
            <p className="text-gray-400 text-sm">
              实时语音转文字
            </p>
          </motion.div>

          {/* 项目卡片 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/5 rounded-2xl backdrop-blur cursor-pointer"
            onClick={() => router.push("/projects/card-game")}
          >
            <h3 className="text-xl font-semibold mb-2">卡牌战斗</h3>
            <p className="text-gray-400 text-sm">
              见识一下我的奇思妙想
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 pb-6">
        © 2026 JiBaoqing_BMY
      </footer>
    </div>
  );
}