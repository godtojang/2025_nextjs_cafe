"use client";
import Paragraph from "@/components/common/typography/Paragraph";
import While from "@/components/common/While";
import Jumbotron from "@/components/story/Jumbotron";
import Snapshot from "@/components/story/SnapShot";
import Vibes from "@/components/story/Vibes";

const Page = () => {
  return (
    <>
      <Jumbotron />
      <Snapshot />
      <Vibes />
      <While>
        <Paragraph></Paragraph>
      </While>
    </>
  );
};

export default Page;
