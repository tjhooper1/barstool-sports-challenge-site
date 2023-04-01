import classNames from "classnames";

interface props {
  point: number;
  className?: string;
}

export default function BoxScorePoint({ point, className }: props) {
  return (
    <td className="text-center">{point}</td>
  );
}


