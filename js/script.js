class Counter {
  constructor(){
    this.count = 100;
    this.step = 5
  }
  plus () {
    this.count += this.count < 100 && this.step;
  }
  minus () {
    this.count -= this.count > 0 && this.step;
  }
}

const counter = new Counter();
const style = document.createElement("style")

onClickAction = event => {
  counter[event.target.value === '-' ? 'minus' : 'plus']();
  
  const addRule = (style => {
    const sheet = document.head.appendChild(style).sheet;
    return (selector, css) => {
      const propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
        return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
      }).join(";");
      sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
  })(style);

  addRule('#termometre:after', {
      height: `${counter.count}%;`
  });
}