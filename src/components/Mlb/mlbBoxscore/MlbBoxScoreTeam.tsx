import Skeleton from "../../Skeleton";
import BoxScorePoint from "./BoxScorePoint";

interface props {
  team: string;
  scores: number[] | any;
  runs: number;
  hits: number;
  errors: number;
  isLoading?: boolean;
}

export default function MlbBoxScoreTeam({
  team,
  scores,
  runs,
  hits,
  errors,
  isLoading,
}: props) {
  const showScores = () => {
    return (
      <>
        {scores.map((score: any, index: any) => {
          return <BoxScorePoint key={index} point={score} />;
        })}
        <BoxScorePoint className="bg-white" point={runs} />
        <BoxScorePoint className="bg-white" point={hits} />
        <BoxScorePoint className="bg-white" point={errors} />
      </>
    );
  };
  return (
    <>
      <td className="bg-gray-100 pl-2 font-bold">{team}</td>

      {isLoading ? <Skeleton /> : showScores()}
    </>
  );
}
