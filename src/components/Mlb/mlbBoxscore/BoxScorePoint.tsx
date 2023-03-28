import classNames from "classnames";

interface props {
  point: number;
  className?: string;
}

export default function BoxScorePoint({ point, className }: props) {
  return (
    <div className={`bg-white ${classNames(className)}`}>
      <h1 className="">{point}</h1>
    </div>
  );
}


