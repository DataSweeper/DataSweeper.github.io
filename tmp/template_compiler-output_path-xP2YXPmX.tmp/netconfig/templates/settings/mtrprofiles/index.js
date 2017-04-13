export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 4
          },
          "end": {
            "line": 5,
            "column": 75
          }
        },
        "moduleName": "netconfig/templates/settings/mtrprofiles/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("+ Add MTR Profile");
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
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 28
            },
            "end": {
              "line": 33,
              "column": 102
            }
          },
          "moduleName": "netconfig/templates/settings/mtrprofiles/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","nicon-edit");
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
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 22,
            "column": 12
          },
          "end": {
            "line": 39,
            "column": 12
          }
        },
        "moduleName": "netconfig/templates/settings/mtrprofiles/index.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("tr");
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createTextNode("\n                        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","tableAct");
        var el4 = dom.createTextNode("\n                            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                              \n                            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("i");
        dom.setAttribute(el4,"class","nicon-delete");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n                ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [7]);
        var element2 = dom.childAt(element0, [15, 1]);
        var element3 = dom.childAt(element2, [3]);
        var morphs = new Array(11);
        morphs[0] = dom.createAttrMorph(element0, 'ids');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
        morphs[4] = dom.createAttrMorph(element1, 'class');
        morphs[5] = dom.createMorphAt(element1,0,0);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [9]),0,0);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [11]),0,0);
        morphs[8] = dom.createMorphAt(dom.childAt(element0, [13]),0,0);
        morphs[9] = dom.createMorphAt(element2,1,1);
        morphs[10] = dom.createElementMorph(element3);
        return morphs;
      },
      statements: [
        ["attribute","ids",["get","row.id",["loc",[null,[23,26],[23,32]]],0,0,0,0],0,0,0,0],
        ["content","row.attributes.destination_host",["loc",[null,[24,24],[24,59]]],0,0,0,0],
        ["content","row.attributes.protocol",["loc",[null,[25,24],[25,51]]],0,0,0,0],
        ["content","row.attributes.network",["loc",[null,[26,24],[26,50]]],0,0,0,0],
        ["attribute","class",["concat",[["subexpr","if",[["get","row.attributes.dns",["loc",[null,[27,36],[27,54]]],0,0,0,0],"color-enable","color-disable"],[],["loc",[null,[27,31],[27,87]]],0,0]],0,0,0,0,0],0,0,0,0],
        ["inline","enable-disable",[["get","row.attributes.dns",["loc",[null,[27,106],[27,124]]],0,0,0,0]],[],["loc",[null,[27,89],[27,126]]],0,0],
        ["content","row.attributes.peer",["loc",[null,[28,24],[28,47]]],0,0,0,0],
        ["content","row.attributes.router",["loc",[null,[29,24],[29,49]]],0,0,0,0],
        ["content","row.attributes.ttl",["loc",[null,[30,24],[30,46]]],0,0,0,0],
        ["block","link-to",["settings/mtrprofiles.edit",["get","row.id",["loc",[null,[33,67],[33,73]]],0,0,0,0]],[],0,null,["loc",[null,[33,28],[33,114]]]],
        ["element","action",["deleteMtrProf",["get","row",["loc",[null,[35,77],[35,80]]],0,0,0,0]],[],["loc",[null,[35,52],[35,82]]],0,0]
      ],
      locals: ["row"],
      templates: [child0]
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
          "line": 42,
          "column": 6
        }
      },
      "moduleName": "netconfig/templates/settings/mtrprofiles/index.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","shdr");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createTextNode("MTR Profiles");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","innerContainer");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"width","100%");
      dom.setAttribute(el2,"cellpadding","0");
      dom.setAttribute(el2,"cellspacing","0");
      dom.setAttribute(el2,"border","0");
      dom.setAttribute(el2,"class","table");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Destination Host");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Protocol");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Network");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("DNS");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Peer");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Router");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("TTL");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),3,3);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1, 3]),1,1);
      return morphs;
    },
    statements: [
      ["block","link-to",["settings/mtrprofiles.add"],["class","addbtn"],0,null,["loc",[null,[5,4],[5,87]]]],
      ["block","each",[["get","content",["loc",[null,[22,20],[22,27]]],0,0,0,0]],[],1,null,["loc",[null,[22,12],[39,21]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));