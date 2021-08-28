import Mail from "../../containers/Mail/mail";
import Dashboard from "../../containers/Dashboard";


export default function mail() {
  return (
    <div>
     <Dashboard menu="/mail">
        <Mail />
      </Dashboard>
    </div>
  );
}
