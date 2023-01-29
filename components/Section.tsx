import { cls } from "@/utils/cls";

interface ISectionProps {
  pageNum: number;
  bgColor: string;
}

const Section = (props: ISectionProps) => {
  return (
    <div className={`w-screen h-screen ${props.bgColor}`}>
      <span>Page {props.pageNum}</span>
    </div>
  );
};

export default Section;
