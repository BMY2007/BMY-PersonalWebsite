// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* 内容容器 */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            关于我
          </h1>
          <p className="text-gray-400 text-lg">用代码构建智能，用想象力创造世界</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 左侧：头像/形象图 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
            <Image
              src="/images/avatar.jpg"
              alt="我的头像"
              width={150}
              height={150}
              className="object-cover rounded-2xl"
              priority
            />
          </div>
            {/* 装饰光效 */}
            <div className="absolute -inset-4 bg-purple-500/20 blur-2xl -z-10 rounded-full" />
          </motion.div>

          {/* 右侧：介绍文字 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-xl font-semibold mb-6">👋 嗨，我是BMY</h2>
              <p className="text-gray-300 leading-relaxed">
                很高兴见到你，我的朋友。我的自设如头像一样的蓝色耳廓狐，我喜欢研究新东西，喜欢创作，喜欢画画。为人幽默风趣，不介意交友！
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">✨ 我的理念</h3>
              <p className="text-gray-300 leading-relaxed">
                技术不是冰冷的代码，而是想象力落地的翅膀。我相信每一个天马行空的想法，都可以通过AI与代码变成现实。
                
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">🎯 核心能力</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300">
                <li className="flex items-center gap-2">🤖 AI模型开发</li>
                <li className="flex items-center gap-2">💬语音识别技术</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">📬 联系我</h3>
              <p className="text-gray-300 mb-6">
                如果你有有趣的想法或者合作意向，欢迎通过以下方式找到我：
              </p>
              <div className="flex gap-4 mt-3">
                {/* 你可以替换为真实的社交链接 */}
                <button
                onClick={() => {
                const user = '3459265364';
                const domain = 'qq.com';
                alert(`我的邮箱：${user}@${domain}`);
                    }}
                className="text-purple-400 hover:text-purple-300 transition"
                >
                   邮箱
                </button>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  GitHub
                </a>
                
              </div>
            </div>
          </motion.div>
        </div>

        {/* 底部返回按钮 */}
        <div className="mt-20 text-center">
          <button
            onClick={() => window.history.back()}
            className="rounded-2xl px-6 py-3 border border-white hover:bg-white hover:text-black transition"
          >
            ← 返回首页
          </button>
        </div>
      </div>

      {/* 背景装饰光效 */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />
      </div>
    </div>
  );
}