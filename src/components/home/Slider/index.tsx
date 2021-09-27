import { Box, useBreakpointValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { Slide } from './Slide';

SwiperCore.use([Pagination, Navigation]);

export default function Slider() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box w="100vw" maxW={1440} px={['0', null, '24']}>
      <Swiper
        style={
          isWideVersion ? { height: '28.125rem' } : { height: '15.625rem' }
        }
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <Slide
            image="europe-slider.jpg"
            title="Europa"
            subtitle="O continente mais antigo"
            href="/europe"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image="night-sky.jpg" title="Ásia" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
