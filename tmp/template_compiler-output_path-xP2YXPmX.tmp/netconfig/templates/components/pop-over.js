export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "netconfig/templates/components/pop-over.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","arrow");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	 ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"type","button");
        var el3 = dom.createTextNode("×");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","popover-content");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element0,1,1);
        morphs[2] = dom.createAttrMorph(element1, 'class');
        morphs[3] = dom.createElementMorph(element1);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["popover-title ",["subexpr","unless",[["get","title",["loc",[null,[3,36],[3,41]]],0,0,0,0],"hide"],[],["loc",[null,[3,27],[3,50]]],0,0]],0,0,0,0,0],0,0,0,0],
        ["inline","t-lang",[["get","title",["loc",[null,[4,13],[4,18]]],0,0,0,0],["get","titleArgs",["loc",[null,[4,19],[4,28]]],0,0,0,0]],[],["loc",[null,[4,4],[4,30]]],0,0],
        ["attribute","class",["subexpr","if",[["get","canShowClose",["loc",[null,[5,35],[5,47]]],0,0,0,0],"close","hide"],[],["loc",[null,[null,null],[5,64]]],0,0],0,0,0,0],
        ["element","action",["close"],["bubbles",false],["loc",[null,[5,65],[5,97]]],0,0],
        ["content","yield",["loc",[null,[8,4],[8,13]]],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
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
          "line": 11,
          "column": 0
        }
      },
      "moduleName": "netconfig/templates/components/pop-over.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","if",[["get","canShow",["loc",[null,[1,6],[1,13]]],0,0,0,0]],[],0,null,["loc",[null,[1,0],[10,7]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));