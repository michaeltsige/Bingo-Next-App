"use client";

import { motion, AnimatePresence } from "framer-motion";

export function LoadingModal({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-bingo-deep-purple flex flex-col items-center justify-center z-[100]"
        >
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-16 h-16 border-4 border-bingo-gold border-t-transparent rounded-full mb-6"
          />
          <p className="text-bingo-gold font-display font-bold tracking-[0.3em] uppercase">
            Loading Game
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
