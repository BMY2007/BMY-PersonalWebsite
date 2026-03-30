"use client";

import { motion } from "framer-motion";

export default function Cardgame() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* ===== 背景氛围 ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[600px] h-[600px] bg-purple-500 opacity-20 blur-3xl rounded-full absolute top-[-200px] left-[-200px]" />
        <div className="w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full absolute bottom-[-200px] right-[-200px]" />
      </div>

      {/* ===== 世界标题 ===== */}
      <div className="h-[50vh] flex flex-col items-center justify-start pt-24 px-6 relative overflow-hidden">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          卡牌世界 · 序章
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 max-w-2xl text-lg leading-relaxed"
        >
          在这个世界中，人类通过卡牌操控“卡兽”，借由它们的力量战斗、成长、甚至统治世界。  
          然而，随着力量的滥用，卡兽与人类之间的信任逐渐崩塌……
        </motion.p>
      </div>

      {/* ===== 主角介绍 ===== */}
      <div className="mt-32 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">傅玉</h2>
          <p className="text-gray-400 leading-relaxed">
            她的父亲曾是传说级卡牌大师，却在一场神秘事件中陨落。  
            同时消失的，还有那只传说中的卡兽——弗廊帝尔。  
            傅继承了天赋，却失去了过去，她踏上了寻找真相的道路。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="p-6 bg-white/5 rounded-2xl backdrop-blur"
        >
          <h3 className="text-xl mb-3">能力特征</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• 天赋极高的卡牌操控能力</li>
            <li>• 对卡兽有异常敏锐的感知</li>
            <li>• 隐藏的“高阶卡兽契约”</li>
          </ul>
        </motion.div>

      </div>

      {/* ===== 世界设定 ===== */}
      <div className="mt-32 px-6 max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-10"
        >
          世界规则
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">卡牌战斗</h3>
            <p className="text-gray-400 text-sm">
              通过卡牌召唤卡兽进行战斗，胜者获得能量与排名。
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">卡兽契约</h3>
            <p className="text-gray-400 text-sm">
              卡兽并非工具，而是拥有意识的存在。
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">王者之战</h3>
            <p className="text-gray-400 text-sm">
              最强者将登上“卡牌王”的宝座。
            </p>
          </div>

        </div>
      </div>

      {/* ===== 进入世界按钮 ===== */}
      <div className="mt-32 flex justify-center gap-10 pb-20">
  
  <motion.button
    whileHover={{ scale: 1.1 }}
    className="px-20 py-4 bg-white text-black rounded-2xl text-lg font-semibold"
  >
    进入卡牌世界
  </motion.button>

  <button
    onClick={() => window.history.back()}
    className="rounded-2xl px-6 py-3 border border-white hover:bg-white hover:text-black transition"
  >
    ← 返回首页
  </button>

</div>

    </div>
  );
}