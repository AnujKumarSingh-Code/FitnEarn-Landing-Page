const TypewriterAnimation = ({ text }) => {
    const words = text.split(" "); // Split text into words
  
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-wrap"  // Ensures wrapping
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05, // Delay between each word
            },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-flex whitespace-nowrap mr-2"  // Space between words
            variants={{
              hidden: { opacity: 0, y: "100%" },
              visible: { opacity: 1, y: "0%" },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  