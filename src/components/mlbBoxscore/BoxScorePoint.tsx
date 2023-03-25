import classNames from "classnames";

interface props {
  point: number;
  className?: string;
}

export default function BoxScorePoint({ point, className }: props) {
  return (
    <div className={`flex-grow w-24 text-center justify-center ${classNames(className)}`}>
      <h1 className="text-4xl">{point}</h1>
    </div>
  );
}


