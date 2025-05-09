"use client";
import { motion } from "motion/react";
import Container from "../common/layout/Container";
import Paragraph from "../common/typography/Paragraph";

const Vibes = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeSlideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Container className="h-screen gap-20 py-10 px-8 md:px-0">
      <motion.div
        viewport={{ once: true, amount: 0.8 }}
        initial="hidden"
        whileInView="visible"
        variant={containerVariant}
        className="h-full flex flex-col items-center justify-center gap-10 text-center"
      >
        <motion.p>
          <Paragraph>
            지구 반 바퀴를 돌아 닿은 그곳,
            <br />
            해발 1200M 고산지대에 있는 이파네마 농장.
          </Paragraph>
        </motion.p>
        <motion.p>
          <Paragraph>
            커피 전문가들이 직접 선정하고
            <br />
            공장에서 직거래로 공급한 신선한 생두와
            <br />
            최첨단 시설에서 로스팅 해 더욱 맛있는 원두를
            <br />
            카페베네에서 만나보세요!
          </Paragraph>
        </motion.p>
        <motion.p>
          <Paragraph>
            우리 동네 숨은 스페셜티 블렌드 맛집, 여기는 카페베네입니다.
          </Paragraph>
        </motion.p>
      </motion.div>
    </Container>
  );
};

export default Vibes;
