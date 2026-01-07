import { useEffect } from "react";
import { AverageContainer } from "../../components/AverageContainer";
import { Header } from "../../components/Header";
import { InitialPresentation } from "../../components/InitialPresentation";
import { TrendsContainer } from "../../components/TrendsContainer";
import { useFetchQuery } from "../../Hooks/useFetchQuery";
import { useStepMood } from "../../Hooks/useStepMood";
import { DataSection } from "../../components/DataSection";
import { useLogMood } from "../../contexts/LogMoodContext";


export const HomePage = () => {
 
  const { data, error, isLoading } = useFetchQuery("latest", "fetchLatest");

  return (
    <main className="container my-4">
      <Header />
      <main className="my-4">
        <InitialPresentation latestMood={!!error} loading={isLoading} />
        {!!data && <DataSection lastData={data} />}
        <section className="d-xl-flex gap-4">
          <AverageContainer latestMood={data} />
          <TrendsContainer />
        </section>
      </main>
    </main>
  );
};
