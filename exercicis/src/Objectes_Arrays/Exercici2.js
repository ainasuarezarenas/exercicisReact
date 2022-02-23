export default function Exercici2() {
  const numbers = [63, 45, 58, 56];

  var numero = 18;

  var posicio = 2;

  numbers.splice(posicio, 0, numero);

  return (
    <>
      <h1> Afegir un element </h1>
      <p> Al inici teniem 63, 45, 58, 56</p>
      <p>
        Ara tenim:
        {numbers.map((n) => (
          <li key={numbers}>{n}</li>
        ))}
      </p>
    </>
  );
}
