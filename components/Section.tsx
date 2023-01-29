import { useEffect, useState } from "react";

interface ISectionProps {
  pageNum: number;
  bgColor: string;
}

const Section = (props: ISectionProps) => {
  const [windowObj, setWindowObj] = useState<Window>();
  useEffect(() => {
    if (window !== undefined) {
      setWindowObj(window);
    }
  }, []);

  return (
    <div className={`w-screen h-screen ${props.bgColor}`}>
      <span>Page {props.pageNum}</span>
    </div>
  );
};

export default Section;
