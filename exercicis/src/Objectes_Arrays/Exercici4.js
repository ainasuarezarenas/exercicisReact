export default function Exercici4() {
  const numbers = [63, 45, 58, 56, 45, 58];
  const repetits = [];

  const tempArray = [...numbers].sort();

  for (let i = 0; i < numbers.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      repetits.push(tempArray[i]);
    }
  }

  return (
    <>
      <h1> Treure els elements NO repetits d'un array.</h1>

      <p> Al inici teniem 63, 45, 58, 56, 45, 58</p>
      <p>
        Només els numeros repetits són:
        {repetits.map((n) => (
          <li key={repetits}>{n}</li>
        ))}
      </p>
    </>
  );
}
