"use client";
import { motion } from "motion/react";

const While = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
    ></motion.div>
  );
};

export default While;
