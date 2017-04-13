export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 23,
                "column": 24
              },
              "end": {
                "line": 38,
                "column": 24
              }
            },
            "moduleName": "netconfig/templates/bgp.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","bgpcounts");
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","bgpcrow");
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","bgpc bgppeer");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","bgpt");
            var el4 = dom.createTextNode("Peer Count");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","bgpcrow");
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","bgpc bpgdpeer");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","bgpt");
            var el4 = dom.createTextNode("Down Peer Count");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2,"class","bgpcrow");
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","bgpc bgpgrp");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","bgpt");
            var el4 = dom.createTextNode("Group Count");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element6 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element6, [1, 1]),0,0);
            morphs[1] = dom.createMorphAt(dom.childAt(element6, [3, 1]),0,0);
            morphs[2] = dom.createMorphAt(dom.childAt(element6, [5, 1]),0,0);
            return morphs;
          },
          statements: [
            ["content","item.wData.peer-count",["loc",[null,[26,63],[26,88]]],0,0,0,0],
            ["content","item.wData.down-peer-count",["loc",[null,[30,64],[30,94]]],0,0,0,0],
            ["content","item.wData.group-count",["loc",[null,[34,62],[34,88]]],0,0,0,0]
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
                  "line": 54,
                  "column": 32
                },
                "end": {
                  "line": 63,
                  "column": 32
                }
              },
              "moduleName": "netconfig/templates/bgp.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                    ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("tr");
              var el2 = dom.createTextNode("\n                                        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createElement("span");
              dom.setAttribute(el3,"class","bgpadv");
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                                        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                                        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                                        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                                        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                                        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                                    ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element4 = dom.childAt(fragment, [1]);
              var element5 = dom.childAt(element4, [1, 0]);
              var morphs = new Array(9);
              morphs[0] = dom.createAttrMorph(element4, 'ids');
              morphs[1] = dom.createAttrMorph(element4, 'class');
              morphs[2] = dom.createElementMorph(element5);
              morphs[3] = dom.createMorphAt(element5,0,0);
              morphs[4] = dom.createMorphAt(dom.childAt(element4, [3]),0,0);
              morphs[5] = dom.createMorphAt(dom.childAt(element4, [5]),0,0);
              morphs[6] = dom.createMorphAt(dom.childAt(element4, [7]),0,0);
              morphs[7] = dom.createMorphAt(dom.childAt(element4, [9]),0,0);
              morphs[8] = dom.createMorphAt(dom.childAt(element4, [11]),0,0);
              return morphs;
            },
            statements: [
              ["attribute","ids",["concat",[["get","item.id",["loc",[null,[55,47],[55,54]]],0,0,0,0],"_",["get","bgppeer.peer-address",["loc",[null,[55,59],[55,79]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
              ["attribute","class",["concat",["bgp_",["subexpr","tolowercase",[["get","bgppeer.peer-state",["loc",[null,[55,108],[55,126]]],0,0,0,0]],[],["loc",[null,[55,94],[55,128]]],0,0]],0,0,0,0,0],0,0,0,0],
              ["element","action",["showadvlst",["get","item",["loc",[null,[56,87],[56,91]]],0,0,0,0],["get","bgppeer",["loc",[null,[56,92],[56,99]]],0,0,0,0]],[],["loc",[null,[56,65],[56,101]]],0,0],
              ["content","bgppeer.peer-address",["loc",[null,[56,102],[56,126]]],0,0,0,0],
              ["content","bgppeer.peer-as",["loc",[null,[57,44],[57,63]]],0,0,0,0],
              ["content","bgppeer.description",["loc",[null,[58,44],[58,67]]],0,0,0,0],
              ["content","bgppeer.flap-count",["loc",[null,[59,44],[59,66]]],0,0,0,0],
              ["content","bgppeer.peer-state",["loc",[null,[60,44],[60,66]]],0,0,0,0],
              ["content","bgppeer.elapsed-time",["loc",[null,[61,44],[61,68]]],0,0,0,0]
            ],
            locals: ["bgppeer"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 41,
                "column": 24
              },
              "end": {
                "line": 66,
                "column": 24
              }
            },
            "moduleName": "netconfig/templates/bgp.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("table");
            dom.setAttribute(el1,"cellpadding","0");
            dom.setAttribute(el1,"class","table lp0");
            dom.setAttribute(el1,"cellspacing","0");
            dom.setAttribute(el1,"border","0");
            dom.setAttribute(el1,"width","100%");
            var el2 = dom.createTextNode("\n                            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("thead");
            var el3 = dom.createTextNode("\n                                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("tr");
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            var el5 = dom.createTextNode("Peer-Address");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            var el5 = dom.createTextNode("Peer-As");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            var el5 = dom.createTextNode("Description");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"nowrap","");
            var el5 = dom.createTextNode("Flap-Count");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            var el5 = dom.createTextNode("Peer-State");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("td");
            dom.setAttribute(el4,"nowrap","");
            var el5 = dom.createTextNode("Elapsed-Time");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("tbody");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]),1,1);
            return morphs;
          },
          statements: [
            ["block","each",[["get","item.wData.bgp-peer",["loc",[null,[54,40],[54,59]]],0,0,0,0]],[],0,null,["loc",[null,[54,32],[63,41]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child2 = (function() {
        return {
          meta: {
            "revision": "Ember@2.9.1",
            "loc": {
              "source": null,
              "start": {
                "line": 66,
                "column": 24
              },
              "end": {
                "line": 68,
                "column": 24
              }
            },
            "moduleName": "netconfig/templates/bgp.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1,"class","dwloading");
            var el2 = dom.createTextNode("Loading...");
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
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 12
            },
            "end": {
              "line": 71,
              "column": 12
            }
          },
          "moduleName": "netconfig/templates/bgp.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","bgpstats ");
          var el3 = dom.createTextNode("\n                        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"class","bgprname");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","dwtbl");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("                    ");
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
          var element7 = dom.childAt(fragment, [1]);
          var element8 = dom.childAt(element7, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]),0,0);
          morphs[1] = dom.createMorphAt(element8,3,3);
          morphs[2] = dom.createMorphAt(dom.childAt(element7, [3]),1,1);
          return morphs;
        },
        statements: [
          ["content","item.id",["loc",[null,[22,47],[22,58]]],0,0,0,0],
          ["block","if",[["get","item.wData",["loc",[null,[23,30],[23,40]]],0,0,0,0]],[],0,null,["loc",[null,[23,24],[38,31]]]],
          ["block","if",[["get","item.wData",["loc",[null,[41,30],[41,40]]],0,0,0,0]],[],1,2,["loc",[null,[41,24],[68,31]]]]
        ],
        locals: ["item"],
        templates: [child0, child1, child2]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 17,
            "column": 4
          },
          "end": {
            "line": 73,
            "column": 4
          }
        },
        "moduleName": "netconfig/templates/bgp.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","bgpwidget");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","content.router",["loc",[null,[19,20],[19,34]]],0,0,0,0]],[],0,null,["loc",[null,[19,12],[71,21]]]]
      ],
      locals: [],
      templates: [child0]
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
              "line": 90,
              "column": 16
            },
            "end": {
              "line": 103,
              "column": 16
            }
          },
          "moduleName": "netconfig/templates/bgp.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"class","bgpadv");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [9, 0]);
          var morphs = new Array(13);
          morphs[0] = dom.createAttrMorph(element2, 'ids');
          morphs[1] = dom.createAttrMorph(element2, 'class');
          morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
          morphs[4] = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
          morphs[5] = dom.createMorphAt(dom.childAt(element2, [7]),0,0);
          morphs[6] = dom.createElementMorph(element3);
          morphs[7] = dom.createMorphAt(element3,0,0);
          morphs[8] = dom.createMorphAt(dom.childAt(element2, [11]),0,0);
          morphs[9] = dom.createMorphAt(dom.childAt(element2, [13]),0,0);
          morphs[10] = dom.createMorphAt(dom.childAt(element2, [15]),0,0);
          morphs[11] = dom.createMorphAt(dom.childAt(element2, [17]),0,0);
          morphs[12] = dom.createMorphAt(dom.childAt(element2, [19]),0,0);
          return morphs;
        },
        statements: [
          ["attribute","ids",["concat",[["get","bgppeer.id",["loc",[null,[91,31],[91,41]]],0,0,0,0],"_",["get","bgppeer.peer-address",["loc",[null,[91,46],[91,66]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
          ["attribute","class",["concat",["bgp_",["subexpr","tolowercase",[["get","bgppeer.peer-state",["loc",[null,[91,95],[91,113]]],0,0,0,0]],[],["loc",[null,[91,81],[91,115]]],0,0]],0,0,0,0,0],0,0,0,0],
          ["content","bgppeer.host",["loc",[null,[92,28],[92,44]]],0,0,0,0],
          ["content","bgppeer.peer-count",["loc",[null,[93,28],[93,50]]],0,0,0,0],
          ["content","bgppeer.down-peer-count",["loc",[null,[94,28],[94,55]]],0,0,0,0],
          ["content","bgppeer.group-count",["loc",[null,[95,28],[95,51]]],0,0,0,0],
          ["element","action",["showadvlst",["get","bgppeer",["loc",[null,[96,71],[96,78]]],0,0,0,0],["get","bgppeer",["loc",[null,[96,79],[96,86]]],0,0,0,0]],[],["loc",[null,[96,49],[96,88]]],0,0],
          ["content","bgppeer.peer-address",["loc",[null,[96,89],[96,113]]],0,0,0,0],
          ["content","bgppeer.peer-as",["loc",[null,[97,28],[97,47]]],0,0,0,0],
          ["content","bgppeer.description",["loc",[null,[98,28],[98,51]]],0,0,0,0],
          ["content","bgppeer.flap-count",["loc",[null,[99,28],[99,50]]],0,0,0,0],
          ["content","bgppeer.peer-state",["loc",[null,[100,28],[100,50]]],0,0,0,0],
          ["content","bgppeer.elapsed-time",["loc",[null,[101,28],[101,52]]],0,0,0,0]
        ],
        locals: ["bgppeer"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 73,
            "column": 4
          },
          "end": {
            "line": 106,
            "column": 4
          }
        },
        "moduleName": "netconfig/templates/bgp.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"cellpadding","0");
        dom.setAttribute(el1,"class","table");
        dom.setAttribute(el1,"cellspacing","0");
        dom.setAttribute(el1,"border","0");
        dom.setAttribute(el1,"width","100%");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Host");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Peer Count");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Down Peer Count");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Group Count");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Peer-Address");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Peer-As");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Description");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.setAttribute(el4,"nowrap","");
        var el5 = dom.createTextNode("Flap-Count");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        var el5 = dom.createTextNode("Peer-State");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("td");
        dom.setAttribute(el4,"nowrap","");
        var el5 = dom.createTextNode("Elapsed-Time");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n                ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","tblData",["loc",[null,[90,24],[90,31]]],0,0,0,0]],[],0,null,["loc",[null,[90,16],[103,25]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }());
  var child2 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.9.1",
          "loc": {
            "source": null,
            "start": {
              "line": 115,
              "column": 16
            },
            "end": {
              "line": 117,
              "column": 16
            }
          },
          "moduleName": "netconfig/templates/bgp.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
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
          ["content","item",["loc",[null,[116,24],[116,32]]],0,0,0,0]
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
            "line": 108,
            "column": 4
          },
          "end": {
            "line": 120,
            "column": 4
          }
        },
        "moduleName": "netconfig/templates/bgp.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","advlst");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","advlstHdr");
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("Advertise List");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n                ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3,"class","advCls");
        var el4 = dom.createTextNode("×");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("            ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1, 3]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        return morphs;
      },
      statements: [
        ["element","action",["closeAdv"],[],["loc",[null,[112,37],[112,58]]],0,0],
        ["block","each",[["get","advData.adv",["loc",[null,[115,24],[115,35]]],0,0,0,0]],[],0,null,["loc",[null,[115,16],[117,25]]]]
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
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 121,
          "column": 6
        }
      },
      "moduleName": "netconfig/templates/bgp.hbs"
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
      var el4 = dom.createElement("span");
      dom.setAttribute(el4,"class","nicon-navbar");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createTextNode("BGP");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("span");
      dom.setAttribute(el2,"class","dnavbtn");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("span");
      dom.setAttribute(el3,"class","listtyp");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("i");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("i");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
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
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","innerContainer");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("    \n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element9 = dom.childAt(fragment, [0]);
      var element10 = dom.childAt(element9, [1, 1, 0]);
      var element11 = dom.childAt(element9, [3, 2]);
      var element12 = dom.childAt(element11, [1]);
      var element13 = dom.childAt(element11, [3]);
      var element14 = dom.childAt(fragment, [2]);
      var morphs = new Array(7);
      morphs[0] = dom.createElementMorph(element10);
      morphs[1] = dom.createAttrMorph(element12, 'class');
      morphs[2] = dom.createElementMorph(element12);
      morphs[3] = dom.createAttrMorph(element13, 'class');
      morphs[4] = dom.createElementMorph(element13);
      morphs[5] = dom.createMorphAt(element14,1,1);
      morphs[6] = dom.createMorphAt(element14,3,3);
      return morphs;
    },
    statements: [
      ["element","action",["toggleNav"],[],["loc",[null,[3,39],[3,61]]],0,0],
      ["attribute","class",["concat",["nicon-grid ",["subexpr","if",[["get","isShowlst",["loc",[null,[11,38],[11,47]]],0,0,0,0],"active"],[],["loc",[null,[11,33],[11,58]]],0,0]],0,0,0,0,0],0,0,0,0],
      ["element","action",["toggleView",true],[],["loc",[null,[11,60],[11,88]]],0,0],
      ["attribute","class",["concat",["nicon-list ",["subexpr","unless",[["get","isShowlst",["loc",[null,[12,42],[12,51]]],0,0,0,0],"active"],[],["loc",[null,[12,33],[12,62]]],0,0]],0,0,0,0,0],0,0,0,0],
      ["element","action",["toggleView",false],[],["loc",[null,[12,64],[12,93]]],0,0],
      ["block","if",[["get","isShowlst",["loc",[null,[17,10],[17,19]]],0,0,0,0]],[],0,1,["loc",[null,[17,4],[106,11]]]],
      ["block","if",[["get","isShowAdv",["loc",[null,[108,10],[108,19]]],0,0,0,0]],[],2,null,["loc",[null,[108,4],[120,11]]]]
    ],
    locals: [],
    templates: [child0, child1, child2]
  };
}()));