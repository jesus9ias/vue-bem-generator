const isString = val => val && typeof val === 'string';

const modifierClass = (index, value) => isNaN(index) ? index + '-' + value : value;

const mergedClasses = (prev, block, modifier) => prev + ' ' + block + '--' + modifier;

export const getElem = (element, block) => {
  if (!element || element.length === 0) {
    return block;
  }
  return isString(element)
    ? block + '__' + element
    : block + '__' + element.join('__');
};

export const getMod = (modifier, blockClass) => {
  if (!modifier || modifier.length === 0) {
    return blockClass;
  }
  if (isString(modifier)) {
    return mergedClasses(blockClass, blockClass, modifier);
  }
  const modifiersIndex = Object.keys(modifier);
  const modifiers = modifiersIndex
    .filter(index => modifier[index])
    .reduce((prev, index) => mergedClasses(prev, blockClass, modifierClass(index, modifier[index])), '');
  return blockClass + modifiers;
};