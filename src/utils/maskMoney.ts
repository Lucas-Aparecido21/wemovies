export function maskMoney(valor: number): string {
  const valorFormatado = valor.toFixed(2);
  return `R$ ${valorFormatado}`;
}
