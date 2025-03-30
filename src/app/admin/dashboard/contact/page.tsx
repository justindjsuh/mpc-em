'use client';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      If you see any bugs or want to ask for specific features, all requests and questions can be sent to either jonathan.s.back@gmail.com (EM Pastor) or justindjsuh@gmail.com (developer).
    </motion.div>
  );
};

export default Contact;
