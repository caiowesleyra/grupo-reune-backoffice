import React from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function TargetModal({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <MDTypography variant="h5" gutterBottom>
          CURIOSIDADE
        </MDTypography>

        <MDTypography variant="body2" mb={2}>
          O Bitcoin foi criado por Satoshi Nakamoto em 2008. Veja o vídeo e conheça mais sobre a sua
          história emocionante:
        </MDTypography>

        <MDBox mb={2}>
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/HPq39_pbBk0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </MDBox>

        <MDBox mt={2} display="flex" justifyContent="flex-end">
          <MDButton onClick={handleClose} color="info">
            Fechar
          </MDButton>
        </MDBox>
      </Box>
    </Modal>
  );
}

// ✅ Correção dos avisos do ESLint
TargetModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TargetModal;
