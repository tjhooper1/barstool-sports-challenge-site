import Skeleton from "../Skeleton";
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
        <BoxScorePoint className="bg-gray-200 border-l-2 border-black border-opacity-10" point={runs} />
        <BoxScorePoint className="bg-gray-200" point={hits} />
        <BoxScorePoint className="bg-gray-200" point={errors} />
      </>
    );
  };
  return (
    <div className="flex w-[90vw] border rounded-bl-md m-auto">
      <div className="max-w-[5rem] min-w-[5rem] flex-grow w-24 text-center rounded-bl-md bg-gray-200 border-r-2 border-black border-opacity-10">
        <h1 className="text-3xl">{!isLoading && team}</h1>
      </div>
      {isLoading ? <Skeleton /> : showScores()}
    </div>
  );
}
