export function maskMoney(valor: number): string {
  if (typeof valor === "number") {
    const valorFormatado = valor.toFixed(2);
    return `R$ ${valorFormatado}`;
  } else {
    return "";
  }
}
