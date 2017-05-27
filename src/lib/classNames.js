export default function classNames(map, ...classes) {
  return Object.keys(map).reduce((classes, c) => {
    if (map[c]) {
      return classes.concat(c)
    }

    return classes
  }, classes).join(' ')
}

