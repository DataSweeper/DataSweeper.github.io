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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "netconfig/templates/common/confirmmodal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-md-2");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("i");
        dom.setAttribute(el2,"class","icon-attention-circle confirm-icon");
        dom.setAttribute(el2,"style","color:#FFA500");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 8,
            "column": 2
          },
          "end": {
            "line": 10,
            "column": 2
          }
        },
        "moduleName": "netconfig/templates/common/confirmmodal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        return morphs;
      },
      statements: [
        ["content","msgArgs",["loc",[null,[9,7],[9,18]]],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 12,
            "column": 2
          },
          "end": {
            "line": 16,
            "column": 2
          }
        },
        "moduleName": "netconfig/templates/common/confirmmodal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n      ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2,"class","checkbox");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n   ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element1,0,0);
        morphs[1] = dom.createMorphAt(element1,1,1);
        return morphs;
      },
      statements: [
        ["inline","input",[],["type","checkbox","checked",["subexpr","@mut",[["get","chkBoxValue",["loc",[null,[14,62],[14,73]]],0,0,0,0]],[],[],0,0]],["loc",[null,[14,30],[14,75]]],0,0],
        ["content","chkBoxLabel",["loc",[null,[14,75],[14,90]]],0,0,0,0]
      ],
      locals: [],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 18,
            "column": 2
          },
          "end": {
            "line": 20,
            "column": 2
          }
        },
        "moduleName": "netconfig/templates/common/confirmmodal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("small");
        dom.setAttribute(el1,"class","text-muted");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,0,0);
        morphs[1] = dom.createMorphAt(element0,2,2);
        return morphs;
      },
      statements: [
        ["content","notes",["loc",[null,[19,30],[19,39]]],0,0,0,0],
        ["content","notesArgs",["loc",[null,[19,40],[19,53]]],0,0,0,0]
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
          "line": 27,
          "column": 6
        }
      },
      "moduleName": "netconfig/templates/common/confirmmodal.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"style","padding-left: 2px");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","alert-actions btn-toolbar");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("    \n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [1]);
      var element3 = dom.childAt(fragment, [3]);
      var element4 = dom.childAt(element3, [1]);
      var morphs = new Array(10);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createAttrMorph(element2, 'class');
      morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
      morphs[3] = dom.createMorphAt(element2,3,3);
      morphs[4] = dom.createMorphAt(element2,5,5);
      morphs[5] = dom.createMorphAt(element2,7,7);
      morphs[6] = dom.createAttrMorph(element4, 'class');
      morphs[7] = dom.createElementMorph(element4);
      morphs[8] = dom.createMorphAt(element4,1,1);
      morphs[9] = dom.createMorphAt(element3,3,3);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["block","if",[["get","showIcon",["loc",[null,[1,6],[1,14]]],0,0,0,0]],[],0,null,["loc",[null,[1,0],[5,7]]]],
      ["attribute","class",["concat",["col-md-10 modal-confirmTxt ",["subexpr","unless",[["get","showIcon",["loc",[null,[6,48],[6,56]]],0,0,0,0],"col-md-offset-2"],[],["loc",[null,[6,39],[6,76]]],0,0]],0,0,0,0,0],0,0,0,0],
      ["content","msg",["loc",[null,[7,5],[7,12]]],0,0,0,0],
      ["block","if",[["get","msgArgs",["loc",[null,[8,8],[8,15]]],0,0,0,0]],[],1,null,["loc",[null,[8,2],[10,9]]]],
      ["block","if",[["get","showChkBox",["loc",[null,[12,8],[12,18]]],0,0,0,0]],[],2,null,["loc",[null,[12,2],[16,9]]]],
      ["block","if",[["get","notes",["loc",[null,[18,8],[18,13]]],0,0,0,0]],[],3,null,["loc",[null,[18,2],[20,9]]]],
      ["attribute","class",["concat",["btn btn-default ",["subexpr","unless",[["get","sBtnNeed",["loc",[null,[23,42],[23,50]]],0,0,0,0],"invisible"],[],["loc",[null,[23,33],[23,64]]],0,0]],0,0,0,0,0],0,0,0,0],
      ["element","action",["secondaryAction"],[],["loc",[null,[23,66],[23,94]]],0,0],
      ["content","sBtn",["loc",[null,[24,4],[24,12]]],0,0,0,0],
      ["inline","bs-primary",[],["btn_name",["subexpr","@mut",[["get","pBtn",["loc",[null,[26,24],[26,28]]],0,0,0,0]],[],[],0,0],"action","confirmAction","disabledWhen",["subexpr","@mut",[["get","disablePBtn",["loc",[null,[26,65],[26,76]]],0,0,0,0]],[],[],0,0]],["loc",[null,[26,2],[26,78]]],0,0]
    ],
    locals: [],
    templates: [child0, child1, child2, child3]
  };
}()));