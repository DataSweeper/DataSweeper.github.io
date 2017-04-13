export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 3,
            "column": 12
          },
          "end": {
            "line": 3,
            "column": 59
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("MTR Profiles");
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
            "line": 5,
            "column": 26
          },
          "end": {
            "line": 5,
            "column": 44
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Edit");
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
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 44
          },
          "end": {
            "line": 5,
            "column": 55
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Add");
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
  var child3 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 16
          },
          "end": {
            "line": 21,
            "column": 16
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"value","icmp");
        var el2 = dom.createTextNode("ICMP");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"value","udp");
        var el2 = dom.createTextNode("UDP");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n                    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        dom.setAttribute(el1,"value","tcp");
        var el2 = dom.createTextNode("TCP");
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
  var child4 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 25,
            "column": 16
          },
          "end": {
            "line": 27,
            "column": 16
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1,"type","text");
        dom.setAttribute(el1,"name","router");
        dom.setAttribute(el1,"readonly","");
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
  var child5 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 30,
                "column": 20
              },
              "end": {
                "line": 32,
                "column": 20
              }
            },
            "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element2, 'value');
            morphs[1] = dom.createMorphAt(element2,0,0);
            return morphs;
          },
          statements: [
            ["attribute","value",["concat",[["get","item.attributes.host",["loc",[null,[31,41],[31,61]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
            ["content","item.attributes.host",["loc",[null,[31,65],[31,89]]],0,0,0,0]
          ],
          locals: ["item"],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 16
            },
            "end": {
              "line": 33,
              "column": 16
            }
          },
          "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","each",[["get","content",["loc",[null,[30,28],[30,35]]],0,0,0,0]],[],0,null,["loc",[null,[30,20],[32,29]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 27,
            "column": 16
          },
          "end": {
            "line": 34,
            "column": 16
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
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
        ["block","ember-chosen",[],["action","routerChanged","name","router","class","required","placeholder","Select a router..."],0,null,["loc",[null,[28,16],[33,33]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child6 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 39,
            "column": 16
          },
          "end": {
            "line": 41,
            "column": 16
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("                ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("input");
        dom.setAttribute(el1,"type","text");
        dom.setAttribute(el1,"name","network");
        dom.setAttribute(el1,"readonly","");
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
  var child7 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@2.9.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 46,
                  "column": 28
                },
                "end": {
                  "line": 48,
                  "column": 28
                }
              },
              "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("option");
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
              morphs[0] = dom.createAttrMorph(element0, 'value');
              morphs[1] = dom.createMorphAt(element0,0,0);
              return morphs;
            },
            statements: [
              ["attribute","value",["concat",[["get","item.peer",["loc",[null,[47,45],[47,54]]],0,0,0,0],"-",["get","subnet",["loc",[null,[47,59],[47,65]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
              ["content","subnet",["loc",[null,[47,69],[47,79]]],0,0,0,0]
            ],
            locals: ["subnet"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 43,
                "column": 20
              },
              "end": {
                "line": 50,
                "column": 20
              }
            },
            "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("option");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("optgroup");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("                        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [3]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element1, 'label');
            morphs[1] = dom.createMorphAt(element1,1,1);
            return morphs;
          },
          statements: [
            ["attribute","label",["get","item.peer",["loc",[null,[45,42],[45,51]]],0,0,0,0],0,0,0,0],
            ["block","each",[["get","item.subnets",["loc",[null,[46,36],[46,48]]],0,0,0,0]],[],0,null,["loc",[null,[46,28],[48,37]]]]
          ],
          locals: ["item"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 16
            },
            "end": {
              "line": 51,
              "column": 16
            }
          },
          "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
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
          ["block","each",[["get","routeData.bgpnetwork",["loc",[null,[43,28],[43,48]]],0,0,0,0]],[],0,null,["loc",[null,[43,20],[50,29]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 41,
            "column": 16
          },
          "end": {
            "line": 52,
            "column": 16
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
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
        ["block","ember-chosen",[],["action","networkChanged","name","network","class","required","placeholder","Select a group..."],0,null,["loc",[null,[42,16],[51,33]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child8 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 82,
            "column": 16
          },
          "end": {
            "line": 82,
            "column": 110
          }
        },
        "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"type","reset");
        dom.setAttribute(el1,"class","btn btn-cancel");
        var el2 = dom.createTextNode("Cancel");
        dom.appendChild(el1, el2);
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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 89,
          "column": 0
        }
      },
      "moduleName": "netconfig/templates/components/mtr-profiles.hbs"
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
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","split");
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","nicon-arrow-rgt");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","cpage");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","innerContainer");
      var el2 = dom.createTextNode("\n   ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","formContainer");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("form");
      dom.setAttribute(el3,"name","addmtrprofile");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formRow");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Destination host");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("input");
      dom.setAttribute(el5,"type","text");
      dom.setAttribute(el5,"name","destination_host");
      dom.setAttribute(el5,"class","required");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formRow");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Protocol");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formRow");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Router");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formRow");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Network");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formRow");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Peer");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("input");
      dom.setAttribute(el5,"type","text");
      dom.setAttribute(el5,"name","peer");
      dom.setAttribute(el5,"readonly","");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("<div class=\"formRow\">\n                <label>Router</label>\n{{#if isEdit}}\n                <input type=\"text\" name=\"router\" readonly/>\n                {{else}}\n                {{#ember-chosen name=\"router\" placeholder=\"Select a router...\"}}\n                    {{#each routeData as |item|}}\n                        <option value=\"{{item}}\">{{item}}</option>\n                    {{/each}}\n                {{/ember-chosen}}\n                {{/if}}            </div>");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formRow");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      var el6 = dom.createTextNode("Ttl");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("input");
      dom.setAttribute(el5,"type","text");
      dom.setAttribute(el5,"name","ttl");
      dom.setAttribute(el5,"class","required");
      dom.setAttribute(el5,"isregex","intiger");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formRow mT20");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","w180 fl ");
      var el6 = dom.createTextNode("DNS");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","formAct");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n   ");
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
      var element3 = dom.childAt(fragment, [0, 1]);
      var element4 = dom.childAt(fragment, [2, 1, 1]);
      var element5 = dom.childAt(element4, [17]);
      var morphs = new Array(8);
      morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
      morphs[1] = dom.createMorphAt(dom.childAt(element3, [5]),0,0);
      morphs[2] = dom.createMorphAt(dom.childAt(element4, [3]),3,3);
      morphs[3] = dom.createMorphAt(dom.childAt(element4, [5]),3,3);
      morphs[4] = dom.createMorphAt(dom.childAt(element4, [7]),3,3);
      morphs[5] = dom.createMorphAt(dom.childAt(element4, [15]),3,3);
      morphs[6] = dom.createMorphAt(element5,1,1);
      morphs[7] = dom.createMorphAt(element5,3,3);
      return morphs;
    },
    statements: [
      ["block","link-to",["settings/mtrprofiles"],[],0,null,["loc",[null,[3,12],[3,71]]]],
      ["block","if",[["get","isEdit",["loc",[null,[5,32],[5,38]]],0,0,0,0]],[],1,2,["loc",[null,[5,26],[5,62]]]],
      ["block","ember-chosen",[],["name","protocol","placeholder","Select a protocol..."],3,null,["loc",[null,[17,16],[21,33]]]],
      ["block","if",[["get","isEdit",["loc",[null,[25,22],[25,28]]],0,0,0,0]],[],4,5,["loc",[null,[25,16],[34,23]]]],
      ["block","if",[["get","isEdit",["loc",[null,[39,22],[39,28]]],0,0,0,0]],[],6,7,["loc",[null,[39,16],[52,23]]]],
      ["inline","switch-btn",[],["btnActive",true,"name","dns"],["loc",[null,[78,16],[78,56]]],0,0],
      ["block","link-to",["settings/mtrprofiles"],[],8,null,["loc",[null,[82,16],[82,122]]]],
      ["inline","bs-primary",[],["action","addMTRProfile","isLoading",["subexpr","@mut",[["get","isSaving",["loc",[null,[83,62],[83,70]]],0,0,0,0]],[],[],0,0]],["loc",[null,[83,16],[83,72]]],0,0]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
  };
}()));