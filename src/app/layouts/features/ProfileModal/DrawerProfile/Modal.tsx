import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import { Box } from "@mui/material";
import { useColors } from "@/shared/hooks/useColors";

export const ModalProfile = ({ isOpen, onClose, children, sx }) => {
  const colors = useColors();
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
              borderRadius: { xs: 0, sm: 10 }, //закругления профиля
              maxWidth: 425,
              height: "100%",
              overflowY: "scroll",
              "::-webkit-scrollbar": {
                display: "none",
              },
              display: "flex",
              flexDirection: "column",
              boxShadow: colors.boxShadow,
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
