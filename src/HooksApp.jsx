import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";

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
        <FocusScreen/>
        <Layout/>
        <Memorize/>
        <MemoHook/>
      </div>
    </div>
  );
};
