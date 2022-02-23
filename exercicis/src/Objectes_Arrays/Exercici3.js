export default function Exercici3() {
  const numbers = [63, 45, 58, 56, 45, 58];
  const unics = [];

  for (let i = 0; i < numbers.length; i++) {
    const elemento = numbers[i];
    if (!unics.includes(numbers[i])) {
      unics.push(elemento);
    }
  }

  return (
    <>
      <h1> Treure els elements repetits d'un array.</h1>

      <p> Al inici teniem 63, 45, 58, 56, 45, 58</p>
      <p>
        Sense els numeros repetits és:
        {unics.map((n) => (
          <li key={unics}>{n}</li>
        ))}
      </p>
    </>
  );
}
