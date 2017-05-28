// @flow

type Element = { parentNode?: HTMLElement };

export default function node(el: HTMLElement) {
  function contains(elem?: Element | Node | null) {
    if (!elem) {
      return false;
    }

    if (el === elem) {
      return true;
    }

    return contains(elem.parentNode);
  }

  return {
    contains
  };
}
