import { AverageContainer } from "../../components/AverageContainer";
import { Header } from "../../components/Header"
import { InitialPresentation } from "../../components/InitialPresentation";
import { TrendsContainer } from "../../components/TrendsContainer";


export const HomePage = () => {
  return (
    <main className="container my-4">
      <Header />
      <main className="my-4">
        <InitialPresentation />
        <AverageContainer />
        <TrendsContainer />
      </main>
    </main>
  );
};
