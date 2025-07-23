import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";

export const HooksApp = () => {
  return (
    <div className="flex flex-col p-10">
      <h1 className="text-3xl">HooksApp</h1>
      <div className="grid grid-cols-3 gap-20">
        <CounterApp />
        <CounterWithCustomHook />
        <SimpleForm/>
        <SimpleFormWithCustomHook/>
        <MultipleCustomHooks/>
      </div>
    </div>
  );
};
