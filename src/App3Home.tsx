import CounterButton from "shellApp/CounterButton";
import { Groupui1010Button } from "@group-ui/group-ui-react";
import { defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components';

void defineCustomElements();

export default function App3Home() {
  return (
    <div className="app2 p-5 bg-blue-500">
      <h1>App3 Home</h1>



      <Groupui1010Button onClick={() => console.log("Clicked")}>
        GroupuiButton from app 3!
      </Groupui1010Button>

      <h1>CounterButton from shell Home</h1>
      <CounterButton></CounterButton>
    </div>
  );
}
