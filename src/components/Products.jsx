import  { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

export default function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "Arqu executive and its employees continue to receive orders for customers and customers thet get orders for customers that ",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arqu executive and its employees continue to receive orders for customers and customers thet get orders for customers that ",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arqu executive and its employees continue to receive orders for customers and customers thet get orders for customers that ",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Arqu executive and its employees continue to receive orders for customers and customers thet get orders for customers that ",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  var img = [
    
      "https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRlY2h8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    
  ];

  return (
    <div className="mt-3 relative">
      {products.map((val, index) => (
        <Product val={val} key={index} mover={mover} count={index} />
      ))}
      <div className=" absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" w-[28rem] h-[23rem]  absolute left-[44%]  overflow-hidden   "
        >
       <motion.div
           inimate={{ y: -pos + `rem` }}
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
           className="window w-full h-full   "
         ><img className="w-full h-full" src={img[0]} alt="" /> </motion.div>
         <motion.div
           inimate={{ y: -pos + `rem` }}
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
           className="window w-full h-full   "
         ><img className="w-full h-full" src={img[1]} alt="" /> </motion.div>
         <motion.div
           inimate={{ y: -pos + `rem` }}
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
           className="window w-full h-full   "
         ><img className="w-full h-full" src={img[2]} alt="" /> </motion.div>
         <motion.div
           inimate={{ y: -pos + `rem` }}
           transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
           className="window w-full h-full   "
         ><img className="w-full h-full" src={img[3]} alt="" /> </motion.div>
          
        </motion.div>
      </div>
    </div>
  );
}
