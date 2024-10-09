class F8 {
  static create(tag, callback) {
    class Component extends HTMLElement {
      registry = {
        event: this.handleEvent,
      };
      connectedCallback() {
        var _this = this;
        var shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = callback.call(this);
        _this.resolveAttributes(shadowRoot);
      }
      resolveAttributes(elementWrap) {
        var _this = this;
        if (elementWrap.children.length && elementWrap.children) {
          Array.from(elementWrap.children).forEach(function (element) {
            Array.from(element.attributes).forEach(function (attribute) {
              if (attribute.name.startsWith("v-on:")) {
                var eventName = attribute.name.replace("v-on:", "");
                typeof _this.registry["event"] === "function" &&
                  _this.registry["event"]({
                    element: element,
                    eventName: eventName,
                    value: attribute.nodeValue,
                  });
              }
            });
            _this.resolveAttributes(element);
          });
        }
      }
      handleEvent(obj) {
        var eventName = obj.eventName;
        var value = obj.value;
        var element = obj.element;

        element.addEventListener(eventName, function () {
          // Function(value).call(element);
          console.log(value);
        });
      }
    }
    customElements.define(tag, Component);
  }
}

F8.create("hello-world", function () {
  return `
  <div class='content'>
    <h1>F8 Fullstack</h1>
    <button v-on:click=''>Click me</button>
  </div>`;
});
