import { AverageContainer } from "../../components/AverageContainer";
import { Header } from "../../components/Header"
import { InitialPresentation } from "../../components/InitialPresentation";
import { TrendsContainer } from "../../components/TrendsContainer";
import { useFetchQuery } from "../../Hooks/useFetchQuery";
import { DataSection } from "../../components/DataSection";


export const HomePage = () => {
  const { data, error, isLoading } = useFetchQuery("latest");
  return (
    <main className="container my-4">
      <Header />
      <main className="my-4">
        <InitialPresentation latestMood={!!error} loading={isLoading} />
        {!!data && <DataSection lastData={data} />}
        <AverageContainer latestMood={data}/>
        <TrendsContainer />
      </main>
    </main>
  );
};
