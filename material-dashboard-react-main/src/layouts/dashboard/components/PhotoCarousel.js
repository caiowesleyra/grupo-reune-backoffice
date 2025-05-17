// src/layouts/dashboard/components/PhotoCarousel.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Imagens (tamanho 1280x720 pode ser usado com objectFit)
const images = ["/fotos-reune/acao1.png", "/fotos-reune/acao2.png", "/fotos-reune/acao3.png"];

function PhotoCarousel() {
  return (
    <Card sx={{ backgroundColor: "primary.main", color: "white.main" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" color="white">
          Ações Sociais Recentes
        </MDTypography>
      </MDBox>
      <Box sx={{ height: "300px", position: "relative" }}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay, Pagination]}
          style={{ height: "100%" }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={src}
                alt={`Foto ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Card>
  );
}

export default PhotoCarousel;
