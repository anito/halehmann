/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                    return a === b
                }, h, !0), l = sa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
                else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                    j = 0;
                    while (e = f[j++]) fa.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l,
            c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }
    var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Da = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;
        while (e--)
            if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Ja(this, !0)
        },
        hide: function() {
            return Ja(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Oa.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function() {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0,
            g = Qa.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xa, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Qa.unshift(a) : Qa.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = Xa(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = L.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = L.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Ta("show"),
            slideUp: Ta("hide"),
            slideToggle: Ta("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), La = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(Ma), Ma = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(),
        db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {},
            f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Bb = 0,
        Cb = {},
        Db = {
            0: 200,
            1223: 204
        },
        Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/*! Picturefill - v3.0.1 - 2015-09-30
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
! function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 41 && addEventListener("resize", function() {
        var b, c = document.createElement("source"),
            d = function(a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                    a.sizes = d
                }))
            },
            e = function() {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) d(b[a])
            },
            f = function() {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function() {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window),
function(a, b, c) {
    "use strict";

    function d(a) {
        return " " === a || " " === a || "\n" === a || "\f" === a || "\r" === a
    }

    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            z[b] = !1, aa()
        }, d.onload = function() {
            z[b] = 1 === d.width, aa()
        }, d.src = c, "pending"
    }

    function f() {
        L = !1, O = a.devicePixelRatio, M = {}, N = {}, s.DPR = O || 1, P.width = Math.max(a.innerWidth || 0, y.clientWidth), P.height = Math.max(a.innerHeight || 0, y.clientHeight), P.vw = P.width / 100, P.vh = P.height / 100, r = [P.height, P.width, O].join("-"), P.em = s.getEmValue(), P.rem = P.em
    }

    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === A.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
    }

    function h(a) {
        var b, c = s.getSet(a),
            d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
    }

    function i(a, b) {
        return a.res - b.res
    }

    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || _(d, d.set.sizes)), d
    }

    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }

    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        })
    }

    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0
        }

        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1,
                o = {};
            for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), W.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : X.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : W.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
        }

        function f() {
            for (c(S), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j)
                    if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                    else {
                        if ("," === k) return m += 1, i && h.push(i), void e();
                        if ("(" === k) i += k, j = "in parens";
                        else {
                            if ("" === k) return i && h.push(i), void e();
                            i += k
                        }
                    } else if ("in parens" === j)
                    if (")" === k) i += k, j = "in descriptor";
                    else {
                        if ("" === k) return h.push(i), void e();
                        i += k
                    } else if ("after descriptor" === j)
                    if (d(k));
                    else {
                        if ("" === k) return void e();
                        j = "in descriptor", m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(T), m >= l) return n;
            g = c(U), h = [], "," === g.slice(-1) ? (g = g.replace(V, ""), e()) : f()
        }
    }

    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "")
            }

            function c() {
                g[0] && (h.push(g), g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e) i += 1;
                    else if (")" === e) i -= 1;
                    else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue
                        }
                    }
                    f += e, j += 1
                }
            }
        }

        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++)
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length) return j;
                if (h = h.join(" "), s.matchesMedia(h)) return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {},
        t = function() {},
        u = b.createElement("img"),
        v = u.getAttribute,
        w = u.setAttribute,
        x = u.removeAttribute,
        y = b.documentElement,
        z = {},
        A = {
            algorithm: ""
        },
        B = "data-pfsrc",
        C = B + "set",
        D = navigator.userAgent,
        E = /rident/.test(D) || /ecko/.test(D) && D.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        F = "currentSrc",
        G = /\s+\+?\d+(e\d+)?w/,
        H = /(\([^)]+\))?\s*(.+)/,
        I = a.picturefillCFG,
        J = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        K = "font-size:100%!important;",
        L = !0,
        M = {},
        N = {},
        O = a.devicePixelRatio,
        P = {
            px: 1,
            "in": 96
        },
        Q = b.createElement("a"),
        R = !1,
        S = /^[ \t\n\r\u000c]+/,
        T = /^[, \t\n\r\u000c]+/,
        U = /^[^ \t\n\r\u000c]+/,
        V = /[,]+$/,
        W = /^\d+$/,
        X = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Y = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Z = function(a) {
            var b = {};
            return function(c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        $ = function() {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function() {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                    return c
                },
                c = Z(function(a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(b, d) {
                var e;
                if (!(b in M))
                    if (M[b] = !1, d && (e = b.match(a))) M[b] = e[1] * P[e[2]];
                    else try {
                        M[b] = new Function("e", c(b))(P)
                    } catch (f) {}
                    return M[b]
            }
        }(),
        _ = function(a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
        },
        aa = function(a) {
            var c, d, e, f = a || {};
            if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                for (s.setupRun(f), R = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                s.teardownRun(f)
            }
        };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    } : t, F in u || (F = "src"), z["image/jpeg"] = !0, z["image/gif"] = !0, z["image/png"] = !0, z["image/svg+xml"] = b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in u, s.supSizes = "sizes" in u, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) {
        u.srcset = "data:,a", a.src = "data:,a", s.supSrcset = u.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")), s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = A, s.supSrcset && (s.sel += ",img[" + C + "]"), s.DPR = O || 1, s.u = P, s.types = z, q = s.supSrcset && !s.supSizes, s.setSize = t, s.makeUrl = Z(function(a) {
        return Q.href = a, Q.href
    }), s.qsa = function(a, b) {
        return a.querySelectorAll(b)
    }, s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
    }, s.mMQ = function(a) {
        return a ? $(a) : !0
    }, s.calcLength = function(a) {
        var b = $(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, s.supportsType = function(a) {
        return a ? z[a] : !0
    }, s.parseSize = Z(function(a) {
        var b = (a || "").match(H);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands
    }, s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = y.style.cssText,
                e = a.style.cssText;
            c.style.cssText = J, y.style.cssText = K, a.style.cssText = K, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), y.style.cssText = d, a.style.cssText = e
        }
        return p || 16
    }, s.calcListLength = function(a) {
        if (!(a in N) || A.uT) {
            var b = s.calcLength(n(a));
            N[a] = b ? b : P.width
        }
        return N[a]
    }, s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) _(b[c], a.sizes)
        }
        return b
    }, s.setRes.res = _, s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns],
                p = s.DPR;
            if (k = o.curSrc || b[F], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = E && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                    if (c = a[d], c.res >= p) {
                        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
        }
    }, s.setSrc = function(a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
    }, s.getSet = function(a) {
        var b, c, d, e = !1,
            f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;
                break
            }
        return e
    }, s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];
        (j.src === c || d.src) && (j.src = v.call(a, "src"), j.src ? w.call(a, B, j.src) : x.call(a, B)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = v.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: v.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && G.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g), h && s.supSrcset && !j.supported && (e ? (w.call(a, C, e), a.srcset = "") : x.call(a, C)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
    }, s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
    }, s.setupRun = function() {
        (!R || L || O !== a.devicePixelRatio) && f()
    }, s.supPicture ? (aa = t, s.fillImg = t) : ! function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function() {
                var a = b.readyState || "";
                f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
            },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function(a, b) {
                var c, d, e = function() {
                    var f = new Date - d;
                    b > f ? c = setTimeout(e, b - f) : (c = null, a())
                };
                return function() {
                    d = new Date, c || (c = setTimeout(e, b))
                }
            },
            h = y.clientHeight,
            i = function() {
                L = Math.max(a.innerWidth || 0, y.clientWidth) !== P.width || y.clientHeight !== h, h = y.clientHeight, L && s.fillImgs()
            };
        Y(a, "resize", g(i, 99)), Y(b, "readystatechange", e)
    }(), s.picturefill = aa, s.fillImgs = aa, s.teardownRun = t, aa._ = s, a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (A[b] = a[0], R && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; I && I.length;) a.picturefillCFG.push(I.shift());
    a.picturefill = aa, "object" == typeof module && "object" == typeof module.exports ? module.exports = aa : "function" == typeof define && define.amd && define("picturefill", function() {
        return aa
    }), s.supPicture || (z["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2014 Rico Sta. Cruz
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
;
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
    $.transit = {
        version: "0.9.12",
        propertyMap: {
            marginLeft: 'margin',
            marginRight: 'margin',
            marginBottom: 'margin',
            marginTop: 'margin',
            paddingLeft: 'padding',
            paddingRight: 'padding',
            paddingBottom: 'padding',
            paddingTop: 'padding'
        },
        enabled: true,
        useTransitionEnd: false
    };
    var div = document.createElement('div');
    var support = {};

    function getVendorPropertyName(prop) {
        if (prop in div.style) return prop;
        var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
        var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);
        for (var i = 0; i < prefixes.length; ++i) {
            var vendorProp = prefixes[i] + prop_;
            if (vendorProp in div.style) {
                return vendorProp;
            }
        }
    }

    function checkTransform3dSupport() {
        div.style[support.transform] = '';
        div.style[support.transform] = 'rotateY(90deg)';
        return div.style[support.transform] !== '';
    }
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    support.transition = getVendorPropertyName('transition');
    support.transitionDelay = getVendorPropertyName('transitionDelay');
    support.transform = getVendorPropertyName('transform');
    support.transformOrigin = getVendorPropertyName('transformOrigin');
    support.filter = getVendorPropertyName('Filter');
    support.transform3d = checkTransform3dSupport();
    var eventNames = {
        'transition': 'transitionend',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'WebkitTransition': 'webkitTransitionEnd',
        'msTransition': 'MSTransitionEnd'
    };
    var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;
    for (var key in support) {
        if (support.hasOwnProperty(key) && typeof $.support[key] === 'undefined') {
            $.support[key] = support[key];
        }
    }
    div = null;
    $.cssEase = {
        '_default': 'ease',
        'in': 'ease-in',
        'out': 'ease-out',
        'in-out': 'ease-in-out',
        'snap': 'cubic-bezier(0,1,.5,1)',
        'easeInCubic': 'cubic-bezier(.550,.055,.675,.190)',
        'easeOutCubic': 'cubic-bezier(.215,.61,.355,1)',
        'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
        'easeInCirc': 'cubic-bezier(.6,.04,.98,.335)',
        'easeOutCirc': 'cubic-bezier(.075,.82,.165,1)',
        'easeInOutCirc': 'cubic-bezier(.785,.135,.15,.86)',
        'easeInExpo': 'cubic-bezier(.95,.05,.795,.035)',
        'easeOutExpo': 'cubic-bezier(.19,1,.22,1)',
        'easeInOutExpo': 'cubic-bezier(1,0,0,1)',
        'easeInQuad': 'cubic-bezier(.55,.085,.68,.53)',
        'easeOutQuad': 'cubic-bezier(.25,.46,.45,.94)',
        'easeInOutQuad': 'cubic-bezier(.455,.03,.515,.955)',
        'easeInQuart': 'cubic-bezier(.895,.03,.685,.22)',
        'easeOutQuart': 'cubic-bezier(.165,.84,.44,1)',
        'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
        'easeInQuint': 'cubic-bezier(.755,.05,.855,.06)',
        'easeOutQuint': 'cubic-bezier(.23,1,.32,1)',
        'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
        'easeInSine': 'cubic-bezier(.47,0,.745,.715)',
        'easeOutSine': 'cubic-bezier(.39,.575,.565,1)',
        'easeInOutSine': 'cubic-bezier(.445,.05,.55,.95)',
        'easeInBack': 'cubic-bezier(.6,-.28,.735,.045)',
        'easeOutBack': 'cubic-bezier(.175, .885,.32,1.275)',
        'easeInOutBack': 'cubic-bezier(.68,-.55,.265,1.55)'
    };
    $.cssHooks['transit:transform'] = {
        get: function(elem) {
            return $(elem).data('transform') || new Transform();
        },
        set: function(elem, v) {
            var value = v;
            if (!(value instanceof Transform)) {
                value = new Transform(value);
            }
            if (support.transform === 'WebkitTransform' && !isChrome) {
                elem.style[support.transform] = value.toString(true);
            } else {
                elem.style[support.transform] = value.toString();
            }
            $(elem).data('transform', value);
        }
    };
    $.cssHooks.transform = {
        set: $.cssHooks['transit:transform'].set
    };
    $.cssHooks.filter = {
        get: function(elem) {
            return elem.style[support.filter];
        },
        set: function(elem, value) {
            elem.style[support.filter] = value;
        }
    };
    if ($.fn.jquery < "1.8") {
        $.cssHooks.transformOrigin = {
            get: function(elem) {
                return elem.style[support.transformOrigin];
            },
            set: function(elem, value) {
                elem.style[support.transformOrigin] = value;
            }
        };
        $.cssHooks.transition = {
            get: function(elem) {
                return elem.style[support.transition];
            },
            set: function(elem, value) {
                elem.style[support.transition] = value;
            }
        };
    }
    registerCssHook('scale');
    registerCssHook('scaleX');
    registerCssHook('scaleY');
    registerCssHook('translate');
    registerCssHook('rotate');
    registerCssHook('rotateX');
    registerCssHook('rotateY');
    registerCssHook('rotate3d');
    registerCssHook('perspective');
    registerCssHook('skewX');
    registerCssHook('skewY');
    registerCssHook('x', true);
    registerCssHook('y', true);

    function Transform(str) {
        if (typeof str === 'string') {
            this.parse(str);
        }
        return this;
    }
    Transform.prototype = {
        setFromString: function(prop, val) {
            var args = (typeof val === 'string') ? val.split(',') : (val.constructor === Array) ? val : [val];
            args.unshift(prop);
            Transform.prototype.set.apply(this, args);
        },
        set: function(prop) {
            var args = Array.prototype.slice.apply(arguments, [1]);
            if (this.setter[prop]) {
                this.setter[prop].apply(this, args);
            } else {
                this[prop] = args.join(',');
            }
        },
        get: function(prop) {
            if (this.getter[prop]) {
                return this.getter[prop].apply(this);
            } else {
                return this[prop] || 0;
            }
        },
        setter: {
            rotate: function(theta) {
                this.rotate = unit(theta, 'deg');
            },
            rotateX: function(theta) {
                this.rotateX = unit(theta, 'deg');
            },
            rotateY: function(theta) {
                this.rotateY = unit(theta, 'deg');
            },
            scale: function(x, y) {
                if (y === undefined) {
                    y = x;
                }
                this.scale = x + "," + y;
            },
            skewX: function(x) {
                this.skewX = unit(x, 'deg');
            },
            skewY: function(y) {
                this.skewY = unit(y, 'deg');
            },
            perspective: function(dist) {
                this.perspective = unit(dist, 'px');
            },
            x: function(x) {
                this.set('translate', x, null);
            },
            y: function(y) {
                this.set('translate', null, y);
            },
            translate: function(x, y) {
                if (this._translateX === undefined) {
                    this._translateX = 0;
                }
                if (this._translateY === undefined) {
                    this._translateY = 0;
                }
                if (x !== null && x !== undefined) {
                    this._translateX = unit(x, 'px');
                }
                if (y !== null && y !== undefined) {
                    this._translateY = unit(y, 'px');
                }
                this.translate = this._translateX + "," + this._translateY;
            }
        },
        getter: {
            x: function() {
                return this._translateX || 0;
            },
            y: function() {
                return this._translateY || 0;
            },
            scale: function() {
                var s = (this.scale || "1,1").split(',');
                if (s[0]) {
                    s[0] = parseFloat(s[0]);
                }
                if (s[1]) {
                    s[1] = parseFloat(s[1]);
                }
                return (s[0] === s[1]) ? s[0] : s;
            },
            rotate3d: function() {
                var s = (this.rotate3d || "0,0,0,0deg").split(',');
                for (var i = 0; i <= 3; ++i) {
                    if (s[i]) {
                        s[i] = parseFloat(s[i]);
                    }
                }
                if (s[3]) {
                    s[3] = unit(s[3], 'deg');
                }
                return s;
            }
        },
        parse: function(str) {
            var self = this;
            str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
                self.setFromString(prop, val);
            });
        },
        toString: function(use3d) {
            var re = [];
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    if ((!support.transform3d) && ((i === 'rotateX') || (i === 'rotateY') || (i === 'perspective') || (i === 'transformOrigin'))) {
                        continue;
                    }
                    if (i[0] !== '_') {
                        if (use3d && (i === 'scale')) {
                            re.push(i + "3d(" + this[i] + ",1)");
                        } else if (use3d && (i === 'translate')) {
                            re.push(i + "3d(" + this[i] + ",0)");
                        } else {
                            re.push(i + "(" + this[i] + ")");
                        }
                    }
                }
            }
            return re.join(" ");
        }
    };

    function callOrQueue(self, queue, fn) {
        if (queue === true) {
            self.queue(fn);
        } else if (queue) {
            self.queue(queue, fn);
        } else {
            self.each(function() {
                fn.call(this);
            });
        }
    }

    function getProperties(props) {
        var re = [];
        $.each(props, function(key) {
            key = $.camelCase(key);
            key = $.transit.propertyMap[key] || $.cssProps[key] || key;
            key = uncamel(key);
            if (support[key])
                key = uncamel(support[key]);
            if ($.inArray(key, re) === -1) {
                re.push(key);
            }
        });
        return re;
    }

    function getTransition(properties, duration, easing, delay) {
        var props = getProperties(properties);
        if ($.cssEase[easing]) {
            easing = $.cssEase[easing];
        }
        var attribs = '' + toMS(duration) + ' ' + easing;
        if (parseInt(delay, 10) > 0) {
            attribs += ' ' + toMS(delay);
        }
        var transitions = [];
        $.each(props, function(i, name) {
            transitions.push(name + ' ' + attribs);
        });
        return transitions.join(', ');
    }
    $.fn.transition = $.fn.transit = function(properties, duration, easing, callback) {
        var self = this;
        var delay = 0;
        var queue = true;
        var theseProperties = $.extend(true, {}, properties);
        if (typeof duration === 'function') {
            callback = duration;
            duration = undefined;
        }
        if (typeof duration === 'object') {
            easing = duration.easing;
            delay = duration.delay || 0;
            queue = typeof duration.queue === "undefined" ? true : duration.queue;
            callback = duration.complete;
            duration = duration.duration;
        }
        if (typeof easing === 'function') {
            callback = easing;
            easing = undefined;
        }
        if (typeof theseProperties.easing !== 'undefined') {
            easing = theseProperties.easing;
            delete theseProperties.easing;
        }
        if (typeof theseProperties.duration !== 'undefined') {
            duration = theseProperties.duration;
            delete theseProperties.duration;
        }
        if (typeof theseProperties.complete !== 'undefined') {
            callback = theseProperties.complete;
            delete theseProperties.complete;
        }
        if (typeof theseProperties.queue !== 'undefined') {
            queue = theseProperties.queue;
            delete theseProperties.queue;
        }
        if (typeof theseProperties.delay !== 'undefined') {
            delay = theseProperties.delay;
            delete theseProperties.delay;
        }
        if (typeof duration === 'undefined') {
            duration = $.fx.speeds._default;
        }
        if (typeof easing === 'undefined') {
            easing = $.cssEase._default;
        }
        duration = toMS(duration);
        var transitionValue = getTransition(theseProperties, duration, easing, delay);
        var work = $.transit.enabled && support.transition;
        var i = work ? (parseInt(duration, 10) + parseInt(delay, 10)) : 0;
        if (i === 0) {
            var fn = function(next) {
                self.css(theseProperties);
                if (callback) {
                    callback.apply(self);
                }
                if (next) {
                    next();
                }
            };
            callOrQueue(self, queue, fn);
            return self;
        }
        var oldTransitions = {};
        var run = function(nextCall) {
            var bound = false;
            var cb = function() {
                if (bound) {
                    self.unbind(transitionEnd, cb);
                }
                if (i > 0) {
                    self.each(function() {
                        this.style[support.transition] = (oldTransitions[this] || null);
                    });
                }
                if (typeof callback === 'function') {
                    callback.apply(self);
                }
                if (typeof nextCall === 'function') {
                    nextCall();
                }
            };
            if ((i > 0) && (transitionEnd) && ($.transit.useTransitionEnd)) {
                bound = true;
                self.bind(transitionEnd, cb);
            } else {
                window.setTimeout(cb, i);
            }
            self.each(function() {
                if (i > 0) {
                    this.style[support.transition] = transitionValue;
                }
                $(this).css(theseProperties);
            });
        };
        var deferredRun = function(next) {
            this.offsetWidth;
            run(next);
        };
        callOrQueue(self, queue, deferredRun);
        return this;
    };

    function registerCssHook(prop, isPixels) {
        if (!isPixels) {
            $.cssNumber[prop] = true;
        }
        $.transit.propertyMap[prop] = support.transform;
        $.cssHooks[prop] = {
            get: function(elem) {
                var t = $(elem).css('transit:transform');
                return t.get(prop);
            },
            set: function(elem, value) {
                var t = $(elem).css('transit:transform');
                t.setFromString(prop, value);
                $(elem).css({
                    'transit:transform': t
                });
            }
        };
    }

    function uncamel(str) {
        return str.replace(/([A-Z])/g, function(letter) {
            return '-' + letter.toLowerCase();
        });
    }

    function unit(i, units) {
        if ((typeof i === "string") && (!i.match(/^[\-0-9\.]+$/))) {
            return i;
        } else {
            return "" + i + units;
        }
    }

    function toMS(duration) {
        var i = duration;
        if (typeof i === 'string' && (!i.match(/^[\-0-9\.]+/))) {
            i = $.fx.speeds[i] || $.fx.speeds._default;
        }
        return unit(i, 'ms');
    }
    $.transit.getTransitionValue = getTransition;
    return $;
}));
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], module);
    } else {
        module(jQuery);
    }
})(function(jQuery, undefined) {
    var
        threshold = 6,
        add = jQuery.event.add,
        remove = jQuery.event.remove,
        trigger = function(node, type, data) {
            jQuery.event.trigger(type, data, node);
        },
        requestFrame = (function() {
            return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(fn, element) {
                return window.setTimeout(function() {
                    fn();
                }, 25);
            });
        })(),
        ignoreTags = {
            textarea: true,
            input: true,
            select: true,
            button: true
        },
        mouseevents = {
            move: 'mousemove',
            cancel: 'mouseup dragstart',
            end: 'mouseup'
        },
        touchevents = {
            move: 'touchmove',
            cancel: 'touchend',
            end: 'touchend'
        };

    function Timer(fn) {
        var callback = fn,
            active = false,
            running = false;

        function trigger(time) {
            if (active) {
                callback();
                requestFrame(trigger);
                running = true;
                active = false;
            } else {
                running = false;
            }
        }
        this.kick = function(fn) {
            active = true;
            if (!running) {
                trigger();
            }
        };
        this.end = function(fn) {
            var cb = callback;
            if (!fn) {
                return;
            }
            if (!running) {
                fn();
            } else {
                callback = active ? function() {
                    cb();
                    fn();
                } : fn;
                active = true;
            }
        };
    }

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventIgnoreTags(e) {
        if (ignoreTags[e.target.tagName.toLowerCase()]) {
            return;
        }
        e.preventDefault();
    }

    function isLeftButton(e) {
        return (e.which === 1 && !e.ctrlKey && !e.altKey);
    }

    function identifiedTouch(touchList, id) {
        var i, l;
        if (touchList.identifiedTouch) {
            return touchList.identifiedTouch(id);
        }
        i = -1;
        l = touchList.length;
        while (++i < l) {
            if (touchList[i].identifier === id) {
                return touchList[i];
            }
        }
    }

    function changedTouch(e, event) {
        var touch = identifiedTouch(e.changedTouches, event.identifier);
        if (!touch) {
            return;
        }
        if (touch.pageX === event.pageX && touch.pageY === event.pageY) {
            return;
        }
        return touch;
    }

    function mousedown(e) {
        var data;
        if (!isLeftButton(e)) {
            return;
        }
        data = {
            target: e.target,
            startX: e.pageX,
            startY: e.pageY,
            timeStamp: e.timeStamp
        };
        add(document, mouseevents.move, mousemove, data);
        add(document, mouseevents.cancel, mouseend, data);
    }

    function mousemove(e) {
        var data = e.data;
        checkThreshold(e, data, e, removeMouse);
    }

    function mouseend(e) {
        removeMouse();
    }

    function removeMouse() {
        remove(document, mouseevents.move, mousemove);
        remove(document, mouseevents.cancel, mouseend);
    }

    function touchstart(e) {
        var touch, template;
        if (ignoreTags[e.target.tagName.toLowerCase()]) {
            return;
        }
        touch = e.changedTouches[0];
        template = {
            target: touch.target,
            startX: touch.pageX,
            startY: touch.pageY,
            timeStamp: e.timeStamp,
            identifier: touch.identifier
        };
        add(document, touchevents.move + '.' + touch.identifier, touchmove, template);
        add(document, touchevents.cancel + '.' + touch.identifier, touchend, template);
    }

    function touchmove(e) {
        var data = e.data,
            touch = changedTouch(e, data);
        if (!touch) {
            return;
        }
        checkThreshold(e, data, touch, removeTouch);
    }

    function touchend(e) {
        var template = e.data,
            touch = identifiedTouch(e.changedTouches, template.identifier);
        if (!touch) {
            return;
        }
        removeTouch(template.identifier);
    }

    function removeTouch(identifier) {
        remove(document, '.' + identifier, touchmove);
        remove(document, '.' + identifier, touchend);
    }

    function checkThreshold(e, template, touch, fn) {
        var distX = touch.pageX - template.startX,
            distY = touch.pageY - template.startY;
        if ((distX * distX) + (distY * distY) < (threshold * threshold)) {
            return;
        }
        triggerStart(e, template, touch, distX, distY, fn);
    }

    function handled() {
        this._handled = returnTrue;
        return false;
    }

    function flagAsHandled(e) {
        e._handled();
    }

    function triggerStart(e, template, touch, distX, distY, fn) {
        var node = template.target,
            touches, time;
        touches = e.targetTouches;
        time = e.timeStamp - template.timeStamp;
        template.type = 'movestart';
        template.distX = distX;
        template.distY = distY;
        template.deltaX = distX;
        template.deltaY = distY;
        template.pageX = touch.pageX;
        template.pageY = touch.pageY;
        template.velocityX = distX / time;
        template.velocityY = distY / time;
        template.targetTouches = touches;
        template.finger = touches ? touches.length : 1;
        template._handled = handled;
        template._preventTouchmoveDefault = function() {
            e.preventDefault();
        };
        trigger(template.target, template);
        fn(template.identifier);
    }

    function activeMousemove(e) {
        var timer = e.data.timer;
        e.data.touch = e;
        e.data.timeStamp = e.timeStamp;
        timer.kick();
    }

    function activeMouseend(e) {
        var event = e.data.event,
            timer = e.data.timer;
        removeActiveMouse();
        endEvent(event, timer, function() {
            setTimeout(function() {
                remove(event.target, 'click', returnFalse);
            }, 0);
        });
    }

    function removeActiveMouse(event) {
        remove(document, mouseevents.move, activeMousemove);
        remove(document, mouseevents.end, activeMouseend);
    }

    function activeTouchmove(e) {
        var event = e.data.event,
            timer = e.data.timer,
            touch = changedTouch(e, event);
        if (!touch) {
            return;
        }
        e.preventDefault();
        event.targetTouches = e.targetTouches;
        e.data.touch = touch;
        e.data.timeStamp = e.timeStamp;
        timer.kick();
    }

    function activeTouchend(e) {
        var event = e.data.event,
            timer = e.data.timer,
            touch = identifiedTouch(e.changedTouches, event.identifier);
        if (!touch) {
            return;
        }
        removeActiveTouch(event);
        endEvent(event, timer);
    }

    function removeActiveTouch(event) {
        remove(document, '.' + event.identifier, activeTouchmove);
        remove(document, '.' + event.identifier, activeTouchend);
    }

    function updateEvent(event, touch, timeStamp, timer) {
        var time = timeStamp - event.timeStamp;
        event.type = 'move';
        event.distX = touch.pageX - event.startX;
        event.distY = touch.pageY - event.startY;
        event.deltaX = touch.pageX - event.pageX;
        event.deltaY = touch.pageY - event.pageY;
        event.velocityX = 0.3 * event.velocityX + 0.7 * event.deltaX / time;
        event.velocityY = 0.3 * event.velocityY + 0.7 * event.deltaY / time;
        event.pageX = touch.pageX;
        event.pageY = touch.pageY;
    }

    function endEvent(event, timer, fn) {
        timer.end(function() {
            event.type = 'moveend';
            trigger(event.target, event);
            return fn && fn();
        });
    }

    function setup(data, namespaces, eventHandle) {
        add(this, 'movestart.move', flagAsHandled);
        return true;
    }

    function teardown(namespaces) {
        remove(this, 'dragstart drag', preventDefault);
        remove(this, 'mousedown touchstart', preventIgnoreTags);
        remove(this, 'movestart', flagAsHandled);
        return true;
    }

    function addMethod(handleObj) {
        if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
            return;
        }
        add(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid, preventDefault, undefined, handleObj.selector);
        add(this, 'mousedown.' + handleObj.guid, preventIgnoreTags, undefined, handleObj.selector);
    }

    function removeMethod(handleObj) {
        if (handleObj.namespace === "move" || handleObj.namespace === "moveend") {
            return;
        }
        remove(this, 'dragstart.' + handleObj.guid + ' drag.' + handleObj.guid);
        remove(this, 'mousedown.' + handleObj.guid);
    }
    jQuery.event.special.movestart = {
        setup: setup,
        teardown: teardown,
        add: addMethod,
        remove: removeMethod,
        _default: function(e) {
            var event, data;
            if (!e._handled()) {
                return;
            }

            function update(time) {
                updateEvent(event, data.touch, data.timeStamp);
                trigger(e.target, event);
            }
            event = {
                target: e.target,
                startX: e.startX,
                startY: e.startY,
                pageX: e.pageX,
                pageY: e.pageY,
                distX: e.distX,
                distY: e.distY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                velocityX: e.velocityX,
                velocityY: e.velocityY,
                timeStamp: e.timeStamp,
                identifier: e.identifier,
                targetTouches: e.targetTouches,
                finger: e.finger
            };
            data = {
                event: event,
                timer: new Timer(update),
                touch: undefined,
                timeStamp: undefined
            };
            if (e.identifier === undefined) {
                add(e.target, 'click', returnFalse);
                add(document, mouseevents.move, activeMousemove, data);
                add(document, mouseevents.end, activeMouseend, data);
            } else {
                e._preventTouchmoveDefault();
                add(document, touchevents.move + '.' + e.identifier, activeTouchmove, data);
                add(document, touchevents.end + '.' + e.identifier, activeTouchend, data);
            }
        }
    };
    jQuery.event.special.move = {
        setup: function() {
            add(this, 'movestart.move', jQuery.noop);
        },
        teardown: function() {
            remove(this, 'movestart.move', jQuery.noop);
        }
    };
    jQuery.event.special.moveend = {
        setup: function() {
            add(this, 'movestart.moveend', jQuery.noop);
        },
        teardown: function() {
            remove(this, 'movestart.moveend', jQuery.noop);
        }
    };
    add(document, 'mousedown.move', mousedown);
    add(document, 'touchstart.move', touchstart);
    if (typeof Array.prototype.indexOf === 'function') {
        (function(jQuery, undefined) {
            var props = ["changedTouches", "targetTouches"],
                l = props.length;
            while (l--) {
                if (jQuery.event.props.indexOf(props[l]) === -1) {
                    jQuery.event.props.push(props[l]);
                }
            }
        })(jQuery);
    };
});
(function(thisModule) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], thisModule);
    } else if ((typeof module !== "undefined" && module !== null) && module.exports) {
        module.exports = thisModule;
    } else {
        thisModule(jQuery);
    }
})(function(jQuery, undefined) {
    var add = jQuery.event.add,
        remove = jQuery.event.remove,
        trigger = function(node, type, data) {
            jQuery.event.trigger(type, data, node);
        },
        settings = {
            threshold: 0.4,
            sensitivity: 6
        };

    function moveend(e) {
        var w, h, event;
        w = e.currentTarget.offsetWidth;
        h = e.currentTarget.offsetHeight;
        event = {
            distX: e.distX,
            distY: e.distY,
            velocityX: e.velocityX,
            velocityY: e.velocityY,
            finger: e.finger
        };
        if (e.distX > e.distY) {
            if (e.distX > -e.distY) {
                if (e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
                    event.type = 'swiperight';
                    trigger(e.currentTarget, event);
                }
            } else {
                if (-e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
                    event.type = 'swipeup';
                    trigger(e.currentTarget, event);
                }
            }
        } else {
            if (e.distX > -e.distY) {
                if (e.distY / h > settings.threshold || e.velocityY * e.distY / w * settings.sensitivity > 1) {
                    event.type = 'swipedown';
                    trigger(e.currentTarget, event);
                }
            } else {
                if (-e.distX / w > settings.threshold || e.velocityX * e.distX / w * settings.sensitivity > 1) {
                    event.type = 'swipeleft';
                    trigger(e.currentTarget, event);
                }
            }
        }
    }

    function getData(node) {
        var data = jQuery.data(node, 'event_swipe');
        if (!data) {
            data = {
                count: 0
            };
            jQuery.data(node, 'event_swipe', data);
        }
        return data;
    }
    jQuery.event.special.swipe = jQuery.event.special.swipeleft = jQuery.event.special.swiperight = jQuery.event.special.swipeup = jQuery.event.special.swipedown = {
        setup: function(data, namespaces, eventHandle) {
            var data = getData(this);
            if (data.count++ > 0) {
                return;
            }
            add(this, 'moveend', moveend);
            return true;
        },
        teardown: function() {
            var data = getData(this);
            if (--data.count > 0) {
                return;
            }
            remove(this, 'moveend', moveend);
            return true;
        },
        settings: settings
    };
});
(function(win) {
    if ( /*@cc_on!@*/ true) return;
    var doc = document;
    var root = doc.documentElement;
    var xhr = getXHRObject();
    var ieVersion = /MSIE (\d+)/.exec(navigator.userAgent)[1];
    if (doc.compatMode != 'CSS1Compat' || ieVersion < 6 || ieVersion > 8 || !xhr) {
        return;
    }
    var selectorEngines = {
        "NW": "*.Dom.select",
        "MooTools": "$$",
        "DOMAssistant": "*.$",
        "Prototype": "$$",
        "YAHOO": "*.util.Selector.query",
        "Sizzle": "*",
        "jQuery": "*",
        "dojo": "*.query"
    };
    var selectorMethod;
    var enabledWatchers = [];
    var ie6PatchID = 0;
    var patchIE6MultipleClasses = true;
    var namespace = "slvzr";
    var RE_COMMENT = /(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g;
    var RE_IMPORT = /@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g;
    var RE_ASSET_URL = /\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g;
    var RE_PSEUDO_STRUCTURAL = /^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;
    var RE_PSEUDO_ELEMENTS = /:(:first-(?:line|letter))/g;
    var RE_SELECTOR_GROUP = /(^|})\s*([^\{]*?[\[:][^{]+)/g;
    var RE_SELECTOR_PARSE = /([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g;
    var RE_LIBRARY_INCOMPATIBLE_PSEUDOS = /(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;
    var RE_PATCH_CLASS_NAME_REPLACE = /[^\w-]/g;
    var RE_INPUT_ELEMENTS = /^(INPUT|SELECT|TEXTAREA|BUTTON)$/;
    var RE_INPUT_CHECKABLE_TYPES = /^(checkbox|radio)$/;
    var BROKEN_ATTR_IMPLEMENTATIONS = ieVersion > 6 ? /[\$\^*]=(['"])\1/ : null;
    var RE_TIDY_TRAILING_WHITESPACE = /([(\[+~])\s+/g;
    var RE_TIDY_LEADING_WHITESPACE = /\s+([)\]+~])/g;
    var RE_TIDY_CONSECUTIVE_WHITESPACE = /\s+/g;
    var RE_TIDY_TRIM_WHITESPACE = /^\s*((?:[\S\s]*\S)?)\s*$/;
    var EMPTY_STRING = "";
    var SPACE_STRING = " ";
    var PLACEHOLDER_STRING = "$1";

    function patchStyleSheet(cssText) {
        return cssText.replace(RE_PSEUDO_ELEMENTS, PLACEHOLDER_STRING).replace(RE_SELECTOR_GROUP, function(m, prefix, selectorText) {
            var selectorGroups = selectorText.split(",");
            for (var c = 0, cs = selectorGroups.length; c < cs; c++) {
                var selector = normalizeSelectorWhitespace(selectorGroups[c]) + SPACE_STRING;
                var patches = [];
                selectorGroups[c] = selector.replace(RE_SELECTOR_PARSE, function(match, combinator, pseudo, attribute, index) {
                    if (combinator) {
                        if (patches.length > 0) {
                            applyPatches(selector.substring(0, index), patches);
                            patches = [];
                        }
                        return combinator;
                    } else {
                        var patch = (pseudo) ? patchPseudoClass(pseudo) : patchAttribute(attribute);
                        if (patch) {
                            patches.push(patch);
                            return "." + patch.className;
                        }
                        return match;
                    }
                });
            }
            return prefix + selectorGroups.join(",");
        });
    };

    function patchAttribute(attr) {
        return (!BROKEN_ATTR_IMPLEMENTATIONS || BROKEN_ATTR_IMPLEMENTATIONS.test(attr)) ? {
            className: createClassName(attr),
            applyClass: true
        } : null;
    };

    function patchPseudoClass(pseudo) {
        var applyClass = true;
        var className = createClassName(pseudo.slice(1));
        var isNegated = pseudo.substring(0, 5) == ":not(";
        var activateEventName;
        var deactivateEventName;
        if (isNegated) {
            pseudo = pseudo.slice(5, -1);
        }
        var bracketIndex = pseudo.indexOf("(")
        if (bracketIndex > -1) {
            pseudo = pseudo.substring(0, bracketIndex);
        }
        if (pseudo.charAt(0) == ":") {
            switch (pseudo.slice(1)) {
                case "root":
                    applyClass = function(e) {
                        return isNegated ? e != root : e == root;
                    }
                    break;
                case "target":
                    if (ieVersion == 8) {
                        applyClass = function(e) {
                            var handler = function() {
                                var hash = location.hash;
                                var hashID = hash.slice(1);
                                return isNegated ? (hash == EMPTY_STRING || e.id != hashID) : (hash != EMPTY_STRING && e.id == hashID);
                            };
                            addEvent(win, "hashchange", function() {
                                toggleElementClass(e, className, handler());
                            })
                            return handler();
                        }
                        break;
                    }
                    return false;
                case "checked":
                    applyClass = function(e) {
                        if (RE_INPUT_CHECKABLE_TYPES.test(e.type)) {
                            addEvent(e, "propertychange", function() {
                                if (event.propertyName == "checked") {
                                    toggleElementClass(e, className, e.checked !== isNegated);
                                }
                            })
                        }
                        return e.checked !== isNegated;
                    }
                    break;
                case "disabled":
                    isNegated = !isNegated;
                case "enabled":
                    applyClass = function(e) {
                        if (RE_INPUT_ELEMENTS.test(e.tagName)) {
                            addEvent(e, "propertychange", function() {
                                if (event.propertyName == "$disabled") {
                                    toggleElementClass(e, className, e.$disabled === isNegated);
                                }
                            });
                            enabledWatchers.push(e);
                            e.$disabled = e.disabled;
                            return e.disabled === isNegated;
                        }
                        return pseudo == ":enabled" ? isNegated : !isNegated;
                    }
                    break;
                case "focus":
                    activateEventName = "focus";
                    deactivateEventName = "blur";
                case "hover":
                    if (!activateEventName) {
                        activateEventName = "mouseenter";
                        deactivateEventName = "mouseleave";
                    }
                    applyClass = function(e) {
                        addEvent(e, isNegated ? deactivateEventName : activateEventName, function() {
                            toggleElementClass(e, className, true);
                        })
                        addEvent(e, isNegated ? activateEventName : deactivateEventName, function() {
                            toggleElementClass(e, className, false);
                        })
                        return isNegated;
                    }
                    break;
                default:
                    if (!RE_PSEUDO_STRUCTURAL.test(pseudo)) {
                        return false;
                    }
                    break;
            }
        }
        return {
            className: className,
            applyClass: applyClass
        };
    };

    function applyPatches(selectorText, patches) {
        var elms;
        var domSelectorText = selectorText.replace(RE_LIBRARY_INCOMPATIBLE_PSEUDOS, EMPTY_STRING);
        if (domSelectorText == EMPTY_STRING || domSelectorText.charAt(domSelectorText.length - 1) == SPACE_STRING) {
            domSelectorText += "*";
        }
        try {
            elms = selectorMethod(domSelectorText);
        } catch (ex) {
            log("Selector '" + selectorText + "' threw exception '" + ex + "'");
        }
        if (elms) {
            for (var d = 0, dl = elms.length; d < dl; d++) {
                var elm = elms[d];
                var cssClasses = elm.className;
                for (var f = 0, fl = patches.length; f < fl; f++) {
                    var patch = patches[f];
                    if (!hasPatch(elm, patch)) {
                        if (patch.applyClass && (patch.applyClass === true || patch.applyClass(elm) === true)) {
                            cssClasses = toggleClass(cssClasses, patch.className, true);
                        }
                    }
                }
                elm.className = cssClasses;
            }
        }
    };

    function hasPatch(elm, patch) {
        return new RegExp("(^|\\s)" + patch.className + "(\\s|$)").test(elm.className);
    };

    function createClassName(className) {
        return namespace + "-" + ((ieVersion == 6 && patchIE6MultipleClasses) ? ie6PatchID++ : className.replace(RE_PATCH_CLASS_NAME_REPLACE, function(a) {
            return a.charCodeAt(0)
        }));
    };

    function log(message) {
        if (win.console) {
            win.console.log(message);
        }
    };

    function trim(text) {
        return text.replace(RE_TIDY_TRIM_WHITESPACE, PLACEHOLDER_STRING);
    };

    function normalizeWhitespace(text) {
        return trim(text).replace(RE_TIDY_CONSECUTIVE_WHITESPACE, SPACE_STRING);
    };

    function normalizeSelectorWhitespace(selectorText) {
        return normalizeWhitespace(selectorText.replace(RE_TIDY_TRAILING_WHITESPACE, PLACEHOLDER_STRING).replace(RE_TIDY_LEADING_WHITESPACE, PLACEHOLDER_STRING));
    };

    function toggleElementClass(elm, className, on) {
        var oldClassName = elm.className;
        var newClassName = toggleClass(oldClassName, className, on);
        if (newClassName != oldClassName) {
            elm.className = newClassName;
            elm.parentNode.className += EMPTY_STRING;
        }
    };

    function toggleClass(classList, className, on) {
        var re = RegExp("(^|\\s)" + className + "(\\s|$)");
        var classExists = re.test(classList);
        if (on) {
            return classExists ? classList : classList + SPACE_STRING + className;
        } else {
            return classExists ? trim(classList.replace(re, PLACEHOLDER_STRING)) : classList;
        }
    };

    function addEvent(elm, eventName, eventHandler) {
        elm.attachEvent("on" + eventName, eventHandler);
    };

    function getXHRObject() {
        if (win.XMLHttpRequest) {
            return new XMLHttpRequest;
        }
        try {
            return new ActiveXObject('Microsoft.XMLHTTP');
        } catch (e) {
            return null;
        }
    };

    function loadStyleSheet(url) {
        xhr.open("GET", url, false);
        xhr.send();
        return (xhr.status == 200) ? xhr.responseText : EMPTY_STRING;
    };

    function resolveUrl(url, contextUrl) {
        function getProtocolAndHost(url) {
            return url.substring(0, url.indexOf("/", 8));
        };
        if (/^https?:\/\//i.test(url)) {
            return getProtocolAndHost(contextUrl) == getProtocolAndHost(url) ? url : null;
        }
        if (url.charAt(0) == "/") {
            return getProtocolAndHost(contextUrl) + url;
        }
        var contextUrlPath = contextUrl.split(/[?#]/)[0];
        if (url.charAt(0) != "?" && contextUrlPath.charAt(contextUrlPath.length - 1) != "/") {
            contextUrlPath = contextUrlPath.substring(0, contextUrlPath.lastIndexOf("/") + 1);
        }
        return contextUrlPath + url;
    };

    function parseStyleSheet(url) {
        if (url) {
            return loadStyleSheet(url).replace(RE_COMMENT, EMPTY_STRING).replace(RE_IMPORT, function(match, quoteChar, importUrl, quoteChar2, importUrl2) {
                return parseStyleSheet(resolveUrl(importUrl || importUrl2, url));
            }).replace(RE_ASSET_URL, function(match, quoteChar, assetUrl) {
                quoteChar = quoteChar || EMPTY_STRING;
                return " url(" + quoteChar + resolveUrl(assetUrl, url) + quoteChar + ") ";
            });
        }
        return EMPTY_STRING;
    };

    function init() {
        var url, stylesheet;
        var baseTags = doc.getElementsByTagName("BASE");
        var baseUrl = (baseTags.length > 0) ? baseTags[0].href : doc.location.href;
        for (var c = 0; c < doc.styleSheets.length; c++) {
            stylesheet = doc.styleSheets[c]
            if (stylesheet.href != EMPTY_STRING) {
                url = resolveUrl(stylesheet.href, baseUrl);
                if (url) {
                    stylesheet.cssText = patchStyleSheet(parseStyleSheet(url));
                }
            }
        }
        if (enabledWatchers.length > 0) {
            setInterval(function() {
                for (var c = 0, cl = enabledWatchers.length; c < cl; c++) {
                    var e = enabledWatchers[c];
                    if (e.disabled !== e.$disabled) {
                        if (e.disabled) {
                            e.disabled = false;
                            e.$disabled = true;
                            e.disabled = true;
                        } else {
                            e.$disabled = e.disabled;
                        }
                    }
                }
            }, 250)
        }
    };
    ContentLoaded(win, function() {
        for (var engine in selectorEngines) {
            var members, member, context = win;
            if (win[engine]) {
                members = selectorEngines[engine].replace("*", engine).split(".");
                while ((member = members.shift()) && (context = context[member])) {}
                if (typeof context == "function") {
                    selectorMethod = context;
                    init();
                    return;
                }
            }
        }
    });
    /*!
     * ContentLoaded.js by Diego Perini, modified for IE<9 only (to save space)
     *
     * Author: Diego Perini (diego.perini at gmail.com)
     * Summary: cross-browser wrapper for DOMContentLoaded
     * Updated: 20101020
     * License: MIT
     * Version: 1.2
     *
     * URL:
     * http://javascript.nwbox.com/ContentLoaded/
     * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
     *
     */
    function ContentLoaded(win, fn) {
        var done = false,
            top = true,
            init = function(e) {
                if (e.type == "readystatechange" && doc.readyState != "complete") return;
                (e.type == "load" ? win : doc).detachEvent("on" + e.type, init, false);
                if (!done && (done = true)) fn.call(win, e.type || e);
            },
            poll = function() {
                try {
                    root.doScroll("left");
                } catch (e) {
                    setTimeout(poll, 50);
                    return;
                }
                init('poll');
            };
        if (doc.readyState == "complete") fn.call(win, EMPTY_STRING);
        else {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement;
                } catch (e) {}
                if (top) poll();
            }
            addEvent(doc, "readystatechange", init);
            addEvent(win, "load", init);
        }
    };
})(this);
/*! http://mths.be/placeholder v2.0.8 by @mathias */
;
(function(window, document, $) {
    var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
    var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
    var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;
    if (isInputSupported && isTextareaSupported) {
        placeholder = prototype.placeholder = function() {
            return this;
        };
        placeholder.input = placeholder.textarea = true;
    } else {
        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
                'focus.placeholder': clearPlaceholder,
                'blur.placeholder': setPlaceholder
            }).data('placeholder-enabled', true).trigger('blur.placeholder');
            return $this;
        };
        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;
        hooks = {
            'get': function(element) {
                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function(element, value) {
                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    if (element != safeActiveElement()) {
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                return $element;
            }
        };
        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }
        $(function() {
            $(document).delegate('form', 'submit.placeholder', function() {
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });
        $(window).bind('beforeunload.placeholder', function() {
            $('.placeholder').each(function() {
                this.value = '';
            });
        });
    }

    function args(elem) {
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({
                            'type': 'text'
                        });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), {
                            'type': 'text'
                        }));
                    }
                    $replacement.removeAttr('name').data({
                        'placeholder-password': $input,
                        'placeholder-id': id
                    }).bind('focus.placeholder', clearPlaceholder);
                    $input.data({
                        'placeholder-textinput': $replacement,
                        'placeholder-id': id
                    }).before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (exception) {}
    }
}(this, document, jQuery));
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
(function(w) {
    "use strict";
    w.matchMedia = w.matchMedia || function(doc, undefined) {
        var bool, docElem = doc.documentElement,
            refNode = docElem.firstElementChild || docElem.firstChild,
            fakeBody = doc.createElement("body"),
            div = doc.createElement("div");
        div.id = "mq-test-1";
        div.style.cssText = "position:absolute;top:-100em";
        fakeBody.style.background = "none";
        fakeBody.appendChild(div);
        return function(q) {
            div.innerHTML = '&shy;<style media="' + q + '"> #mq-test-1 { width: 42px; }</style>';
            docElem.insertBefore(fakeBody, refNode);
            bool = div.offsetWidth === 42;
            docElem.removeChild(fakeBody);
            return {
                matches: bool,
                media: q
            };
        };
    }(w.document);
})(this);
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(w) {
    "use strict";
    if (w.matchMedia && w.matchMedia("all").addListener) {
        return false;
    }
    var localMatchMedia = w.matchMedia,
        hasMediaQueries = localMatchMedia("only all").matches,
        isListening = false,
        timeoutID = 0,
        queries = [],
        handleChange = function(evt) {
            w.clearTimeout(timeoutID);
            timeoutID = w.setTimeout(function() {
                for (var i = 0, il = queries.length; i < il; i++) {
                    var mql = queries[i].mql,
                        listeners = queries[i].listeners || [],
                        matches = localMatchMedia(mql.media).matches;
                    if (matches !== mql.matches) {
                        mql.matches = matches;
                        for (var j = 0, jl = listeners.length; j < jl; j++) {
                            listeners[j].call(w, mql);
                        }
                    }
                }
            }, 30);
        };
    w.matchMedia = function(media) {
        var mql = localMatchMedia(media),
            listeners = [],
            index = 0;
        mql.addListener = function(listener) {
            if (!hasMediaQueries) {
                return;
            }
            if (!isListening) {
                isListening = true;
                w.addEventListener("resize", handleChange, true);
            }
            if (index === 0) {
                index = queries.push({
                    mql: mql,
                    listeners: listeners
                });
            }
            listeners.push(listener);
        };
        mql.removeListener = function(listener) {
            for (var i = 0, il = listeners.length; i < il; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                }
            }
        };
        return mql;
    };
})(this);
(function(w) {
    "use strict";
    var respond = {};
    w.respond = respond;
    respond.update = function() {};
    var requestQueue = [],
        xmlHttp = function() {
            var xmlhttpmethod = false;
            try {
                xmlhttpmethod = new w.XMLHttpRequest();
            } catch (e) {
                xmlhttpmethod = new w.ActiveXObject("Microsoft.XMLHTTP");
            }
            return function() {
                return xmlhttpmethod;
            };
        }(),
        ajax = function(url, callback) {
            var req = xmlHttp();
            if (!req) {
                return;
            }
            req.open("GET", url, true);
            req.onreadystatechange = function() {
                if (req.readyState !== 4 || req.status !== 200 && req.status !== 304) {
                    return;
                }
                callback(req.responseText);
            };
            if (req.readyState === 4) {
                return;
            }
            req.send(null);
        },
        isUnsupportedMediaQuery = function(query) {
            return query.replace(respond.regex.minmaxwh, "").match(respond.regex.other);
        };
    respond.ajax = ajax;
    respond.queue = requestQueue;
    respond.unsupportedmq = isUnsupportedMediaQuery;
    respond.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    };
    respond.mediaQueriesSupported = w.matchMedia && w.matchMedia("only all") !== null && w.matchMedia("only all").matches;
    if (respond.mediaQueriesSupported) {
        return;
    }
    var doc = w.document,
        docElem = doc.documentElement,
        mediastyles = [],
        rules = [],
        appendedEls = [],
        parsedSheets = {},
        resizeThrottle = 30,
        head = doc.getElementsByTagName("head")[0] || docElem,
        base = doc.getElementsByTagName("base")[0],
        links = head.getElementsByTagName("link"),
        lastCall, resizeDefer, eminpx, getEmValue = function() {
            var ret, div = doc.createElement("div"),
                body = doc.body,
                originalHTMLFontSize = docElem.style.fontSize,
                originalBodyFontSize = body && body.style.fontSize,
                fakeUsed = false;
            div.style.cssText = "position:absolute;font-size:1em;width:1em";
            if (!body) {
                body = fakeUsed = doc.createElement("body");
                body.style.background = "none";
            }
            docElem.style.fontSize = "100%";
            body.style.fontSize = "100%";
            body.appendChild(div);
            if (fakeUsed) {
                docElem.insertBefore(body, docElem.firstChild);
            }
            ret = div.offsetWidth;
            if (fakeUsed) {
                docElem.removeChild(body);
            } else {
                body.removeChild(div);
            }
            docElem.style.fontSize = originalHTMLFontSize;
            if (originalBodyFontSize) {
                body.style.fontSize = originalBodyFontSize;
            }
            ret = eminpx = parseFloat(ret);
            return ret;
        },
        applyMedia = function(fromResize) {
            var name = "clientWidth",
                docElemProp = docElem[name],
                currWidth = doc.compatMode === "CSS1Compat" && docElemProp || doc.body[name] || docElemProp,
                styleBlocks = {},
                lastLink = links[links.length - 1],
                now = new Date().getTime();
            if (fromResize && lastCall && now - lastCall < resizeThrottle) {
                w.clearTimeout(resizeDefer);
                resizeDefer = w.setTimeout(applyMedia, resizeThrottle);
                return;
            } else {
                lastCall = now;
            }
            for (var i in mediastyles) {
                if (mediastyles.hasOwnProperty(i)) {
                    var thisstyle = mediastyles[i],
                        min = thisstyle.minw,
                        max = thisstyle.maxw,
                        minnull = min === null,
                        maxnull = max === null,
                        em = "em";
                    if (!!min) {
                        min = parseFloat(min) * (min.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
                    }
                    if (!!max) {
                        max = parseFloat(max) * (max.indexOf(em) > -1 ? eminpx || getEmValue() : 1);
                    }
                    if (!thisstyle.hasquery || (!minnull || !maxnull) && (minnull || currWidth >= min) && (maxnull || currWidth <= max)) {
                        if (!styleBlocks[thisstyle.media]) {
                            styleBlocks[thisstyle.media] = [];
                        }
                        styleBlocks[thisstyle.media].push(rules[thisstyle.rules]);
                    }
                }
            }
            for (var j in appendedEls) {
                if (appendedEls.hasOwnProperty(j)) {
                    if (appendedEls[j] && appendedEls[j].parentNode === head) {
                        head.removeChild(appendedEls[j]);
                    }
                }
            }
            appendedEls.length = 0;
            for (var k in styleBlocks) {
                if (styleBlocks.hasOwnProperty(k)) {
                    var ss = doc.createElement("style"),
                        css = styleBlocks[k].join("\n");
                    ss.type = "text/css";
                    ss.media = k;
                    head.insertBefore(ss, lastLink.nextSibling);
                    if (ss.styleSheet) {
                        ss.styleSheet.cssText = css;
                    } else {
                        ss.appendChild(doc.createTextNode(css));
                    }
                    appendedEls.push(ss);
                }
            }
        },
        translate = function(styles, href, media) {
            var qs = styles.replace(respond.regex.comments, "").replace(respond.regex.keyframes, "").match(respond.regex.media),
                ql = qs && qs.length || 0;
            href = href.substring(0, href.lastIndexOf("/"));
            var repUrls = function(css) {
                    return css.replace(respond.regex.urls, "$1" + href + "$2$3");
                },
                useMedia = !ql && media;
            if (href.length) {
                href += "/";
            }
            if (useMedia) {
                ql = 1;
            }
            for (var i = 0; i < ql; i++) {
                var fullq, thisq, eachq, eql;
                if (useMedia) {
                    fullq = media;
                    rules.push(repUrls(styles));
                } else {
                    fullq = qs[i].match(respond.regex.findStyles) && RegExp.$1;
                    rules.push(RegExp.$2 && repUrls(RegExp.$2));
                }
                eachq = fullq.split(",");
                eql = eachq.length;
                for (var j = 0; j < eql; j++) {
                    thisq = eachq[j];
                    if (isUnsupportedMediaQuery(thisq)) {
                        continue;
                    }
                    mediastyles.push({
                        media: thisq.split("(")[0].match(respond.regex.only) && RegExp.$2 || "all",
                        rules: rules.length - 1,
                        hasquery: thisq.indexOf("(") > -1,
                        minw: thisq.match(respond.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: thisq.match(respond.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    });
                }
            }
            applyMedia();
        },
        makeRequests = function() {
            if (requestQueue.length) {
                var thisRequest = requestQueue.shift();
                ajax(thisRequest.href, function(styles) {
                    translate(styles, thisRequest.href, thisRequest.media);
                    parsedSheets[thisRequest.href] = true;
                    w.setTimeout(function() {
                        makeRequests();
                    }, 0);
                });
            }
        },
        ripCSS = function() {
            for (var i = 0; i < links.length; i++) {
                var sheet = links[i],
                    href = sheet.href,
                    media = sheet.media,
                    isCSS = sheet.rel && sheet.rel.toLowerCase() === "stylesheet";
                if (!!href && isCSS && !parsedSheets[href]) {
                    if (sheet.styleSheet && sheet.styleSheet.rawCssText) {
                        translate(sheet.styleSheet.rawCssText, href, media);
                        parsedSheets[href] = true;
                    } else {
                        if (!/^([a-zA-Z:]*\/\/)/.test(href) && !base || href.replace(RegExp.$1, "").split("/")[0] === w.location.host) {
                            if (href.substring(0, 2) === "//") {
                                href = w.location.protocol + href;
                            }
                            requestQueue.push({
                                href: href,
                                media: media
                            });
                        }
                    }
                }
            }
            makeRequests();
        };
    ripCSS();
    respond.update = ripCSS;
    respond.getEmValue = getEmValue;

    function callMedia() {
        applyMedia(true);
    }
    if (w.addEventListener) {
        w.addEventListener("resize", callMedia, false);
    } else if (w.attachEvent) {
        w.attachEvent("onresize", callMedia);
    }
})(this);;
(function($) {
    /*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
     * https://github.com/cowboy/jquery-tiny-pubsub
     * Copyright (c) 2014 "Cowboy" Ben Alman; Licensed MIT */
    var o = $({});
    $.subscribe = function() {
        o.on.apply(o, arguments);
    };
    $.unsubscribe = function() {
        o.off.apply(o, arguments);
    };
    $.publish = function() {
        o.trigger.apply(o, arguments);
    };
}(jQuery));;
(function($, window) {
    'use strict';
    var numberRegex = /^-?\d*\.?\d*$/,
        objectRegex = /^[[{]/;

    function deserializeValue(value) {
        try {
            return !value ? value : value === 'true' || (value === 'false' ? false : value === 'null' ? null : numberRegex.test(value) ? +value : objectRegex.test(value) ? $.parseJSON(value) : value);
        } catch (e) {
            return value;
        }
    }

    function PluginBase(name, element, options) {
        var me = this;
        me._name = name;
        me.$el = $(element);
        me.opts = $.extend({}, me.defaults || {}, options);
        me.eventSuffix = '.' + name;
        me._events = [];
        $.expr[':']['plugin-' + name.toLowerCase()] = function(elem) {
            return !!$.data(elem, 'plugin_' + name);
        };
        me.init();
        $.publish('plugin/' + name + '/onInit', [me]);
    }
    PluginBase.prototype = {
        init: function() {
            throw new Error('Plugin ' + this.getName() + ' has to have an init function!');
        },
        destroy: function() {
            if (typeof console !== 'undefined' && typeof console.warn === 'function') {
                console.warn('Plugin ' + this.getName() + ' should have a custom destroy method!');
            }
            this._destroy();
        },
        update: function() {},
        _destroy: function() {
            var me = this,
                name = me.getName();
            $.each(me._events, function(i, obj) {
                if (typeof obj === 'object') {
                    obj.el.off(obj.event);
                }
            });
            $.each(me.opts, function(o) {
                delete me.opts[o];
            });
            me.$el.removeData('plugin_' + name);
            $.publish('plugin/' + name + '/onDestroy', [me]);
            return me;
        },
        _on: function() {
            var me = this,
                $el = $(arguments[0]),
                event = me.getEventName(arguments[1]),
                args = Array.prototype.slice.call(arguments, 2);
            me._events.push({
                'el': $el,
                'event': event
            });
            args.unshift(event);
            $el.on.apply($el, args);
            $.publish('plugin/' + me._name + '/onRegisterEvent', [$el, event]);
            return me;
        },
        _off: function(element, event) {
            var me = this,
                events = me._events,
                pluginEvent = me.getEventName(event),
                eventIds = [],
                $element = $(element),
                filteredEvents = $.grep(events, function(obj, index) {
                    eventIds.push(index);
                    return typeof obj !== 'undefined' && pluginEvent === obj.event && $element[0] === obj.el[0];
                });
            $.each(filteredEvents, function(index, event) {
                $element.off(event.event);
            });
            $.each(eventIds, function(id) {
                if (!events[id]) {
                    return;
                }
                delete events[id];
            });
            $.publish('plugin/' + me._name + '/onRemoveEvent', [$element, event]);
            return me;
        },
        getName: function() {
            return this._name;
        },
        getEventName: function(event) {
            var suffix = this.eventSuffix,
                parts = event.split(' '),
                len = parts.length,
                i = 0;
            for (; i < len; i++) {
                parts[i] += suffix;
            }
            return parts.join(' ');
        },
        getElement: function() {
            return this.$el;
        },
        getOptions: function() {
            return $.extend({}, this.opts);
        },
        getOption: function(key) {
            return this.opts[key];
        },
        setOption: function(key, value) {
            var me = this;
            me.opts[key] = value;
            return me;
        },
        applyDataAttributes: function(shouldDeserialize) {
            var me = this,
                attr;
            $.each(me.opts, function(key) {
                attr = me.$el.attr('data-' + key);
                if (typeof attr === 'undefined') {
                    return true;
                }
                me.opts[key] = shouldDeserialize !== false ? deserializeValue(attr) : attr;
                return true;
            });
            $.publish('plugin/' + me._name + '/onDataAttributes', [me.$el, me.opts]);
            return me.opts;
        }
    };
    $.PluginBase = PluginBase;
    if (typeof Object.create !== 'function') {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }
    $.plugin = function(name, plugin) {
        var pluginFn = function(options) {
            return this.each(function() {
                var element = this,
                    pluginData = $.data(element, 'plugin_' + name);
                if (!pluginData) {
                    if (typeof plugin === 'function') {
                        pluginData = new plugin();
                    } else {
                        var Plugin = function() {
                            PluginBase.call(this, name, element, options);
                        };
                        Plugin.prototype = $.extend(Object.create(PluginBase.prototype), {
                            constructor: Plugin
                        }, plugin);
                        pluginData = new Plugin();
                    }
                    $.data(element, 'plugin_' + name, pluginData);
                }
            });
        };
        window.PluginsCollection = window.PluginsCollection || {};
        window.PluginsCollection[name] = plugin;
        $.fn[name] = pluginFn;
    };
    $.overridePlugin = function(pluginName, override) {
        var overridePlugin = window.PluginsCollection[pluginName];
        if (typeof overridePlugin !== 'object' || typeof override !== 'object') {
            return false;
        }
        $.fn[pluginName] = function(options) {
            return this.each(function() {
                var element = this,
                    pluginData = $.data(element, 'plugin_' + pluginName);
                if (!pluginData) {
                    var Plugin = function() {
                        PluginBase.call(this, pluginName, element, options);
                    };
                    Plugin.prototype = $.extend(Object.create(PluginBase.prototype), {
                        constructor: Plugin,
                        superclass: overridePlugin
                    }, overridePlugin, override);
                    pluginData = new Plugin();
                    $.data(element, 'plugin_' + pluginName, pluginData);
                }
            });
        };
    };
})(jQuery, window);;
(function($, window, document) {
    'use strict';
    var $html = $('html'),
        vendorPropertyDiv = document.createElement('div'),
        vendorPrefixes = ['webkit', 'moz', 'ms', 'o'];

    function EventEmitter() {
        var me = this;
        me._events = {};
    }
    EventEmitter.prototype = {
        constructor: EventEmitter,
        name: 'EventEmitter',
        on: function(eventName, callback, context) {
            var me = this,
                events = me._events || (me._events = {}),
                event = events[eventName] || (events[eventName] = []);
            event.push({
                callback: callback,
                context: context || me
            });
            return me;
        },
        once: function(eventName, callback, context) {
            var me = this,
                once = function() {
                    me.off(eventName, once, context);
                    callback.apply(me, arguments);
                };
            return me.on(eventName, once, context);
        },
        off: function(eventName, callback, context) {
            var me = this,
                events = me._events || (me._events = {}),
                eventNames = eventName ? [eventName] : Object.keys(events),
                eventList, event, name, len, i, j;
            for (i = 0, len = eventNames.length; i < len; i++) {
                name = eventNames[i];
                eventList = events[name];
                if (!eventList) {
                    return me;
                }
                if (!callback && !context) {
                    eventList.length = 0;
                    delete events[name];
                    continue;
                }
                for (j = eventList.length - 1; j >= 0; j--) {
                    event = eventList[j];
                    if ((callback && callback !== event.callback) || (context && context !== event.context)) {
                        continue;
                    }
                    eventList.splice(j, 1);
                }
            }
            return me;
        },
        trigger: function(eventName) {
            var me = this,
                events = me._events || (me._events = {}),
                eventList = events[eventName],
                event, args, a1, a2, a3, len, i;
            if (!eventList) {
                return me;
            }
            args = Array.prototype.slice.call(arguments, 1);
            len = eventList.length;
            i = -1;
            if (args.length <= 3) {
                a1 = args[0];
                a2 = args[1];
                a3 = args[2];
            }
            switch (args.length) {
                case 0:
                    while (++i < len)(event = eventList[i]).callback.call(event.context);
                    return me;
                case 1:
                    while (++i < len)(event = eventList[i]).callback.call(event.context, a1);
                    return me;
                case 2:
                    while (++i < len)(event = eventList[i]).callback.call(event.context, a1, a2);
                    return me;
                case 3:
                    while (++i < len)(event = eventList[i]).callback.call(event.context, a1, a2, a3);
                    return me;
                default:
                    while (++i < len)(event = eventList[i]).callback.apply(event.context, args);
                    return me;
            }
        },
        destroy: function() {
            this.off();
        }
    };
    window.StateManager = $.extend(Object.create(EventEmitter.prototype), {
        _breakpoints: [],
        _listeners: [],
        _plugins: {},
        _pluginQueue: {},
        _pluginsInitialized: false,
        _currentState: '',
        _previousState: '',
        _viewportWidth: 0,
        _vendorPropertyCache: {},
        init: function(breakpoints) {
            var me = this;
            me._viewportWidth = me.getViewportWidth();
            me._baseFontSize = parseInt($html.css('font-size'));
            me.registerBreakpoint(breakpoints);
            me._checkResize();
            me._browserDetection();
            me._setDeviceCookie();
            $($.proxy(me.initQueuedPlugins, me, true));
            $.publish('StateManager/onInit', [me]);
            return me;
        },
        registerBreakpoint: function(breakpoint) {
            var me = this,
                breakpoints = breakpoint instanceof Array ? breakpoint : Array.prototype.slice.call(arguments),
                len = breakpoints.length,
                i = 0;
            for (; i < len; i++) {
                me._addBreakpoint(breakpoints[i]);
            }
            return me;
        },
        _addBreakpoint: function(breakpoint) {
            var me = this,
                breakpoints = me._breakpoints,
                existingBreakpoint, state = breakpoint.state,
                enter = me._convertRemValue(breakpoint.enter),
                exit = me._convertRemValue(breakpoint.exit),
                len = breakpoints.length,
                i = 0;
            breakpoint.enter = enter;
            breakpoint.exit = exit;
            for (; i < len; i++) {
                existingBreakpoint = breakpoints[i];
                if (existingBreakpoint.state === state) {
                    throw new Error('Multiple breakpoints of state "' + state + '" detected.');
                }
                if (existingBreakpoint.enter <= exit && enter <= existingBreakpoint.exit) {
                    throw new Error('Breakpoint range of state "' + state + '" overlaps state "' + existingBreakpoint.state + '".');
                }
            }
            breakpoints.push(breakpoint);
            me._plugins[state] = {};
            me._checkBreakpoint(breakpoint, me._viewportWidth);
            return me;
        },
        _convertRemValue: function(remValue) {
            var me = this,
                baseFontSize = me._baseFontSize;
            return remValue * baseFontSize;
        },
        removeBreakpoint: function(state) {
            var me = this,
                breakpoints = me._breakpoints,
                len = breakpoints.length,
                i = 0;
            if (typeof state !== 'string') {
                return me;
            }
            for (; i < len; i++) {
                if (state !== breakpoints[i].state) {
                    continue;
                }
                breakpoints.splice(i, 1);
                return me._removeStatePlugins(state);
            }
            return me;
        },
        _removeStatePlugins: function(state) {
            var me = this,
                plugins = me._plugins[state],
                selectors = Object.keys(plugins),
                selectorLen = selectors.length,
                pluginNames, pluginLen, i, j;
            for (i = 0; i < selectorLen; i++) {
                pluginNames = Object.keys(plugins[selectors[i]]);
                for (j = 0, pluginLen = pluginNames.length; j < pluginLen; j++) {
                    me.destroyPlugin(selectors[i], pluginNames[j]);
                }
            }
            delete plugins[state];
            return me;
        },
        registerListener: function(listener) {
            var me = this,
                listenerArr = listener instanceof Array ? listener : Array.prototype.slice.call(arguments),
                len = listenerArr.length,
                i = 0;
            for (; i < len; i++) {
                me._addListener(listenerArr[i]);
            }
            return me;
        },
        _addListener: function(listener) {
            var me = this,
                listeners = me._listeners,
                enterFn = listener.enter;
            listeners.push(listener);
            if ((listener.state === me._currentState || listener.state === '*') && typeof enterFn === 'function') {
                enterFn({
                    'exiting': me._previousState,
                    'entering': me._currentState
                });
            }
            return me;
        },
        addPlugin: function(selector, pluginName, config, viewport) {
            var me = this,
                pluginsInitialized = me._pluginsInitialized,
                breakpoints = me._breakpoints,
                currentState = me._currentState,
                len, i;
            if (typeof config === 'string' || config instanceof Array) {
                viewport = config;
                config = {};
            }
            if (typeof viewport === 'string') {
                viewport = [viewport];
            }
            if (!(viewport instanceof Array)) {
                viewport = [];
                for (i = 0, len = breakpoints.length; i < len; i++) {
                    viewport.push(breakpoints[i].state);
                }
            }
            for (i = 0, len = viewport.length; i < len; i++) {
                me._addPluginOption(viewport[i], selector, pluginName, config);
                if (currentState !== viewport[i]) {
                    continue;
                }
                if (pluginsInitialized) {
                    me._initPlugin(selector, pluginName);
                    continue;
                }
                me.addPluginToQueue(selector, pluginName);
            }
            return me;
        },
        removePlugin: function(selector, pluginName, viewport) {
            var me = this,
                breakpoints = me._breakpoints,
                plugins = me._plugins,
                state, sel, len, i;
            if (typeof viewport === 'string') {
                viewport = [viewport];
            }
            if (!(viewport instanceof Array)) {
                viewport = [];
                for (i = 0, len = breakpoints.length; i < len; i++) {
                    viewport.push(breakpoints[i].state);
                }
            }
            for (i = 0, len = viewport.length; i < len; i++) {
                if (!(state = plugins[viewport[i]])) {
                    continue;
                }
                if (!(sel = state[selector])) {
                    continue;
                }
                delete sel[pluginName];
            }
            if (!me._pluginsInitialized) {
                me.removePluginFromQueue(selector, pluginName);
            }
            return me;
        },
        updatePlugin: function(selector, pluginName) {
            var me = this,
                state = me._currentState,
                pluginConfigs = me._plugins[state][selector] || {},
                pluginNames = (typeof pluginName === 'string') ? [pluginName] : Object.keys(pluginConfigs),
                len = pluginNames.length,
                i = 0;
            for (; i < len; i++) {
                me._initPlugin(selector, pluginNames[i]);
            }
            return me;
        },
        _addPluginOption: function(state, selector, pluginName, config) {
            var me = this,
                plugins = me._plugins,
                selectors = plugins[state] || (plugins[state] = {}),
                configs = selectors[selector] || (selectors[selector] = {}),
                pluginConfig = configs[pluginName];
            configs[pluginName] = $.extend(pluginConfig || {}, config);
        },
        _initPlugin: function(selector, pluginName) {
            var me = this,
                $el = $(selector);
            if ($el.length > 1) {
                $.each($el, function() {
                    me._initSinglePlugin($(this), selector, pluginName);
                });
                return;
            }
            me._initSinglePlugin($el, selector, pluginName);
        },
        addPluginToQueue: function(selector, pluginName) {
            var me = this,
                queue = me._pluginQueue,
                pluginNames = queue[selector] || (queue[selector] = []);
            if (pluginNames.indexOf(pluginName) === -1) {
                pluginNames.push(pluginName);
            }
        },
        removePluginFromQueue: function(selector, pluginName) {
            var me = this,
                queue = me._pluginQueue,
                pluginNames = queue[selector],
                index;
            if (pluginNames && (index = pluginNames.indexOf(pluginName)) !== -1) {
                pluginNames.splice(index, 1);
            }
        },
        initQueuedPlugins: function(clearQueue) {
            var me = this,
                queue = me._pluginQueue,
                selectors = Object.keys(queue),
                selectorLen = selectors.length,
                i = 0,
                selector, plugins, pluginLen, j;
            for (; i < selectorLen; i++) {
                selector = selectors[i];
                plugins = queue[selector];
                for (j = 0, pluginLen = plugins.length; j < pluginLen; j++) {
                    me._initPlugin(selector, plugins[j]);
                }
                if (clearQueue !== false) {
                    delete queue[selector];
                }
            }
            me._pluginsInitialized = true;
        },
        _initSinglePlugin: function(element, selector, pluginName) {
            var me = this,
                currentConfig = me._getPluginConfig(me._currentState, selector, pluginName),
                plugin = element.data('plugin_' + pluginName);
            if (!plugin) {
                if (!element[pluginName]) {
                    console.error('Plugin "' + pluginName + '" is not a valid jQuery-plugin!');
                    return;
                }
                element[pluginName](currentConfig);
                return;
            }
            if (JSON.stringify(currentConfig) === JSON.stringify(me._getPluginConfig(me._previousState, selector, pluginName))) {
                if (typeof plugin.update === 'function') {
                    plugin.update(me._currentState, me._previousState);
                }
                return;
            }
            me.destroyPlugin(element, pluginName);
            element[pluginName](currentConfig);
        },
        _getPluginConfig: function(state, selector, plugin) {
            var selectors = this._plugins[state] || {},
                pluginConfigs = selectors[selector] || {};
            return pluginConfigs[plugin] || {};
        },
        _checkResize: function() {
            var me = this,
                width = me.getViewportWidth();
            if (width !== me._viewportWidth) {
                me._checkBreakpoints(width);
                me.trigger('resize', width);
                me._setDeviceCookie();
            }
            me._viewportWidth = width;
            me.requestAnimationFrame(me._checkResize.bind(me));
        },
        _checkBreakpoints: function(width) {
            var me = this,
                checkWidth = width || me.getViewportWidth(),
                breakpoints = me._breakpoints,
                len = breakpoints.length,
                i = 0;
            for (; i < len; i++) {
                me._checkBreakpoint(breakpoints[i], checkWidth);
            }
            return me;
        },
        _checkBreakpoint: function(breakpoint, width) {
            var me = this,
                checkWidth = width || me.getViewportWidth(),
                enterWidth = ~~(breakpoint.enter),
                exitWidth = ~~(breakpoint.exit),
                state = breakpoint.state;
            if (state !== me._currentState && checkWidth >= enterWidth && checkWidth <= exitWidth) {
                me._changeBreakpoint(state);
            }
        },
        _changeBreakpoint: function(state) {
            var me = this,
                previousState = me._previousState = me._currentState,
                currentState = me._currentState = state;
            return me.trigger('exitBreakpoint', previousState).trigger('changeBreakpoint', {
                'entering': currentState,
                'exiting': previousState
            }).trigger('enterBreakpoint', currentState)._switchListener(previousState, currentState)._switchPlugins(previousState, currentState);
        },
        _switchListener: function(fromState, toState) {
            var me = this,
                previousListeners = me._getBreakpointListeners(fromState),
                currentListeners = me._getBreakpointListeners(toState),
                eventObj = {
                    'exiting': fromState,
                    'entering': toState
                },
                callFn, len, i;
            for (i = 0, len = previousListeners.length; i < len; i++) {
                if (typeof(callFn = previousListeners[i].exit) === 'function') {
                    callFn(eventObj);
                }
            }
            for (i = 0, len = currentListeners.length; i < len; i++) {
                if (typeof(callFn = currentListeners[i].enter) === 'function') {
                    callFn(eventObj);
                }
            }
            return me;
        },
        _getBreakpointListeners: function(state) {
            var me = this,
                listeners = me._listeners,
                breakpointListeners = [],
                len = listeners.length,
                i = 0,
                listenerType;
            for (; i < len; i++) {
                if ((listenerType = listeners[i].state) === state || listenerType === '*') {
                    breakpointListeners.push(listeners[i]);
                }
            }
            return breakpointListeners;
        },
        _switchPlugins: function(fromState, toState) {
            var me = this,
                plugins = me._plugins,
                fromSelectors = plugins[fromState] || {},
                fromKeys = Object.keys(fromSelectors),
                selector, oldPluginConfigs, newPluginConfigs, configKeys, pluginName, plugin, $el, toSelectors = plugins[toState] || {},
                toKeys = Object.keys(toSelectors),
                lenKeys, lenConfig, lenEl, x, y, z;
            for (x = 0, lenKeys = fromKeys.length; x < lenKeys; x++) {
                selector = fromKeys[x];
                oldPluginConfigs = fromSelectors[selector];
                $el = $(selector);
                if (!oldPluginConfigs || !(lenEl = $el.length)) {
                    continue;
                }
                newPluginConfigs = toSelectors[selector];
                configKeys = Object.keys(oldPluginConfigs);
                for (y = 0, lenConfig = configKeys.length; y < lenConfig; y++) {
                    pluginName = configKeys[y];
                    if (!newPluginConfigs || !(newPluginConfigs[pluginName])) {
                        me.destroyPlugin($el, pluginName);
                        continue;
                    }
                    if (JSON.stringify(newPluginConfigs[pluginName]) === JSON.stringify(oldPluginConfigs[pluginName])) {
                        for (z = 0; z < lenEl; z++) {
                            if (!(plugin = $($el[z]).data('plugin_' + pluginName))) {
                                continue;
                            }
                            if (typeof plugin.update === 'function') {
                                plugin.update(fromState, toState);
                            }
                        }
                        continue;
                    }
                    me.destroyPlugin($el, pluginName);
                }
            }
            for (x = 0, lenKeys = toKeys.length; x < lenKeys; x++) {
                selector = toKeys[x];
                newPluginConfigs = toSelectors[selector];
                $el = $(selector);
                if (!newPluginConfigs || !$el.length) {
                    continue;
                }
                configKeys = Object.keys(newPluginConfigs);
                for (y = 0, lenConfig = configKeys.length; y < lenConfig; y++) {
                    pluginName = configKeys[y];
                    if (!$el.data('plugin_' + pluginName)) {
                        $el[pluginName](newPluginConfigs[pluginName]);
                    }
                }
            }
            return me;
        },
        destroyPlugin: function(selector, pluginName) {
            var $el = (typeof selector === 'string') ? $(selector) : selector,
                name = 'plugin_' + pluginName,
                len = $el.length,
                i = 0,
                $currentEl, plugin;
            if (!len) {
                return;
            }
            for (; i < len; i++) {
                $currentEl = $($el[i]);
                if ((plugin = $currentEl.data(name))) {
                    plugin.destroy();
                    $currentEl.removeData(name);
                }
            }
        },
        getViewportWidth: function() {
            var width = window.innerWidth;
            if (typeof width === 'number') {
                return width;
            }
            return (width = document.documentElement.clientWidth) !== 0 ? width : document.body.clientWidth;
        },
        getViewportHeight: function() {
            var height = window.innerHeight;
            if (typeof height === 'number') {
                return height;
            }
            return (height = document.documentElement.clientHeight) !== 0 ? height : document.body.clientHeight;
        },
        getPreviousState: function() {
            return this._previousState;
        },
        isPreviousState: function(state) {
            var states = state instanceof Array ? state : Array.prototype.slice.call(arguments),
                previousState = this._previousState,
                len = states.length,
                i = 0;
            for (; i < len; i++) {
                if (previousState === states[i]) {
                    return true;
                }
            }
            return false;
        },
        getCurrentState: function() {
            return this._currentState;
        },
        isCurrentState: function(state) {
            var states = state instanceof Array ? state : Array.prototype.slice.call(arguments),
                currentState = this._currentState,
                len = states.length,
                i = 0;
            for (; i < len; i++) {
                if (currentState === states[i]) {
                    return true;
                }
            }
            return false;
        },
        isPortraitMode: function() {
            return !!this.matchMedia('(orientation: portrait)').matches;
        },
        isLandscapeMode: function() {
            return !!this.matchMedia('(orientation: landscape)').matches;
        },
        getDevicePixelRatio: function() {
            return window.devicePixelRatio || 1;
        },
        isBrowser: function(browser) {
            var regEx = new RegExp(browser.toLowerCase(), 'i');
            return this._checkUserAgent(regEx);
        },
        _checkUserAgent: function(regEx) {
            return !!navigator.userAgent.toLowerCase().match(regEx);
        },
        _browserDetection: function() {
            var me = this,
                detections = {};
            detections['is--opera'] = me._checkUserAgent(/opera/);
            detections['is--chrome'] = me._checkUserAgent(/\bchrome\b/);
            detections['is--firefox'] = me._checkUserAgent(/firefox/);
            detections['is--webkit'] = me._checkUserAgent(/webkit/);
            detections['is--safari'] = !detections['is--chrome'] && me._checkUserAgent(/safari/);
            detections['is--ie'] = !detections['is--opera'] && (me._checkUserAgent(/msie/) || me._checkUserAgent(/trident\/7/));
            detections['is--ie-touch'] = detections['is--ie'] && me._checkUserAgent(/touch/);
            detections['is--gecko'] = !detections['is--webkit'] && me._checkUserAgent(/gecko/);
            $.each(detections, function(key, value) {
                if (value) $html.addClass(key);
            });
        },
        _getCurrentDevice: function() {
            var me = this,
                devices = {
                    'xs': 'mobile',
                    's': 'mobile',
                    'm': 'tablet',
                    'l': 'tablet',
                    'xl': 'desktop'
                };
            return devices[me.getCurrentState()] || 'desktop';
        },
        _setDeviceCookie: function() {
            var me = this,
                device = me._getCurrentDevice();
            document.cookie = 'x-ua-device=' + device + '; path=/';
        },
        _scrollBarSize: (function() {
            var $el = $('<div>', {
                    css: {
                        width: 100,
                        height: 100,
                        overflow: 'scroll',
                        position: 'absolute',
                        top: -9999
                    }
                }),
                el = $el[0],
                width, height;
            $('body').append($el);
            width = el.offsetWidth - el.clientWidth;
            height = el.offsetHeight - el.clientHeight;
            $($el).remove();
            return {
                width: width,
                height: height
            };
        }()),
        getScrollBarSize: function() {
            return $.extend({}, this._scrollBarSize);
        },
        getScrollBarWidth: function() {
            return this._scrollBarSize.width;
        },
        getScrollBarHeight: function() {
            return this._scrollBarSize.height;
        },
        matchMedia: (function() {
            var styleMedia = (window.styleMedia || window.media);
            if (!styleMedia) {
                var style = document.createElement('style'),
                    script = document.getElementsByTagName('script')[0],
                    info = null;
                style.type = 'text/css';
                style.id = 'matchmediajs-test';
                script.parentNode.insertBefore(style, script);
                info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;
                styleMedia = {
                    matchMedium: function(media) {
                        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
                        if (style.styleSheet) {
                            style.styleSheet.cssText = text;
                        } else {
                            style.textContent = text;
                        }
                        return info.width === '1px';
                    }
                };
            }
            return function(media) {
                return {
                    matches: styleMedia.matchMedium(media || 'all'),
                    media: media || 'all'
                };
            };
        }()),
        requestAnimationFrame: (function() {
            var raf = window.requestAnimationFrame,
                i = vendorPrefixes.length,
                lastTime = 0;
            while (!raf && i) {
                raf = window[vendorPrefixes[i--] + 'RequestAnimationFrame'];
            }
            return raf || function(callback) {
                var currTime = +(new Date()),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = window.setTimeout(function() {
                        callback(currTime + timeToCall);
                    }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }()).bind(window),
        cancelAnimationFrame: (function() {
            var caf = window.cancelAnimationFrame,
                i = vendorPrefixes.length,
                fnName;
            while (!caf && i) {
                fnName = vendorPrefixes[i--];
                caf = window[fnName + 'CancelAnimationFrame'] || window[fnName + 'CancelRequestAnimationFrame'];
            }
            return caf || window.clearTimeout;
        }()).bind(window),
        getVendorProperty: function(property, softError) {
            var cache = this._vendorPropertyCache,
                style = vendorPropertyDiv.style;
            if (cache[property]) {
                return cache[property];
            }
            if (property in style) {
                return (cache[property] = property);
            }
            var prop = property.charAt(0).toUpperCase() + property.substr(1),
                len = vendorPrefixes.length,
                i = 0,
                vendorProp;
            for (; i < len; i++) {
                vendorProp = vendorPrefixes[i] + prop;
                if (vendorProp in style) {
                    return (cache[property] = vendorProp);
                }
            }
            return (cache[property] = (softError ? property : null));
        }
    });
})(jQuery, window, document);;
(function(window, document) {
    'use strict';
    window.StorageManager = (function() {
        function StoragePolyFill(type) {
            function createCookie(name, value, days) {
                var date, expires = '';
                if (days) {
                    date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = '; expires=' + date.toGMTString();
                }
                value = encodeURI(value);
                document.cookie = name + '=' + value + expires + '; path=/';
            }

            function readCookie(name) {
                var nameEq = name + '=',
                    cookies = document.cookie.split(';'),
                    cookie, len = cookies.length,
                    i = 0;
                for (; i < len; i++) {
                    cookie = cookies[i];
                    while (cookie.charAt(0) == ' ') {
                        cookie = cookie.substring(1, cookie.length);
                    }
                    if (cookie.indexOf(nameEq) == 0) {
                        return decodeURI(cookie.substring(nameEq.length, cookie.length));
                    }
                }
                return null;
            }

            function setData(data) {
                data = JSON.stringify(data);
                if (type == 'session') {
                    createCookie('sessionStorage', data, 0);
                } else {
                    createCookie('localStorage', data, 365);
                }
            }

            function clearData() {
                if (type == 'session') {
                    createCookie('sessionStorage', '', 0);
                } else {
                    createCookie('localStorage', '', 365);
                }
            }

            function getData() {
                var data = (type == 'session') ? readCookie('sessionStorage') : readCookie('localStorage');
                return data ? JSON.parse(data) : {};
            }
            var data = getData();
            return {
                length: 0,
                clear: function() {
                    var me = this,
                        p;
                    for (p in data) {
                        if (!data.hasOwnProperty(p)) {
                            continue;
                        }
                        delete data[p];
                    }
                    me.length = 0;
                    clearData();
                },
                getItem: function(key) {
                    return typeof data[key] === 'undefined' ? null : data[key];
                },
                key: function(index) {
                    var i = 0,
                        p;
                    for (p in data) {
                        if (!data.hasOwnProperty(p)) {
                            continue;
                        }
                        if (i === index) {
                            return p;
                        }
                        i++;
                    }
                    return null;
                },
                removeItem: function(key) {
                    var me = this;
                    if (data.hasOwnProperty(key)) {
                        me.length--;
                    }
                    delete data[key];
                    setData(data);
                },
                setItem: function(key, value) {
                    var me = this;
                    if (!data.hasOwnProperty(key)) {
                        me.length++;
                    }
                    data[key] = value + '';
                    setData(data);
                }
            };
        }

        function hasCookiesSupport() {
            if ('cookie' in document && (document.cookie.length > 0)) {
                return true;
            }
            document.cookie = 'testcookie=1;';
            var writeTest = (document.cookie.indexOf('testcookie') !== -1);
            document.cookie = 'testcookie=1' + ';expires=Sat, 01-Jan-2000 00:00:00 GMT';
            return writeTest;
        }

        function hasLocalStorageSupport() {
            try {
                return (typeof window.localStorage !== 'undefined');
            } catch (err) {
                return false;
            }
        }

        function hasSessionStorageSupport() {
            try {
                return (typeof window.sessionStorage !== 'undefined');
            } catch (err) {
                return false;
            }
        }
        var localStorageSupport = hasLocalStorageSupport(),
            sessionStorageSupport = hasSessionStorageSupport(),
            storage = {
                local: localStorageSupport ? window.localStorage : new StoragePolyFill('local'),
                session: sessionStorageSupport ? window.sessionStorage : new StoragePolyFill('session')
            },
            p;
        for (p in storage) {
            if (!storage.hasOwnProperty(p)) {
                continue;
            }
            try {
                storage[p].setItem('storage', '');
                storage[p].removeItem('storage');
            } catch (err) {
                storage[p] = new StoragePolyFill(p);
            }
        }
        return {
            getStorage: function(type) {
                return storage[type];
            },
            getSessionStorage: function() {
                return this.getStorage('session');
            },
            getLocalStorage: function() {
                return this.getStorage('local');
            },
            clear: function(type) {
                this.getStorage(type).clear();
            },
            getItem: function(type, key) {
                return this.getStorage(type).getItem(key);
            },
            key: function(type, i) {
                return this.getStorage(type).key(i);
            },
            removeItem: function(type, key) {
                this.getStorage(type).removeItem(key);
            },
            setItem: function(type, key, value) {
                this.getStorage(type).setItem(key, value);
            },
            hasCookiesSupport: hasCookiesSupport(),
            hasLocalStorageSupport: hasLocalStorageSupport(),
            hasSessionStorageSupport: hasSessionStorageSupport()
        };
    })();
})(window, document);;
(function($) {
    'use strict';
    var $html = $('html');
    $.plugin('swOffcanvasMenu', {
        defaults: {
            'wrapSelector': '.page-wrap',
            'moveWrapper': false,
            'offCanvasSelector': '.sidebar-main',
            'closeButtonSelector': '.entry--close-off-canvas',
            'direction': 'fromLeft',
            'offCanvasElementCls': 'off-canvas',
            'leftMenuCls': 'is--left',
            'rightMenuCls': 'is--right',
            'activeMenuCls': 'is--active',
            'openClass': 'is--open',
            'fullscreen': false,
            'fullscreenCls': 'is--full-screen',
            'disableTransitions': false,
            'disableTransitionCls': 'no--transitions',
            'mode': 'local',
            'ajaxURL': ''
        },
        init: function() {
            var me = this,
                opts = me.opts,
                themeConfig = window.themeConfig,
                $offCanvas;
            opts.moveWrapper = opts.moveWrapper || !!(themeConfig && !~~themeConfig.offcanvasOverlayPage);
            me.applyDataAttributes();
            me.$pageWrap = $(opts.wrapSelector);
            me.isOpened = false;
            if (opts.mode === 'ajax') {
                $offCanvas = me.$offCanvas = $('<div>', {
                    'class': opts.offCanvasElementCls
                }).appendTo('body');
            } else {
                $offCanvas = me.$offCanvas = $(opts.offCanvasSelector);
                $offCanvas.addClass(opts.offCanvasElementCls);
            }
            $offCanvas.addClass((opts.direction === 'fromLeft') ? opts.leftMenuCls : opts.rightMenuCls);
            $offCanvas.addClass(opts.disableTransitionCls);
            if (!opts.disableTransitions) {
                $offCanvas.removeClass(opts.disableTransitionCls);
            }
            if (opts.fullscreen) {
                $offCanvas.addClass(opts.fullscreenCls);
            }
            setTimeout(function() {
                $offCanvas.addClass(opts.activeMenuCls);
            }, 0);
            me.registerEventListeners();
        },
        registerEventListeners: function() {
            var me = this,
                opts = me.opts;
            me._on(me.$el, 'click', $.proxy(me.onClickElement, me));
            me.$offCanvas.on(me.getEventName('click'), opts.closeButtonSelector, $.proxy(me.onClickCloseButton, me));
            $.subscribe('plugin/swOffcanvasMenu/onBeforeOpenMenu', $.proxy(me.onBeforeOpenMenu, me));
            $.publish('plugin/swOffcanvasMenu/onRegisterEvents', [me]);
        },
        onBeforeOpenMenu: function(event, plugin) {
            var me = this;
            if (plugin !== me) {
                me.closeMenu();
            }
        },
        onClickElement: function(event) {
            var me = this;
            if (!$.contains(me.$offCanvas[0], (event.target || event.currentTarget))) {
                event.preventDefault();
            }
            me.openMenu();
            $.publish('plugin/swOffcanvasMenu/onClickElement', [me, event]);
        },
        onClickCloseButton: function(event) {
            var me = this;
            event.preventDefault();
            event.stopPropagation();
            me.closeMenu();
            $.publish('plugin/swOffcanvasMenu/onClickCloseButton', [me, event]);
        },
        openMenu: function() {
            var me = this,
                opts = me.opts,
                menuWidth = me.$offCanvas.outerWidth();
            if (me.isOpened) {
                return;
            }
            me.isOpened = true;
            $.publish('plugin/swOffcanvasMenu/onBeforeOpenMenu', [me]);
            $html.addClass('no--scroll');
            $.overlay.open({
                onClose: $.proxy(me.closeMenu, me)
            });
            if (opts.moveWrapper) {
                if (opts.direction === 'fromRight') {
                    menuWidth *= -1;
                }
                me.$pageWrap.css('left', menuWidth);
            }
            me.$offCanvas.addClass(opts.openClass);
            $.publish('plugin/swOffcanvasMenu/onOpenMenu', [me]);
            if (opts.mode === 'ajax' && opts.ajaxURL) {
                $.ajax({
                    url: opts.ajaxURL,
                    success: function(result) {
                        me.$offCanvas.html(result);
                    }
                });
            }
        },
        closeMenu: function() {
            var me = this,
                opts = me.opts;
            if (!me.isOpened) {
                return;
            }
            me.isOpened = false;
            $.overlay.close();
            $html.removeClass('no--scroll');
            if (opts.moveWrapper) {
                me.$pageWrap.css('left', 0);
            }
            me.$offCanvas.removeClass(opts.openClass);
            $.publish('plugin/swOffcanvasMenu/onCloseMenu', [me]);
        },
        destroy: function() {
            var me = this,
                opts = me.opts;
            me.closeMenu();
            me.$offCanvas.removeClass(opts.offCanvasElementCls).removeClass(opts.activeMenuCls).removeClass(opts.openClass).removeAttr('style');
            if (opts.moveWrapper) {
                me.$pageWrap.removeAttr('style');
            }
            me.$el.off(me.getEventName('click'), opts.closeButtonSelector);
            $.unsubscribe('plugin/swOffcanvasMenu/onBeforeOpenMenu', $.proxy(me.onBeforeOpenMenu, me));
            me._destroy();
        }
    });
})(jQuery);;
(function($, StateManager, window) {
    'use strict';
    var msPointerEnabled = window.navigator.msPointerEnabled,
        $body = $('body');
    $.plugin('swSearch', {
        defaults: {
            activeCls: 'is--active',
            searchFieldSelector: '.main-search--field',
            resultsSelector: '.main-search--results',
            resultLinkSelector: '.search-result--link',
            resultItemSelector: '.result--item',
            loadingIndicatorSelector: '.form--ajax-loader',
            headerSelector: '.header-main',
            activeHeaderClass: 'is--active-searchfield',
            triggerSelector: '.entry--trigger',
            requestUrl: '',
            keyBoardNavigation: true,
            activeOnStart: false,
            minLength: 3,
            searchDelay: 250,
            animationSpeed: 200,
            keyMap: {
                'UP': 38,
                'DOWN': 40,
                'ENTER': 13
            }
        },
        init: function() {
            var me = this,
                $el = me.$el,
                opts = me.opts;
            me.applyDataAttributes();
            me.requestURL = opts.requestUrl || window.controller.ajax_search;
            if (!me.requestURL) {
                throw new Error('Parameter "requestUrl" needs to be set.');
            }
            var convertUrlToRelativeUrl = function(url) {
                url = url.replace('https:', '');
                url = url.replace('http:', '');
                return url;
            };
            me.requestURL = convertUrlToRelativeUrl(me.requestURL);
            me.$searchField = $el.find(opts.searchFieldSelector);
            me.$results = $el.find(opts.resultsSelector);
            me.$loader = $el.find(opts.loadingIndicatorSelector);
            me.$toggleSearchBtn = $el.find(opts.triggerSelector);
            me.$mainHeader = $(opts.headerSelector);
            me.lastSearchTerm = '';
            me.keyupTimeout = 0;
            me._isSubmitting = false;
            me.registerListeners();
        },
        registerListeners: function() {
            var me = this,
                opts = me.opts,
                $searchField = me.$searchField,
                $formElement = me.$searchField.closest('form');
            me._on($searchField, 'keyup', $.proxy(me.onKeyUp, me));
            me._on($searchField, 'keydown', $.proxy(me.onKeyDown, me));
            me._on(me.$toggleSearchBtn, 'click', $.proxy(me.onClickSearchEntry, me));
            me._on($formElement, 'submit', $.proxy(me.onSubmit, me));
            if (msPointerEnabled) {
                me.$results.on('click', opts.resultLinkSelector, function(event) {
                    window.location.href = $(event.currentTarget).attr('href');
                });
            }
            StateManager.registerListener({
                state: 'xs',
                enter: function() {
                    if (opts.activeOnStart) {
                        me.openMobileSearch();
                    }
                },
                exit: function() {
                    me.closeMobileSearch();
                }
            });
            $.publish('plugin/swSearch/onRegisterEvents', [me]);
        },
        onKeyDown: function(event) {
            var me = this,
                opts = me.opts,
                keyMap = opts.keyMap,
                keyCode = event.which,
                navKeyPressed = opts.keyBoardNavigation && (keyCode === keyMap.UP || keyCode === keyMap.DOWN || keyCode === keyMap.ENTER);
            $.publish('plugin/swSearch/onKeyDown', [me, event]);
            if (navKeyPressed && me.$results.hasClass(opts.activeCls)) {
                me.onKeyboardNavigation(keyCode);
                event.preventDefault();
                return false;
            }
            return true;
        },
        onKeyUp: function(event) {
            var me = this,
                opts = me.opts,
                term = me.$searchField.val() + '',
                timeout = me.keyupTimeout;
            $.publish('plugin/swSearch/onKeyUp', [me, event]);
            if (timeout) {
                window.clearTimeout(timeout);
            }
            if (term.length < opts.minLength) {
                me.lastSearchTerm = '';
                me.closeResult();
                return;
            }
            if (term === me.lastSearchTerm) {
                return;
            }
            me.keyupTimeout = window.setTimeout($.proxy(me.triggerSearchRequest, me, term), opts.searchDelay);
        },
        onSubmit: function(event) {
            var me = this;
            if (me._isSubmitting) {
                event.preventDefault();
                return;
            }
            me._isSubmitting = true;
        },
        triggerSearchRequest: function(searchTerm) {
            var me = this;
            me.$loader.fadeIn(me.opts.animationSpeed);
            me.lastSearchTerm = $.trim(searchTerm);
            $.publish('plugin/swSearch/onSearchRequest', [me, searchTerm]);
            $.ajax({
                'url': me.requestURL,
                'data': {
                    'sSearch': me.lastSearchTerm
                },
                'success': function(response) {
                    me.showResult(response);
                    $.publish('plugin/swSearch/onSearchResponse', [me, searchTerm, response]);
                }
            });
        },
        showResult: function(response) {
            var me = this,
                opts = me.opts;
            me.$loader.fadeOut(opts.animationSpeed);
            me.$results.empty().html(response).addClass(opts.activeCls).show();
            if (!StateManager.isCurrentState('xs')) {
                $body.on(me.getEventName('click touchstart'), $.proxy(me.onClickBody, me));
            }
            picturefill();
            $.publish('plugin/swSearch/onShowResult', [me]);
        },
        closeResult: function() {
            var me = this;
            me.$results.removeClass(me.opts.activeCls).hide().empty();
            $.publish('plugin/swSearch/onCloseResult', [me]);
        },
        onClickBody: function(event) {
            var me = this,
                target = event.target,
                pluginEl = me.$el[0],
                resultsEl = me.$results[0];
            if (target === pluginEl || target === resultsEl || $.contains(pluginEl, target) || $.contains(resultsEl, target)) {
                return;
            }
            $body.off(me.getEventName('click touchstart'));
            me.closeMobileSearch();
        },
        onKeyboardNavigation: function(keyCode) {
            var me = this,
                opts = me.opts,
                keyMap = opts.keyMap,
                $results = me.$results,
                activeClass = opts.activeCls,
                $selected = $results.find('.' + activeClass),
                $resultItems;
            $.publish('plugin/swSearch/onKeyboardNavigation', [me, keyCode]);
            if (keyCode === keyMap.UP || keyCode === keyMap.DOWN) {
                $resultItems = $results.find(opts.resultItemSelector);
                if (!$selected.length && keyCode == keyMap.DOWN) {
                    me.selectFirstResultItem($resultItems);
                    return;
                }
                if (!$selected.length && keyCode == keyMap.UP) {
                    me.selectLastResultItem($resultItems);
                    return;
                }
                $resultItems.removeClass(activeClass);
                if (me.selectResultItem(keyCode, $selected)) {
                    return;
                }
            }
            switch (keyCode) {
                case keyMap.DOWN:
                    me.selectFirstResultItem($resultItems);
                    break;
                case keyMap.UP:
                    me.selectLastResultItem($resultItems);
                    break;
                case keyMap.ENTER:
                    me.onPressEnter($selected);
                    break;
            }
        },
        onClickSearchEntry: function(event) {
            var me = this,
                $el = me.$el,
                opts = me.opts;
            $.publish('plugin/swSearch/onClickSearchEntry', [me, event]);
            if (!StateManager.isCurrentState('xs')) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            $el.hasClass(opts.activeCls) ? me.closeMobileSearch() : me.openMobileSearch();
        },
        openMobileSearch: function() {
            var me = this,
                $el = me.$el,
                opts = me.opts,
                activeCls = opts.activeCls;
            $body.on(me.getEventName('click touchstart'), $.proxy(me.onClickBody, me));
            $el.addClass(activeCls);
            me.$toggleSearchBtn.addClass(activeCls);
            me.$mainHeader.addClass(opts.activeHeaderClass);
            me.$searchField.focus();
            $.publish('plugin/swSearch/onOpenMobileSearch', [me]);
        },
        closeMobileSearch: function() {
            var me = this,
                $el = me.$el,
                opts = me.opts,
                activeCls = opts.activeCls;
            $el.removeClass(activeCls);
            me.$toggleSearchBtn.removeClass(activeCls);
            me.$mainHeader.removeClass(opts.activeHeaderClass);
            me.$searchField.blur();
            $.publish('plugin/swSearch/onCloseMobileSearch', [me]);
            me.closeResult();
        },
        selectFirstResultItem: function(resultItems) {
            var me = this,
                opts = me.opts,
                activeClass = opts.activeCls;
            $.publish('plugin/swSearch/onSelectFirstResultItem', [me, resultItems]);
            resultItems.first().addClass(activeClass);
        },
        selectLastResultItem: function(resultItems) {
            var me = this,
                opts = me.opts,
                activeClass = opts.activeCls;
            $.publish('plugin/swSearch/onSelectLastResultItem', [me, resultItems]);
            resultItems.last().addClass(activeClass);
        },
        selectResultItem: function(keyCode, $selected) {
            var me = this,
                opts = me.opts,
                keyMap = opts.keyMap,
                activeClass = opts.activeCls,
                $nextSibling;
            $.publish('plugin/swSearch/onSelectNextResultItem', [me, keyCode]);
            $nextSibling = $selected[(keyCode === keyMap.DOWN) ? 'next' : 'prev'](opts.resultItemSelector);
            if ($nextSibling.length) {
                $nextSibling.addClass(activeClass);
                return true;
            }
            return false;
        },
        onPressEnter: function($selected) {
            var me = this,
                opts = me.opts;
            $.publish('plugin/swSearch/onPressEnter', [me, $selected]);
            if ($selected.length) {
                window.location.href = $selected.find(opts.resultLinkSelector).attr('href');
                return;
            }
            me.$parent.submit();
        },
        destroy: function() {
            var me = this;
            me.closeMobileSearch();
            $body.off(me.getEventName('click touchstart'));
            me._destroy();
        }
    });
})(jQuery, StateManager, window);;
(function($) {
    $.plugin('swTabMenu', {
        defaults: {
            'pluginClass': 'js--tab-menu',
            'tabContainerSelector': '.tab--navigation',
            'tabSelector': '.tab--link',
            'containerListSelector': '.tab--container-list',
            'containerSelector': '.tab--container',
            'contentSelector': '.tab--content',
            'hasContentClass': 'has--content',
            'activeTabClass': 'is--active',
            'activeContainerClass': 'is--active',
            'startIndex': -1,
            'scrollable': false
        },
        init: function() {
            var me = this,
                opts = me.opts,
                $el = me.$el,
                $container, $tab;
            me.applyDataAttributes();
            $el.addClass(opts.pluginClass);
            me.$tabContainer = $el.find(opts.tabContainerSelector);
            me.$containerList = $el.find(opts.containerListSelector);
            me.$tabs = me.$tabContainer.find(opts.tabSelector);
            me.$container = me.$containerList.find(opts.containerSelector);
            me.$container.each(function(i, el) {
                $container = $(el);
                $tab = $(me.$tabs.get(i));
                if ($container.find(opts.contentSelector).html().trim().length) {
                    $container.addClass(opts.hasContentClass);
                    $tab.addClass(opts.hasContentClass);
                    if (opts.startIndex === -1) {
                        $tab.addClass(opts.activeTabClass);
                        opts.startIndex = i;
                    }
                }
            });
            if (me.opts.scrollable) {
                me.$el.swMenuScroller({
                    'listSelector': me.$tabContainer
                });
            }
            opts.startIndex = Math.max(opts.startIndex, 0);
            me._index = null;
            me.registerEventListeners();
            me.changeTab(opts.startIndex);
        },
        registerEventListeners: function() {
            var me = this;
            me.$tabs.each(function(i, el) {
                me._on(el, 'click touchstart', $.proxy(me.changeTab, me, i));
            });
            $.publish('plugin/swTabMenu/onRegisterEvents', [me]);
        },
        changeTab: function(index, event) {
            var me = this,
                opts = me.opts,
                activeTabClass = opts.activeTabClass,
                activeContainerClass = opts.activeContainerClass,
                $tab, tabId, dataUrl, $container;
            if (event) {
                event.preventDefault();
            }
            if (index === me._index) {
                return;
            }
            me._index = index;
            $tab = $(me.$tabs.get(index));
            $container = $(me.$container.get(index));
            me.$tabContainer.find('.' + activeTabClass).removeClass(activeTabClass);
            $tab.addClass(activeTabClass);
            me.$containerList.find('.' + activeContainerClass).removeClass(activeContainerClass);
            $container.addClass(activeContainerClass);
            dataUrl = $tab.attr('data-url');
            tabId = $container.attr('data-tab-id');
            if ($tab.attr('data-mode') === 'remote' && dataUrl) {
                $container.load(dataUrl);
            }
            if (tabId !== undefined) {
                $.publish('onShowContent-' + tabId, [me, index]);
            }
            $.publish('plugin/swTabMenu/onChangeTab', [me, index]);
        },
        destroy: function() {
            var me = this,
                menuScroller = me.$el.data('plugin_swMenuScroller');
            if (menuScroller !== undefined) {
                menuScroller.destroy();
            }
            me.$el.removeClass(me.opts.pluginClass);
            me._destroy();
        }
    });
})(jQuery);;
(function($, Modernizr, window, Math) {
    'use strict';
    var transitionProperty = StateManager.getVendorProperty('transition'),
        transformProperty = StateManager.getVendorProperty('transform'),
        killEvent = function(event) {
            event.preventDefault();
            event.stopPropagation();
        };
    $.plugin('swImageSlider', {
        defaults: {
            animationSpeed: 350,
            animationEasing: 'cubic-bezier(.2,.89,.75,.99)',
            thumbnails: true,
            dotNavigation: true,
            arrowControls: true,
            touchControls: true,
            autoSlide: false,
            pinchToZoom: false,
            swipeToSlide: true,
            pullPreview: false,
            doubleTap: false,
            doubleTapPeriod: 400,
            preventScrolling: false,
            minZoom: 1,
            maxZoom: 'auto',
            moveTolerance: 30,
            swipeTolerance: 50,
            swipePeriod: 250,
            pullTolerance: 'auto',
            startIndex: 0,
            autoSlideInterval: 5000,
            loopSlides: false,
            imageContainerSelector: '.image-slider--container',
            imageSlideSelector: '.image-slider--slide',
            thumbnailContainerSelector: '.image-slider--thumbnails',
            thumbnailSlideSelector: '.image-slider--thumbnails-slide',
            thumbnailSelector: '.thumbnail--link',
            dotNavSelector: '.image-slider--dots',
            dotLinkSelector: '.dot--link',
            thumbnailArrowCls: 'thumbnails--arrow',
            leftArrowCls: 'arrow is--left',
            rightArrowCls: 'arrow is--right',
            thumbnailArrowTopCls: 'is--top',
            thumbnailArrowLeftCls: 'is--left',
            thumbnailArrowRightCls: 'is--right',
            thumbnailArrowBottomCls: 'is--bottom',
            activeStateClass: 'is--active',
            dragClass: 'is--dragging',
            noThumbClass: 'no--thumbnails',
            imageSelector: '.image-slider--item img',
            itemSelector: '.image-slider--item',
            hiddenClass: 'is--hidden'
        },
        init: function() {
            var me = this,
                opts = me.opts;
            me.applyDataAttributes();
            me._$slideContainer = me.$el.find(opts.imageContainerSelector);
            me._$slide = me._$slideContainer.find(opts.imageSlideSelector);
            me._slideIndex = opts.startIndex;
            me._slideInterval = 0;
            me._$currentImage = null;
            me._minZoom = parseFloat(opts.minZoom) || 1;
            me._maxZoom = parseFloat(opts.maxZoom);
            me._autoScale = !me._maxZoom && (me._maxZoom = me._minZoom);
            if (opts.thumbnails) {
                me._$thumbnailContainer = me.$el.find(opts.thumbnailContainerSelector);
                me._$thumbnailSlide = me._$thumbnailContainer.find(opts.thumbnailSlideSelector);
                me._thumbnailOrientation = me.getThumbnailOrientation();
                me._thumbnailOffset = 0;
                me.createThumbnailArrows();
            }
            if (opts.dotNavigation) {
                me._$dotNav = me.$el.find(opts.dotNavSelector);
                me._$dots = me._$dotNav.find(opts.dotLinkSelector);
                me.setActiveDot(me._slideIndex);
            }
            me.trackItems();
            if (opts.arrowControls) {
                me.createArrows();
            }
            if (opts.thumbnails) {
                me.trackThumbnailControls();
                me.setActiveThumbnail(me._slideIndex);
            }
            me.setIndex(me._slideIndex);
            me._grabImage = false;
            me._startTouchPoint = new Vector(0, 0);
            me._imageTranslation = new Vector(0, 0);
            me._imageScale = 1;
            me._touchDistance = 0;
            me._lastTouchTime = 0;
            me._lastMoveTime = 0;
            me._lockSlide = false;
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this,
                opts = me.opts,
                $slide = me._$slide;
            if (opts.touchControls) {
                me._on($slide, 'touchstart mousedown', $.proxy(me.onTouchStart, me));
                me._on($slide, 'touchmove mousemove', $.proxy(me.onTouchMove, me));
                me._on($slide, 'touchend mouseup mouseleave', $.proxy(me.onTouchEnd, me));
                me._on($slide, 'MSHoldVisual', killEvent);
                me._on($slide, 'click', $.proxy(me.onClick, me));
                if (!opts.preventScrolling && ('ontouchstart' in window || navigator.msMaxTouchPoints)) {
                    me._on($slide, 'movestart', function(e) {
                        if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
                            me._lockSlide = true;
                            e.preventDefault();
                        }
                    });
                }
                if (opts.pinchToZoom) {
                    me._on($slide, 'mousewheel DOMMouseScroll scroll', $.proxy(me.onScroll, me));
                }
                if (opts.doubleTap) {
                    me._on($slide, 'dblclick', $.proxy(me.onDoubleClick, me));
                }
            }
            if (opts.arrowControls) {
                me._on(me._$arrowLeft, 'click touchstart', $.proxy(me.onLeftArrowClick, me));
                me._on(me._$arrowRight, 'click touchstart', $.proxy(me.onRightArrowClick, me));
            }
            if (opts.thumbnails) {
                me._$thumbnails.each($.proxy(me.applyClickEventHandler, me));
                me._on(me._$thumbnailArrowPrev, 'click touchstart', $.proxy(me.onThumbnailPrevArrowClick, me));
                me._on(me._$thumbnailArrowNext, 'click touchstart', $.proxy(me.onThumbnailNextArrowClick, me));
                if (opts.touchControls) {
                    me._on(me._$thumbnailSlide, 'touchstart', $.proxy(me.onThumbnailSlideTouch, me));
                    me._on(me._$thumbnailSlide, 'touchmove', $.proxy(me.onThumbnailSlideMove, me));
                }
            }
            if (opts.dotNavigation && me._$dots) {
                me._$dots.each($.proxy(me.applyClickEventHandler, me));
            }
            if (opts.autoSlide) {
                me.startAutoSlide();
                me._on(me.$el, 'mouseenter', $.proxy(me.stopAutoSlide, me));
                me._on(me.$el, 'mouseleave', $.proxy(me.startAutoSlide, me));
            }
            StateManager.on('resize', me.onResize, me);
            $.publish('plugin/swImageSlider/onRegisterEvents', [me]);
        },
        onTouchStart: function(event) {
            var me = this,
                opts = me.opts,
                pointers = me.getPointers(event),
                pointerA = pointers[0],
                currTime = Date.now(),
                startPoint = me._startTouchPoint,
                startX = startPoint.x,
                startY = startPoint.y,
                distance, deltaX, deltaY;
            startPoint.set(pointerA.clientX, pointerA.clientY);
            if (pointers.length === 1) {
                me._lastMoveTime = currTime;
                if (opts.autoSlide) {
                    me.stopAutoSlide();
                }
                if (event.originalEvent instanceof MouseEvent) {
                    event.preventDefault();
                    me._grabImage = true;
                    me._$slideContainer.addClass(opts.dragClass);
                    return;
                }
                if (!opts.doubleTap) {
                    return;
                }
                deltaX = Math.abs(pointerA.clientX - startX);
                deltaY = Math.abs(pointerA.clientY - startY);
                distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                if (currTime - me._lastTouchTime < opts.doubleTapPeriod && distance <= opts.moveTolerance) {
                    me.onDoubleClick(event);
                    return;
                }
                me._lastTouchTime = currTime;
            } else {
                event.preventDefault();
            }
        },
        onTouchMove: function(event) {
            var me = this,
                opts = me.opts,
                touches = me.getPointers(event),
                touchA = touches[0],
                touchB = touches[1],
                scale = me._imageScale,
                startTouch = me._startTouchPoint,
                touchDistance = me._touchDistance,
                slideStyle = me._$slide[0].style,
                percentage, offset, distance, deltaX, deltaY;
            if (touches.length > 2) {
                return;
            }
            if (touches.length === 1) {
                if (event.originalEvent instanceof MouseEvent && !me._grabImage) {
                    return;
                }
                deltaX = touchA.clientX - startTouch.x;
                deltaY = touchA.clientY - startTouch.y;
                if (scale === 1) {
                    if (me._lockSlide) {
                        return;
                    }
                    offset = (me._slideIndex * -100);
                    percentage = (deltaX / me._$slide.width()) * 100;
                    if (me._slideIndex === 0 && deltaX > 0) {
                        percentage *= Math.atan(percentage) / Math.PI;
                    }
                    if (me._slideIndex === me._itemCount - 1 && deltaX < 0) {
                        percentage *= Math.atan(percentage) / -Math.PI;
                    }
                    if (transitionProperty && transformProperty) {
                        slideStyle[transitionProperty] = 'none';
                        slideStyle[transformProperty] = 'translateX(' + (offset + percentage) + '%)';
                    } else {
                        slideStyle.left = (offset + percentage) + '%';
                    }
                    if (opts.preventScrolling) {
                        event.preventDefault();
                    }
                    return;
                }
                startTouch.set(touchA.clientX, touchA.clientY);
                me.translate(deltaX / scale, deltaY / scale);
                event.preventDefault();
                return;
            }
            if (!opts.pinchToZoom || !touchB) {
                return;
            }
            deltaX = Math.abs(touchA.clientX - touchB.clientX);
            deltaY = Math.abs(touchA.clientY - touchB.clientY);
            distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (touchDistance === 0) {
                me._touchDistance = distance;
                return;
            }
            me.scale((distance - touchDistance) / 100);
            me._touchDistance = distance;
        },
        onTouchEnd: function(event) {
            var me = this,
                opts = me.opts,
                touches = event.changedTouches,
                remaining = event.originalEvent.touches,
                touchA = (touches && touches[0]) || event.originalEvent,
                touchB = remaining && remaining[0],
                swipeTolerance = opts.swipeTolerance,
                pullTolerance = (typeof opts.pullTolerance === 'number') ? opts.pullTolerance : me._$slide.width() / 3,
                startPoint = me._startTouchPoint,
                deltaX, deltaY, absX, absY, swipeValid, pullValid;
            if (event.originalEvent instanceof MouseEvent && !me._grabImage) {
                return;
            }
            me._touchDistance = 0;
            me._grabImage = false;
            me._$slideContainer.removeClass(opts.dragClass);
            me._lockSlide = false;
            if (touchB) {
                startPoint.set(touchB.clientX, touchB.clientY);
                return;
            }
            if (opts.autoSlide) {
                me.startAutoSlide();
            }
            if (!opts.swipeToSlide || me._imageScale > 1) {
                return;
            }
            deltaX = startPoint.x - touchA.clientX;
            deltaY = startPoint.y - touchA.clientY;
            absX = Math.abs(deltaX);
            absY = Math.abs(deltaY);
            swipeValid = (Date.now() - me._lastMoveTime) < opts.swipePeriod && absX > swipeTolerance && absY < swipeTolerance;
            pullValid = (absX >= pullTolerance);
            if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) > opts.moveTolerance) {
                event.preventDefault();
            }
            if (pullValid || swipeValid) {
                (deltaX < 0) ? me.slidePrev(): me.slideNext();
                return;
            }
            me.slide(me._slideIndex);
        },
        onClick: function(event) {
            var me = this,
                opts = me.opts,
                touches = event.changedTouches,
                touchA = (touches && touches[0]) || event.originalEvent,
                startPoint = me._startTouchPoint,
                deltaX = startPoint.x - touchA.clientX,
                deltaY = startPoint.y - touchA.clientY;
            if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) > opts.moveTolerance) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            $.publish('plugin/swImageSlider/onClick', [me, event]);
        },
        onScroll: function(event) {
            var me = this,
                e = event.originalEvent;
            if ((e.detail ? e.detail * -1 : e.wheelDelta) > 0) {
                me.scale(0.25);
            } else {
                me.scale(-0.25);
            }
            event.preventDefault();
            $.publish('plugin/swImageSlider/onScroll', [me, event]);
        },
        onDoubleClick: function(event) {
            var me = this;
            if (!me.opts.doubleTap) {
                return;
            }
            event.preventDefault();
            if (me._imageScale <= 1) {
                me.scale(1, true);
            } else {
                me.setScale(1, true);
            }
            $.publish('plugin/swImageSlider/onDoubleClick', [me, event]);
        },
        onLeftArrowClick: function(event) {
            var me = this;
            event.preventDefault();
            me.slidePrev();
            $.publish('plugin/swImageSlider/onLeftArrowClick', [me, event]);
        },
        onRightArrowClick: function(event) {
            var me = this;
            event.preventDefault();
            me.slideNext();
            $.publish('plugin/swImageSlider/onRightArrowClick', [me, event]);
        },
        onThumbnailPrevArrowClick: function(event) {
            event.preventDefault();
            var me = this,
                $container = me._$thumbnailContainer,
                size = me._thumbnailOrientation === 'horizontal' ? $container.innerWidth() : $container.innerHeight();
            me.setThumbnailSlidePosition(me._thumbnailOffset + (size / 2), true);
        },
        onThumbnailNextArrowClick: function(event) {
            event.preventDefault();
            var me = this,
                $container = me._$thumbnailContainer,
                size = me._thumbnailOrientation === 'horizontal' ? $container.innerWidth() : $container.innerHeight();
            me.setThumbnailSlidePosition(me._thumbnailOffset - (size / 2), true);
            $.publish('plugin/swImageSlider/onThumbnailNextArrowClick', [me, event]);
        },
        onMouseLeave: function(event) {
            var me = this;
            me._grabImage = false;
            me._$slideContainer.removeClass(me.opts.dragClass);
            me.slide(me._slideIndex);
            $.publish('plugin/swImageSlider/onMouseLeave', [me, event]);
        },
        onResize: function(newWidth) {
            var me = this;
            me.updateMaxZoomValue();
            me.scale(0);
            me.translate(0, 0);
            if (me.opts.thumbnails) {
                me.trackThumbnailControls();
            }
            $.publish('plugin/swImageSlider/onResize', [me, newWidth]);
        },
        onThumbnailSlideTouch: function(event) {
            var me = this,
                pointers = me.getPointers(event),
                pointerA = pointers[0];
            me._startTouchPoint.set(pointerA.clientX, pointerA.clientY);
            $.publish('plugin/swImageSlider/onThumbnailSlideTouch', [me, event, pointerA.clientX, pointerA.clientY]);
        },
        onThumbnailSlideMove: function(event) {
            event.preventDefault();
            var me = this,
                pointers = me.getPointers(event),
                pointerA = pointers[0],
                startPoint = me._startTouchPoint,
                isHorizontal = me._thumbnailOrientation === 'horizontal',
                posA = isHorizontal ? pointerA.clientX : pointerA.clientY,
                posB = isHorizontal ? startPoint.x : startPoint.y,
                delta = posA - posB;
            startPoint.set(pointerA.clientX, pointerA.clientY);
            me.setThumbnailSlidePosition(me._thumbnailOffset + delta, false);
            me.trackThumbnailControls();
            $.publish('plugin/swImageSlider/onThumbnailSlideTouch', [me, event, pointerA.clientX, pointerA.clientY]);
        },
        getPointers: function(event) {
            var origEvent = event.originalEvent || event;
            return origEvent.touches || [origEvent];
        },
        getTransformedPosition: function(x, y, scale) {
            var me = this,
                $image = me._$currentImage,
                $container = me._$slideContainer,
                minX = Math.max(0, (($image.width() * scale - $container.width()) / scale) / 2),
                minY = Math.max(0, (($image.height() * scale - $container.height()) / scale) / 2),
                newPos = new Vector(Math.max(minX * -1, Math.min(minX, x)), Math.max(minY * -1, Math.min(minY, y)));
            $.publish('plugin/swImageSlider/onGetTransformedPosition', [me, newPos, x, y, scale]);
            return newPos;
        },
        getMinScale: function() {
            return this._minZoom;
        },
        getMaxScale: function() {
            return this._maxZoom;
        },
        setTranslation: function(x, y) {
            var me = this,
                newPos = me.getTransformedPosition(x, y, me._imageScale);
            me._imageTranslation.set(newPos.x, newPos.y);
            me.updateTransform(false);
            $.publish('plugin/swImageSlider/onSetTranslation', [me, x, y]);
        },
        translate: function(x, y) {
            var me = this,
                translation = me._imageTranslation;
            me.setTranslation(translation.x + x, translation.y + y);
            $.publish('plugin/swImageSlider/onTranslate', [me, x, y]);
        },
        setScale: function(scale, animate, callback) {
            var me = this,
                oldScale = me._imageScale;
            me.updateMaxZoomValue();
            me._imageScale = Math.max(me._minZoom, Math.min(me._maxZoom, scale));
            if (me._imageScale === oldScale) {
                if (typeof callback === 'function') {
                    callback.call(me);
                }
                return;
            }
            me.updateTransform(animate, callback);
            $.publish('plugin/swImageSlider/onSetScale', [me, scale, animate, callback]);
        },
        getScale: function() {
            return this._imageScale;
        },
        scale: function(factor, animate, callback) {
            var me = this;
            me.setScale(me._imageScale + factor, animate, callback);
            $.publish('plugin/swImageSlider/onScale', [me, factor, animate, callback]);
        },
        updateTransform: function(animate, callback) {
            var me = this,
                translation = me._imageTranslation,
                scale = me._imageScale,
                newPosition = me.getTransformedPosition(translation.x, translation.y, scale),
                image = me._$currentImage[0],
                animationSpeed = me.opts.animationSpeed;
            translation.set(newPosition.x, newPosition.y);
            image.style[transitionProperty] = animate ? ('all ' + animationSpeed + 'ms') : '';
            image.style[transformProperty] = 'scale(' + scale + ') translate(' + translation.x + 'px, ' + translation.y + 'px)';
            $.publish('plugin/swImageSlider/onUpdateTransform', [me, animate, callback]);
            if (!callback) {
                return;
            }
            if (!animate) {
                callback.call(me);
                return;
            }
            setTimeout($.proxy(callback, me), animationSpeed);
        },
        applyClickEventHandler: function(index, el) {
            var me = this,
                $el = $(el),
                i = index || $el.index();
            me._on($el, 'click', function(event) {
                event.preventDefault();
                me.slide(i);
            });
            $.publish('plugin/swImageSlider/onApplyClickEventHandler', [me, index, el]);
        },
        createArrows: function() {
            var me = this,
                opts = me.opts,
                hiddenClass = ' ' + opts.hiddenClass;
            me._$arrowLeft = $('<a>', {
                'class': opts.leftArrowCls + ((opts.loopSlides || me._slideIndex > 0) && me._itemCount > 1 ? '' : hiddenClass)
            }).appendTo(me._$slideContainer);
            me._$arrowRight = $('<a>', {
                'class': opts.rightArrowCls + ((opts.loopSlides || me._slideIndex < me._itemCount - 1) && me._itemCount > 1 ? '' : hiddenClass)
            }).appendTo(me._$slideContainer);
            $.publish('plugin/swImageSlider/onCreateArrows', [me, me._$arrowLeft, me._$arrowRight]);
        },
        createThumbnailArrows: function() {
            var me = this,
                opts = me.opts,
                isHorizontal = (me._thumbnailOrientation === 'horizontal'),
                prevClass = isHorizontal ? opts.thumbnailArrowLeftCls : opts.thumbnailArrowTopCls,
                nextClass = isHorizontal ? opts.thumbnailArrowRightCls : opts.thumbnailArrowBottomCls;
            me._$thumbnailArrowPrev = $('<a>', {
                'class': opts.thumbnailArrowCls + ' ' + prevClass
            }).appendTo(me._$thumbnailContainer);
            me._$thumbnailArrowNext = $('<a>', {
                'class': opts.thumbnailArrowCls + ' ' + nextClass
            }).appendTo(me._$thumbnailContainer);
            $.publish('plugin/swImageSlider/onCreateThumbnailArrows', [me, me._$thumbnailArrowPrev, me._$thumbnailArrowNext]);
        },
        trackItems: function() {
            var me = this,
                opts = me.opts;
            me._$items = me._$slide.find(opts.itemSelector);
            picturefill();
            me._$images = me._$slide.find(opts.imageSelector);
            if (opts.thumbnails) {
                me._$thumbnails = me._$thumbnailContainer.find(opts.thumbnailSelector);
                me._thumbnailCount = me._$thumbnails.length;
                if (me._thumbnailCount === 0) {
                    me.$el.addClass(opts.noThumbClass);
                    opts.thumbnails = false;
                }
            }
            me._itemCount = me._$items.length;
            $.publish('plugin/swImageSlider/onTrackItems', [me]);
        },
        setIndex: function(index) {
            var me = this,
                slideStyle = me._$slide[0].style,
                percentage = ((index || me._slideIndex) * -100);
            if (transformProperty && transitionProperty) {
                slideStyle[transitionProperty] = 'none';
                slideStyle[transformProperty] = 'translateX(' + percentage + '%)';
            } else {
                slideStyle.left = percentage + '%';
            }
            me._$currentImage = $(me._$images[index]);
            me.updateMaxZoomValue();
            $.publish('plugin/swImageSlider/onSetIndex', [me, index]);
        },
        getIndex: function(event) {
            return this._slideIndex;
        },
        updateMaxZoomValue: function() {
            var me = this,
                $currentImage = me._$currentImage,
                image = $currentImage[0];
            if (!me._autoScale) {
                return;
            }
            if (!image) {
                me._maxZoom = me._minZoom;
                return;
            }
            me._maxZoom = Math.max(image.naturalWidth, image.naturalHeight) / Math.max($currentImage.width(), $currentImage.height());
            $.publish('plugin/swImageSlider/onUpdateMaxZoomValue', [me, me._maxZoom]);
        },
        getThumbnailOrientation: function() {
            var $container = this._$thumbnailContainer;
            return ($container.innerWidth() > $container.innerHeight()) ? 'horizontal' : 'vertical';
        },
        setActiveThumbnail: function(index) {
            var me = this,
                isHorizontal = me._thumbnailOrientation === 'horizontal',
                orientation = isHorizontal ? 'left' : 'top',
                $thumbnail = me._$thumbnails.eq(index),
                $container = me._$thumbnailContainer,
                thumbnailPos = $thumbnail.position(),
                slidePos = me._$thumbnailSlide.position(),
                slideOffset = slidePos[orientation],
                posA = thumbnailPos[orientation] * -1,
                posB = thumbnailPos[orientation] + (isHorizontal ? $thumbnail.outerWidth() : $thumbnail.outerHeight()),
                containerSize = isHorizontal ? $container.width() : $container.height(),
                activeClass = me.opts.activeStateClass,
                newPos;
            if (posA < slideOffset && posB * -1 < slideOffset + (containerSize * -1)) {
                newPos = containerSize - Math.max(posB, containerSize);
            } else {
                newPos = Math.max(posA, slideOffset);
            }
            me._$thumbnails.removeClass(activeClass);
            $thumbnail.addClass(activeClass);
            me.setThumbnailSlidePosition(newPos, true);
            $.publish('plugin/swImageSlider/onSetActiveThumbnail', [me, index]);
        },
        setActiveDot: function(index) {
            var me = this,
                $dots = me._$dots;
            if (me.opts.dotNavigation && $dots) {
                $dots.removeClass(me.opts.activeStateClass);
                $dots.eq(index || me._slideIndex).addClass(me.opts.activeStateClass);
            }
            $.publish('plugin/swImageSlider/onSetActiveDot', [me, index]);
        },
        setThumbnailSlidePosition: function(offset, animate) {
            var me = this,
                $slide = me._$thumbnailSlide,
                $container = me._$thumbnailContainer,
                isHorizontal = me._thumbnailOrientation === 'horizontal',
                sizeA = isHorizontal ? $container.innerWidth() : $container.innerHeight(),
                sizeB = isHorizontal ? $slide.outerWidth(true) : $slide.outerHeight(true),
                min = Math.min(0, sizeA - sizeB),
                css = {};
            me._thumbnailOffset = Math.max(min, Math.min(0, offset));
            css[isHorizontal ? 'left' : 'top'] = me._thumbnailOffset;
            css[isHorizontal ? 'top' : 'left'] = 'auto';
            if (!animate) {
                $slide.css(css);
            } else {
                $slide[Modernizr.csstransitions ? 'transition' : 'animate'](css, me.animationSpeed, $.proxy(me.trackThumbnailControls, me));
            }
            $.publish('plugin/swImageSlider/onSetThumbnailSlidePosition', [me, offset, animate]);
        },
        trackThumbnailControls: function() {
            var me = this,
                opts = me.opts,
                isHorizontal = me._thumbnailOrientation === 'horizontal',
                $container = me._$thumbnailContainer,
                $slide = me._$thumbnailSlide,
                $prevArr = me._$thumbnailArrowPrev,
                $nextArr = me._$thumbnailArrowNext,
                activeCls = me.opts.activeStateClass,
                pos = $slide.position(),
                orientation = me.getThumbnailOrientation();
            if (me._thumbnailOrientation !== orientation) {
                $prevArr.toggleClass(opts.thumbnailArrowLeftCls, !isHorizontal).toggleClass(opts.thumbnailArrowTopCls, isHorizontal);
                $nextArr.toggleClass(opts.thumbnailArrowRightCls, !isHorizontal).toggleClass(opts.thumbnailArrowBottomCls, isHorizontal);
                me._thumbnailOrientation = orientation;
                me.setActiveThumbnail(me._slideIndex);
            }
            if (me._thumbnailOrientation === 'horizontal') {
                $prevArr.toggleClass(activeCls, pos.left < 0);
                $nextArr.toggleClass(activeCls, ($slide.innerWidth() + pos.left) > $container.innerWidth());
            } else {
                $prevArr.toggleClass(activeCls, pos.top < 0);
                $nextArr.toggleClass(activeCls, ($slide.innerHeight() + pos.top) > $container.innerHeight());
            }
            $.publish('plugin/swImageSlider/onTrackThumbnailControls', [me]);
        },
        startAutoSlide: function() {
            var me = this;
            me.stopAutoSlide(me._slideInterval);
            me._slideInterval = window.setTimeout($.proxy(me.slideNext, me), me.opts.autoSlideInterval);
            $.publish('plugin/swImageSlider/onStartAutoSlide', [me, me._slideInterval]);
        },
        stopAutoSlide: function() {
            var me = this;
            window.clearTimeout(me._slideInterval);
            $.publish('plugin/swImageSlider/onStopAutoSlide', [me]);
        },
        slide: function(index, callback) {
            var me = this,
                opts = me.opts,
                slideStyle = me._$slide[0].style;
            me._slideIndex = index;
            if (opts.thumbnails) {
                me.setActiveThumbnail(index);
                me.trackThumbnailControls();
            }
            if (opts.dotNavigation && me._$dots) {
                me.setActiveDot(index);
            }
            if (opts.autoSlide) {
                me.stopAutoSlide();
                me.startAutoSlide();
            }
            me.resetTransformation(true, function() {
                if (transitionProperty && transformProperty) {
                    slideStyle[transitionProperty] = 'all ' + opts.animationSpeed + 'ms ' + opts.animationEasing;
                    slideStyle[transformProperty] = 'translateX(' + (index * -100) + '%)';
                    if (typeof callback === 'function') {
                        setTimeout($.proxy(callback, me), opts.animationSpeed);
                    }
                } else {
                    me._$slide.animate({
                        'left': (index * -100) + '%',
                        'easing': 'ease-out'
                    }, opts.animationSpeed, $.proxy(callback, me));
                }
            });
            me._$currentImage = $(me._$images[index]);
            me.updateMaxZoomValue();
            if (opts.arrowControls) {
                me._$arrowLeft.toggleClass(opts.hiddenClass, !opts.loopSlides && index <= 0);
                me._$arrowRight.toggleClass(opts.hiddenClass, !opts.loopSlides && index >= me._itemCount - 1);
            }
            $.publish('plugin/swImageSlider/onSlide', [me, index, callback]);
        },
        resetTransformation: function(animate, callback) {
            var me = this,
                translation = me._imageTranslation;
            me._touchDistance = 0;
            if (me._imageScale !== 1 || translation.x !== 0 || translation.y !== 0) {
                me._imageScale = 1;
                me._imageTranslation.set(0, 0);
                me.updateTransform(animate, callback);
            } else if (callback) {
                callback.call(me);
            }
            $.publish('plugin/swImageSlider/onResetTransformation', [me, animate, callback]);
        },
        slideNext: function() {
            var me = this,
                newIndex = me._slideIndex + 1,
                itemCount = me._itemCount,
                isLooping = me.opts.loopSlides;
            me._lastTouchTime = 0;
            me.slide((newIndex >= itemCount && isLooping) ? 0 : Math.min(itemCount - 1, newIndex));
            $.publish('plugin/swImageSlider/onSlideNext', [me, newIndex]);
        },
        slidePrev: function() {
            var me = this,
                newIndex = me._slideIndex - 1,
                itemCount = me._itemCount,
                isLooping = me.opts.loopSlides;
            me._lastTouchTime = 0;
            me.slide((newIndex < 0 && isLooping) ? itemCount - 1 : Math.max(0, newIndex));
            $.publish('plugin/swImageSlider/onSlidePrev', [me, newIndex]);
        },
        destroy: function() {
            var me = this,
                opts = me.opts;
            me.resetTransformation(false);
            me._$slideContainer = null;
            me._$items = null;
            me._$currentImage = null;
            if (opts.dotNavigation && me._$dots) {
                me._$dots.removeClass(me.opts.activeStateClass);
                me._$dotNav = null;
                me._$dots = null;
            }
            if (opts.arrowControls) {
                me._$arrowLeft.remove();
                me._$arrowRight.remove();
            }
            if (opts.thumbnails) {
                me._$thumbnailArrowPrev.remove();
                me._$thumbnailArrowNext.remove();
                me._$thumbnailContainer = null;
                me._$thumbnailSlide = null;
                me._$thumbnails.removeClass(me.opts.activeStateClass);
                me._$thumbnails = null;
            }
            if (opts.autoSlide) {
                me.stopAutoSlide();
            }
            StateManager.off('resize', me.onResize, me);
            me._destroy();
        }
    });

    function Vector(x, y) {
        var me = this;
        me.x = x || 0;
        me.y = y || 0;
    }
    Vector.prototype.set = function(x, y) {
        var me = this;
        me.x = (typeof x === 'number') ? x : me.x;
        me.y = (typeof y === 'number') ? y : me.y;
    };
})(jQuery, Modernizr, window, Math);;
(function($) {
    'use strict';
    $.plugin('swImageZoom', {
        defaults: {
            showTitle: true,
            containerCls: 'js--img-zoom--container',
            lensCls: 'js--img-zoom--lens',
            flyoutCls: 'js--img-zoom--flyout',
            titleContainerCls: 'js--img-zoom--title',
            activeSelector: '.is--active',
            animationSpeed: 300
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.active = false;
            me.$container = me.$el.find('.image-slider--slide');
            me.imageBox = me.$el.find('.image--box');
            me.$imageElements = me.$el.find('.image--element');
            me.$thumbnails = me.$el.find('.thumbnail--link');
            me.$flyout = me.createFlyoutElement();
            me.$lens = me.createLensElement();
            if (me.opts.showTitle) {
                me.$title = me.createTitleContainer();
            }
            me.zoomImage = false;
            me.$activeImage = me.getActiveImageElement();
            me.flyoutWidth = me.$flyout.outerWidth();
            me.flyoutHeight = me.$flyout.outerHeight();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            $('body').on('scroll.imageZoom', $.proxy(me.stopZoom, me));
            me._on(me.$container, 'mousemove', $.proxy(me.onMouseMove, me));
            me._on(me.$container, 'mouseout', $.proxy(me.stopZoom, me));
            me._on(me.$lens, 'click', $.proxy(me.onLensClick, me));
            $.subscribe('plugin/swImageSlider/onRightArrowClick', $.proxy(me.stopZoom, me));
            $.subscribe('plugin/swImageSlider/onLeftArrowClick', $.proxy(me.stopZoom, me));
            $.subscribe('plugin/swImageSlider/onClick', $.proxy(me.stopZoom, me));
            $.subscribe('plugin/swImageSlider/onLightbox', $.proxy(me.stopZoom, me));
            $.publish('plugin/swImageZoom/onRegisterEvents', [me]);
        },
        createLensElement: function() {
            var me = this,
                $el = $('<div>', {
                    'class': me.opts.lensCls,
                    'html': '&nbsp;'
                }).appendTo(me.$container);
            $.publish('plugin/swImageZoom/onCreateLensElement', [me, $el]);
            return $el;
        },
        createFlyoutElement: function() {
            var me = this,
                $el = $('<div>', {
                    'class': me.opts.flyoutCls
                }).appendTo(me.$el);
            $.publish('plugin/swImageZoom/onCreateFlyoutElement', [me, $el]);
            return $el;
        },
        createTitleContainer: function() {
            var me = this,
                $el;
            if (!me.$flyout.length || !me.opts.showTitle) {
                return;
            }
            $el = $('<div>', {
                'class': me.opts.titleContainerCls
            }).appendTo(me.$flyout);
            $.publish('plugin/swImageZoom/onCreateTitleContainer', [me, $el]);
            return $el;
        },
        getActiveImageThumbnail: function() {
            var me = this,
                $thumbnail = me.$thumbnails.filter(me.opts.activeSelector);
            $.publish('plugin/swImageZoom/onGetActiveImageThumbnail', [me, $thumbnail]);
            return $thumbnail;
        },
        getActiveImageElement: function() {
            var me = this,
                $el;
            me.$activeImageThumbnail = me.getActiveImageThumbnail();
            if (!me.$activeImageThumbnail.length) {
                $el = me.$imageElements.eq(0);
            } else {
                $el = me.$imageElements.eq(me.$activeImageThumbnail.index());
            }
            $.publish('plugin/swImageZoom/onGetActiveImageElement', [me, $el]);
            return $el;
        },
        setLensSize: function(factor) {
            var me = this;
            me.lensWidth = me.flyoutWidth / factor;
            me.lensHeight = me.flyoutHeight / factor;
            if (me.lensWidth > me.imageWidth) {
                me.lensWidth = me.imageWidth;
            }
            if (me.lensHeight > me.imageHeight) {
                me.lensHeight = me.imageHeight;
            }
            me.$lens.css({
                'width': me.lensWidth,
                'height': me.lensHeight
            });
            $.publish('plugin/swImageZoom/onSetLensSize', [me, me.$lens, factor]);
        },
        setLensPosition: function(x, y) {
            var me = this;
            me.$lens.css({
                'top': y,
                'left': x
            });
            $.publish('plugin/swImageZoom/onSetLensPosition', [me, me.$lens, x, y]);
        },
        showLens: function() {
            var me = this;
            me.$lens.stop(true, true).fadeIn(me.opts.animationSpeed);
            $.publish('plugin/swImageZoom/onShowLens', [me, me.$lens]);
        },
        hideLens: function() {
            var me = this;
            me.$lens.stop(true, true).fadeOut(me.opts.animationSpeed);
            $.publish('plugin/swImageZoom/onHideLens', [me, me.$lens]);
        },
        setZoomPosition: function(x, y) {
            var me = this;
            me.$flyout.css('backgroundPosition', x + 'px ' + y + 'px');
            $.publish('plugin/swImageZoom/onSetZoomPosition', [me, me.$flyout, x, y]);
        },
        showZoom: function() {
            var me = this;
            me.$flyout.stop(true, true).fadeIn(me.opts.animationSpeed);
            $.publish('plugin/swImageZoom/onShowZoom', [me, me.$flyout]);
        },
        hideZoom: function() {
            var me = this;
            me.$flyout.stop(true, true).fadeOut(me.opts.animationSpeed);
            $.publish('plugin/swImageZoom/onHideZoom', [me, me.$flyout]);
        },
        setImageTitle: function(title) {
            var me = this;
            if (!me.opts.showTitle || !me.$title.length) {
                return;
            }
            me.$title.html('<span>' + (title || me.imageTitle) + '</span>');
            $.publish('plugin/swImageZoom/onSetImageTitle', [me, me.$title, title]);
        },
        onMouseMove: function(event) {
            var me = this;
            if (!me.zoomImage) {
                me.activateZoom();
                return;
            }
            var containerOffset = me.$container.offset(),
                mouseX = event.pageX,
                mouseY = event.pageY,
                containerX = mouseX - containerOffset.left,
                containerY = mouseY - containerOffset.top,
                lensX = containerX - (me.lensWidth / 2),
                lensY = containerY - (me.lensHeight / 2),
                minX = me.imageOffset.left - containerOffset.left,
                minY = me.imageOffset.top - containerOffset.top,
                maxX = minX + me.imageWidth - me.$lens.outerWidth(),
                maxY = minY + me.imageHeight - me.$lens.outerHeight(),
                lensLeft = me.clamp(lensX, minX, maxX),
                lensTop = me.clamp(lensY, minY, maxY),
                zoomLeft = -(lensLeft - minX) * me.factor,
                zoomTop = -(lensTop - minY) * me.factor;
            if (minX >= maxX) {
                zoomLeft = zoomLeft + (me.flyoutWidth / 2) - (me.zoomImage.width / 2);
            }
            if (minY >= maxY) {
                zoomTop = zoomTop + (me.flyoutHeight / 2) - (me.zoomImage.height / 2);
            }
            if (mouseX > me.imageOffset.left && mouseX < me.imageOffset.left + me.imageWidth && mouseY > me.imageOffset.top && mouseY < me.imageOffset.top + me.imageHeight) {
                me.showLens();
                me.showZoom();
                me.setLensPosition(lensLeft, lensTop);
                me.setZoomPosition(zoomLeft, zoomTop);
            } else {
                me.stopZoom();
            }
        },
        setActiveImage: function() {
            var me = this;
            me.$activeImageElement = me.getActiveImageElement();
            me.$activeImage = me.$activeImageElement.find('img');
            me.imageTitle = me.$activeImageElement.attr('data-alt');
            me.imageWidth = me.$activeImage.innerWidth();
            me.imageHeight = me.$activeImage.innerHeight();
            me.imageOffset = me.$activeImage.offset();
            $.publish('plugin/swImageZoom/onSetActiveImage', me);
        },
        activateZoom: function() {
            var me = this;
            me.setActiveImage();
            if (!me.zoomImage) {
                me.zoomImageUrl = me.$activeImageElement.attr('data-img-original');
                me.zoomImage = new Image();
                me.zoomImage.onload = function() {
                    me.factor = me.zoomImage.width / me.$activeImage.innerWidth();
                    me.setLensSize(me.factor);
                    me.$flyout.css('background', 'url(' + me.zoomImageUrl + ') 0px 0px no-repeat #fff');
                    if (me.opts.showTitle) {
                        me.setImageTitle(me.title);
                    }
                    $.publish('plugin/swImageZoom/onZoomImageLoaded', [me, me.zoomImage]);
                };
                me.zoomImage.src = me.zoomImageUrl;
            }
            $.publish('plugin/swImageZoom/onActivateZoom', me);
            me.active = true;
        },
        stopZoom: function() {
            var me = this;
            me.hideLens();
            me.hideZoom();
            me.zoomImage = false;
            me.active = false;
            $.publish('plugin/swImageZoom/onStopZoom', me);
        },
        onLensClick: function(event) {
            $.publish('plugin/swImageZoom/onLensClick', [this, event]);
        },
        clamp: function(number, min, max) {
            return Math.max(min, Math.min(max, number));
        },
        destroy: function() {
            var me = this;
            me.$lens.remove();
            me.$flyout.remove();
            me.$container.removeClass(me.opts.containerCls);
            $('body').off('scroll.imageZoom');
            me._destroy();
        }
    });
})(jQuery);;
(function($) {
    'use strict';
    $.plugin('swCollapsePanel', {
        alias: 'collapsePanel',
        defaults: {
            collapseTarget: false,
            contentSiblingSelector: '.collapse--content',
            collapseTargetCls: 'js--collapse-target',
            collapsedStateCls: 'is--collapsed',
            activeTriggerCls: 'is--active',
            closeSiblings: false,
            animationSpeed: 400
        },
        init: function() {
            var me = this,
                opts = me.opts;
            me.applyDataAttributes();
            if (opts.collapseTarget) {
                me.$targetEl = $(opts.collapseTarget);
            } else {
                me.$targetEl = me.$el.next(opts.contentSiblingSelector);
            }
            me.$targetEl.addClass(opts.collapseTargetCls);
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, 'click', function(e) {
                e.preventDefault();
                me.toggleCollapse();
            });
            $.publish('plugin/swCollapsePanel/onRegisterEvents', [me]);
        },
        toggleCollapse: function() {
            var me = this;
            if (me.$targetEl.hasClass(me.opts.collapsedStateCls)) {
                me.closePanel();
            } else {
                me.openPanel();
            }
            $.publish('plugin/swCollapsePanel/onToggleCollapse', [me]);
        },
        openPanel: function() {
            var me = this,
                opts = me.opts,
                $targetEl = me.$targetEl,
                siblings = $('.' + opts.collapseTargetCls).not($targetEl),
                tabId = $targetEl.parent().attr('data-tab-id');
            me.$el.addClass(opts.activeTriggerCls);
            $targetEl.slideDown(opts.animationSpeed, function() {
                $.publish('plugin/swCollapsePanel/onOpen', [me]);
            }).addClass(opts.collapsedStateCls);
            if (opts.closeSiblings) {
                siblings.slideUp(opts.animationSpeed, function() {
                    siblings.removeClass(opts.collapsedStateCls);
                    siblings.prev().removeClass(opts.activeTriggerCls);
                });
            }
            if (tabId !== undefined) {
                $.publish('onShowContent-' + tabId, [me]);
            }
            $.publish('plugin/swCollapsePanel/onOpenPanel', [me]);
        },
        closePanel: function() {
            var me = this,
                opts = me.opts;
            me.$el.removeClass(opts.activeTriggerCls);
            me.$targetEl.slideUp(opts.animationSpeed, function() {
                $.publish('plugin/swCollapsePanel/onClose', [me]);
            }).removeClass(opts.collapsedStateCls);
            $.publish('plugin/swCollapsePanel/onClosePanel', [me]);
        },
        destroy: function() {
            var me = this,
                opts = me.opts;
            me.$el.removeClass(opts.activeTriggerCls);
            me.$targetEl.removeClass(opts.collapsedStateCls).removeClass(opts.collapseTargetCls).removeAttr('style');
            me._destroy();
        }
    });
})(jQuery);;
(function($) {
    'use strict';
    $.plugin('swAutoSubmit', {
        defaults: {
            'loadingindicator': true
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$form = $(me.$el.parents('form')[0]);
            me._on(me.$el, 'change', $.proxy(me.onChangeSelection, me));
            $.publish('plugin/swAutoSubmit/onRegisterEvents', [me]);
        },
        onChangeSelection: function() {
            var me = this;
            if (me.opts.loadingindicator) {
                $.loadingIndicator.open({
                    closeOnClick: false
                });
            }
            me.$form.submit();
        }
    });
})(jQuery);;
(function($) {
    'use strict';
    $.plugin('swScrollAnimate', {
        defaults: {
            scrollContainerSelector: 'body, html',
            scrollTarget: 0,
            animationSpeed: 500
        },
        init: function() {
            var me = this,
                opts = me.opts;
            me.applyDataAttributes();
            me.$container = $(opts.scrollContainerSelector);
            if (typeof opts.scrollTarget === 'string') {
                me.$targetEl = $(opts.scrollTarget);
            }
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, 'touchstart click', $.proxy(me.onClickElement, me));
            $.publish('plugin/swScrollAnimate/onRegisterEvents', [me]);
        },
        onClickElement: function(event) {
            event.preventDefault();
            var me = this,
                opts = me.opts;
            $.publish('plugin/swScrollAnimate/onClickElement', [me, event]);
            if (me.$targetEl) {
                me.scrollToElement(me.$targetEl);
                return;
            }
            me.scrollToPosition(opts.scrollTarget);
        },
        scrollToElement: function($targetEl, offset) {
            var me = this;
            if (!$targetEl.length) {
                return;
            }
            $.publish('plugin/swScrollAnimate/onScrollToElement', [me, $targetEl, offset]);
            me.scrollToPosition($targetEl.offset().top + ~~(offset));
        },
        scrollToPosition: function(position) {
            var me = this;
            me.$container.animate({
                scrollTop: position
            }, me.opts.animationSpeed);
            $.publish('plugin/swScrollAnimate/onScrollToPosition', [me, position]);
        },
        destroy: function() {
            this._destroy();
        }
    });
})(jQuery);;
(function($, window) {
    'use strict';
    var $window = $(window);
    jQuery.extend(jQuery.easing, {
        easeOutExpo: function(x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    });
    $.plugin('swProductSlider', {
        defaults: {
            mode: 'local',
            orientation: 'horizontal',
            itemMinWidth: 220,
            itemMinHeight: 240,
            itemsPerSlide: 1,
            autoSlide: false,
            autoSlideDirection: 'next',
            autoSlideSpeed: 4,
            autoScroll: false,
            autoScrollDirection: 'next',
            autoScrollSpeed: 1,
            scrollDistance: 350,
            animationSpeed: 800,
            arrowControls: true,
            arrowAction: 'slide',
            wrapperCls: 'product-slider',
            horizontalCls: 'is--horizontal',
            verticalCls: 'is--vertical',
            arrowCls: 'product-slider--arrow',
            prevArrowCls: 'arrow--prev',
            nextArrowCls: 'arrow--next',
            containerSelector: '.product-slider--container',
            itemSelector: '.product-slider--item',
            ajaxCtrlUrl: null,
            ajaxCategoryID: null,
            ajaxMaxShow: 30,
            ajaxShowLoadingIndicator: true,
            ajaxLoadingIndicatorCls: 'js--loading-indicator indicator--absolute',
            ajaxLoadingIndicatorIconCls: 'icon--default',
            initOnEvent: null
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.autoScrollAnimation = false;
            me.autoSlideAnimation = false;
            me.bufferedCall = false;
            me.initialized = false;
            me.scrollingReachedEndOfItems = false;
            me.totalUniqueItems = 0;
            me.itemsPerSlide = me.opts.itemsPerSlide;
            me.isLoading = false;
            me.isAnimating = false;
            if (me.opts.mode === 'ajax' && me.opts.ajaxCtrlUrl === null) {
                console.error('The controller url for the ajax slider is not defined!');
                return;
            }
            if (me.opts.mode === 'ajax' && me.opts.ajaxShowLoadingIndicator) {
                me.showLoadingIndicator();
            }
            if (me.opts.initOnEvent !== null) {
                $.subscribe(me.opts.initOnEvent, function() {
                    if (!me.initialized) {
                        me.initSlider();
                        me.registerEvents();
                    }
                });
            } else {
                me.initSlider();
                me.registerEvents();
            }
        },
        update: function() {
            var me = this;
            if (!me.initialized || !me.$el.is(':visible')) {
                return false;
            }
            me.trackItems();
            me.setSizes();
            var copyCount = me.itemsCount - me.totalUniqueItems,
                copySize = me.itemsPerPage + me.itemsPerSlide;
            if (me.totalUniqueItems && me.totalUniqueItems <= me.itemsPerPage) {
                me.$items.slice(me.totalUniqueItems, me.itemsCount).remove();
                me.trackItems();
            } else if (me.totalUniqueItems && copySize > copyCount) {
                me.cloneItems(copyCount, copySize);
                me.trackItems();
            } else if (!me.totalUniqueItems && me.isActive() && me.opts.mode !== 'ajax') {
                me.initInfiniteSlide();
            }
            me.setPosition(0);
            me.trackArrows();
            $.publish('plugin/swProductSlider/onUpdate', [me]);
        },
        initSlider: function() {
            var me = this,
                opts = me.opts;
            me.$el.addClass(opts.wrapperCls);
            me.createContainer();
            me.trackItems();
            me.setSizes();
            me.currentPosition = me.getScrollPosition();
            if (me.itemsCount <= 0 && opts.mode === 'ajax') {
                me.loadItems(0, Math.min(me.itemsPerPage * 2, opts.ajaxMaxShow), $.proxy(me.initSlider, me));
                return;
            }
            if (me.opts.arrowControls && me.isActive()) me.createArrows();
            if (me.opts.autoScroll && me.isActive()) me.autoScroll();
            if (me.opts.autoSlide && me.isActive()) me.autoSlide();
            if (me.opts.mode !== 'ajax' && me.isActive()) {
                me.initInfiniteSlide();
            }
            me.initialized = true;
            $.publish('plugin/swProductSlider/onInitSlider', [me]);
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, 'touchstart mouseenter', $.proxy(me.onMouseEnter, me));
            me._on(me.$el, 'mouseleave', $.proxy(me.onMouseLeave, me));
            me._on(me.$container, 'scroll', $.proxy(me.onScroll, me));
            me._on($window, 'resize', $.proxy(me.buffer, me, me.update, 600));
            $.subscribe('plugin/swTabMenu/onChangeTab', $.proxy(me.update, me));
            $.subscribe('plugin/swCollapsePanel/onOpenPanel', $.proxy(me.update, me));
            $.publish('plugin/swProductSlider/onRegisterEvents', [me]);
        },
        isActive: function() {
            var me = this;
            return me.$items.length > me.itemsPerPage;
        },
        getScrollPosition: function(orientation) {
            var me = this,
                o = orientation || me.opts.orientation;
            return (o === 'vertical') ? me.$container.scrollTop() : me.$container.scrollLeft();
        },
        setPosition: function(position) {
            var me = this,
                pos = position || 0,
                method = (me.opts.orientation === 'vertical') ? 'scrollTop' : 'scrollLeft';
            me.$container[method](pos);
            me.currentPosition = pos;
            $.publish('plugin/swProductSlider/onSetPosition', [me, pos]);
        },
        setSizes: function(orientation) {
            var me = this,
                o = orientation || me.opts.orientation,
                containerSize = (o === 'vertical') ? me.$el.innerHeight() : me.$el.innerWidth(),
                itemSize = (o === 'vertical') ? me.opts.itemMinHeight : me.opts.itemMinWidth;
            me.itemsPerPage = Math.floor(containerSize / itemSize);
            if (me.itemsPerPage < 1) me.itemsPerPage = 1;
            me.itemsPerSlide = Math.min(me.opts.itemsPerSlide, me.itemsPerPage);
            me.itemSizePercent = 100 / me.itemsPerPage;
            if (o === 'vertical') {
                me.$items.css({
                    'height': me.itemSizePercent + '%'
                });
                me.itemSize = me.$items.outerHeight();
            } else {
                me.$items.css({
                    'width': me.itemSizePercent + '%'
                });
                me.itemSize = me.$items.outerWidth();
            }
            window.picturefill();
            $.publish('plugin/swProductSlider/onSetSizes', [me, orientation]);
        },
        trackItems: function() {
            var me = this;
            me.$items = me.$container.find(me.opts.itemSelector);
            me.itemsCount = me.$items.length;
            $.publish('plugin/swProductSlider/onTrackItems', [me, me.items, me.itemsCount]);
            return me.itemsCount;
        },
        trackArrows: function() {
            var me = this;
            if (!me.$arrowPrev || !me.$arrowNext) {
                if (me.isActive() && me.opts.arrowControls) me.createArrows();
                return;
            }
            if (!me.isActive()) {
                me.$arrowPrev.hide();
                me.$arrowNext.hide();
                return;
            }
            var slideEnd = me.currentPosition + me.$container[(me.opts.orientation === 'vertical') ? 'outerHeight' : 'outerWidth']();
            me.$arrowPrev[(me.currentPosition > 5) ? 'show' : 'hide']();
            me.$arrowNext[(slideEnd >= parseInt(me.itemSize * me.itemsCount, 10) - 5) ? 'hide' : 'show']();
            $.publish('plugin/swProductSlider/onTrackArrows', [me, me.$arrowPrev, me.$arrowNext]);
        },
        showLoadingIndicator: function() {
            var me = this;
            me.$ajaxLoadingIndicator = $('<div>', {
                'class': me.opts.ajaxLoadingIndicatorCls,
                'html': $('<i>', {
                    'class': me.opts.ajaxLoadingIndicatorIconCls
                })
            }).appendTo(me.$el);
        },
        removeLoadingIndicator: function() {
            var me = this;
            if (me.$ajaxLoadingIndicator) {
                me.$ajaxLoadingIndicator.remove();
            }
        },
        loadItems: function(start, limit, callback) {
            var me = this,
                data = {
                    'start': start,
                    'limit': limit
                };
            if (me.opts.ajaxCategoryID !== null) {
                data['category'] = me.opts.ajaxCategoryID;
            }
            me.isLoading = true;
            $.publish('plugin/swProductSlider/onLoadItemsBefore', [me, data]);
            $.ajax({
                url: me.opts.ajaxCtrlUrl,
                method: 'GET',
                data: data,
                success: function(response) {
                    me.removeLoadingIndicator();
                    me.isLoading = false;
                    me.$container.append(response);
                    if (me.itemsCount === me.trackItems()) {
                        me.initInfiniteSlide();
                    }
                    me.setSizes();
                    me.trackArrows();
                    $.publish('plugin/swProductSlider/onLoadItemsSuccess', [me, response]);
                    if (typeof callback === 'function') {
                        callback.call(me, response);
                    }
                }
            });
            $.publish('plugin/swProductSlider/onLoadItems', [me]);
        },
        createContainer: function(orientation) {
            var me = this,
                o = orientation || me.opts.orientation,
                orientationCls = (o === 'vertical') ? me.opts.verticalCls : me.opts.horizontalCls,
                $container = me.$el.find(me.opts.containerSelector);
            if (!$container.length) {
                $container = $('<div>', {
                    'class': me.opts.containerSelector.substr(1)
                }).appendTo(me.$el);
            }
            $container.addClass(orientationCls);
            me.$container = $container;
            $.publish('plugin/swProductSlider/onCreateContainer', [me, $container, orientation]);
            return $container;
        },
        createArrows: function() {
            var me = this,
                orientationCls = (me.opts.orientation === 'vertical') ? me.opts.verticalCls : me.opts.horizontalCls;
            if (!me.opts.arrowControls || !me.isActive()) {
                return;
            }
            if (!me.$arrowPrev) {
                me.$arrowPrev = $('<a>', {
                    'class': me.opts.arrowCls + ' ' +
                        me.opts.prevArrowCls + ' ' +
                        orientationCls
                }).prependTo(me.$el);
                me._on(me.$arrowPrev, 'click', $.proxy(me.onArrowClick, me, 'prev'));
            }
            if (!me.$arrowNext) {
                me.$arrowNext = $('<a>', {
                    'class': me.opts.arrowCls + ' ' +
                        me.opts.nextArrowCls + ' ' +
                        orientationCls
                }).prependTo(me.$el);
                me._on(me.$arrowNext, 'click', $.proxy(me.onArrowClick, me, 'next'));
            }
            me.trackArrows();
            $.publish('plugin/swProductSlider/onCreateArrows', [me, me.$arrowPrev, me.$arrowNext]);
        },
        onArrowClick: function(type, event) {
            var me = this,
                next = (me.opts.arrowAction === 'scroll') ? 'scrollNext' : 'slideNext',
                prev = (me.opts.arrowAction === 'scroll') ? 'scrollPrev' : 'slidePrev';
            event.preventDefault();
            me[(type === 'prev') ? prev : next]();
            $.publish('plugin/swProductSlider/onArrowClick', [me, event, type]);
        },
        onMouseEnter: function(event) {
            var me = this;
            me.stopAutoScroll();
            me.stopAutoSlide();
            $.publish('plugin/swProductSlider/onMouseEnter', [me, event]);
        },
        onMouseLeave: function(event) {
            var me = this;
            if (me.isActive() && me.opts.autoScroll) me.autoScroll();
            if (me.isActive() && me.opts.autoSlide) me.autoSlide();
            $.publish('plugin/swProductSlider/onMouseLeave', [me, event]);
        },
        onScroll: function(event) {
            var me = this;
            if (!me.isAnimating) {
                me.currentPosition = me.getScrollPosition();
            }
            me.trackArrows();
            if (me.opts.mode !== 'ajax' || me.isLoading) {
                return;
            }
            var position = me.getScrollPosition(),
                scrolledItems = Math.floor(position / me.itemSize),
                itemsLeftToLoad = me.opts.ajaxMaxShow - me.itemsCount,
                loadMoreCount = me.itemsCount - me.itemsPerPage * 2;
            if (!me.totalUniqueItems && itemsLeftToLoad === 0) {
                me.initInfiniteSlide();
            }
            if (!me.totalUniqueItems && scrolledItems >= loadMoreCount && itemsLeftToLoad > 0) {
                me.loadItems(me.itemsCount, Math.min(me.itemsPerPage, itemsLeftToLoad));
            }
            $.publish('plugin/swProductSlider/onScroll', [me, event]);
        },
        initInfiniteSlide: function() {
            var me = this;
            me.cloneItems(0, me.itemsPerPage + me.itemsPerSlide);
            me.totalUniqueItems = me.itemsCount;
            me.trackItems();
            $.publish('plugin/swProductSlider/onInitInfiniteSlide', [me]);
        },
        cloneItems: function(start, end) {
            var me = this,
                $copyItems = me.$items.slice(start, end);
            me.$container.append($copyItems.clone());
            $.publish('plugin/swProductSlider/onCloneItems', [me, start, end, $copyItems]);
        },
        resetToStart: function() {
            var me = this;
            me.scrollingReachedEndOfItems = false;
            me.setPosition((Math.floor(me.currentPosition / me.itemSize) - me.totalUniqueItems) * me.itemSize);
            $.publish('plugin/swProductSlider/onResetToStart', [me, me.currentPosition]);
        },
        slideNext: function() {
            var me = this;
            if (me.scrollingReachedEndOfItems) {
                me.resetToStart();
            }
            me.currentPosition = Math.floor((me.currentPosition + me.itemSize * me.itemsPerSlide) / me.itemSize) * me.itemSize;
            me.slide(me.currentPosition);
            if (me.totalUniqueItems && (me.currentPosition / me.itemSize) >= me.totalUniqueItems) {
                me.scrollingReachedEndOfItems = true;
            }
            $.publish('plugin/swProductSlider/onSlideNext', [me, me.currentPosition]);
        },
        slidePrev: function() {
            var me = this;
            me.scrollingReachedEndOfItems = false;
            me.currentPosition = Math.ceil((me.currentPosition - me.itemSize * me.itemsPerSlide) / me.itemSize) * me.itemSize;
            me.slide(me.currentPosition);
            $.publish('plugin/swProductSlider/onSlidePrev', [me, me.currentPosition]);
        },
        slideToElement: function($el, orientation) {
            var me = this,
                o = orientation || me.opts.orientation,
                position = $el.position(),
                slide = (o === 'vertical') ? position.top : position.left;
            me.slide(slide);
            $.publish('plugin/swProductSlider/onSlideToElement', [me, $el, orientation]);
        },
        slide: function(position) {
            var me = this,
                animation = {};
            me.isAnimating = true;
            animation[(me.opts.orientation === 'vertical') ? 'scrollTop' : 'scrollLeft'] = position;
            me.$container.stop().animate(animation, me.opts.animationSpeed, 'easeOutExpo', function() {
                me.currentPosition = me.getScrollPosition();
                me.isAnimating = false;
                $.publish('plugin/swProductSlider/onSlideFinished', [me, me.currentPosition]);
            });
            $.publish('plugin/swProductSlider/onSlide', [me, position]);
        },
        autoSlide: function(slideDirection, slideSpeed) {
            var me = this,
                direction = slideDirection || me.opts.autoSlideDirection,
                speed = slideSpeed || me.opts.autoSlideSpeed,
                method = (direction === 'prev') ? me.slidePrev : me.slideNext;
            me.autoSlideAnimation = window.setInterval($.proxy(method, me), speed * 1000);
            $.publish('plugin/swProductSlider/onAutoSlide', [me, me.autoSlideAnimation, slideDirection, slideSpeed]);
        },
        stopAutoSlide: function() {
            var me = this;
            window.clearInterval(me.autoSlideAnimation);
            me.autoSlideAnimation = false;
            $.publish('plugin/swProductSlider/onStopAutoSlide', [me]);
        },
        scrollNext: function(scrollDistance) {
            var me = this;
            me.currentPosition += scrollDistance || me.opts.scrollDistance;
            me.slide(me.currentPosition);
            $.publish('plugin/swProductSlider/onScrollNext', [me, me.currentPosition, scrollDistance]);
        },
        scrollPrev: function(scrollDistance) {
            var me = this;
            me.currentPosition -= scrollDistance || me.opts.scrollDistance;
            me.slide(me.currentPosition);
            $.publish('plugin/swProductSlider/onScrollPrev', [me, me.currentPosition, scrollDistance]);
        },
        autoScroll: function(scrollDirection, scrollSpeed) {
            var me = this,
                direction = scrollDirection || me.opts.autoScrollDirection,
                speed = scrollSpeed || me.opts.autoScrollSpeed,
                position = me.getScrollPosition();
            me.autoScrollAnimation = StateManager.requestAnimationFrame($.proxy(me.autoScroll, me, direction, speed));
            me.setPosition((direction === 'prev') ? position - speed : position + speed);
            if (me.totalUniqueItems && (me.currentPosition / me.itemSize) >= me.totalUniqueItems) {
                me.setPosition(0);
            }
            $.publish('plugin/swProductSlider/onAutoScroll', [me, me.autoScrollAnimation, scrollDirection, scrollSpeed]);
        },
        stopAutoScroll: function() {
            var me = this;
            StateManager.cancelAnimationFrame(me.autoScrollAnimation);
            me.autoScrollAnimation = false;
            $.publish('plugin/swProductSlider/onStopAutoScroll', [me]);
        },
        buffer: function(func, bufferTime) {
            var me = this;
            window.clearTimeout(me.bufferedCall);
            me.bufferedCall = window.setTimeout($.proxy(func, me), bufferTime);
            $.publish('plugin/swProductSlider/onBuffer', [me, me.bufferedCall, func, bufferTime]);
        },
        destroy: function() {
            var me = this;
            if (me.$arrowPrev) me.$arrowPrev.remove();
            if (me.$arrowNext) me.$arrowNext.remove();
            me.stopAutoSlide();
            me.stopAutoScroll();
            me._destroy();
        }
    });
})(jQuery, window);;
(function($) {
    'use strict';
    $.plugin('swRegister', {
        defaults: {
            hiddenClass: 'is--hidden',
            errorClass: 'has--error',
            formSelector: '.register--form',
            submitBtnSelector: '.register--submit,.address--form-submit',
            typeFieldSelector: '.register--customertype select,.address--customertype select,.address--customertype input',
            companyType: 'business',
            skipAccountSelector: '.register--check input',
            altShippingSelector: '.register--alt-shipping input',
            companyFieldSelector: '.register--company,.address--company',
            accountFieldSelector: '.register--account-information',
            shippingFieldSelector: '.register--shipping',
            paymentFieldSelector: '.payment--content',
            paymentInputSelector: '.payment--selection-input input',
            countryFieldSelector: '.select--country',
            stateContainerSelector: '.register--state-selection, .address--state-selection',
            paymentMethodSelector: '.payment--method',
            inputSelector: '.is--required',
            errorMessageClass: 'register--error-msg',
            personalEmailSelector: '#register_personal_email',
            personalPasswordSelector: '#register_personal_password',
            personalEmailConfirmationSelector: '#register_personal_emailConfirmation',
            personalPasswordConfirmationSelector: '#register_personal_passwordConfirmation',
            personalGuestSelector: '#register_personal_skipLogin'
        },
        init: function() {
            var me = this,
                opts = me.opts,
                $el = me.$el;
            me.$personalEmail = $el.find(opts.personalEmailSelector);
            me.$personalPassword = $el.find(opts.personalPasswordSelector);
            me.$personalEmailConfirmation = $el.find(opts.personalEmailConfirmationSelector);
            me.$personalPasswordConfirmation = $el.find(opts.personalPasswordConfirmationSelector);
            me.$personalGuest = $el.find(opts.personalGuestSelector);
            me.$form = $el.find(opts.formSelector);
            me.$submitBtn = $el.find(opts.submitBtnSelector);
            me.$typeSelection = $el.find(opts.typeFieldSelector);
            me.$skipAccount = $el.find(opts.skipAccountSelector);
            me.$alternativeShipping = $el.find(opts.altShippingSelector);
            me.$companyFieldset = $el.find(opts.companyFieldSelector);
            me.$accountFieldset = $el.find(opts.accountFieldSelector);
            me.$shippingFieldset = $el.find(opts.shippingFieldSelector);
            me.$countySelectFields = $el.find(opts.countryFieldSelector);
            me.$paymentMethods = $el.find(opts.paymentMethodSelector);
            me.$inputs = $el.find(opts.inputSelector);
            me.$stateContainers = $el.find(opts.stateContainerSelector);
            me.checkType();
            me.checkSkipAccount();
            me.checkChangeShipping();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$typeSelection, 'change', $.proxy(me.checkType, me));
            me._on(me.$skipAccount, 'change', $.proxy(me.checkSkipAccount, me));
            me._on(me.$alternativeShipping, 'change', $.proxy(me.checkChangeShipping, me));
            me._on(me.$countySelectFields, 'change', $.proxy(me.onCountryChanged, me));
            me._on(me.$paymentMethods, 'change', $.proxy(me.onPaymentChanged, me));
            me._on(me.$form, 'focusout', $.proxy(me.onValidateInput, me));
            me._on(me.$submitBtn, 'click', $.proxy(me.onSubmitBtn, me));
            $.publish('plugin/swRegister/onRegisterEvents', [me]);
        },
        checkType: function() {
            var me = this,
                opts = me.opts,
                $fieldSet = me.$companyFieldset,
                hideCompanyFields = (me.$typeSelection.length && me.$typeSelection.val() !== opts.companyType),
                requiredFields = $fieldSet.find(opts.inputSelector),
                requiredMethod = (!hideCompanyFields) ? me.setHtmlRequired : me.removeHtmlRequired,
                classMethod = (!hideCompanyFields) ? 'removeClass' : 'addClass',
                disabledMethod = (!hideCompanyFields) ? 'removeAttr' : 'attr';
            requiredMethod(requiredFields);
            $fieldSet[classMethod](opts.hiddenClass);
            $fieldSet.find('input, select, textarea')[disabledMethod]('disabled', 'disabled');
            $.publish('plugin/swRegister/onCheckType', [me, hideCompanyFields]);
        },
        checkSkipAccount: function() {
            var me = this,
                opts = me.opts,
                $fieldSet = me.$accountFieldset,
                isChecked = me.$skipAccount.is(':checked'),
                requiredFields = $fieldSet.find(opts.inputSelector),
                requiredMethod = (!isChecked) ? me.setHtmlRequired : me.removeHtmlRequired,
                classMethod = (isChecked) ? 'addClass' : 'removeClass';
            requiredMethod(requiredFields);
            $fieldSet[classMethod](opts.hiddenClass);
            $.publish('plugin/swRegister/onCheckSkipAccount', [me, isChecked]);
        },
        checkChangeShipping: function() {
            var me = this,
                opts = me.opts,
                $fieldSet = me.$shippingFieldset,
                isChecked = me.$alternativeShipping.is(':checked'),
                requiredFields = $fieldSet.find(opts.inputSelector),
                requiredMethod = (isChecked) ? me.setHtmlRequired : me.removeHtmlRequired,
                classMethod = (isChecked) ? 'removeClass' : 'addClass';
            requiredMethod(requiredFields);
            $fieldSet[classMethod](opts.hiddenClass);
            $.publish('plugin/swRegister/onCheckChangeShipping', [me, isChecked]);
        },
        onCountryChanged: function(event) {
            var me = this,
                $select = $(event.currentTarget),
                countryId = $select.val(),
                addressType = $select.attr('data-address-type'),
                $stateContainers, plugin;
            $.publish('plugin/swRegister/onCountryChangedBefore', [me, event, countryId, addressType]);
            me.resetStateSelections(addressType);
            $stateContainers = me.$stateContainers.filter('[data-address-type="' + addressType + '"]');
            if ($stateContainers.length === 0) {
                $stateContainers = me.$stateContainers;
            }
            $stateContainers = $stateContainers.filter('[data-country-id="' + countryId + '"]');
            if ($stateContainers.length) {
                $stateContainers.removeClass(me.opts.hiddenClass);
                $select = $stateContainers.find('select');
                $select.removeAttr('disabled');
                if ((plugin = $select.data('plugin_swSelectboxReplacement'))) {
                    plugin.$el.removeClass(me.opts.hiddenClass);
                    plugin.$wrapEl.removeClass(me.opts.hiddenClass);
                    plugin.setEnabled();
                }
            }
            $.publish('plugin/swRegister/onCountryChanged', [me, event, countryId, addressType]);
        },
        resetStateSelections: function(addressType) {
            var me = this,
                plugin, $select, $stateContainers, $stateContainer;
            $stateContainers = me.$stateContainers.filter('[data-address-type="' + addressType + '"]');
            if ($stateContainers.length === 0) {
                $stateContainers = me.$stateContainers;
            }
            $.each($stateContainers, function(index, stateContainer) {
                $stateContainer = $(stateContainer);
                $select = $stateContainer.find('select');
                if ($select.data('plugin_swSelectboxReplacement')) {
                    plugin = $select.data('plugin_swSelectboxReplacement');
                    plugin.setDisabled();
                } else {
                    $select.attr('disabled', 'disabled');
                }
                $stateContainer.addClass(me.opts.hiddenClass);
            });
        },
        onPaymentChanged: function() {
            var me = this,
                opts = me.opts,
                inputClass = opts.inputSelector,
                hiddenClass = opts.hiddenClass,
                inputSelector = opts.paymentInputSelector,
                paymentSelector = opts.paymentFieldSelector,
                requiredMethod, $fieldSet, isChecked, radio, $el;
            $.each(me.$paymentMethods, function(index, el) {
                $el = $(el);
                radio = $el.find(inputSelector);
                isChecked = radio[0].checked;
                requiredMethod = (isChecked) ? me.setHtmlRequired : me.removeHtmlRequired;
                requiredMethod($el.find(inputClass));
                $fieldSet = $el.find(paymentSelector);
                $fieldSet[((isChecked) ? 'removeClass' : 'addClass')](hiddenClass);
            });
            $.publish('plugin/swRegister/onPaymentChanged', [me]);
        },
        onSubmitBtn: function() {
            var me = this,
                $input;
            me.$inputs.each(function() {
                $input = $(this);
                if (!$input.val()) {
                    me.setFieldAsError($input);
                }
            });
            $.publish('plugin/swRegister/onSubmitButton', [me]);
        },
        onValidateInput: function(event) {
            var me = this,
                $el = $(event.target),
                id = $el.attr('id'),
                action, relatedTarget = event.relatedTarget || document.activeElement;
            me.$targetElement = $(relatedTarget);
            switch (id) {
                case 'register_personal_email':
                case 'register_personal_emailConfirmation':
                    action = 'ajax_validate_email';
                    break;
                case 'register_billing_ustid':
                    action = 'ajax_validate_billing';
                    break;
                case 'register_personal_password':
                case 'register_personal_passwordConfirmation':
                    action = 'ajax_validate_password';
                    break;
                default:
                    break;
            }
            if (!$el.val() && $el.attr('required')) {
                me.setFieldAsError($el);
            } else if ($el.attr('type') === 'checkbox' && !$el.is(':checked')) {
                me.setFieldAsError($el);
            } else if (action) {
                me.validateUsingAjax($el, action);
            } else {
                me.setFieldAsSuccess($el);
            }
            $.publish('plugin/swRegister/onValidateInput', [me, event, action]);
        },
        setHtmlRequired: function($elements) {
            $elements.attr({
                'required': 'required',
                'aria-required': 'true'
            });
            $.publish('plugin/swRegister/onSetHtmlRequired', [this, $elements]);
        },
        removeHtmlRequired: function($inputs) {
            $inputs.removeAttr('required aria-required');
            $.publish('plugin/swRegister/onRemoveHtmlRequired', [this, $inputs]);
        },
        setFieldAsError: function($el) {
            var me = this,
                plugin;
            if ((plugin = $el.data('plugin_swSelectboxReplacement'))) {
                plugin.setError();
            } else {
                $el.addClass(me.opts.errorClass);
            }
            $.publish('plugin/swRegister/onSetFieldAsError', [me, $el]);
        },
        setFieldAsSuccess: function($el) {
            var me = this,
                plugin;
            if ((plugin = $el.data('plugin_swSelectboxReplacement'))) {
                plugin.removeError();
            } else {
                $el.removeClass(me.opts.errorClass);
            }
            $.publish('plugin/swRegister/onSetFieldAsSuccess', [me, $el]);
        },
        validateUsingAjax: function($input, action) {
            var me = this,
                data = 'action=' + action + '&' + me.$el.find('form').serialize(),
                URL = window.controller.ajax_validate + '/' + action;
            if (!URL) {
                return;
            }
            $.publish('plugin/swRegister/onValidateBefore', [me, data, URL]);
            $.ajax({
                'data': data,
                'type': 'post',
                'dataType': 'json',
                'url': URL,
                'success': $.proxy(me.onValidateSuccess, me, action, $input)
            });
        },
        onValidateSuccess: function(action, $input, result) {
            var me = this,
                isError, errorMessages = [],
                skipEmailConfirmationError = me.$targetElement.attr('name') == me.$personalEmailConfirmation.attr('name') && typeof me.$personalEmailConfirmation.val() === 'undefined',
                skipPasswordConfirmationError = me.$targetElement.attr('name') == me.$personalPasswordConfirmation.attr('name') && typeof me.$personalPasswordConfirmation.val() === 'undefined';
            $('#' + action + '--message').remove();
            if (!result) {
                return;
            }
            if (skipEmailConfirmationError) {
                result['emailConfirmation'] = false;
            } else if (skipPasswordConfirmationError) {
                result['passwordConfirmation'] = false;
            }
            for (var key in result) {
                isError = !!result[key];
                if (!isError) {
                    continue;
                }
                if (key == 'emailConfirmation' && skipEmailConfirmationError) {
                    result[key] = false;
                    continue;
                } else if (key == 'passwordConfirmation' && skipPasswordConfirmationError) {
                    result[key] = false;
                    continue;
                }
                if ($input.attr('name') == me.$personalEmailConfirmation.attr('name') || $input.attr('name') == me.$personalGuest.attr('name')) {
                    $input = me.$personalEmail;
                } else if ($input.attr('name') == me.$personalPasswordConfirmation.attr('name')) {
                    $input = me.$personalPassword;
                }
                errorMessages.push(result[key]);
            }
            if (result) {
                me.updateFieldFlags(result);
            }
            if (errorMessages && errorMessages.length) {
                $('<div>', {
                    'html': '<p>' + errorMessages.join('<br/>') + '</p>',
                    'id': action + '--message',
                    'class': me.opts.errorMessageClass
                }).insertAfter($input);
                me.setFieldAsError($input);
            }
            $.publish('plugin/swRegister/onValidateSuccess', [me, $input]);
        },
        updateFieldFlags: function(flags) {
            var me = this,
                $el = me.$el,
                keys = Object.keys(flags),
                len = keys.length,
                i = 0,
                flag, $input;
            for (; i < len; i++) {
                flag = keys[i];
                $input = $el.find('.' + flag);
                if (flags[flag]) {
                    me.setFieldAsError($input);
                    continue;
                }
                me.setFieldAsSuccess($input);
            }
            $.publish('plugin/swRegister/onUpdateFields', [me, flags]);
        },
        destroy: function() {
            this._destroy();
        }
    });
})(jQuery);;
(function($, window) {
    'use strict';
    var emptyFn = function() {},
        $html = $('html');
    $.modal = {
        _$modalBox: null,
        _$header: null,
        _$title: null,
        _$content: null,
        _$closeButton: null,
        defaults: {
            mode: 'local',
            sizing: 'auto',
            width: 600,
            height: 600,
            maxHeight: 0,
            overlay: true,
            closeOnOverlay: true,
            showCloseButton: true,
            animationSpeed: 500,
            title: '',
            src: '',
            closeKeys: [27],
            keyboardClosing: true,
            onClose: emptyFn,
            updateImages: false,
            additionalClass: ''
        },
        options: {},
        open: function(content, options) {
            var me = this,
                $modalBox = me._$modalBox,
                opts;
            me.options = opts = $.extend({}, me.defaults, options);
            if (opts.overlay) {
                $.overlay.open($.extend({}, {
                    closeOnClick: opts.closeOnOverlay,
                    onClose: $.proxy(me.onOverlayClose, me)
                }));
            }
            if (!$modalBox) {
                me.initModalBox();
                me.registerEvents();
                $modalBox = me._$modalBox;
            }
            me._$closeButton.toggle(opts.showCloseButton);
            $modalBox.toggleClass('sizing--auto', opts.sizing === 'auto');
            $modalBox.toggleClass('sizing--fixed', opts.sizing === 'fixed');
            $modalBox.toggleClass('sizing--content', opts.sizing === 'content');
            $modalBox.toggleClass('no--header', opts.title.length === 0);
            $modalBox.addClass(opts.additionalClass);
            if (opts.sizing === 'content') {
                opts.height = 'auto';
            } else {
                $modalBox.css('top', 0);
            }
            me.setTitle(opts.title);
            me.setWidth(opts.width);
            me.setHeight(opts.height);
            me.setMaxHeight(opts.maxHeight);
            $modalBox.css('display', 'block');
            switch (opts.mode) {
                case 'ajax':
                    $.ajax(content, {
                        data: {
                            isXHR: 1
                        },
                        success: function(result) {
                            me.setContent(result);
                            $.publish('plugin/swModal/onOpenAjax', me);
                        }
                    });
                    me.options.src = content;
                    break;
                case 'iframe':
                    me.setContent('<iframe class="content--iframe" src="' + content + '" width="100%" height="100%"></iframe>');
                    me.options.src = content;
                    break;
                default:
                    me.setContent(content);
                    break;
            }
            me.setTransition({
                opacity: 1
            }, me.options.animationSpeed, 'linear');
            $html.addClass('no--scroll');
            $.publish('plugin/swModal/onOpen', [me]);
            return me;
        },
        close: function() {
            var me = this,
                opts = me.options,
                $modalBox = me._$modalBox;
            if (opts.overlay) {
                $.overlay.close();
            }
            $html.removeClass('no--scroll');
            if ($modalBox !== null) {
                me.setTransition({
                    opacity: 0
                }, opts.animationSpeed, 'linear', function() {
                    $modalBox.removeClass(opts.additionalClass);
                    $modalBox.css('display', 'none');
                    opts.onClose.call(me);
                    me._$content.empty();
                });
            }
            $.publish('plugin/swModal/onClose', [me]);
            return me;
        },
        setTransition: function(css, duration, animation, callback) {
            var me = this,
                $modalBox = me._$modalBox,
                opts = $.extend({
                    animation: 'ease',
                    duration: me.options.animationSpeed
                }, {
                    animation: animation,
                    duration: duration
                });
            if (!$.support.transition) {
                $modalBox.stop(true).animate(css, opts.duration, opts.animation, callback);
                return;
            }
            $modalBox.stop(true).transition(css, opts.duration, opts.animation, callback);
            $.publish('plugin/swModal/onSetTransition', [me, css, opts]);
        },
        setTitle: function(title) {
            var me = this;
            me._$title.html(title);
            $.publish('plugin/swModal/onSetTitle', [me, title]);
        },
        setContent: function(content) {
            var me = this,
                opts = me.options;
            me._$content.html(content);
            if (opts.sizing === 'content') {
                me.center();
                window.setTimeout(me.center.bind(me), 25);
            }
            if (opts.updateImages) {
                picturefill();
            }
            $.publish('plugin/swModal/onSetContent', [me]);
        },
        setWidth: function(width) {
            var me = this;
            me._$modalBox.css('width', (typeof width === 'string' && !(/^\d+$/.test(width))) ? width : parseInt(width, 10));
            $.publish('plugin/swModal/onSetWidth', [me]);
        },
        setHeight: function(height) {
            var me = this,
                hasTitle = me._$title.text().length > 0,
                headerHeight;
            height = (typeof height === 'string' && !(/^\d+$/.test(height))) ? height : window.parseInt(height, 10);
            if (hasTitle) {
                headerHeight = window.parseInt(me._$header.css('height'), 10);
                me._$content.css('height', (height - headerHeight));
            } else {
                me._$content.css('height', '100%');
            }
            me._$modalBox.css('height', height);
            $.publish('plugin/swModal/onSetHeight', [me]);
        },
        setMaxHeight: function(height) {
            var me = this;
            if (!height) {
                return;
            }
            height = (typeof height === 'string' && !(/^\d+$/.test(height))) ? height : window.parseInt(height, 10);
            me._$modalBox.css('max-height', height);
            $.publish('plugin/swModal/onSetMaxHeight', [me]);
        },
        initModalBox: function() {
            var me = this;
            me._$modalBox = $('<div>', {
                'class': 'js--modal'
            });
            me._$header = $('<div>', {
                'class': 'header'
            }).appendTo(me._$modalBox);
            me._$title = $('<div>', {
                'class': 'title'
            }).appendTo(me._$header);
            me._$content = $('<div>', {
                'class': 'content'
            }).appendTo(me._$modalBox);
            me._$closeButton = $('<div>', {
                'class': 'btn icon--cross is--small btn--grey modal--close'
            }).appendTo(me._$modalBox);
            $('body').append(me._$modalBox);
            $.publish('plugin/swModal/onInit', [me]);
        },
        registerEvents: function() {
            var me = this,
                $window = $(window);
            me._$closeButton.on('click.modal touchstart.modal', $.proxy(me.close, me));
            $window.on('keydown.modal', $.proxy(me.onKeyDown, me));
            StateManager.on('resize', me.onWindowResize, me);
            StateManager.registerListener({
                state: 'xs',
                enter: function() {
                    me._$modalBox.addClass('is--fullscreen');
                },
                exit: function() {
                    me._$modalBox.removeClass('is--fullscreen');
                }
            });
            $.publish('plugin/swModal/onRegisterEvents', [me]);
        },
        onKeyDown: function(event) {
            var me = this,
                keyCode = event.which,
                keys = me.options.closeKeys,
                len = keys.length,
                i = 0;
            if (!me.options.keyboardClosing) {
                return;
            }
            for (; i < len; i++) {
                if (keys[i] === keyCode) {
                    me.close();
                }
            }
            $.publish('plugin/swModal/onKeyDown', [me, event, keyCode]);
        },
        onWindowResize: function(event) {
            var me = this;
            if (me.options.sizing === 'content') {
                me.center();
            }
            $.publish('plugin/swModal/onWindowResize', [me, event]);
        },
        center: function() {
            var me = this,
                $modalBox = me._$modalBox;
            $modalBox.css('top', ($(window).height() - $modalBox.height()) / 2);
            $.publish('plugin/swModal/onCenter', [me]);
        },
        onOverlayClose: function() {
            var me = this;
            if (!me.options.closeOnOverlay) {
                return;
            }
            me.close();
            $.publish('plugin/swModal/onOverlayClick', [me]);
        },
        destroy: function() {
            var me = this,
                p;
            me._$modalBox.remove();
            me._$modalBox = null;
            me._$header = null;
            me._$title = null;
            me._$content = null;
            me._$closeButton = null;
            for (p in me.options) {
                if (!me.options.hasOwnProperty(p)) {
                    continue;
                }
                delete me.options[p];
            }
            StateManager.off('resize', me.onWindowResize, [me]);
        }
    };
    $.plugin('swModalbox', {
        defaults: {
            targetSelector: '',
            content: '',
            mode: 'local'
        },
        init: function() {
            var me = this,
                opts;
            me.opts = $.extend({}, Object.create($.modal.defaults), me.opts);
            me.applyDataAttributes();
            opts = me.opts;
            me.$target = opts.targetSelector && (me.$target = me.$el.find(opts.targetSelector)).length ? me.$target : me.$el;
            me._isOpened = false;
            me._on(me.$target, 'click', $.proxy(me.onClick, me));
            $.subscribe('plugin/swModal/onClose', $.proxy(me.onClose, me));
            $.publish('plugin/swModalbox/onRegisterEvents', [me]);
        },
        onClick: function(event) {
            event.preventDefault();
            var me = this,
                target = me.$target.length === 1 && me.$target || $(event.target);
            $.modal.open(me.opts.content || (me.opts.mode !== 'local' ? target.attr('href') : target), me.opts);
            me._isOpened = true;
            $.publish('plugin/swModalbox/onClick', [me, event]);
        },
        onClose: function() {
            var me = this;
            me._isOpened = false;
            $.publish('plugin/swModalbox/onClose', [me]);
        },
        destroy: function() {
            var me = this;
            if (me._isOpened) {
                $.modal.close();
            }
            $.unsubscribe('plugin/swModal/onClose', $.proxy(me.onClose, me));
            me._destroy();
        }
    });
})(jQuery, window);;
(function($, window, document, undefined) {
    'use strict';
    $.plugin('swSelectboxReplacement', {
        defaults: {
            'baseCls': 'js--fancy-select',
            'focusCls': 'js--is--focused',
            'triggerText': '<i class="icon--arrow-down"></i>',
            'disabledCls': 'is--disabled',
            'errorCls': 'has--error',
            'compatibility': true,
            'class': ''
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$wrapEl = me.createTemplate(me.$el);
            me.registerEventListeners();
            if (me.$el.attr('disabled') !== undefined) {
                me.setDisabled();
            }
            if (me.$el.hasClass(me.opts.errorCls)) {
                me.setError();
            }
            if (me.opts.compatibility) {
                me._setCompatibilityClasses();
            }
            return me;
        },
        createTemplate: function($el) {
            var me = this,
                wrapEl;
            wrapEl = me._formatString('<div class="{0}"></div>', me.opts.baseCls + ' ' + me.opts['class']);
            wrapEl = $el.wrap(wrapEl).parents('.' + me.opts.baseCls);
            me.$textEl = $('<div>', {
                'class': me.opts.baseCls + '-text'
            }).appendTo(wrapEl);
            me.$triggerEl = $('<div>', {
                'class': me.opts.baseCls + '-trigger',
                'html': me.opts.triggerText
            }).appendTo(wrapEl);
            me.selected = me.$el.find(':selected');
            me.$textEl.html(me.selected.html());
            $.publish('plugin/swSelectboxReplacement/onCreateTemplate', [me, wrapEl]);
            return wrapEl;
        },
        setDisabled: function() {
            var me = this;
            me.$wrapEl.addClass(me.opts.disabledCls);
            me.$el.attr('disabled', 'disabled');
            $.publish('plugin/swSelectboxReplacement/onSetDisabled', [me]);
            return me.$el;
        },
        setEnabled: function() {
            var me = this;
            me.$wrapEl.removeClass(me.opts.disabledCls);
            me.$el.removeAttr('disabled');
            $.publish('plugin/swSelectboxReplacement/onSetEnabled', [me]);
            return me.$el;
        },
        setError: function() {
            var me = this;
            me.$wrapEl.addClass(me.opts.errorCls);
            $.publish('plugin/swSelectboxReplacement/onSetError', [me]);
            return me.$wrapEl;
        },
        removeError: function() {
            var me = this;
            me.$wrapEl.removeClass(me.opts.errorCls);
            $.publish('plugin/swSelectboxReplacement/onRemoveError', [me]);
            return me.$wrapEl;
        },
        val: function() {
            var me = this,
                val;
            val = me.$el.val.apply(me.$el, arguments);
            if (typeof arguments[0] !== 'function') {
                me.setSelectedOnTextElement();
            }
            $.publish('plugin/swSelectboxReplacement/onSetVal', [me]);
            return val;
        },
        show: function() {
            var me = this;
            me.$wrapEl.show.apply(me.$wrapEl, arguments);
            $.publish('plugin/swSelectboxReplacement/onShow', [me]);
            return me.$wrapEl;
        },
        hide: function() {
            var me = this;
            me.$wrapEl.hide.apply(me.$wrapEl, arguments);
            $.publish('plugin/swSelectboxReplacement/onHide', [me]);
            return me.$wrapEl;
        },
        registerEventListeners: function() {
            var me = this;
            me._on(me.$el, 'change', $.proxy(me.onChange, me));
            me._on(me.$el, 'keyup', $.proxy(me.onKeyUp, me));
            me._on(me.$el, 'focus', $.proxy(me.onFocus, me));
            me._on(me.$el, 'blur', $.proxy(me.onBlur, me));
            $.publish('plugin/swSelectboxReplacement/onRegisterEvents', [me]);
            return true;
        },
        setSelectedOnTextElement: function() {
            var me = this;
            me.selected = me.$el.find(':selected');
            me.$textEl.html(me.selected.html());
            $.publish('plugin/swSelectboxReplacement/onSetSelected', [me, me.selected]);
            return me.selected;
        },
        onChange: function() {
            var me = this;
            me.setSelectedOnTextElement();
            $.publish('plugin/swSelectboxReplacement/onChange', [me]);
        },
        onKeyUp: function(event) {
            var me = this;
            if (event.which === 38 || event.which === 40) {
                me.setSelectedOnTextElement();
            }
            $.publish('plugin/swSelectboxReplacement/onKeyUp', [me]);
            return false;
        },
        onFocus: function() {
            var me = this;
            me.$wrapEl.addClass(me.opts.focusCls);
            $.publish('plugin/swSelectboxReplacement/onFocus', [me]);
        },
        onBlur: function() {
            var me = this;
            me.$wrapEl.removeClass(me.opts.focusCls);
            $.publish('plugin/swSelectboxReplacement/onBlur', [me]);
        },
        _setCompatibilityClasses: function() {
            var me = this,
                $el = me.$el,
                $parent = $el.parents('.field--select'),
                classList;
            if (!$parent || !$parent.length) {
                return false;
            }
            classList = $parent.attr('class').split(/\s+/);
            $.each(classList, function() {
                me.$wrapEl.addClass(this);
            });
            return true;
        },
        _formatString: function(str) {
            var i = 1,
                len = arguments.length;
            for (; i < len; i++) {
                str = str.replace('{' + (i - 1) + '}', arguments[i]);
            }
            return str;
        }
    });
})(jQuery, window, document);;
(function($, window) {
    'use strict';
    $.plugin('swCaptcha', {
        init: function() {
            var me = this,
                $el = me.$el,
                url = $el.attr('data-src'),
                $window = $(window);
            if (!url || !url.length) {
                return;
            }
            me._on($window, 'unload', function() {});
            me._on($window, 'pageshow', function(event) {
                if (event.originalEvent.persisted) {
                    me.sendRequest(url);
                }
            });
            me.sendRequest(url);
        },
        sendRequest: function(url) {
            var me = this,
                $el = me.$el;
            $.ajax({
                url: url,
                cache: false,
                success: function(response) {
                    $el.html(response);
                    $.publish('plugin/swCaptcha/onSendRequestSuccess', [me]);
                }
            });
            $.publish('plugin/swCaptcha/onSendRequest', [me]);
        }
    });
})(jQuery, window);;
(function($) {
    'use strict';
    $.plugin('swDropdownMenu', {
        defaults: {
            activeCls: 'js--is--dropdown-active',
            preventDefault: true,
            closeOnBody: true
        },
        init: function() {
            var me = this;
            me._on(me.$el, 'touchstart click', $.proxy(me.onClickMenu, me));
            $.publish('plugin/swDropdownMenu/onRegisterEvents', [me]);
        },
        onClickMenu: function(event) {
            var me = this;
            if ($(event.target).is('.service--link, .compare--list, .compare--entry, .compare--link, .btn--item-delete, .compare--icon-remove')) {
                return;
            }
            if (me.opts.preventDefault) {
                event.preventDefault();
            }
            me.$el.toggleClass(me.opts.activeCls);
            if (me.opts.closeOnBody) {
                event.stopPropagation();
                $('body').on(me.getEventName('touchstart click'), $.proxy(me.onClickBody, me));
            }
            $.publish('plugin/swDropdownMenu/onClickMenu', [me, event]);
        },
        onClickBody: function(event) {
            var me = this;
            if ($(event.target).is('.service--link, .compare--list, .compare--entry, .compare--link, .btn--item-delete, .compare--icon-remove')) {
                return;
            }
            event.preventDefault();
            $('body').off(me.getEventName('touchstart click'));
            me.$el.removeClass(me.opts.activeCls);
            $.publish('plugin/swDropdownMenu/onClickBody', [me, event]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery);;
(function($) {
    'use strict';
    $.loadingIndicator = {
        $loader: null,
        defaults: {
            loaderCls: 'js--loading-indicator',
            iconCls: 'icon--default',
            delay: 0,
            animationSpeed: 500,
            closeOnClick: true,
            openOverlay: true
        },
        options: {},
        open: function(indicatorOptions) {
            var me = this;
            me.options = $.extend({}, me.defaults, indicatorOptions);
            if (me.$loader === null) {
                me.$loader = me._createLoader();
                $('body').append(me.$loader);
            }
            me._updateLoader();
            me._timeout = window.setTimeout(function() {
                if (me.options.openOverlay !== false) {
                    $.overlay.open($.extend({}, {
                        closeOnClick: me.options.closeOnClick,
                        onClose: me.close.bind(me)
                    }));
                }
                me.$loader.fadeIn(me.options.animationSpeed, function() {
                    $.publish('plugin/swLoadingIndicator/onOpenFinished', [me]);
                });
            }, me.options.delay);
            $.publish('plugin/swLoadingIndicator/onOpen', [me]);
        },
        close: function(callback) {
            var me = this,
                opts = me.options;
            callback = callback || function() {};
            if (me.$loader !== null) {
                me.$loader.fadeOut(opts.animationSpeed || me.defaults.animationSpeed, function() {
                    callback.call(me);
                    if (me._timeout) {
                        window.clearTimeout(me._timeout);
                    }
                    if (opts.openOverlay !== false) {
                        $.overlay.close();
                    }
                    $.publish('plugin/swLoadingIndicator/onCloseFinished', [me]);
                });
            }
            $.publish('plugin/swLoadingIndicator/onClose', [me]);
        },
        _updateLoader: function() {
            var me = this,
                opts = me.options,
                $loader = me.$loader,
                $icon = $($loader.children()[0]);
            if (!$loader.hasClass(opts.loaderCls)) {
                $loader.removeClass('').addClass(opts.loaderCls);
            }
            if (!$icon.hasClass(opts.iconCls)) {
                $icon.removeClass('').addClass(opts.iconCls);
            }
        },
        _createLoader: function() {
            var me = this,
                loader = $('<div>', {
                    'class': me.options.loaderCls
                }),
                icon = $('<div>', {
                    'class': me.options.iconCls
                });
            loader.append(icon);
            return loader;
        }
    };
})(jQuery);;
(function($) {
    'use strict';
    var $overlay = $('<div>', {
            'class': 'js--overlay'
        }).appendTo('body'),
        isOpen = false,
        openClass = 'is--open',
        closableClass = 'is--closable',
        events = ['click', 'touchstart', 'MSPointerDown'].join('.overlay') + '.overlay',
        openOverlay = function(options) {
            if (isOpen) {
                updateOverlay(options);
                return;
            }
            isOpen = true;
            $overlay.addClass(openClass);
            if (options && options.closeOnClick !== false) {
                $overlay.addClass(closableClass);
            }
            $overlay.on(events, $.proxy(onOverlayClick, this, options));
        },
        closeOverlay = function() {
            if (!isOpen) {
                return;
            }
            isOpen = false;
            $overlay.removeClass(openClass + ' ' + closableClass);
            $overlay.off(events);
        },
        onOverlayClick = function(options) {
            if (options) {
                if (typeof options.onClick === 'function') {
                    options.onClick.call($overlay);
                }
                if (options.closeOnClick === false) {
                    return;
                }
                if (typeof options.onClose === 'function' && options.onClose.call($overlay) === false) {
                    return;
                }
            }
            closeOverlay();
        },
        updateOverlay = function(options) {
            $overlay.toggleClass(closableClass, options.closeOnClick !== false);
            $overlay.off(events);
            $overlay.on(events, $.proxy(onOverlayClick, this, options));
        };
    $overlay.on('mousewheel DOMMouseScroll', function(event) {
        event.preventDefault();
    });
    $.overlay = {
        open: openOverlay,
        close: closeOverlay,
        isOpen: function() {
            return isOpen;
        },
        getElement: function() {
            return $overlay;
        }
    };
})(jQuery);;
(function($) {
    'use strict';
    $.plugin('swFormPolyfill', {
        defaults: {
            eventType: 'click'
        },
        init: function() {
            var me = this;
            if (!me.isSupportedBrowser()) {
                return false;
            }
            me.applyDataAttributes();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, me.opts.eventType, $.proxy(me.onSubmitForm, this));
            $.publish('plugin/swFormPolyfill/onRegisterEvents', [me]);
        },
        isSupportedBrowser: function() {
            var me = this;
            return me.isIE() || me.isEdge();
        },
        isIE: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return myNav.indexOf('msie') !== -1 || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
        },
        isEdge: function() {
            var myNav = navigator.userAgent.toLowerCase();
            return myNav.indexOf('edge') !== -1;
        },
        onSubmitForm: function() {
            var me = this,
                id = '#' + me.$el.attr('form'),
                $form = $(id);
            if (!$form.length) {
                return false;
            }
            $form.submit();
            $.publish('plugin/swFormPolyfill/onSubmitForm', [me, $form]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery);;
(function($, window) {
    'use strict';
    $.plugin('swPseudoText', {
        defaults: {
            eventType: 'keyup'
        },
        init: function() {
            var me = this,
                selector = $(me.$el.attr('data-selector')),
                val;
            if (!selector.length) {
                throw new Error('Given selector does not match any element on the page.');
            }
            me._on(me.$el, me.opts.eventType, function() {
                val = me.$el.val();
                selector.val(val.length ? val : '');
            });
        }
    });
})(jQuery, window);;
(function($) {
    var emptyObj = {};
    $.plugin('swLastSeenProducts', {
        defaults: {
            productLimit: 20,
            baseUrl: '/',
            shopId: 1,
            currentArticle: emptyObj,
            listSelector: '.last-seen-products--slider',
            containerSelector: '.last-seen-products--container',
            itemCls: 'last-seen-products--item product-slider--item product--box box--slider',
            titleCls: 'last-seen-products-item--title product--title',
            imageCls: 'last-seen-products-item--image product--image',
            noPicture: ''
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$list = me.$el.find(me.opts.listSelector);
            me.$container = me.$list.find(me.opts.containerSelector);
            me.productSlider = me.$list.data('plugin_swProductSlider');
            if (!me.productSlider) {
                return;
            }
            me.storage = StorageManager.getLocalStorage();
            if ($('body').hasClass('is--ctl-detail')) {
                me.collectProduct(me.opts.currentArticle);
                $.subscribe(me.getEventName('plugin/swAjaxVariant/onRequestData'), $.proxy(me.onAjaxVariantChange, me));
            }
            me.createProductList();
        },
        onAjaxVariantChange: function() {
            var me = this;
            me.collectProduct(window.lastSeenProductsConfig.currentArticle);
            me.clearProductList();
            me.createProductList();
        },
        clearProductList: function() {
            var me = this;
            me.$container.children().remove();
        },
        createProductList: function() {
            var me = this,
                opts = me.opts,
                itemKey = 'lastSeenProducts-' + opts.shopId + '-' + opts.baseUrl,
                productsJson = me.storage.getItem(itemKey),
                products = productsJson ? JSON.parse(productsJson) : [],
                len = Math.min(opts.productLimit, products.length);
            if (len > 0) {
                me.$el.removeClass('is--hidden');
            }
            $.each(products, function(i, product) {
                if (product.articleId === opts.currentArticle.articleId) {
                    return;
                }
                me.$container.append(me.createTemplate(product));
            });
            me.productSlider.initSlider();
            $.publish('plugin/swLastSeenProducts/onCreateProductList', [me]);
        },
        createTemplate: function(article) {
            var me = this,
                $template = $('<div>', {
                    'class': me.opts.itemCls,
                    'html': [me.createProductImage(article), me.createProductTitle(article)]
                });
            $.publish('plugin/swLastSeenProducts/onCreateTemplate', [me, $template, article]);
            return $template;
        },
        createProductTitle: function(data) {
            var me = this,
                $title = $('<a>', {
                    'rel': 'nofollow',
                    'class': me.opts.titleCls,
                    'title': data.articleName,
                    'href': data.linkDetailsRewritten,
                    'html': data.articleName
                });
            $.publish('plugin/swLastSeenProducts/onCreateProductTitle', [me, $title, data]);
            return $title;
        },
        createProductImage: function(data) {
            var me = this,
                image = data.images[0],
                element, imageEl, imageMedia, srcSet;
            element = $('<a>', {
                'class': me.opts.imageCls,
                'href': data.linkDetailsRewritten,
                'title': data.articleName
            });
            imageEl = $('<span>', {
                'class': 'image--element'
            }).appendTo(element);
            imageMedia = $('<span>', {
                'class': 'image--media'
            }).appendTo(imageEl);
            if (image) {
                srcSet = image.sourceSet;
            } else {
                srcSet = me.opts.noPicture;
            }
            $('<img>', {
                'srcset': srcSet,
                'alt': data.articleName,
                'title': data.articleName
            }).appendTo(imageMedia);
            $.publish('plugin/swLastSeenProducts/onCreateProductImage', [me, element, data]);
            return element;
        },
        collectProduct: function(newProduct) {
            var me = this,
                opts = me.opts,
                itemKey = 'lastSeenProducts-' + opts.shopId + '-' + opts.baseUrl,
                productsJson = me.storage.getItem(itemKey),
                products = productsJson ? $.parseJSON(productsJson) : [],
                linkDetailsQuery = '',
                len = products.length,
                i = 0,
                url, urlQuery;
            if (!newProduct || $.isEmptyObject(newProduct)) {
                return;
            }
            for (; i < len; i++) {
                if (products[i] && products[i].articleId === newProduct.articleId) {
                    products.splice(i, 1);
                }
            }
            url = newProduct.linkDetailsRewritten;
            urlQuery = me.extractQueryParameters(url);
            delete urlQuery.c;
            if ($.param(urlQuery)) {
                linkDetailsQuery = $.param(urlQuery);
                linkDetailsQuery = '?' + linkDetailsQuery;
            }
            if (url.indexOf('/sCategory') !== -1) {
                newProduct.linkDetailsRewritten = url.replace(/\/?sCategory\/[0-9]+/i, '');
            } else if (url.indexOf('?') !== -1) {
                newProduct.linkDetailsRewritten = url.substring(0, url.indexOf('?')) + linkDetailsQuery;
            }
            products.splice(0, 0, newProduct);
            while (products.length > opts.productLimit + 1) {
                products.pop();
            }
            me.storage.setItem(itemKey, JSON.stringify(products));
            $.publish('plugin/swLastSeenProducts/onCollectProduct', [me, newProduct]);
        },
        extractQueryParameters: function(url) {
            var queryParams = {};
            if (url.indexOf('?') === -1) {
                return {};
            }
            url = url.substring(url.indexOf('?'));
            url = url.substring(1);
            $.each(url.split('&'), function(key, param) {
                param = param.split('=');
                param[0] = decodeURIComponent(param[0]);
                param[1] = decodeURIComponent(param[1]);
                if (param[0].length && param[1].length && !queryParams.hasOwnProperty(param[0])) {
                    queryParams[param[0]] = param[1];
                }
            });
            return queryParams;
        }
    });
}(jQuery));;
(function($, window, Math) {
    'use strict';
    $.lightbox = {
        modal: false,
        open: function(imageURL) {
            var me = this,
                size;
            me.image = new Image();
            me.content = me.createContent(imageURL);
            me.image.onload = function() {
                size = me.getOptimizedSize(me.image.width, me.image.height);
                me.modal = $.modal.open(me.content, {
                    'width': size.width,
                    'height': size.height
                });
                $(window).on('resize.lightbox', function() {
                    me.setSize(me.image.width, me.image.height);
                });
                $.subscribe('plugin/swModal/onClose', function() {
                    $(window).off('resize.lightbox');
                });
            };
            me.image.src = imageURL;
            $.publish('plugin/swLightbox/onOpen', [me]);
        },
        createContent: function(imageURL) {
            var me = this,
                content = $('<div>', {
                    'class': 'lightbox--container',
                    'html': $('<img>', {
                        'src': imageURL,
                        'class': 'lightbox--image'
                    })
                });
            $.publish('plugin/swLightbox/onCreateContent', [me, content, imageURL]);
            return content;
        },
        setSize: function(width, height) {
            var me = this,
                size = me.getOptimizedSize(width, height);
            if (!me.modal) {
                return;
            }
            me.modal.setWidth(size.width);
            me.modal.setHeight(size.height);
            $.publish('plugin/swLightbox/onSetSize', [me, width, height]);
        },
        getOptimizedSize: function(width, height) {
            var me = this,
                aspect = width / height,
                maxWidth = Math.round(window.innerWidth * 0.9),
                maxHeight = Math.round(window.innerHeight * 0.9),
                size;
            if (width > maxWidth) {
                width = maxWidth;
                height = Math.round(width / aspect);
            }
            if (height > maxHeight) {
                height = maxHeight;
                width = Math.round(height * aspect);
            }
            size = {
                'width': width,
                'height': height
            };
            $.publish('plugin/swLightbox/onGetOptimizedSize', [me, size]);
            return size;
        }
    };
})(jQuery, window, Math);;
(function($, Modernizr, location) {
    'use strict';
    $.plugin('swAjaxProductNavigation', {
        defaults: {
            arrowFadeSpeed: 500,
            arrowOffset: 40,
            arrowSlideOffset: 140,
            arrowSlideClass: 'can--slide',
            productBoxSelector: '.product--box',
            productDetailsSelector: '.product--details',
            prevLinkSelector: '.navigation--link.link--prev',
            nextLinkSelector: '.navigation--link.link--next',
            breadcrumbButtonSelector: '.content--breadcrumb .breadcrumb--button',
            imageContainerSelector: '.image--container',
            listingSelectors: ['.listing .product--box .product--image', '.listing .product--box .product--title', '.listing .product--box .product--actions .action--more']
        },
        init: function() {
            var me = this,
                $el = me.$el,
                opts = me.opts,
                isListing = $el.hasClass('is--ctl-listing'),
                isDetail = $el.hasClass('is--ctl-detail'),
                params = me.parseQueryString(location.href);
            if (!(isListing || isDetail)) {
                return;
            }
            me.storage = StorageManager.getStorage('session');
            if (isListing) {
                me.registerListingEventListeners();
                return;
            }
            me.$prevButton = $el.find(opts.prevLinkSelector);
            me.$nextButton = $el.find(opts.nextLinkSelector);
            me.$backButton = $el.find(opts.breadcrumbButtonSelector);
            me.$productDetails = $el.find(opts.productDetailsSelector);
            me.categoryId = ~~(me.$productDetails.attr('data-category-id') || params && params.c);
            me.orderNumber = me.$productDetails.attr('data-main-ordernumber');
            me.productState = me.getProductState();
            if (!me.categoryId) {
                return;
            }
            if (!$.isEmptyObject(me.productState) && me.productState.ordernumber !== me.orderNumber) {
                me.clearProductState();
                me.productState = {};
            }
            me.registerDetailEventListeners();
            me.getProductNavigation();
        },
        parseQueryString: function(url) {
            var params = {},
                urlParts = (url + '').split('?'),
                queryParts, part, key, value, p;
            if (urlParts.length < 2) {
                return params;
            }
            queryParts = urlParts[1].split('&');
            for (p in queryParts) {
                if (!queryParts.hasOwnProperty(p)) {
                    continue;
                }
                part = queryParts[p].split('=');
                key = decodeURIComponent(part[0]);
                value = decodeURIComponent(part[1] || '');
                params[key] = $.isNumeric(value) ? parseFloat(value) : value;
            }
            $.publish('plugin/swAjaxProductNavigation/onParseQueryString', [this, url, params]);
            return params;
        },
        getProductState: function() {
            var me = this,
                state = JSON.parse(me.storage.getItem('lastProductState')) || {};
            $.publish('plugin/swAjaxProductNavigation/onSetProductState', [me, state]);
            return state;
        },
        setProductState: function(params) {
            var me = this;
            me.storage.setItem('lastProductState', JSON.stringify(params));
            $.publish('plugin/swAjaxProductNavigation/onSetProductState', [me, params]);
        },
        clearProductState: function() {
            var me = this;
            me.storage.removeItem('lastProductState');
            $.publish('plugin/swAjaxProductNavigation/onClearProductState', [me]);
        },
        registerListingEventListeners: function() {
            var me = this,
                selectors = me.opts.listingSelectors.join(', ');
            me.$el.on(me.getEventName('click'), selectors, $.proxy(me.onClickProductInListing, me));
            $.publish('plugin/swAjaxProductNavigation/onRegisterEventsListing', [me]);
        },
        onClickProductInListing: function(event) {
            var me = this,
                opts = me.opts,
                $target = $(event.target),
                $parent = $target.parents(opts.productBoxSelector),
                params = me.parseQueryString(location.href);
            me.setProductState($.extend({}, params, {
                'categoryId': ~~($parent.attr('data-category-id')),
                'ordernumber': $parent.attr('data-ordernumber')
            }));
            $.publish('plugin/swAjaxProductNavigation/onClickProductInListing', [me, event]);
        },
        registerDetailEventListeners: function() {
            var me = this;
            StateManager.on('resize', me.checkPossibleSliding, me);
            me._on(me.$prevButton, 'click', $.proxy(me.onArrowClick, me));
            me._on(me.$nextButton, 'click', $.proxy(me.onArrowClick, me));
            $.publish('plugin/swAjaxProductNavigation/onRegisterEventsDetail', [me]);
        },
        onArrowClick: function(event) {
            var me = this,
                $target = $(event.currentTarget);
            if (!$.isEmptyObject(me.productState)) {
                me.productState.ordernumber = $target.attr('data-ordernumber');
                me.setProductState(me.productState);
            }
            $.publish('plugin/swAjaxProductNavigation/onArrowClick', [me, event]);
        },
        checkPossibleSliding: function() {
            var me = this,
                opts = me.opts,
                offset = opts.arrowOffset,
                slideOffset = opts.arrowSlideOffset,
                $prevBtn = me.$prevButton,
                $nextBtn = me.$nextButton,
                remainingSpacePrev, remainingSpaceNext, prevBtnImage, nextBtnImage;
            if (!$nextBtn.length || !$prevBtn.length) {
                return false;
            }
            remainingSpacePrev = $prevBtn.offset().left + offset;
            remainingSpaceNext = $(window).width() - $nextBtn.offset().left - $nextBtn.outerWidth() + offset;
            prevBtnImage = $prevBtn.find(opts.imageContainerSelector).css('background-image');
            nextBtnImage = $nextBtn.find(opts.imageContainerSelector).css('background-image');
            $prevBtn[(prevBtnImage !== 'none' && remainingSpacePrev >= slideOffset) ? 'addClass' : 'removeClass'](opts.arrowSlideClass);
            $nextBtn[(nextBtnImage !== 'none' && remainingSpaceNext >= slideOffset) ? 'addClass' : 'removeClass'](opts.arrowSlideClass);
            $.publish('plugin/swAjaxProductNavigation/onCheckPossibleSliding', [me]);
        },
        getProductNavigation: function() {
            var me = this,
                url = me.$productDetails.attr('data-product-navigation'),
                params = $.extend({}, me.productState, {
                    'ordernumber': me.orderNumber,
                    'categoryId': me.categoryId
                });
            if ($.isEmptyObject(params) || !url || !url.length) {
                return;
            }
            $.ajax({
                'url': url,
                'data': params,
                'method': 'GET',
                'dataType': 'json',
                'success': $.proxy(me.onProductNavigationLoaded, me)
            });
            $.publish('plugin/swAjaxProductNavigation/onGetProductNavigation', [me]);
        },
        onProductNavigationLoaded: function(response) {
            var me = this,
                opts = me.opts,
                $prevBtn = me.$prevButton,
                $nextBtn = me.$nextButton,
                listing = response.currentListing,
                prevProduct = response.previousProduct,
                nextProduct = response.nextProduct,
                animSpeed = opts.arrowFadeSpeed,
                animCss = {
                    opacity: 1
                };
            $.publish('plugin/swAjaxProductNavigation/onProductNavigationLoaded', [me, response]);
            if (listing && listing.href) {
                me.$backButton.attr('href', listing.href);
            }
            if (typeof prevProduct === 'object') {
                $prevBtn.attr('data-ordernumber', prevProduct.orderNumber);
                if (prevProduct.image) {
                    $prevBtn.find(opts.imageContainerSelector).css('background-image', 'url(' + prevProduct.image.thumbnails[0].source + ')');
                }
                $prevBtn.attr('href', prevProduct.href).attr('title', prevProduct.name).css('display', 'inline');
                if (Modernizr.csstransitions) {
                    $prevBtn.transition(animCss, animSpeed);
                } else {
                    $prevBtn.animate(animCss, animSpeed);
                }
            }
            if (typeof nextProduct === 'object') {
                $nextBtn.attr('data-ordernumber', nextProduct.orderNumber);
                if (nextProduct.image) {
                    $nextBtn.find(opts.imageContainerSelector).css('background-image', 'url(' + nextProduct.image.thumbnails[0].source + ')');
                }
                $nextBtn.attr('href', nextProduct.href).attr('title', nextProduct.name).css('display', 'inline');
                if (Modernizr.csstransitions) {
                    $nextBtn.transition(animCss, animSpeed);
                } else {
                    $nextBtn.animate(animCss, animSpeed);
                }
            }
            me.checkPossibleSliding();
            $.publish('plugin/swAjaxProductNavigation/onProductNavigationFinished', [me, response]);
        },
        destroy: function() {
            var me = this,
                selectors = me.opts.listingSelectors.join(', ');
            StateManager.off('resize', me.checkPossibleSliding, me);
            me.$el.off(me.getEventName('click'), selectors);
            me._destroy();
        }
    });
})(jQuery, Modernizr, location);;
(function($) {
    'use strict';
    $.plugin('swNewsletter', {
        init: function() {
            var me = this;
            me.$checkMail = me.$el.find('.newsletter--checkmail');
            me.$addionalForm = me.$el.find('.newsletter--additional-form');
            me._on(me.$checkMail, 'change', $.proxy(me.refreshAction, me));
            $.publish('plugin/swNewsletter/onRegisterEvents', [me]);
            me.$checkMail.trigger('change');
        },
        refreshAction: function(event) {
            var me = this,
                $el = $(event.currentTarget),
                val = $el.val();
            if (val == -1) {
                me.$addionalForm.hide();
            } else {
                me.$addionalForm.show();
            }
            $.publish('plugin/swNewsletter/onRefreshAction', [me]);
        },
        destroy: function() {
            this._destroy();
        }
    });
}(jQuery));;
(function($) {
    'use strict';
    $.plugin('swMenuScroller', {
        defaults: {
            activeItemSelector: '.is--active',
            listSelector: '*[class$="--list"]',
            wrapperClass: 'js--menu-scroller',
            listClass: 'js--menu-scroller--list',
            itemClass: 'js--menu-scroller--item',
            leftArrowClass: 'js--menu-scroller--arrow left--arrow',
            rightArrowClass: 'js--menu-scroller--arrow right--arrow',
            arrowContentClass: 'arrow--content',
            leftArrowContent: '&#58897;',
            rightArrowContent: '&#58895;',
            scrollStep: 'auto',
            animationSpeed: 400,
            arrowOffset: 25
        },
        init: function() {
            var me = this,
                opts = me.opts,
                $activeChild;
            me.applyDataAttributes();
            me.scrollStep = (opts.scrollStep === 'auto') ? me.$el.width() / 2 : parseFloat(opts.scrollStep);
            me.$list = me.$el.find(opts.listSelector);
            me.scrollBarOffset = 0;
            me.initTemplate();
            me.registerEvents();
            me.updateButtons();
            $activeChild = me.$list.children(opts.activeItemSelector);
            if ($activeChild.length) {
                me.jumpToElement($activeChild);
            }
        },
        initTemplate: function() {
            var me = this,
                opts = me.opts,
                $el = me.$el,
                $list = me.$list;
            $el.addClass(opts.wrapperClass);
            $list.addClass(opts.listClass);
            me.updateScrollBarOffset();
            $list.children().addClass(opts.itemClass);
            me.$leftArrow = $('<div>', {
                'html': $('<span>', {
                    'class': opts.arrowContentClass,
                    'html': opts.leftArrowContent
                }),
                'class': opts.leftArrowClass
            }).appendTo($el);
            me.$rightArrow = $('<div>', {
                'html': $('<span>', {
                    'class': opts.arrowContentClass,
                    'html': opts.rightArrowContent
                }),
                'class': opts.rightArrowClass
            }).appendTo($el);
            $.publish('plugin/swMenuScroller/onInitTemplate', [me]);
        },
        updateScrollBarOffset: function() {
            var me = this,
                $list = me.$list,
                offset;
            offset = me.scrollBarOffset = Math.min(Math.abs($list[0].scrollHeight - $list.height()) * -1, me.scrollBarOffset);
            $list.css({
                'bottom': offset,
                'margin-top': offset
            });
            $.publish('plugin/swMenuScroller/onUpdateScrollBarOffset', [me, offset]);
        },
        registerEvents: function() {
            var me = this;
            StateManager.on('resize', me.updateResize, me);
            me._on(me.$leftArrow, 'click touchstart', $.proxy(me.onLeftArrowClick, me));
            me._on(me.$rightArrow, 'click touchstart', $.proxy(me.onRightArrowClick, me));
            me._on(me.$list, 'scroll', $.proxy(me.updateButtons, me));
            $.publish('plugin/swMenuScroller/onRegisterEvents', [me]);
        },
        updateResize: function() {
            var me = this,
                opts = me.opts,
                viewPortWidth = me.$el.width();
            me.updateScrollBarOffset();
            if (opts.scrollStep === 'auto') {
                me.scrollStep = viewPortWidth / 2;
            }
            me.updateButtons();
            $.publish('plugin/swMenuScroller/onUpdateResize', [me]);
        },
        onLeftArrowClick: function(event) {
            event.preventDefault();
            var me = this;
            me.addOffset(me.scrollStep * -1);
            $.publish('plugin/swMenuScroller/onLeftArrowClick', [me]);
        },
        onRightArrowClick: function(event) {
            event.preventDefault();
            var me = this;
            me.addOffset(me.scrollStep);
            $.publish('plugin/swMenuScroller/onRightArrowClick', [me]);
        },
        addOffset: function(offset) {
            this.setOffset(this.$list.scrollLeft() + offset, true);
        },
        setOffset: function(offset, animate) {
            var me = this,
                opts = me.opts,
                $list = me.$list,
                maxWidth = $list.prop('scrollWidth') - me.$el.width(),
                newPos = Math.max(0, Math.min(maxWidth, offset));
            if (animate !== false) {
                $list.stop(true).animate({
                    'scrollLeft': newPos
                }, opts.animationSpeed, $.proxy(me.updateButtons, me));
                $.publish('plugin/swMenuScroller/onSetOffset', [me, offset, animate]);
                return;
            }
            $list.scrollLeft(newPos);
            me.updateButtons();
            $.publish('plugin/swMenuScroller/onSetOffset', [me, offset, animate]);
        },
        updateButtons: function() {
            var me = this,
                $list = me.$list,
                elWidth = me.$el.width(),
                listWidth = $list.prop('scrollWidth'),
                scrollLeft = $list.scrollLeft();
            me.$leftArrow.toggle(scrollLeft > 0);
            me.$rightArrow.toggle(listWidth > elWidth && scrollLeft < (listWidth - elWidth));
            $.publish('plugin/swMenuScroller/onUpdateButtons', [me, me.$leftArrow, me.$rightArrow]);
        },
        jumpToElement: function($el) {
            var me = this,
                $list = me.$list,
                elWidth = me.$el.width(),
                scrollLeft = $list.scrollLeft(),
                leftPos = $el.position().left,
                rightPos = leftPos + $el.outerWidth(true),
                newPos;
            if (leftPos > scrollLeft && rightPos > scrollLeft + elWidth) {
                newPos = rightPos - elWidth + me.opts.arrowOffset;
            } else {
                newPos = Math.min(leftPos - me.$leftArrow.width(), scrollLeft);
            }
            me.setOffset(newPos, false);
            $.publish('plugin/swMenuScroller/onJumpToElement', [me, $el, newPos]);
        },
        destroy: function() {
            var me = this,
                opts = me.opts;
            StateManager.off('resize', me.updateResize, me);
            me.$el.removeClass(opts.wrapperClass);
            me.$list.removeClass(opts.listClass);
            me.$list.css({
                'bottom': '',
                'margin-top': ''
            });
            me.$list.children().removeClass(opts.itemClass);
            me.$leftArrow.remove();
            me.$rightArrow.remove();
            me._destroy();
        }
    });
}(jQuery));;
(function($) {
    'use strict';
    $.plugin('swShippingPayment', {
        defaults: {
            formSelector: '#shippingPaymentForm',
            radioSelector: 'input.auto_submit[type=radio]',
            submitSelector: 'input[type=submit]'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me.$el.on('change', me.opts.radioSelector, $.proxy(me.onInputChanged, me));
            $.publish('plugin/swShippingPayment/onRegisterEvents', [me]);
        },
        onInputChanged: function() {
            var me = this,
                form = me.$el.find(me.opts.formSelector),
                url = form.attr('action'),
                data = form.serialize() + '&isXHR=1';
            $.publish('plugin/swShippingPayment/onInputChangedBefore', [me]);
            $.loadingIndicator.open();
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: function(res) {
                    me.$el.empty().html(res);
                    me.$el.find('input[type="submit"][form], button[form]').swFormPolyfill();
                    me.$el.find('select:not([data-no-fancy-select="true"])').swSelectboxReplacement();
                    $.loadingIndicator.close();
                    window.picturefill();
                    $.publish('plugin/swShippingPayment/onInputChanged', [me]);
                }
            });
        },
        destroy: function() {
            var me = this;
            me.$el.off('change', me.opts.radioSelector);
            me._destroy();
        }
    });
})(jQuery);;
(function($, window) {
    'use strict';
    $.plugin('swAddArticle', {
        defaults: {
            'eventName': 'click',
            'addArticleUrl': window.controller['ajax_add_article'],
            'sliderPerPageDefault': 3,
            'showModal': true,
            'productSliderSelector': '.js--modal .product-slider'
        },
        init: function() {
            var me = this,
                opts = me.opts;
            me.applyDataAttributes();
            opts.showModal = !!opts.showModal && opts.showModal !== 'false';
            me._on(me.$el, opts.eventName, $.proxy(me.sendSerializedForm, me));
            $('body').delegate('*[data-modal-close="true"]', 'click.modal', $.proxy(me.closeModal, me));
            StateManager.addPlugin(opts.productSliderSelector, 'swProductSlider');
        },
        sendSerializedForm: function(event) {
            event.preventDefault();
            var me = this,
                opts = me.opts,
                $el = me.$el,
                ajaxData = $el.serialize();
            ajaxData += '&isXHR=1';
            if (opts.showModal) {
                $.overlay.open({
                    'closeOnClick': false
                });
                $.loadingIndicator.open({
                    'openOverlay': false
                });
            }
            $.publish('plugin/swAddArticle/onBeforeAddArticle', [me, ajaxData]);
            $.ajax({
                'data': ajaxData,
                'dataType': 'jsonp',
                'url': opts.addArticleUrl,
                'success': function(result) {
                    $.publish('plugin/swAddArticle/onAddArticle', [me, result]);
                    if (!opts.showModal) {
                        return;
                    }
                    $.loadingIndicator.close(function() {
                        $.modal.open(result, {
                            width: 750,
                            sizing: 'content',
                            onClose: me.onCloseModal.bind(me)
                        });
                        picturefill();
                        StateManager.updatePlugin(opts.productSliderSelector, 'swProductSlider');
                        $.publish('plugin/swAddArticle/onAddArticleOpenModal', [me, result]);
                    });
                }
            });
        },
        closeModal: function(event) {
            event.preventDefault();
            $.modal.close();
            $.publish('plugin/swAddArticle/onCloseModal', [this]);
        },
        onCloseModal: function() {
            var me = this;
            StateManager.destroyPlugin(me.opts.productSliderSelector, 'swProductSlider');
            $.publish('plugin/swAddArticle/onCloseModal', [me]);
        }
    });
})(jQuery, window);;
(function($, window, document) {
    'use strict';
    var $document = $(document);

    function round(value, base, method) {
        var rounding = method || 'round',
            b = base || 1,
            factor = 1 / b;
        return Math[rounding](value * factor) / factor;
    }

    function roundPretty(value, method) {
        var rounding = method || 'round',
            digits = countDigits(value),
            step = (digits > 1) ? 2 : 1,
            base = 5 * Math.pow(10, digits - step);
        return round(value, base, rounding);
    }

    function countDigits(value) {
        return ~~(Math.log(Math.floor(value)) / Math.LN10 + 1);
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function int(value) {
        return parseFloat(value);
    }
    $.plugin('swRangeSlider', {
        defaults: {
            sliderContainerCls: 'range-slider--container',
            rangeBarCls: 'range-slider--range-bar',
            handleCls: 'range-slider--handle',
            handleMinCls: 'is--min',
            handleMaxCls: 'is--max',
            activeDraggingCls: 'is--dragging',
            minInputElSelector: '*[data-range-input="min"]',
            maxInputElSelector: '*[data-range-input="max"]',
            minLabelElSelector: '*[data-range-label="min"]',
            maxLabelElSelector: '*[data-range-label="max"]',
            labelFormat: '',
            roundPretty: false,
            startMin: 20,
            startMax: 80,
            rangeMin: 0,
            rangeMax: 100,
            stepCount: 100,
            stepCurve: 'linear'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$minInputEl = me.$el.find(me.opts.minInputElSelector);
            me.$maxInputEl = me.$el.find(me.opts.maxInputElSelector);
            me.$minLabel = me.$el.find(me.opts.minLabelElSelector);
            me.$maxLabel = me.$el.find(me.opts.maxLabelElSelector);
            me.dragState = false;
            me.dragType = 'min';
            me.createSliderTemplate();
            me.validateStepCurve();
            me.computeBaseValues();
            me.registerEvents();
        },
        validateStepCurve: function() {
            var me = this,
                validCurves = ['linear', 'log'];
            me.opts.stepCurve = me.opts.stepCurve.toString().toLowerCase();
            if (validCurves.indexOf(me.opts.stepCurve) < 0) {
                me.opts.stepCurve = 'linear';
            }
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$minHandle, 'mousedown touchstart', $.proxy(me.onStartDrag, me, 'min', me.$minHandle));
            me._on(me.$maxHandle, 'mousedown touchstart', $.proxy(me.onStartDrag, me, 'max', me.$maxHandle));
            me._on($document, 'mouseup touchend', $.proxy(me.onEndDrag, me));
            me._on($document, 'mousemove touchmove', $.proxy(me.slide, me));
            $.publish('plugin/swRangeSlider/onRegisterEvents', [me]);
        },
        createSliderTemplate: function() {
            var me = this;
            me.$rangeBar = me.createRangeBar();
            me.$container = me.createRangeContainer();
            me.$minHandle = me.createHandle('min');
            me.$maxHandle = me.createHandle('max');
            me.$minHandle.appendTo(me.$rangeBar);
            me.$maxHandle.appendTo(me.$rangeBar);
            me.$rangeBar.appendTo(me.$container);
            me.$container.prependTo(me.$el);
        },
        createRangeContainer: function() {
            var me = this,
                $container = $('<div>', {
                    'class': me.opts.sliderContainerCls
                });
            $.publish('plugin/swRangeSlider/onCreateRangeContainer', [me, $container]);
            return $container;
        },
        createRangeBar: function() {
            var me = this,
                $bar = $('<div>', {
                    'class': me.opts.rangeBarCls
                });
            $.publish('plugin/swRangeSlider/onCreateRangeBar', [me, $bar]);
            return $bar;
        },
        createHandle: function(type) {
            var me = this,
                typeClass = (type == 'max') ? me.opts.handleMaxCls : me.opts.handleMinCls,
                $handle = $('<div>', {
                    'class': me.opts.handleCls + ' ' + typeClass
                });
            $.publish('plugin/swRangeSlider/onCreateHandle', [me, $handle]);
            return $handle;
        },
        computeBaseValues: function() {
            var me = this;
            me.minRange = int(me.opts.rangeMin);
            me.maxRange = int(me.opts.rangeMax);
            if (me.opts.roundPretty) {
                me.minRange = roundPretty(me.minRange, 'floor');
                me.maxRange = roundPretty(me.maxRange, 'ceil');
            }
            me.range = me.maxRange - me.minRange;
            me.stepSize = me.range / int(me.opts.stepCount);
            me.stepWidth = 100 / int(me.opts.stepCount);
            me.minValue = (me.opts.startMin === me.opts.rangeMin || me.opts.startMin <= me.minRange) ? me.minRange : int(me.opts.startMin);
            me.maxValue = (me.opts.startMax === me.opts.rangeMax || me.opts.startMax >= me.maxRange) ? me.maxRange : int(me.opts.startMax);
            if (me.maxValue == me.minValue || me.maxValue == 0) {
                me.maxValue = me.maxRange;
            }
            $.publish('plugin/swRangeSlider/onComputeBaseValues', [me, me.minValue, me.maxValue]);
            me.setRangeBarPosition(me.minValue, me.maxValue);
            me.updateLayout();
        },
        setRangeBarPosition: function(minValue, maxValue) {
            var me = this,
                min = minValue || me.minValue,
                max = maxValue || me.maxValue,
                left = me.getPositionByValue(min),
                right = me.getPositionByValue(max),
                width = right - left;
            me.$rangeBar.css({
                'left': left + '%',
                'width': width + '%'
            });
            $.publish('plugin/swRangeSlider/onSetRangeBarPosition', [me, me.$rangeBar, minValue, maxValue]);
        },
        setMin: function(min, updateInput) {
            var me = this,
                update = updateInput || false;
            min = (min === me.opts.rangeMin || min <= me.minRange) ? me.minRange : int(min);
            me.minValue = min;
            if (update) {
                me.updateMinInput(min);
            }
            me.setRangeBarPosition();
            me.updateLayout();
            $.publish('plugin/swRangeSlider/onSetMin', [me, min, updateInput]);
        },
        setMax: function(max, updateInput) {
            var me = this,
                update = updateInput || false;
            max = (max === me.opts.rangeMax || max >= me.maxRange) ? me.maxRange : int(max);
            me.maxValue = max;
            if (update) {
                me.updateMaxInput(max);
            }
            me.setRangeBarPosition();
            me.updateLayout();
            $.publish('plugin/swRangeSlider/onSetMax', [me, max, updateInput]);
        },
        reset: function(param) {
            var me = this;
            if (param == 'max') {
                me.maxValue = me.maxRange;
                me.$maxInputEl.attr('disabled', 'disabled').val(me.maxRange).trigger('change');
            } else {
                me.minValue = me.minRange;
                me.$minInputEl.attr('disabled', 'disabled').val(me.minRange).trigger('change');
            }
            me.setRangeBarPosition();
            me.updateLayout();
            $.publish('plugin/swRangeSlider/onReset', [me, param]);
        },
        onStartDrag: function(type, $handle) {
            var me = this;
            $handle.addClass(me.opts.activeDraggingCls);
            me.dragState = true;
            me.dragType = type;
            $.publish('plugin/swRangeSlider/onStartDrag', [me, type, $handle]);
        },
        onEndDrag: function() {
            var me = this;
            if (!me.dragState) {
                return;
            }
            me.dragState = false;
            me.updateLayout();
            me.$minHandle.removeClass(me.opts.activeDraggingCls);
            me.$maxHandle.removeClass(me.opts.activeDraggingCls);
            if (me.dragType == 'max') {
                me.updateMaxInput(me.maxValue);
            } else {
                me.updateMinInput(me.minValue);
            }
            $(me).trigger('rangeChange', me);
            $.publish('plugin/swRangeSlider/onEndDrag', [me, me.dragType]);
        },
        slide: function(event) {
            var me = this;
            if (!me.dragState) {
                return;
            }
            var pageX = (event.originalEvent.touches) ? event.originalEvent.touches[0].pageX : event.pageX,
                offset = me.$container.offset(),
                width = me.$container.innerWidth(),
                mouseX = pageX - offset.left,
                xPercent = clamp(round((100 / width * mouseX), me.stepWidth, 'round'), 0, 100),
                value = me.getValueByPosition(xPercent);
            event.preventDefault();
            if (me.dragType == 'max') {
                var minValue = me.getValueByPosition(me.getPositionByValue(me.minValue) + me.stepWidth);
                me.setMax(clamp(value, minValue, me.maxRange));
            } else {
                var maxValue = me.getValueByPosition(me.getPositionByValue(me.maxValue) - me.stepWidth);
                me.setMin(clamp(value, me.minRange, maxValue));
            }
            $.publish('plugin/swRangeSlider/onSlide', [me, event, xPercent, value]);
        },
        updateMinInput: function(value) {
            var me = this;
            if (me.$minInputEl.length) {
                me.$minInputEl.val(value.toFixed(2)).removeAttr('disabled').trigger('change');
                $.publish('plugin/swRangeSlider/onUpdateMinInput', [me, me.$minInputEl, value]);
            }
        },
        updateMaxInput: function(value) {
            var me = this;
            if (me.$maxInputEl.length) {
                me.$maxInputEl.val(value.toFixed(2)).removeAttr('disabled').trigger('change');
                $.publish('plugin/swRangeSlider/onUpdateMaxInput', [me, me.$maxInputEl, value]);
            }
        },
        updateMinLabel: function(value) {
            var me = this;
            if (me.$minLabel.length) {
                me.$minLabel.html(me.formatValue(value));
                $.publish('plugin/swRangeSlider/onUpdateMinLabel', [me, me.$minLabel, value]);
            }
        },
        updateMaxLabel: function(value) {
            var me = this;
            if (me.$maxLabel.length) {
                me.$maxLabel.html(me.formatValue(value));
                $.publish('plugin/swRangeSlider/onUpdateMaxLabel', [me, me.$maxLabel, value]);
            }
        },
        updateLayout: function(minValue, maxValue) {
            var me = this,
                min = minValue || me.minValue,
                max = maxValue || me.maxValue;
            me.updateMinLabel(min);
            me.updateMaxLabel(max);
            $.publish('plugin/swRangeSlider/onUpdateLayout', [me, minValue, maxValue]);
        },
        roundValue: function(value) {
            var me = this;
            if (value < 10) {
                value = me.roundTo(value, 0.10);
            } else if (value < 100) {
                value = me.roundTo(value, 1);
            } else {
                value = me.roundTo(value, 5);
            }
            return value;
        },
        formatValue: function(value) {
            var me = this;
            $.publish('plugin/swRangeSlider/onFormatValueBefore', [me, value]);
            if (value != me.minRange && value != me.maxRange) {
                value = me.roundValue(value);
            }
            if (!me.opts.labelFormat.length) {
                return value.toFixed(2);
            }
            value = Math.round(value * 100) / 100;
            value = value.toFixed(2);
            if (me.opts.labelFormat.indexOf('0.00') >= 0) {
                value = me.opts.labelFormat.replace('0.00', value);
            } else {
                value = value.replace('.', ',');
                value = me.opts.labelFormat.replace('0,00', value);
            }
            $.publish('plugin/swRangeSlider/onFormatValue', [me, value]);
            return value;
        },
        roundTo: function(value, num) {
            var resto = value % num;
            if (resto <= (num / 2)) {
                return value - resto;
            } else {
                return value + num - resto;
            }
        },
        getPositionByValue: function(value) {
            var me = this;
            if (me.opts.stepCurve == 'log') {
                return me._getPositionLog(value);
            }
            return me._getPositionLinear(value);
        },
        _getPositionLog: function(value) {
            var me = this,
                minp = 0,
                maxp = me.opts.stepCount,
                minv = Math.log(me.opts.rangeMin),
                maxv = Math.log(me.opts.rangeMax),
                scale = (maxv - minv) / (maxp - minp),
                pos = minp + (Math.log(value) - minv) / scale;
            pos = Math.round(pos * me.stepWidth);
            return pos > 0 && pos || 0;
        },
        _getPositionLinear: function(value) {
            var me = this;
            return 100 / me.range * (value - me.minRange);
        },
        getValueByPosition: function(position) {
            var me = this;
            if (me.opts.stepCurve == 'log') {
                return me._getValueLog(position);
            }
            return me._getValueLinear(position);
        },
        _getValueLinear: function(position) {
            var me = this;
            return (me.range / 100 * position) + me.minRange;
        },
        _getValueLog: function(position) {
            var me = this;
            if (position === 0) {
                return me.minRange;
            } else if (position === 100) {
                return me.maxRange;
            }
            var minp = 0,
                maxp = me.opts.stepCount,
                minv = Math.log(me.opts.rangeMin),
                maxv = Math.log(me.opts.rangeMax),
                scale = (maxv - minv) / (maxp - minp);
            position = position / me.stepWidth;
            return Math.exp(minv + scale * (position - minp));
        },
        getStepWidth: function(value) {
            var me = this;
            if (me.opts.stepCurve == 'log') {
                return value;
            }
            return me.stepWidth;
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery, window, document);;
(function($, window, document, undefined) {
    'use strict';
    var specialComponents = {
        'range': {
            compOpts: {
                rangeSliderSelector: '*[data-range-slider="true"]'
            },
            initComponent: function() {
                var me = this;
                me.$rangeSliderEl = me.$el.find(me.opts.rangeSliderSelector);
                me.$rangeInputs = me.$rangeSliderEl.find('input');
                me.rangeSlider = me.$rangeSliderEl.data('plugin_swRangeSlider');
                me.registerComponentEvents();
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$rangeInputs, 'change', $.proxy(me.onChange, me));
            }
        },
        'rating': {
            compOpts: {
                starInputSelector: '.rating-star--input'
            },
            initComponent: function() {
                var me = this;
                me.$starInputs = me.$el.find(me.opts.starInputSelector);
                me.registerComponentEvents();
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$starInputs, 'change', function(event) {
                    var $el = $(event.currentTarget);
                    if ($el.is(':checked')) {
                        me.onChange(event);
                    }
                });
            }
        },
        'radio': {
            compOpts: {
                radioInputSelector: 'input[type="radio"]'
            },
            initComponent: function() {
                var me = this;
                me.$radioInputs = me.$el.find(me.opts.radioInputSelector);
                me.registerComponentEvents();
            },
            registerComponentEvents: function() {
                var me = this;
                me._on(me.$radioInputs, 'change', function(event) {
                    me.onChange(event);
                });
            }
        }
    };
    $.plugin('swFilterComponent', {
        defaults: {
            type: 'value',
            collapseCls: 'is--collapsed',
            titleSelector: '.filter-panel--title',
            checkBoxSelector: 'input[type="checkbox"]'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.type = me.$el.attr('data-filter-type') || me.opts.type;
            me.$title = me.$el.find(me.opts.titleSelector);
            me.$siblings = me.$el.siblings('*[data-filter-type]');
            if (specialComponents[me.type] !== undefined) {
                $.extend(me, specialComponents[me.type]);
                $.extend(me.opts, me.compOpts);
            }
            me.initComponent();
            me.registerEvents();
        },
        initComponent: function() {
            var me = this;
            me.$inputs = me.$el.find(me.opts.checkBoxSelector);
            me.registerComponentEvents();
            $.publish('plugin/swFilterComponent/onInitComponent', [me]);
        },
        registerEvents: function() {
            var me = this;
            if (me.type != 'value') {
                me._on(me.$title, 'click', $.proxy(me.toggleCollapse, me, true));
            }
            $.publish('plugin/swFilterComponent/onRegisterEvents', [me]);
        },
        registerComponentEvents: function() {
            var me = this;
            me._on(me.$inputs, 'change', $.proxy(me.onChange, me));
            $.publish('plugin/swFilterComponent/onRegisterComponentEvents', [me]);
        },
        onChange: function(event) {
            var me = this,
                $el = $(event.currentTarget);
            me.$el.trigger('onChange', [me, $el]);
            $.publish('plugin/swFilterComponent/onChange', [me, event]);
        },
        getType: function() {
            return this.type;
        },
        open: function(closeSiblings) {
            var me = this;
            if (closeSiblings) {
                me.$siblings.removeClass(me.opts.collapseCls);
            }
            me.$el.addClass(me.opts.collapseCls);
            $.publish('plugin/swFilterComponent/onOpen', [me]);
        },
        close: function() {
            var me = this;
            me.$el.removeClass(me.opts.collapseCls);
            $.publish('plugin/swFilterComponent/onClose', [me]);
        },
        toggleCollapse: function() {
            var me = this,
                shouldOpen = !me.$el.hasClass(me.opts.collapseCls);
            if (shouldOpen) {
                me.open(true);
            } else {
                me.close();
            }
            $.publish('plugin/swFilterComponent/onToggleCollapse', [me, shouldOpen]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery, window, document, undefined);;
(function($, window, StateManager, undefined) {
    'use strict';
    var $body = $('body');
    $.plugin('swListingActions', {
        defaults: {
            filterFormSelector: '*[data-filter-form="true"]',
            filterComponentSelector: '*[data-filter-type]',
            filterTriggerSelector: '*[data-filter-trigger="true"]',
            filterTriggerIconSelector: '.action--collapse-icon',
            filterContainerSelector: '.action--filter-options',
            actionFormSelector: '*[data-action-form="true"]',
            actionLinkSelector: '*[data-action-link="true"]',
            activeFilterContSelector: '.filter--active-container',
            applyFilterBtnSelector: '.filter--btn-apply',
            activeFilterCls: 'filter--active',
            activeFilterIconCls: 'filter--active-icon',
            collapsedCls: 'is--collapsed',
            hasActiveFilterCls: 'is--active-filter',
            activeCls: 'is--active',
            disabledCls: 'is--disabled',
            filterCountSelector: '.filter--count',
            loadingClass: 'is--loading',
            propertyPrefixChar: '__',
            bufferTime: 850,
            animationSpeed: 400
        },
        init: function() {
            var me = this,
                filterCount;
            me.applyDataAttributes();
            me.$filterForm = $(me.opts.filterFormSelector);
            me.$filterComponents = me.$el.find(me.opts.filterComponentSelector);
            me.$filterTrigger = me.$el.find(me.opts.filterTriggerSelector);
            me.$filterTriggerIcon = me.$filterTrigger.find(me.opts.filterTriggerIconSelector);
            me.$filterCont = me.$el.find(me.opts.filterContainerSelector);
            me.$actionForms = $(me.opts.actionFormSelector);
            me.$actionLinks = $(me.opts.actionLinkSelector);
            me.$activeFilterCont = me.$el.find(me.opts.activeFilterContSelector);
            me.$applyFilterBtn = me.$el.find(me.opts.applyFilterBtnSelector);
            me.resultCountURL = me.$filterForm.attr('data-count-ctrl');
            me.controllerURL = window.location.href.split('?')[0];
            me.resetLabel = me.$activeFilterCont.attr('data-reset-label');
            me.propertyFieldNames = [];
            me.activeFilterElements = {};
            me.categoryParams = {};
            me.urlParams = '';
            me.bufferTimeout = 0;
            me.getPropertyFieldNames();
            me.setCategoryParamsFromTopLocation();
            me.createActiveFiltersFromCategoryParams();
            me.createUrlParams();
            filterCount = Object.keys(me.activeFilterElements).length;
            me.updateFilterTriggerButton(filterCount > 1 ? filterCount - 1 : filterCount);
            me.initStateHandling();
            me.registerEvents();
        },
        initStateHandling: function() {
            var me = this,
                enterFn = $.proxy(me.onEnterMobile, me),
                exitFn = $.proxy(me.onExitMobile, me);
            StateManager.registerListener([{
                state: 'xs',
                enter: enterFn,
                exit: exitFn
            }, {
                state: 's',
                enter: enterFn,
                exit: exitFn
            }]);
            $.publish('plugin/swListingActions/onInitStateHandling', [me]);
        },
        onEnterMobile: function() {
            var me = this,
                opts = me.opts;
            me.$filterForm.removeAttr('style');
            me.$activeFilterCont.removeAttr('style').removeClass(opts.disabledCls);
            me.$filterCont.removeClass(opts.collapsedCls);
            me.$filterTrigger.removeClass(opts.activeCls);
            $.publish('plugin/swListingActions/onEnterMobile', [me]);
        },
        onExitMobile: function() {
            var me = this;
            if (StateManager.isCurrentState(['xs', 's'])) {
                return;
            }
            if (Object.keys(me.activeFilterElements).length) {
                me.$activeFilterCont.addClass(me.opts.disabledCls);
            }
            $.publish('plugin/swListingActions/onExitMobile', [me]);
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$filterForm, 'submit', $.proxy(me.onFilterSubmit, me));
            me._on(me.$actionForms, 'submit', $.proxy(me.onActionSubmit, me));
            me._on(me.$actionLinks, 'click', $.proxy(me.onActionLink, me));
            me._on(me.$filterComponents, 'onChange', $.proxy(me.onComponentChange, me));
            me._on(me.$filterTrigger, 'click', $.proxy(me.onFilterTriggerClick, me));
            me._on($body, 'click', $.proxy(me.onBodyClick, me));
            me.$el.on(me.getEventName('click'), '.' + me.opts.activeFilterCls, $.proxy(me.onActiveFilterClick, me));
            $.publish('plugin/swListingActions/onRegisterEvents', [me]);
        },
        onFilterSubmit: function(event) {
            event.preventDefault();
            var me = this,
                formData = me.$filterForm.serializeArray(),
                categoryParams = me.setCategoryParamsFromData(formData);
            me.applyCategoryParams(categoryParams);
            $.publish('plugin/swListingActions/onFilterSubmit', [me, event]);
        },
        onActionSubmit: function(event) {
            event.preventDefault();
            var me = this,
                $form = $(event.currentTarget),
                formData = $form.serializeArray(),
                categoryParams = me.setCategoryParamsFromData(formData, true);
            me.applyCategoryParams(categoryParams);
            $.publish('plugin/swListingActions/onActionSubmit', [me, event]);
        },
        onActionLink: function(event) {
            event.preventDefault();
            var me = this,
                $link = $(event.currentTarget),
                linkParams = $link.attr('href').split('?')[1];
            me.applyCategoryParams(me.setCategoryParamsFromUrlParams(linkParams));
            $.publish('plugin/swListingActions/onActionLink', [me, event]);
        },
        onFilterTriggerClick: function(event) {
            event.preventDefault();
            if (StateManager.isCurrentState(['xs', 's'])) {
                return;
            }
            var me = this;
            if (me.$filterCont.hasClass(me.opts.collapsedCls)) {
                me.closeFilterPanel();
            } else {
                me.openFilterPanel();
            }
            $.publish('plugin/swListingActions/onFilterTriggerClick', [me, event]);
        },
        onBodyClick: function(event) {
            var me = this,
                $target = $(event.target);
            if (!$target.is(me.opts.filterComponentSelector + ', ' + me.opts.filterComponentSelector + ' *')) {
                $.each(me.$filterComponents, function(index, item) {
                    $(item).data('plugin_swFilterComponent').close();
                });
            }
            $.publish('plugin/swListingActions/onBodyClick', [me, event]);
        },
        onComponentChange: function(event) {
            var me = this,
                formData = me.$filterForm.serializeArray(),
                categoryParams = me.setCategoryParamsFromData(formData),
                urlParams = me.createUrlParams(categoryParams);
            me.createActiveFiltersFromCategoryParams(categoryParams);
            me.$applyFilterBtn.addClass(me.opts.loadingClass);
            me.buffer($.proxy(me.getFilterResult, me, urlParams), me.opts.bufferTime);
            $.publish('plugin/swListingActions/onComponentChange', [me, event]);
        },
        onActiveFilterClick: function(event) {
            var me = this,
                $activeFilter = $(event.currentTarget),
                param = $activeFilter.attr('data-filter-param'),
                isMobile = StateManager.isCurrentState(['xs', 's']);
            if (param == 'reset') {
                $.each(me.activeFilterElements, function(key) {
                    me.removeActiveFilter(key);
                    me.resetFilterProperty(key);
                });
                if (!isMobile && !me.$filterCont.hasClass(me.opts.collapsedCls)) {
                    me.applyCategoryParams();
                }
            } else if (isMobile || !me.$activeFilterCont.hasClass(me.opts.disabledCls)) {
                me.removeActiveFilter(param);
                me.resetFilterProperty(param);
            }
            $.publish('plugin/swListingActions/onActiveFilterClick', [me, event]);
        },
        getPropertyFieldNames: function() {
            var me = this;
            $.each(me.$filterComponents, function(index, item) {
                var $comp = $(item),
                    type = $comp.attr('data-filter-type'),
                    fieldName = $comp.attr('data-field-name');
                if ((type == 'value-list' || type == 'value-tree' || type == 'media') && me.propertyFieldNames.indexOf(fieldName) == -1) {
                    me.propertyFieldNames.push(fieldName);
                }
            });
            $.publish('plugin/swListingActions/onGetPropertyFieldNames', [me, me.propertyFieldNames]);
            return me.propertyFieldNames;
        },
        setCategoryParamsFromData: function(formData, extend) {
            var me = this,
                tempParams = {};
            $.each(formData, function(index, item) {
                if (item['value']) tempParams[item['name']] = item['value'];
            });
            if (extend) {
                return $.extend(me.categoryParams, tempParams);
            }
            me.categoryParams = tempParams;
            $.publish('plugin/swListingActions/onSetCategoryParamsFromData', [me, tempParams]);
            return tempParams;
        },
        setCategoryParamsFromTopLocation: function() {
            var me = this,
                urlParams = window.location.search.substr(1),
                categoryParams = me.setCategoryParamsFromUrlParams(urlParams);
            $.publish('plugin/swListingActions/onSetCategoryParamsFromData', [me, categoryParams]);
            return categoryParams;
        },
        setCategoryParamsFromUrlParams: function(urlParamString) {
            var me = this,
                categoryParams, params;
            if (urlParamString.length <= 0) {
                categoryParams = {};
                $.publish('plugin/swListingActions/onSetCategoryParamsFromUrlParams', [me, categoryParams]);
                return categoryParams;
            }
            categoryParams = me.categoryParams;
            params = urlParamString.split('&');
            $.each(params, function(index, item) {
                var param = item.split('=');
                param = $.map(param, function(val) {
                    val = val.replace(/\+/g, '%20');
                    return decodeURIComponent(val);
                });
                if (param[1] == 'reset') {
                    delete categoryParams[param[0]];
                } else if (me.propertyFieldNames.indexOf(param[0]) != -1) {
                    var properties = param[1].split('|');
                    $.each(properties, function(index, property) {
                        categoryParams[me.opts.propertyPrefixChar + param[0] + me.opts.propertyPrefixChar + property] = property;
                    });
                } else {
                    categoryParams[param[0]] = param[1];
                }
            });
            $.publish('plugin/swListingActions/onSetCategoryParamsFromUrlParams', [me, categoryParams]);
            return categoryParams;
        },
        applyCategoryParams: function(categoryParams) {
            var me = this,
                params = categoryParams || me.categoryParams,
                urlParams = me.createUrlParams(params);
            me.applyUrlParams(urlParams);
            $.publish('plugin/swListingActions/onApplyCategoryParams', [me, categoryParams]);
        },
        createUrlParams: function(categoryParams) {
            var me = this,
                catParams = categoryParams || me.categoryParams,
                params = me.cleanParams(catParams),
                filterList = [];
            $.each(params, function(key, value) {
                filterList.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
            });
            me.urlParams = '?' + filterList.join('&');
            $.publish('plugin/swListingActions/onCreateUrlParams', [me, me.urlParams]);
            return me.urlParams;
        },
        cleanParams: function(params) {
            var me = this,
                propertyParams = {};
            $.each(params, function(key, value) {
                if (key.substr(0, 2) == me.opts.propertyPrefixChar) {
                    var propertyKey = key.split(me.opts.propertyPrefixChar)[1];
                    if (propertyParams[propertyKey] !== undefined) {
                        propertyParams[propertyKey] += '|' + value;
                    } else {
                        propertyParams[propertyKey] = value;
                    }
                } else {
                    propertyParams[key] = value;
                }
            });
            return propertyParams;
        },
        applyUrlParams: function(urlParams) {
            var me = this,
                params = urlParams || me.urlParams;
            window.location.href = me.getListingUrl(params, false);
            $.publish('plugin/swListingActions/onApplyUrlParams', [me, urlParams]);
        },
        getListingUrl: function(urlParams, encode) {
            var me = this,
                params = urlParams || me.urlParams,
                url;
            if (encode) {
                url = encodeURI(me.controllerURL + params);
            } else {
                url = me.controllerURL + params;
            }
            $.publish('plugin/swListingActions/onGetListingUrl', [me, url, urlParams, encode]);
            return url;
        },
        buffer: function(func, bufferTime) {
            var me = this;
            if (me.bufferTimeout) {
                clearTimeout(me.bufferTimeout);
            }
            me.bufferTimeout = setTimeout(func, bufferTime);
            $.publish('plugin/swListingActions/onBuffer', [me, me.bufferTimeout, func, bufferTime]);
        },
        resetBuffer: function() {
            var me = this;
            me.bufferTimeout = 0;
            $.publish('plugin/swListingActions/onResetBuffer', [me, me.bufferTimeout]);
        },
        getFilterResult: function(urlParams) {
            var me = this,
                params = urlParams || me.urlParams;
            me.resetBuffer();
            $.ajax({
                type: 'get',
                url: me.resultCountURL + params,
                success: function(response) {
                    me.$applyFilterBtn.removeClass(me.opts.loadingClass);
                    me.updateFilterButton(response.totalCount);
                    $.publish('plugin/swListingActions/onGetFilterResultFinished', [me, response, params]);
                }
            });
            $.publish('plugin/swListingActions/onGetFilterResult', [me, params]);
        },
        updateFilterButton: function(count) {
            var me = this;
            me.$applyFilterBtn.find(me.opts.filterCountSelector).html(count);
            if (count <= 0) {
                me.$applyFilterBtn.attr('disabled', 'disabled');
            } else {
                me.$applyFilterBtn.removeAttr('disabled');
            }
            $.publish('plugin/swListingActions/onUpdateFilterButton', [me, count]);
        },
        updateFilterTriggerButton: function(activeFilterCount) {
            var me = this;
            me.$filterTriggerIcon.html(activeFilterCount || '');
            $.publish('plugin/swListingActions/onUpdateFilterTriggerButton', [me, activeFilterCount]);
        },
        createActiveFiltersFromCategoryParams: function(categoryParams) {
            var me = this,
                count = 0,
                params = categoryParams || me.categoryParams;
            $.each(me.activeFilterElements, function(key) {
                if (params[key] === undefined || params[key] == 0) {
                    me.removeActiveFilter(key);
                }
            });
            $.each(params, function(key, value) {
                me.createActiveFilter(key, value);
            });
            $.each(me.activeFilterElements, function() {
                count++;
            });
            if (count > 1) {
                me.createActiveFilterElement('reset', me.resetLabel);
            }
            me.$filterCont.toggleClass(me.opts.hasActiveFilterCls, (count > 0));
            me.$activeFilterCont.toggleClass(me.opts.disabledCls, !me.$filterCont.hasClass(me.opts.collapsedCls));
            $.publish('plugin/swListingActions/onCreateActiveFiltersFromCategoryParams', [me, categoryParams]);
        },
        createActiveFilter: function(param, value) {
            var me = this,
                label = me.createActiveFilterLabel(param, value);
            if (label !== undefined && label.length) {
                if (me.activeFilterElements[param] !== undefined) {
                    me.updateActiveFilterElement(param, label);
                } else {
                    me.createActiveFilterElement(param, label);
                }
            }
            $.publish('plugin/swListingActions/onCreateActiveFilter', [me, param, value]);
        },
        createActiveFilterElement: function(param, label) {
            var me = this;
            me.activeFilterElements[param] = $('<span>', {
                'class': me.opts.activeFilterCls,
                'html': me.getLabelIcon() + label,
                'data-filter-param': param
            }).appendTo(me.$activeFilterCont);
            $.publish('plugin/swListingActions/onCreateActiveFilterElement', [me, param, label]);
        },
        updateActiveFilterElement: function(param, label) {
            var me = this;
            me.activeFilterElements[param].html(me.getLabelIcon() + label);
            $.publish('plugin/swListingActions/onUpdateActiveFilterElement', [me, param, label]);
        },
        removeActiveFilter: function(param) {
            var me = this;
            me.activeFilterElements[param].remove();
            delete me.activeFilterElements[param];
            $.publish('plugin/swListingActions/onRemoveActiveFilter', [me, param]);
        },
        resetFilterProperty: function(param) {
            var me = this,
                $input, rangeSlider;
            if (param == 'rating') {
                me.$el.find('#star--reset').prop('checked', true).trigger('change');
            } else {
                $input = me.$el.find('[name="' + me.escapeDoubleQuotes(param) + '"]');
                if ($input.is('[data-range-input]')) {
                    rangeSlider = $input.parents('[data-range-slider="true"]').data('plugin_swRangeSlider');
                    rangeSlider.reset($input.attr('data-range-input'));
                } else {
                    $input.removeAttr('checked').trigger('change');
                }
            }
            $.publish('plugin/swListingActions/onResetFilterProperty', [me, param]);
        },
        createActiveFilterLabel: function(param, value) {
            var me = this,
                $label, labelText = '',
                valueString = value + '';
            if (param == 'rating' && value > 0) {
                labelText = me.createStarLabel(value);
            } else {
                $label = me.$filterForm.find('label[for="' + me.escapeDoubleQuotes(param) + '"]');
                if ($label.is('[data-range-label]')) {
                    labelText = $label.prev('span').html() + $label.html();
                } else if ($label.find('img').length) {
                    labelText = $label.find('img').attr('alt');
                } else if (value > 0 || valueString.length > 0) {
                    labelText = $label.html();
                }
            }
            $.publish('plugin/swListingActions/onCreateActiveFilterLabel', [me, labelText, param, value]);
            return labelText;
        },
        escapeDoubleQuotes: function(str) {
            return str.replace(/\\([\s\S])|(")/g, '\\$1$2');
        },
        createStarLabel: function(stars) {
            var me = this,
                label = '',
                i = 0;
            for (i; i < 5; i++) {
                if (i < stars) {
                    label += '<i class="icon--star"></i>';
                } else {
                    label += '<i class="icon--star-empty"></i>';
                }
            }
            $.publish('plugin/swListingActions/onCreateStarLabel', [me, label, stars]);
            return label;
        },
        getLabelIcon: function() {
            var me = this,
                icon = '<span class="' + me.opts.activeFilterIconCls + '"></span>';
            $.publish('plugin/swListingActions/onCreateStarLabel', [me, icon]);
            return icon;
        },
        openFilterPanel: function() {
            var me = this;
            if (!me.$filterCont.hasClass(me.opts.hasActiveFilterCls)) {
                me.$activeFilterCont.slideDown(me.opts.animationSpeed);
            }
            me.$filterForm.slideDown(me.opts.animationSpeed);
            me.$activeFilterCont.removeClass(me.opts.disabledCls);
            me.$filterCont.addClass(me.opts.collapsedCls);
            me.$filterTrigger.addClass(me.opts.activeCls);
            $.publish('plugin/swListingActions/onOpenFilterPanel', [me]);
        },
        closeFilterPanel: function() {
            var me = this;
            if (!me.$filterCont.hasClass(me.opts.hasActiveFilterCls)) {
                me.$activeFilterCont.slideUp(me.opts.animationSpeed);
            }
            me.$filterForm.slideUp(me.opts.animationSpeed);
            me.$activeFilterCont.addClass(me.opts.disabledCls);
            me.$filterCont.removeClass(me.opts.collapsedCls);
            me.$filterTrigger.removeClass(me.opts.activeCls);
            $.publish('plugin/swListingActions/onCloseFilterPanel', [me]);
        },
        destroy: function() {
            var me = this;
            me.$el.off(me.getEventName('click'), '.' + me.opts.activeFilterCls);
            me._destroy();
        }
    });
})(jQuery, window, StateManager, undefined);;
(function($, window) {
    'use strict';
    $.plugin('swCollapseCart', {
        defaults: {
            'ajaxCartURL': window.controller['ajax_cart'],
            'triggerElSelector': '.navigation--entry.entry--cart',
            'itemContainerSelector': '.item--container',
            'removeItemSelector': '.action--remove',
            'offcanvasCloseElSelector': '.close--off-canvas',
            'loadingIconClass': 'icon--loading-indicator',
            'loadingIconWrapperClass': 'ajax--cart',
            'activeClass': 'is--shown',
            'displayMode': 'collapsible'
        },
        init: function() {
            var me = this,
                opts;
            me.applyDataAttributes();
            opts = me.opts;
            me._$triggerEl = $(opts.triggerElSelector);
            me._$linkEl = me._$triggerEl.find('.cart--link');
            me._isOverMe = false;
            me._isCartLoading = false;
            me._$loadingIcon = $('<i>', {
                'class': opts.loadingIconClass
            });
            me._isOpened = false;
            if (me.isDisplayMode('offcanvas')) {
                me._$triggerEl.swOffcanvasMenu({
                    'offCanvasSelector': me.$el,
                    'direction': 'fromRight'
                });
            }
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me.$el.on(me.getEventName('click'), me.opts.removeItemSelector, $.proxy(me.onRemoveButtonClick, me));
            me.$el.on(me.getEventName('click touchstart'), me.opts.offcanvasCloseElSelector, $.proxy(me.onCloseButtonClick, me));
            if (me.isDisplayMode('offcanvas')) {
                me._on(me._$triggerEl, 'click touchstart', $.proxy(me.onMouseEnter, me));
                $.subscribe('plugin/swAddArticle/onAddArticle', $.proxy(me.onArticleAdded, me));
                $.subscribe('plugin/swAddArticle/onBeforeAddArticle', $.proxy(me.onBeforeAddArticle, me));
            } else {
                me._on('.container--ajax-cart,' + me.opts.triggerElSelector, 'mousemove', $.proxy(me.onMouseHover, me));
                me._on(me._$triggerEl, 'mouseenter touchstart', $.proxy(me.onMouseEnter, me));
                me._on(me._$triggerEl, 'mouseleave', $.proxy(me.onMouseLeave, me));
                me._on(me._$triggerEl, 'click', $.proxy(me.onClick, me));
                me._on(me.$el, 'mouseleave', $.proxy(me.onMouseLeave, me));
                $('.container--ajax-cart,' + me.opts.triggerElSelector).hover($.proxy(me.onMouseHoverStart, me), $.proxy(me.onMouseHoverEnd, me));
            }
            $.publish('plugin/swCollapseCart/onRegisterEvents', [me]);
        },
        onBeforeAddArticle: function() {
            var me = this;
            me.showLoadingIndicator();
            me.openMenu();
            $.publish('plugin/swCollapseCart/onBeforeAddArticle', [me]);
        },
        onArticleAdded: function(event, plugin, response) {
            var me = this;
            if (me.isDisplayMode('collapsible')) {
                return;
            }
            me.$el.html(response).find('.ajax--cart .alert').removeClass('is--hidden');
            picturefill();
            $.publish('plugin/swCollapseCart/onArticleAdded', [me]);
        },
        onMouseEnter: function(event) {
            var me = this;
            if (me.isDisplayMode('offcanvas')) {
                event.preventDefault();
                me.showLoadingIndicator();
                me.openMenu();
                me.loadCart();
            } else {
                if (me.isCartLoading()) {
                    me.showLoadingIndicator();
                    me.openMenu();
                } else {
                    me.buffer(function() {
                        if (me.isOverMe() === false || me._wasClicked === true) {
                            return;
                        }
                        me.showLoadingIndicator();
                        me.openMenu();
                        me.loadCart(function() {
                            $('body').one('touchstart', $.proxy(me.onMouseLeave, me));
                            $.publish('plugin/swCollapseCart/onMouseEnterLoaded', [me, event]);
                        });
                        $.publish('plugin/swCollapseCart/onMouseEnterBuffer', [me, event]);
                    }, 500);
                }
            }
            $.publish('plugin/swCollapseCart/onMouseEnter', [me, event]);
        },
        onMouseLeave: function(event) {
            var me = this,
                target = event.toElement || event.relatedTarget || event.target;
            $.publish('plugin/swCollapseCart/onMouseLeave', [me, event]);
            if (me.isElementOrChild(me.$el[0], target) || me.isElementOrChild(me._$triggerEl[0], target)) {
                return;
            }
            me.closeMenu();
            me.clearBuffer();
        },
        onCloseButtonClick: function(event) {
            event.preventDefault();
            $.publish('plugin/swCollapseCart/onCloseButton', [this]);
            this.closeMenu();
        },
        onRemoveButtonClick: function(event) {
            event.preventDefault();
            var me = this,
                $currentTarget = $(event.currentTarget),
                $parent = $currentTarget.parent(),
                $form = $currentTarget.closest('form'),
                url;
            if ($currentTarget.attr('href')) {
                url = $currentTarget.attr('href');
            } else {
                url = $form.attr('action');
            }
            $.publish('plugin/swCollapseCart/onRemoveArticle', [me, event]);
            $parent.html(me._$loadingIcon.clone());
            $.ajax({
                'url': url,
                'dataType': 'jsonp',
                'success': function(result) {
                    me.$el.html(result);
                    picturefill();
                    $.publish('plugin/swCollapseCart/onRemoveArticleFinished', [me, event, result]);
                }
            });
        },
        buffer: function(func, bufferTime) {
            var me = this;
            me.clearBuffer();
            me.bufferTimeout = setTimeout(func, bufferTime);
        },
        clearBuffer: function() {
            var me = this;
            if (me.bufferTimeout) {
                clearTimeout(me.bufferTimeout);
            }
        },
        isElementOrChild: function(firstEl, secondEl) {
            return firstEl === secondEl || $.contains(firstEl, secondEl);
        },
        isDisplayMode: function(mode) {
            return this.opts.displayMode === mode;
        },
        showLoadingIndicator: function() {
            var me = this;
            me.$el.html($('<div>', {
                'class': me.opts.loadingIconWrapperClass,
                'html': me._$loadingIcon.clone()
            }));
            $.publish('plugin/swCollapseCart/onShowLoadingIndicator', [me]);
        },
        openMenu: function() {
            var me = this,
                plugin;
            me._isOpened = true;
            if (me.isDisplayMode('offcanvas') && (plugin = me._$triggerEl.data('plugin_swOffcanvasMenu'))) {
                plugin.openMenu();
            } else {
                me.$el.addClass(me.opts.activeClass);
            }
            $.publish('plugin/swCollapseCart/onMenuOpen', [me]);
        },
        loadCart: function(callback) {
            var me = this,
                opts = me.opts,
                $el = me.$el;
            if (me.isCartLoading()) {
                return;
            }
            $.publish('plugin/swCollapseCart/onLoadCart', [me]);
            me._$linkEl.addClass('is--disabled');
            me._isCartLoading = true;
            $.ajax({
                'url': opts.ajaxCartURL,
                'dataType': 'jsonp',
                'success': function(result) {
                    $el.html(result);
                    picturefill();
                    if (typeof callback === 'function') {
                        callback();
                    }
                    $.publish('plugin/swCollapseCart/onLoadCartFinished', [me, result]);
                },
                'complete': function() {
                    me._$linkEl.removeClass('is--disabled');
                    me._isCartLoading = false;
                }
            });
        },
        closeMenu: function() {
            var me = this,
                plugin;
            me._isOpened = false;
            if (me.isDisplayMode('offcanvas') && (plugin = me._$triggerEl.data('plugin_swOffcanvasMenu'))) {
                plugin.closeMenu();
            } else {
                me.$el.removeClass(me.opts.activeClass);
            }
            $.publish('plugin/swCollapseCart/onCloseMenu', [me]);
        },
        onClick: function(event) {
            var me = this;
            if (me.isCartLoading()) {
                event.preventDefault();
                return false;
            }
            me._wasClicked = true;
        },
        isCartLoading: function() {
            return !!this._isCartLoading;
        },
        isOverMe: function() {
            return !!this._isOverMe;
        },
        onMouseHoverStart: function() {
            this._isOverMe = true;
        },
        onMouseHoverEnd: function() {
            this._isOverMe = false;
        },
        destroy: function() {
            var me = this;
            me.off(me.eventSuffix);
            me._destroy();
        }
    });
})(jQuery, window);;
(function($, window, document, undefined) {
    'use strict';
    var $window = $(window),
        $body = $('body');
    $.plugin('swEmotionLoader', {
        defaults: {
            controllerUrl: null,
            availableDevices: null,
            showListing: false,
            deviceTypes: {
                'xl': '0',
                'l': '1',
                'm': '2',
                's': '3',
                'xs': '4'
            },
            wrapperSelector: '.emotion--wrapper',
            fallbackContentSelector: '.listing--wrapper',
            showListingSelector: '.emotion--show-listing',
            loadingOverlaySelector: '.emotion--overlay'
        },
        init: function() {
            var me = this,
                opts = me.opts;
            me.applyDataAttributes();
            if (opts.controllerUrl === null || opts.availableDevices === null) {
                me.$el.remove();
                return;
            }
            me.$emotion = false;
            me.$siblings = me.$el.siblings(opts.wrapperSelector);
            me.hasSiblings = (me.$siblings.length > 0);
            me.availableDevices = (opts.availableDevices + '').split(',');
            me.$fallbackContent = $(opts.fallbackContentSelector);
            me.$showListingLink = $(opts.showListingSelector);
            me.$overlay = $(me.opts.loadingOverlaySelector);
            if (!opts.showListing) {
                me.hideFallbackContent();
            }
            me.loadEmotion();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            StateManager.on('resize', $.proxy(me.onDeviceChange, me));
            $.publish('plugin/swEmotionLoader/onRegisterEvents', [me]);
        },
        onDeviceChange: function() {
            var me = this;
            me.loadEmotion();
            $.publish('plugin/swEmotionLoader/onDeviceChange', [me]);
        },
        loadEmotion: function(controllerUrl, deviceState) {
            var me = this,
                devices = me.availableDevices,
                types = me.opts.deviceTypes,
                url = controllerUrl || me.opts.controllerUrl,
                state = deviceState || StateManager.getCurrentState();
            if (devices.indexOf(types[state]) === -1) {
                var hasSameDeviceSibling = false;
                me.hideEmotion();
                me.$siblings.each(function(index, el) {
                    var devices = $(el).attr('data-availabledevices');
                    if (devices.indexOf(types[state]) !== -1) {
                        hasSameDeviceSibling = true;
                    }
                });
                if (!hasSameDeviceSibling) me.showFallbackContent();
                return;
            }
            if (!devices.length || !state.length || !url.length) {
                me.hideEmotion();
                me.showFallbackContent();
                return;
            }
            if (me.$emotion.length) {
                (me.opts.showListing) ? me.showFallbackContent(): me.hideFallbackContent();
                me.$overlay.remove();
                me.showEmotion();
                return;
            }
            me.showEmotion();
            if (me.isLoading) {
                return;
            }
            me.isLoading = true;
            me.$overlay.insertBefore('.content-main');
            $.ajax({
                url: url,
                method: 'GET',
                success: function(response) {
                    me.isLoading = false;
                    me.$overlay.remove();
                    $.publish('plugin/swEmotionLoader/onLoadEmotionLoaded', [me]);
                    if (!response.length) {
                        me.hideEmotion();
                        me.showFallbackContent();
                        return;
                    }
                    (me.opts.showListing) ? me.showFallbackContent(): me.hideFallbackContent();
                    me.initEmotion(response);
                    $.publish('plugin/swEmotionLoader/onLoadEmotionFinished', [me]);
                }
            });
            $.publish('plugin/swEmotionLoader/onLoadEmotion', [me]);
        },
        initEmotion: function(html) {
            var me = this;
            me.$el.html(html);
            me.$emotion = me.$el.find('*[data-emotion="true"]');
            if (!me.$emotion.length) {
                me.showFallbackContent();
                return;
            }
            me.$emotion.swEmotion();
            $.publish('plugin/swEmotionLoader/onInitEmotion', [me, html]);
        },
        showEmotion: function() {
            var me = this;
            me.$el.css('display', 'block');
            $.publish('plugin/swEmotionLoader/onShowEmotion', [me]);
        },
        hideEmotion: function() {
            var me = this;
            me.$el.css('display', 'none');
            $.publish('plugin/swEmotionLoader/onHideEmotion', [me]);
        },
        showFallbackContent: function() {
            var me = this;
            me.$fallbackContent.removeClass('is--hidden');
            me.$showListingLink.addClass('is--hidden');
            me.$overlay.remove();
            StateManager.updatePlugin('*[data-infinite-scrolling="true"]', 'swInfiniteScrolling');
            $.publish('plugin/swEmotionLoader/onShowFallbackContent', [me]);
        },
        hideFallbackContent: function() {
            var me = this;
            me.$fallbackContent.addClass('is--hidden');
            me.$showListingLink.removeClass('is--hidden');
            StateManager.updatePlugin('*[data-infinite-scrolling="true"]', 'swInfiniteScrolling');
            $.publish('plugin/swEmotionLoader/onHideFallbackContent', [me]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
    $.plugin('swEmotion', {
        defaults: {
            gridMode: 'resize',
            baseWidth: 1160,
            fullscreen: false,
            columns: 4,
            cellHeight: 185,
            cellSpacing: 10,
            elementSelector: '.emotion--element',
            gridSizerSelector: '.emotion--sizer',
            bannerElSelector: '[data-coverImage="true"]',
            videoElSelector: '.emotion--video'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.bufferedCall = false;
            me.$contentMain = $('.content-main');
            me.$container = me.$el.parents('.content--emotions');
            me.$wrapper = me.$el.parents('.emotion--wrapper');
            me.$elements = me.$el.find(me.opts.elementSelector);
            me.$gridSizer = me.$el.find(me.opts.gridSizerSelector);
            me.$bannerElements = me.$elements.find(me.opts.bannerElSelector);
            me.$videoElements = me.$elements.find(me.opts.videoElSelector);
            me.$productSliderElements = me.$elements.find('*[data-product-slider="true"]');
            me.remSpacing = ~~me.opts.cellSpacing / 16;
            me.currentState = window.StateManager.getCurrentState();
            if (me.opts.fullscreen) {
                me.initFullscreen();
            }
            me.initState(me.currentState);
            me.initMode(me.opts.gridMode);
            me.initElements();
            me.registerEvents();
        },
        initMode: function(gridMode) {
            var me = this,
                mode = gridMode || me.opts.gridMode,
                modeMethod = 'init' + mode.charAt(0).toUpperCase() + mode.slice(1) + 'Grid';
            if (typeof me[modeMethod] === 'function') {
                me[modeMethod]();
            } else {
                me.initFluidGrid();
            }
            if (mode !== 'resize') {
                me.setContainerSpacing();
            }
        },
        initState: function(state) {
            var me = this;
            state = state || window.StateManager.getCurrentState();
            me.$sizer = me.$el.find('.emotion--sizer-' + state);
            me.clsPrefix = '-' + state;
            if (me.$sizer.length <= 0) {
                me.$sizer = me.$el.find('.emotion--sizer');
                me.clsPrefix = '';
            }
            me.rows = ~~me.$sizer.attr('data-rows');
        },
        initElements: function() {
            var me = this;
            if (me.opts.gridMode !== 'rows') {
                $.each(me.$bannerElements, function(index, item) {
                    $(item).swEmotionBanner();
                });
            }
            $.each(me.$videoElements, function(index, item) {
                $(item).swEmotionVideo();
            });
            StateManager.updatePlugin('*[data-product-slider="true"]', 'swProductSlider');
            StateManager.updatePlugin('*[data-image-slider="true"]', 'swImageSlider');
            window.picturefill();
            $.publish('plugin/swEmotion/onInitElements', [me]);
        },
        initFullscreen: function() {
            var me = this;
            $body.addClass('is--no-sidebar');
            me.$contentMain.addClass('is--fullscreen');
            me.$wrapper.addClass('is--fullscreen');
            $.publish('plugin/swEmotion/onInitFullscreen', [me]);
        },
        removeFullscreen: function(showSidebar) {
            var me = this;
            if (showSidebar) $body.removeClass('is--no-sidebar');
            me.$contentMain.removeClass('is--fullscreen');
            me.$wrapper.removeClass('is--fullscreen');
            $.publish('plugin/swEmotion/onRemoveFullscreen', [me, showSidebar]);
        },
        initMasonryGrid: function() {
            var me = this;
            me.initFluidGrid();
            $.publish('plugin/swEmotion/onInitMasonryGrid', [me]);
        },
        initFluidGrid: function() {
            var me = this;
            me.setElementHeights();
            me.setElementPositions();
            $.publish('plugin/swEmotion/onInitFluidGrid', [me]);
        },
        initResizeGrid: function() {
            var me = this;
            me.baseWidth = ~~me.opts.baseWidth;
            me.$el.css('width', me.baseWidth + me.opts.cellSpacing);
            if (!me.opts.fullscreen) {
                me.$wrapper.css('max-width', me.baseWidth);
            }
            me.setElementHeights();
            me.setElementPositions();
            me.scale();
            $.publish('plugin/swEmotion/onInitScaleGrid', [me]);
        },
        initRowsGrid: function() {
            var me = this,
                r, c, rowCls, colCls, element, elementCols, lastCol = 0,
                colExp = new RegExp(' col' + me.clsPrefix + '-(\\d)', 'i'),
                hiddenElements = $('<div>', {
                    'class': 'hidden-elements'
                }),
                rows = [];
            me.$elements.filter('.is--hidden' + me.clsPrefix).appendTo(hiddenElements);
            for (r = 1; r <= me.rows; r++) {
                rows[r] = $('<div>', {
                    'class': 'emotion--row row--' + r
                });
                lastCol = 0;
                for (c = 1; c <= me.opts.columns; c++) {
                    rowCls = '.start-row' + me.clsPrefix + '-' + r;
                    colCls = '.start-col' + me.clsPrefix + '-' + c;
                    element = me.$elements.filter(rowCls + colCls).not('.is--hidden' + me.clsPrefix);
                    if (element.length > 0) {
                        elementCols = ~~(element.attr('class').match(colExp)[1] || 1);
                        element.appendTo(rows[r]);
                        if (c - lastCol > 1) {
                            element.css('margin-left', 100 / me.opts.columns * (c - lastCol - 1) + '%');
                        } else {
                            element.css('margin-left', 'inherit');
                        }
                        lastCol = c + elementCols - 1;
                    }
                }
            }
            me.$el.find(':not([data-rows])').remove();
            hiddenElements.appendTo(me.$el);
            $.each(rows, function(rowIndex, $row) {
                me.$el.append($row);
            });
            $.publish('plugin/swEmotion/onInitRowsGrid', [me, rows, hiddenElements]);
        },
        registerEvents: function() {
            var me = this;
            window.StateManager.on('resize', $.proxy(me.onResize, me));
            if (me.opts.fullscreen) {
                $.subscribe('plugin/swEmotionLoader/onShowEmotion', $.proxy(me.onShow, me));
                $.subscribe('plugin/swEmotionLoader/onHideEmotion', $.proxy(me.onHide, me));
            }
            $.publish('plugin/swEmotion/onRegisterEvents', [me]);
        },
        onResize: function() {
            var me = this,
                state = window.StateManager.getCurrentState();
            me.initState(state);
            if (me.opts.gridMode === 'resize') {
                me.scale();
            }
            if (me.opts.gridMode === 'resize' || me.opts.gridMode === 'fluid') {
                me.setElementHeights();
                me.setElementPositions();
            }
            if (me.opts.gridMode === 'rows' && me.currentState !== state) {
                me.initRowsGrid();
            }
            me.$bannerElements.trigger('emotionResize');
            me.$videoElements.trigger('emotionResize');
            me.currentState = state;
            $.publish('plugin/swEmotion/onResize', [me, me.currentState]);
        },
        onShow: function(event, emotion) {
            var me = this;
            if (emotion.$el.is(me.$el)) {
                me.initFullscreen();
            }
            $.publish('plugin/swEmotion/onShow', [me, event, emotion]);
        },
        onHide: function(event, emotion) {
            var me = this;
            if (emotion.$el.is(me.$el)) {
                me.removeFullscreen();
            }
            $.publish('plugin/swEmotion/onHide', [me, event, emotion]);
        },
        setContainerSpacing: function() {
            var me = this;
            me.$el.css({
                'margin-left': -me.remSpacing + 'rem'
            });
            $.publish('plugin/swEmotion/onSetContainerSpacing', [me]);
        },
        setElementPositions: function() {
            var me = this,
                i = 1;
            for (i; i <= me.rows; i++) {
                var top = 100 / me.rows * (i - 1);
                me.$elements.filter('.start-row' + me.clsPrefix + '-' + i).css('top', top + '%');
            }
            $.publish('plugin/swEmotion/onSetElementPositions', [me]);
        },
        setElementHeights: function() {
            var me = this,
                i = 1;
            for (i; i <= me.rows; i++) {
                var height = 100 / me.rows * i;
                me.$elements.filter('.row' + me.clsPrefix + '-' + i).css('height', height + '%');
            }
            $.publish('plugin/swEmotion/onSetElementHeights', [me]);
        },
        scale: function() {
            var me = this,
                width = (me.opts.fullscreen) ? $window.outerWidth() : me.$wrapper.outerWidth(),
                ratio = me.baseWidth / me.$el.outerHeight(),
                factor = width / me.baseWidth,
                containerStyle = me.$el.get(0).style,
                wrapperHeight = width / ratio;
            $.extend(containerStyle, {
                'MsTransform': 'scale(' + factor + ') translateX(' + -me.remSpacing + 'rem)',
                'OTransform': 'scale(' + factor + ') translateX(' + -me.remSpacing + 'rem)',
                'MozTransform': 'scale(' + factor + ') translateX(' + -me.remSpacing + 'rem)',
                'webkitTransform': 'scale(' + factor + ') translateX(' + -me.remSpacing + 'rem)',
                'transform': 'scale(' + factor + ') translateX(' + -me.remSpacing + 'rem)'
            });
            me.$wrapper.css('height', wrapperHeight);
            $.publish('plugin/swEmotion/onScale', [me, width, factor, wrapperHeight]);
        },
        buffer: function(func, bufferTime) {
            var me = this;
            window.clearTimeout(me.bufferedCall);
            me.bufferedCall = window.setTimeout($.proxy(func, me), bufferTime);
            $.publish('plugin/swEmotion/onBuffer', [me, me.bufferedCall, func, bufferTime]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
    $.plugin('swEmotionBanner', {
        defaults: {
            width: null,
            height: null,
            containerSelector: '.banner--content'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$container = me.$el.find(me.opts.containerSelector);
            me.imageRatio = me.opts.width / me.opts.height;
            me.resizeBanner();
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$el, 'emotionResize', $.proxy(me.resizeBanner, me));
            $.publish('plugin/swEmotionBanner/onRegisterEvents', [me]);
        },
        resizeBanner: function() {
            var me = this,
                containerWidth = me.$el.width(),
                containerHeight = me.$el.height(),
                containerRatio = containerWidth / containerHeight,
                orientation = me.imageRatio > containerRatio,
                bannerWidth = orientation ? containerHeight * me.imageRatio : '100%',
                bannerHeight = orientation ? '100%' : containerWidth / me.imageRatio;
            me.$container.css({
                'width': bannerWidth,
                'height': bannerHeight
            });
            $.publish('plugin/swEmotionBanner/onResizeBanner', [me]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
    $.plugin('swEmotionVideo', {
        defaults: {
            mode: 'cover',
            scaleOriginX: 50,
            scaleOriginY: 50,
            scale: 1,
            playIconCls: 'icon--play',
            pauseIconCls: 'icon--pause',
            videoSelector: '.video--element',
            coverSelector: '.video--cover',
            playBtnSelector: '.video--play-btn',
            playIconSelector: '.video--play-icon'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$video = me.$el.find(me.opts.videoSelector);
            me.$videoCover = me.$el.find(me.opts.coverSelector);
            me.$playBtn = me.$el.find(me.opts.playBtnSelector);
            me.$playBtnIcon = me.$playBtn.find(me.opts.playIconSelector);
            me.player = me.$video.get(0);
            if (me.$video.attr('muted') !== undefined) {
                me.player.volume = 0.0;
            }
            me.setScaleOrigin(me.opts.scaleOriginX, me.opts.scaleOriginY);
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$video, 'loadedmetadata', $.proxy(me.onLoadMeta, me));
            me._on(me.$video, 'canplay', $.proxy(me.onCanPlay, me));
            me._on(me.$video, 'play', $.proxy(me.onVideoPlay, me));
            me._on(me.$video, 'ended', $.proxy(me.onVideoEnded, me));
            me._on(me.$el, 'emotionResize', $.proxy(me.resizeVideo, me));
            me._on(me.$videoCover, 'click', $.proxy(me.onPlayClick, me));
            me._on(me.$playBtn, 'click', $.proxy(me.onPlayClick, me));
            $.publish('plugin/swEmotionVideo/onRegisterEvents', [me]);
        },
        onLoadMeta: function(event) {
            var me = this;
            me.videoWidth = me.player.videoWidth;
            me.videoHeight = me.player.videoHeight;
            me.videoRatio = me.videoWidth / me.videoHeight;
            me.resizeVideo();
            $.publish('plugin/swEmotionVideo/onLoadMeta', [me, event]);
        },
        onCanPlay: function(event) {
            var me = this;
            if (!me.player.paused || me.player.autoplay) {
                me.$playBtnIcon.addClass(me.opts.pauseIconCls).removeClass(me.opts.playIconCls);
            }
            $.publish('plugin/swEmotionVideo/onCanPlay', [me, event]);
        },
        onVideoPlay: function(event) {
            var me = this;
            me.$videoCover.hide();
            $.publish('plugin/swEmotionVideo/onVideoPlay', [me, event]);
        },
        onVideoEnded: function(event) {
            var me = this;
            me.$playBtnIcon.removeClass(me.opts.pauseIconCls).addClass(me.opts.playIconCls);
            $.publish('plugin/swEmotionVideo/onVideoEnded', [me, event]);
        },
        onPlayClick: function(event) {
            var me = this;
            event.preventDefault();
            (me.player.paused) ? me.playVideo(): me.stopVideo();
            $.publish('plugin/swEmotionVideo/onPlayClick', [me, event]);
        },
        playVideo: function() {
            var me = this;
            me.$playBtnIcon.addClass(me.opts.pauseIconCls).removeClass(me.opts.playIconCls);
            me.player.play();
            $.publish('plugin/swEmotionVideo/onPlayVideo', [me]);
        },
        stopVideo: function() {
            var me = this;
            me.$playBtnIcon.removeClass(me.opts.pauseIconCls).addClass(me.opts.playIconCls);
            me.player.pause();
            $.publish('plugin/swEmotionVideo/onStopVideo', [me]);
        },
        resizeVideo: function() {
            var me = this;
            if (me.opts.mode === 'scale') {
                return;
            }
            var containerWidth = me.$el.outerWidth(),
                containerHeight = me.$el.outerHeight(),
                containerRatio = containerWidth / containerHeight,
                orientation = me.videoRatio > containerRatio,
                positiveFactor = me.videoRatio / containerRatio,
                negativeFactor = containerRatio / me.videoRatio;
            if (me.opts.mode === 'stretch') {
                if (orientation) {
                    me.transformVideo('scaleY(' + positiveFactor * me.opts.scale + ')');
                } else {
                    me.transformVideo('scaleX(' + negativeFactor * me.opts.scale + ')');
                }
            }
            if (me.opts.mode === 'cover') {
                if (orientation) {
                    me.transformVideo('scaleX(' + positiveFactor * me.opts.scale + ') scaleY(' + positiveFactor * me.opts.scale + ')');
                } else {
                    me.transformVideo('scaleX(' + negativeFactor * me.opts.scale + ') scaleY(' + negativeFactor * me.opts.scale + ')');
                }
            }
            $.publish('plugin/swEmotionVideo/onResizeVideo', [me]);
        },
        setScaleOrigin: function(originX, originY) {
            var me = this,
                x = originX || me.opts.scaleOriginX,
                y = originY || me.opts.scaleOriginY,
                origin = x + '% ' + y + '%';
            me.$video.css({
                '-ms-transform-origin': origin,
                '-o-transform-origin': origin,
                '-moz-transform-origin': origin,
                '-webkit-transform-origin': origin,
                'transform-origin': origin
            });
            $.publish('plugin/swEmotionVideo/onSetScaleOrigin', [me, x, y]);
        },
        transformVideo: function(transformation) {
            var me = this,
                videoElementStyle = me.player.style;
            $.extend(videoElementStyle, {
                'MsTransform': transformation,
                'OTransform': transformation,
                'MozTransform': transformation,
                'webkitTransform': transformation,
                'transform': transformation
            });
            $.publish('plugin/swEmotionVideo/onTransformVideo', [me, transformation]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery, window, document);;
(function($) {
    'use strict';
    $.plugin('swProductCompareAdd', {
        defaults: {
            compareMenuSelector: '.entry--compare',
            hiddenCls: 'is--hidden'
        },
        init: function() {
            var me = this;
            me.$el.on(me.getEventName('click'), '*[data-product-compare-add="true"]', $.proxy(me.onAddArticleCompare, me));
            $.publish('plugin/swProductCompareAdd/onRegisterEvents', [me]);
        },
        onAddArticleCompare: function(event) {
            var me = this,
                $target = $(event.target),
                $form = $target.closest('form'),
                addArticleUrl;
            event.preventDefault();
            if ($target.attr('href')) {
                addArticleUrl = $target.attr('href');
            } else {
                addArticleUrl = $form.attr('action');
            }
            if (!addArticleUrl) {
                return;
            }
            $.overlay.open({
                closeOnClick: false
            });
            $.loadingIndicator.open({
                openOverlay: false
            });
            $.publish('plugin/swProductCompareAdd/onAddArticleCompareBefore', [me, event]);
            $.ajax({
                'url': addArticleUrl,
                'dataType': 'jsonp',
                'success': function(data) {
                    var compareMenu = $(me.opts.compareMenuSelector);
                    if (compareMenu.hasClass(me.opts.hiddenCls)) {
                        compareMenu.removeClass(me.opts.hiddenCls);
                    }
                    if (data.indexOf('data-max-reached="true"') !== -1) {
                        $.loadingIndicator.close(function() {
                            $.modal.open(data, {
                                sizing: 'content'
                            });
                        });
                    } else {
                        compareMenu.html(data);
                        $('*[data-product-compare-menu="true"]').swProductCompareMenu();
                        $.loadingIndicator.close(function() {
                            $('html, body').animate({
                                scrollTop: ($('.top-bar').offset().top)
                            }, 'slow');
                            $.overlay.close();
                        });
                    }
                    $.publish('plugin/swProductCompareAdd/onAddArticleCompareSuccess', [me, event, data, compareMenu]);
                }
            });
            $.publish('plugin/swProductCompareAdd/onAddArticleCompare', [me, event]);
        },
        destroy: function() {
            this.$el.off(this.getEventName('click'));
            this._destroy();
        }
    });
})(jQuery);;
(function($) {
    'use strict';
    $.plugin('swProductCompareMenu', {
        defaults: {
            compareMenuSelector: '.entry--compare',
            startCompareSelector: '.btn--compare-start',
            deleteCompareSelector: '.btn--compare-delete',
            deleteCompareItemSelector: '.btn--item-delete',
            modalSelector: '.js--modal',
            modalContentInnerSelector: '.modal--compare',
            compareEntriesSelector: '.compare--list .compare--entry',
            compareEntrySelector: '.compare--entry',
            hiddenCls: 'is--hidden'
        },
        init: function() {
            var me = this,
                $compareMenu = $(me.opts.compareMenuSelector);
            if (!$compareMenu.is(':empty')) {
                $compareMenu.removeClass(me.opts.hiddenCls);
            }
            me._on(me.opts.startCompareSelector, 'touchstart click', $.proxy(me.onStartCompare, me));
            me._on(me.opts.deleteCompareSelector, 'touchstart click', $.proxy(me.onDeleteCompare, me));
            me._on(me.opts.deleteCompareItemSelector, 'touchstart click', $.proxy(me.onDeleteItem, me));
            $.publish('plugin/swProductCompareMenu/onRegisterEvents', [me]);
        },
        onStartCompare: function(event) {
            event.preventDefault();
            var me = this,
                startCompareBtn = me.$el.find(me.opts.startCompareSelector),
                modalUrl = startCompareBtn.attr('href'),
                modalTitle = startCompareBtn.attr('data-modal-title');
            $.overlay.open({
                closeOnClick: false
            });
            $.loadingIndicator.open({
                openOverlay: false
            });
            $.publish('plugin/swProductCompareMenu/onStartCompareBefore', [me]);
            $.ajax({
                'url': modalUrl,
                'dataType': 'jsonp',
                'success': function(template) {
                    $.publish('plugin/swProductCompareMenu/onStartCompareSuccess', [me, template]);
                    $.loadingIndicator.close(function() {
                        $.modal.open(template, {
                            title: modalTitle,
                            sizing: 'content'
                        });
                        var templateWidth = $(me.opts.modalSelector).find(me.opts.modalContentInnerSelector).outerWidth();
                        $(me.opts.modalSelector).css('width', templateWidth);
                        picturefill();
                        var maxRows = 0;
                        $('.entry--property').each(function() {
                            var row = ~~($(this).attr('data-property-row'));
                            if (row > maxRows) {
                                maxRows = row;
                            }
                        });
                        var maximumHeight, rowSelector, i = 1;
                        for (; i <= maxRows; i++) {
                            rowSelector = '.entry--property[data-property-row="' + i + '"]';
                            maximumHeight = 0;
                            $(rowSelector).each(function() {
                                var rowHeight = $(this).height();
                                if (rowHeight > maximumHeight) {
                                    maximumHeight = rowHeight;
                                }
                            });
                            $(rowSelector).height(maximumHeight);
                        }
                        $.publish('plugin/swProductCompareMenu/onStartCompareFinished', [me, template]);
                    });
                }
            });
            $.publish('plugin/swProductCompareMenu/onStartCompare', [me]);
        },
        onDeleteCompare: function(event) {
            var me = this,
                $target = $(event.currentTarget),
                deleteCompareBtn = me.$el.find(me.opts.deleteCompareSelector),
                $form = deleteCompareBtn.closest('form'),
                $menu = $(me.opts.compareMenuSelector),
                deleteUrl;
            event.preventDefault();
            if ($target.attr('href')) {
                deleteUrl = $target.attr('href');
            } else {
                deleteUrl = $form.attr('action');
            }
            $.ajax({
                'url': deleteUrl,
                'dataType': 'jsonp',
                'success': function() {
                    $menu.empty().addClass(me.opts.hiddenCls);
                    $.publish('plugin/swProductCompareMenu/onDeleteCompareSuccess', [me]);
                }
            });
            $.publish('plugin/swProductCompareMenu/onDeleteCompare', [me]);
        },
        onDeleteItem: function(event) {
            event.preventDefault();
            var me = this,
                $deleteBtn = $(event.currentTarget),
                $form = $deleteBtn.closest('form'),
                rowElement = $deleteBtn.closest(me.opts.compareEntrySelector),
                compareCount = $(me.opts.compareEntriesSelector).length,
                deleteUrl;
            if ($deleteBtn.attr('href')) {
                deleteUrl = $deleteBtn.attr('href');
            } else {
                deleteUrl = $form.attr('action');
            }
            if (compareCount > 1) {
                rowElement.slideUp('fast', function() {
                    rowElement.remove();
                });
                $('.compare--quantity').html('(' + (compareCount - 1) + ')');
                $.ajax({
                    'url': deleteUrl,
                    'dataType': 'jsonp',
                    'success': function(response) {
                        $.publish('plugin/swProductCompareMenu/onDeleteItemSuccess', [me, response]);
                    }
                });
            } else {
                $.ajax({
                    'url': deleteUrl,
                    'dataType': 'jsonp',
                    'success': function(response) {
                        $(me.opts.compareMenuSelector).empty().addClass(me.opts.hiddenCls);
                        $('*[data-product-compare-menu="true"]').swProductCompareMenu();
                        $.publish('plugin/swProductCompareMenu/onDeleteItemSuccess', [me, response]);
                    }
                });
            }
            $.publish('plugin/swProductCompareMenu/onDeleteItem', [me, event, deleteUrl]);
        },
        destroy: function() {
            this._destroy();
        }
    });
})(jQuery);;
(function($, window) {
    'use strict';
    var parseQueryString = function(url) {
        var qparams = {},
            parts = (url || '').split('?'),
            qparts, qpart, i = 0;
        if (parts.length <= 1) {
            return qparams;
        }
        qparts = parts[1].split('&');
        for (i in qparts) {
            var key, value;
            qpart = qparts[i].split('=');
            key = decodeURIComponent(qpart[0]);
            value = decodeURIComponent(qpart[1] || '');
            qparams[key] = ($.isNumeric(value) ? parseFloat(value, 10) : value);
        }
        return qparams;
    };
    $.plugin('swInfiniteScrolling', {
        defaults: {
            'enabled': true,
            'eventName': 'scroll',
            'categoryId': 0,
            'pagingSelector': '.listing--paging',
            'productBoxSelector': '.product--box',
            'defaultPerPageSelector': '.action--per-page',
            'defaultChangeLayoutSelector': '.action--change-layout',
            'threshold': 3,
            'loadMoreCls': 'js--load-more',
            'loadPreviousCls': 'js--load-previous',
            'loadBtnCls': 'btn is--primary is--icon-right',
            'loadMoreSnippet': 'Weitere Artikel laden',
            'loadPreviousSnippet': 'Vorherige Artikel laden',
            'listingContainerSelector': '.listing--container',
            'pagingBottomSelector': '.listing--bottom-paging',
            'listingActionsWrapper': 'infinite--actions',
            ajaxUrl: window.controller.ajax_listing || null
        },
        init: function() {
            var me = this,
                $body = $('body');
            me.applyDataAttributes();
            if (!me.opts.enabled || !me.$el.is(':visible') || !me.opts.categoryId || me.opts.ajaxUrl === null) {
                return;
            }
            $(me.opts.pagingSelector).remove();
            $(me.opts.pagingBottomSelector).remove();
            me.maxPages = me.$el.attr('data-pages');
            if (me.maxPages <= 1) {
                return;
            }
            me.isLoading = false;
            me.isFinished = false;
            me.fetchCount = 0;
            me.previousPageIndex = 0;
            me.buttonWrapperTop = $('<div>', {
                'class': me.opts.listingActionsWrapper
            });
            me.buttonWrapperBottom = $('<div>', {
                'class': me.opts.listingActionsWrapper
            });
            $(me.opts.listingContainerSelector).after(me.buttonWrapperBottom);
            $(me.opts.listingContainerSelector).before(me.buttonWrapperTop);
            me.baseUrl = window.location.href.split('?')[0];
            me.ajax = {
                'url': me.opts.ajaxUrl,
                'params': parseQueryString(window.location.href)
            };
            me.params = parseQueryString(window.location.href);
            me.upperParams = $.extend({}, me.params);
            me.historyParams = $.extend({}, me.params);
            me.urlBasicMode = false;
            if (!me.params.p) {
                me.basicModeSegments = window.location.pathname.split('/');
                me.basicModePageKey = $.inArray('sPage', me.basicModeSegments);
                me.basicModePageValue = me.basicModeSegments[me.basicModePageKey + 1];
                if (me.basicModePageValue) {
                    me.urlBasicMode = true;
                    me.params.p = me.basicModePageValue;
                    me.upperParams.p = me.basicModePageValue;
                }
            }
            if (!me.params.p) {
                me.params.p = 1;
            }
            me.startPage = me.params.p;
            me.currentPushState = '';
            if (me.params.p && me.params.p > 1) {
                me.showLoadPrevious();
            }
            me._on(window, me.opts.eventName, $.proxy(me.onScrolling, me));
            var loadMoreSelector = '.' + me.opts.loadMoreCls;
            $body.delegate(loadMoreSelector, 'click', $.proxy(me.onLoadMore, me));
            var loadPreviousSelector = '.' + me.opts.loadPreviousCls;
            $body.delegate(loadPreviousSelector, 'click', $.proxy(me.onLoadPrevious, me));
            $.publish('plugin/swInfiniteScrolling/onRegisterEvents', [me]);
        },
        update: function() {
            var me = this;
            me.opts.enabled = me.$el.is(':visible');
            $.publish('plugin/swInfiniteScrolling/onUpdate', [me]);
        },
        onScrolling: function() {
            var me = this;
            if (me.isLoading || !me.opts.enabled) {
                return;
            }
            var $window = $(window),
                docTop = $window.scrollTop() + $window.height(),
                fetchPoint = me.$el.find(me.opts.productBoxSelector).last(),
                fetchPointOffset = fetchPoint.offset().top,
                bufferSize = fetchPoint.height(),
                triggerPoint = fetchPointOffset - bufferSize;
            if (docTop > triggerPoint && (me.params.p < me.maxPages)) {
                me.fetchNewPage();
            }
            var $products = $('*[data-page-index]'),
                visibleProducts = $.grep($products, function(item) {
                    return $(item).offset().top <= docTop;
                });
            var $firstProduct = $(visibleProducts).last(),
                tmpPageIndex = $firstProduct.attr('data-page-index');
            var tmpParams = me.historyParams;
            delete tmpParams.c;
            if (!tmpParams.p || !tmpPageIndex) {
                tmpParams.p = me.startPage;
            }
            if (tmpPageIndex) {
                tmpParams.p = tmpPageIndex;
            }
            var tmpPushState = me.baseUrl + '?' + $.param(tmpParams);
            if (me.urlBasicMode) {
                if (!tmpPageIndex) {
                    tmpPageIndex = me.basicModePageValue;
                }
                var segments = me.basicModeSegments;
                segments[me.basicModePageKey + 1] = tmpPageIndex;
                tmpPushState = segments.join('/');
            }
            if (me.currentPushState != tmpPushState) {
                me.currentPushState = tmpPushState;
                if (!history || !history.pushState) {
                    return;
                }
                history.pushState('data', '', me.currentPushState);
            }
            $.publish('plugin/swInfiniteScrolling/onScrolling', [me]);
        },
        fetchNewPage: function() {
            var me = this;
            if (me.isFinished || me.params.p >= me.maxPages) {
                return;
            }
            if (me.isLoading) {
                return;
            }
            if (me.fetchCount >= me.opts.threshold) {
                var button = me.generateButton('next');
                me.buttonWrapperBottom.html(button);
                me.isFinished = true;
                return;
            }
            me.isLoading = true;
            me.openLoadingIndicator();
            me.params.mode = 'next';
            me.params.p++;
            me.fetchCount++;
            if (!me.params.c) me.params.c = me.opts.categoryId;
            $.publish('plugin/swInfiniteScrolling/onBeforeFetchNewPage', [me]);
            var url = me.ajax.url + '?' + $.param(me.params);
            $.get(url, function(data) {
                var template = data.trim();
                $.publish('plugin/swInfiniteScrolling/onFetchNewPageLoaded', [me, template]);
                if (!template) {
                    me.isFinished = true;
                    me.closeLoadingIndicator();
                    return;
                }
                me.$el.append(template);
                picturefill();
                me.closeLoadingIndicator();
                me.isLoading = false;
                if (me.params.p >= me.maxPages) {
                    me.isFinished = true;
                }
                $.publish('plugin/swInfiniteScrolling/onFetchNewPageFinished', [me, template]);
            });
            $.publish('plugin/swInfiniteScrolling/onFetchNewPage', [me]);
        },
        generateButton: function(buttonType) {
            var me = this,
                type = buttonType || 'next',
                cls = (type == 'previous') ? me.opts.loadPreviousCls : me.opts.loadMoreCls,
                snippet = (type == 'previous') ? me.opts.loadPreviousSnippet : me.opts.loadMoreSnippet,
                $button = $('<a>', {
                    'class': me.opts.loadBtnCls + ' ' + cls,
                    'html': snippet + ' <i class="icon--cw is--large"></i>'
                });
            $.publish('plugin/swInfiniteScrolling/onLoadMore', [me, $button, buttonType]);
            return $button;
        },
        onLoadMore: function(event) {
            event.preventDefault();
            var me = this;
            $('.' + me.opts.loadMoreCls).remove();
            me.isFinished = false;
            if (me.maxPages >= me.opts.threshold) {
                me.opts.threshold++;
            }
            me.fetchNewPage();
            $.publish('plugin/swInfiniteScrolling/onLoadMore', [me, event]);
        },
        showLoadPrevious: function() {
            var me = this,
                button = me.generateButton('previous');
            me.buttonWrapperTop.html(button);
            $.publish('plugin/swInfiniteScrolling/onShowLoadPrevious', [me, button]);
        },
        onLoadPrevious: function(event) {
            event.preventDefault();
            var me = this;
            $('.' + me.opts.loadPreviousCls).remove();
            me.openLoadingIndicator('top');
            var tmpParams = me.upperParams;
            if (!tmpParams.c) tmpParams.c = me.opts.categoryId;
            tmpParams.p = tmpParams.p - 1;
            tmpParams.mode = 'previous';
            $.publish('plugin/swInfiniteScrolling/onBeforeFetchPreviousPage', [me]);
            var url = me.ajax.url + '?' + $.param(tmpParams);
            $.get(url, function(data) {
                var template = data.trim();
                me.$el.prepend(template);
                picturefill();
                me.closeLoadingIndicator();
                me.isLoading = false;
                if (tmpParams.p > 1) {
                    me.showLoadPrevious();
                }
                $.publish('plugin/swInfiniteScrolling/onLoadPreviousFinished', [me, event, data]);
            });
            $.publish('plugin/swInfiniteScrolling/onLoadPrevious', [me, event]);
        },
        openLoadingIndicator: function(type) {
            var me = this,
                $indicator = $('.js--loading-indicator.indicator--relative');
            if ($indicator.length) {
                return;
            }
            $indicator = $('<div>', {
                'class': 'js--loading-indicator indicator--relative',
                'html': $('<i>', {
                    'class': 'icon--default'
                })
            });
            if (!type) {
                me.$el.parent().after($indicator);
            } else {
                me.$el.parent().before($indicator);
            }
            $.publish('plugin/swInfiniteScrolling/onOpenLoadingIndicator', [me, $indicator]);
        },
        closeLoadingIndicator: function() {
            var me = this,
                $indicator = $('.js--loading-indicator.indicator--relative');
            if (!$indicator.length) {
                return;
            }
            $indicator.remove();
            $.publish('plugin/swInfiniteScrolling/onCloseLoadingIndicator', [me]);
        }
    });
})(jQuery, window);;
(function($) {
    'use strict';
    $.plugin('swOffcanvasButton', {
        defaults: {
            pluginClass: 'js--off-canvas-button',
            contentSelector: '.offcanvas--content',
            closeButtonSelector: '.close--off-canvas',
            fullscreen: true
        },
        init: function() {
            var me = this,
                $el = me.$el,
                opts = me.opts;
            me.applyDataAttributes();
            $el.addClass(opts.pluginClass);
            $el.swOffcanvasMenu({
                'direction': 'fromRight',
                'offCanvasSelector': $el.find(opts.contentSelector),
                'fullscreen': opts.fullscreen,
                'closeButtonSelector': opts.closeButtonSelector
            });
        },
        destroy: function() {
            var me = this,
                $el = me.$el,
                plugin = $el.data('plugin_swOffcanvasMenu');
            if (plugin) {
                plugin.destroy();
            }
            $el.removeClass(me.opts.pluginClass);
            me._destroy();
        }
    });
}(jQuery));;
(function($, Modernizr) {
    'use strict';
    $.plugin('swSubCategoryNav', {
        defaults: {
            'enabled': true,
            'eventName': 'click',
            'sidebarCategorySelector': '.sidebar--navigation',
            'backwardsSelector': '.link--go-back',
            'forwardsSelector': '.link--go-forward',
            'mainMenuSelector': '.link--go-main',
            'sidebarWrapperSelector': '.sidebar--categories-wrapper',
            'mainCategoryId': null,
            'categoryId': null,
            'fetchUrl': '',
            'overlaySelector': '.offcanvas--overlay',
            'sidebarMainSelector': '.sidebar-main',
            'mobileNavigationSelector': '.navigation--smartphone',
            'loadingClass': 'sidebar--ajax-loader',
            'backSlideClass': 'background',
            'iconRightSelector': '.is--icon-right',
            'disableScrollingClass': 'is--inactive',
            'animationSpeedIn': 450,
            'animationSpeedOut': 300,
            'easingIn': 'cubic-bezier(.3,0,.15,1)',
            'easingOut': 'cubic-bezier(.02, .01, .47, 1)',
            'easingFallback': 'swing'
        },
        init: function() {
            var me = this,
                transitionSupport = Modernizr.csstransitions,
                opts;
            me.applyDataAttributes();
            opts = me.opts;
            if (!opts.enabled || !opts.mainCategoryId) {
                return;
            }
            me.$sidebar = $(opts.sidebarMainSelector);
            me.$sidebarWrapper = $(opts.sidebarWrapperSelector);
            me.$navigation = $(opts.mobileNavigationSelector);
            me.$navigation.show();
            me.$loadingIcon = $('<div>', {
                'class': opts.loadingClass
            });
            me.slideFunction = transitionSupport ? 'transition' : 'animate';
            me.easingEffectIn = transitionSupport ? opts.easingIn : opts.easingFallback;
            me.easingEffectOut = transitionSupport ? opts.easingOut : opts.easingFallback;
            me.inProgress = false;
            $(opts.sidebarCategorySelector + ' ul').not('.navigation--level-high').css('display', 'none');
            me.addEventListener();
            if (!opts.categoryId || !opts.fetchUrl || (opts.mainCategoryId == opts.categoryId)) {
                return;
            }
            $.get(opts.fetchUrl, function(template) {
                me.$sidebarWrapper.css('display', 'none');
                me.$sidebar.addClass(opts.disableScrollingClass).append(template);
                $(opts.overlaySelector).addClass(opts.backSlideClass);
            });
        },
        addEventListener: function() {
            var me = this,
                opts = me.opts,
                $sidebar = me.$sidebar,
                eventName = opts.eventName;
            $sidebar.on(me.getEventName(eventName), opts.backwardsSelector, $.proxy(me.onClickBackButton, me));
            $sidebar.on(me.getEventName(eventName), opts.forwardsSelector, $.proxy(me.onClickForwardButton, me));
            $sidebar.on(me.getEventName(eventName), opts.mainMenuSelector, $.proxy(me.onClickMainMenuButton, me));
            $.publish('plugin/swSubCategoryNav/onRegisterEvents', [me]);
        },
        onClickBackButton: function(event) {
            event.preventDefault();
            var me = this,
                $target = $(event.target),
                url = $target.attr('href'),
                parentId = ~~$target.attr('data-parentId');
            if (me.inProgress) {
                return;
            }
            me.inProgress = true;
            $.publish('plugin/swSubCategoryNav/onClickBackButton', [me, event]);
            if (!url || parentId === me.opts.mainCategoryId) {
                me.slideToMainMenu();
                return;
            }
            me.loadTemplate(url, me.slideOut, $target);
        },
        onClickForwardButton: function(event) {
            event.preventDefault();
            var me = this,
                $target = $(event.currentTarget),
                url = $target.attr('data-fetchUrl');
            if (me.inProgress) {
                return;
            }
            me.inProgress = true;
            $.publish('plugin/swSubCategoryNav/onClickForwardButton', [me, event]);
            me.$sidebar.addClass(me.opts.disableScrollingClass);
            me.loadTemplate(url, me.slideIn, $target);
        },
        onClickMainMenuButton: function(event) {
            event.preventDefault();
            var me = this;
            if (me.inProgress) {
                return;
            }
            me.inProgress = true;
            $.publish('plugin/swSubCategoryNav/onClickMainMenuButton', [me, event]);
            me.slideToMainMenu();
        },
        loadTemplate: function(url, callback, $loadingTarget) {
            var me = this;
            $.publish('plugin/swSubCategoryNav/onLoadTemplateBefore', [me]);
            if (!$loadingTarget) {
                $.get(url, function(template) {
                    $.publish('plugin/swSubCategoryNav/onLoadTemplate', [me]);
                    callback.call(me, template);
                });
                return;
            }
            $loadingTarget.find(me.opts.iconRightSelector).fadeOut('fast');
            $loadingTarget.append(me.$loadingIcon);
            me.$loadingIcon.fadeIn();
            $.get(url, function(template) {
                me.$loadingIcon.hide();
                $.publish('plugin/swSubCategoryNav/onLoadTemplate', [me]);
                callback.call(me, template);
            });
        },
        slideOut: function(template) {
            var me = this,
                opts = me.opts,
                $overlays, $slide;
            $.publish('plugin/swSubCategoryNav/onSlideOutBefore', [me]);
            me.$sidebar.append(template);
            $overlays = $(opts.overlaySelector);
            $overlays.toggleClass(opts.backSlideClass);
            $slide = $overlays.not('.' + opts.backSlideClass);
            $slide[me.slideFunction]({
                'left': 280
            }, opts.animationSpeedOut, me.easingEffectOut, function() {
                $slide.remove();
                me.inProgress = false;
                $.publish('plugin/swSubCategoryNav/onSlideOut', [me]);
            });
        },
        slideIn: function(template) {
            var me = this,
                opts = me.opts,
                $overlays, $slide, $el;
            $.publish('plugin/swSubCategoryNav/onSlideInBefore', [me]);
            me.$sidebar.scrollTop(0);
            me.$sidebar.append(template);
            $overlays = $(opts.overlaySelector);
            $slide = $overlays.not('.' + opts.backSlideClass).css({
                'left': 280,
                'display': 'block'
            });
            $slide[me.slideFunction]({
                'left': 0
            }, opts.animationSpeedIn, me.easingEffectIn, function() {
                $overlays.each(function(i, el) {
                    $el = $(el);
                    if ($el.hasClass(opts.backSlideClass)) {
                        $el.remove();
                    }
                });
                $slide.addClass(opts.backSlideClass);
                me.$sidebarWrapper.css('display', 'none');
                me.$navigation.hide().show(0);
                $slide.addClass(opts.backSlideClass);
                me.inProgress = false;
                $.publish('plugin/swSubCategoryNav/onSlideIn', [me]);
            });
        },
        slideToMainMenu: function() {
            var me = this,
                opts = me.opts,
                $overlay = $(opts.overlaySelector);
            $.publish('plugin/swSubCategoryNav/onSlideToMainMenuBefore', [me]);
            me.$sidebarWrapper.css('display', 'block');
            me.$sidebarWrapper.find(me.opts.iconRightSelector).fadeIn('slow');
            $overlay[me.slideFunction]({
                'left': 280
            }, opts.animationSpeedOut, me.easingEffectOut, function() {
                $overlay.remove();
                me.$sidebar.removeClass(opts.disableScrollingClass);
                me.inProgress = false;
                $.publish('plugin/swSubCategoryNav/onSlideToMainMenu', [me]);
            });
        },
        destroy: function() {
            var me = this,
                opts = me.opts,
                $sidebar = me.$sidebar,
                $sidebarWrapper = me.$sidebarWrapper;
            if ($sidebar) {
                $sidebar.off(me.getEventName(opts.eventName), '**');
            }
            me.$navigation.hide();
            $(opts.sidebarCategorySelector + ' ul').not('.navigation--level-high').css('display', 'block');
            if ($sidebarWrapper) {
                me.$sidebarWrapper.css('display', 'block');
            }
            $(opts.overlaySelector).remove();
            me._destroy();
        }
    });
}(jQuery, Modernizr));;
(function($, window, undefined) {
    'use strict';
    $.plugin('swAjaxWishlist', {
        defaults: {
            counterSelector: '.notes--quantity',
            wishlistSelector: '.entry--notepad',
            iconCls: 'icon--check',
            savedCls: 'js--is-saved',
            text: 'Gemerkt',
            delay: 1500
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$wishlistButton = $(me.opts.wishlistSelector);
            me.$counter = $(me.opts.counterSelector);
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me.$el.on(me.getEventName('click'), '.action--note, .link--notepad', $.proxy(me.triggerRequest, me));
            $.publish('plugin/swAjaxWishlist/onRegisterEvents', [me]);
        },
        triggerRequest: function(event) {
            var me = this,
                $target = $(event.currentTarget),
                url = $target.attr('data-ajaxUrl');
            if (url == undefined || $target.hasClass(me.opts.savedCls)) {
                return;
            }
            event.preventDefault();
            $.ajax({
                'url': url,
                'dataType': 'jsonp',
                'success': $.proxy(me.responseHandler, me, $target)
            });
            $.publish('plugin/swAjaxWishlist/onTriggerRequest', [me, event, url]);
        },
        responseHandler: function($target, json) {
            var me = this,
                response = JSON.parse(json);
            $.publish('plugin/swAjaxWishlist/onTriggerRequestLoaded', [me, $target, response]);
            if (!response.success) {
                return;
            }
            me.updateCounter(response.notesCount);
            me.animateElement($target);
            $.publish('plugin/swAjaxWishlist/onTriggerRequestFinished', [me, $target, response]);
        },
        animateElement: function($target) {
            var me = this,
                $icon = $target.find('i'),
                originalIcon = $icon[0].className,
                $text = $target.find('.action--text'),
                originalText = $text.html();
            $target.addClass(me.opts.savedCls);
            $text.html($target.attr('data-text') || me.opts.text);
            $icon.removeClass(originalIcon).addClass(me.opts.iconCls);
            window.setTimeout(function() {
                $target.removeClass(me.opts.savedCls);
                $text.html(originalText);
                $icon.removeClass(me.opts.iconCls).addClass(originalIcon);
                $.publish('plugin/swAjaxWishlist/onAnimateElementFinished', [me, $target]);
            }, me.opts.delay);
            $.publish('plugin/swAjaxWishlist/onAnimateElement', [me, $target]);
        },
        updateCounter: function(count) {
            var me = this,
                $btn = me.$wishlistButton,
                animate = 'transition';
            if (me.$counter.length) {
                me.$counter.html(count);
                return me.$counter;
            }
            me.$counter = $('<span>', {
                'class': 'badge notes--quantity',
                'html': count,
                'css': {
                    'opacity': 0
                }
            }).appendTo($btn.find('a'));
            if (!$.support.transition) {
                animate = 'animate';
            }
            me.$counter[animate]({
                'opacity': 1
            }, 500);
            $.publish('plugin/swAjaxWishlist/onUpdateCounter', [me, me.$counter, count]);
            return me.$counter;
        },
        destroy: function() {
            var me = this;
            me.$el.off(me.getEventName('click'));
        }
    });
})(jQuery, window);;
(function($, window, undefined) {
    'use strict';
    $.plugin('swPreloaderButton', {
        defaults: {
            loaderCls: 'js--loading',
            checkFormIsValid: true
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.opts.checkFormIsValid = me.opts.checkFormIsValid && me.checkForValiditySupport();
            me._on(me.$el, 'click', $.proxy(me.onShowPreloader, me));
            $.publish('plugin/swPreloaderButton/onRegisterEvents', [me]);
        },
        checkForValiditySupport: function() {
            var me = this,
                element = document.createElement('input'),
                valid = (typeof element.validity === 'object');
            $.publish('plugin/swPreloaderButton/onCheckForValiditySupport', [me, valid]);
            return valid;
        },
        onShowPreloader: function() {
            var me = this;
            if (me.opts.checkFormIsValid) {
                var $form = $('#' + me.$el.attr('form'));
                if (!$form.length) {
                    $form = me.$el.parents('form');
                }
                if (!$form.length || !$form[0].checkValidity()) {
                    return;
                }
            }
            window.setTimeout(function() {
                me.$el.html(me.$el.text() + '<div class="' + me.opts.loaderCls + '"></div>').attr('disabled', 'disabled');
                $.publish('plugin/swPreloaderButton/onShowPreloader', [me]);
            }, 25);
        },
        reset: function() {
            var me = this;
            me.$el.find('.' + me.opts.loaderCls).removeAttr('disabled').remove();
        }
    });
})(jQuery, window);;
(function($, window) {
    'use strict';
    $.plugin('swImageGallery', {
        defaults: {
            imageContainerSelector: '.image-slider--container',
            imageSlideSelector: '.image-slider--slide',
            thumbnailContainerSelector: '.image-slider--thumbnails',
            imageGalleryClass: 'image--gallery',
            previousKeyCode: 37,
            nextKeyCode: 39,
            maxZoom: 'auto',
            disabledClass: 'is--disabled',
            btnClass: 'btn is--small',
            zoomInClass: 'icon--plus3 button--zoom-in',
            zoomOutClass: 'icon--minus3 button--zoom-out',
            zoomResetClass: 'icon--resize-shrink button--zoom-reset'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me._$imageContainer = me.$el.find(me.opts.imageContainerSelector);
            if (!me._$imageContainer.length) {
                return;
            }
            me._$thumbContainer = me.$el.find(me.opts.thumbnailContainerSelector);
            me._$imageContainerClone = me._$imageContainer.clone();
            me._$thumbContainerClone = me._$thumbContainer.clone();
            me.$zoomOutBtn = me.createZoomOutButton().appendTo(me._$imageContainerClone);
            me.$zoomResetBtn = me.createZoomResetButton().appendTo(me._$imageContainerClone);
            me.$zoomInBtn = me.createZoomInButton().appendTo(me._$imageContainerClone);
            me.$template = null;
            me.registerEvents();
        },
        createZoomInButton: function() {
            var me = this,
                opts = this.opts,
                $zoomInButton = $('<div>', {
                    'class': opts.btnClass + ' ' + opts.zoomInClass
                });
            $.publish('plugin/swImageGallery/onCreateZoomInButton', [me, $zoomInButton]);
            return $zoomInButton;
        },
        createZoomOutButton: function() {
            var me = this,
                opts = me.opts,
                $zoomOutButton = $('<div>', {
                    'class': opts.btnClass + ' ' + opts.zoomOutClass
                });
            $.publish('plugin/swImageGallery/onCreateZoomOutButton', [me, $zoomOutButton]);
            return $zoomOutButton;
        },
        createZoomResetButton: function() {
            var me = this,
                opts = me.opts,
                $zoomResetButton = $('<div>', {
                    'class': opts.btnClass + ' ' + opts.zoomResetClass
                });
            $.publish('plugin/swImageGallery/onCreateZoomResetButton', [me, $zoomResetButton]);
            return $zoomResetButton;
        },
        registerEvents: function() {
            var me = this;
            me._on(me._$imageContainer.find(me.opts.imageSlideSelector), 'click', $.proxy(me.onClick, me));
            $.subscribe('plugin/swImageSlider/onSlide', $.proxy(me.onImageUpdate, me));
            $.subscribe('plugin/swImageSlider/onUpdateTransform', $.proxy(me.onImageUpdate, me));
            me._on(window, 'keydown', $.proxy(me.onKeyDown, me));
            $.publish('plugin/swImageGallery/onRegisterEvents', [me]);
        },
        getImageSlider: function() {
            var me = this,
                $template = me.$template,
                slider = ($template && $template.data('plugin_swImageSlider')) || null;
            $.publish('plugin/swImageGallery/onGetImageSlider', [me, slider]);
            return slider;
        },
        onImageUpdate: function(event, context) {
            var me = this,
                plugin = me.getImageSlider();
            if (plugin !== context) {
                return;
            }
            me.toggleButtons(plugin);
            $.publish('plugin/swImageGallery/onImageUpdate', [me, event, plugin]);
        },
        onResetZoom: function(event) {
            var me = this,
                plugin = me.getImageSlider();
            event.preventDefault();
            if (!plugin || me.$zoomResetBtn.hasClass(me.opts.disabledClass)) {
                return;
            }
            me.disableButtons();
            plugin.resetTransformation(true, function() {
                me.toggleButtons(plugin);
                $.publish('plugin/swImageGallery/onResetZoomFinished', [me, event, plugin]);
            });
            $.publish('plugin/swImageGallery/onResetZoom', [me, event, plugin]);
        },
        onZoomIn: function(event) {
            var me = this,
                plugin = me.getImageSlider();
            event.preventDefault();
            if (!plugin || me.$zoomInBtn.hasClass(me.opts.disabledClass)) {
                return;
            }
            me.disableButtons();
            plugin.scale(1, true, function() {
                me.toggleButtons(plugin);
                $.publish('plugin/swImageGallery/onZoomInFinished', [me, event, plugin]);
            });
            $.publish('plugin/swImageGallery/onZoomIn', [me, event, plugin]);
        },
        onZoomOut: function(event) {
            var me = this,
                plugin = me.getImageSlider();
            event.preventDefault();
            if (!plugin || me.$zoomOutBtn.hasClass(me.opts.disabledClass)) {
                return;
            }
            me.disableButtons();
            plugin.scale(-1, true, function() {
                me.toggleButtons(plugin);
                $.publish('plugin/swImageGallery/onZoomOutFinished', [me, event, plugin]);
            });
            $.publish('plugin/swImageGallery/onZoomOut', [me, event, plugin]);
        },
        onKeyDown: function(event) {
            var me = this,
                opts = me.opts,
                plugin = me.getImageSlider(),
                keyCode = event.which;
            if (!plugin) {
                return;
            }
            if (keyCode === opts.previousKeyCode) {
                plugin.slidePrev();
            }
            if (keyCode === opts.nextKeyCode) {
                plugin.slideNext();
            }
            $.publish('plugin/swImageGallery/onKeyDown', [me, event, keyCode]);
        },
        createTemplate: function() {
            var me = this,
                $template, $el, img;
            me._$imageContainerClone.find('span[data-img-original]').each(function(i, el) {
                $el = $(el);
                img = $('<img>', {
                    'class': 'image--element',
                    'src': $el.attr('data-img-original')
                });
                $el.replaceWith(img);
            });
            me._$thumbContainerClone.find('a.thumbnails--arrow').remove();
            me._$imageContainerClone.find('.arrow').remove();
            $template = $('<div>', {
                'class': me.opts.imageGalleryClass,
                'html': [me._$imageContainerClone, me._$thumbContainerClone]
            });
            $.publish('plugin/swImageGallery/onCreateTemplate', [me, $template]);
            return $template;
        },
        onClick: function(event) {
            var me = this,
                imageSlider = me.$el.data('plugin_swImageSlider');
            $.modal.open(me.$template || (me.$template = me.createTemplate()), {
                width: '100%',
                height: '100%',
                animationSpeed: 350,
                additionalClass: 'image-gallery--modal no--border-radius',
                onClose: me.onCloseModal.bind(me)
            });
            me._on(me.$zoomInBtn, 'click touchstart', $.proxy(me.onZoomIn, me));
            me._on(me.$zoomOutBtn, 'click touchstart', $.proxy(me.onZoomOut, me));
            me._on(me.$zoomResetBtn, 'click touchstart', $.proxy(me.onResetZoom, me));
            picturefill();
            me.$template.swImageSlider({
                dotNavigation: false,
                swipeToSlide: true,
                pinchToZoom: true,
                doubleTap: true,
                maxZoom: me.opts.maxZoom,
                startIndex: imageSlider ? imageSlider.getIndex() : 0,
                preventScrolling: true
            });
            me.toggleButtons(me.getImageSlider());
            $.publish('plugin/swImageGallery/onClick', [me, event]);
        },
        onCloseModal: function() {
            var me = this,
                plugin = me.getImageSlider();
            if (!plugin) {
                return;
            }
            plugin.destroy();
            $.publish('plugin/swImageGallery/onCloseModal', [me]);
        },
        disableButtons: function() {
            var me = this,
                disabledClass = me.opts.disabledClass;
            me.$zoomResetBtn.addClass(disabledClass);
            me.$zoomOutBtn.addClass(disabledClass);
            me.$zoomInBtn.addClass(disabledClass);
            $.publish('plugin/swImageGallery/onDisableButtons', [me]);
        },
        toggleButtons: function(plugin) {
            var me = this,
                disabledClass = me.opts.disabledClass,
                scale, minScale, maxScale;
            if (!plugin) {
                return;
            }
            scale = plugin.getScale();
            minScale = plugin.getMinScale();
            maxScale = plugin.getMaxScale();
            me.$zoomResetBtn.toggleClass(disabledClass, scale === minScale);
            me.$zoomOutBtn.toggleClass(disabledClass, scale === minScale);
            me.$zoomInBtn.toggleClass(disabledClass, scale === maxScale);
            $.publish('plugin/swImageGallery/onToggleButtons', [me]);
        },
        destroy: function() {
            var me = this,
                plugin = me.getImageSlider();
            if (plugin) {
                plugin.destroy();
            }
            me.$template.remove();
            me.$template = null;
            me.$zoomOutBtn.remove();
            me.$zoomResetBtn.remove();
            me.$zoomInBtn.remove();
            me._$imageContainer = null;
            me._$thumbContainer = null;
            me._$imageContainerClone = null;
            me._$thumbContainerClone = null;
        }
    });
})(jQuery, window);;
(function($) {
    $.plugin('swOffcanvasHtmlPanel', {
        defaults: {
            'offcanvasContent': '.teaser--text-long',
            'shortDescription': '.teaser--text-short',
            'offcanvasTrigger': '.text--offcanvas-link',
            'offCanvasSelector': '.teaser--text-offcanvas',
            'offCanvasCloseSelector': '.close--off-canvas',
            'offCanvasDirection': 'fromRight',
            'hiddenCls': 'is--hidden'
        },
        init: function() {
            var me = this,
                opts = me.opts,
                $el = me.$el;
            me.applyDataAttributes();
            me._$shortText = $el.find(opts.shortDescription).removeClass(opts.hiddenCls);
            me._$longText = $el.find(opts.offcanvasContent).addClass(opts.hiddenCls);
            me._$offCanvas = $el.find(opts.offCanvasSelector).removeClass(opts.hiddenCls);
            me._$offcanvasTrigger = $el.find(opts.offcanvasTrigger);
            me._$offcanvasTrigger.swOffcanvasMenu({
                'offCanvasSelector': opts.offCanvasSelector,
                'closeButtonSelector': opts.offCanvasCloseSelector,
                'direction': opts.offCanvasDirection
            });
        },
        destroy: function() {
            var me = this,
                hiddenClass = me.opts.hiddenCls,
                plugin = me._$offcanvasTrigger.data('plugin_swOffcanvasMenu');
            me._$longText.removeClass(hiddenClass);
            me._$shortText.addClass(hiddenClass);
            me._$offCanvas.addClass(hiddenClass);
            if (plugin) {
                plugin.destroy();
            }
            me._destroy();
        }
    });
})(jQuery);;
(function($, window) {
    'use strict';
    $.plugin('swJumpToTab', {
        defaults: {
            contentCls: 'has--content',
            tabDetail: '.tab-menu--product',
            tabCrossSelling: '.tab-menu--cross-selling'
        },
        init: function() {
            var me = this,
                param = decodeURI((RegExp('action=(.+?)(&|$)').exec(location.search) || [null, null])[1]);
            me.$htmlBody = $('body, html');
            me.tabMenuProduct = me.$el.find(me.opts.tabDetail).data('plugin_swTabMenu');
            me.$tabMenuCrossSelling = me.$el.find(me.opts.tabCrossSelling);
            me.resizeCrossSelling();
            me.registerEvents();
            if (param === 'rating') {
                var $tab = $('[data-tabName="' + param + '"]'),
                    index = $tab.index() || 1;
                me.jumpToTab(index, $tab);
            }
        },
        resizeCrossSelling: function() {
            var me = this,
                $container;
            if (StateManager.isCurrentState(['xs', 's']) && me.$tabMenuCrossSelling.length) {
                me.$tabMenuCrossSelling.find('.tab--container').each(function(i, el) {
                    $container = $(el);
                    if ($container.find('.tab--content').html().trim().length) {
                        $container.addClass('has--content');
                    }
                });
            }
        },
        registerEvents: function() {
            var me = this;
            me.$el.on(me.getEventName('click'), '.product--rating-link, .link--publish-comment', $.proxy(me.onJumpToTab, me));
            $.publish('plugin/swJumpToTab/onRegisterEvents', [me]);
        },
        onJumpToTab: function(event) {
            var me = this,
                $tab = $('[data-tabName="rating"]'),
                index = $tab.index() || 1;
            event.preventDefault();
            me.jumpToTab(index, $tab);
            $.publish('plugin/swJumpToTab/onClick', [me, event]);
        },
        jumpToTab: function(tabIndex, jumpTo) {
            var me = this;
            if (!me.$el.hasClass('is--ctl-blog')) {
                me.tabMenuProduct.changeTab(tabIndex);
            }
            $.publish('plugin/swJumpToTab/onChangeTab', [me, tabIndex, jumpTo]);
            if (!jumpTo || !jumpTo.length) {
                return;
            }
            me.$htmlBody.animate({
                scrollTop: $(jumpTo).offset().top
            }, 0);
            $.publish('plugin/swJumpToTab/onJumpToTab', [me, tabIndex, jumpTo]);
        }
    });
})(jQuery, window);;
(function($, window) {
    $.plugin('swAjaxVariant', {
        hasHistorySupport: Modernizr.history,
        initialPopState: true,
        defaults: {
            productDetailsSelector: '.product--detail-upper',
            configuratorFormSelector: '.configurator--form',
            orderNumberSelector: '.entry--sku .entry--content',
            historyIdentifier: 'sw-ajax-variants',
            productDetailsDescriptionSelector: '.content--description',
            footerJavascriptInlineSelector: '#footer--js-inline'
        },
        init: function() {
            var me = this,
                ie;
            if (!me.$el.find('.product--configurator').length) {
                return;
            }
            me.applyDataAttributes();
            ie = (function() {
                if (window.ActiveXObject === undefined) return null;
                if (!document.querySelector) return 7;
                if (!document.addEventListener) return 8;
                if (!window.atob) return 9;
                if (!document.__proto__) return 10;
                return 11;
            })();
            if (ie && ie <= 9) {
                me.hasHistorySupport = false;
            }
            me.$el.on(me.getEventName('click'), '*[data-ajax-variants="true"]', $.proxy(me.onChange, me)).on(me.getEventName('change'), '*[data-ajax-select-variants="true"]', $.proxy(me.onChange, me)).on(me.getEventName('click'), '.reset--configuration', $.proxy(me.onChange, me));
            $(window).on('popstate', $.proxy(me.onPopState, me));
            if (me.hasHistorySupport) {
                me.publishInitialState();
            }
        },
        publishInitialState: function() {
            var me = this,
                stateObj = me._createHistoryStateObject();
            window.history.replaceState(stateObj.state, stateObj.title);
        },
        requestData: function(values, pushState) {
            var me = this,
                stateObj = me._createHistoryStateObject();
            $.loadingIndicator.open({
                closeOnClick: false,
                delay: 100
            });
            $.publish('plugin/swAjaxVariant/onBeforeRequestData', [me, values, stateObj.location]);
            values.template = 'ajax';
            if (stateObj.params.hasOwnProperty('c')) {
                values.c = stateObj.params.c;
            }
            $.ajax({
                url: stateObj.location,
                data: values,
                method: 'GET',
                success: function(response) {
                    var $response = $($.parseHTML(response, document, true)),
                        $productDetails, $productDescription, ordernumber;
                    $productDetails = $response.find(me.opts.productDetailsSelector);
                    $(me.opts.productDetailsSelector).html($productDetails.html());
                    $productDescription = $response.find(me.opts.productDetailsDescriptionSelector);
                    $(me.opts.productDetailsDescriptionSelector).html($productDescription.html());
                    ordernumber = $.trim(me.$el.find(me.opts.orderNumberSelector).text());
                    window.controller = window.snippets = window.themeConfig = window.lastSeenProductsConfig = window.csrfConfig = null;
                    $(me.opts.footerJavascriptInlineSelector).replaceWith($response.filter(me.opts.footerJavascriptInlineSelector));
                    StateManager.addPlugin('select:not([data-no-fancy-select="true"])', 'swSelectboxReplacement').addPlugin('*[data-image-slider="true"]', 'swImageSlider', {
                        touchControls: true
                    }).addPlugin('.product--image-zoom', 'swImageZoom', 'xl').addPlugin('*[data-image-gallery="true"]', 'swImageGallery').addPlugin('*[data-add-article="true"]', 'swAddArticle').addPlugin('*[data-modalbox="true"]', 'swModalbox');
                    $.publish('plugin/swAjaxVariant/onRequestData', [me, response, values, stateObj.location]);
                    if (pushState && me.hasHistorySupport) {
                        var location = stateObj.location + '?number=' + ordernumber;
                        if (stateObj.params.hasOwnProperty('c')) {
                            location += '&c=' + stateObj.params.c;
                        }
                        window.history.pushState(stateObj.state, stateObj.title, location);
                    }
                },
                complete: function() {
                    $.loadingIndicator.close();
                }
            });
        },
        onPopState: function(event) {
            var me = this,
                state = event.originalEvent.state;
            if (!state || !state.hasOwnProperty('type') || state.type !== 'sw-ajax-variants') {
                return;
            }
            if ($('html').hasClass('is--safari') && me.initialPopState) {
                me.initialPopState = false;
                return;
            }
            if (!state.values.length) {
                state = '';
            }
            if (state && state.scrollPos) {
                window.setTimeout(function() {
                    $(window).scrollTop(state.scrollPos);
                }, 10);
            }
            $.publish('plugin/swAjaxVariant/onPopState', [me, state]);
            me.requestData(state.values, false);
        },
        onChange: function(event) {
            var me = this,
                $target = $(event.target),
                $form = $target.parents('form'),
                values = {};
            $.each($form.serializeArray(), function(i, item) {
                if (item.name === '__csrf_token') {
                    return;
                }
                values[item.name] = item.value;
            });
            event.preventDefault();
            if (!me.hasHistorySupport) {
                $.loadingIndicator.open({
                    closeOnClick: false,
                    delay: 0
                });
                $form.submit();
                return false;
            }
            $.publish('plugin/swAjaxVariant/onChange', [me, values, $target]);
            me.requestData(values, true);
        },
        _getUrlParams: function() {
            var url = window.decodeURIComponent(window.location.search.substring(1)),
                urlParams = url.split('&'),
                params = {};
            $.each(urlParams, function(i, param) {
                param = param.split('=');
                if (param[0].length && param[1].length && !params.hasOwnProperty(param[0])) {
                    params[param[0]] = param[1];
                }
            });
            return params;
        },
        _getUrl: function() {
            return window.location.protocol + '//' + window.location.host + window.location.pathname;
        },
        _createHistoryStateObject: function() {
            var me = this,
                $form = me.$el.find(me.opts.configuratorFormSelector),
                urlParams = me._getUrlParams(),
                location = me._getUrl();
            return {
                state: {
                    type: me.opts.historyIdentifier,
                    values: $form.serialize(),
                    scrollPos: $(window).scrollTop()
                },
                title: document.title,
                location: location,
                params: urlParams
            };
        }
    });
})(jQuery, window);;
(function($, window, document) {
    'use strict';
    $.getCookie = function(name) {
        var value = '; ' + document.cookie,
            parts = value.split('; ' + name + '=');
        if (parts.length == 2) {
            return parts.pop().split(';').shift();
        }
        return undefined;
    };
    $.removeCookie = function(name) {
        var basePath = window.csrfConfig.basePath || '/';
        document.cookie = name + '=; path=' + basePath + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    var CSRF = {
        storageKey: '__csrf_token-' + window.csrfConfig.shopId,
        pendingRequests: {},
        getToken: function() {
            return $.getCookie(this.storageKey);
        },
        checkToken: function() {
            return $.getCookie('invalidate-xcsrf-token') === undefined && this.getToken() !== undefined;
        },
        createTokenField: function() {
            var me = this;
            return $('<input>', {
                'type': 'hidden',
                'name': '__csrf_token',
                'value': me.getToken()
            });
        },
        addTokenField: function(formElement) {
            formElement.append(CSRF.createTokenField());
            $.publish('plugin/swCsrfProtection/addTokenField', [this, formElement]);
        },
        getFormElements: function() {
            return $('form[method="post"]');
        },
        updateForms: function() {
            var me = this,
                formElements = me.getFormElements();
            $.each(formElements, function(index, formElement) {
                var csrfInput;
                formElement = $(formElement);
                csrfInput = formElement.find('input[name="__csrf_token"]');
                if (csrfInput.length > 0) {
                    csrfInput.val(me.getToken());
                } else {
                    me.addTokenField(formElement);
                }
            });
            $.publish('plugin/swCsrfProtection/updateForms', [this, formElements]);
        },
        setupAjax: function() {
            var me = this;
            $(document).ajaxSend($.proxy(me._ajaxBeforeSend, me));
            $(document).ajaxComplete($.proxy(me._ajaxAfterSend, me));
            $.publish('plugin/swCsrfProtection/setupAjax', [me, me.getToken()]);
        },
        _ajaxAfterSend: function() {
            window.setTimeout(function() {
                this.updateForms();
            }.bind(this), 1);
        },
        _ajaxBeforeSend: function(event, request) {
            request.setRequestHeader('X-CSRF-Token', this.getToken());
        },
        requestToken: function() {
            var me = this;
            $.ajax({
                url: window.csrfConfig.generateUrl,
                success: function(response, status, xhr) {
                    me.saveToken(xhr.getResponseHeader('x-csrf-token'));
                    $.removeCookie('invalidate-xcsrf-token');
                    $.publish('plugin/swCsrfProtection/requestToken', [me, me.getToken()]);
                    me.afterInit();
                }
            });
        },
        saveToken: function(token) {
            var me = this,
                basePath = window.csrfConfig.basePath || '/';
            document.cookie = me.storageKey + '=' + token + '; path=' + basePath;
        },
        init: function() {
            var me = this;
            if (me.checkToken()) {
                me.afterInit();
                return;
            }
            me.requestToken();
        },
        afterInit: function() {
            var me = this;
            me.updateForms();
            me.setupAjax();
            $.publish('plugin/swCsrfProtection/init', [me]);
        }
    };
    $(function() {
        CSRF.init();
    });
    window.CSRF = CSRF;
})(jQuery, window, document);;
(function($) {
    'use strict';
    $.plugin('swPanelAutoResizer', {
        defaults: {
            panelHeaderSelector: '.panel--header',
            panelBodySelector: '.panel--body',
            panelFooterSelector: '.panel--actions',
            maxHeight: null
        },
        $elChildren: null,
        isModal: false,
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$elChildren = me.$el.children();
            me.isModal = me.$el.closest('.js--modal').length > 0;
            $.subscribe(me.getEventName('plugin/swPanelAutoResizer/onAfterSetHeight'), $.proxy(me._onAfterSetHeight, me));
            $.publish('plugin/swPanelAutoResizer/onInit', [me]);
            me.update();
            $.publish('plugin/swPanelAutoResizer/onAfterInit', [me]);
        },
        _onAfterSetHeight: function(event, context) {
            var me = this;
            if (me === context) {
                return;
            }
            if (me.$el.closest(context.$el).length > 0) {
                me._calculateColumns();
                me.resize();
            }
        },
        _calculateColumns: function() {
            var me = this,
                maxWidth = me.$el.width(),
                width = 0,
                columns = 0,
                childWidth = 0;
            $.each(me.$elChildren, function(index, child) {
                childWidth = $(child).width();
                if ((width + childWidth) > maxWidth) {
                    return;
                }
                width += childWidth;
                columns++;
            });
            me._columns = columns;
        },
        update: function() {
            var me = this;
            if (me._resizeTimeout) {
                window.clearTimeout(me._resizeTimeout);
            }
            me._resizeTimeout = window.setTimeout(function() {
                $.publish('plugin/swPanelAutoResizer/onUpdate', [me]);
                me._calculateColumns();
                me.resize();
                $.publish('plugin/swPanelAutoResizer/afterUpdate', [me]);
            }, 150);
        },
        getMaxHeight: function($elements) {
            var me = this,
                opts = me.opts,
                itemHeight = 0,
                height = 0;
            $.publish('plugin/swPanelAutoResizer/onGetMaxHeight', [me]);
            $elements.each(function(index, childElement) {
                $(childElement).css('height', 'auto');
            });
            $elements.each(function(index, childElement) {
                itemHeight = $(childElement).height();
                if (itemHeight > height) {
                    height = itemHeight;
                }
            });
            if (opts.maxHeight !== null && opts.maxHeight < height) {
                height = opts.maxHeight;
            }
            $.publish('plugin/swPanelAutoResizer/onAfterGetMaxHeight', [me, height]);
            return height;
        },
        setHeight: function($elements, height) {
            var me = this;
            if (height <= 0) {
                return;
            }
            $.publish('plugin/swPanelAutoResizer/onSetHeight', [me]);
            $.each($elements, function(index, childElement) {
                $(childElement).height(height);
            });
            $.publish('plugin/swPanelAutoResizer/onAfterSetHeight', [me]);
        },
        resize: function(selector) {
            var me = this,
                height = 0,
                chunkItems = [],
                i = 0,
                childrenCount = me.$elChildren.length;
            if (typeof selector === 'undefined') {
                me.resize(me.opts.panelHeaderSelector);
                me.resize(me.opts.panelBodySelector);
                me.resize(me.opts.panelFooterSelector);
                return;
            }
            $.publish('plugin/swPanelAutoResizer/onResize', [me, selector]);
            if (me._columns > 1) {
                for (i; i < childrenCount; i += me._columns) {
                    chunkItems = me.$elChildren.slice(i, i + me._columns).map(function(index, child) {
                        return $(child).find(selector).first();
                    });
                    height = me.getMaxHeight(chunkItems);
                    me.setHeight(chunkItems, height);
                }
            } else {
                me.resetHeight();
            }
            me._centerModal();
            $.publish('plugin/swPanelAutoResizer/onAfterResize', [me, selector]);
        },
        _centerModal: function() {
            if (this.isModal === false) {
                return;
            }
            $.modal.center();
        },
        resetHeight: function() {
            var me = this,
                opts = me.opts;
            var allSelectorClass = [opts.panelHeaderSelector, opts.panelBodySelector, opts.panelFooterSelector].join(',');
            me.$elChildren.find(allSelectorClass).each(function(index, childElement) {
                $(childElement).css('height', 'auto');
            });
        },
        destroy: function() {
            var me = this;
            me.resetHeight();
            $.unsubscribe(me.getEventName('plugin/swPanelAutoResizer/onAfterSetHeight'));
            me._destroy();
        }
    });
})(jQuery);;
(function($, window) {
    'use strict';
    $.addressSelection = {
        _name: 'addressSelection',
        _previousOptions: {},
        defaults: {
            id: null,
            formSelector: '.address-manager--selection-form',
            width: '80%',
            height: '80%',
            sizing: 'content',
            sessionKey: '',
            setDefaultBillingAddress: null,
            setDefaultShippingAddress: null
        },
        getEventName: function(event) {
            return event + '.' + this._name;
        },
        openPrevious: function() {
            this.open(this._previousOptions);
        },
        open: function(options) {
            var me = this,
                sizing, extraData, maxHeight = 0;
            me.opts = $.extend({}, me.defaults, options);
            extraData = {
                sessionKey: me.opts.sessionKey,
                setDefaultBillingAddress: me.opts.setDefaultBillingAddress,
                setDefaultShippingAddress: me.opts.setDefaultShippingAddress
            };
            sizing = me.opts.sizing;
            me._previousOptions = Object.create(me.opts);
            if (window.StateManager._getCurrentDevice() === 'mobile') {
                sizing = 'auto';
            } else {
                maxHeight = me.opts.height;
            }
            $.modal.close();
            $.overlay.open({
                closeOnClick: false
            });
            $.loadingIndicator.open({
                openOverlay: false
            });
            $.publish('plugin/swAddressSelection/onBeforeAddressFetch', [me]);
            $.ajax({
                'url': window.controller['ajax_address_selection'],
                'data': {
                    id: me.opts.id,
                    extraData: extraData
                },
                'success': function(data) {
                    $.loadingIndicator.close(function() {
                        $.subscribe(me.getEventName('plugin/swModal/onOpen'), $.proxy(me._onSetContent, me));
                        $.modal.open(data, {
                            width: me.opts.width,
                            maxHeight: maxHeight,
                            additionalClass: 'address-manager--modal address-manager--selection',
                            sizing: sizing
                        });
                        $.unsubscribe(me.getEventName('plugin/swModal/onOpen'));
                    });
                    $.publish('plugin/swAddressSelection/onAddressFetchSuccess', [me, data]);
                }
            });
        },
        _onSetContent: function(event, $modal) {
            var me = this;
            me._registerPlugins();
            me._bindButtonAction($modal);
        },
        _registerPlugins: function() {
            window.StateManager.addPlugin('*[data-panel-auto-resizer="true"]', 'swPanelAutoResizer').addPlugin('*[data-address-editor="true"]', 'swAddressEditor').addPlugin('*[data-preloader-button="true"]', 'swPreloaderButton');
            $.publish('plugin/swAddressSelection/onRegisterPlugins', [this]);
        },
        _bindButtonAction: function($modal) {
            var me = this;
            $.publish('plugin/swAddressSelection/onBeforeBindButtonAction', [me, $modal]);
            $modal._$content.find(me.opts.formSelector).on('submit', function(event) {
                var $target = $(event.target);
                event.preventDefault();
                $.publish('plugin/swAddressSelection/onBeforeSave', [me, $target]);
                $.ajax({
                    method: $target.attr('method'),
                    url: $target.attr('action'),
                    data: $target.serialize(),
                    success: function(response) {
                        me.onSave($modal, response);
                    }
                });
            });
            $.publish('plugin/swAddressSelection/onAfterBindButtonAction', [me, $modal]);
        },
        onSave: function($modal, response) {
            var me = this;
            $.publish('plugin/swAddressSelection/onAfterSave', [me, $modal, response]);
            window.location.reload();
        }
    };
    $.plugin('swAddressSelection', {
        init: function() {
            var me = this;
            me.opts = $.extend({}, Object.create($.addressSelection.defaults), me.opts);
            me.applyDataAttributes(true);
            me._on(me.$el, 'click', $.proxy(me.onClick, me));
            $.publish('plugin/swAddressSelection/onRegisterEvents', [me]);
        },
        onClick: function(event) {
            event.preventDefault();
            $.addressSelection.open(this.opts);
        }
    });
})(jQuery, window);;
(function($, window) {
    'use strict';
    $.plugin('swAddressEditor', {
        defaults: {
            id: null,
            submitButtonSelector: '.address--form-submit',
            width: 650,
            height: '80%',
            sizing: 'content',
            sessionKey: '',
            setDefaultBillingAddress: null,
            setDefaultShippingAddress: null,
            showSelectionOnClose: false
        },
        init: function() {
            var me = this;
            me.applyDataAttributes(true);
            me._on(me.$el, 'click', $.proxy(me.onClick, me));
            $.publish('plugin/swAddressEditor/onRegisterEvents', [me]);
        },
        onClick: function(event) {
            var me = this;
            event.preventDefault();
            $.publish('plugin/swAddressEditor/onBeforeClick', [me, me.opts.id]);
            if (me.opts.id) {
                me.open(me.opts.id);
            } else {
                me.open();
            }
            $.publish('plugin/swAddressEditor/onAfterClick', [me, me.opts.id]);
        },
        open: function(addressId) {
            var me = this,
                sizing = me.opts.sizing,
                maxHeight = 0,
                requestData = {
                    id: addressId || null,
                    extraData: {
                        sessionKey: me.opts.sessionKey,
                        setDefaultBillingAddress: me.opts.setDefaultBillingAddress,
                        setDefaultShippingAddress: me.opts.setDefaultShippingAddress
                    }
                };
            if (window.StateManager._getCurrentDevice() === 'mobile') {
                sizing = 'auto';
            } else {
                maxHeight = me.opts.height;
            }
            $.modal.close();
            $.overlay.open({
                closeOnClick: false
            });
            $.loadingIndicator.open({
                openOverlay: false
            });
            $.publish('plugin/swAddressEditor/onBeforeOpen', [me, requestData]);
            $.ajax({
                'url': window.controller['ajax_address_editor'],
                'data': requestData,
                'success': function(data) {
                    $.loadingIndicator.close(function() {
                        $.subscribe(me.getEventName('plugin/swModal/onOpen'), $.proxy(me._onSetContent, me));
                        $.modal.open(data, {
                            width: me.opts.width,
                            height: me.opts.height,
                            maxHeight: maxHeight,
                            sizing: sizing,
                            additionalClass: 'address-manager--modal address-manager--editor',
                            addressId: addressId
                        });
                        $.unsubscribe(me.getEventName('plugin/swModal/onOpen'));
                    });
                    $.publish('plugin/swAddressEditor/onAddressFetchSuccess', [me, data]);
                }
            });
            $.publish('plugin/swAddressEditor/onAfterOpen', [me]);
        },
        _onSetContent: function(event, $modal) {
            var me = this;
            me._registerPlugins();
            me._bindButtonAction($modal);
        },
        _registerPlugins: function() {
            window.StateManager.addPlugin('div[data-register="true"]', 'swRegister').addPlugin('select:not([data-no-fancy-select="true"])', 'swSelectboxReplacement').addPlugin('*[data-preloader-button="true"]', 'swPreloaderButton');
            $.publish('plugin/swAddressEditor/onRegisterPlugins', [this]);
        },
        _bindButtonAction: function($modal) {
            var me = this,
                $submitButtons = $modal._$content.find(me.opts.submitButtonSelector),
                $actionInput = $modal._$content.find('input[name=saveAction]');
            $.publish('plugin/swAddressEditor/onBeforeBindButtonAction', [me, $modal]);
            $submitButtons.on('click', function(event) {
                var $elem = $(this);
                event.preventDefault();
                $actionInput.val($elem.attr('data-value'));
                $elem.closest('form').submit();
            });
            $modal._$content.find('form').on('submit', function(event) {
                var $target = $(event.target),
                    actionData = {
                        id: $modal.options.addressId || null
                    };
                me._resetErrorMessage($modal);
                me._disableSubmitButtons($modal);
                event.preventDefault();
                $.each($target.serializeArray(), function() {
                    actionData[this.name] = this.value;
                });
                $.publish('plugin/swAddressEditor/onBeforeSave', [me, actionData]);
                $.ajax({
                    url: $target.attr('action'),
                    data: actionData,
                    method: 'POST',
                    success: function(response) {
                        me.onSave($modal, response);
                    }
                });
            });
            $.publish('plugin/swAddressEditor/onAfterBindButtonAction', [me, $modal]);
        },
        onSave: function($modal, response) {
            var me = this;
            $.publish('plugin/swAddressEditor/onAfterSave', [me, $modal, response]);
            if (response.success === true) {
                if (me.opts.showSelectionOnClose) {
                    $.addressSelection.openPrevious();
                } else {
                    window.location.reload();
                }
            } else {
                me._highlightErrors($modal, response.errors);
                me._enableSubmitButtons($modal);
            }
        },
        _highlightErrors: function($modal, errors) {
            var fieldPrefix = $modal._$content.find('.address-form--panel').attr('data-prefix') || 'address';
            $modal._$content.find('.address-editor--errors').removeClass('is--hidden');
            $.each(errors, function(field) {
                $modal._$content.find('[name="' + fieldPrefix + '[' + field + ']"]').addClass('has--error');
            });
        },
        _resetErrorMessage: function($modal) {
            $modal._$content.find('.address-editor--errors').addClass('is--hidden');
        },
        _disableSubmitButtons: function($modal) {
            var me = this;
            $modal._$content.find(me.opts.submitButtonSelector).attr('disabled', 'disabled');
        },
        _enableSubmitButtons: function($modal) {
            var me = this;
            $modal._$content.find(me.opts.submitButtonSelector).removeAttr('disabled').data('plugin_swPreloaderButton').reset();
        }
    });
})(jQuery, window);
(function($, window) {
    window.StateManager.init([{
        state: 'xs',
        enter: 0,
        exit: 29.9375
    }, {
        state: 's',
        enter: 30,
        exit: 47.9375
    }, {
        state: 'm',
        enter: 48,
        exit: 63.9375
    }, {
        state: 'l',
        enter: 64,
        exit: 78.6875
    }, {
        state: 'xl',
        enter: 78.75,
        exit: 322.5
    }]);
    window.StateManager.addPlugin('*[data-offcanvas="true"]', 'swOffcanvasMenu', ['xs', 's']).addPlugin('*[data-search="true"]', 'swSearch').addPlugin('.footer--column .column--headline', 'swCollapsePanel', {
        contentSiblingSelector: '.column--content'
    }, ['xs', 's']).addPlugin('#new-customer-action', 'swCollapsePanel', ['xs', 's']).addPlugin('*[data-image-slider="true"]', 'swImageSlider', {
        touchControls: true
    }).addPlugin('.product--image-zoom', 'swImageZoom', 'xl').addPlugin('.blog-filter--trigger', 'swCollapsePanel', ['xs', 's', 'm', 'l']).addPlugin('.category--teaser .hero--text', 'swOffcanvasHtmlPanel', ['xs', 's']).addPlugin('*[data-product-slider="true"]', 'swProductSlider').addPlugin('.product--rating-link, .link--publish-comment', 'swScrollAnimate', {
        scrollTarget: '.tab-menu--product'
    }).addPlugin('.tab-menu--product', 'swTabMenu', ['s', 'm', 'l', 'xl']).addPlugin('.tab-menu--cross-selling', 'swTabMenu', ['m', 'l', 'xl']).addPlugin('.tab-menu--product .tab--container', 'swOffcanvasButton', {
        titleSelector: '.tab--title',
        previewSelector: '.tab--preview',
        contentSelector: '.tab--content'
    }, ['xs']).addPlugin('.tab-menu--cross-selling .tab--header', 'swCollapsePanel', {
        'contentSiblingSelector': '.tab--content'
    }, ['xs', 's']).addPlugin('body', 'swAjaxProductNavigation').addPlugin('*[data-collapse-panel="true"]', 'swCollapsePanel').addPlugin('*[data-range-slider="true"]', 'swRangeSlider').addPlugin('*[data-auto-submit="true"]', 'swAutoSubmit').addPlugin('*[data-drop-down-menu="true"]', 'swDropdownMenu').addPlugin('*[data-newsletter="true"]', 'swNewsletter').addPlugin('*[data-pseudo-text="true"]', 'swPseudoText').addPlugin('*[data-preloader-button="true"]', 'swPreloaderButton').addPlugin('*[data-filter-type]', 'swFilterComponent').addPlugin('*[data-listing-actions="true"]', 'swListingActions').addPlugin('*[data-scroll="true"]', 'swScrollAnimate').addPlugin('*[data-ajax-wishlist="true"]', 'swAjaxWishlist').addPlugin('*[data-image-gallery="true"]', 'swImageGallery').addPlugin('.emotion--wrapper', 'swEmotionLoader').addPlugin('input[type="submit"][form], button[form]', 'swFormPolyfill').addPlugin('select:not([data-no-fancy-select="true"])', 'swSelectboxReplacement').addPlugin('div.captcha--placeholder[data-src]', 'swCaptcha').addPlugin('*[data-modalbox="true"]', 'swModalbox').addPlugin('.is--ctl-detail', 'swJumpToTab').addPlugin('*[data-ajax-shipping-payment="true"]', 'swShippingPayment').addPlugin('div[data-register="true"]', 'swRegister').addPlugin('*[data-last-seen-products="true"]', 'swLastSeenProducts', $.extend({}, window.lastSeenProductsConfig)).addPlugin('*[data-add-article="true"]', 'swAddArticle').addPlugin('*[data-menu-scroller="true"]', 'swMenuScroller').addPlugin('*[data-collapse-cart="true"]', 'swCollapseCart').addPlugin('*[data-compare-ajax="true"]', 'swProductCompareAdd').addPlugin('*[data-product-compare-menu="true"]', 'swProductCompareMenu').addPlugin('*[data-infinite-scrolling="true"]', 'swInfiniteScrolling').addPlugin('*[data-ajax-variants-container="true"]', 'swAjaxVariant').addPlugin('*[data-subcategory-nav="true"]', 'swSubCategoryNav', ['xs', 's']).addPlugin('*[data-panel-auto-resizer="true"]', 'swPanelAutoResizer').addPlugin('*[data-address-selection="true"]', 'swAddressSelection').addPlugin('*[data-address-editor="true"]', 'swAddressEditor');
    $(function($) {
        if (!StorageManager.hasCookiesSupport) {
            createNoCookiesNoticeBox(window.snippets.noCookiesNotice);
        }

        function createNoCookiesNoticeBox(message) {
            $('<div/>', {
                'class': 'alert is--warning no--cookies'
            }).append($('<div/>', {
                'class': 'alert--icon'
            }).append($('<i/>', {
                'class': 'icon--element icon--warning'
            }))).append($('<div/>', {
                'class': 'alert--content',
                'html': message
            }).append($('<a/>', {
                'class': 'close--alert',
                'html': '✕'
            }).on('click', function() {
                $(this).closest('.no--cookies').hide();
            }))).appendTo('.page-wrap');
        }
        $('*[data-lightbox="true"]').on('click.lightbox', function(event) {
            var $el = $(this),
                target = ($el.is('[data-lightbox-target]')) ? $el.attr('data-lightbox-target') : $el.attr('href');
            event.preventDefault();
            if (target.length) {
                $.lightbox.open(target);
            }
        });
        $('input, textarea').placeholder();
        $('.add-voucher--checkbox').on('change', function(event) {
            var method = (!$(this).is(':checked')) ? 'addClass' : 'removeClass';
            event.preventDefault();
            $('.add-voucher--panel')[method]('is--hidden');
        });
        $('.table--shipping-costs-trigger').on('click touchstart', function(event) {
            event.preventDefault();
            var $this = $(this),
                $next = $this.next(),
                method = ($next.hasClass('is--hidden')) ? 'removeClass' : 'addClass';
            $next[method]('is--hidden');
        });

        function cartRefresh() {
            var ajaxCartRefresh = window.controller.ajax_cart_refresh,
                $cartAmount = $('.cart--amount'),
                $cartQuantity = $('.cart--quantity');
            if (!ajaxCartRefresh.length) {
                return;
            }
            $.ajax({
                'url': ajaxCartRefresh,
                'dataType': 'jsonp',
                'success': function(response) {
                    var cart = JSON.parse(response);
                    if (!cart.amount || !cart.quantity) {
                        return;
                    }
                    $cartAmount.html(cart.amount);
                    $cartQuantity.html(cart.quantity).removeClass('is--hidden');
                    if (cart.quantity == 0) {
                        $cartQuantity.addClass('is--hidden');
                    }
                }
            });
        }
        $.subscribe('plugin/swAddArticle/onAddArticle', cartRefresh);
        $.subscribe('plugin/swCollapseCart/onRemoveArticleFinished', cartRefresh);
        $('.is--ctl-detail .reset--configuration').on('click', function() {
            $.loadingIndicator.open({
                closeOnClick: false
            });
        });
    });
})(jQuery, window);;
(function($, window) {
    'use strict';
    var $body = $('body'),
        $html = $('html'),
        isTouchIE = $html.hasClass('is--ie-touch');
    $.plugin('advancedMenu', {
        defaults: {
            'listSelector': '.navigation--list.container',
            'navigationItemSelector': '.navigation--entry:not(.is--home)',
            'navigationLinkSelector': '.navigation--link',
            'closeButtonSelector': '.button--close',
            'menuContainerSelector': '.menu--container',
            'menuActiveClass': 'menu--is-active',
            'itemHoverClass': 'is--hovered',
            'hoverDelay': 0
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me._$list = $(me.opts.listSelector);
            if (!me._$list.length) {
                return;
            }
            me._$listItems = me._$list.find(me.opts.navigationItemSelector);
            me._$closeButton = me.$el.find(me.opts.closeButtonSelector);
            me._targetIndex = -1;
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this,
                $el;
            $.each(me._$listItems, function(i, el) {
                $el = $(el);
                if (window.PointerEvent && isTouchIE) {
                    me._on($el, 'pointerdown', $.proxy(me.onClickNavigationLink, me, i));
                } else if (window.MSPointerEvent && isTouchIE) {
                    me._on($el, 'MSPointerDown', $.proxy(me.onClickNavigationLink, me, i));
                } else {
                    me._on($el, 'touchstart', $.proxy(me.onTouchStart, me, i, $el));
                }
                me._on($el, 'mouseenter', $.proxy(me.onListItemEnter, me, i, $el));
                me._on($el, 'click', $.proxy(me.onClick, me, i, $el));
            });
            $body.on('mousemove touchstart', $.proxy(me.onMouseMove, me));
            me._on(me._$closeButton, 'click', $.proxy(me.onCloseButtonClick, me));
        },
        onTouchStart: function(index, $el) {
            this._shouldPrevent = !$el.hasClass(this.opts.itemHoverClass);
        },
        onClick: function(index, $el, event) {
            var me = this;
            if (me._shouldPrevent || !$el.hasClass(me.opts.itemHoverClass)) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        },
        onListItemEnter: function(index, $el, event) {
            var me = this,
                opts = me.opts;
            me.setMenuIndex(index);
            me._$list.find('.' + opts.itemHoverClass).removeClass(opts.itemHoverClass);
            $el.addClass(opts.itemHoverClass);
            if (!opts.hoverDelay || me._shouldPrevent) {
                me.onMouseEnter(event);
            } else if (!me.hoverDelayTimeoutId) {
                me.hoverDelayTimeoutId = window.setTimeout(function() {
                    this.onMouseEnter(event);
                }.bind(me), opts.hoverDelay);
            }
        },
        onClickNavigationLink: function(index) {
            var me = this;
            me._shouldPrevent = me._targetIndex !== index;
            me._targetIndex = index;
        },
        onMouseEnter: function(event) {
            event.preventDefault();
            this.openMenu();
        },
        onMouseMove: function(event) {
            var me = this,
                target = event.target,
                pluginEl = me.$el[0];
            if (pluginEl === target || $.contains(me.$el[0], target) || me._$listItems.has(target).length) {
                return;
            }
            if (me.hoverDelayTimeoutId) {
                window.clearTimeout(me.hoverDelayTimeoutId);
                delete me.hoverDelayTimeoutId;
            }
            me.closeMenu();
        },
        onCloseButtonClick: function(event) {
            var me = this;
            event.preventDefault();
            me.closeMenu();
            $.publish('plugin/swAdvancedMenu/onCloseWithButton', [me]);
        },
        setMenuIndex: function(index) {
            var me = this,
                menus = me.$el.find(me.opts.menuContainerSelector);
            menus.each(function(i, el) {
                $(el).toggleClass(me.opts.menuActiveClass, i === index);
            });
            $.publish('plugin/swAdvancedMenu/onSetMenuIndex', [me, index]);
        },
        openMenu: function() {
            var me = this;
            me.$el.show();
            $.publish('plugin/swAdvancedMenu/onOpenMenu', [me]);
        },
        closeMenu: function() {
            var me = this,
                opts = me.opts;
            me._$list.find('.' + opts.itemHoverClass).removeClass(opts.itemHoverClass);
            me.$el.hide();
            me._targetIndex = -1;
            $.publish('plugin/swAdvancedMenu/onCloseMenu', [me]);
        }
    });
})(jQuery, window);
$(function() {
    $('*[data-advanced-menu="true"]').advancedMenu();
});;
(function($, window) {
    $.plugin('swagCookiePermission', {
        defaults: {
            cookiePermissionUrl: null,
            cookieForwardTo: null,
            cookieMode: 0,
            cookieBarClass: '.cookie-bar',
            enableCookieButtonClass: '.cp-enable',
            disableCookieButtonClass: '.cp-disable',
            overlayClassName: 'cookie-overlay',
            cookieName: 'allowCookie'
        },
        allowCookie: false,
        overlayClass: null,
        $_document: null,
        $_cookieBar: null,
        $_enableCookiesButton: null,
        $_disableCookiesButton: null,
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$_document = $(document);
            me.$_cookieBar = $(me.opts.cookieBarClass);
            me.$_enableCookiesButton = $(me.opts.enableCookieButtonClass);
            me.$_disableCookiesButton = $(me.opts.disableCookieButtonClass);
            me.allowCookie = me.getCookie(me.opts.cookieName);
            me.overlayClass = '.' + me.opts.overlayClassName;
            me.subscribeEvents();
        },
        subscribeEvents: function() {
            var me = this;
            me.$_document.on('ajaxStop', $.proxy(me.onAjaxStop, me));
            me.$_enableCookiesButton.on('click', $.proxy(me.onEnableClick, me));
            me.$_disableCookiesButton.on('click', $.proxy(me.onDisableClick, me));
        },
        setCookie: function(key, value) {
            var me = this,
                expires = new Date();
            expires.setTime(expires.getTime() + (24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
        },
        getCookie: function(name) {
            var nameEQ = name + "=",
                ca = document.cookie.split(';'),
                i = 0,
                caLength = ca.length;
            for (; i < caLength; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        },
        onAjaxStop: function() {
            var me = this;
            if (me.allowCookie == 1) {
                me.$_cookieBar.remove();
                return
            }
            me.$_document.off('ajaxStop');
            $.ajax({
                url: me.opts.cookiePermissionUrl,
                dataType: 'json'
            }).done(function(result) {
                if (result.isAffectedUser) {
                    me.$_cookieBar.show();
                    if (me.opts.cookieMode != 1 && me.isForwarded() === false) {
                        $('<div>', {
                            class: me.opts.overlayClassName
                        }).appendTo($('body'));
                    }
                } else {
                    me.$_cookieBar.remove();
                }
            });
        },
        onEnableClick: function() {
            var me = this;
            me.setCookie(me.opts.cookieName, 1);
            me.$_cookieBar.slideToggle("slow", function() {
                me.$_cookieBar.remove();
                $(me.overlayClass).remove();
            });
        },
        onDisableClick: function() {
            var me = this,
                loc = window.location;
            if (me.opts.cookieForwardTo == null) {
                return;
            }
            if (me.opts.cookieForwardTo.search('http://') > -1 || me.opts.cookieForwardTo.search('https://') > -1) {
                window.location = me.opts.cookieForwardTo;
            } else {
                window.location = loc.protocol + "//" + loc.hostname + "/" + me.opts.cookieForwardTo;
            }
        },
        isForwarded: function() {
            var me = this;
            if (me.opts.cookieForwardTo == window.location.href || me.opts.cookieForwardTo == window.location.pathname) {
                return true;
            }
            return false;
        }
    });
    $(function() {
        StateManager.addPlugin('.swag-cookie-permission', 'swagCookiePermission');
    });
})(jQuery, window);;
(function($, window, document, undefined) {
    "use strict";
    var $body = $('body'),
        $document = $(document);
    $.fn.extend({
        setView: function(viewState) {
            return this.each(function() {
                $(this).attr('data-view', viewState);
            });
        },
        clearView: function() {
            return this.each(function() {
                $(this).removeAttr('data-view');
            });
        }
    });
    $.plugin('swQuickView', {
        alias: 'quickView',
        defaults: {
            ajaxUrl: null,
            productSelector: '[data-ordernumber]',
            productLinkSelector: '.product--box a, .banner--mapping-link',
            quickViewCls: 'quick-view',
            viewCls: 'quick-view--view',
            overlayCls: 'quick-view--overlay',
            activeCls: 'is--active',
            mainViewState: 'main',
            prevViewState: 'prev',
            nextViewState: 'next',
            loadingIndicator: '<span class="quick-view--loader"></span>'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            if (me.opts.ajaxUrl == null) {
                return;
            }
            me.$quickView = $('<div>', {
                'class': me.opts.quickViewCls
            });
            me.$overlay = $('<div>', {
                'class': me.opts.overlayCls
            });
            me.viewSelector = '.' + me.opts.viewCls;
            me.overlaySelector = '.' + me.opts.overlayCls;
            me.trackProducts();
            me.$quickView.appendTo($body);
            me.initImageSlider();
            me.initWishList();
            me.registerEvents();
        },
        initImageSlider: function() {
            window.StateManager.addPlugin('*[data-quickview-slider]', 'swImageSlider', {
                thumbnails: false
            }, ['xs', 's', 'm', 'l']);
            window.StateManager.addPlugin('*[data-quickview-slider]', 'swImageSlider', {
                thumbnails: true
            }, ['xl']);
        },
        initWishList: function() {
            var me = this;
            me.$quickView.swAjaxWishlist({
                'iconCls': 'icon--check is--large'
            });
        },
        registerEvents: function() {
            var me = this;
            $.subscribe('plugin/swProductSlider/onLoadItemsSuccess', $.proxy(me.trackProducts, me));
            me.$el.on(me.getEventName('click'), me.opts.productLinkSelector, $.proxy(me.onProductLink, me));
            me._on($document, 'keydown', $.proxy(me.onKeyPress, me));
            me.$quickView.on(me.getEventName('click'), '[data-view="' + me.opts.nextViewState + '"]', $.proxy(me.showNext, me));
            me.$quickView.on(me.getEventName('click'), '[data-view="' + me.opts.prevViewState + '"]', $.proxy(me.showPrev, me));
            me.$quickView.on(me.getEventName('click'), me.overlaySelector, $.proxy(me.hideQuickView, me));
            me.$quickView.on(me.getEventName('touchstart'), me.overlaySelector, $.proxy(me.hideQuickView, me));
            me.$quickView.on(me.getEventName('touchmove'), me.overlaySelector, function(event) {
                event.preventDefault();
                event.stopPropagation();
                event.cancelBubble = true;
            });
        },
        trackProducts: function() {
            var me = this;
            me.$quickView.empty();
            me.$overlay.appendTo(me.$quickView);
            me.$products = me.$el.find(me.opts.productSelector);
            me.products = {};
            me.activeProduct = false;
            $.each(me.$products, function(index, el) {
                if (!$(el).is('[data-ordernumber]')) {
                    return;
                }
                var $el = $(el),
                    $view = $('<div>'),
                    number = $el.attr('data-ordernumber');
                $view.addClass(me.opts.viewCls).addClass('view--' + index).addClass('product--' + number).appendTo(me.$quickView);
                me.products[index] = {
                    '$el': $el,
                    '$view': $view,
                    'index': index,
                    'number': number,
                    'loaded': false
                }
            });
            $.publish('plugin/swQuickview/onTrackProducts', [me]);
        },
        loadProduct: function(index) {
            var me = this;
            if (me.products[index] == undefined) {
                return;
            }
            var product = me.products[index],
                orderNumber = product.number;
            product.$view.html(me.opts.loadingIndicator);
            $.ajax({
                url: me.opts.ajaxUrl + '/sOrderNumber/' + orderNumber,
                method: 'GET',
                success: function(response) {
                    if (!response.length) {
                        me.hideQuickView();
                        return;
                    }
                    product.loaded = true;
                    product.$view.html(response);
                    window.StateManager.updatePlugin('*[data-quickview-slider]', 'swImageSlider');
                    product.$view.find('[data-quickview-gallery]').swImageGallery();
                    $.publish('plugin/swQuickview/onProductLoaded', [me]);
                }
            });
            $.publish('plugin/swQuickview/onLoadProduct', [me]);
        },
        onProductLink: function(event) {
            var me = this,
                $currentTarget = $(event.currentTarget),
                $product = ($currentTarget.is('[data-ordernumber]')) ? $currentTarget : $currentTarget.parents(me.opts.productSelector);
            if (!$product.length) {
                return;
            }
            event.preventDefault();
            me.showQuickView($product);
            $.publish('plugin/swQuickview/onProductLink', [me]);
        },
        onKeyPress: function(event) {
            var me = this;
            if (me.activeProduct === false) {
                return;
            }
            if (event.keyCode == 37) me.showPrev();
            if (event.keyCode == 39) me.showNext();
            $.publish('plugin/swQuickview/onKeyPress', [me]);
        },
        showQuickView: function($product) {
            if (!$product.is('[data-ordernumber]')) {
                return;
            }
            var me = this,
                index = me.$products.index($product),
                product = me.products[index];
            if (!product.loaded) {
                me.loadProduct(index);
            }
            me.activeProduct = index;
            product.$view.nextAll(me.viewSelector).setView('right');
            product.$view.prevAll(me.viewSelector).setView('left');
            me.$quickView.addClass(me.opts.activeCls);
            setTimeout(function() {
                product.$view.setView(me.opts.mainViewState);
                product.$view.prev(me.viewSelector).setView(me.opts.prevViewState);
                product.$view.next(me.viewSelector).setView(me.opts.nextViewState);
            }, 100);
            $.publish('plugin/swQuickview/onShowQuickView', [me]);
        },
        hideQuickView: function(event) {
            var me = this;
            event.preventDefault();
            me.$quickView.removeClass(me.opts.activeCls);
            $.each(me.products, function(index, product) {
                product.$view.clearView();
            });
            me.activeProduct = false;
            $.publish('plugin/swQuickview/onHideQuickView', [me]);
        },
        showNext: function() {
            var me = this,
                product = me.products[me.activeProduct],
                index = product.index,
                nextIndex = index + 1;
            if (!me.products[nextIndex].loaded) {
                me.loadProduct(nextIndex);
            }
            product.$view.setView(me.opts.prevViewState);
            product.$view.prev(me.viewSelector).setView('left');
            product.$view.next(me.viewSelector).setView(me.opts.mainViewState);
            product.$view.next(me.viewSelector).next(me.viewSelector).setView(me.opts.nextViewState);
            me.activeProduct = nextIndex;
            $.publish('plugin/swQuickview/onShowNext', [me]);
        },
        showPrev: function() {
            var me = this,
                product = me.products[me.activeProduct],
                index = product.index,
                prevIndex = index - 1;
            if (!me.products[prevIndex].loaded) {
                me.loadProduct(prevIndex);
            }
            product.$view.setView(me.opts.nextViewState);
            product.$view.next(me.viewSelector).setView('right');
            product.$view.prev(me.viewSelector).setView(me.opts.mainViewState);
            product.$view.prev(me.viewSelector).prev(me.viewSelector).setView(me.opts.prevViewState);
            me.activeProduct = prevIndex;
            $.publish('plugin/swQuickview/onShowPrev', [me]);
        },
        destroy: function() {
            var me = this;
            me.$el.off(me.getEventName('click'), me.opts.productLinkSelector);
            me.$quickView.off(me.getEventName('click'), '[data-view="' + me.opts.nextViewState + '"]');
            me.$quickView.off(me.getEventName('click'), '[data-view="' + me.opts.prevViewState + '"]');
            me.$quickView.remove();
            me._destroy();
        }
    });
})(jQuery, window, document);;
(function($, window, document, undefined) {
    "use strict";
    $.plugin('swSideView', {
        alias: 'sideView',
        defaults: {
            autoScroll: false,
            bannerSelector: '.side-view--banner',
            viewSelector: '.side-view--view',
            triggerSelector: '.side-view--trigger',
            closerSelector: '.side-view--closer',
            sliderSelector: '.product-slider',
            activeCls: 'is--active'
        },
        init: function() {
            var me = this;
            me.applyDataAttributes();
            me.$banner = me.$el.find(me.opts.bannerSelector);
            me.$view = me.$el.find(me.opts.viewSelector);
            me.$trigger = me.$el.find(me.opts.triggerSelector);
            me.$closer = me.$el.find(me.opts.closerSelector);
            me.$slider = me.$el.find(me.opts.sliderSelector);
            me.slider = me.$slider.data('plugin_swProductSlider');
            me.registerEvents();
        },
        registerEvents: function() {
            var me = this;
            me._on(me.$banner, 'click', $.proxy(me.onClick, me));
            me._on(me.$trigger, 'click', $.proxy(me.onClick, me));
            me._on(me.$closer, 'click', $.proxy(me.onClick, me));
        },
        onClick: function(event) {
            var me = this;
            event.preventDefault();
            me.slider.update();
            me.$view.toggleClass(me.opts.activeCls);
            if (me.opts.autoScroll && me.$view.hasClass(me.opts.activeCls)) {
                setTimeout(function() {
                    me.slider.autoScroll();
                }, 800);
            } else {
                me.slider.stopAutoScroll();
            }
            $.publish('plugin/swSideView/onClick', [me]);
        },
        destroy: function() {
            var me = this;
            me._destroy();
        }
    });
})(jQuery, window, document);;
(function($, window, document, StateManager, undefined) {
    'use strict';
    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $body = $('body'),
        transitionProperty = StateManager.getVendorProperty('transition', true),
        transformProperty = StateManager.getVendorProperty('transform', true),
        mouseWheelEvent = (/Firefox/i.test(navigator.userAgent)) ? 'MozMousePixelScroll' : 'mousewheel';
    $.fn.extend({
        hasParent: function(selector) {
            return ($(this[0]).parents(selector).length > 0);
        }
    });

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function matrixToArray(transformationString) {
        return transformationString.match(/(-?[0-9\.]+)/g);
    }

    function delay(callback, delay) {
        var me = this,
            time = delay || 1;
        window.setTimeout($.proxy(callback, me), time);
    }
    $.plugin('swStoryTelling', {
        alias: 'storyTelling',
        defaults: {
            rowsPerSection: 4,
            pageWrapSelector: '.page-wrap',
            elementSelector: '.emotion--element',
            sectionNavLinkSelector: '.section-nav--link',
            horizontalSliderSelector: '[data-orientation="horizontal"], .product-slider--content, .manufacturer--slider',
            verticalSliderSelector: '[data-orientation="vertical"], [data-view="main"]',
            storyTellingCls: 'is--storytelling',
            hardwareAccelerationCls: 'is--hardware-accelerated',
            prevLinkCls: 'section-nav--link link--prev',
            nextLinkCls: 'section-nav--link link--next',
            startLinkCls: 'section-nav--link link--start',
            sectionLinkCls: 'section-nav--link link--section',
            iconPrev: '<i class="icon--arrow-up"></i>',
            iconNext: '<i class="icon--arrow-down"></i>',
            iconStart: '<i class="icon--house"></i>',
            iconSection: '<i class="icon--record"></i>',
            urlHashPrefix: '#emotion--',
            swipeTolerance: 10,
            animationSpeed: 800,
            transition: 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
        },
        init: function() {
            var me = this,
                opts = me.opts;
            me.applyDataAttributes();
            me.$pageWrap = $(opts.pageWrapSelector);
            me.$elements = me.$el.find(opts.elementSelector);
            me.$bannerElements = me.$el.find('[data-coverImage="true"]');
            me.$videoElements = me.$el.find('.emotion--video');
            me.$header = $('.header-main, .navigation-main');
            me.$footer = $('.footer-main');
            me.$advancedMenu = $('.advanced-menu');
            me.bufferedCall = false;
            me.isAnimating = false;
            me.isOffCanvas = false;
            me.isQuickView = false;
            me.isAdvancedMenu = false;
            me.touchMove = false;
            me.activeIndex = 0;
            me.scrollTop = 0;
            me.clientY = 0;
            me.initStorytelling();
            me.checkUrlHash();
            me.registerEvents();
            $.publish('plugin/swStoryTelling/onInit', [me]);
        },
        update: function() {
            var me = this;
            me.resetWindowScroll();
            me.viewportHeight = window.innerHeight;
            $html.height(me.viewportHeight);
            $body.height(me.viewportHeight);
            me.trackElements();
            me.scrollTop = me.getScrollTop();
            me.offsetTop = me.$el.offset().top + me.scrollTop;
            me.offsetBottom = me.$pageWrap.height() - me.viewportHeight;
            me.createNavigation();
            me.$bannerElements.trigger('emotionResize');
            me.$videoElements.trigger('emotionResize');
            me.scrollTo(me.activeIndex, true);
            $.publish('plugin/swStoryTelling/onUpdate', [me]);
        },
        initStorytelling: function() {
            var me = this;
            me.resetWindowScroll();
            me.viewportHeight = window.innerHeight;
            $html.height(me.viewportHeight);
            $body.height(me.viewportHeight);
            $html.addClass(me.opts.storyTellingCls);
            $body.addClass(me.opts.storyTellingCls).addClass(me.opts.hardwareAccelerationCls);
            me.$pageWrap.css(transformProperty, 'translateY(0)');
            me.$pageWrap.css(transitionProperty, me.opts.transition);
            me.trackElements();
            me.scrollTop = me.getScrollTop();
            me.offsetTop = me.$el.offset().top + me.scrollTop;
            me.offsetBottom = me.$pageWrap.height() - me.viewportHeight;
            me.createNavigation();
            me.$bannerElements.trigger('emotionResize');
            me.$videoElements.trigger('emotionResize');
            StateManager.updatePlugin('*[data-product-slider="true"]', 'swProductSlider');
            StateManager.updatePlugin('*[data-image-slider="true"]', 'swImageSlider');
            window.picturefill();
            $.publish('plugin/swStoryTelling/onInitStorytelling', [me]);
        },
        trackElements: function() {
            var me = this,
                state = window.StateManager.getCurrentState(),
                $sizer = me.$el.find('.emotion--sizer-' + state),
                clsPrefix = '-' + state,
                i = 1;
            if ($sizer.length <= 0) {
                $sizer = me.$el.find('.emotion--sizer');
                clsPrefix = '';
            }
            me.rows = ~~$sizer.attr('data-rows');
            me.sections = Math.ceil(me.rows / me.opts.rowsPerSection);
            me.rows = me.sections * me.opts.rowsPerSection;
            me.emotionHeight = me.viewportHeight * me.sections;
            $sizer.height(me.emotionHeight);
            for (i; i <= me.rows; i++) {
                var height = 100 / me.rows * i,
                    top = 100 / me.rows * (i - 1);
                me.$elements.filter('.row' + clsPrefix + '-' + i).css('height', height + '%');
                me.$elements.filter('.start-row' + clsPrefix + '-' + i).css('top', top + '%');
            }
            $.publish('plugin/swStoryTelling/onTrackElements', [me]);
        },
        registerEvents: function() {
            var me = this;
            $body.on(me.getEventName('click'), me.opts.sectionNavLinkSelector, $.proxy(me.onLinkClick, me));
            me._on(me.$pageWrap, 'touchstart', $.proxy(me.onTouchStart, me));
            me._on(me.$pageWrap, 'touchmove', $.proxy(me.onTouchMove, me));
            me._on(me.$pageWrap, 'touchend', $.proxy(me.onTouchEnd, me));
            me._on($document, 'keydown', $.proxy(me.onKeyPress, me));
            me._on($document, 'mousedown', $.proxy(me.onMouseDown, me));
            me._on($window, 'resize', $.proxy(me.buffer, me, me.update, 800));
            if (document.addEventListener) {
                me.mouseWheelListener = $.proxy(me.onMouseWheel, me);
                document.addEventListener(mouseWheelEvent, me.mouseWheelListener);
            }
            $.subscribe(me.getEventName('plugin/swAdvancedMenu/onOpenMenu'), $.proxy(me.onOpenAdvancedMenu, me));
            $.subscribe(me.getEventName('plugin/swAdvancedMenu/onCloseMenu'), $.proxy(me.onCloseAdvancedMenu, me));
            $.subscribe(me.getEventName('plugin/swAdvancedMenu/onCloseWithButton'), $.proxy(me.onCloseAdvancedMenu, me));
            $.subscribe(me.getEventName('plugin/swOffcanvasMenu/onBeforeOpenMenu'), $.proxy(me.onOpenOffCanvas, me));
            $.subscribe(me.getEventName('plugin/swOffcanvasMenu/onCloseMenu'), $.proxy(me.onCloseOffCanvas, me));
            $.subscribe(me.getEventName('plugin/swQuickview/onShowQuickView'), $.proxy(me.onOpenQuickView, me));
            $.subscribe(me.getEventName('plugin/swQuickview/onHideQuickView'), $.proxy(me.onCloseQuickView, me));
            $.subscribe(me.getEventName('plugin/swCollapsePanel/onOpen'), $.proxy(me.onFooterPanel, me));
            $.subscribe(me.getEventName('plugin/swCollapsePanel/onClose'), $.proxy(me.onFooterPanel, me));
            $.publish('plugin/swStoryTelling/onRegisterEvents', [me]);
        },
        onOpenOffCanvas: function(event, offCanvas) {
            var me = this;
            me.isOffCanvas = true;
            $body.removeClass(me.opts.hardwareAccelerationCls);
            me.$pageWrap.removeAttr('style').css('height', me.viewportHeight);
            offCanvas.$offCanvas.css('position', 'absolute');
            delay(function() {
                offCanvas.$offCanvas.css('position', 'fixed');
            }, 10);
        },
        onCloseOffCanvas: function() {
            var me = this;
            me.isOffCanvas = false;
            $body.addClass(me.opts.hardwareAccelerationCls);
            me.$pageWrap.removeAttr('style').css(transformProperty, 'translateY(0)');
        },
        onFooterPanel: function() {
            var me = this;
            me.scrollTop = me.getScrollTop();
            me.offsetBottom = me.$pageWrap.height() - me.viewportHeight;
            me.scroll(me.offsetBottom);
        },
        onOpenQuickView: function() {
            var me = this;
            me.isQuickView = true;
            me.hideNavigation();
        },
        onCloseQuickView: function() {
            var me = this;
            me.isQuickView = false;
            me.showNavigation();
        },
        onTouchStart: function(event) {
            var me = this;
            if (me.isOffCanvas) {
                return;
            }
            me.$pageWrap.css(transitionProperty, 'none');
            me.scrollTop = me.getScrollTop();
            me.clientY = event.targetTouches[0].clientY;
            me.clientX = event.targetTouches[0].clientX;
        },
        onTouchMove: function(event) {
            var me = this;
            if (me.isOffCanvas) {
                return;
            }
            if (me.isQuickView) {
                event.preventDefault();
                return;
            }
            var $target = $(event.target),
                clientY = event.targetTouches[0].clientY,
                clientX = event.targetTouches[0].clientX,
                deltaY = me.clientY - clientY,
                deltaX = me.clientX - clientX,
                newScrollTop = clamp(me.scrollTop + deltaY, 0, me.offsetBottom);
            if (me.touchMove === false) {
                me.touchMove = (Math.abs(deltaX) > Math.abs(deltaY) && !me.touchMove) ? 'X' : 'Y';
            }
            if ($target.hasParent(me.opts.horizontalSliderSelector) && me.touchMove !== 'Y') {
                return;
            }
            if ($target.hasParent(me.opts.verticalSliderSelector) && me.touchMove !== 'X') {
                return;
            }
            if ($target.parents('.html--content').height() != null || $target[0].className === "html--content") {
                var scrollMax = $target.parents('.emotion--html')[0].scrollHeight;
                var scrollBottomOffset = $target.parents('.emotion--html').scrollTop() + $target.parents('.emotion--html').height();
                if (scrollBottomOffset === scrollMax && deltaY > 0) {
                    event.preventDefault();
                    if (me.touchMove === 'Y') {
                        me.transform(me.$pageWrap, 'translateY(' + -newScrollTop + 'px)');
                    }
                } else if (scrollBottomOffset === scrollMax && deltaY < 0) {
                    return;
                } else if (scrollBottomOffset === $target.parents('.emotion--html').height() && deltaY < 0) {
                    if (me.touchMove === 'Y') {
                        me.transform(me.$pageWrap, 'translateY(' + -newScrollTop + 'px)');
                    }
                } else {
                    return;
                }
            }
            event.preventDefault();
            if (me.touchMove === 'Y') {
                me.transform(me.$pageWrap, 'translateY(' + -newScrollTop + 'px)');
            }
        },
        onTouchEnd: function() {
            var me = this,
                touchMove = me.touchMove;
            me.touchMove = false;
            if (touchMove === 'X' || me.isQuickView || me.isOffCanvas) {
                return;
            }
            var scrollTop = me.getScrollTop(),
                deltaY = Math.abs(scrollTop - me.scrollTop),
                method = (scrollTop < me.scrollTop) ? 'scrollPrev' : 'scrollNext';
            (deltaY > me.opts.swipeTolerance) ? me[method](): me.scrollTo(me.activeIndex);
        },
        onKeyPress: function(event) {
            var me = this,
                prev = [33, 38],
                next = [34, 40];
            if (me.isQuickView || me.isOffCanvas) {
                return;
            }
            if (prev.indexOf(event.keyCode) !== -1) {
                me.scrollPrev();
                event.preventDefault();
            } else if (next.indexOf(event.keyCode) !== -1) {
                me.scrollNext();
                event.preventDefault();
            }
        },
        onMouseDown: function(event) {
            if (event.button === 1) {
                event.preventDefault();
            }
        },
        onMouseWheel: function(event) {
            var me = this,
                delta = (event.wheelDelta) ? event.wheelDelta / -120 : event.detail,
                direction = (delta < 0) ? -1 : +1;
            event.preventDefault();
            if (me.isAnimating || me.isQuickView || me.isOffCanvas || Math.abs(delta) < 0.7) {
                return;
            }
            if (me.isAdvancedMenu && me.viewportHeight < me.$advancedMenu.outerHeight()) {
                if (mouseWheelEvent === 'MozMousePixelScroll') {
                    window.scrollBy(0, event.detail);
                } else {
                    window.scrollBy(0, event.deltaY);
                }
                return;
            }
            me.scrollTo(me.activeIndex + direction);
        },
        onLinkClick: function(event) {
            var me = this,
                $link = $(event.currentTarget),
                target = $link.attr('href'),
                index = me.activeIndex;
            event.preventDefault();
            if (target == '#start') index = 0;
            if (target == '#prev') index = me.activeIndex - 1;
            if (target == '#next') index = me.activeIndex + 1;
            if (target.indexOf('#section--') != -1) index = parseInt(target.split('--')[1], 10);
            me.scrollTo(index, Math.abs(me.activeIndex - index) > 1);
        },
        setActiveLink: function(index) {
            var me = this;
            me.$navLinks.removeClass('is--active');
            if (index <= 0) {
                me.$navLinks.filter('.link--start').addClass('is--active');
                return;
            }
            me.$navLinks.filter('.link--' + index).addClass('is--active');
            $.publish('plugin/swStoryTelling/onSetActiveLink', [me, index]);
        },
        checkUrlHash: function() {
            var me = this,
                hash = window.location.hash.replace(me.opts.urlHashPrefix, '');
            if (!hash.length || hash === 'start') {
                me.scrollToTop(true);
                return;
            }
            if (hash === 'bottom') {
                me.scrollToBottom(true);
                return;
            }
            hash = parseInt(hash, 10);
            if (window.isFinite(hash)) me.scrollTo(hash, true);
            $.publish('plugin/swStoryTelling/onCheckUrlHash', [me, hash]);
        },
        setUrlHash: function(index) {
            var me = this;
            window.location.hash = me.opts.urlHashPrefix + index;
            $.publish('plugin/swStoryTelling/onSetUrlHash', [me, index]);
        },
        resetWindowScroll: function() {
            $('html, body').scrollTop(0);
            $window.scrollTop(0);
        },
        getScrollTop: function() {
            var me = this,
                matrix = matrixToArray(me.getTransformation(me.$pageWrap)) || [0, 0, 0, 0, 0, 0];
            return Math.abs(parseInt(matrix[5], 10));
        },
        scrollNext: function() {
            var me = this;
            me.scrollTo(me.activeIndex + 1);
            $.publish('plugin/swStoryTelling/onScrollNext', [me]);
        },
        scrollPrev: function() {
            var me = this;
            me.scrollTo(me.activeIndex - 1);
            $.publish('plugin/swStoryTelling/onScrollPrev', [me]);
        },
        scrollToTop: function(noAnimation) {
            var me = this;
            me.scrollTo(0, noAnimation);
            $.publish('plugin/swStoryTelling/onScrollTop', [me]);
        },
        scrollToBottom: function(noAnimation) {
            var me = this;
            me.scrollTo(me.sections, noAnimation);
            $.publish('plugin/swStoryTelling/onScrollBottom', [me]);
        },
        scrollTo: function(index, noAnimation) {
            var me = this,
                noAnim = noAnimation || false,
                startIndex = (index <= 0),
                endIndex = (index > me.sections),
                i = (startIndex) ? 0 : (endIndex) ? me.sections + 1 : index,
                scroll = (startIndex) ? 0 : (endIndex) ? me.offsetBottom : me.getSectionOffset(index),
                hash = (startIndex) ? 'start' : (endIndex) ? 'bottom' : index;
            me.activeIndex = i;
            me.scroll(scroll, noAnim);
            me.setActiveLink(i);
            me.setUrlHash(hash);
            (noAnim) ? me.setVisibleContent(i): delay($.proxy(me.setVisibleContent, me, i), 100);
            $.publish('plugin/swStoryTelling/onScrollTo', [me, index, noAnimation]);
        },
        scroll: function(position, noAnimation) {
            var me = this,
                scroll = position || 0,
                scrollTop = me.getScrollTop(),
                noAnim = noAnimation || false,
                transition = (noAnim) ? 'none' : me.opts.transition;
            if (scroll === scrollTop) {
                return;
            }
            me.$pageWrap.css(transitionProperty, transition);
            delay(function() {
                me.isAnimating = true;
                me.transform(me.$pageWrap, 'translateY(' + -scroll + 'px)');
            });
            delay(function() {
                me.isAnimating = false;
            }, me.opts.animationSpeed);
            $.publish('plugin/swStoryTelling/onScroll', [me, position, noAnimation]);
        },
        getSectionOffset: function(sectionIndex) {
            var me = this;
            return me.offsetTop + ((sectionIndex - 1) * me.viewportHeight);
        },
        setVisibleContent: function(index) {
            var me = this,
                state = window.StateManager.getCurrentState(),
                section, i = 1,
                elements, isVisible;
            for (i; i <= me.rows; i++) {
                section = Math.ceil(i / me.opts.rowsPerSection);
                elements = me.$elements.filter('.start-row-' + state + '-' + i);
                isVisible = section >= me.activeIndex - 1 && section <= me.activeIndex + 1;
                elements[isVisible ? 'removeClass' : 'addClass']('is--invisible');
            }
            $.publish('plugin/swStoryTelling/onSetVisibleContent', [me, index]);
        },
        onOpenAdvancedMenu: function() {
            var me = this;
            me.isAdvancedMenu = true;
            me.hideNavigation();
        },
        onCloseAdvancedMenu: function() {
            var me = this;
            if (me.isAdvancedMenu) {
                me.isAdvancedMenu = false;
                me.resetWindowScroll();
                me.showNavigation();
            }
        },
        showNavigation: function() {
            var me = this;
            me.$sectionNav.show();
            $.publish('plugin/swStoryTelling/onShowNavigation', [me]);
        },
        hideNavigation: function() {
            var me = this;
            me.$sectionNav.hide();
            $.publish('plugin/swStoryTelling/onHideNavigation', [me]);
        },
        createNavigation: function() {
            var me = this,
                i = 1;
            if (me.$sectionNav) {
                me.$sectionNav.remove();
            }
            me.$sectionNav = $('<div>', {
                'class': 'emotion--section-nav'
            });
            $('<a>', {
                'href': '#prev',
                'class': me.opts.prevLinkCls,
                'html': me.opts.iconPrev
            }).appendTo(me.$sectionNav);
            $('<a>', {
                'href': '#start',
                'class': me.opts.startLinkCls,
                'html': me.opts.iconStart
            }).appendTo(me.$sectionNav);
            for (i; i <= me.sections; i++) {
                $('<a>', {
                    'href': '#section--' + i,
                    'class': me.opts.sectionLinkCls + ' link--' + i,
                    'html': me.opts.iconSection
                }).appendTo(me.$sectionNav);
            }
            $('<a>', {
                'href': '#next',
                'class': me.opts.nextLinkCls,
                'html': '<i class="icon--arrow-down"></i>'
            }).appendTo(me.$sectionNav);
            me.$sectionNav.appendTo($body);
            me.$navLinks = $(me.opts.sectionNavLinkSelector);
            $.publish('plugin/swStoryTelling/onCreateNavigation', [me]);
        },
        transform: function($el, transformation) {
            $el.css(transformProperty, transformation);
        },
        getTransformation: function($el) {
            return $el.css(transformProperty);
        },
        buffer: function(call, bufferTime) {
            var me = this;
            window.clearTimeout(me.bufferedCall);
            me.bufferedCall = window.setTimeout($.proxy(call, me), bufferTime)
        },
        destroy: function() {
            var me = this;
            window.location.hash = '';
            window.clearTimeout(me.bufferedCall);
            me.$header.removeClass('is--invisible');
            me.$footer.removeClass('is--invisible');
            $body.removeClass(me.opts.storyTellingCls).removeClass(me.opts.hardwareAccelerationCls).removeAttr('style');
            $html.removeClass(me.opts.storyTellingCls).removeAttr('style');
            me.$pageWrap.removeAttr('style');
            if (document.addEventListener) document.removeEventListener(mouseWheelEvent, me.mouseWheelListener);
            $.unsubscribe(me.getEventName('plugin/swAdvancedMenu/onOpenMenu'));
            $.unsubscribe(me.getEventName('plugin/swAdvancedMenu/onCloseMenu'));
            $.unsubscribe(me.getEventName('plugin/swAdvancedMenu/onCloseWithButton'));
            $.unsubscribe(me.getEventName('plugin/swOffcanvasMenu/onBeforeOpenMenu'));
            $.unsubscribe(me.getEventName('plugin/swOffcanvasMenu/onCloseMenu'));
            $.unsubscribe(me.getEventName('plugin/swQuickview/onShowQuickView'));
            $.unsubscribe(me.getEventName('plugin/swQuickview/onHideQuickView'));
            $.unsubscribe(me.getEventName('plugin/swCollapsePanel/onOpen'));
            $.unsubscribe(me.getEventName('plugin/swCollapsePanel/onClose'));
            me.$sectionNav.remove();
            me._destroy();
            $.publish('plugin/swStoryTelling/onDestroy', [me]);
        }
    });
})(jQuery, window, document, StateManager);;
(function($, window, StateManager) {
    $.subscribe('plugin/swEmotion/onInitElements', function(event, emotion) {
        if (emotion.$el.is('[data-quickview="true"]')) {
            emotion.$el.swQuickView();
        }
        $('.emotion--side-view').swSideView();
    });
    $.subscribe('plugin/swEmotionLoader/onInitEmotion', function(event, wrapper) {
        wrapper.$el.find('[data-storytelling="true"]').swStoryTelling();
    });
    $.subscribe('plugin/swEmotionLoader/onShowEmotion', function(event, wrapper) {
        if (wrapper.$emotion.length) {
            window.setTimeout(function() {
                wrapper.$el.find('[data-storytelling="true"]').swStoryTelling();
            }, 10);
        }
    });
    $.subscribe('plugin/swEmotionLoader/onHideEmotion', function(event, wrapper) {
        wrapper.$el.find('[data-storytelling="true"]').each(function(index, el) {
            var storytelling = $(el).data('plugin_swStoryTelling');
            if (storytelling !== undefined) {
                storytelling.destroy();
            }
        });
    });
})(jQuery, window, StateManager);;
(function($, window, document, undefined) {
    "use strict";
    var pluginName = 'swCover',
        defaults = {
            srcSet: null,
            position: 'center center',
            useImageRatio: false,
            canvasCls: 'cover--canvas',
            parentSelector: '.bg--image',
            largestScreenSize: 5160
        },
        $window = $(window);

    function Plugin(element, options) {
        var me = this;
        me.el = element;
        me.$el = $(element);
        me.opts = $.extend({}, defaults, options);
        me.init();
        return me;
    }
    Plugin.prototype.init = function() {
        var me = this;
        me.applyDataAttributes();
        if (!me.opts.srcSet.length) {
            return false;
        }
        me.sources = {};
        me.currentSrc = null;
        me.image = new Image();
        me.image.onload = $.proxy(me.onImageLoad, me);
        me.createCanvas();
        me.createSources(me.opts.srcSet);
        me.registerEvents();
        me.render();
    };
    Plugin.prototype.applyDataAttributes = function() {
        var me = this,
            attr;
        $.each(me.opts, function(key) {
            attr = me.$el.attr('data-' + key);
            if (typeof attr === 'undefined') {
                return true;
            }
            me.opts[key] = attr;
        });
    };
    Plugin.prototype.registerEvents = function() {
        var me = this;
        $window.on('resize.' + pluginName, $.proxy(me.render, me));
        $.subscribe('plugin/swEmotionLoader/onShowEmotion', $.proxy(me.render, me));
    };
    Plugin.prototype.onImageLoad = function() {
        var me = this;
        if (me.opts.useImageRatio) {
            me.setElementSizeByRatio();
        }
        me.drawImage();
    };
    Plugin.prototype.createSources = function(sourceSet) {
        var me = this,
            srcSet = sourceSet || me.opts.srcSet,
            sources = srcSet.split(', ');
        $.each(sources, function(index, value) {
            var src = value.split(' '),
                key = (src[1] === 'base') ? 'base' : parseInt(src[1]),
                type = (src[2] && src[2] === '2x') ? '2x' : 'src';
            if (!me.sources[key]) {
                me.sources[key] = {};
            }
            me.sources[key][type] = src[0];
        });
        return me.sources;
    };
    Plugin.prototype.createCanvas = function() {
        var me = this;
        me.canvas = document.createElement('canvas');
        me.ctx = me.canvas.getContext("2d");
        me.$canvas = $(me.canvas);
        me.$canvas.addClass(me.opts.canvasCls).appendTo(me.$el);
    };
    Plugin.prototype.render = function() {
        var me = this,
            currentSource = me.getCurrentSource();
        if (me.currentSrc !== currentSource) {
            me.image.src = me.currentSrc = currentSource;
        } else {
            me.onImageLoad();
        }
    };
    Plugin.prototype.drawImage = function() {
        var me = this,
            deviceRatio = me.getDevicePixelRatio() / me.getBackingStoreRatio(),
            elWidth = me.$el.innerWidth(),
            elHeight = me.$el.innerHeight(),
            elRatio = elWidth / elHeight,
            imageRatio = me.image.width / me.image.height,
            orientation = imageRatio > elRatio,
            coverWidth = orientation ? elHeight * imageRatio : elWidth,
            coverHeight = orientation ? elHeight : elWidth / imageRatio,
            position = me.getPosition(elWidth, elHeight, coverWidth, coverHeight);
        me.canvas.width = elWidth * deviceRatio;
        me.canvas.height = elHeight * deviceRatio;
        me.canvas.style.width = elWidth + 'px';
        me.canvas.style.height = elHeight + 'px';
        me.ctx.scale(deviceRatio, deviceRatio);
        me.ctx.drawImage(me.image, 0, 0, me.image.width, me.image.height, position.x, position.y, coverWidth, coverHeight);
    };
    Plugin.prototype.getPosition = function(elWidth, elHeight, coverWidth, coverHeight) {
        var me = this,
            position = me.opts.position.split(' '),
            posX = position[1],
            posY = position[0],
            x, y;
        x = (posX === 'right') ? elWidth - coverWidth : (posX === 'center') ? (elWidth / 2) - (coverWidth / 2) : 0;
        y = (posY === 'bottom') ? elHeight - coverHeight : (posY === 'center') ? (elHeight / 2) - (coverHeight / 2) : 0;
        return {
            'x': x,
            'y': y
        }
    };
    Plugin.prototype.getCurrentSource = function() {
        var me = this,
            ratio = me.getDevicePixelRatio(),
            elWidth = me.$el.innerWidth(),
            sourceWidth = me.opts.largestScreenSize,
            source;
        $.each(me.sources, function(key) {
            if (key === 'base') {
                return true;
            }
            var width = parseInt(key);
            if (width >= elWidth && width < sourceWidth) {
                sourceWidth = width;
            }
        });
        source = me.sources[sourceWidth] || me.sources['base'];
        return (ratio > 1 && source['2x'] !== undefined) ? source['2x'] : source['src'];
    };
    Plugin.prototype.setElementSizeByRatio = function() {
        var me = this,
            elWidth = me.$el.innerWidth(),
            imageRatio = me.image.width / me.image.height,
            elHeight = elWidth / imageRatio;
        me.$el.parent(me.opts.parentSelector).css('position', 'relative');
        me.$el.height(elHeight);
    };
    Plugin.prototype.getDevicePixelRatio = function() {
        if (window.devicePixelRatio !== undefined) {
            return window.devicePixelRatio;
        }
        if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
            return window.screen.systemXDPI / window.screen.logicalXDPI;
        }
        return 1;
    };
    Plugin.prototype.getBackingStoreRatio = function() {
        var me = this;
        return me.ctx.webkitBackingStorePixelRatio || me.ctx.mozBackingStorePixelRatio || me.ctx.msBackingStorePixelRatio || me.ctx.oBackingStorePixelRatio || me.ctx.backingStorePixelRatio || 1;
    };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            var element = this,
                pluginData = $.data(this, 'plugin_' + pluginName);
            if (!pluginData) {
                $.data(element, 'plugin_' + pluginName, new Plugin(element, options));
            }
        });
    };
    $(function() {
        $('*[data-cover="true"]').swCover();
        $.subscribe('plugin/swEmotionLoader/onInitEmotion', function(event, plugin) {
            var mode = plugin.$emotion.attr('data-gridMode');
            $('*[data-cover="true"]').swCover({
                'useImageRatio': mode === 'rows'
            });
        });
    });
})(jQuery, window, document);