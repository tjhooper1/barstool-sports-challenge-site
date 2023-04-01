
import { TeamData } from "../../../types/TeamData";
import MlbBoxScoreTeam from "./MlbBoxScoreTeam";

type MlbBoxScoreInningsProps = {
  homeTeam: TeamData;
  awayTeam: TeamData;
};

export default function MlbBoxScoreInnings({
  homeTeam,
  awayTeam,
}: MlbBoxScoreInningsProps) {
  return (
    <div className="bg-white overflow-x-auto overflow-y-hidden">
      <table className="divide-y w-full">
        <thead>
          <tr>
            <th className="text-sm text-left pr-24 bg-gray-100"></th>
            <th className="text-sm text-center px-2">1</th>
            <th className="text-sm text-center px-2">2</th>
            <th className="text-sm text-center px-2">3</th>
            <th className="text-sm text-center px-2">4</th>
            <th className="text-sm text-center px-2">5</th>
            <th className="text-sm text-center px-2">6</th>
            <th className="text-sm text-center px-2">7</th>
            <th className="text-sm text-center px-2">8</th>
            <th className="text-sm text-center px-2">9</th>
            <th className="text-sm text-center px-2">R</th>
            <th className="text-sm text-center px-2">H</th>
            <th className="text-sm text-center px-2">E</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <MlbBoxScoreTeam
              team={awayTeam.teamName}
              scores={awayTeam.scores}
              runs={awayTeam.runs}
              hits={awayTeam.hits}
              errors={awayTeam.errors}
            />
          </tr>
          <tr>
            <MlbBoxScoreTeam
              team={homeTeam.teamName}
              scores={homeTeam.scores}
              runs={awayTeam.runs}
              hits={awayTeam.hits}
              errors={awayTeam.errors}
            />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
