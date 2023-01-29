import Section from "@/components/Section";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Full Page App</title>
      </Head>
      <main>
        {[1, 2, 3, 4].map((item, index) => {
          return <Section key={index} pageNum={item} />;
        })}
      </main>
    </>
  );
};

export default Home;
