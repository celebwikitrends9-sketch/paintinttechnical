"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PenToolIcon as Tool, Shield, Award } from "lucide-react"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and then hide the preloader
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            </div>
          </div>

          {/* Animated circles in background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0, x: "10%", y: "10%" }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -right-[10%] -bottom-[10%] w-[40%] h-[40%] rounded-full bg-blue-700/10"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, x: "-10%", y: "-10%" }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="absolute -left-[10%] -top-[10%] w-[30%] h-[30%] rounded-full bg-blue-600/10"
            ></motion.div>
          </div>

          {/* Content container */}
          <div className="relative z-10 max-w-3xl px-6 py-12">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex justify-center mb-8"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div className="text-blue-300 w-8 h-8 md:w-10 md:h-10">
                  <Tool className="w-full h-full" />
                </div>
              </div>
            </motion.div>

            {/* Main text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-6"
            >
              <h1 className="text-3xl md:text-5xl font-light text-white mb-2 tracking-wider">
                <span className="font-normal">Bilal</span> <span className="font-light">Technical</span>{" "}
                <span className="font-light">Services</span>
              </h1>

              {/* Animated line */}
              <div className="relative h-0.5 w-full max-w-md mx-auto my-6 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                ></motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-blue-200 text-lg md:text-xl tracking-[0.25em] uppercase font-light"
              >
                United Arab Emirates
              </motion.p>
            </motion.div>

            {/* Service icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center gap-8 mb-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                  <Tool className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-xs text-blue-200/70">Quality</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-xs text-blue-200/70">Reliability</span>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                className="flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-xs text-blue-200/70">Excellence</span>
              </motion.div>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center"
            >
              <div className="relative w-48 h-1 bg-blue-900/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
