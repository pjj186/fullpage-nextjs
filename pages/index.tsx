import Buttons from "@/components/Buttons";
import Section from "@/components/Section";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export interface IPageObj {
  pageNum: number;
  bgColor: string;
}

const pageObjArray = [
  { pageNum: 1, bgColor: "bg-[#ffeaa7]" },
  { pageNum: 2, bgColor: "bg-[#fab1a0]" },
  { pageNum: 3, bgColor: "bg-[#fdcb6e]" },
  { pageNum: 4, bgColor: "bg-[#e17055]" },
];

const Home = () => {
  const [windowObj, setWindowObj] = useState<Window>();
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const totalNum = pageObjArray.length;
  const pageRefs = useRef<HTMLDivElement[]>([]); // 0번 인덱스 비어있음

  useEffect(() => {
    if (window !== undefined) {
      setWindowObj(window);
    }
  }, []);

  // 페이지 변경 함수
  const handlePageChange = (event: Event) => {
    let scroll = windowObj?.scrollY!;
    for (let i = 1; i <= totalNum; i++) {
      // 스크롤이 해당 섹션에 진입했는지 판단 && 해당 스크롤이 해당 섹션에 머물러 있는지
      if (
        scroll > pageRefs.current[i].offsetTop - windowObj!.outerHeight / 3 &&
        scroll <
          pageRefs.current[i].offsetTop -
            windowObj!.outerHeight / 3 +
            pageRefs.current[i].offsetHeight
      ) {
        setCurrentPageNum(i);
        break;
      }
    }
  };

  // 버튼 클릭
  const handlePointClick = (pageNum: number) => {
    windowObj?.scrollTo({
      top: pageRefs.current[pageNum].offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    windowObj?.addEventListener("scroll", handlePageChange);
    return () => {
      windowObj?.removeEventListener("scroll", handlePageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowObj]);

  return (
    <>
      <Head>
        <title>Full Page App</title>
      </Head>
      <main className="relative">
        {pageObjArray.map((item, index) => {
          return (
            <Section
              key={index}
              pageNum={item.pageNum}
              bgColor={item.bgColor}
              window={windowObj!}
              pageRefs={pageRefs}
            />
          );
        })}
        <span className="fixed top-0 right-0 mx-auto text-4xl">
          현재 페이지는 {currentPageNum} 입니다.
        </span>
        <div className="flex flex-col space-y-4 fixed top-96 right-10 z-10">
          <Buttons
            pageObjArray={pageObjArray}
            currentPageNum={currentPageNum}
            handlePointClick={handlePointClick}
          />
        </div>
      </main>
    </>
  );
};

export default Home;
