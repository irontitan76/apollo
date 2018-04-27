export const find = (theme, prop, val) => {
  return theme[prop][val] || val;
};

export const parse = (theme, prop, val, name) => {
  if ( typeof val === 'undefined' || val === 'none' ) return null;

  name = name || prop;
  if ( typeof val === 'string' ) return `${name}:${theme[prop][val] || val};`;

  let result = '';

  Object.keys(val).forEach(key => {
    if ( key === 'vertical' || key === 'all' ) {
      val['top'] = val['top'] || ( theme[prop][val[key]] || val[key] );
      val['bottom'] = val['bottom'] || ( theme[prop][val[key]] || val[key] );
      if ( key !== 'all' ) delete val[key];
    } else if ( key === 'horizontal' || key === 'all' ) {
      val['left'] = val['left'] || ( theme[prop][val[key]] || val[key] );
      val['right'] = val['right'] || ( theme[prop][val[key]] || val[key] );
      if ( key !== 'all' ) delete val[key];
    }
  });

  delete val['all'];

  Object.keys(val).forEach(key => {
    result += `${name}-${key}:${( theme[prop][val[key]] || val[key] )};`;
  });

  return `${result}`;
}

export const truncateString = (string, n) => {
  return (
      typeof n !== 'boolean'
      && typeof parseInt(n, 10) === 'number'
      && typeof string === 'string'
    )
    ? string.substring(0, parseInt(n, 10)).concat('...')
    : string;
};

export const getDefaults = (config) => {
  let defaults = {};
  for ( let property in config ) {
   defaults[property] = config[property].default;
  }

  return defaults;
}

export const contrast = (hex) => {
  if ( hex.charAt() !== '#' ) {
    hex = getComputedStyle(document.body).getPropertyValue('--green').substring(1);
  }

  hex = hex.substring(1);

  let rgb = hex
    .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
    .map(i => parseInt(hex.length % 2 ? i + i : i, 16));

  let adjustedRgb = rgb.map(c => {
    c = c / 255.0;
    return c <= 0.03928 ? c / 12.92 : Math.pow(((c + 0.055) / 1.055), 2.4);
  });

  let luminance = 0.2126 * adjustedRgb[0] + 0.7152 * adjustedRgb[1] + 0.0722 * adjustedRgb[2];

  return luminance > Math.sqrt(1.05 * 0.05) - 0.05 ? '#000' : '#fff';
};

export const retrieve = (obj, prop) => (!!obj
  && !!obj.options
  && !!obj.options[prop])
    ? obj.options[prop]
    : prop;

export const override = (independent, criterion, current, result) => {
  // If independent value equals criterion then the resultant value is used
  // Otherwise, the current value is returned to the "dependent" propertyE
  return !!independent === criterion ? result : current;
};

export const calibrate = (constant, variable, weight) => {
  return `calc(${constant} + ${variable} * ${weight}`;
};

export const interpret = (object, value, attr, options, check) => {
  if ( typeof value !== 'object' ) {
    return `${attr}:${(!!check && !!check[0] && !!check[1]) ? override(
      (!!check && check[0] !== undefined),
      (value === 'none'),
      retrieve(object, value),
      check[1]) : retrieve(object, value)}`;
  } else {
    attr = attr || object.name;

    for ( let option in options ) {
       options[option].forEach(val => {
        if ( value.hasOwnProperty(option) ) {
          value[val] = value[option];
        }
       });
       delete value[option];
     }

    let string = '';

    for ( let property in value ) {
      string += `${attr}-${property}:${retrieve(object, value[property])};`;
    }

    return string;
  }
};
