'use client';
import { motion } from 'framer-motion';

const AccessRequests: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      UNDER CONSTRUCTION
    </motion.div>
  );
};

export default AccessRequests;
