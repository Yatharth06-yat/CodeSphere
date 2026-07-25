export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function truncate(text, length = 80) {
  if (!text) return ''
  return text.length > length ? `${text.slice(0, length)}...` : text
}

export function percentage(value, total) {
  if (!total) return 0
  return Math.round((value / total) * 100)
}

export function paginate(items, page, pageSize) {
  const start = (page - 1) * pageSize
  return items.slice(start, start + pageSize)
}
