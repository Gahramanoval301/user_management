"use client";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, Paper, Stack, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import PropTypes from "prop-types"
 
const MainModal = ({
  children,
  button,
  header = "",
  size = 80,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {button({ handleOpen })}

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        sx={{
          "& .MuiBackdrop-root": {
            bgcolor: "grey.dark",
            opacity: "0.5 !important",
          },
        }}
      >
        <Fade in={open}>
          <Paper
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                // eslint-disable-next-line no-constant-binary-expression
                xs: `${size}%` || "80%",
                // eslint-disable-next-line no-constant-binary-expression
                md: `${size * 0.75}%` || "60%",
              },
              bgcolor: "background.paper",
              boxShadow: 24,
              borderRadius: 1,
              padding: 2.5,
              maxHeight: "95vh",
              overflowY: "scroll",
            }}
          >
            <Stack
              display={header ? "flex" : "none"}
              pb={1.5}
              mb={1.5}
              borderBottom={"1px solid"}
              borderColor={"grey.main"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>{header}</Typography>

              <Button
                variant="outlined"
                sx={{ border: "none", "&:hover": { border: "none" } }}
                onClick={handleClose}
              >
                <CloseOutlinedIcon />
              </Button>
            </Stack>

            {children}
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default MainModal;

MainModal.propTypes ={
    children: PropTypes.any,
    button: PropTypes.any,
    header: PropTypes.string,
    size: PropTypes.number,
}