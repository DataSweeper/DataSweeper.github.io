export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.9.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 0
        }
      },
      "moduleName": "netconfig/templates/modal_header.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","modal-header");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"type","button");
      dom.setAttribute(el2,"class","close");
      dom.setAttribute(el2,"data-dismiss","modal");
      var el3 = dom.createTextNode("×");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h4");
      dom.setAttribute(el2,"class","modal-title");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [1]);
      var morphs = new Array(2);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      return morphs;
    },
    statements: [
      ["element","action",["closeModal"],[],["loc",[null,[2,59],[2,82]]],0,0],
      ["content","title",["loc",[null,[3,26],[3,35]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));