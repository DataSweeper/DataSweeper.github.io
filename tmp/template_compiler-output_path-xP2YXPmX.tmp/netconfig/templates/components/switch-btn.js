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
          "line": 7,
          "column": 8
        }
      },
      "moduleName": "netconfig/templates/components/switch-btn.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("span");
      dom.setAttribute(el1,"class","switchBtnCont");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","switchBtnInfo");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" \n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","switchBtnInner");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode(" ");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0, 1]);
      var morphs = new Array(4);
      morphs[0] = dom.createAttrMorph(element0, 'class');
      morphs[1] = dom.createElementMorph(element0);
      morphs[2] = dom.createMorphAt(element0,1,1);
      morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
      return morphs;
    },
    statements: [
      ["attribute","class",["concat",["switchBtn ",["subexpr","if",[["get","btnActive",["loc",[null,[2,32],[2,41]]],0,0,0,0],"active"],[],["loc",[null,[2,27],[2,52]]],0,0]],0,0,0,0,0],0,0,0,0],
      ["element","action",["toggleBtn"],[],["loc",[null,[2,54],[2,76]]],0,0],
      ["inline","input",[],["value",["subexpr","@mut",[["get","btnActive",["loc",[null,[3,22],[3,31]]],0,0,0,0]],[],[],0,0],"type","hidden","name",["subexpr","@mut",[["get","name",["loc",[null,[3,51],[3,55]]],0,0,0,0]],[],[],0,0]],["loc",[null,[3,8],[3,57]]],0,0],
      ["content","sbtnInfo",["loc",[null,[4,36],[4,48]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));