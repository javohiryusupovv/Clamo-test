export function getPaginationPages(current: number, total: number) {
  const pages = [];

  if (total <= 3) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else if (current <= 2) {
    pages.push(1, 2, 3);
  } else if (current >= total - 1) {
    pages.push(total - 2, total - 1, total);
  } else {
    pages.push(current - 1, current, current + 1);
  }

  return pages;
}