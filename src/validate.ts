let validate: any;

validate = function (attributes: any, constraints: any, options: any) {
  options = v.extend({}, v.options, options);
};

let v = validate;

v.extend = function (obj: any) {
  [].slice.call(arguments, 1).forEach(function (source) {
    for (var attr in source) {
      obj[attr] = source[attr];
    }
  });
  return obj;
};

export default validate;
