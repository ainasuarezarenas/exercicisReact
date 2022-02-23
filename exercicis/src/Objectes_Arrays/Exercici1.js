export default function Exercici1() {
  const numbers = [63, 45, 58, 56];

  let suma = 0;

  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }

  const mitjana = [suma / numbers.length];

  const major = Math.max(...numbers);

  const menor = Math.min(...numbers);

  return (
    <>
      <h1> Major, menor, suma i mitjana de números enters </h1>
      <p>
        Els numeros son aquests: {numbers[0]}, {numbers[1]}, {numbers[2]},
        {numbers[3]}
      </p>
      <p>La suma es aquesta: {suma}</p>
      <p>La mitjana es aquesta: {mitjana}</p>
      <p>El major és: {major}</p>
      <p>El menor és: {menor}</p>
    </>
  );
}
