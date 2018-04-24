export const parseProperty = (prop, template) => {
  return prop.charAt() === '!' ? prop.slice(1) : template.replace('!', prop);
};

export const truncateString = (string, n) => {
  return (
      typeof n !== 'boolean'
      && typeof parseInt(n) === 'number'
      && typeof string === 'string'
    )
    ? string.substring(0, parseInt(n)).concat('...')
    : string;
};

export const borders = () => {
  let newBorders = {};
  Object.keys(colors).forEach(color => {
    newBorders[color] = `3px solid ${colors[color]}`;
  });

  return newBorders;
}

export const colors = {
  black: "var(--black)",
  blue: "var(--blue)",
  brown: "var(--brown)",
  clear: "var(--clear)",
  dark: "var(--dark)",
  gray: "var(--gray)",
  green: "var(--green)",
  light: "var(--light)",
  orange: "var(--orange)",
  purple: "var(--purple)",
  red: "var(--red)",
  yellow: "var(--yellow)",
  white: "var(--white)"
};

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

  let L = 0.2126 * adjustedRgb[0] + 0.7152 * adjustedRgb[1] + 0.0722 * adjustedRgb[2];

  return L > Math.sqrt(1.05 * 0.05) - 0.05 ? '#000' : '#fff';
};

export const colorize = (hex) => {
  if ( hex.charAt() !== '#' ) return hex;

  hex = hex.substring(1);
  let rgb = hex
    .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
    .map(i => parseInt(hex.length % 2 ? i + i : i, 16));

  let r = rgb[0] /= 255,
      g = rgb[1] /= 255,
      b = rgb[2] /= 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;  //achromatic
  } else {
    let d = max - min;
    s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

    if (max === r && g >= b) {
        h = 1.0472 * (g - b) / d ;
    } else if (max === r && g < b) {
        h = 1.0472 * (g - b) / d + 6.2832;
    } else if (max === g) {
        h = 1.0472 * (b - r) / d + 2.0944;
    } else if (max === b) {
        h = 1.0472 * (r - g) / d + 4.1888;
    }
  }

  h = h / 6.2832 * 360.0 + 0;

  // Shift hue to opposite side of wheel and convert to [0-1] value
  h+= 180;
  if (h > 360) { h -= 360; }
  h /= 360;

  // Convert h s and l values into r g and b values
  if(s === 0){
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t){
      if(t < 0) t += 1;
      if(t > 1) t -= 1;
      if(t < 1/6) return p + (q - p) * 6 * t;
      if(t < 1/2) return q;
      if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  if ( r === g && g === b ) {
    if ( r < 128 ) {
      r = 255;
      g = 255;
      b = 255;
    } else {
      r = 0;
      g = 0;
      b = 0;
    }
  }

  // Convert r b and g values to hex
  rgb = b | (g << 8) | (r << 16);
  let result = '#' + (0x1000000 | rgb).toString(16).substring(1);
  return result.slice(1) === hex ? '#000' : result;
};

export const getDefaults = (config) => {
  let defaults = {};
  for ( let property in config ) {
   defaults[property] = config[property].default;
  }

  return defaults;
}

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
