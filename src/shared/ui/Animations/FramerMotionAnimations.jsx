import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const Appearance = ({
  children,
  horizontal = false,
  reverse = false,
  noTranslate = false,
  delay = 0.2,
  distance = 40,
  Component = Box,
  sx,
  ...props
}) => {
  const variants = horizontal
    ? {
        visible: { opacity: 1, x: 0 },
        hidden: {
          x: noTranslate ? 0 : reverse ? -distance : distance,
        },
      }
    : {
        visible: { opacity: 1, y: 0 },
        hidden: {
          y: noTranslate ? 0 : reverse ? -distance : distance,
        },
      };

  return (
    <Component
      component={motion.div}
      initial={"hidden"}
      transition={{ delay: delay, duration: 0.2 }}
      viewport={{ once: true }}
      whileInView="visible"
      variants={variants}
      sx={sx}
      {...props}
    >
      {children}
    </Component>
  );
};
export const FadeAppearance = ({ children, delay = 0, sx, ...props }) => {
  return (
    <Component
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, duration: 0.1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: delay }}
      sx={sx}
      {...props}
    >
      {children}
    </Component>
  );
};
export const AppearanceList = ({
  children,
  noTranslate = false,
  delay = 0.2,
}) => {
  const item = {
    hidden: { y: noTranslate ? 0 : 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: delay },
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {children.map((el, index) => (
        <motion.div key={index} variants={item}>
          {el}
        </motion.div>
      ))}
    </motion.div>
  );
};
