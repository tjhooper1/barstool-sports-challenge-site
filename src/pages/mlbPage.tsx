import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import HitterScore from "../components/Mlb/hitterScore/HitterScore";
import HitterScoreContainer from "../components/Mlb/hitterScore/HitterScoreContainer";

import MlbBoxScoreInnings from "../components/Mlb/mlbBoxscore/MlbBoxScoreInnings";
import { BatterStats } from "../types/BatterStats";
import { TeamData } from "../types/TeamData";

const teamInitialData: TeamData = {
  teamName: "",
  scores: [],
  runs: 0,
  hits: 0,
  errors: 0,
};

const batterInitialData: BatterStats = {
  first_name: "",
  last_name: "",
  at_bats: 0,
  runs: 0,
  hits: 0,
  rbi: 0,
  walks: 0,
  strike_outs: 0,
  avg_string: ".000",
  obp_string: ".000",
  slg_string: ".000",
};

export default function MlbPage() {
  const [awayData, setAwayData] = useState<TeamData>(teamInitialData);
  const [homeData, setHomeData] = useState<TeamData>(teamInitialData);
  const [awayBatterStats, setAwayBatterStats] = useState<BatterStats[]>([]);

  const { data, isLoading } = useQuery("mlb", () =>
    fetch("http://127.0.0.1:3000/mlb").then((res) => res.json())
  );

  useEffect(() => {
    if (!isLoading && data) {
      console.log(data.data);
      const {
        away_period_scores,
        away_errors,
        away_batter_totals,
        away_batters,
        away_team,
        home_period_scores,
        home_errors,
        home_batter_totals,
        home_team,
      } = data.data;
      console.log("AWAY BATTERS", away_batters);
      setAwayBatterStats(away_batters);
      setAwayData({
        teamName: away_team.abbreviation,
        scores: away_period_scores,
        hits: away_batter_totals.hits,
        runs: away_batter_totals.runs,
        errors: away_errors,
      });
      setHomeData({
        teamName: home_team.abbreviation,
        scores: home_period_scores,
        hits: home_batter_totals.hits,
        runs: home_batter_totals.runs,
        errors: home_errors,
      });
    }
  }, [isLoading, data]);
  return (
    <div className="">
      <MlbBoxScoreInnings homeTeam={homeData} awayTeam={awayData} />

      <HitterScoreContainer>
        {awayBatterStats.length && <HitterScore hitters={awayBatterStats} />}
        {/* <HitterScore hitters={awayBatterStats}/> */}
        {/* <HitterScore /> */}
      </HitterScoreContainer>
    </div>
  );
}
