interface ISectionProps {
  pageNum: number;
}

const Section = (props: ISectionProps) => {
  return <div className="w-screen h-screen">Page {props.pageNum}</div>;
};

export default Section;
