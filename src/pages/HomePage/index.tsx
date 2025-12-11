import { AverageContainer } from "../../components/AverageContainer";
import { Header } from "../../components/Header"
import { InitialPresentation } from "../../components/InitialPresentation";

export const HomePage = () => {
  return (
    <main className="container my-4">
      <Header />
      <main className="my-4">
        <InitialPresentation />
        <AverageContainer />
        <div>
            <h3>Mood and sleep trends</h3>
        </div>
      </main>
    </main>
  );
};
