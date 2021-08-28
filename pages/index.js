import Dashboard from "../containers/Dashboard";
import IndexMain from "../containers/IndexMain";

export default function Home() {
  return (
    <div>
      <Dashboard menu={"index"}>
        <IndexMain />
      </Dashboard>
    </div>
  );
}
