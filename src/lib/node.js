export default function node(el) {
  function contains(elem) {
    if (!elem) {
      return false
    }

    if (el === elem) {
      return true
    }

    return contains(elem.parentNode)
  }

  return {
    contains
  }
}
