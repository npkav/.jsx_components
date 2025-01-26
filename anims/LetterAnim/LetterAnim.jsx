import {motion} from "framer-motion";


const LetterAnim = ({text}) => {
  const letters = text.split('');

  return (
    <div style = {{display: 'flex'}}>
      
      {letters.map((letter, index) => (
        
        // change anim params here
        <motion.div
          initial = {{y: 10, x: -5, opacity: 0}}
          animate = {{y: 0, x: 0, opacity: 1}}
          transition = {{
            duration: 0.25,
            delay: index * 0.05,
          }}
        >
          
          {letter}
          
        </motion.div>
      ))}
    </div>
  );
};

export default LetterAnim;

// example usage:
// <LetterAnim text = "Hello." />
