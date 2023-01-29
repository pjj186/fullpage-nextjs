import Section from "@/components/Section";
import Head from "next/head";

const pageObjArrays = [
  { pageNum: 1, bgColor: "bg-[#ffeaa7]" },
  { pageNum: 2, bgColor: "bg-[#fab1a0]" },
  { pageNum: 3, bgColor: "bg-[#fdcb6e]" },
  { pageNum: 4, bgColor: "bg-[#e17055]" },
];

const Home = () => {
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
            />
          );
        })}
      </main>
    </>
  );
};

export default Home;
