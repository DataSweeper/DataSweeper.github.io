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
          "line": 2,
          "column": 0
        }
      },
      "moduleName": "netconfig/templates/settings/zohoserviceview/edit.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["inline","zohoservice-page",[],["ctrl",["subexpr","@mut",[["get","controller",["loc",[null,[1,24],[1,34]]],0,0,0,0]],[],[],0,0],"content",["subexpr","@mut",[["get","content",["loc",[null,[1,43],[1,50]]],0,0,0,0]],[],[],0,0],"isEdit",true],["loc",[null,[1,0],[1,64]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));