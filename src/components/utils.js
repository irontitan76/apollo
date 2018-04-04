export const parseProperty = (prop, template) => {
  return prop.charAt() === '!' ? prop.slice(1) : template.replace('!', prop);
}
