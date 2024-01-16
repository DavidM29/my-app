import { motion } from "framer-motion";

export default function PostCard({ item }) {
  return (
    <motion.div
      key={item.id}
      className="post-card"
      whileHover={{ y: -5 }} // Move up 5 pixels on hover
    >
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </motion.div>
  );
}