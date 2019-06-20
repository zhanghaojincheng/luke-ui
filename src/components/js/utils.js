function classnames() {
  let classNames = [];
  [...arguments].forEach(item => {
    if (typeof item === "string") {
        classNames.push(item);
    } else if (typeof item === "object") {
        for(let key in item ) {
            item[key] && classNames.push(item[key]);
        }
    }
  });
  return classNames.join(' ');
}

export { classnames };
