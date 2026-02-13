import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
export const ModalProfile = ({ isOpen, onClose, children, sx }) => {
  return ReactDOM.createPortal(
    <AnimatePresence initial={isOpen}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4, type: "spring" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            height: "100%",
            width: "100%",
          }}
          onClick={onClose}
        >
          <Box
            id="modal-content"
            sx={{
              background: "white",
              padding: 4,
              borderRadius: 10,
              maxWidth: 425,
              height: "92.5%",

              boxShadow: "5px 0px 7px 0 rgba(0, 0, 0, 0.25)",
              ...sx,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </Box>
        </motion.div>
      )}
    </AnimatePresence>,

    document.getElementById("profile-modal"), // The target DOM node
  );
};
