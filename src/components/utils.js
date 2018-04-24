export const parseProperty = (prop, template) => {
  return prop.charAt() === '!' ? prop.slice(1) : template.replace('!', prop);
}

export const truncateString = (string, n) => {
  return (!!n && typeof string === 'string')
    ? string.substring(0, n).concat('...') 
    : string;
}
