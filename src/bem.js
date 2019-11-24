const isString = val => val && typeof val === 'string';

export const getElem = (element, block) => {
  if (!element || element.length === 0) {
    return block;
  }
  return isString(element)
    ? `${block}__${element}`
    : `${block}__${element.join('__')}`;
};

export const getMod = (modifier, blockClass) => {
  if (!modifier || modifier.length === 0) {
    return blockClass;
  }
  if (isString(modifier)) {
    return `${blockClass} ${blockClass}--${modifier}`;
  }
  const modifiers = modifier.reduce((prev, modifier) => `${prev} ${blockClass}--${modifier}`, '');
  return `${blockClass}${modifiers}`;
};