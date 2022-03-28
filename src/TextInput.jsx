const { bind, Subscribe } = require("@react-rxjs/core");
const { createSignal } = require("@react-rxjs/utils");
const { map } = require("rxjs");

const [textChange$, setText] = createSignal();
const [useText, text$] = bind(textChange$, "");

function TextInput() {
  const text = useText();
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Please enter something..."
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

const [useCharCount, charCount$] = bind(text$.pipe(map((text) => text.length)));

function CharactorCount() {
  const count = useCharCount();

  return <>Charactor Count: {count}</>;
}

export default function CharactorCounter() {
  return (
    <div>
      <Subscribe>
        <TextInput />
        <CharactorCount />
      </Subscribe>
    </div>
  );
}
