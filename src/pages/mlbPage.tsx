import { useEffect, useState } from "react";
import { useQueryClient, useQuery } from "react-query";

import MlbBoxScoreInnings from "../components/mlbBoxscore/MlbBoxScoreInnings";
import MlbBoxScoreTeam from "../components/mlbBoxscore/MlbBoxScoreTeam";

interface AwayTeamData {
  awayTeamName: string;
  awayScores: number[];
  awayHits: number;
  awayRuns: number;
  awayErrors: number;
}

const awayTeamInitialData: AwayTeamData = {
  awayTeamName: "",
  awayScores: [],
  awayRuns: 0,
  awayHits: 0,
  awayErrors: 0,
};
interface HomeTeamData {
  homeTeamName: string;
  homeScores: number[];
  homeHits: number;
  homeRuns: number;
  homeErrors: number;
}

const homeTeamInitialData: HomeTeamData = {
  homeTeamName: "",
  homeScores: [],
  homeRuns: 0,
  homeHits: 0,
  homeErrors: 0,
};

export default function MlbPage() {
  const [awayData, setAwayData] = useState<AwayTeamData>(awayTeamInitialData);
  const [homeData, setHomeData] = useState<HomeTeamData>(homeTeamInitialData);

  const { data, isLoading } = useQuery("mlb", () =>
    fetch("http://127.0.0.1:3000/mlb").then((res) => res.json())
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.data);
      const {
        away_period_scores,
        away_errors,
        away_batter_totals,
        away_team,
        home_period_scores,
        home_errors,
        home_batter_totals,
        home_team,
      } = data.data;
      setAwayData({
        awayTeamName: away_team.abbreviation,
        awayScores: away_period_scores,
        awayHits: away_batter_totals.hits,
        awayRuns: away_batter_totals.runs,
        awayErrors: away_errors,
      });
      setHomeData({
        homeTeamName: home_team.abbreviation,
        homeScores: home_period_scores,
        homeHits: home_batter_totals.hits,
        homeRuns: home_batter_totals.runs,
        homeErrors: home_errors,
      });
    }
  }, [isLoading]);
  return (
    <>
      <MlbBoxScoreInnings />
      <MlbBoxScoreTeam
        isLoading={isLoading}
        team={awayData.awayTeamName}
        scores={awayData.awayScores}
        runs={awayData.awayRuns}
        hits={awayData.awayHits}
        errors={awayData.awayErrors}
      />
      <MlbBoxScoreTeam
        isLoading={isLoading}
        team={homeData.homeTeamName}
        scores={homeData.homeScores}
        runs={homeData.homeRuns}
        hits={homeData.homeHits}
        errors={homeData.homeErrors}
      />
    </>
  );
}
