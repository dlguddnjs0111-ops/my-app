function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function App() {   // 👈 여기!!
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}