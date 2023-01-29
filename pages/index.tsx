import Section from "@/components/Section";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const pageObjArrays = [
  { pageNum: 1, bgColor: "bg-[#ffeaa7]" },
  { pageNum: 2, bgColor: "bg-[#fab1a0]" },
  { pageNum: 3, bgColor: "bg-[#fdcb6e]" },
  { pageNum: 4, bgColor: "bg-[#e17055]" },
];

const Home = () => {
  const [windowObj, setWindowObj] = useState<Window>();
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const totalNum = pageObjArrays.length;
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
      console.log(i);
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

  useEffect(() => {
    windowObj?.addEventListener("scroll", handlePageChange);
    return () => {
      windowObj?.removeEventListener("scroll", handlePageChange);
    };
  }, [windowObj]);

  return (
    <>
      <Head>
        <title>Full Page App</title>
      </Head>
      <main>
        {pageObjArrays.map((item, index) => {
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
        <span className="fixed top-0 right-0 mx-auto">
          현재 페이지는 {currentPageNum} 입니다.
        </span>
      </main>
    </>
  );
};

export default Home;
