

import Dashboard from "../containers/Dashboard";
import IndexMain from "../containers/IndexMain/IndexMain";


export default function Home() {
  return (
    <Dashboard menu="index">
      <IndexMain />
    </Dashboard>
  );
}
