// @flow

export default function classNames(conditionals: {}, ...unconditionals: Array<string>) {
  return Object.keys(conditionals)
    .reduce(
      (classes, c) => {
        if (conditionals[c]) {
          return classes.concat(c);
        }

        return classes;
      },
      unconditionals
    )
    .join(' ');
}
