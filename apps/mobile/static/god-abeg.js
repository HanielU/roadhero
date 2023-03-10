var mapboxsearch = (() => {
  var Es = Object.create;
  var wt = Object.defineProperty,
    Ms = Object.defineProperties,
    Ts = Object.getOwnPropertyDescriptor,
    Ss = Object.getOwnPropertyDescriptors,
    As = Object.getOwnPropertyNames,
    ri = Object.getOwnPropertySymbols,
    ws = Object.getPrototypeOf,
    Wi = Object.prototype.hasOwnProperty,
    Ir = Object.prototype.propertyIsEnumerable;
  var Rr = (t, e, n) =>
      e in t ? wt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    x = (t, e) => {
      for (var n in e || (e = {})) Wi.call(e, n) && Rr(t, n, e[n]);
      if (ri) for (var n of ri(e)) Ir.call(e, n) && Rr(t, n, e[n]);
      return t;
    },
    W = (t, e) => Ms(t, Ss(e)),
    Pr = t => wt(t, "__esModule", { value: !0 });
  var Or = (t, e) => {
    var n = {};
    for (var i in t) Wi.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
    if (t != null && ri) for (var i of ri(t)) e.indexOf(i) < 0 && Ir.call(t, i) && (n[i] = t[i]);
    return n;
  };
  var Hr = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
    Ls = (t, e) => {
      for (var n in e) wt(t, n, { get: e[n], enumerable: !0 });
    },
    Fr = (t, e, n, i) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let o of As(e))
          !Wi.call(t, o) &&
            (n || o !== "default") &&
            wt(t, o, { get: () => e[o], enumerable: !(i = Ts(e, o)) || i.enumerable });
      return t;
    },
    _r = (t, e) =>
      Fr(
        Pr(
          wt(
            t != null ? Es(ws(t)) : {},
            "default",
            !e && t && t.__esModule
              ? { get: () => t.default, enumerable: !0 }
              : { value: t, enumerable: !0 }
          )
        ),
        t
      ),
    ks = (
      t => (e, n) =>
        (t && t.get(e)) || ((n = Fr(Pr({}), e, 1)), t && t.set(e, n), n)
    )(typeof WeakMap != "undefined" ? new WeakMap() : 0);
  var Yi = (t, e, n) => {
    if (!e.has(t)) throw TypeError("Cannot " + n);
  };
  var r = (t, e, n) => (Yi(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    u = (t, e, n) => {
      if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
      e instanceof WeakSet ? e.add(t) : e.set(t, n);
    },
    f = (t, e, n, i) => (Yi(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
  var oi = (t, e, n) => (Yi(t, e, "access private method"), n);
  var B = (t, e, n) =>
    new Promise((i, o) => {
      var s = c => {
          try {
            a(n.next(c));
          } catch (d) {
            o(d);
          }
        },
        l = c => {
          try {
            a(n.throw(c));
          } catch (d) {
            o(d);
          }
        },
        a = c => (c.done ? i(c.value) : Promise.resolve(c.value).then(s, l));
      a((n = n.apply(t, e)).next());
    });
  var Ko = Hr((Vo, Ai) => {
    (function (t) {
      var e = !1,
        n,
        i;
      function o() {
        if (typeof n != "undefined") return n;
        var h = document.documentElement,
          p = document.createElement("div");
        return (
          p.setAttribute(
            "style",
            "width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"
          ),
          h.appendChild(p),
          (n = p.offsetWidth - p.clientWidth),
          h.removeChild(p),
          n
        );
      }
      function s() {
        return document.documentElement.scrollHeight > window.innerHeight;
      }
      function l(h) {
        if (!(typeof document == "undefined" || e)) {
          var p = document.documentElement;
          (i = window.pageYOffset),
            s() ? (p.style.width = "calc(100% - " + o() + "px)") : (p.style.width = "100%"),
            (p.style.position = "fixed"),
            (p.style.top = -i + "px"),
            (p.style.overflow = "hidden"),
            (e = !0);
        }
      }
      function a() {
        if (!(typeof document == "undefined" || !e)) {
          var h = document.documentElement;
          (h.style.width = ""),
            (h.style.position = ""),
            (h.style.top = ""),
            (h.style.overflow = ""),
            window.scroll(0, i),
            (e = !1);
        }
      }
      function c() {
        if (e) {
          a();
          return;
        }
        l();
      }
      var d = { on: l, off: a, toggle: c };
      typeof Ai != "undefined" && typeof Ai.exports != "undefined"
        ? (Ai.exports = d)
        : (t.noScroll = d);
    })(Vo);
  });
  var ds = Hr((Lr, kr) => {
    var nl = (function () {
      var t = {},
        e = 1e-10,
        n = Math.PI / 180,
        i = 180 / Math.PI,
        o = 6378137,
        s = 20037508342789244e-9;
      function l(c) {
        return Number(c) === c && c % 1 !== 0;
      }
      function a(c) {
        if (
          ((c = c || {}),
          (this.size = c.size || 256),
          (this.expansion = c.antimeridian === !0 ? 2 : 1),
          !t[this.size])
        ) {
          var d = this.size,
            h = (t[this.size] = {});
          (h.Bc = []), (h.Cc = []), (h.zc = []), (h.Ac = []);
          for (var p = 0; p < 30; p++)
            h.Bc.push(d / 360),
              h.Cc.push(d / (2 * Math.PI)),
              h.zc.push(d / 2),
              h.Ac.push(d),
              (d *= 2);
        }
        (this.Bc = t[this.size].Bc),
          (this.Cc = t[this.size].Cc),
          (this.zc = t[this.size].zc),
          (this.Ac = t[this.size].Ac);
      }
      return (
        (a.prototype.px = function (c, d) {
          if (l(d)) {
            var h = this.size * Math.pow(2, d),
              p = h / 2,
              b = h / 360,
              E = h / (2 * Math.PI),
              v = h,
              y = Math.min(Math.max(Math.sin(n * c[1]), -0.9999), 0.9999),
              T = p + c[0] * b,
              A = p + 0.5 * Math.log((1 + y) / (1 - y)) * -E;
            return T > v * this.expansion && (T = v * this.expansion), A > v && (A = v), [T, A];
          } else {
            var p = this.zc[d],
              y = Math.min(Math.max(Math.sin(n * c[1]), -0.9999), 0.9999),
              T = Math.round(p + c[0] * this.Bc[d]),
              A = Math.round(p + 0.5 * Math.log((1 + y) / (1 - y)) * -this.Cc[d]);
            return (
              T > this.Ac[d] * this.expansion && (T = this.Ac[d] * this.expansion),
              A > this.Ac[d] && (A = this.Ac[d]),
              [T, A]
            );
          }
        }),
        (a.prototype.ll = function (c, d) {
          if (l(d)) {
            var h = this.size * Math.pow(2, d),
              p = h / 360,
              b = h / (2 * Math.PI),
              E = h / 2,
              v = (c[1] - E) / -b,
              y = (c[0] - E) / p,
              T = i * (2 * Math.atan(Math.exp(v)) - 0.5 * Math.PI);
            return [y, T];
          } else {
            var v = (c[1] - this.zc[d]) / -this.Cc[d],
              y = (c[0] - this.zc[d]) / this.Bc[d],
              T = i * (2 * Math.atan(Math.exp(v)) - 0.5 * Math.PI);
            return [y, T];
          }
        }),
        (a.prototype.bbox = function (c, d, h, p, b) {
          p && (d = Math.pow(2, h) - 1 - d);
          var E = [c * this.size, (+d + 1) * this.size],
            v = [(+c + 1) * this.size, d * this.size],
            y = this.ll(E, h).concat(this.ll(v, h));
          return b === "900913" ? this.convert(y, "900913") : y;
        }),
        (a.prototype.xyz = function (c, d, h, p) {
          p === "900913" && (c = this.convert(c, "WGS84"));
          var b = [c[0], c[1]],
            E = [c[2], c[3]],
            v = this.px(b, d),
            y = this.px(E, d),
            T = [Math.floor(v[0] / this.size), Math.floor((y[0] - 1) / this.size)],
            A = [Math.floor(y[1] / this.size), Math.floor((v[1] - 1) / this.size)],
            j = {
              minX: Math.min.apply(Math, T) < 0 ? 0 : Math.min.apply(Math, T),
              minY: Math.min.apply(Math, A) < 0 ? 0 : Math.min.apply(Math, A),
              maxX: Math.max.apply(Math, T),
              maxY: Math.max.apply(Math, A),
            };
          if (h) {
            var P = { minY: Math.pow(2, d) - 1 - j.maxY, maxY: Math.pow(2, d) - 1 - j.minY };
            (j.minY = P.minY), (j.maxY = P.maxY);
          }
          return j;
        }),
        (a.prototype.convert = function (c, d) {
          return d === "900913"
            ? this.forward(c.slice(0, 2)).concat(this.forward(c.slice(2, 4)))
            : this.inverse(c.slice(0, 2)).concat(this.inverse(c.slice(2, 4)));
        }),
        (a.prototype.forward = function (c) {
          var d = [o * c[0] * n, o * Math.log(Math.tan(Math.PI * 0.25 + 0.5 * c[1] * n))];
          return (
            d[0] > s && (d[0] = s),
            d[0] < -s && (d[0] = -s),
            d[1] > s && (d[1] = s),
            d[1] < -s && (d[1] = -s),
            d
          );
        }),
        (a.prototype.inverse = function (c) {
          return [(c[0] * i) / o, (Math.PI * 0.5 - 2 * Math.atan(Math.exp(-c[1] / o))) * i];
        }),
        a
      );
    })();
    typeof kr != "undefined" && typeof Lr != "undefined" && (kr.exports = Lr = nl);
  });
  var ll = {};
  Ls(ll, {
    MapboxAddressAutofill: () => pt,
    MapboxAddressConfirmation: () => We,
    MapboxAddressMinimap: () => yt,
    MapboxHTMLEvent: () => S,
    MapboxSearchBox: () => ft,
    autofill: () => ys,
    config: () => R,
    confirmAddress: () => ki,
    getAutofillSearchText: () => rt,
    getFormAutofillValues: () => Ei,
  });
  var Br = document.implementation.createHTMLDocument();
  function se(t, e) {
    let n = {};
    for (let [i, o] of Object.entries(e)) n[i] = t.querySelector(o);
    return n;
  }
  function Nr(t) {
    return Array.from(t.childNodes || []).filter(e => e.nodeType === Node.ELEMENT_NODE);
  }
  function N(t) {
    let e = document.createElement("template");
    return (e.innerHTML = t), e.content.firstElementChild;
  }
  function Dr(t) {
    let e = Br.createElement("style");
    return (e.textContent = t), Br.head.appendChild(e), e.sheet;
  }
  function jr(t) {
    return window.getComputedStyle(t).display !== "none";
  }
  function ae(t, e) {
    if (!t) return;
    Object.getOwnPropertyDescriptor(t.constructor.prototype, "value").set.call(t, e);
    let i = t;
    i._valueTracker && i._valueTracker.setValue("");
    let o = new Event("input", { bubbles: !0 });
    (o.simulated = !0), t.dispatchEvent(o);
    let s = new Event("change", { bubbles: !0 });
    (s.simulated = !0), t.dispatchEvent(s);
  }
  function si(t, e = !1) {
    let n,
      i,
      o = t.getBoundingClientRect();
    if (t.style.display === "none" || (o.height === 0 && o.width === 0)) {
      let s = t.cloneNode(e);
      t.parentElement.appendChild(s), s.style.setProperty("display", "block", "important");
      let l = s.getBoundingClientRect();
      (n = l.width), (i = l.height), s.style.setProperty("display", "none"), s.remove();
    } else (n = o.width), (i = o.height);
    return { height: Math.floor(i), width: Math.floor(n) };
  }
  function Ur(t) {
    let e = document.createElement("style");
    (e.innerHTML = t), document.head.appendChild(e);
  }
  var Cs = new RegExp("[_a-zA-Z]+[_a-zA-Z0-9-]*", "g"),
    Rs = new RegExp(`\\.${Cs.source}`, "g"),
    Is = new RegExp("^\\s*(@(?:media|supports)[^{]*){(.*)}\\s*$");
  function Lt(t, e) {
    return t.replace(Rs, n => "." + e(n.slice(1)));
  }
  function zi(t, e) {
    let i = Dr(t).cssRules;
    function o(l) {
      if (l instanceof CSSStyleRule) return `${Lt(l.selectorText, e)} { ${l.style.cssText} }`;
      let a = Is.exec(
        l.cssText
          .split(
            `
`
          )
          .join("")
      );
      if (a && a.length > 2) {
        let c = a[1],
          d = a[2];
        return `${c} { ${zi(d, e)} }`;
      }
      return l.cssText;
    }
    let s = "";
    for (let l of Array.from(i))
      s +=
        o(l) +
        `

`;
    return s.trim();
  }
  function Gi(t, e) {
    let n = Array.from(t.querySelectorAll("[class]"));
    n.push(t);
    for (let i of n) {
      let { classList: o } = i;
      for (let s of Array.from(o)) o.remove(s), o.add(e(s));
    }
    return t;
  }
  var Ps = Object.defineProperty,
    Os = Object.defineProperties,
    Hs = Object.getOwnPropertyDescriptors,
    ci = Object.getOwnPropertySymbols,
    Yr = Object.prototype.hasOwnProperty,
    zr = Object.prototype.propertyIsEnumerable,
    $r = (t, e, n) =>
      e in t ? Ps(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[e] = n),
    H = (t, e) => {
      for (var n in e || (e = {})) Yr.call(e, n) && $r(t, n, e[n]);
      if (ci) for (var n of ci(e)) zr.call(e, n) && $r(t, n, e[n]);
      return t;
    },
    Fe = (t, e) => Os(t, Hs(e)),
    Zi = (t, e) => {
      var n = {};
      for (var i in t) Yr.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
      if (t != null && ci) for (var i of ci(t)) e.indexOf(i) < 0 && zr.call(t, i) && (n[i] = t[i]);
      return n;
    },
    Ji = (t, e, n) => {
      if (!e.has(t)) throw TypeError("Cannot " + n);
    },
    le = (t, e, n) => (Ji(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    ke = (t, e, n) => {
      if (e.has(t)) throw TypeError("Cannot add the same private member more than once");
      e instanceof WeakSet ? e.add(t) : e.set(t, n);
    },
    kt = (t, e, n, i) => (Ji(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n),
    Rt = (t, e, n) => (Ji(t, e, "access private method"), n),
    ce = (t, e, n) =>
      new Promise((i, o) => {
        var s = c => {
            try {
              a(n.next(c));
            } catch (d) {
              o(d);
            }
          },
          l = c => {
            try {
              a(n.throw(c));
            } catch (d) {
              o(d);
            }
          },
          a = c => (c.done ? i(c.value) : Promise.resolve(c.value).then(s, l));
        a((n = n.apply(t, e)).next());
      }),
    Ze = "https://api.mapbox.com/search/v1",
    Gr = "suggest",
    Xr = "retrieve",
    qr = "forward",
    Vr = "reverse",
    Fs = `${Ze}/${Gr}`,
    _s = `${Ze}/${Xr}`,
    Bs = `${Ze}/${qr}`,
    Ns = `${Ze}/permanent/${qr}`,
    Ds = `${Ze}/${Vr}`,
    js = `${Ze}/permanent/${Vr}`,
    _ = class {
      constructor(t, e) {
        if (isNaN(t) || isNaN(e)) throw new Error(`Invalid LngLat object: (${t}, ${e})`);
        if (((this.lng = +t), (this.lat = +e), this.lat > 90 || this.lat < -90))
          throw new Error("Invalid LngLat latitude value: must be between -90 and 90");
        if (this.lng > 180 || this.lng < -180)
          throw new Error("Invalid LngLat longitude value: must be between -180 and 180");
      }
      toArray() {
        return [this.lng, this.lat];
      }
      toString() {
        return `LngLat(${this.lng}, ${this.lat})`;
      }
      static convert(t) {
        if (t instanceof _) return new _(t.lng, t.lat);
        if (Array.isArray(t) && t.length === 2) return new _(Number(t[0]), Number(t[1]));
        if (
          !Array.isArray(t) &&
          typeof t == "object" &&
          t !== null &&
          ("lng" in t || "lon" in t) &&
          "lat" in t
        )
          return new _(Number("lng" in t ? t.lng : t.lon), Number(t.lat));
        throw new Error(
          "`LngLatLike` argument must be specified as an object {lng: <lng>, lat: <lat>}, an object {lon: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]"
        );
      }
    },
    ue = class {
      constructor(t, e) {
        (this._sw = _.convert(t)), (this._ne = _.convert(e));
      }
      getSouthWest() {
        return this._sw;
      }
      getNorthEast() {
        return this._ne;
      }
      getNorthWest() {
        return new _(this.getWest(), this.getNorth());
      }
      getSouthEast() {
        return new _(this.getEast(), this.getSouth());
      }
      getWest() {
        return this._sw.lng;
      }
      getSouth() {
        return this._sw.lat;
      }
      getEast() {
        return this._ne.lng;
      }
      getNorth() {
        return this._ne.lat;
      }
      toArray() {
        return [this._sw.toArray(), this._ne.toArray()];
      }
      toFlatArray() {
        return [this._sw.lng, this._sw.lat, this._ne.lng, this._ne.lat];
      }
      toString() {
        return `LngLatBounds(${this._sw.toString()}, ${this._ne.toString()})`;
      }
      static convert(t) {
        if (!t) throw new Error("Invalid LngLatBounds convert value: falsy");
        if (t instanceof ue) return new ue(t.getSouthWest(), t.getNorthEast());
        if (Array.isArray(t) && t.length === 2) return new ue(_.convert(t[0]), _.convert(t[1]));
        if (Array.isArray(t) && t.length === 4)
          return new ue(_.convert([t[0], t[1]]), _.convert([t[2], t[3]]));
        throw new Error(
          "`LngLatBoundsLike` argument must be specified as an array [<LngLatLike>, <LngLatLike>] or an array [<west>, <south>, <east>, <north>]"
        );
      }
    };
  function Us() {
    let e = (
      Math.random().toString(16) +
      Date.now().toString(16) +
      Math.random().toString(16)
    ).replace(/\./g, "");
    return [
      e.slice(0, 8),
      e.slice(8, 12),
      "4" + e.slice(12, 15) + "-8" + e.slice(15, 18),
      e.slice(18, 30),
    ].join("-");
  }
  var J = class {
      constructor(t) {
        this.id = t != null ? t : Us();
      }
      toString() {
        return this.id;
      }
      static convert(t) {
        return new J(t instanceof J ? t.id : t.toString());
      }
    },
    $s = "Unknown error",
    Ws = class extends Error {
      constructor(t, e) {
        super(String(t.message || t.error || $s));
        (this.name = "MapboxError"), (this.statusCode = e);
      }
      toString() {
        return `${this.name} (${this.statusCode}): ${this.message}`;
      }
    };
  function He(t) {
    return ce(this, null, function* () {
      if (!t.ok) {
        let e = yield t.json();
        throw new Ws(e, t.status);
      }
    });
  }
  var Wr = globalThis.fetch,
    Ys = globalThis.AbortController;
  function Le() {
    if (!Wr)
      throw new Error(
        "Fetch implementation not found. Please include a fetch polyfill in your application or use `polyfillFetch` from `@mapbox/search-js-core` to fix this issue."
      );
    return { fetch: Wr, AbortController: Ys };
  }
  function _e(...t) {
    let e = [];
    for (let n of t) {
      if (!n) continue;
      let i = Object.entries(n);
      for (let [o, s] of i) s != null && e.push(`${o}=${encodeURIComponent(String(s))}`);
    }
    return e.join("&");
  }
  var ai,
    qi,
    Vi,
    Kr,
    Qr = class {
      constructor(t = {}) {
        ke(this, ai), ke(this, Vi);
        let e = t,
          { accessToken: n } = e,
          i = Zi(e, ["accessToken"]);
        (this.accessToken = n), (this.defaults = H(H({}, Qr.defaults), i));
      }
      suggest(t, e) {
        return ce(this, null, function* () {
          if (!t) throw new Error("searchText is required");
          let { sessionToken: n, signal: i } = e,
            o = Fe(H(H({}, this.defaults), e), { sessionToken: n });
          if (o.eta_type && (!o.origin || !o.navigation_profile))
            throw new Error(
              "to provide eta estimate: eta, navigation_profile, and origin are required"
            );
          if (o.origin && !o.navigation_profile)
            throw new Error(
              "to provide distance estimate: both navigation_profile and origin are required"
            );
          let s = new URL(`${Fs}/${encodeURIComponent(t)}`);
          s.search = Rt(this, ai, qi).call(this, o);
          let { fetch: l } = Le(),
            a = yield l(s.toString(), { signal: i });
          return yield He(a), yield a.json();
        });
      }
      retrieve(t, e) {
        return ce(this, null, function* () {
          if (!t) throw new Error("suggestion is required");
          if (!this.canRetrieve(t)) throw new Error("suggestion cannot be retrieved");
          let { sessionToken: n, signal: i } = e,
            o = J.convert(n),
            s = new URL(_s);
          s.search = _e({ access_token: this.accessToken, session_token: o.id });
          let { fetch: l } = Le(),
            a = yield l(s.toString(), Fe(H({}, Rt(this, Vi, Kr).call(this, t)), { signal: i }));
          return yield He(a), yield a.json();
        });
      }
      canRetrieve(t) {
        let e = t.action;
        return e ? e.method === "POST" && e.endpoint === Xr : !1;
      }
      canSuggest(t) {
        let e = t.action;
        return e ? e.method === "POST" && e.endpoint === Gr : !1;
      }
      forward(t) {
        return ce(this, arguments, function* (e, n = {}) {
          if (!e) throw new Error("searchText is required");
          let i = H(H({}, this.defaults), n),
            o = i.permanent ? Ns : Bs,
            s = new URL(`${o}/${encodeURIComponent(e)}`);
          s.search = Rt(this, ai, qi).call(this, i);
          let { fetch: l } = Le(),
            a = yield l(s.toString(), { signal: i.signal });
          return yield He(a), yield a.json();
        });
      }
      reverse(t) {
        return ce(this, arguments, function* (e, n = {}) {
          if (!e) throw new Error("lngLat is required");
          let i = H(H({}, this.defaults), n),
            o = typeof e == "string" ? e : _.convert(e).toArray().join(","),
            s = i.permanent ? js : Ds,
            l = new URL(`${s}/${encodeURIComponent(o)}`);
          l.search = _e(
            { access_token: this.accessToken, language: i.language, limit: i.limit },
            i.types && { types: typeof i.types == "string" ? i.types : [...i.types].join(",") }
          );
          let { fetch: a } = Le(),
            c = yield a(l.toString(), { signal: i.signal });
          return yield He(c), yield c.json();
        });
      }
    },
    er = Qr;
  ai = new WeakSet();
  qi = function (t) {
    return _e(
      {
        access_token: this.accessToken,
        language: t.language,
        country: t.country,
        limit: t.limit,
        navigation_profile: t.navigation_profile,
        eta_type: t.eta_type,
      },
      t.sessionToken && { session_token: J.convert(t.sessionToken).id },
      t.origin && {
        origin: typeof t.origin == "string" ? t.origin : _.convert(t.origin).toArray().join(","),
      },
      t.proximity && {
        proximity:
          typeof t.proximity == "string" ? t.proximity : _.convert(t.proximity).toArray().join(","),
      },
      t.bbox && {
        bbox: typeof t.bbox == "string" ? t.bbox : ue.convert(t.bbox).toFlatArray().join(","),
      },
      t.types && { types: typeof t.types == "string" ? t.types : [...t.types].join(",") }
    );
  };
  Vi = new WeakSet();
  Kr = function (t) {
    if (!this.canRetrieve(t) && !this.canSuggest(t))
      throw new Error("Suggestion cannot be retrieved or suggested");
    let e = t.action,
      n = JSON.stringify(e.body);
    return {
      method: e.method,
      body: n,
      headers: { "Content-Type": "application/json", "Content-Length": n.length.toString() },
    };
  };
  er.defaults = { language: "en" };
  var Zr = "https://api.mapbox.com/autofill/v1",
    zs = "suggest",
    Gs = "retrieve",
    Xs = `${Zr}/${zs}`,
    qs = `${Zr}/${Gs}`,
    Ki,
    Jr,
    eo = class {
      constructor(t = {}) {
        ke(this, Ki);
        let e = t,
          { accessToken: n } = e,
          i = Zi(e, ["accessToken"]);
        (this.accessToken = n), (this.defaults = H(H({}, eo.defaults), i));
      }
      suggest(t, e) {
        return ce(this, null, function* () {
          if (!t) throw new Error("searchText is required");
          let { sessionToken: n, signal: i } = e,
            o = Fe(H(H({}, this.defaults), e), { sessionToken: n }),
            s = new URL(`${Xs}/${encodeURIComponent(t)}`);
          s.search = Rt(this, Ki, Jr).call(this, o);
          let { fetch: l } = Le(),
            a = yield l(s.toString(), { signal: i });
          yield He(a);
          let c = yield a.json();
          return Fe(H({}, c), {
            suggestions: c.suggestions.map(d => Fe(H({}, d), { original_search_text: t })),
          });
        });
      }
      retrieve(t, e) {
        return ce(this, null, function* () {
          if (!t) throw new Error("suggestion is required");
          if (!this.canRetrieve(t)) throw new Error("suggestion cannot be retrieved");
          let { sessionToken: n, signal: i } = e,
            o = J.convert(n),
            s = new URL(`${qs}/${t.action.id}`);
          s.search = _e({ access_token: this.accessToken, session_token: o.id });
          let { fetch: l } = Le(),
            a = yield l(s.toString(), { signal: i });
          return yield He(a), yield a.json();
        });
      }
      canRetrieve(t) {
        let e = t.action;
        return typeof (e == null ? void 0 : e.id) == "string";
      }
    },
    It = eo;
  Ki = new WeakSet();
  Jr = function (t) {
    return _e(
      {
        types: "address",
        streets: !0,
        access_token: this.accessToken,
        language: t.language,
        country: t.country,
        limit: t.limit,
      },
      t.sessionToken && { session_token: J.convert(t.sessionToken).id },
      t.proximity && {
        proximity:
          typeof t.proximity == "string" ? t.proximity : _.convert(t.proximity).toArray().join(","),
      },
      t.bbox && {
        bbox: typeof t.bbox == "string" ? t.bbox : ue.convert(t.bbox).toFlatArray().join(","),
      }
    );
  };
  It.defaults = { language: "en", proximity: "ip" };
  var Vs = "https://api.mapbox.com/autofill/v1",
    Ks = "retrieve",
    Qs = `${Vs}/${Ks}`,
    Qi,
    to,
    no = class {
      constructor(t = {}) {
        ke(this, Qi);
        let e = t,
          { accessToken: n } = e,
          i = Zi(e, ["accessToken"]);
        (this.accessToken = n), (this.defaults = H(H({}, no.defaults), i));
      }
      validate(t, e) {
        return ce(this, null, function* () {
          if (!t) throw new Error("searchText is required");
          let { sessionToken: n, signal: i } = e,
            o = Fe(H(H({}, this.defaults), e), { sessionToken: n }),
            s = new URL(`${Qs}/${encodeURIComponent(t)}`);
          s.search = Rt(this, Qi, to).call(this, o);
          let { fetch: l } = Le(),
            a = yield l(s.toString(), { signal: i });
          yield He(a);
          let c = yield a.json();
          return c.features.length > 0 && (c.features = [c.features[0]]), c;
        });
      }
    },
    tr = no;
  Qi = new WeakSet();
  to = function (t) {
    return _e(
      { access_token: this.accessToken, language: t.language, country: t.country },
      t.sessionToken && { session_token: J.convert(t.sessionToken).id },
      t.proximity && {
        proximity:
          typeof t.proximity == "string" ? t.proximity : _.convert(t.proximity).toArray().join(","),
      },
      t.bbox && {
        bbox: typeof t.bbox == "string" ? t.bbox : ue.convert(t.bbox).toFlatArray().join(","),
      }
    );
  };
  tr.defaults = { language: "en", proximity: "ip" };
  var io = "https://api.mapbox.com/geocoding/v5",
    pl = `${io}/mapbox.places`,
    fl = `${io}/mapbox.places-permanent`,
    Zs,
    Js;
  Zs = new WeakSet();
  Js = function (t, e = !1) {
    return (
      e &&
        ["proximity", "autocomplete", "fuzzyMatch", "bbox"].forEach(n => {
          n in t && delete t[n];
        }),
      _e(
        {
          access_token: this.accessToken,
          language: t.language,
          country: t.country,
          limit: t.limit,
          autocomplete: t.autocomplete,
          fuzzyMatch: t.fuzzyMatch,
          routing: t.routing,
          worldview: t.worldview,
        },
        t.proximity && {
          proximity:
            typeof t.proximity == "string"
              ? t.proximity
              : _.convert(t.proximity).toArray().join(","),
        },
        t.bbox && {
          bbox: typeof t.bbox == "string" ? t.bbox : ue.convert(t.bbox).toFlatArray().join(","),
        },
        t.types && { types: typeof t.types == "string" ? t.types : [...t.types].join(",") }
      )
    );
  };
  var nr = (t => (
      (t.exact = "exact"), (t.high = "high"), (t.medium = "medium"), (t.low = "low"), t
    ))(nr || {}),
    Ct,
    ir = class {
      constructor() {
        ke(this, Ct, {});
      }
      addEventListener(t, e) {
        let n = le(this, Ct);
        n[t] || (n[t] = []), n[t].push(e);
      }
      removeEventListener(t, e) {
        let n = le(this, Ct);
        if (!n[t]) return;
        let i = n[t],
          o = i.indexOf(e);
        o !== -1 && i.splice(o, 1);
      }
      fire(t, e) {
        let n = le(this, Ct);
        if (!n[t]) return;
        let i = n[t];
        for (let o of i) o(e);
      }
    };
  Ct = new WeakMap();
  function rr(t, e, n) {
    let i = null;
    return (...o) => {
      i !== null && clearTimeout(i);
      let s = n && n();
      i = setTimeout(() => {
        (i = null), !(s == null ? void 0 : s.aborted) && t(...o);
      }, e);
    };
  }
  function Xi() {
    let { AbortController: t } = Le();
    return new t();
  }
  var Qe,
    we,
    li,
    Je = class extends ir {
      constructor(t, e = 0) {
        super();
        (this.sessionToken = new J()),
          ke(this, Qe, void 0),
          ke(this, we, Xi()),
          ke(this, li, void 0),
          kt(
            this,
            li,
            rr(
              (n, ...i) =>
                ce(this, [n, ...i], function* (o, s = {}) {
                  if ((le(this, we).abort(), kt(this, we, Xi()), !o)) {
                    kt(this, Qe, null), this.fire("suggest", le(this, Qe));
                    return;
                  }
                  try {
                    let l = yield this.search.suggest(
                      o,
                      Fe(H({ sessionToken: this.sessionToken }, s), { signal: le(this, we).signal })
                    );
                    kt(this, Qe, l), this.fire("suggest", l);
                  } catch (l) {
                    if (l.name === "AbortError") return;
                    this.fire("suggesterror", l);
                  }
                }),
              e,
              () => le(this, we).signal
            )
          ),
          Object.defineProperties(this, {
            search: { value: t, writable: !1 },
            debounce: { value: e, writable: !1 },
          });
      }
      get suggestions() {
        return le(this, Qe);
      }
      suggest(t, e) {
        return (
          le(this, li).call(this, t, e),
          new Promise((n, i) => {
            let o, s;
            (o = l => {
              this.removeEventListener("suggest", o),
                this.removeEventListener("suggesterror", s),
                n(l);
            }),
              (s = l => {
                this.removeEventListener("suggest", o),
                  this.removeEventListener("suggesterror", s),
                  i(l);
              }),
              this.addEventListener("suggest", o),
              this.addEventListener("suggesterror", s);
          })
        );
      }
      clear() {
        this.suggest("");
      }
      retrieve(t, e) {
        return ce(this, null, function* () {
          let n = yield this.search.retrieve(t, H({ sessionToken: this.sessionToken }, e));
          return this.fire("retrieve", n), n;
        });
      }
      canRetrieve(t) {
        return this.search.canRetrieve ? this.search.canRetrieve(t) : !0;
      }
      canSuggest(t) {
        return this.search.canSuggest ? this.search.canSuggest(t) : !0;
      }
      abort() {
        le(this, we).abort(), kt(this, we, Xi());
      }
    };
  Qe = new WeakMap();
  we = new WeakMap();
  li = new WeakMap();
  function et(t) {
    let { properties: e } = t;
    return H({}, e);
  }
  var or = 1.4;
  function ro(t, e, n = 0.5) {
    let { center: i, zoom: o } = t.cameraForBounds(e),
      s = Math.max(o - n, 0);
    return { center: i, zoom: s, speed: or };
  }
  function oo(t) {
    switch (t) {
      case "street":
        return 15;
      case "neighborhood":
      case "postcode":
      case "locality":
      case "oaza":
        return 14;
      case "place":
      case "city":
        return 13;
      case "district":
        return 9;
      case "region":
      case "prefecture":
        return 6;
      case "country":
        return 4;
      default:
        return 16;
    }
  }
  function ui(t, e) {
    return `https://api.mapbox.com/styles/v1/${t}/${e}/static/`;
  }
  var so = ui("mapbox", "satellite-streets-v11"),
    ao = "20d01",
    lo = ["mapbox.com", "mapbox.cn", "tilestream.net"],
    co = N(`
<template>
  <div class="MapboxSearch">
    <div class="Label" role="label" aria-live="polite" aria-atomic="true">
    </div>
    <div class="Results" aria-hidden="true">
      <div class="ResultsList" role="listbox">
      </div>
      <div class="ResultsAttribution" aria-hidden="true">
        <a href="https://www.mapbox.com/search-service" target="_blank" tabindex="-1">
          Powered by Mapbox
        </a>
      </div>
    </div>
  </div>
</template>
`),
    uo = N(`
<template>
  <div class="Suggestion" role="option" tabindex="-1">
    <div class="SuggestionIcon" aria-hidden="true"></div>
    <div class="SuggestionText">
      <div class="SuggestionName"></div>
      <div class="SuggestionDesc"></div>
    </div>
  </div>
</template>
`);
  function de() {
    return "mbx" + new J().id.slice(0, 8);
  }
  function tt(t) {
    try {
      return JSON.parse(t);
    } catch (e) {
      return null;
    }
  }
  function Be(t, e) {
    if (t == null || e == null || typeof t != "object" || typeof e != "object") return t === e;
    let n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (let o of n) if (!Be(t[o], e[o])) return !1;
    return !0;
  }
  function sr(t, e) {
    let n = Math.pow(10, e);
    return Math.round(t * n) / n;
  }
  function ho(t) {
    return Boolean(
      t.match(/localhost|[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}|::1|\.local|^$/gi)
    );
  }
  function po(t) {
    return Boolean(lo.some(e => t.includes(e)));
  }
  var nt,
    Ne,
    De,
    G = class extends HTMLElement {
      constructor() {
        super(...arguments);
        u(this, nt, de());
        u(this, Ne, void 0);
        u(this, De, e => `${r(this, nt)}--${e}`);
      }
      get template() {
        return null;
      }
      get templateStyle() {
        return null;
      }
      get templateUserStyle() {
        return null;
      }
      clonedCallback(e, n) {
        let i = l => l.replace(e, n);
        Gi(this, i);
        let o = Array.from(this.querySelectorAll("style"));
        for (let l of o) l.textContent = Lt(l.textContent, i);
        o.length && f(this, Ne, o[o.length - 1]);
        let s = Array.from(this.querySelectorAll(`[id^="${e}"]`));
        for (let l of s) l.id = l.id.replace(e, n);
      }
      connectedCallback() {
        if (this.childElementCount > 0) {
          let o = this.dataset.seed,
            s = r(this, nt);
          o && o !== s && (this.clonedCallback(o, s), (this.dataset.seed = s));
          return;
        }
        this.dataset.seed = r(this, nt);
        let e = this.template;
        if (e) {
          let o = this.prepareTemplate(e);
          this.appendChild(o);
        }
        let n = this.templateStyle;
        if (n) {
          let o = document.createElement("style");
          (o.textContent = this.prepareCSS(n)), this.appendChild(o);
        }
        let i = document.createElement("style");
        this.templateUserStyle && (i.textContent = this.prepareCSS(this.templateUserStyle)),
          this.appendChild(i),
          f(this, Ne, i);
      }
      prepareTemplate(e) {
        let n = e.content.firstElementChild;
        return Gi(n.cloneNode(!0), r(this, De));
      }
      prepareCSS(e) {
        return zi(e, r(this, De));
      }
      updateTemplateUserStyle(e) {
        !r(this, Ne) || (r(this, Ne).textContent = this.prepareCSS(e));
      }
      querySelector(e) {
        return super.querySelector(Lt(e, r(this, De)));
      }
      querySelectorAll(e) {
        return super.querySelectorAll(Lt(e, r(this, De)));
      }
      addEventListener(e, n, i) {
        super.addEventListener(e, n, i);
      }
      removeEventListener(e, n, i) {
        super.removeEventListener(e, n, i);
      }
      dispatchEvent(e) {
        return super.dispatchEvent(e);
      }
    };
  (nt = new WeakMap()), (Ne = new WeakMap()), (De = new WeakMap());
  var fo =
    '<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8 3.8a1 1 0 0 1 1.4 0L9 7.58l3.8-3.8a1 1 0 1 1 1.4 1.42L10.42 9l3.8 3.8a1 1 0 0 1-1.42 1.4L9 10.42l-3.8 3.8a1 1 0 0 1-1.4-1.42L7.58 9l-3.8-3.8a1 1 0 0 1 0-1.4Z" fill="currentColor"/></svg>';
  var mo =
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14ZM6.88 4.88a2.58 2.58 0 0 1 1.83-.75h1.08a2.58 2.58 0 0 1 2.59 2.58v.16c0 1-.53 1.94-1.4 2.46l-.56.34c-.27.16-.45.42-.52.71-.03.14-.14.25-.28.25H8.38a.23.23 0 0 1-.24-.25c.08-.91.59-1.74 1.38-2.21l.56-.34c.34-.2.54-.57.54-.96V6.7a.83.83 0 0 0-.83-.83H8.71a.83.83 0 0 0-.84.83v.18a.87.87 0 1 1-1.75 0V6.7c0-.69.28-1.34.76-1.83ZM10 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fill="currentColor"/></svg>';
  var go =
    '<svg width="48" height="56" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#a)"><path d="m24 50.4 13.79-14.12a18.82 18.82 0 0 0 4.23-20.86 19.23 19.23 0 0 0-7.19-8.6 19.76 19.76 0 0 0-21.66 0c-3.21 2.11-5.71 5.1-7.19 8.6a18.82 18.82 0 0 0 4.23 20.86L24 50.4Z" fill="currentColor"/><path d="M37.26 35.75 24 49.34 10.75 35.76l-.01-.01A18.07 18.07 0 0 1 6.68 15.7a18.48 18.48 0 0 1 6.9-8.26 19 19 0 0 1 20.84 0 18.48 18.48 0 0 1 6.9 8.26 18.07 18.07 0 0 1-4.06 20.04Z" stroke="#fff" stroke-width="1.5"/></g><circle cx="24" cy="22.45" fill="#fff" r="5.85"/><defs><filter id="a" x=".5" y=".6" width="47" height="54.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17_871"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_17_871" result="shape"/></filter></defs></svg>';
  var vo = `<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.08 14.94 5.625 3.06h1.17l-3.42 11.88H1.08Zm15.885 0L12.42 3.06h-1.17l3.42 11.88h2.295Zm-6.86-1.44H7.946l.128-2.61h1.912l.119 2.61Zm-.217-4.77H8.181l.088-1.8h1.537l.082 1.8ZM9.74 5.49h-1.4l.049-.99h1.306l.045.99Z" fill="currentColor" />
</svg>`;
  var bo = `<!-- TODO: I'm not sure if the way I added the circle will "scale" properly, need to check that -->
<svg width="24" height="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="currentColor" stroke-width="1.5" d="M4 7a5 5 0 1 1 10 0c0 3.025-3.28 6.713-5 9-1.72-2.287-5-5.975-5-9z"></path>
    <circle cx="9" cy="7" r="2" fill="currentColor"></circle>
</svg>`;
  var Pt = "1.0.0-beta.14";
  var sa = `https://api.mapbox.com/search-js/v${Pt}/img/style-toggle-satellite.jpg`,
    aa = `https://api.mapbox.com/search-js/v${Pt}/img/style-toggle-default.jpg`,
    la = 768 - 1,
    ca = `@media only screen and (max-width: ${la}px)`,
    ar = {
      variables: {
        unit: ["mobile", "16px", "14px"],
        unitHeader: ["mobile", "24px", "18px"],
        minWidth: "min(300px, 100vw)",
        spacing: "0.75em",
        padding: "0.5em 0.75em",
        paddingFooterLabel: "0.5em 0.75em",
        paddingModal: "1.25em",
        colorText: "rgba(0, 0, 0, 0.75)",
        colorPrimary: "#4264FB",
        colorSecondary: "#667F91",
        colorBackground: "#fff",
        colorBackgroundHover: "#f5f5f5",
        colorBackgroundActive: "#f0f0f0",
        colorBackdrop: "rgba(102, 127, 145, 0.3)",
        border: "none",
        borderRadius: "4px",
        boxShadow: `
      0 0 10px 2px rgba(0, 0, 0, 0.05),
      0 0 6px 1px rgba(0, 0, 0, 0.1),
      0 0 0 1px rgba(0, 0, 0, 0.1)
    `,
        lineHeight: "1.2em",
        fontFamily: `
      -apple-system, BlinkMacSystemFont,
      avenir next, avenir,
      segoe ui,
      helvetica neue, helvetica,
      Ubuntu, roboto, noto, arial, sans-serif
    `,
        fontWeight: "normal",
        fontWeightSemibold: "600",
        fontWeightBold: "bold",
        duration: "150ms",
        curve: "ease-out",
      },
      icons: { close: fo, question: mo, marker: go, street: vo, addressMarker: bo },
      images: { styleToggleDefault: aa, styleToggleSatellite: sa },
    };
  function U(t, e = {}) {
    let n = x(x({}, ar.variables), e.variables || {}),
      i = e.cssText || "",
      o = "";
    for (let [s, l] of Object.entries(n)) {
      if (!Array.isArray(l)) {
        o += `--${s}: ${l};`;
        continue;
      }
      if (l[0] !== "mobile") {
        let d = JSON.stringify(l);
        throw new Error(`Unsupported expression in theme variables: ${s} ${d}`);
      }
      let [, a, c] = l;
      (i += `${ca} { ${t} { --${s}: ${a} !important; } }`), (o += `--${s}: ${c};`);
    }
    return i + `${t} { ${o} }`;
  }
  function q(t, e = {}) {
    return x(x({}, ar.icons), e.icons || {})[t];
  }
  function yo(t, e = {}) {
    return x(x({}, ar.images), e.images || {})[t];
  }
  function hi(t) {
    return t.split("-")[0];
  }
  function lr(t) {
    return t.split("-")[1];
  }
  function cr(t) {
    return ["top", "bottom"].includes(hi(t)) ? "x" : "y";
  }
  function Mo(t) {
    return t === "y" ? "height" : "width";
  }
  function xo(t, e, n) {
    let { reference: i, floating: o } = t,
      s = i.x + i.width / 2 - o.width / 2,
      l = i.y + i.height / 2 - o.height / 2,
      a = cr(e),
      c = Mo(a),
      d = i[c] / 2 - o[c] / 2,
      h = a === "x",
      p;
    switch (hi(e)) {
      case "top":
        p = { x: s, y: i.y - o.height };
        break;
      case "bottom":
        p = { x: s, y: i.y + i.height };
        break;
      case "right":
        p = { x: i.x + i.width, y: l };
        break;
      case "left":
        p = { x: i.x - o.width, y: l };
        break;
      default:
        p = { x: i.x, y: i.y };
    }
    switch (lr(e)) {
      case "start":
        p[a] -= d * (n && h ? -1 : 1);
        break;
      case "end":
        p[a] += d * (n && h ? -1 : 1);
    }
    return p;
  }
  var To = (t, e, n) =>
    B(void 0, null, function* () {
      let {
          placement: i = "bottom",
          strategy: o = "absolute",
          middleware: s = [],
          platform: l,
        } = n,
        a = yield l.isRTL == null ? void 0 : l.isRTL(e),
        c = yield l.getElementRects({ reference: t, floating: e, strategy: o }),
        { x: d, y: h } = xo(c, i, a),
        p = i,
        b = {};
      for (let E = 0; E < s.length; E++) {
        let { name: v, fn: y } = s[E],
          {
            x: T,
            y: A,
            data: j,
            reset: P,
          } = yield y({
            x: d,
            y: h,
            initialPlacement: i,
            placement: p,
            strategy: o,
            middlewareData: b,
            rects: c,
            platform: l,
            elements: { reference: t, floating: e },
          });
        (d = T != null ? T : d),
          (h = A != null ? A : h),
          (b = W(x({}, b), { [v]: x(x({}, b[v]), j) })),
          P &&
            (typeof P == "object" &&
              (P.placement && (p = P.placement),
              P.rects &&
                (c =
                  P.rects === !0
                    ? yield l.getElementRects({ reference: t, floating: e, strategy: o })
                    : P.rects),
              ({ x: d, y: h } = xo(c, p, a))),
            (E = -1));
      }
      return { x: d, y: h, placement: p, strategy: o, middlewareData: b };
    });
  function ua(t) {
    return typeof t != "number"
      ? (function (e) {
          return x({ top: 0, right: 0, bottom: 0, left: 0 }, e);
        })(t)
      : { top: t, right: t, bottom: t, left: t };
  }
  function Ot(t) {
    return W(x({}, t), { top: t.y, left: t.x, right: t.x + t.width, bottom: t.y + t.height });
  }
  function So(t, e) {
    return B(this, null, function* () {
      var n;
      e === void 0 && (e = {});
      let { x: i, y: o, platform: s, rects: l, elements: a, strategy: c } = t,
        {
          boundary: d = "clippingAncestors",
          rootBoundary: h = "viewport",
          elementContext: p = "floating",
          altBoundary: b = !1,
          padding: E = 0,
        } = e,
        v = ua(E),
        y = a[b ? (p === "floating" ? "reference" : "floating") : p],
        T = Ot(
          yield s.getClippingRect({
            element:
              (n = yield s.isElement == null ? void 0 : s.isElement(y)) == null || n
                ? y
                : y.contextElement ||
                  (yield s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
            boundary: d,
            rootBoundary: h,
            strategy: c,
          })
        ),
        A = Ot(
          s.convertOffsetParentRelativeRectToViewportRelativeRect
            ? yield s.convertOffsetParentRelativeRectToViewportRelativeRect({
                rect: p === "floating" ? W(x({}, l.floating), { x: i, y: o }) : l.reference,
                offsetParent: yield s.getOffsetParent == null
                  ? void 0
                  : s.getOffsetParent(a.floating),
                strategy: c,
              })
            : l[p]
        );
      return {
        top: T.top - A.top + v.top,
        bottom: A.bottom - T.bottom + v.bottom,
        left: T.left - A.left + v.left,
        right: A.right - T.right + v.right,
      };
    });
  }
  var da = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function di(t) {
    return t.replace(/left|right|bottom|top/g, e => da[e]);
  }
  function ha(t, e, n) {
    n === void 0 && (n = !1);
    let i = lr(t),
      o = cr(t),
      s = Mo(o),
      l =
        o === "x"
          ? i === (n ? "end" : "start")
            ? "right"
            : "left"
          : i === "start"
          ? "bottom"
          : "top";
    return e.reference[s] > e.floating[s] && (l = di(l)), { main: l, cross: di(l) };
  }
  var pa = { start: "end", end: "start" };
  function Eo(t) {
    return t.replace(/start|end/g, e => pa[e]);
  }
  var fa = ["top", "right", "bottom", "left"],
    Dl = fa.reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
  var ur = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        fn(e) {
          return B(this, null, function* () {
            var n;
            let {
                placement: i,
                middlewareData: o,
                rects: s,
                initialPlacement: l,
                platform: a,
                elements: c,
              } = e,
              M = t,
              {
                mainAxis: d = !0,
                crossAxis: h = !0,
                fallbackPlacements: p,
                fallbackStrategy: b = "bestFit",
                flipAlignment: E = !0,
              } = M,
              v = Or(M, [
                "mainAxis",
                "crossAxis",
                "fallbackPlacements",
                "fallbackStrategy",
                "flipAlignment",
              ]),
              y = hi(i),
              T =
                p ||
                (y === l || !E
                  ? [di(l)]
                  : (function (w) {
                      let k = di(w);
                      return [Eo(w), k, Eo(k)];
                    })(l)),
              A = [l, ...T],
              j = yield So(e, v),
              P = [],
              Oe = ((n = o.flip) == null ? void 0 : n.overflows) || [];
            if ((d && P.push(j[y]), h)) {
              let { main: w, cross: k } = ha(
                i,
                s,
                yield a.isRTL == null ? void 0 : a.isRTL(c.floating)
              );
              P.push(j[w], j[k]);
            }
            if (((Oe = [...Oe, { placement: i, overflows: P }]), !P.every(w => w <= 0))) {
              var O, m;
              let w = ((O = (m = o.flip) == null ? void 0 : m.index) != null ? O : 0) + 1,
                k = A[w];
              if (k) return { data: { index: w, overflows: Oe }, reset: { placement: k } };
              let F = "bottom";
              switch (b) {
                case "bestFit": {
                  var g;
                  let Ae =
                    (g = Oe.map(Z => [
                      Z,
                      Z.overflows.filter(ie => ie > 0).reduce((ie, $i) => ie + $i, 0),
                    ]).sort((Z, ie) => Z[1] - ie[1])[0]) == null
                      ? void 0
                      : g[0].placement;
                  Ae && (F = Ae);
                  break;
                }
                case "initialPlacement":
                  F = l;
              }
              if (i !== F) return { reset: { placement: F } };
            }
            return {};
          });
        },
      }
    );
  };
  var dr = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        fn(e) {
          return B(this, null, function* () {
            let { x: n, y: i } = e,
              o = yield (function (s, l) {
                return B(this, null, function* () {
                  let { placement: a, platform: c, elements: d } = s,
                    h = yield c.isRTL == null ? void 0 : c.isRTL(d.floating),
                    p = hi(a),
                    b = lr(a),
                    E = cr(a) === "x",
                    v = ["left", "top"].includes(p) ? -1 : 1,
                    y = h && E ? -1 : 1,
                    T = typeof l == "function" ? l(s) : l,
                    {
                      mainAxis: A,
                      crossAxis: j,
                      alignmentAxis: P,
                    } = typeof T == "number"
                      ? { mainAxis: T, crossAxis: 0, alignmentAxis: null }
                      : x({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, T);
                  return (
                    b && typeof P == "number" && (j = b === "end" ? -1 * P : P),
                    E ? { x: j * y, y: A * v } : { x: A * v, y: j * y }
                  );
                });
              })(e, t);
            return { x: n + o.x, y: i + o.y, data: o };
          });
        },
      }
    );
  };
  function Ro(t) {
    return t && t.document && t.location && t.alert && t.setInterval;
  }
  function be(t) {
    if (t == null) return window;
    if (!Ro(t)) {
      let e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Ft(t) {
    return be(t).getComputedStyle(t);
  }
  function ge(t) {
    return Ro(t) ? "" : t ? (t.nodeName || "").toLowerCase() : "";
  }
  function Io() {
    let t = navigator.userAgentData;
    return t != null && t.brands
      ? t.brands.map(e => e.brand + "/" + e.version).join(" ")
      : navigator.userAgent;
  }
  function he(t) {
    return t instanceof be(t).HTMLElement;
  }
  function Re(t) {
    return t instanceof be(t).Element;
  }
  function pr(t) {
    return typeof ShadowRoot == "undefined"
      ? !1
      : t instanceof be(t).ShadowRoot || t instanceof ShadowRoot;
  }
  function mi(t) {
    let { overflow: e, overflowX: n, overflowY: i } = Ft(t);
    return /auto|scroll|overlay|hidden/.test(e + i + n);
  }
  function ma(t) {
    return ["table", "td", "th"].includes(ge(t));
  }
  function Ao(t) {
    let e = /firefox/i.test(Io()),
      n = Ft(t);
    return (
      n.transform !== "none" ||
      n.perspective !== "none" ||
      n.contain === "paint" ||
      ["transform", "perspective"].includes(n.willChange) ||
      (e && n.willChange === "filter") ||
      (e && !!n.filter && n.filter !== "none")
    );
  }
  function Po() {
    return !/^((?!chrome|android).)*safari/i.test(Io());
  }
  var wo = Math.min,
    Ht = Math.max,
    pi = Math.round;
  function ve(t, e, n) {
    var i, o, s, l;
    e === void 0 && (e = !1), n === void 0 && (n = !1);
    let a = t.getBoundingClientRect(),
      c = 1,
      d = 1;
    e &&
      he(t) &&
      ((c = (t.offsetWidth > 0 && pi(a.width) / t.offsetWidth) || 1),
      (d = (t.offsetHeight > 0 && pi(a.height) / t.offsetHeight) || 1));
    let h = Re(t) ? be(t) : window,
      p = !Po() && n,
      b =
        (a.left +
          (p && (i = (o = h.visualViewport) == null ? void 0 : o.offsetLeft) != null ? i : 0)) /
        c,
      E =
        (a.top +
          (p && (s = (l = h.visualViewport) == null ? void 0 : l.offsetTop) != null ? s : 0)) /
        d,
      v = a.width / c,
      y = a.height / d;
    return { width: v, height: y, top: E, right: b + v, bottom: E + y, left: b, x: b, y: E };
  }
  function Ce(t) {
    return ((e = t), (e instanceof be(e).Node ? t.ownerDocument : t.document) || window.document)
      .documentElement;
    var e;
  }
  function gi(t) {
    return Re(t)
      ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
      : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
  }
  function Oo(t) {
    return ve(Ce(t)).left + gi(t).scrollLeft;
  }
  function ga(t, e, n) {
    let i = he(e),
      o = Ce(e),
      s = ve(
        t,
        i &&
          (function (c) {
            let d = ve(c);
            return pi(d.width) !== c.offsetWidth || pi(d.height) !== c.offsetHeight;
          })(e),
        n === "fixed"
      ),
      l = { scrollLeft: 0, scrollTop: 0 },
      a = { x: 0, y: 0 };
    if (i || (!i && n !== "fixed"))
      if (((ge(e) !== "body" || mi(o)) && (l = gi(e)), he(e))) {
        let c = ve(e, !0);
        (a.x = c.x + e.clientLeft), (a.y = c.y + e.clientTop);
      } else o && (a.x = Oo(o));
    return {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height,
    };
  }
  function Ho(t) {
    return ge(t) === "html"
      ? t
      : t.assignedSlot || t.parentNode || (pr(t) ? t.host : null) || Ce(t);
  }
  function Lo(t) {
    return he(t) && getComputedStyle(t).position !== "fixed" ? t.offsetParent : null;
  }
  function hr(t) {
    let e = be(t),
      n = Lo(t);
    for (; n && ma(n) && getComputedStyle(n).position === "static"; ) n = Lo(n);
    return n &&
      (ge(n) === "html" ||
        (ge(n) === "body" && getComputedStyle(n).position === "static" && !Ao(n)))
      ? e
      : n ||
          (function (i) {
            let o = Ho(i);
            for (pr(o) && (o = o.host); he(o) && !["html", "body"].includes(ge(o)); ) {
              if (Ao(o)) return o;
              o = o.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function ko(t) {
    if (he(t)) return { width: t.offsetWidth, height: t.offsetHeight };
    let e = ve(t);
    return { width: e.width, height: e.height };
  }
  function Fo(t) {
    let e = Ho(t);
    return ["html", "body", "#document"].includes(ge(e))
      ? t.ownerDocument.body
      : he(e) && mi(e)
      ? e
      : Fo(e);
  }
  function fi(t, e) {
    var n;
    e === void 0 && (e = []);
    let i = Fo(t),
      o = i === ((n = t.ownerDocument) == null ? void 0 : n.body),
      s = be(i),
      l = o ? [s].concat(s.visualViewport || [], mi(i) ? i : []) : i,
      a = e.concat(l);
    return o ? a : a.concat(fi(l));
  }
  function Co(t, e, n) {
    return e === "viewport"
      ? Ot(
          (function (i, o) {
            let s = be(i),
              l = Ce(i),
              a = s.visualViewport,
              c = l.clientWidth,
              d = l.clientHeight,
              h = 0,
              p = 0;
            if (a) {
              (c = a.width), (d = a.height);
              let b = Po();
              (b || (!b && o === "fixed")) && ((h = a.offsetLeft), (p = a.offsetTop));
            }
            return { width: c, height: d, x: h, y: p };
          })(t, n)
        )
      : Re(e)
      ? (function (i, o) {
          let s = ve(i, !1, o === "fixed"),
            l = s.top + i.clientTop,
            a = s.left + i.clientLeft;
          return {
            top: l,
            left: a,
            x: a,
            y: l,
            right: a + i.clientWidth,
            bottom: l + i.clientHeight,
            width: i.clientWidth,
            height: i.clientHeight,
          };
        })(e, n)
      : Ot(
          (function (i) {
            var o;
            let s = Ce(i),
              l = gi(i),
              a = (o = i.ownerDocument) == null ? void 0 : o.body,
              c = Ht(s.scrollWidth, s.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
              d = Ht(
                s.scrollHeight,
                s.clientHeight,
                a ? a.scrollHeight : 0,
                a ? a.clientHeight : 0
              ),
              h = -l.scrollLeft + Oo(i),
              p = -l.scrollTop;
            return (
              Ft(a || s).direction === "rtl" && (h += Ht(s.clientWidth, a ? a.clientWidth : 0) - c),
              { width: c, height: d, x: h, y: p }
            );
          })(Ce(t))
        );
  }
  function va(t) {
    let e = fi(t),
      n = ["absolute", "fixed"].includes(Ft(t).position) && he(t) ? hr(t) : t;
    return Re(n)
      ? e.filter(
          i =>
            Re(i) &&
            (function (o, s) {
              let l = s.getRootNode == null ? void 0 : s.getRootNode();
              if (o.contains(s)) return !0;
              if (l && pr(l)) {
                let a = s;
                do {
                  if (a && o === a) return !0;
                  a = a.parentNode || a.host;
                } while (a);
              }
              return !1;
            })(i, n) &&
            ge(i) !== "body"
        )
      : [];
  }
  var ba = {
    getClippingRect: function (t) {
      let { element: e, boundary: n, rootBoundary: i, strategy: o } = t,
        s = [...(n === "clippingAncestors" ? va(e) : [].concat(n)), i],
        l = s[0],
        a = s.reduce((c, d) => {
          let h = Co(e, d, o);
          return (
            (c.top = Ht(h.top, c.top)),
            (c.right = wo(h.right, c.right)),
            (c.bottom = wo(h.bottom, c.bottom)),
            (c.left = Ht(h.left, c.left)),
            c
          );
        }, Co(e, l, o));
      return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
    },
    convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
      let { rect: e, offsetParent: n, strategy: i } = t,
        o = he(n),
        s = Ce(n);
      if (n === s) return e;
      let l = { scrollLeft: 0, scrollTop: 0 },
        a = { x: 0, y: 0 };
      if ((o || (!o && i !== "fixed")) && ((ge(n) !== "body" || mi(s)) && (l = gi(n)), he(n))) {
        let c = ve(n, !0);
        (a.x = c.x + n.clientLeft), (a.y = c.y + n.clientTop);
      }
      return W(x({}, e), { x: e.x - l.scrollLeft + a.x, y: e.y - l.scrollTop + a.y });
    },
    isElement: Re,
    getDimensions: ko,
    getOffsetParent: hr,
    getDocumentElement: Ce,
    getElementRects: t => {
      let { reference: e, floating: n, strategy: i } = t;
      return { reference: ga(e, hr(n), i), floating: W(x({}, ko(n)), { x: 0, y: 0 }) };
    },
    getClientRects: t => Array.from(t.getClientRects()),
    isRTL: t => Ft(t).direction === "rtl",
  };
  function _o(t, e, n, i) {
    i === void 0 && (i = {});
    let {
        ancestorScroll: o = !0,
        ancestorResize: s = !0,
        elementResize: l = !0,
        animationFrame: a = !1,
      } = i,
      c = o && !a,
      d = s && !a,
      h = c || d ? [...(Re(t) ? fi(t) : []), ...fi(e)] : [];
    h.forEach(v => {
      c && v.addEventListener("scroll", n, { passive: !0 }), d && v.addEventListener("resize", n);
    });
    let p,
      b = null;
    l && ((b = new ResizeObserver(n)), Re(t) && !a && b.observe(t), b.observe(e));
    let E = a ? ve(t) : null;
    return (
      a &&
        (function v() {
          let y = ve(t);
          !E || (y.x === E.x && y.y === E.y && y.width === E.width && y.height === E.height) || n(),
            (E = y),
            (p = requestAnimationFrame(v));
        })(),
      l || n(),
      () => {
        var v;
        h.forEach(y => {
          c && y.removeEventListener("scroll", n), d && y.removeEventListener("resize", n);
        }),
          (v = b) == null || v.disconnect(),
          (b = null),
          a && cancelAnimationFrame(p);
      }
    );
  }
  var Bo = (t, e, n) => To(t, e, x({ platform: ba }, n));
  var je,
    vi,
    bi = class {
      constructor(e, n, i) {
        u(this, je, void 0);
        u(this, vi, { placement: "bottom-start", flip: !1, offset: 10 });
        this.update = () =>
          B(this, null, function* () {
            let e = {
                placement: this.options.placement,
                middleware: [dr(this.options.offset), this.options.flip && ur()].filter(Boolean),
              },
              { x: n, y: i } = yield Bo(this.referenceEl, this.floatingEl, e);
            Object.assign(this.floatingEl.style, { left: `${n}px`, top: `${i}px` });
          });
        (this.referenceEl = e),
          (this.floatingEl = n),
          f(this, je, x(x({}, r(this, vi)), i)),
          (this.destroy = _o(this.referenceEl, this.floatingEl, this.update));
      }
      get options() {
        return r(this, je);
      }
      set options(e) {
        f(this, je, x(x({}, r(this, je)), e));
      }
    };
  (je = new WeakMap()), (vi = new WeakMap());
  var ee =
    "*{box-sizing:border-box!important}[role=button]{cursor:pointer}.MapboxSearch{--width:0;display:none}.Results{background-color:var(--colorBackground);border:var(--border);border-radius:var(--borderRadius);box-shadow:var(--boxShadow);color:var(--colorText);font-family:var(--fontFamily);font-size:var(--unit);font-weight:var(--fontWeight);line-height:var(--lineHeight);min-width:var(--minWidth);overflow-y:auto;position:absolute;transform:translateZ(0);transition:visibility var(--duration);width:var(--width);z-index:1000}.Results:not([aria-hidden=true]){visibility:visible}.Results[aria-hidden=true]{animation:fadein var(--duration) var(--curve) reverse forwards;visibility:hidden}.Suggestion{align-items:center;display:flex;padding:var(--padding)}.Suggestion:hover{cursor:pointer}.Suggestion[aria-selected=true]{background-color:var(--colorBackgroundHover)}.Suggestion:active{background-color:var(--colorBackgroundActive)}.SuggestionName{font-weight:var(--fontWeightBold)}.SuggestionIcon{margin-right:6px}.SuggestionIcon[aria-hidden=true]{display:none}.ResultsAttribution{padding:var(--paddingFooterLabel)}.ResultsAttribution a{color:var(--colorSecondary)}.ResultsAttribution a:not(:hover){text-decoration:none}.ResultsList{list-style:none;margin:0;padding:0}.Label{display:none}.Input{background-color:var(--colorBackground);border:var(--border);border-radius:var(--borderRadius);box-shadow:var(--boxShadow);color:var(--colorText);font-family:var(--fontFamily);font-size:var(--unit);font-weight:var(--fontWeight);line-height:var(--lineHeight);padding:var(--padding);width:100%}mapbox-address-confirmation-feature[aria-hidden=true],mapbox-address-confirmation-no-feature[aria-hidden=true]{display:none}.MapboxAddressConfirmation{align-items:center;background-color:var(--colorBackdrop);bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;transform:translateZ(0);z-index:1000}.MapboxAddressConfirmation:not([aria-hidden=true]){animation:fadein var(--duration) var(--curve) forwards;visibility:visible}.MapboxAddressConfirmation[aria-hidden=true]{visibility:hidden}.ContentFeature,.ContentNoFeature{width:var(--minWidth)}.Modal{background-color:var(--colorBackground);border:var(--border);border-radius:var(--borderRadius);box-shadow:var(--boxShadow);color:var(--colorText);font-family:var(--fontFamily);font-size:var(--unit);font-weight:var(--fontWeight);line-height:var(--lineHeight);padding:var(--paddingModal);width:100%}@media screen and (max-width:480px){.MapboxAddressConfirmation{align-items:flex-end}.ContentFeature,.ContentNoFeature{width:100%}.Modal{border-bottom-left-radius:0;border-bottom-right-radius:0}}.ModalHeader{align-items:center;color:var(--colorPrimary);display:flex;font-size:var(--unitHeader);font-weight:var(--fontWeightBold);margin-bottom:var(--spacing);user-select:none;width:100%}.ModalMap{height:calc(var(--minWidth)*9/16);margin-left:calc(var(--paddingModal)*-1);width:calc(100% + var(--paddingModal)*2)}.ModalMap[aria-hidden=true]{display:none}.Icon{height:var(--unitHeader);width:var(--unitHeader)}.Icon.IconClose{color:var(--colorSecondary)}.ModalHeaderTitle{flex:1;margin-left:.25em}.ModalFooter{color:var(--colorSecondary);margin-top:var(--spacing);text-align:center}.ModalFooter[aria-hidden=true]{display:none}.ModalSubheader{font-weight:var(--fontWeightBold);user-select:none}.ModalDescription{color:var(--colorPrimary)}.ModalAddress,.ModalSubheader{margin-bottom:var(--spacing)}.ModalAddress.ModalAddressApprove{color:var(--colorPrimary)}.Button{border-radius:var(--borderRadius);cursor:pointer;font-weight:var(--fontWeightSemibold);margin-top:var(--spacing);padding:var(--padding);text-align:center;user-select:none;width:100%}.Button[aria-hidden=true]{display:none}.Button.ButtonPrimary{background-color:var(--colorPrimary);color:var(--colorBackground)}.Button.ButtonSecondary{border:1px solid var(--colorSecondary);color:var(--colorSecondary)}@keyframes fadein{0%{opacity:0}to{opacity:1}}.MapboxAddressMinimap{font-family:var(--fontFamily);font-size:var(--unit);font-weight:var(--fontWeight);line-height:var(--lineHeight)}.MapboxAddressMinimap[aria-hidden=true]{display:none}.MinimapImageContainer{border-radius:var(--borderRadius);overflow:hidden}.MinimapImage{height:unset;max-height:unset;max-width:unset;position:relative;width:unset}.MinimapInnerFrame{border:var(--border);border-radius:inherit;height:inherit;left:0;overflow:hidden;position:absolute;top:0;width:inherit}.MinimapMarker{left:50%;position:absolute;top:50%}.MinimapMarker>svg{color:var(--colorPrimary);display:block!important}.MinimapAttributionLogo{bottom:0;left:0;margin:0 0 6px 6px;position:absolute}.MinimapAttributionLogo a{cursor:pointer;display:block;height:23px;width:88px}.MinimapAttributionText{background-color:hsla(0,0%,100%,.65);bottom:0;font:11px/16px Helvetica Neue,Arial,Helvetica,sans-serif;padding:0 5px;position:absolute;right:0}.MinimapAttributionText a{color:rgba(0,0,0,.75);text-decoration:none}.MinimapAttributionText a:hover{color:inherit;text-decoration:underline}.MinimapAttributionText a:not(:first-child){margin-left:3px}.MinimapStyleToggle{background-position:0;background-repeat:no-repeat;background-size:contain;border:2px solid #fff;border-radius:3px;box-shadow:var(--boxShadow);cursor:pointer;height:2em;position:absolute;right:var(--spacing);top:var(--spacing);width:2em}.MinimapFooter{color:var(--colorSecondary);font-family:var(--fontFamily);font-size:var(--unit);margin-top:var(--spacing)}.MinimapFooter[aria-hidden=true]{display:none}.MinimapEditButtons{bottom:26px;display:flex;font-family:var(--fontFamily);position:absolute;right:var(--spacing)}.MinimapEditButtons .Button{box-shadow:var(--boxShadow)}.MinimapButtonCancel{background-color:var(--colorBackground);margin-left:var(--spacing)}.draggable{cursor:move;cursor:grab}.draggable:active{cursor:grabbing}";
  var S = class extends CustomEvent {
    constructor(e, n) {
      super(e, { composed: !0, detail: n });
    }
    clone(e) {
      let n = new S(this.type, this.detail);
      return e && Object.defineProperty(n, "target", { value: e }), n;
    }
  };
  var No = "Type in 2 or more characters for results.",
    Do =
      "When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.",
    jo = "No search results.",
    Uo = (t, e, n) =>
      `${e} ${e === 1 ? "result is" : "results are"} available. ${t}. ${n} of ${e} is selected.`,
    $o = t =>
      `${t} ${
        t === 1 ? "result is" : "results are"
      } available. Use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.`;
  function yi(t) {
    let e = t.currentTarget;
    (t.key === " " || t.key === "Enter") &&
      (t.preventDefault(),
      t.stopPropagation(),
      e.dispatchEvent(new MouseEvent("click", { bubbles: !0, composed: !0 })));
  }
  var Wo = "address-autofill__description",
    it = () => {
      let t = document.createElement("div");
      t.setAttribute("aria-live", "polite"),
        t.setAttribute("aria-atomic", "true"),
        t.setAttribute("role", "status"),
        t.setAttribute(
          "style",
          "border: 0px;clip: rect(0px, 0px, 0px, 0px);height: 1px;margin-bottom: -1px;margin-right: -1px;overflow: hidden;padding: 0px;position: absolute;white-space: nowrap;width: 1px;"
        );
      let e = document.createElement("div");
      return e.setAttribute("id", Wo), t.appendChild(e), t;
    },
    fr = t => {
      var n;
      let e = (n = document.body.querySelector(`[id="${Wo}"]`)) != null ? n : null;
      e && (e.textContent = t);
    },
    Yo = (t, e, n) => {
      let i = null,
        o = !e || e.length === 0;
      if ((t == null ? void 0 : t.length) < 2) i = No + " " + Do;
      else if (o) i = jo;
      else if (n !== void 0) {
        let s = e[n],
          l = s.address || s.full_address || s.feature_name;
        i = Uo(l, e.length, n + 1);
      } else i = $o(e.length);
      return i;
    };
  var xa = new Set([
      "street-address",
      "address-line1",
      "address-line2",
      "address-line3",
      "address-level4",
      "address-level3",
      "address-level2",
      "address-level1",
      "country",
      "country-name",
      "postal-code",
    ]),
    Ea = new Set(["off", "on", "true", "false"]);
  function mr(t) {
    let e = t.parentNode;
    for (; e; ) {
      if (e instanceof HTMLFormElement) return e;
      e = e.parentNode;
    }
    return null;
  }
  function _t(t) {
    let e = t || document;
    return Array.from(
      e.querySelectorAll(
        'input[autocomplete~="address-line1"], input[autocomplete~="street-address"]'
      )
    );
  }
  var Ma = "section-",
    Ta = "section-default",
    Sa = "section-shipping",
    Aa = "section-billing";
  function Bt(t) {
    let e = Array.from(t.querySelectorAll("[autocomplete]")).filter(i => {
        let o = i.tagName.toLowerCase();
        return o === "input" || o === "select" || o === "textarea";
      }),
      n = [];
    for (let i of e) {
      if (!jr(i)) continue;
      let o = i.getAttribute("autocomplete") || "";
      if (!o || Ea.has(o)) continue;
      let s = o.toLowerCase().split(" ");
      if (s.length > 3) continue;
      let l = s[s.length - 1];
      if (!xa.has(l)) continue;
      s.pop();
      let a = Ta;
      if (s.length) {
        let c = s[s.length - 1];
        c === "shipping" && ((a = Sa), s.pop()), c === "billing" && ((a = Aa), s.pop());
      }
      if (s.length) {
        let c = s[s.length - 1];
        c.startsWith(Ma) && (a = c);
      }
      n.push({ input: i, section: a, field: l });
    }
    return n;
  }
  function Nt(t, e) {
    let n = [],
      i = [],
      o = Bt(t),
      s = null;
    for (let { input: l, section: a, field: c } of o) {
      let d = n.length - 1,
        h = !1;
      if ((n.length ? (i[d] !== a || n[d][c]) && (h = !0) : (h = !0), h)) {
        if (s) break;
        n.push({ [c]: l }), i.push(a), d++;
      } else n[d][c] = l;
      l === e && (s = n[d]);
    }
    return s != null ? s : {};
  }
  function gr(t, e, n) {
    var l;
    let i = Nt(t, e),
      o = [n.address_line1, n.address_line2, n.address_line3].filter(a => Boolean(a)).join(", ");
    ae(i["street-address"], o),
      ae(i["address-line1"], n.address_line1 || ""),
      ae(i["address-level1"], n.address_level1 || ""),
      ae(i["address-level2"], n.address_level2 || ""),
      ae(i["address-level3"], n.address_level3 || "");
    let s = n.country_code || ((l = n.metadata) == null ? void 0 : l.iso_3166_1) || "";
    if (i.country && i.country instanceof HTMLSelectElement) {
      let a = i.country.querySelector("option").value,
        c = a === a.toUpperCase();
      ae(i.country, c ? s.toUpperCase() : s);
    } else ae(i.country, s);
    ae(i["country-name"], n.country || ""), ae(i["postal-code"], n.postcode || "");
  }
  function Ei(t, e) {
    let n = Nt(t, e),
      i = {};
    for (let [o, s] of Object.entries(n)) (s == null ? void 0 : s.value) && (i[o] = s.value);
    return i;
  }
  function rt(t) {
    let e = [];
    return (
      t["street-address"]
        ? e.push(t["street-address"])
        : (e.push(t["address-line1"] || ""),
          e.push(t["address-line2"] || ""),
          e.push(t["address-line3"] || "")),
      e.push(t["address-level3"] || ""),
      e.push(t["address-level2"] || ""),
      e.push(t["address-level1"] || ""),
      e.push(t["postal-code"] || ""),
      t["country-name"] ? e.push(t["country-name"]) : e.push(t.country || ""),
      e.filter(n => Boolean(n)).join(", ")
    );
  }
  function Dt(t, e) {
    let n = mr(e);
    if (!n) return;
    let i = et(t);
    gr(n, e, i);
    let o = Nt(n, e);
    o["address-line2"] && o["address-line2"].focus();
  }
  function zo(t) {
    var i;
    let e = {},
      n = [t.properties.address_line1, t.properties.address_line2, t.properties.address_line3]
        .filter(o => Boolean(o))
        .join(", ");
    return (
      (e["street-address"] = n),
      (e["address-line1"] = t.properties.address_line1),
      (e["address-line2"] = t.properties.address_line2),
      (e["address-line3"] = t.properties.address_line3),
      (e["address-level1"] = t.properties.address_level1),
      (e["address-level2"] = t.properties.address_level2),
      (e["address-level3"] = t.properties.address_level3),
      (e.country = (i = t.properties.metadata) == null ? void 0 : i.iso_3166_1),
      (e["country-name"] = t.properties.country),
      (e["postal-code"] = t.properties.postcode),
      e
    );
  }
  function Go(t, e) {
    for (let [n, i] of Object.entries(t)) if (e[n] !== i) return !0;
    return !1;
  }
  var xi = t =>
      "address_line1" in t
        ? t.address_line1 || t.matching_name || t.feature_name
        : "matching_name" in t
        ? t.matching_name || t.feature_name
        : t.place_name.split(",")[0],
    Mi = t =>
      t.filter((e, n, i) => {
        let o = xi(e);
        return e.accuracy !== "street" || i.findIndex(s => o === xi(s)) === n;
      }),
    Xo = t =>
      "description" in t ? t.description : t.place_name.split(",").splice(1).join(",").trim(),
    te = (t, e, n) => {
      let s = n ? e || "address-line1" : "new-password";
      t && (t.autocomplete = s);
    },
    Ti = (t, e, n) => {
      if (!t || !n) return;
      te(t, e, !0);
      let i = { properties: W(x({}, n), { address_line1: n.address_line1 + " ", postcode: null }) };
      Dt(i, t), te(t, e, !1), t == null || t.focus();
    };
  function vr(t, e) {
    return `${t}-${e}`;
  }
  var Y,
    z,
    ot,
    ye,
    st,
    at,
    jt,
    qo,
    Si,
    wa,
    Ut,
    $t,
    Wt,
    lt,
    ct,
    Ue,
    Yt,
    xe = class extends G {
      constructor() {
        super(...arguments);
        u(this, jt);
        u(this, Si);
        this.suggestions = null;
        u(this, Y, null);
        u(this, z, void 0);
        u(this, ot, void 0);
        u(this, ye, void 0);
        u(this, st, void 0);
        u(this, at, void 0);
        u(this, Ut, {});
        u(this, $t, {});
        u(this, Wt, e => {
          let { Results: n } = r(this, z),
            i = e.target;
          if (i.dataset.mapboxSuccess) {
            delete i.dataset.mapboxSuccess;
            return;
          }
          let o = i.value;
          this.renderAriaMessage(),
            n.setAttribute("aria-busy", "true"),
            this.dispatchEvent(new S("input", o));
        });
        this.renderAriaMessage = () => {
          var n;
          let e = Yo(
            (n = this.input) == null ? void 0 : n.value,
            this.suggestions,
            this.selectedIndex
          );
          fr(e);
        };
        this.clearAriaMessage = () => {
          fr("");
        };
        this.handleSuggest = e => {
          if (((this.suggestions = e), (!e || e.length === 0) && this.renderAriaMessage(), !e)) {
            this.hideResults();
            return;
          }
          oi(this, Si, wa).call(this), e.length && oi(this, jt, qo).call(this);
          let { Results: n } = r(this, z);
          n.setAttribute("aria-busy", "false");
        };
        this.handleError = () => {
          let { Results: e } = r(this, z);
          e.setAttribute("aria-busy", "false"), this.hideResults();
        };
        u(this, lt, e =>
          B(this, null, function* () {
            let n = this.input;
            n && (n.dataset.mapboxSuccess = "true"),
              this.dispatchEvent(new S("select", e)),
              this.hideResults();
          })
        );
        u(this, ct, () => {
          let e = this.input;
          delete e.dataset.mapboxSuccess,
            this.dispatchEvent(new S("focus")),
            this.renderAriaMessage(),
            oi(this, jt, qo).call(this);
        });
        u(this, Ue, () => {
          document.activeElement !== this.input &&
            (this.dispatchEvent(new S("blur")), this.clearAriaMessage(), this.hideResults());
        });
        this.handleArrowUp = () => {
          this.selectedIndex === void 0
            ? (this.selectedIndex = this.suggestions.length - 1)
            : this.selectedIndex === 0
            ? (this.selectedIndex = void 0)
            : (this.selectedIndex = Math.max(0, this.selectedIndex - 1));
        };
        this.handleArrowDown = () => {
          this.selectedIndex === void 0
            ? (this.selectedIndex = 0)
            : this.selectedIndex === this.suggestions.length - 1
            ? (this.selectedIndex = void 0)
            : (this.selectedIndex = Math.min(this.selectedIndex + 1, this.suggestions.length - 1));
        };
        u(this, Yt, e => {
          var n;
          if (!!((n = this.suggestions) == null ? void 0 : n.length)) {
            if (e.key === "ArrowDown") {
              e.preventDefault(), this.handleArrowDown();
              return;
            }
            if (e.key === "ArrowUp") {
              e.preventDefault(), this.handleArrowUp();
              return;
            }
            if (e.key === "Escape") {
              this.hideResults();
              return;
            }
            if (this.selectedIndex !== void 0) {
              if (e.key === "Tab") {
                r(this, lt).call(this, this.suggestions[this.selectedIndex]);
                return;
              }
              if (e.key === "Enter") {
                e.preventDefault(), r(this, lt).call(this, this.suggestions[this.selectedIndex]);
                return;
              }
            }
          }
        });
      }
      get template() {
        return co;
      }
      get templateStyle() {
        return ee;
      }
      get templateUserStyle() {
        return U(".MapboxSearch", this.theme);
      }
      get input() {
        return r(this, st);
      }
      set input(e) {
        let n = r(this, st);
        n &&
          (n.removeEventListener("input", r(this, Wt)),
          n.removeEventListener("focus", r(this, ct)),
          n.removeEventListener("blur", r(this, Ue)),
          n.removeEventListener("keydown", r(this, Yt)),
          r(this, Y) && r(this, Y).destroy()),
          e &&
            (e.addEventListener("input", r(this, Wt)),
            e.addEventListener("focus", r(this, ct)),
            e.addEventListener("blur", r(this, Ue)),
            e.addEventListener("keydown", r(this, Yt)),
            e.setAttribute("role", "combobox"),
            e.setAttribute("aria-autocomplete", "list"),
            e.setAttribute("aria-controls", r(this, ye)),
            this.isConnected && f(this, Y, new bi(e, r(this, z).Results, this.popoverOptions))),
          f(this, st, e);
      }
      get selectedIndex() {
        return r(this, at);
      }
      set selectedIndex(e) {
        let n = r(this, at);
        f(this, at, e);
        let { ResultsList: i } = r(this, z),
          o = vr(r(this, ye), e);
        if (
          (e !== void 0
            ? (this.input.setAttribute("aria-activedescendant", o),
              i.setAttribute("aria-activedescendant", o))
            : (this.input.removeAttribute("aria-activedescendant"),
              i.removeAttribute("aria-activedescendant")),
          n !== e)
        ) {
          let s = vr(r(this, ye), n),
            l = i.querySelector(`#${s}`);
          if (
            (l == null || l.removeAttribute("aria-selected"),
            l == null || l.setAttribute("tabindex", "-1"),
            e !== void 0)
          ) {
            let a = i.querySelector(`#${o}`);
            a == null || a.setAttribute("aria-selected", "true"),
              a == null || a.setAttribute("tabindex", "0");
          }
        }
        this.renderAriaMessage();
      }
      hideResults() {
        let { Results: e, ResultsList: n } = r(this, z);
        e.setAttribute("aria-hidden", "true"),
          this.input.setAttribute("aria-expanded", "false"),
          n.removeAttribute("aria-activedescendant"),
          this.input.removeAttribute("aria-activedescendant");
      }
      renderItem(e) {
        let n = this.prepareTemplate(uo);
        return (n.id = vr(r(this, ye), e)), n;
      }
      fillItem(e, n, i, o) {
        let s = e.querySelector('[class$="SuggestionIcon"]'),
          l = e.querySelector('[class$="SuggestionName"]'),
          a = e.querySelector('[class$="SuggestionDesc"]');
        n.accuracy
          ? ((s.innerHTML = q(n.accuracy === "street" ? "street" : "addressMarker", this.theme)),
            s.removeAttribute("aria-hidden"))
          : s.setAttribute("aria-hidden", "true"),
          (l.textContent = a.textContent = ""),
          (l.textContent = xi(n)),
          (a.textContent = Xo(n)),
          i === this.selectedIndex
            ? e.setAttribute("aria-selected", "true")
            : e.removeAttribute("aria-selected"),
          e.setAttribute("aria-posinset", (i + 1).toString()),
          e.setAttribute("aria-setsize", o.toString());
      }
      get theme() {
        return r(this, Ut);
      }
      set theme(e) {
        f(this, Ut, e), !(!r(this, z) || !e) && this.updateTemplateUserStyle(U(".MapboxSearch", e));
      }
      get popoverOptions() {
        return r(this, $t);
      }
      set popoverOptions(e) {
        f(this, $t, e), r(this, Y) && ((r(this, Y).options = e), r(this, Y).update());
      }
      connectedCallback() {
        super.connectedCallback(),
          f(this, ot, this.dataset.seed + "-Label"),
          f(this, ye, this.dataset.seed + "-ResultsList"),
          f(
            this,
            z,
            se(this, {
              MapboxSearch: ".MapboxSearch",
              Results: ".Results",
              ResultsList: ".ResultsList",
              Label: ".Label",
            })
          );
        let { Results: e, ResultsList: n, Label: i } = r(this, z);
        (i.id = r(this, ot)),
          (n.id = r(this, ye)),
          n.setAttribute("aria-labelledby", r(this, ot)),
          e.addEventListener("blur", r(this, Ue)),
          !r(this, Y) &&
            this.input &&
            f(this, Y, new bi(this.input, r(this, z).Results, this.popoverOptions)),
          requestAnimationFrame(() => {
            r(this, Y) && r(this, Y).update();
          });
      }
      disconnectedCallback() {
        this.input = null;
        let { Results: e } = r(this, z);
        e.removeEventListener("blur", r(this, Ue)), r(this, Y) && r(this, Y).destroy();
      }
      focus() {
        document.activeElement === this.input ? r(this, ct).call(this) : this.input.focus();
      }
      blur() {
        this.input.blur();
      }
      updatePopover() {
        r(this, Y) && r(this, Y).update();
      }
    };
  (Y = new WeakMap()),
    (z = new WeakMap()),
    (ot = new WeakMap()),
    (ye = new WeakMap()),
    (st = new WeakMap()),
    (at = new WeakMap()),
    (jt = new WeakSet()),
    (qo = function () {
      if (!this.suggestions || !this.suggestions.length) return;
      let { Results: e, MapboxSearch: n } = r(this, z),
        i = this.input.getBoundingClientRect();
      n.style.setProperty("--width", `${i.width}px`),
        n.style.setProperty("display", "block"),
        this.input.setAttribute("aria-expanded", "true"),
        e.removeAttribute("aria-hidden"),
        (this.selectedIndex = void 0);
    }),
    (Si = new WeakSet()),
    (wa = function () {
      let { ResultsList: e } = r(this, z);
      if (!this.suggestions || !this.suggestions.length) {
        (e.innerHTML = ""), this.hideResults();
        return;
      }
      let n = Nr(e);
      if (this.suggestions.length > n.length)
        for (let i = n.length; i < this.suggestions.length; i++) {
          let o = this.renderItem(i);
          n.push(o),
            (o.onmouseenter = () => {
              this.selectedIndex = i;
            }),
            (o.onmouseleave = () => {
              this.selectedIndex = void 0;
            }),
            e.appendChild(o);
        }
      if (this.suggestions.length < n.length)
        for (let i = this.suggestions.length; i < n.length; i++) n[i].remove();
      for (let i of this.suggestions) {
        let o = this.suggestions.indexOf(i),
          s = n[o];
        this.fillItem(s, i, o, this.suggestions.length),
          (s.onclick = () => {
            r(this, lt).call(this, i);
          });
      }
    }),
    (Ut = new WeakMap()),
    ($t = new WeakMap()),
    (Wt = new WeakMap()),
    (lt = new WeakMap()),
    (ct = new WeakMap()),
    (Ue = new WeakMap()),
    (Yt = new WeakMap());
  window.MapboxSearchListbox = xe;
  window.customElements.get("mapbox-search-listbox") ||
    customElements.define("mapbox-search-listbox", xe);
  var Mr = _r(Ko());
  var Qo = [
      "input",
      "select",
      "textarea",
      "a[href]",
      "button",
      "[tabindex]",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable="false"])',
      "details>summary:first-of-type",
      "details",
    ],
    br = Qo.join(","),
    zt =
      typeof Element == "undefined"
        ? function () {}
        : Element.prototype.matches ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector,
    Zo = function (e, n, i) {
      var o = Array.prototype.slice.apply(e.querySelectorAll(br));
      return n && zt.call(e, br) && o.unshift(e), (o = o.filter(i)), o;
    },
    La = function (e) {
      return e.contentEditable === "true";
    },
    Jo = function (e) {
      var n = parseInt(e.getAttribute("tabindex"), 10);
      return isNaN(n)
        ? La(e) ||
          ((e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") &&
            e.getAttribute("tabindex") === null)
          ? 0
          : e.tabIndex
        : n;
    },
    ka = function (e, n) {
      return e.tabIndex === n.tabIndex
        ? e.documentOrder - n.documentOrder
        : e.tabIndex - n.tabIndex;
    },
    yr = function (e) {
      return e.tagName === "INPUT";
    },
    Ca = function (e) {
      return yr(e) && e.type === "hidden";
    },
    Ra = function (e) {
      var n =
        e.tagName === "DETAILS" &&
        Array.prototype.slice.apply(e.children).some(function (i) {
          return i.tagName === "SUMMARY";
        });
      return n;
    },
    Ia = function (e, n) {
      for (var i = 0; i < e.length; i++) if (e[i].checked && e[i].form === n) return e[i];
    },
    Pa = function (e) {
      if (!e.name) return !0;
      var n = e.form || e.ownerDocument,
        i = function (a) {
          return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
        },
        o;
      if (
        typeof window != "undefined" &&
        typeof window.CSS != "undefined" &&
        typeof window.CSS.escape == "function"
      )
        o = i(window.CSS.escape(e.name));
      else
        try {
          o = i(e.name);
        } catch (l) {
          return (
            console.error(
              "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
              l.message
            ),
            !1
          );
        }
      var s = Ia(o, e.form);
      return !s || s === e;
    },
    Oa = function (e) {
      return yr(e) && e.type === "radio";
    },
    Ha = function (e) {
      return Oa(e) && !Pa(e);
    },
    Fa = function (e, n) {
      if (getComputedStyle(e).visibility === "hidden") return !0;
      var i = zt.call(e, "details>summary:first-of-type"),
        o = i ? e.parentElement : e;
      if (zt.call(o, "details:not([open]) *")) return !0;
      if (!n || n === "full")
        for (; e; ) {
          if (getComputedStyle(e).display === "none") return !0;
          e = e.parentElement;
        }
      else if (n === "non-zero-area") {
        var s = e.getBoundingClientRect(),
          l = s.width,
          a = s.height;
        return l === 0 && a === 0;
      }
      return !1;
    },
    _a = function (e) {
      if (yr(e) || e.tagName === "SELECT" || e.tagName === "TEXTAREA" || e.tagName === "BUTTON")
        for (var n = e.parentElement; n; ) {
          if (n.tagName === "FIELDSET" && n.disabled) {
            for (var i = 0; i < n.children.length; i++) {
              var o = n.children.item(i);
              if (o.tagName === "LEGEND") return !o.contains(e);
            }
            return !0;
          }
          n = n.parentElement;
        }
      return !1;
    },
    xr = function (e, n) {
      return !(n.disabled || Ca(n) || Fa(n, e.displayCheck) || Ra(n) || _a(n));
    },
    es = function (e, n) {
      return !(!xr(e, n) || Ha(n) || Jo(n) < 0);
    },
    ts = function (e, n) {
      n = n || {};
      var i = [],
        o = [],
        s = Zo(e, n.includeContainer, es.bind(null, n));
      s.forEach(function (a, c) {
        var d = Jo(a);
        d === 0 ? i.push(a) : o.push({ documentOrder: c, tabIndex: d, node: a });
      });
      var l = o
        .sort(ka)
        .map(function (a) {
          return a.node;
        })
        .concat(i);
      return l;
    },
    ns = function (e, n) {
      n = n || {};
      var i = Zo(e, n.includeContainer, xr.bind(null, n));
      return i;
    },
    Gt = function (e, n) {
      if (((n = n || {}), !e)) throw new Error("No node provided");
      return zt.call(e, br) === !1 ? !1 : es(n, e);
    },
    Ba = Qo.concat("iframe").join(","),
    wi = function (e, n) {
      if (((n = n || {}), !e)) throw new Error("No node provided");
      return zt.call(e, Ba) === !1 ? !1 : xr(n, e);
    };
  function is(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (o) {
          return Object.getOwnPropertyDescriptor(t, o).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function Na(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? is(Object(n), !0).forEach(function (i) {
            Da(t, i, n[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : is(Object(n)).forEach(function (i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i));
          });
    }
    return t;
  }
  function Da(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (t[e] = n),
      t
    );
  }
  var rs = (function () {
      var t = [];
      return {
        activateTrap: function (n) {
          if (t.length > 0) {
            var i = t[t.length - 1];
            i !== n && i.pause();
          }
          var o = t.indexOf(n);
          o === -1 || t.splice(o, 1), t.push(n);
        },
        deactivateTrap: function (n) {
          var i = t.indexOf(n);
          i !== -1 && t.splice(i, 1), t.length > 0 && t[t.length - 1].unpause();
        },
      };
    })(),
    ja = function (e) {
      return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
    },
    Ua = function (e) {
      return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
    },
    $a = function (e) {
      return e.key === "Tab" || e.keyCode === 9;
    },
    os = function (e) {
      return setTimeout(e, 0);
    },
    Er = function (e, n) {
      var i = -1;
      return (
        e.every(function (o, s) {
          return n(o) ? ((i = s), !1) : !0;
        }),
        i
      );
    },
    Xt = function (e) {
      for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
        i[o - 1] = arguments[o];
      return typeof e == "function" ? e.apply(void 0, i) : e;
    },
    Li = function (e) {
      return e.target.shadowRoot && typeof e.composedPath == "function"
        ? e.composedPath()[0]
        : e.target;
    },
    ss = function (e, n) {
      var i = (n == null ? void 0 : n.document) || document,
        o = Na({ returnFocusOnDeactivate: !0, escapeDeactivates: !0, delayInitialFocus: !0 }, n),
        s = {
          containers: [],
          tabbableGroups: [],
          nodeFocusedBeforeActivation: null,
          mostRecentlyFocusedNode: null,
          active: !1,
          paused: !1,
          delayInitialFocusTimer: void 0,
        },
        l,
        a = function (m, g, M) {
          return m && m[g] !== void 0 ? m[g] : o[M || g];
        },
        c = function (m) {
          return !!(
            m &&
            s.containers.some(function (g) {
              return g.contains(m);
            })
          );
        },
        d = function (m) {
          var g = o[m];
          if (typeof g == "function") {
            for (var M = arguments.length, w = new Array(M > 1 ? M - 1 : 0), k = 1; k < M; k++)
              w[k - 1] = arguments[k];
            g = g.apply(void 0, w);
          }
          if (!g) {
            if (g === void 0 || g === !1) return g;
            throw new Error(
              "`".concat(m, "` was specified but was not a node, or did not return a node")
            );
          }
          var F = g;
          if (typeof g == "string" && ((F = i.querySelector(g)), !F))
            throw new Error("`".concat(m, "` as selector refers to no known node"));
          return F;
        },
        h = function () {
          var m = d("initialFocus");
          if (m === !1) return !1;
          if (m === void 0)
            if (c(i.activeElement)) m = i.activeElement;
            else {
              var g = s.tabbableGroups[0],
                M = g && g.firstTabbableNode;
              m = M || d("fallbackFocus");
            }
          if (!m) throw new Error("Your focus-trap needs to have at least one focusable element");
          return m;
        },
        p = function () {
          if (
            ((s.tabbableGroups = s.containers
              .map(function (m) {
                var g = ts(m),
                  M = ns(m);
                if (g.length > 0)
                  return {
                    container: m,
                    firstTabbableNode: g[0],
                    lastTabbableNode: g[g.length - 1],
                    nextTabbableNode: function (k) {
                      var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                        Ae = M.findIndex(function (Z) {
                          return Z === k;
                        });
                      return F
                        ? M.slice(Ae + 1).find(function (Z) {
                            return Gt(Z);
                          })
                        : M.slice(0, Ae)
                            .reverse()
                            .find(function (Z) {
                              return Gt(Z);
                            });
                    },
                  };
              })
              .filter(function (m) {
                return !!m;
              })),
            s.tabbableGroups.length <= 0 && !d("fallbackFocus"))
          )
            throw new Error(
              "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
            );
        },
        b = function O(m) {
          if (m !== !1 && m !== i.activeElement) {
            if (!m || !m.focus) {
              O(h());
              return;
            }
            m.focus({ preventScroll: !!o.preventScroll }),
              (s.mostRecentlyFocusedNode = m),
              ja(m) && m.select();
          }
        },
        E = function (m) {
          var g = d("setReturnFocus", m);
          return g || (g === !1 ? !1 : m);
        },
        v = function (m) {
          var g = Li(m);
          if (!c(g)) {
            if (Xt(o.clickOutsideDeactivates, m)) {
              l.deactivate({ returnFocus: o.returnFocusOnDeactivate && !wi(g) });
              return;
            }
            Xt(o.allowOutsideClick, m) || m.preventDefault();
          }
        },
        y = function (m) {
          var g = Li(m),
            M = c(g);
          M || g instanceof Document
            ? M && (s.mostRecentlyFocusedNode = g)
            : (m.stopImmediatePropagation(), b(s.mostRecentlyFocusedNode || h()));
        },
        T = function (m) {
          var g = Li(m);
          p();
          var M = null;
          if (s.tabbableGroups.length > 0) {
            var w = Er(s.tabbableGroups, function (St) {
                var At = St.container;
                return At.contains(g);
              }),
              k = w >= 0 ? s.tabbableGroups[w] : void 0;
            if (w < 0)
              m.shiftKey
                ? (M = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode)
                : (M = s.tabbableGroups[0].firstTabbableNode);
            else if (m.shiftKey) {
              var F = Er(s.tabbableGroups, function (St) {
                var At = St.firstTabbableNode;
                return g === At;
              });
              if (
                (F < 0 &&
                  (k.container === g || (wi(g) && !Gt(g) && !k.nextTabbableNode(g, !1))) &&
                  (F = w),
                F >= 0)
              ) {
                var Ae = F === 0 ? s.tabbableGroups.length - 1 : F - 1,
                  Z = s.tabbableGroups[Ae];
                M = Z.lastTabbableNode;
              }
            } else {
              var ie = Er(s.tabbableGroups, function (St) {
                var At = St.lastTabbableNode;
                return g === At;
              });
              if (
                (ie < 0 &&
                  (k.container === g || (wi(g) && !Gt(g) && !k.nextTabbableNode(g))) &&
                  (ie = w),
                ie >= 0)
              ) {
                var $i = ie === s.tabbableGroups.length - 1 ? 0 : ie + 1,
                  xs = s.tabbableGroups[$i];
                M = xs.firstTabbableNode;
              }
            }
          } else M = d("fallbackFocus");
          M && (m.preventDefault(), b(M));
        },
        A = function (m) {
          if (Ua(m) && Xt(o.escapeDeactivates, m) !== !1) {
            m.preventDefault(), l.deactivate();
            return;
          }
          if ($a(m)) {
            T(m);
            return;
          }
        },
        j = function (m) {
          if (!Xt(o.clickOutsideDeactivates, m)) {
            var g = Li(m);
            c(g) ||
              Xt(o.allowOutsideClick, m) ||
              (m.preventDefault(), m.stopImmediatePropagation());
          }
        },
        P = function () {
          if (!!s.active)
            return (
              rs.activateTrap(l),
              (s.delayInitialFocusTimer = o.delayInitialFocus
                ? os(function () {
                    b(h());
                  })
                : b(h())),
              i.addEventListener("focusin", y, !0),
              i.addEventListener("mousedown", v, { capture: !0, passive: !1 }),
              i.addEventListener("touchstart", v, { capture: !0, passive: !1 }),
              i.addEventListener("click", j, { capture: !0, passive: !1 }),
              i.addEventListener("keydown", A, { capture: !0, passive: !1 }),
              l
            );
        },
        Oe = function () {
          if (!!s.active)
            return (
              i.removeEventListener("focusin", y, !0),
              i.removeEventListener("mousedown", v, !0),
              i.removeEventListener("touchstart", v, !0),
              i.removeEventListener("click", j, !0),
              i.removeEventListener("keydown", A, !0),
              l
            );
        };
      return (
        (l = {
          activate: function (m) {
            if (s.active) return this;
            var g = a(m, "onActivate"),
              M = a(m, "onPostActivate"),
              w = a(m, "checkCanFocusTrap");
            w || p(),
              (s.active = !0),
              (s.paused = !1),
              (s.nodeFocusedBeforeActivation = i.activeElement),
              g && g();
            var k = function () {
              w && p(), P(), M && M();
            };
            return w ? (w(s.containers.concat()).then(k, k), this) : (k(), this);
          },
          deactivate: function (m) {
            if (!s.active) return this;
            clearTimeout(s.delayInitialFocusTimer),
              (s.delayInitialFocusTimer = void 0),
              Oe(),
              (s.active = !1),
              (s.paused = !1),
              rs.deactivateTrap(l);
            var g = a(m, "onDeactivate"),
              M = a(m, "onPostDeactivate"),
              w = a(m, "checkCanReturnFocus");
            g && g();
            var k = a(m, "returnFocus", "returnFocusOnDeactivate"),
              F = function () {
                os(function () {
                  k && b(E(s.nodeFocusedBeforeActivation)), M && M();
                });
              };
            return k && w ? (w(E(s.nodeFocusedBeforeActivation)).then(F, F), this) : (F(), this);
          },
          pause: function () {
            return s.paused || !s.active ? this : ((s.paused = !0), Oe(), this);
          },
          unpause: function () {
            return !s.paused || !s.active ? this : ((s.paused = !1), p(), P(), this);
          },
          updateContainerElements: function (m) {
            var g = [].concat(m).filter(Boolean);
            return (
              (s.containers = g.map(function (M) {
                return typeof M == "string" ? i.querySelector(M) : M;
              })),
              s.active && p(),
              this
            );
          },
        }),
        l.updateContainerElements(e),
        l
      );
    };
  var as = class {
      constructor() {
        this.feedbackEnabled = !0;
        this.autofillSessionToken = new J();
        this.autofillSessionEnabled = !1;
        this.detectBrowserAutofillEnabled = !1;
      }
    },
    R = new as();
  Object.defineProperty(R, "autofillSessionToken", { configurable: !1, writable: !1 });
  var Wa = N(`
<template>
  <div class="MapboxAddressConfirmation" aria-hidden="true">
    <mapbox-address-confirmation-feature class="ContentFeature"></mapbox-address-confirmation-feature>
    <mapbox-address-confirmation-no-feature class="ContentNoFeature"></mapbox-address-confirmation-no-feature>
  </div>
</template>
`),
    qt,
    K,
    $e,
    Vt,
    We = class extends G {
      constructor() {
        super(...arguments);
        u(this, qt, !1);
        u(this, K, void 0);
        u(this, $e, void 0);
        u(this, Vt, {});
      }
      get template() {
        return Wa;
      }
      get templateStyle() {
        return ee;
      }
      get templateUserStyle() {
        return U(".MapboxAddressConfirmation", this.theme);
      }
      get theme() {
        return r(this, Vt);
      }
      set theme(e) {
        if ((f(this, Vt, e), !r(this, K) || !e)) return;
        this.updateTemplateUserStyle(U(".MapboxAddressConfirmation", e));
        let { ContentFeature: n, ContentNoFeature: i } = r(this, K);
        (n.theme = e), (i.theme = e);
      }
      connectedCallback() {
        super.connectedCallback(),
          f(
            this,
            K,
            se(this, {
              MapboxAddressConfirmation: ".MapboxAddressConfirmation",
              ContentFeature: ".ContentFeature",
              ContentNoFeature: ".ContentNoFeature",
            })
          );
        let { MapboxAddressConfirmation: e } = r(this, K);
        e.setAttribute("aria-hidden", "true");
        let n = this.theme;
        if (n) {
          let { ContentFeature: i, ContentNoFeature: o } = r(this, K);
          (i.theme = n), (o.theme = n);
        }
      }
      disconnectedCallback() {
        f(this, $e, null);
      }
      hide() {
        var n;
        if ((f(this, qt, !1), !r(this, K))) return;
        let { MapboxAddressConfirmation: e } = r(this, K);
        e.setAttribute("aria-hidden", "true"),
          (n = r(this, $e)) == null || n.deactivate(),
          Mr.default.off();
      }
      show(e, n, i) {
        return B(this, null, function* () {
          var b;
          if (!r(this, K)) return { type: "cancel" };
          let { MapboxAddressConfirmation: o, ContentFeature: s, ContentNoFeature: l } = r(this, K),
            { accessToken: a, minimap: c = !1, theme: d, footer: h } = n;
          (this.theme = d),
            i
              ? (s.removeAttribute("aria-hidden"),
                l.setAttribute("aria-hidden", "true"),
                (s.minimap = c),
                (s.accessToken = a),
                (s.footer = h),
                s.update(i, e))
              : (s.setAttribute("aria-hidden", "true"),
                l.removeAttribute("aria-hidden"),
                l.update(e)),
            f(this, qt, !0),
            o.removeAttribute("aria-hidden"),
            Mr.default.on();
          let p = i ? s : l;
          return (
            f(this, $e, ss(o, { fallbackFocus: p, escapeDeactivates: () => (this.hide(), !0) })),
            (b = r(this, $e)) == null || b.activate(),
            new Promise(E => {
              let v = p,
                y = T => {
                  v.removeEventListener("result", y);
                  let A = T.detail;
                  this.hide(), E(A === "change" ? { type: "change", feature: i } : { type: A });
                };
              v.addEventListener("result", y);
            })
          );
        });
      }
      tryShow(e, n) {
        return B(this, null, function* () {
          if (!r(this, K)) return { type: "cancel" };
          let { accessToken: i, options: o = {} } = n,
            s = new tr(x({ accessToken: i }, o)),
            l = rt(e),
            c = (yield s.validate(l, { sessionToken: R.autofillSessionToken })).features[0];
          if (c) {
            let d = p => p.properties.match_code.confidence === nr.exact,
              { skipConfirmModal: h = d } = n;
            if (h(c)) return { type: "nochange" };
          }
          return yield this.show(e, n, c);
        });
      }
    };
  (qt = new WeakMap()), (K = new WeakMap()), ($e = new WeakMap()), (Vt = new WeakMap());
  window.MapboxAddressConfirmation = We;
  window.customElements.get("mapbox-address-confirmation") ||
    customElements.define("mapbox-address-confirmation", We);
  var Tr = new We();
  function ki(n) {
    return B(this, arguments, function* (t, e = {}) {
      let { sections: i = [] } = e;
      Tr.parentNode || document.body.appendChild(Tr);
      let o = { type: "nochange" },
        s = _t(t),
        l = Bt(t),
        a = Array.from(document.querySelectorAll("mapbox-search-listbox"));
      for (let c of s) {
        if (i.length) {
          let v = l.find(y => y.input === c);
          if (!v || !i.includes(v.section)) continue;
        }
        let d = Ei(t, c),
          h = a.find(v => v.input === c),
          p = h == null ? void 0 : h.autofillHost;
        if (p) {
          let v = p.retrieveFeature;
          if (v) {
            let y = zo(v);
            if (!Go(d, y)) continue;
          }
        }
        let b = e.accessToken || R.accessToken,
          E = yield Tr.tryShow(d, W(x({}, e), { accessToken: b }));
        if (E.type === "change")
          if (h) p.simulateRetrieve(E.feature);
          else {
            c.dataset.mapboxSuccess = "true";
            let v = et(E.feature);
            gr(t, c, v);
          }
        E.type === "change" && o.type !== "cancel" && (o = E), E.type === "cancel" && (o = E);
      }
      return o;
    });
  }
  function Ci(t, e) {
    if (e) {
      let n = N(`
        <span>
          <span></span>
          <br />
          <span></span>
        </span>
      `),
        [i, o] = Array.from(n.querySelectorAll("span > span")),
        s = e.split(",");
      if (
        ((i.textContent = s[0].trim()),
        (o.textContent = s.slice(1).join(",").trim()),
        t["address-line2"])
      ) {
        let l = document.createElement("span");
        (l.textContent = t["address-line2"]),
          n.insertBefore(l, o),
          n.insertBefore(document.createElement("br"), o);
      }
      if (t["address-line3"]) {
        let l = document.createElement("span");
        (l.textContent = t["address-line3"]),
          n.insertBefore(l, o),
          n.insertBefore(document.createElement("br"), o);
      }
      return n;
    } else {
      let n = t["street-address"] || t["address-line1"] || "",
        i = t["address-line2"],
        o = t["address-line3"],
        s = [
          t["address-level4"] || "",
          t["address-level3"] || "",
          t["address-level2"] || "",
          `${t["address-level1"] || ""} ${t["postal-code"] || ""}`,
          t.country || t["country-name"] || "",
        ]
          .filter(Boolean)
          .join(", "),
        a = [n, i, o, s]
          .filter(Boolean)
          .map(d => `<span>${d}</span>`)
          .join("<br />");
      return N(`
        <span>${a}</span>
      `);
    }
  }
  function Ri(t, e, n, i) {
    return B(this, null, function* () {
      if (!n) return;
      let o = mr(t),
        s = Object.values(Nt(o, t));
      if (!e.detail.elements.some(b => s.includes(b))) return;
      let l = Bt(o),
        c = l.find(b => b.input === t).section,
        d = Array.from(
          new Set(l.filter(b => e.detail.elements.includes(b.input)).map(b => b.section))
        );
      if (!d.includes(c)) return;
      let h = (typeof n == "object" && n.sections) || [];
      if (h.length && !h.some(b => d.includes(b))) return;
      let p = typeof n == "object" ? n : {};
      (p = W(x({}, p), { accessToken: i, sections: [c] })), yield ki(o, p);
    });
  }
  var Ya = "https://contribute-api.mapbox.com/v1",
    za = "https://contribute-api-staging.tilestream.net/v1",
    Ga = "edit-suggestion";
  function Ii(t, e) {
    if (!R.feedbackEnabled) return;
    let n = window.location.hostname,
      o = `${ho(n) || po(n) ? za : Ya}/${Ga}/address?access_token=${t}`,
      { originalCoordinate: s, originalAddress: l, changes: a } = e,
      c = {
        action: "update",
        reason: "incorrect_address",
        location: { longitude: s[0], latitude: s[1] },
        userEmail: "no-reply-autofill@mapbox.com",
        changes: a,
        placeName: l,
      };
    fetch(o, {
      method: "POST",
      headers: new Headers({
        "User-Agent": `mapbox-search-js.${Pt}.${navigator.userAgent}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(c),
    });
  }
  var Xa = N(`
<template>
  <div class="MapboxAddressConfirmationFeature">
    <div class="Modal" aria-modal="true" role="dialog">
      <div class="ModalHeader">
        <svg viewBox="0 0 18 18" class="Icon IconQuestion"></svg>
        <div class="ModalHeaderTitle">Did you mean?</div>
        <svg
          viewBox="0 0 18 18"
          class="Icon IconClose"
          tabindex="0"
          role="button"
          title="Close"
          aria-label="Close"
          aria-expanded="true"
        ></svg>
      </div>

      <div class="ModalAddress ModalAddressApprove"></div>
            
      <div class="ModalMap">
        <mapbox-address-minimap class="Minimap"></mapbox-address-minimap>
      </div>

      <div
        class="Button ButtonPrimary ButtonApprove"
        tabindex="0"
        role="button"
        aria-label="Yes"
      >
        Yes
      </div>
      
      <div
        class="Button ButtonSecondary ButtonReject"
        tabindex="0"
        role="button"
        aria-label="No, use the address I provided"
      >
        No, use the address I provided
      </div>

      <div class="ModalFooter">
          Your confirmation helps improve address data accuracy.
      </div>
    </div>
  </div>
</template>
`),
    pe,
    Kt,
    ut,
    Qt,
    Zt,
    Jt,
    en,
    tn,
    Sr = class extends G {
      constructor() {
        super(...arguments);
        u(this, pe, void 0);
        u(this, Kt, {});
        this.minimap = !1;
        u(this, ut, void 0);
        u(this, Qt, void 0);
        this.update = (e, n) => {
          f(this, ut, e), f(this, Qt, n);
          let { ModalMap: i, Minimap: o, ModalAddressApprove: s } = r(this, pe);
          if (this.minimap) {
            if (
              (i.removeAttribute("aria-hidden"),
              (o.accessToken = this.accessToken),
              typeof this.minimap == "object")
            ) {
              let {
                defaultMapStyle: a,
                theme: c,
                mapStyleMode: d,
                satelliteToggle: h,
              } = this.minimap;
              a && (o.defaultMapStyle = this.minimap.defaultMapStyle),
                c && (o.theme = this.minimap.theme),
                d && (o.mapStyleMode = d),
                h !== void 0 && (o.satelliteToggle = h);
            }
            o.feature = e;
          } else i.setAttribute("aria-hidden", "true");
          let l = e.properties.place_name || e.properties.full_address || e.properties.address;
          (s.innerHTML = ""), s.appendChild(Ci(n, l));
        };
        u(this, Zt, () => {
          this.dispatchEvent(new S("result", "cancel"));
        });
        this.approve = () => {
          this.dispatchEvent(new S("result", "change"));
        };
        this.reject = () => {
          this.dispatchEvent(new S("result", "nochange")),
            Ii(this.accessToken, {
              originalCoordinate: r(this, ut).geometry.coordinates,
              originalAddress: r(this, ut).properties.full_address,
              changes: { address: rt(r(this, Qt)) },
            });
        };
        u(this, Jt, de());
        u(this, en, de());
        u(this, tn, de());
      }
      get template() {
        return Xa;
      }
      get templateStyle() {
        return ee;
      }
      get templateUserStyle() {
        return U(".MapboxAddressConfirmationFeature", this.theme);
      }
      get theme() {
        return r(this, Kt);
      }
      set theme(e) {
        if ((f(this, Kt, e), !r(this, pe) || !e)) return;
        this.updateTemplateUserStyle(U(".MapboxAddressConfirmationFeature", e));
        let { IconQuestion: n, IconClose: i } = r(this, pe);
        (n.innerHTML = q("question", e)), (i.innerHTML = q("close", e));
      }
      set footer(e) {
        if (e === void 0) return;
        let n = this.querySelector(".ModalFooter");
        typeof e == "string"
          ? ((n.textContent = e), n.removeAttribute("aria-hidden"))
          : e
          ? n.removeAttribute("aria-hidden")
          : n.setAttribute("aria-hidden", "true");
      }
      connectedCallback() {
        super.connectedCallback(),
          f(
            this,
            pe,
            se(this, {
              MapboxAddressConfirmationFeature: ".MapboxAddressConfirmationFeature",
              Modal: ".Modal",
              ModalHeaderTitle: ".ModalHeaderTitle",
              ModalMap: ".ModalMap",
              Minimap: ".Minimap",
              IconQuestion: ".IconQuestion",
              IconClose: ".IconClose",
              ButtonApprove: ".ButtonApprove",
              ButtonReject: ".ButtonReject",
              ModalAddressApprove: ".ModalAddressApprove",
            })
          );
        let {
          Modal: e,
          ModalHeaderTitle: n,
          IconClose: i,
          ButtonApprove: o,
          ButtonReject: s,
          ModalAddressApprove: l,
        } = r(this, pe);
        e.setAttribute("aria-labelledby", r(this, en)),
          e.setAttribute("aria-describedby", r(this, tn)),
          i.setAttribute("aria-controls", r(this, Jt)),
          (e.id = r(this, Jt)),
          (n.id = r(this, en)),
          (l.id = r(this, tn));
        let a = Array.from(this.querySelectorAll('[role="button"]'));
        for (let d of a) d.addEventListener("keydown", yi);
        i.addEventListener("click", r(this, Zt)),
          o.addEventListener("click", this.approve),
          s.addEventListener("click", this.reject);
        let c = this.theme;
        if (c) {
          let { IconQuestion: d, IconClose: h } = r(this, pe);
          (d.innerHTML = q("question", c)), (h.innerHTML = q("close", c));
        }
      }
      disconnectedCallback() {
        let { IconClose: e, ButtonApprove: n } = r(this, pe);
        e.removeEventListener("click", r(this, Zt)), n.removeEventListener("click", this.approve);
      }
    };
  (pe = new WeakMap()),
    (Kt = new WeakMap()),
    (ut = new WeakMap()),
    (Qt = new WeakMap()),
    (Zt = new WeakMap()),
    (Jt = new WeakMap()),
    (en = new WeakMap()),
    (tn = new WeakMap());
  window.MapboxAddressConfirmationFeature = Sr;
  window.customElements.get("mapbox-address-confirmation-feature") ||
    customElements.define("mapbox-address-confirmation-feature", Sr);
  var qa = N(`
<template>
  <div class="MapboxAddressConfirmationNoFeature">
    <div class="Modal" aria-modal="true" role="dialog">
      <div class="ModalHeader">
        <svg viewBox="0 0 18 18" class="Icon IconQuestion"></svg>
        <div class="ModalHeaderTitle">Confirm address</div>
        <svg
          viewBox="0 0 18 18"
          class="Icon IconClose"
          tabindex="0"
          role="button"
          title="Close"
          aria-label="Close"
          aria-expanded="true"
        ></svg>
      </div>
      <div class="ModalDescription">
        We couldn't verify this address. Please check that your information is correct before continuing.
      </div>
      <br />
      <div class="ModalSubheader">
        You entered
      </div>
      <div class="ModalAddress"></div>
      <div
        class="Button ButtonPrimary"
        tabindex="0"
        role="button"
        aria-label="Use the address I provided"
      >
        Use the address I provided
      </div>
    </div>
  </div>
</template>
`),
    fe,
    nn,
    rn,
    on,
    sn,
    an,
    Ar = class extends G {
      constructor() {
        super(...arguments);
        u(this, fe, void 0);
        u(this, nn, {});
        this.update = e => {
          let { ModalAddress: n } = r(this, fe);
          (n.innerHTML = ""), n.appendChild(Ci(e));
        };
        u(this, rn, () => {
          this.dispatchEvent(new S("result", "cancel"));
        });
        this.reject = () => {
          this.dispatchEvent(new S("result", "nochange"));
        };
        u(this, on, de());
        u(this, sn, de());
        u(this, an, de());
      }
      get template() {
        return qa;
      }
      get templateStyle() {
        return ee;
      }
      get templateUserStyle() {
        return U(".MapboxAddressConfirmationNoFeature", this.theme);
      }
      get theme() {
        return r(this, nn);
      }
      set theme(e) {
        if ((f(this, nn, e), !r(this, fe) || !e)) return;
        this.updateTemplateUserStyle(U(".MapboxAddressConfirmationNoFeature", e));
        let { IconQuestion: n, IconClose: i } = r(this, fe);
        (n.innerHTML = q("question", e)), (i.innerHTML = q("close", e));
      }
      connectedCallback() {
        super.connectedCallback(),
          f(
            this,
            fe,
            se(this, {
              Modal: ".Modal",
              ModalHeaderTitle: ".ModalHeaderTitle",
              IconQuestion: ".IconQuestion",
              IconClose: ".IconClose",
              ModalAddress: ".ModalAddress",
              ButtonReject: ".Button",
            })
          );
        let {
          Modal: e,
          ModalHeaderTitle: n,
          IconClose: i,
          ModalAddress: o,
          ButtonReject: s,
        } = r(this, fe);
        e.setAttribute("aria-labelledby", r(this, sn)),
          e.setAttribute("aria-describedby", r(this, an)),
          i.setAttribute("aria-controls", r(this, on)),
          (e.id = r(this, on)),
          (n.id = r(this, sn)),
          (o.id = r(this, an));
        let l = Array.from(this.querySelectorAll('[role="button"]'));
        for (let c of l) c.addEventListener("keydown", yi);
        i.addEventListener("click", r(this, rn)), s.addEventListener("click", this.reject);
        let a = this.theme;
        if (a) {
          let { IconQuestion: c, IconClose: d } = r(this, fe);
          (c.innerHTML = q("question", a)), (d.innerHTML = q("close", a));
        }
      }
      disconnectedCallback() {
        let { IconClose: e, ButtonReject: n } = r(this, fe);
        e.removeEventListener("click", r(this, rn)), n.removeEventListener("click", this.reject);
      }
    };
  (fe = new WeakMap()),
    (nn = new WeakMap()),
    (rn = new WeakMap()),
    (on = new WeakMap()),
    (sn = new WeakMap()),
    (an = new WeakMap());
  window.MapboxAddressConfirmationNoFeature = Ar;
  window.customElements.get("mapbox-address-confirmation-no-feature") ||
    customElements.define("mapbox-address-confirmation-no-feature", Ar);
  var ls =
    'input:-webkit-autofill,select:-webkit-autofill,textarea:-webkit-autofill{animation-name:onbrowserautofillstart}input:not(:-webkit-autofill),select:not(:-webkit-autofill),textarea:not(:-webkit-autofill){animation-name:onbrowserautofillcancel}@keyframes onbrowserautofillstart{0%{animation-name:"onbrowserautofillstart"}to{animation-name:"onbrowserautofillstart"}}@keyframes onbrowserautofillcancel{0%{animation-name:"onbrowserautofillcancel"}to{animation-name:"onbrowserautofillcancel"}}';
  var Pi = "browser-autofilled",
    wr = [];
  function Ka() {
    window.dispatchEvent(
      new window.CustomEvent("browserautofill", {
        bubbles: !0,
        cancelable: !0,
        detail: { elements: wr },
      })
    ),
      (wr = []);
  }
  var Qa = rr(Ka, 5);
  function cs(t) {
    t.hasAttribute(Pi) || (t.setAttribute(Pi, ""), wr.push(t), Qa());
  }
  function us(t) {
    !t.hasAttribute(Pi) || t.removeAttribute(Pi);
  }
  function Za(t) {
    t.animationName === "onbrowserautofillstart" ? cs(t.target) : us(t.target);
  }
  function Ja(t) {
    let e = t.target;
    e.nodeName.toLowerCase() !== "select" &&
    !t.simulated &&
    !(t instanceof S) &&
    (t.inputType === "insertReplacementText" || !("data" in t))
      ? cs(e)
      : us(e);
  }
  function Oi() {
    R.detectBrowserAutofillEnabled ||
      ((R.detectBrowserAutofillEnabled = !0),
      Ur(ls),
      document.addEventListener("animationstart", Za, !0),
      document.addEventListener("input", Ja, !0));
  }
  var Ye,
    Q,
    X,
    C,
    Ee,
    dt,
    ln,
    cn,
    ht,
    un,
    dn,
    hn,
    pn,
    fn,
    mn,
    gn,
    pt = class extends G {
      constructor() {
        super(...arguments);
        u(this, Ye, new It());
        u(this, Q, new Je(r(this, Ye)));
        u(this, X, void 0);
        u(this, C, new xe());
        u(this, Ee, void 0);
        this.options = {};
        this.confirmOnBrowserAutofill = !1;
        u(this, dt, !1);
        u(this, ln, e => {
          let n = (e == null ? void 0 : e.suggestions) ? Mi(e.suggestions) : null;
          r(this, C).handleSuggest(n), this.dispatchEvent(new S("suggest", e));
        });
        u(this, cn, e => {
          r(this, C).handleError(), this.dispatchEvent(new S("suggesterror", e));
        });
        u(this, ht, e => {
          var i;
          if (
            (this.dispatchEvent(new S("retrieve", e)),
            (this.retrieveFeature = (i = e.features) == null ? void 0 : i[0]),
            !r(this, X))
          )
            return;
          let n = e;
          !n || !n.features || !n.features.length || Dt(n.features[0], r(this, X));
        });
        u(this, un, () => {
          var e;
          try {
            let n = (e = this.querySelector("input")) != null ? e : null;
            f(this, X, n), (r(this, C).input = n);
          } catch (n) {
            f(this, X, null), (r(this, C).input = null), console.error(n.message || n);
          }
        });
        u(this, dn, new MutationObserver(r(this, un)));
        u(this, hn, e => {
          r(this, C).blur(), Ri(r(this, X), e, this.confirmOnBrowserAutofill, this.accessToken);
        });
        this.retrieveFeature = null;
        this.interceptSearch = null;
        u(this, pn, e => {
          this.dispatchEvent(e.clone());
          let n = e.detail,
            i = this.browserAutofillEnabled === !0 && (n == null ? void 0 : n.length) <= 2;
          te(r(this, X), r(this, Ee), i);
          let o = this.interceptSearch && this.interceptSearch(n),
            s = this.interceptSearch ? o : n;
          if ((this.interceptSearch && !o) || (s == null ? void 0 : s.length) <= 2) {
            r(this, C).handleSuggest(null);
            return;
          }
          r(this, Q).suggest(s, this.options);
        });
        u(this, fn, e => {
          let n = e.detail;
          e.detail.accuracy !== "street"
            ? (te(r(this, X), r(this, Ee), !0), r(this, Q).retrieve(n, this.options))
            : Ti(r(this, X), r(this, Ee), n);
        });
        u(this, mn, () => {
          te(r(this, X), r(this, Ee), !0), r(this, Q).abort();
        });
        u(this, gn, () => {
          var n;
          let e =
            this.browserAutofillEnabled === !0 &&
            ((n = r(this, X).value) == null ? void 0 : n.length) <= 2;
          te(r(this, X), r(this, Ee), e);
        });
      }
      get accessToken() {
        return r(this, Ye).accessToken;
      }
      set accessToken(e) {
        r(this, Ye).accessToken = e;
      }
      get input() {
        return r(this, X);
      }
      get theme() {
        return r(this, C).theme;
      }
      set theme(e) {
        r(this, C).theme = e;
      }
      get popoverOptions() {
        return r(this, C).popoverOptions;
      }
      set popoverOptions(e) {
        r(this, C).popoverOptions = e;
      }
      get browserAutofillEnabled() {
        return r(this, dt);
      }
      set browserAutofillEnabled(e) {
        f(this, dt, e);
      }
      connectedCallback() {
        var n;
        super.connectedCallback(),
          (R.autofillSessionEnabled = !0),
          (r(this, Q).sessionToken = R.autofillSessionToken),
          (r(this, C).autofillHost = this),
          r(this, C).addEventListener("input", r(this, pn)),
          r(this, C).addEventListener("select", r(this, fn)),
          r(this, C).addEventListener("blur", r(this, mn)),
          r(this, C).addEventListener("focus", r(this, gn)),
          r(this, Q).addEventListener("suggest", r(this, ln)),
          r(this, Q).addEventListener("suggesterror", r(this, cn)),
          r(this, Q).addEventListener("retrieve", r(this, ht)),
          document.body.appendChild(r(this, C));
        let e = (n = this.querySelector("input")) != null ? n : null;
        e && (e.insertAdjacentElement("beforebegin", it()), f(this, Ee, e.autocomplete)),
          r(this, dn).observe(this, { subtree: !0, childList: !0 }),
          r(this, un).call(this),
          Oi(),
          window.addEventListener("browserautofill", r(this, hn));
      }
      disconnectedCallback() {
        r(this, C).remove(),
          r(this, C).removeEventListener("input", r(this, pn)),
          r(this, C).removeEventListener("select", r(this, fn)),
          r(this, C).removeEventListener("blur", r(this, mn)),
          r(this, C).removeEventListener("focus", r(this, gn)),
          r(this, Q).removeEventListener("suggest", r(this, ln)),
          r(this, Q).removeEventListener("suggesterror", r(this, cn)),
          r(this, Q).removeEventListener("retrieve", r(this, ht)),
          r(this, dn).disconnect(),
          window.removeEventListener("browserautofill", r(this, hn));
      }
      attributeChangedCallback(e, n, i) {
        if (e === "access-token") {
          r(this, Ye).accessToken = i;
          return;
        }
        if (e === "browser-autofill-enabled") {
          f(this, dt, Boolean(i));
          return;
        }
        if (e === "theme") {
          this.theme = tt(i);
          return;
        }
        if (e === "popover-options") {
          this.popoverOptions = tt(i);
          return;
        }
        let o = e.split("-").join("_");
        i || delete this.options[o], (this.options[o] = i);
      }
      focus() {
        r(this, C).focus();
      }
      simulateRetrieve(e) {
        let n = this.input;
        n && (n.dataset.mapboxSuccess = "true"), r(this, C).hideResults();
        let i = { type: "FeatureCollection", features: [e] };
        r(this, ht).call(this, i);
      }
    };
  (Ye = new WeakMap()),
    (Q = new WeakMap()),
    (X = new WeakMap()),
    (C = new WeakMap()),
    (Ee = new WeakMap()),
    (dt = new WeakMap()),
    (ln = new WeakMap()),
    (cn = new WeakMap()),
    (ht = new WeakMap()),
    (un = new WeakMap()),
    (dn = new WeakMap()),
    (hn = new WeakMap()),
    (pn = new WeakMap()),
    (fn = new WeakMap()),
    (mn = new WeakMap()),
    (gn = new WeakMap()),
    (pt.observedAttributes = [
      "access-token",
      "browser-autofill-enabled",
      "theme",
      "popover-options",
      "css-text",
      "language",
      "country",
      "bbox",
      "limit",
      "proximity",
    ]);
  window.MapboxAddressAutofill = pt;
  window.customElements.get("mapbox-address-autofill") ||
    customElements.define("mapbox-address-autofill", pt);
  var el = 9,
    tl = N(`
<template>
  <input class="Input" type="text" />
</template>
`),
    ze,
    ne,
    Ie,
    Me,
    I,
    vn,
    bn,
    yn,
    xn,
    En,
    Mn,
    Tn,
    ft = class extends G {
      constructor() {
        super(...arguments);
        u(this, ze, new er({}));
        u(this, ne, new Je(r(this, ze)));
        u(this, Ie, null);
        u(this, Me, void 0);
        u(this, I, new xe());
        this.options = {};
        u(this, vn, e => {
          r(this, I).handleSuggest((e == null ? void 0 : e.suggestions) || null),
            this.dispatchEvent(new S("suggest", e));
        });
        u(this, bn, e => {
          r(this, I).handleError(), this.dispatchEvent(new S("suggesterror", e));
        });
        u(this, yn, e => {
          var c;
          this.dispatchEvent(new S("retrieve", e));
          let n = e;
          if (!n || !n.features.length) return;
          let i = et(n.features[0]);
          r(this, Me).value = i.feature_name;
          let o = r(this, Ie);
          if (!o) return;
          let s = n.features[0];
          if (!s) return;
          let l = (c = s.properties.place_type) == null ? void 0 : c[0],
            a = s.bbox;
          if (a) o.flyTo(ro(o, ue.convert(a).toFlatArray()));
          else {
            let d = s.geometry.coordinates,
              h = oo(l);
            o.flyTo({ center: d, zoom: h, speed: or });
          }
        });
        this.interceptSearch = null;
        u(this, xn, e => {
          this.dispatchEvent(e.clone());
          let n = e.detail,
            i = this.interceptSearch && this.interceptSearch(n),
            o = this.interceptSearch ? i : n;
          if (this.interceptSearch && !i) {
            r(this, I).hideResults();
            return;
          }
          r(this, ne).suggest(o, this.options);
        });
        u(this, En, e => {
          let n = e.detail;
          r(this, ne).retrieve(n, this.options);
        });
        u(this, Mn, () => {
          r(this, ne).abort();
        });
        u(this, Tn, () => {
          let e = r(this, Ie),
            n = x({}, this.options);
          if (e.getZoom() <= el) {
            delete n.proximity, (this.options = n);
            return;
          }
          let i = e.getCenter();
          this.options = W(x({}, n), { proximity: i });
        });
      }
      get accessToken() {
        return r(this, ze).accessToken;
      }
      set accessToken(e) {
        r(this, ze).accessToken = e;
      }
      get value() {
        return r(this, Me).value;
      }
      set value(e) {
        r(this, Me).value = e;
      }
      get input() {
        return r(this, Me);
      }
      get template() {
        return tl;
      }
      get templateStyle() {
        return ee;
      }
      get templateUserStyle() {
        return U(".Input", r(this, I).theme);
      }
      get theme() {
        return r(this, I).theme;
      }
      set theme(e) {
        (r(this, I).theme = e),
          !!r(this, Me) &&
            (this.updateTemplateUserStyle(U(".Input", e)), r(this, I).updatePopover());
      }
      get popoverOptions() {
        return r(this, I).popoverOptions;
      }
      set popoverOptions(e) {
        r(this, I).popoverOptions = e;
      }
      connectedCallback() {
        super.connectedCallback();
        let e = this.querySelector(".Input");
        f(this, Me, e),
          (r(this, I).input = e),
          r(this, I).addEventListener("input", r(this, xn)),
          r(this, I).addEventListener("select", r(this, En)),
          r(this, I).addEventListener("blur", r(this, Mn)),
          r(this, ne).addEventListener("suggest", r(this, vn)),
          r(this, ne).addEventListener("suggesterror", r(this, bn)),
          r(this, ne).addEventListener("retrieve", r(this, yn)),
          document.body.appendChild(r(this, I)),
          e && e.insertAdjacentElement("beforebegin", it());
      }
      disconnectedCallback() {
        r(this, I).remove(),
          (r(this, I).input = null),
          r(this, I).removeEventListener("input", r(this, xn)),
          r(this, I).removeEventListener("select", r(this, En)),
          r(this, I).removeEventListener("blur", r(this, Mn)),
          r(this, ne).removeEventListener("suggest", r(this, vn)),
          r(this, ne).removeEventListener("suggesterror", r(this, bn)),
          r(this, ne).removeEventListener("retrieve", r(this, yn));
      }
      attributeChangedCallback(e, n, i) {
        if (e === "access-token") {
          r(this, ze).accessToken = i;
          return;
        }
        if (e === "theme") {
          this.theme = tt(i);
          return;
        }
        if (e === "popover-options") {
          this.popoverOptions = tt(i);
          return;
        }
        let o = e.split("-").join("_");
        i || delete this.options[o], (this.options[o] = i);
      }
      focus() {
        r(this, I).focus();
      }
      bindMap(e) {
        r(this, Ie) && r(this, Ie).off("moveend", r(this, Tn)),
          e && e.on("moveend", r(this, Tn)),
          f(this, Ie, e);
      }
      unbindMap() {
        this.bindMap(null);
      }
      onAdd(e) {
        this.bindMap(e), this.remove();
        let n = document.createElement("div");
        return (n.className = "mapboxgl-ctrl"), (n.style.width = "300px"), n.appendChild(this), n;
      }
      onRemove() {
        this.remove(), this.unbindMap();
      }
      getDefaultPosition() {
        return "top-right";
      }
    };
  (ze = new WeakMap()),
    (ne = new WeakMap()),
    (Ie = new WeakMap()),
    (Me = new WeakMap()),
    (I = new WeakMap()),
    (vn = new WeakMap()),
    (bn = new WeakMap()),
    (yn = new WeakMap()),
    (xn = new WeakMap()),
    (En = new WeakMap()),
    (Mn = new WeakMap()),
    (Tn = new WeakMap()),
    (ft.observedAttributes = [
      "access-token",
      "theme",
      "popover-options",
      "language",
      "country",
      "bbox",
      "limit",
      "navigation-profile",
      "origin",
      "proximity",
      "eta-type",
      "types",
    ]);
  window.MapboxSearchBox = ft;
  window.customElements.get("mapbox-search-box") || customElements.define("mapbox-search-box", ft);
  var fs = _r(ds());
  var hs = new fs.default({ size: 512, antimeridian: !0 }),
    qe = 1280;
  function ps(t, e) {
    let { width: n, height: i } = si(t, !0);
    switch (e) {
      case "center":
        return [0, 0];
      case "top":
        return [0, i / 2];
      case "bottom":
        return [0, (-1 * i) / 2];
      case "left":
        return [n / 2, 0];
      case "right":
        return [(-1 * n) / 2, 0];
      case "top-left":
        return [n / 2, i / 2];
      case "top-right":
        return [(-1 * n) / 2, i / 2];
      case "bottom-left":
        return [n / 2, (-1 * i) / 2];
      case "bottom-right":
        return [(-1 * n) / 2, (-1 * i) / 2];
    }
  }
  var Sn,
    Hi,
    Ge,
    An,
    wn,
    Fi,
    Ln,
    kn,
    _i,
    Cn,
    Rn,
    Xe,
    Bi,
    In,
    Cr = class {
      constructor(e, n, i, o, s, l) {
        u(this, Sn, void 0);
        u(this, Hi, () => {
          ([this.anchorOffsetX, this.anchorOffsetY] = ps(this.markerElement, this.anchor)),
            (this.markerTransform = { anchorX: this.anchorOffsetX, anchorY: this.anchorOffsetY });
        });
        u(this, Ge, {
          anchorX: 0,
          anchorY: 0,
          globalX: 0,
          globalY: 0,
          correctionX: 0,
          correctionY: 0,
        });
        u(this, An, !1);
        u(this, wn, void 0);
        u(this, Fi, e => {
          !this.isActive ||
            (e.preventDefault(),
            e.stopPropagation(),
            r(this, Xe).call(this, e),
            window.addEventListener("pointermove", r(this, kn)),
            window.addEventListener("pointerup", r(this, Ln)));
        });
        u(this, Ln, () => {
          window.removeEventListener("pointermove", r(this, kn)),
            window.removeEventListener("pointerup", r(this, Ln));
        });
        u(this, kn, e => {
          e.preventDefault(), e.stopPropagation();
          let n = this.curPointerXPos - e.pageX,
            i = this.curPointerYPos - e.pageY;
          (this.markerDeltaX += n),
            (this.markerDeltaY -= i),
            (this.markerDeltaX = Math.max(
              Math.min(this.imgElement.width / 2, this.markerDeltaX),
              (this.imgElement.width / 2) * -1
            )),
            (this.markerDeltaY = Math.max(
              Math.min(this.imgElement.height / 2, this.markerDeltaY),
              (this.imgElement.height / 2) * -1
            ));
          let o = this.imgCenterPx[0] - this.imgCenterAdjustedPx[0],
            s = this.imgCenterPx[1] - this.imgCenterAdjustedPx[1],
            l = this.markerDeltaX - o,
            a = this.markerDeltaY + s;
          (this.markerTransform = { globalX: l, globalY: a }), r(this, Xe).call(this, e);
        });
        u(this, _i, e => {
          !this.isActive ||
            (e.preventDefault(),
            e.stopPropagation(),
            r(this, Xe).call(this, e),
            window.addEventListener("pointermove", r(this, Rn)),
            window.addEventListener("pointerup", r(this, Cn)));
        });
        u(this, Cn, () => {
          window.removeEventListener("pointermove", r(this, Rn)),
            window.removeEventListener("pointerup", r(this, Cn));
        });
        u(this, Rn, e => {
          e.preventDefault();
          let n = Math.round(this.imgContainerElement.scrollTop + (this.curPointerYPos - e.pageY));
          n = Math.max(
            Math.min(this.imgElement.height - this.imgContainerElement.clientHeight, n),
            0
          );
          let i = Math.round(this.imgContainerElement.scrollLeft + (this.curPointerXPos - e.pageX));
          (i = Math.max(
            Math.min(this.imgElement.width - this.imgContainerElement.clientWidth, i),
            0
          )),
            (this.imgContainerElement.scrollTop = n),
            (this.imgContainerElement.scrollLeft = i);
          let o = Math.round(
              i - (this.imgElement.width - this.imgContainerElement.clientWidth) / 2
            ),
            s = Math.round(
              (this.imgElement.height - this.imgContainerElement.clientHeight) / 2 - n
            );
          if (
            ((this.imgCenterAdjustedPx = [this.imgCenterPx[0] + o, this.imgCenterPx[1] - s]),
            !this.keepMarkerCentered)
          ) {
            let l = this.markerDeltaX + o,
              a = this.markerDeltaY + s;
            this.markerTransform = { globalX: l, globalY: a };
          }
          r(this, In).call(this, i, n), r(this, Xe).call(this, e);
        });
        u(this, Xe, e => {
          (this.curPointerXPos = e.pageX), (this.curPointerYPos = e.pageY);
        });
        u(this, Bi, () => {
          let {
              anchorX: e,
              anchorY: n,
              globalX: i,
              globalY: o,
              correctionX: s,
              correctionY: l,
            } = r(this, Ge),
            a = e - i + s,
            c = n + o + l;
          this.markerElement.style.transform = `translate(calc(-50% + ${a}px), calc(-50% + ${c}px))`;
        });
        this.reCenter = () => {
          let e = (this.imgElement.height - this.imgContainerElement.clientHeight) / 2,
            n = (this.imgElement.width - this.imgContainerElement.clientWidth) / 2;
          (this.imgContainerElement.scrollTop = e),
            (this.imgContainerElement.scrollLeft = n),
            (this.imgCenterAdjustedPx = this.imgCenterPx),
            (this.markerDeltaX = this.markerDeltaY = 0),
            (this.markerTransform = { globalX: 0, globalY: 0, correctionX: 0, correctionY: 0 });
        };
        this.handleMinimapResize = () => {
          if (!this.imgElement.height || !this.imgElement.width) return;
          let e = this.imgCenterOffset.x,
            n = this.imgCenterOffset.y,
            i = this.imgElement.width / 2 - e - this.imgContainerElement.clientWidth / 2,
            o = this.imgElement.height / 2 - n - this.imgContainerElement.clientHeight / 2;
          (this.imgContainerElement.scrollLeft = i),
            (this.imgContainerElement.scrollTop = o),
            r(this, In).call(this, i, o);
        };
        u(this, In, (e, n) => {
          let i = this.imgCenterOffset.x,
            o = this.imgCenterOffset.y,
            { correctionX: s, correctionY: l } = this.markerTransform,
            a = {};
          if (e / 2 < i * -1) {
            let c = i * -1 - e / 2;
            a.correctionX = c * 2;
          } else e < 0 ? (a.correctionX = e) : s !== 0 && (a.correctionX = 0);
          if (n / 2 < o * -1) {
            let c = o * -1 - n / 2;
            a.correctionY = c * 2;
          } else n < 0 ? (a.correctionY = n) : l !== 0 && (a.correctionY = 0);
          this.markerTransform = a;
        });
        (this.markerElement = i),
          (this.imgContainerElement = e),
          (this.imgElement = n),
          (this.keepMarkerCentered = o),
          (this.zoom = s),
          (this.anchor = l),
          (this.curPointerXPos = 0),
          (this.curPointerYPos = 0),
          (this.markerDeltaX = 0),
          (this.markerDeltaY = 0),
          this.imgContainerElement.addEventListener("pointerdown", r(this, _i)),
          this.keepMarkerCentered ||
            this.markerElement.addEventListener("pointerdown", r(this, Fi)),
          new ResizeObserver(r(this, Hi)).observe(this.markerElement);
      }
      get anchor() {
        return r(this, Sn);
      }
      set anchor(e) {
        f(this, Sn, e),
          ([this.anchorOffsetX, this.anchorOffsetY] = ps(this.markerElement, e)),
          (this.markerTransform = { anchorX: this.anchorOffsetX, anchorY: this.anchorOffsetY });
      }
      get markerTransform() {
        return r(this, Ge);
      }
      set markerTransform(e) {
        f(this, Ge, x(x({}, r(this, Ge)), e)), r(this, Bi).call(this);
      }
      get isActive() {
        return r(this, An);
      }
      set isActive(e) {
        (this.imgContainerElement.style.touchAction = e ? "none" : ""), f(this, An, e);
      }
      get coordinate() {
        let e = this.keepMarkerCentered
          ? this.imgCenterAdjustedPx
          : [this.imgCenterPx[0] - this.markerDeltaX, this.imgCenterPx[1] + this.markerDeltaY];
        if (Be(e, this.imgCenterPx)) return r(this, wn);
        {
          let n = hs.ll(e, this.zoom);
          return [sr(n[0], 6), sr(n[1], 6)];
        }
      }
      set coordinate(e) {
        f(this, wn, e), (this.imgCenterPx = this.imgCenterAdjustedPx = hs.px(e, this.zoom));
      }
      get imgCenterOffset() {
        return {
          x: this.imgCenterPx[0] - this.imgCenterAdjustedPx[0],
          y: this.imgCenterPx[1] - this.imgCenterAdjustedPx[1],
        };
      }
    };
  (Sn = new WeakMap()),
    (Hi = new WeakMap()),
    (Ge = new WeakMap()),
    (An = new WeakMap()),
    (wn = new WeakMap()),
    (Fi = new WeakMap()),
    (Ln = new WeakMap()),
    (kn = new WeakMap()),
    (_i = new WeakMap()),
    (Cn = new WeakMap()),
    (Rn = new WeakMap()),
    (Xe = new WeakMap()),
    (Bi = new WeakMap()),
    (In = new WeakMap());
  var ms =
    '<svg width="88" height="23" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill-rule="evenodd"><defs><path id="g" d="M11.5 2.25a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5zM7 15.98c-.05-.33-.83-5.8 2.23-8.87a4.4 4.4 0 0 1 3.13-1.28c1.27 0 2.49.51 3.39 1.42.91.9 1.42 2.12 1.42 3.39a4.4 4.4 0 0 1-1.28 3.13C12.72 16.93 7 16 7 16v-.02zm8.3-5.48-2 .8-.8 2-.8-2-2-.8 2-.8.8-2 .8 2 2 .8z"/><path id="b" d="M50.63 8c.13 0 .23.1.23.23V9c.7-.76 1.7-1.18 2.73-1.18 2.17 0 3.95 1.85 3.95 4.17s-1.77 4.19-3.94 4.19A3.77 3.77 0 0 1 50.86 15v3.77c0 .13-.1.23-.23.23h-1.4a.23.23 0 0 1-.23-.23V8.23c0-.12.1-.23.23-.23h1.4zm-3.86.01.01-.01c.13 0 .22.1.22.22v7.55c0 .12-.1.23-.23.23h-1.4a.23.23 0 0 1-.23-.23V15a3.7 3.7 0 0 1-2.73 1.19c-2.17 0-3.94-1.87-3.94-4.19 0-2.32 1.77-4.19 3.94-4.19 1.03 0 2.02.43 2.73 1.18v-.75c0-.12.1-.23.23-.23h1.4zm26.38-.19a4.24 4.24 0 0 0-4.16 3.29 4.07 4.07 0 0 0 0 1.77 4.23 4.23 0 0 0 4.17 3.3 4.22 4.22 0 0 0 4.26-4.19 4.2 4.2 0 0 0-4.27-4.17zM60.63 5c.13 0 .23.1.23.23v3.76c.7-.76 1.7-1.18 2.73-1.18a4 4 0 0 1 3.84 3.28c.13.59.13 1.2 0 1.8a4 4 0 0 1-3.84 3.29A3.77 3.77 0 0 1 60.86 15v.77c0 .12-.1.23-.23.23h-1.4a.23.23 0 0 1-.23-.23V5.23c0-.12.1-.23.23-.23h1.4zm-34 11h-1.4a.23.23 0 0 1-.23-.23V8.22c.01-.13.1-.22.23-.22h1.4c.13 0 .22.11.23.22v.68c.5-.68 1.3-1.09 2.16-1.1h.03c1.09 0 2.09.6 2.6 1.55a2.73 2.73 0 0 1 2.44-1.56c1.62 0 2.93 1.25 2.9 2.78l.03 5.2c0 .13-.1.23-.23.23h-1.41a.23.23 0 0 1-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.8 0-1.46.7-1.59 1.62l.01 4.68c0 .13-.11.23-.23.23h-1.41a.23.23 0 0 1-.23-.23v-4.59c0-.98-.74-1.71-1.62-1.71-.85 0-1.54.79-1.6 1.8v4.5c0 .13-.1.23-.23.23zm53.62 0h-1.61a.27.27 0 0 1-.12-.03c-.1-.06-.13-.19-.06-.28l2.43-3.71-2.4-3.65a.21.21 0 0 1-.02-.12.2.2 0 0 1 .2-.21h1.61c.13 0 .24.06.3.17L82 10.54l1.4-2.37a.34.34 0 0 1 .3-.17h1.6l.12.03c.1.06.13.19.06.28l-2.37 3.65 2.43 3.7.01.13a.2.2 0 0 1-.2.21h-1.61a.33.33 0 0 1-.3-.17l-1.44-2.42-1.44 2.42a.34.34 0 0 1-.3.17zm-7.12-1.49A2.47 2.47 0 0 1 70.7 12a2.47 2.47 0 0 1 2.42-2.52 2.47 2.47 0 0 1 2.42 2.51 2.48 2.48 0 0 1-2.42 2.52zm-19.87 0a2.48 2.48 0 0 1-2.42-2.48v-.07a2.47 2.47 0 0 1 2.4-2.49 2.47 2.47 0 0 1 2.41 2.51 2.47 2.47 0 0 1-2.39 2.53zm-8.11-2.48c-.01 1.37-1.09 2.47-2.41 2.47s-2.42-1.12-2.42-2.51a2.47 2.47 0 0 1 2.4-2.52 2.46 2.46 0 0 1 2.41 2.48l.02.08zm18.12 2.47a2.47 2.47 0 0 1-2.41-2.48v-.06c.02-1.38 1.09-2.48 2.41-2.48s2.42 1.12 2.42 2.51a2.47 2.47 0 0 1-2.42 2.51z"/></defs><mask id="c"><rect width="100%" height="100%" fill="#fff"/><use xlink:href="#g"/><use xlink:href="#b"/></mask><g opacity=".3" stroke="#000" stroke-width="3"><circle mask="url(#c)" cx="11.5" cy="11.5" r="9.25"/><use xlink:href="#b" mask="url(#c)"/></g><g opacity=".9" fill="#fff"><use xlink:href="#g"/><use xlink:href="#b"/></g></svg>';
  var gs = 16,
    rl = N(`
<template>
  <div class="MapboxAddressMinimap" aria-hidden="true">
    <div class="MinimapImageContainer">
      <img class="MinimapImage" draggable="false"></img>
      <div class="MinimapInnerFrame">
        <div class="MinimapMarker"></div>
        <div class="MinimapAttribution">
          <div class="MinimapAttributionLogo">
            <a target="_blank" rel="noopener nofollow" href="https://www.mapbox.com/" aria-label="Mapbox logo">
              ${ms}
            </a>
          </div>
          <div class="MinimapAttributionText">
            <a target="_blank" href='https://www.mapbox.com/about/maps/'>\xA9 Mapbox</a><a target="_blank" href='http://www.openstreetmap.org/copyright'>\xA9 OpenStreetMap</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
`),
    ol = N(`
<template>
  <button type="button" class="MinimapStyleToggle"></button>
</template>
`),
    sl = N(`
<template>
  <div class="MinimapFooter">Adjust the marker on the map if it doesn't precisely match your location. This helps improve address data quality.</div>
</template>
`),
    al = N(`
<template>
  <div class="MinimapEditButtons">
    <div class="Button ButtonPrimary MinimapButtonAdjust">Adjust pin</div>
    <div class="Button ButtonPrimary MinimapButtonSave" aria-hidden="true">Save</div>
    <div class="Button MinimapButtonCancel" aria-hidden="true">Cancel</div>
  </div>
</template>
`),
    Pn,
    Ve,
    mt,
    me,
    Pe,
    re,
    oe,
    L,
    D,
    On,
    Hn,
    Fn,
    Ke,
    _n,
    Bn,
    Nn,
    gt,
    Dn,
    jn,
    Un,
    $n,
    Ni,
    Di,
    Wn,
    vt,
    bt,
    Yn,
    zn,
    ji,
    Gn,
    Ui,
    yt = class extends G {
      constructor() {
        super(...arguments);
        u(this, Pn, !1);
        this.keepMarkerCentered = !1;
        this.markerAnchor = "bottom";
        u(this, Ve, !1);
        u(this, mt, !1);
        u(this, me, void 0);
        u(this, Pe, "");
        u(this, re, void 0);
        u(this, oe, void 0);
        u(this, L, void 0);
        u(this, D, void 0);
        u(this, On, void 0);
        u(this, Hn, {});
        u(this, Fn, !1);
        u(this, Ke, "default");
        u(this, _n, ["mapbox", "streets-v11"]);
        u(this, Bn, void 0);
        u(this, Nn, void 0);
        u(this, gt, () => {
          let { ImageContainer: e, ButtonAdjust: n, ButtonSave: i, ButtonCancel: o } = r(this, L);
          r(this, Ve)
            ? (e.classList.add(`${this.dataset.seed}--draggable`),
              (r(this, D).isActive = !0),
              n.setAttribute("aria-hidden", "true"),
              i.removeAttribute("aria-hidden"),
              o.removeAttribute("aria-hidden"))
            : (e.classList.remove(`${this.dataset.seed}--draggable`),
              (r(this, D).isActive = !1),
              n.removeAttribute("aria-hidden"),
              i.setAttribute("aria-hidden", "true"),
              o.setAttribute("aria-hidden", "true"));
        });
        u(this, Dn, () => {
          f(this, Ve, !0), r(this, gt).call(this);
        });
        u(this, jn, () => {
          if (
            this.feature.properties.full_address &&
            !Be(this.feature.geometry.coordinates, r(this, D).coordinate)
          ) {
            let [e, n] = r(this, D).coordinate;
            Ii(this.accessToken, {
              originalCoordinate: this.feature.geometry.coordinates,
              originalAddress: this.feature.properties.full_address,
              changes: { location: { longitude: e, latitude: n } },
            });
          }
          this.onSaveMarkerLocation && this.onSaveMarkerLocation(r(this, D).coordinate),
            f(this, Ve, !1),
            r(this, gt).call(this);
        });
        u(this, Un, () => {
          r(this, D).reCenter(), f(this, Ve, !1), r(this, gt).call(this);
        });
        u(this, $n, () => {
          this.mapStyleMode = this.mapStyleMode === "default" ? "satellite" : "default";
        });
        u(this, Ni, () => {
          r(this, mt) || r(this, D).reCenter(),
            f(this, mt, !0),
            r(this, D) && r(this, D).handleMinimapResize();
        });
        u(this, Di, () => {
          f(this, mt, !1);
        });
        u(this, Wn, e => {
          if (r(this, re) === 0 || r(this, oe) === 0) return "";
          let [n, i] = this.defaultMapStyle,
            o = ui(n, i),
            s = this.mapStyleMode === "default" ? o : so,
            l = ao + R.autofillSessionToken.toString(),
            a =
              s +
              _.convert(e).toArray().join(",") +
              "," +
              gs +
              ",0/" +
              Math.min(r(this, re) * 2, qe) +
              "x" +
              Math.min(r(this, oe) * 2, qe) +
              "?access_token=" +
              this.accessToken +
              "&attribution=false&logo=false";
          return R.autofillSessionEnabled && (a += `&sku=${l}`), a;
        });
        u(this, vt, () => {
          if (r(this, me)) {
            let e = r(this, me).geometry.coordinates;
            f(this, Pe, r(this, Wn).call(this, e));
            let { Image: n } = r(this, L);
            n.src = r(this, Pe);
          }
        });
        u(
          this,
          bt,
          e =>
            `url("${yo(
              e === "default" ? "styleToggleDefault" : "styleToggleSatellite",
              this.theme
            )}")`
        );
        u(this, Yn, () => {
          let { MapboxAddressMinimap: e, ImageContainer: n, Image: i } = r(this, L),
            { width: o, height: s } = si(this.container),
            [l, a] = [r(this, re), r(this, oe)];
          f(this, re, Math.min(o, qe)),
            f(this, oe, Math.min(s, qe)),
            e.style.setProperty("width", `${r(this, re)}px`),
            e.style.setProperty("height", `${r(this, oe)}px`),
            n.style.setProperty("height", `${r(this, oe)}px`),
            n.style.setProperty("width", `${r(this, re)}px`);
          let [c, d] = [i.width, i.height];
          (r(this, re) > l && r(this, re) > c / 2 && c < qe) ||
          (r(this, oe) > a && r(this, oe) > d / 2 && d < qe)
            ? r(this, vt).call(this)
            : r(this, D) && r(this, D).handleMinimapResize();
        });
        u(this, zn, () => {
          if (this.querySelector(".MinimapFooter")) return;
          let n = this.prepareTemplate(sl),
            i = this.querySelector(".MapboxAddressMinimap");
          if (!i || (i.appendChild(n), this.querySelector(".MinimapEditButtons"))) return;
          let s = this.prepareTemplate(al);
          this.querySelector(".MinimapInnerFrame").appendChild(s),
            f(
              this,
              L,
              W(x({}, r(this, L)), {
                EditButtons: this.querySelector(".MinimapEditButtons"),
                ButtonAdjust: this.querySelector(".MinimapButtonAdjust"),
                ButtonSave: this.querySelector(".MinimapButtonSave"),
                ButtonCancel: this.querySelector(".MinimapButtonCancel"),
              })
            );
          let { ButtonAdjust: a, ButtonSave: c, ButtonCancel: d } = r(this, L);
          a.addEventListener("click", r(this, Dn)),
            c.addEventListener("click", r(this, jn)),
            d.addEventListener("click", r(this, Un));
        });
        u(this, ji, () => {
          if (!r(this, L)) return;
          let { EditButtons: e, ButtonAdjust: n, ButtonSave: i, ButtonCancel: o } = r(this, L),
            s = this.querySelector(".MinimapFooter");
          s == null || s.remove(),
            e == null || e.remove(),
            n && (n.remove(), n.removeEventListener("click", r(this, Dn))),
            i && (i.remove(), i.removeEventListener("click", r(this, jn))),
            o && (o.remove(), o.removeEventListener("click", r(this, Un))),
            delete r(this, L).EditButtons,
            delete r(this, L).ButtonAdjust,
            delete r(this, L).ButtonSave,
            delete r(this, L).ButtonCancel;
        });
        u(this, Gn, () => {
          if (this.querySelector(".MinimapStyleToggle")) return;
          let n = this.prepareTemplate(ol),
            i = this.querySelector(".MinimapInnerFrame");
          !i ||
            (i.appendChild(n),
            (r(this, L).MapStyleToggle = n),
            n.addEventListener("click", r(this, $n)),
            (n.style.backgroundImage = r(this, bt).call(
              this,
              this.mapStyleMode === "default" ? "satellite" : "default"
            )),
            n.setAttribute(
              "title",
              `Switch to ${this.mapStyleMode === "default" ? "Satellite" : "Default"}`
            ));
        });
        u(this, Ui, () => {
          if (!r(this, L)) return;
          let { MapStyleToggle: e } = r(this, L);
          !e ||
            (e.remove(),
            e.removeEventListener("click", r(this, $n)),
            delete r(this, L).MapStyleToggle);
        });
      }
      get canAdjustMarker() {
        return r(this, Pn);
      }
      set canAdjustMarker(e) {
        f(this, Pn, e), e ? r(this, zn).call(this) : r(this, ji).call(this);
      }
      get accessToken() {
        return r(this, On) || R.accessToken;
      }
      set accessToken(e) {
        f(this, On, e);
      }
      get feature() {
        return r(this, me);
      }
      set feature(e) {
        f(this, me, e), e ? this.show() : this.hide();
      }
      get template() {
        return rl;
      }
      get templateStyle() {
        return ee;
      }
      get templateUserStyle() {
        return U(".MapboxAddressMinimap", this.theme);
      }
      get satelliteToggle() {
        return r(this, Fn);
      }
      set satelliteToggle(e) {
        f(this, Fn, e), e ? r(this, Gn).call(this) : r(this, Ui).call(this);
      }
      get theme() {
        return r(this, Hn);
      }
      set theme(e) {
        if ((f(this, Hn, e), !r(this, L) || !e)) return;
        this.updateTemplateUserStyle(U(".MapboxAddressMinimap", e));
        let { Marker: n, MapStyleToggle: i } = r(this, L);
        (n.innerHTML = q("marker", e)),
          i &&
            (i.style.backgroundImage = r(this, bt).call(
              this,
              this.mapStyleMode === "default" ? "satellite" : "default"
            ));
      }
      get mapStyleMode() {
        return r(this, Ke);
      }
      set mapStyleMode(e) {
        let n = r(this, Ke);
        if (n === e || (f(this, Ke, e), !r(this, L))) return;
        let { MapStyleToggle: i } = r(this, L);
        !i ||
          ((i.style.backgroundImage = r(this, bt).call(this, n)),
          i.setAttribute("title", `Switch to ${n === "satellite" ? "Satellite" : "Default"}`),
          r(this, vt).call(this));
      }
      get defaultMapStyle() {
        return r(this, _n);
      }
      set defaultMapStyle(e) {
        f(this, _n, e), r(this, vt).call(this);
      }
      get footer() {
        return r(this, Bn);
      }
      set footer(e) {
        f(this, Bn, e);
        let n = this.querySelector(".MinimapFooter");
        n &&
          (typeof e == "string"
            ? ((n.textContent = e), n.removeAttribute("aria-hidden"))
            : e
            ? n.removeAttribute("aria-hidden")
            : n.setAttribute("aria-hidden", "true"));
      }
      get container() {
        return r(this, Nn);
      }
      set container(e) {
        e && ((e.style.position = "relative"), f(this, Nn, e));
      }
      show() {
        if (!r(this, me)) return;
        let e = r(this, me).geometry.coordinates;
        (r(this, D).coordinate = e), f(this, Pe, r(this, Wn).call(this, e));
        let { MapboxAddressMinimap: n, Image: i } = r(this, L);
        (i.src = r(this, Pe)), n.removeAttribute("aria-hidden");
      }
      hide() {
        let { MapboxAddressMinimap: e } = r(this, L);
        e.setAttribute("aria-hidden", "true");
      }
      connectedCallback() {
        super.connectedCallback(),
          f(
            this,
            L,
            se(this, {
              MapboxAddressMinimap: ".MapboxAddressMinimap",
              ImageContainer: ".MinimapImageContainer",
              Image: ".MinimapImage",
              Marker: ".MinimapMarker",
              MapStyleToggle: ".MinimapStyleToggle",
              EditButtons: ".MinimapEditButtons",
              ButtonAdjust: ".MinimapButtonAdjust",
              ButtonSave: ".MinimapButtonSave",
              ButtonCancel: ".MinimapButtonCancel",
            })
          ),
          (this.mapStyleMode = r(this, Ke)),
          (this.theme = x({}, this.theme)),
          this.canAdjustMarker && r(this, zn).call(this),
          this.satelliteToggle && r(this, Gn).call(this),
          (this.container = this.parentElement),
          new ResizeObserver(r(this, Yn)).observe(this.container),
          r(this, Yn).call(this);
        let { MapboxAddressMinimap: n, ImageContainer: i, Image: o, Marker: s } = r(this, L);
        f(this, D, new Cr(i, o, s, this.keepMarkerCentered, gs, this.markerAnchor)),
          r(this, D).reCenter(),
          (o.onload = r(this, Ni)),
          (o.onerror = r(this, Di)),
          (o.src = r(this, Pe)),
          r(this, me) ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", "true");
      }
      attributeChangedCallback(e, n, i) {
        if (e === "access-token") this.accessToken = i;
        else if (e === "can-adjust-marker") this.canAdjustMarker = i === "true";
        else if (e === "keep-marker-centered") this.keepMarkerCentered = i === "true";
        else if (e === "marker-anchor") {
          let o = i;
          (this.markerAnchor = o), r(this, D) && (r(this, D).anchor = o);
        } else e === "satellite-toggle" && (this.satelliteToggle = i === "true");
      }
    };
  (Pn = new WeakMap()),
    (Ve = new WeakMap()),
    (mt = new WeakMap()),
    (me = new WeakMap()),
    (Pe = new WeakMap()),
    (re = new WeakMap()),
    (oe = new WeakMap()),
    (L = new WeakMap()),
    (D = new WeakMap()),
    (On = new WeakMap()),
    (Hn = new WeakMap()),
    (Fn = new WeakMap()),
    (Ke = new WeakMap()),
    (_n = new WeakMap()),
    (Bn = new WeakMap()),
    (Nn = new WeakMap()),
    (gt = new WeakMap()),
    (Dn = new WeakMap()),
    (jn = new WeakMap()),
    (Un = new WeakMap()),
    ($n = new WeakMap()),
    (Ni = new WeakMap()),
    (Di = new WeakMap()),
    (Wn = new WeakMap()),
    (vt = new WeakMap()),
    (bt = new WeakMap()),
    (Yn = new WeakMap()),
    (zn = new WeakMap()),
    (ji = new WeakMap()),
    (Gn = new WeakMap()),
    (Ui = new WeakMap()),
    (yt.observedAttributes = [
      "access-token",
      "can-adjust-marker",
      "keep-marker-centered",
      "marker-anchor",
      "satellite-toggle",
    ]);
  window.MapboxAddressMinimap = yt;
  window.customElements.get("mapbox-address-minimap") ||
    customElements.define("mapbox-address-minimap", yt);
  var $,
    Te,
    V,
    Se,
    Xn,
    qn,
    Vn,
    Kn,
    Qn,
    Zn,
    xt,
    vs = class {
      constructor(e, n, i) {
        u(this, $, void 0);
        u(this, Te, void 0);
        u(this, V, void 0);
        this.options = {};
        this.retrieveFeature = null;
        this.listbox = new xe();
        u(this, Se, void 0);
        u(this, Xn, e => {
          let n = e.detail,
            i = r(this, Te).browserAutofillEnabled === !0 && (n == null ? void 0 : n.length) <= 2;
          if ((te(r(this, $), r(this, Se), i), (n == null ? void 0 : n.length) <= 2)) {
            this.listbox.handleSuggest(null);
            return;
          }
          r(this, V).suggest(n, this.options);
        });
        u(this, qn, e => {
          let n = e.detail;
          e.detail.accuracy !== "street"
            ? (te(r(this, $), r(this, Se), !0), r(this, V).retrieve(n, this.options))
            : Ti(r(this, $), r(this, Se), n);
        });
        u(this, Vn, () => {
          te(r(this, $), r(this, Se), !0), r(this, V).abort();
        });
        u(this, Kn, () => {
          var n;
          let e =
            r(this, Te).browserAutofillEnabled === !0 &&
            ((n = r(this, $).value) == null ? void 0 : n.length) <= 2;
          te(r(this, $), r(this, Se), e);
        });
        u(this, Qn, e => {
          let n = (e == null ? void 0 : e.suggestions) ? Mi(e.suggestions) : null;
          this.listbox.handleSuggest(n);
          let i = new S("suggest", e);
          Object.defineProperty(i, "target", { value: r(this, $) }), r(this, Te).fire("suggest", i);
        });
        u(this, Zn, e => {
          this.listbox.handleError();
          let n = new S("suggesterror", e);
          Object.defineProperty(n, "target", { value: r(this, $) }),
            r(this, Te).fire("suggesterror", n);
        });
        u(this, xt, e => {
          var o;
          let n = new S("retrieve", e);
          if (
            (Object.defineProperty(n, "target", { value: r(this, $) }),
            r(this, Te).fire("retrieve", n),
            (this.retrieveFeature = (o = e.features) == null ? void 0 : o[0]),
            !r(this, $))
          )
            return;
          let i = e;
          !i || !i.features || !i.features.length || Dt(i.features[0], r(this, $));
        });
        f(this, $, n),
          f(this, Te, e),
          f(this, V, new Je(i)),
          (r(this, V).sessionToken = R.autofillSessionToken),
          (this.listbox.input = r(this, $)),
          (this.listbox.autofillHost = this),
          this.listbox.addEventListener("input", r(this, Xn)),
          this.listbox.addEventListener("select", r(this, qn)),
          this.listbox.addEventListener("blur", r(this, Vn)),
          this.listbox.addEventListener("focus", r(this, Kn)),
          r(this, V).addEventListener("suggest", r(this, Qn)),
          r(this, V).addEventListener("suggesterror", r(this, Zn)),
          r(this, V).addEventListener("retrieve", r(this, xt)),
          document.body.appendChild(this.listbox),
          n && (n.insertAdjacentElement("beforebegin", it()), f(this, Se, n.autocomplete));
      }
      get input() {
        return r(this, $);
      }
      remove() {
        this.listbox.remove(),
          this.listbox.removeEventListener("input", r(this, Xn)),
          this.listbox.removeEventListener("select", r(this, qn)),
          this.listbox.removeEventListener("blur", r(this, Vn)),
          this.listbox.removeEventListener("focus", r(this, Kn)),
          r(this, V).removeEventListener("suggest", r(this, Qn)),
          r(this, V).removeEventListener("suggesterror", r(this, Zn)),
          r(this, V).removeEventListener("retrieve", r(this, xt));
      }
      simulateRetrieve(e) {
        let n = r(this, $);
        n && (n.dataset.mapboxSuccess = "true"), this.listbox.hideResults();
        let i = { type: "FeatureCollection", features: [e] };
        r(this, xt).call(this, i);
      }
    };
  ($ = new WeakMap()),
    (Te = new WeakMap()),
    (V = new WeakMap()),
    (Se = new WeakMap()),
    (Xn = new WeakMap()),
    (qn = new WeakMap()),
    (Vn = new WeakMap()),
    (Kn = new WeakMap()),
    (Qn = new WeakMap()),
    (Zn = new WeakMap()),
    (xt = new WeakMap());
  var Et,
    Mt,
    Tt,
    Jn,
    ei,
    ti,
    ni,
    ii,
    bs = class extends ir {
      constructor({
        accessToken: e,
        options: n,
        theme: i,
        popoverOptions: o,
        confirmOnBrowserAutofill: s,
        browserAutofillEnabled: l,
      }) {
        super();
        this.instances = [];
        u(this, Et, void 0);
        u(this, Mt, new It());
        u(this, Tt, void 0);
        u(this, Jn, void 0);
        u(this, ei, void 0);
        this.confirmOnBrowserAutofill = !1;
        this.browserAutofillEnabled = !1;
        u(this, ti, () => {
          Be(_t(), r(this, Et)) || this.update();
        });
        u(this, ni, new MutationObserver(r(this, ti)));
        u(this, ii, e =>
          B(this, null, function* () {
            this.instances.forEach(n => n.listbox.blur());
            for (let n of this.instances) {
              let i = n.listbox.input;
              yield Ri(i, e, this.confirmOnBrowserAutofill, this.accessToken);
            }
          })
        );
        Oi(),
          window.addEventListener("browserautofill", r(this, ii)),
          (R.autofillSessionEnabled = !0),
          (this.accessToken = e || R.accessToken),
          n && (this.options = n),
          i && (this.theme = i),
          o && (this.popoverOptions = o),
          s && (this.confirmOnBrowserAutofill = s),
          l && (this.browserAutofillEnabled = l),
          this.update();
      }
      get accessToken() {
        return r(this, Mt).accessToken;
      }
      set accessToken(e) {
        r(this, Mt).accessToken = e;
      }
      get options() {
        return r(this, Tt);
      }
      set options(e) {
        f(this, Tt, x(x({}, r(this, Tt)), e)),
          this.instances.forEach(n => {
            n.options = x(x({}, n.options), e);
          });
      }
      get theme() {
        return r(this, Jn);
      }
      set theme(e) {
        f(this, Jn, e),
          this.instances.forEach(n => {
            n.listbox.theme = e;
          });
      }
      get popoverOptions() {
        return r(this, ei);
      }
      set popoverOptions(e) {
        f(this, ei, e),
          this.instances.forEach(n => {
            n.listbox.popoverOptions = e;
          });
      }
      update() {
        this.instances.forEach(e => {
          e.remove();
        }),
          f(this, Et, _t()),
          (this.instances = []),
          r(this, Et).forEach(e => {
            let n = new vs(this, e, r(this, Mt));
            (n.options = this.options),
              (n.listbox.theme = this.theme),
              (n.listbox.popoverOptions = this.popoverOptions),
              this.instances.push(n);
          });
      }
      observe() {
        r(this, ni).observe(document, { subtree: !0, childList: !0 }), r(this, ti).call(this);
      }
      unobserve() {
        r(this, ni).disconnect();
      }
      remove() {
        this.instances.forEach(e => {
          e.remove();
        }),
          this.unobserve(),
          window.removeEventListener("browserautofill", r(this, ii));
      }
    };
  (Et = new WeakMap()),
    (Mt = new WeakMap()),
    (Tt = new WeakMap()),
    (Jn = new WeakMap()),
    (ei = new WeakMap()),
    (ti = new WeakMap()),
    (ni = new WeakMap()),
    (ii = new WeakMap());
  function ys(t) {
    return new bs(t);
  }
  return ks(ll);
})();
/*!
 * focus-trap 6.7.3
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */
/*!
 * tabbable 5.2.1
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
//# sourceMappingURL=mapboxsearch.js.map
