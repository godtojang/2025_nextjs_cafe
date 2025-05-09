"use client";
import { motion } from "motion/react";
import Container from "../common/layout/Container";
import Image from "next/image";
import Paragraph from "../common/typography/Paragraph";

const Snapshot = () => {
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
    <Container className="h-screen flex gap-20 py-10 px-8 md:px-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="flex gap-20 h-screen"
        variants={containerVariant}
      >
        <motion.div
          className="flex-2 flex flex-col gap-20"
          variants={fadeSlideUpVariant}
        >
          <div className="block text-2xl">
            흐르는 시간 동안 차곡차곡 쌓인 신뢰
            <br />
            동반 파트너로 이어온 끈끈한 우정
            <br />
            브라질 내 단일 커피 농장으로 최대 규모인
            <br />
            이파네마 농장의 특별한 원두 품질
          </div>
          <div className={`h-[300px] w-full relative`}>
            <Image alt="" className="object-cover" fill src={"/coffee_1.jpg"} />
          </div>
          <Paragraph>
            이것이
            <br />
            이파네마와 우리의 10년입니다.
          </Paragraph>
        </motion.div>
      </motion.div>
      <div className="flex gap-4 w-full h-full">
        <div className={"h-full flex-1 relative"}>
          <Image alt="" className="object-cover" fill src={"/coffee_3.jpg"} />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className={"h-[300px] flex-1 relative"}>
            <Image alt="" className="object-cover" fill src={"/coffee_4.jpg"} />
          </div>
          <div className={"h-[300px] flex-1 relative"}>
            <Image alt="" className="object-cover" fill src={"/coffee_5.jpg"} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Snapshot;
