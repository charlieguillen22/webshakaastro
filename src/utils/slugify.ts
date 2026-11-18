export function slugify(text: string): string {
  return text
    .normalize('NFD')                 // separa letras y acentos
    .replace(/[\u0300-\u036f]/g, '')  // quita acentos (ñ → n)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')      // espacios y símbolos → guion
    .replace(/^-+|-+$/g, '');         // quita guiones sobrantes
}