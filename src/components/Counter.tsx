import { createSignal } from "solid-js";
import type { JSX } from "solid-js/h/jsx-runtime";

interface Props {
  initValue : number;
  children?: JSX.Element;
}

export const Counter = (props:Props) => {
  const [counter, setCounter] = createSignal(props.initValue);

  return (
    <>
    
      {
        props.children
      }
      <h3 class="text-xl">Value: {counter()}</h3>
      <button class="bg-blue-500 p-3 mr-2 rounded-md"
      onclick={() => setCounter(counter() + 1)}
      >+1</button>
      <button class="bg-blue-500 p-3 mr-2 rounded-md"
      onclick={() => setCounter(counter() - 1)}
      >-1</button>
    </>
  );
};
