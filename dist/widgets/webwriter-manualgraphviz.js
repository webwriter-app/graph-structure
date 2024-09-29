var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array2, target) => __defNormalProp(target, __knownSymbol("metadata"), array2[3]);
var __runInitializers = (array2, flags, self, value) => {
  for (var i5 = 0, fns = array2[flags >> 1], n9 = fns && fns.length; i5 < n9; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement = (array2, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s3 = !!(flags & 8), p3 = !!(flags & 16);
  var j3 = k3 > 3 ? array2.length + 1 : k3 ? s3 ? 1 : 2 : 0, key = __decoratorStrings[k3 + 5];
  var initializers = k3 > 3 && (array2[j3 - 1] = []), extraInitializers = array2[j3] || (array2[j3] = []);
  var desc = k3 && (!p3 && !s3 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p3) && __getOwnPropDesc(k3 < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x5) {
    return __privateSet(this, extra, x5);
  } }, name));
  k3 ? p3 && k3 < 4 && __name(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext(k3, name, done = {}, array2[3], extraInitializers);
    if (k3) {
      ctx.static = s3, ctx.private = p3, access = ctx.access = { has: p3 ? (x5) => __privateIn(target, x5) : (x5) => name in x5 };
      if (k3 ^ 3) access.get = p3 ? (x5) => (k3 ^ 1 ? __privateGet : __privateMethod)(x5, target, k3 ^ 4 ? extra : desc.get) : (x5) => x5[name];
      if (k3 > 2) access.set = p3 ? (x5, y5) => __privateSet(x5, target, y5, k3 ^ 4 ? extra : desc.set) : (x5, y5) => x5[name] = y5;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p3 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p3 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata(array2, target), desc && __defProp(target, name, desc), p3 ? k3 ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// node_modules/@webwriter/lit/index.js
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __knownSymbol2 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError2 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name2 = (target, value) => __defProp2(target, "name", { value, configurable: true });
var __decoratorStart2 = (base) => [, , , __create2(base?.[__knownSymbol2("metadata")] ?? null)];
var __decoratorStrings2 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn2 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError2("Function expected") : fn;
var __decoratorContext2 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings2[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError2("Already initialized") : fns.push(__expectFn2(fn || null)) });
var __decoratorMetadata2 = (array2, target) => __defNormalProp2(target, __knownSymbol2("metadata"), array2[3]);
var __runInitializers2 = (array2, flags, self, value) => {
  for (var i32 = 0, fns = array2[flags >> 1], n52 = fns && fns.length; i32 < n52; i32++) flags & 1 ? fns[i32].call(self) : value = fns[i32].call(self, value);
  return value;
};
var __decorateElement2 = (array2, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k22 = flags & 7, s22 = !!(flags & 8), p22 = !!(flags & 16);
  var j22 = k22 > 3 ? array2.length + 1 : k22 ? s22 ? 1 : 2 : 0, key = __decoratorStrings2[k22 + 5];
  var initializers = k22 > 3 && (array2[j22 - 1] = []), extraInitializers = array2[j22] || (array2[j22] = []);
  var desc = k22 && (!p22 && !s22 && (target = target.prototype), k22 < 5 && (k22 > 3 || !p22) && __getOwnPropDesc2(k22 < 4 ? target : { get [name]() {
    return __privateGet2(this, extra);
  }, set [name](x22) {
    return __privateSet2(this, extra, x22);
  } }, name));
  k22 ? p22 && k22 < 4 && __name2(extra, (k22 > 2 ? "set " : k22 > 1 ? "get " : "") + name) : __name2(target, name);
  for (var i32 = decorators.length - 1; i32 >= 0; i32--) {
    ctx = __decoratorContext2(k22, name, done = {}, array2[3], extraInitializers);
    if (k22) {
      ctx.static = s22, ctx.private = p22, access = ctx.access = { has: p22 ? (x22) => __privateIn2(target, x22) : (x22) => name in x22 };
      if (k22 ^ 3) access.get = p22 ? (x22) => (k22 ^ 1 ? __privateGet2 : __privateMethod2)(x22, target, k22 ^ 4 ? extra : desc.get) : (x22) => x22[name];
      if (k22 > 2) access.set = p22 ? (x22, y22) => __privateSet2(x22, target, y22, k22 ^ 4 ? extra : desc.set) : (x22, y22) => x22[name] = y22;
    }
    it = (0, decorators[i32])(k22 ? k22 < 4 ? p22 ? extra : desc[key] : k22 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k22 ^ 4 || it === void 0) __expectFn2(it) && (k22 > 4 ? initializers.unshift(it) : k22 ? p22 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError2("Object expected");
    else __expectFn2(fn = it.get) && (desc.get = fn), __expectFn2(fn = it.set) && (desc.set = fn), __expectFn2(fn = it.init) && initializers.unshift(fn);
  }
  return k22 || __decoratorMetadata2(array2, target), desc && __defProp2(target, name, desc), p22 ? k22 ^ 4 ? extra : desc : target;
};
var __publicField2 = (obj, key, value) => __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck2 = (obj, member, msg) => member.has(obj) || __typeError2("Cannot " + msg);
var __privateIn2 = (member, obj) => Object(obj) !== obj ? __typeError2('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet2 = (obj, member, getter) => (__accessCheck2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd2 = (obj, member, value) => member.has(obj) ? __typeError2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet2 = (obj, member, value, setter) => (__accessCheck2(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod2 = (obj, member, method) => (__accessCheck2(obj, member, "access private method"), method);
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t22, e42, o42) {
    if (this._$cssResult$ = true, o42 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t22, this.t = e42;
  }
  get styleSheet() {
    let t22 = this.o;
    const s22 = this.t;
    if (e && void 0 === t22) {
      const e42 = void 0 !== s22 && 1 === s22.length;
      e42 && (t22 = o.get(s22)), void 0 === t22 && ((this.o = t22 = new CSSStyleSheet()).replaceSync(this.cssText), e42 && o.set(s22, t22));
    }
    return t22;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t22) => new n("string" == typeof t22 ? t22 : t22 + "", void 0, s);
var S = (s22, o42) => {
  if (e) s22.adoptedStyleSheets = o42.map((t22) => t22 instanceof CSSStyleSheet ? t22 : t22.styleSheet);
  else for (const e42 of o42) {
    const o52 = document.createElement("style"), n52 = t.litNonce;
    void 0 !== n52 && o52.setAttribute("nonce", n52), o52.textContent = e42.cssText, s22.appendChild(o52);
  }
};
var c = e ? (t22) => t22 : (t22) => t22 instanceof CSSStyleSheet ? ((t32) => {
  let e42 = "";
  for (const s22 of t32.cssRules) e42 += s22.cssText;
  return r(e42);
})(t22) : t22;
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t22, s22) => t22;
var u = { toAttribute(t22, s22) {
  switch (s22) {
    case Boolean:
      t22 = t22 ? l : null;
      break;
    case Object:
    case Array:
      t22 = null == t22 ? t22 : JSON.stringify(t22);
  }
  return t22;
}, fromAttribute(t22, s22) {
  let i32 = t22;
  switch (s22) {
    case Boolean:
      i32 = null !== t22;
      break;
    case Number:
      i32 = null === t22 ? null : Number(t22);
      break;
    case Object:
    case Array:
      try {
        i32 = JSON.parse(t22);
      } catch (t32) {
        i32 = null;
      }
  }
  return i32;
} };
var f = (t22, s22) => !i2(t22, s22);
var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var b = class extends HTMLElement {
  static addInitializer(t22) {
    this._$Ei(), (this.l ??= []).push(t22);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t22, s22 = y) {
    if (s22.state && (s22.attribute = false), this._$Ei(), this.elementProperties.set(t22, s22), !s22.noAccessor) {
      const i32 = Symbol(), r42 = this.getPropertyDescriptor(t22, i32, s22);
      void 0 !== r42 && e2(this.prototype, t22, r42);
    }
  }
  static getPropertyDescriptor(t22, s22, i32) {
    const { get: e42, set: h42 } = r2(this.prototype, t22) ?? { get() {
      return this[s22];
    }, set(t32) {
      this[s22] = t32;
    } };
    return { get() {
      return e42?.call(this);
    }, set(s3) {
      const r42 = e42?.call(this);
      h42.call(this, s3), this.requestUpdate(t22, r42, i32);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t22) {
    return this.elementProperties.get(t22) ?? y;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t22 = n2(this);
    t22.finalize(), void 0 !== t22.l && (this.l = [...t22.l]), this.elementProperties = new Map(t22.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t32 = this.properties, s22 = [...h(t32), ...o2(t32)];
      for (const i32 of s22) this.createProperty(i32, t32[i32]);
    }
    const t22 = this[Symbol.metadata];
    if (null !== t22) {
      const s22 = litPropertyMetadata.get(t22);
      if (void 0 !== s22) for (const [t32, i32] of s22) this.elementProperties.set(t32, i32);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t32, s22] of this.elementProperties) {
      const i32 = this._$Eu(t32, s22);
      void 0 !== i32 && this._$Eh.set(i32, t32);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s22) {
    const i32 = [];
    if (Array.isArray(s22)) {
      const e42 = new Set(s22.flat(1 / 0).reverse());
      for (const s3 of e42) i32.unshift(c(s3));
    } else void 0 !== s22 && i32.push(c(s22));
    return i32;
  }
  static _$Eu(t22, s22) {
    const i32 = s22.attribute;
    return false === i32 ? void 0 : "string" == typeof i32 ? i32 : "string" == typeof t22 ? t22.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t22) => this.enableUpdating = t22), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t22) => t22(this));
  }
  addController(t22) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t22), void 0 !== this.renderRoot && this.isConnected && t22.hostConnected?.();
  }
  removeController(t22) {
    this._$EO?.delete(t22);
  }
  _$E_() {
    const t22 = /* @__PURE__ */ new Map(), s22 = this.constructor.elementProperties;
    for (const i32 of s22.keys()) this.hasOwnProperty(i32) && (t22.set(i32, this[i32]), delete this[i32]);
    t22.size > 0 && (this._$Ep = t22);
  }
  createRenderRoot() {
    const t22 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t22, this.constructor.elementStyles), t22;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t22) => t22.hostConnected?.());
  }
  enableUpdating(t22) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t22) => t22.hostDisconnected?.());
  }
  attributeChangedCallback(t22, s22, i32) {
    this._$AK(t22, i32);
  }
  _$EC(t22, s22) {
    const i32 = this.constructor.elementProperties.get(t22), e42 = this.constructor._$Eu(t22, i32);
    if (void 0 !== e42 && true === i32.reflect) {
      const r42 = (void 0 !== i32.converter?.toAttribute ? i32.converter : u).toAttribute(s22, i32.type);
      this._$Em = t22, null == r42 ? this.removeAttribute(e42) : this.setAttribute(e42, r42), this._$Em = null;
    }
  }
  _$AK(t22, s22) {
    const i32 = this.constructor, e42 = i32._$Eh.get(t22);
    if (void 0 !== e42 && this._$Em !== e42) {
      const t32 = i32.getPropertyOptions(e42), r42 = "function" == typeof t32.converter ? { fromAttribute: t32.converter } : void 0 !== t32.converter?.fromAttribute ? t32.converter : u;
      this._$Em = e42, this[e42] = r42.fromAttribute(s22, t32.type), this._$Em = null;
    }
  }
  requestUpdate(t22, s22, i32) {
    if (void 0 !== t22) {
      if (i32 ??= this.constructor.getPropertyOptions(t22), !(i32.hasChanged ?? f)(this[t22], s22)) return;
      this.P(t22, s22, i32);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t22, s22, i32) {
    this._$AL.has(t22) || this._$AL.set(t22, s22), true === i32.reflect && this._$Em !== t22 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t22);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t32) {
      Promise.reject(t32);
    }
    const t22 = this.scheduleUpdate();
    return null != t22 && await t22, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t42, s3] of this._$Ep) this[t42] = s3;
        this._$Ep = void 0;
      }
      const t32 = this.constructor.elementProperties;
      if (t32.size > 0) for (const [s3, i32] of t32) true !== i32.wrapped || this._$AL.has(s3) || void 0 === this[s3] || this.P(s3, this[s3], i32);
    }
    let t22 = false;
    const s22 = this._$AL;
    try {
      t22 = this.shouldUpdate(s22), t22 ? (this.willUpdate(s22), this._$EO?.forEach((t32) => t32.hostUpdate?.()), this.update(s22)) : this._$EU();
    } catch (s3) {
      throw t22 = false, this._$EU(), s3;
    }
    t22 && this._$AE(s22);
  }
  willUpdate(t22) {
  }
  _$AE(t22) {
    this._$EO?.forEach((t32) => t32.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t22)), this.updated(t22);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t22) {
    return true;
  }
  update(t22) {
    this._$Ej &&= this._$Ej.forEach((t32) => this._$EC(t32, this[t32])), this._$EU();
  }
  updated(t22) {
  }
  firstUpdated(t22) {
  }
};
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.4");
var n3 = globalThis;
var c3 = n3.trustedTypes;
var h2 = c3 ? c3.createPolicy("lit-html", { createHTML: (t22) => t22 }) : void 0;
var f2 = "$lit$";
var v = `lit$${Math.random().toFixed(9).slice(2)}$`;
var m = "?" + v;
var _ = `<${m}>`;
var w = document;
var lt = () => w.createComment("");
var st = (t22) => null === t22 || "object" != typeof t22 && "function" != typeof t22;
var g = Array.isArray;
var $ = (t22) => g(t22) || "function" == typeof t22?.[Symbol.iterator];
var x = "[ 	\n\f\r]";
var T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var E = /-->/g;
var k = />/g;
var O = RegExp(`>|${x}(?:([^\\s"'>=/]+)(${x}*=${x}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var S2 = /'/g;
var j = /"/g;
var M = /^(?:script|style|textarea|title)$/i;
var P = (t22) => (i32, ...s22) => ({ _$litType$: t22, strings: i32, values: s22 });
var ke = P(1);
var Oe = P(2);
var Se = P(3);
var R = Symbol.for("lit-noChange");
var D = Symbol.for("lit-nothing");
var V = /* @__PURE__ */ new WeakMap();
var I = w.createTreeWalker(w, 129);
function N(t22, i32) {
  if (!g(t22) || !t22.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== h2 ? h2.createHTML(i32) : i32;
}
var U = (t22, i32) => {
  const s22 = t22.length - 1, e42 = [];
  let h42, o42 = 2 === i32 ? "<svg>" : 3 === i32 ? "<math>" : "", n52 = T;
  for (let i42 = 0; i42 < s22; i42++) {
    const s3 = t22[i42];
    let r42, l22, c42 = -1, a22 = 0;
    for (; a22 < s3.length && (n52.lastIndex = a22, l22 = n52.exec(s3), null !== l22); ) a22 = n52.lastIndex, n52 === T ? "!--" === l22[1] ? n52 = E : void 0 !== l22[1] ? n52 = k : void 0 !== l22[2] ? (M.test(l22[2]) && (h42 = RegExp("</" + l22[2], "g")), n52 = O) : void 0 !== l22[3] && (n52 = O) : n52 === O ? ">" === l22[0] ? (n52 = h42 ?? T, c42 = -1) : void 0 === l22[1] ? c42 = -2 : (c42 = n52.lastIndex - l22[2].length, r42 = l22[1], n52 = void 0 === l22[3] ? O : '"' === l22[3] ? j : S2) : n52 === j || n52 === S2 ? n52 = O : n52 === E || n52 === k ? n52 = T : (n52 = O, h42 = void 0);
    const u22 = n52 === O && t22[i42 + 1].startsWith("/>") ? " " : "";
    o42 += n52 === T ? s3 + _ : c42 >= 0 ? (e42.push(r42), s3.slice(0, c42) + f2 + s3.slice(c42) + v + u22) : s3 + v + (-2 === c42 ? i42 : u22);
  }
  return [N(t22, o42 + (t22[s22] || "<?>") + (2 === i32 ? "</svg>" : 3 === i32 ? "</math>" : "")), e42];
};
var B = class _B {
  constructor({ strings: t22, _$litType$: i32 }, s22) {
    let e42;
    this.parts = [];
    let h42 = 0, o42 = 0;
    const n52 = t22.length - 1, r42 = this.parts, [l22, a22] = U(t22, i32);
    if (this.el = _B.createElement(l22, s22), I.currentNode = this.el.content, 2 === i32 || 3 === i32) {
      const t32 = this.el.content.firstChild;
      t32.replaceWith(...t32.childNodes);
    }
    for (; null !== (e42 = I.nextNode()) && r42.length < n52; ) {
      if (1 === e42.nodeType) {
        if (e42.hasAttributes()) for (const t32 of e42.getAttributeNames()) if (t32.endsWith(f2)) {
          const i42 = a22[o42++], s3 = e42.getAttribute(t32).split(v), n62 = /([.?@])?(.*)/.exec(i42);
          r42.push({ type: 1, index: h42, name: n62[2], strings: s3, ctor: "." === n62[1] ? Y : "?" === n62[1] ? Z : "@" === n62[1] ? q : G }), e42.removeAttribute(t32);
        } else t32.startsWith(v) && (r42.push({ type: 6, index: h42 }), e42.removeAttribute(t32));
        if (M.test(e42.tagName)) {
          const t32 = e42.textContent.split(v), i42 = t32.length - 1;
          if (i42 > 0) {
            e42.textContent = c3 ? c3.emptyScript : "";
            for (let s3 = 0; s3 < i42; s3++) e42.append(t32[s3], lt()), I.nextNode(), r42.push({ type: 2, index: ++h42 });
            e42.append(t32[i42], lt());
          }
        }
      } else if (8 === e42.nodeType) if (e42.data === m) r42.push({ type: 2, index: h42 });
      else {
        let t32 = -1;
        for (; -1 !== (t32 = e42.data.indexOf(v, t32 + 1)); ) r42.push({ type: 7, index: h42 }), t32 += v.length - 1;
      }
      h42++;
    }
  }
  static createElement(t22, i32) {
    const s22 = w.createElement("template");
    return s22.innerHTML = t22, s22;
  }
};
function z(t22, i32, s22 = t22, e42) {
  if (i32 === R) return i32;
  let h42 = void 0 !== e42 ? s22.o?.[e42] : s22.l;
  const o42 = st(i32) ? void 0 : i32._$litDirective$;
  return h42?.constructor !== o42 && (h42?._$AO?.(false), void 0 === o42 ? h42 = void 0 : (h42 = new o42(t22), h42._$AT(t22, s22, e42)), void 0 !== e42 ? (s22.o ??= [])[e42] = h42 : s22.l = h42), void 0 !== h42 && (i32 = z(t22, h42._$AS(t22, i32.values), h42, e42)), i32;
}
var F = class {
  constructor(t22, i32) {
    this._$AV = [], this._$AN = void 0, this._$AD = t22, this._$AM = i32;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t22) {
    const { el: { content: i32 }, parts: s22 } = this._$AD, e42 = (t22?.creationScope ?? w).importNode(i32, true);
    I.currentNode = e42;
    let h42 = I.nextNode(), o42 = 0, n52 = 0, r42 = s22[0];
    for (; void 0 !== r42; ) {
      if (o42 === r42.index) {
        let i42;
        2 === r42.type ? i42 = new et(h42, h42.nextSibling, this, t22) : 1 === r42.type ? i42 = new r42.ctor(h42, r42.name, r42.strings, this, t22) : 6 === r42.type && (i42 = new K(h42, this, t22)), this._$AV.push(i42), r42 = s22[++n52];
      }
      o42 !== r42?.index && (h42 = I.nextNode(), o42++);
    }
    return I.currentNode = w, e42;
  }
  p(t22) {
    let i32 = 0;
    for (const s22 of this._$AV) void 0 !== s22 && (void 0 !== s22.strings ? (s22._$AI(t22, s22, i32), i32 += s22.strings.length - 2) : s22._$AI(t22[i32])), i32++;
  }
};
var et = class _et {
  get _$AU() {
    return this._$AM?._$AU ?? this.v;
  }
  constructor(t22, i32, s22, e42) {
    this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = t22, this._$AB = i32, this._$AM = s22, this.options = e42, this.v = e42?.isConnected ?? true;
  }
  get parentNode() {
    let t22 = this._$AA.parentNode;
    const i32 = this._$AM;
    return void 0 !== i32 && 11 === t22?.nodeType && (t22 = i32.parentNode), t22;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t22, i32 = this) {
    t22 = z(this, t22, i32), st(t22) ? t22 === D || null == t22 || "" === t22 ? (this._$AH !== D && this._$AR(), this._$AH = D) : t22 !== this._$AH && t22 !== R && this._(t22) : void 0 !== t22._$litType$ ? this.$(t22) : void 0 !== t22.nodeType ? this.T(t22) : $(t22) ? this.k(t22) : this._(t22);
  }
  O(t22) {
    return this._$AA.parentNode.insertBefore(t22, this._$AB);
  }
  T(t22) {
    this._$AH !== t22 && (this._$AR(), this._$AH = this.O(t22));
  }
  _(t22) {
    this._$AH !== D && st(this._$AH) ? this._$AA.nextSibling.data = t22 : this.T(w.createTextNode(t22)), this._$AH = t22;
  }
  $(t22) {
    const { values: i32, _$litType$: s22 } = t22, e42 = "number" == typeof s22 ? this._$AC(t22) : (void 0 === s22.el && (s22.el = B.createElement(N(s22.h, s22.h[0]), this.options)), s22);
    if (this._$AH?._$AD === e42) this._$AH.p(i32);
    else {
      const t32 = new F(e42, this), s3 = t32.u(this.options);
      t32.p(i32), this.T(s3), this._$AH = t32;
    }
  }
  _$AC(t22) {
    let i32 = V.get(t22.strings);
    return void 0 === i32 && V.set(t22.strings, i32 = new B(t22)), i32;
  }
  k(t22) {
    g(this._$AH) || (this._$AH = [], this._$AR());
    const i32 = this._$AH;
    let s22, e42 = 0;
    for (const h42 of t22) e42 === i32.length ? i32.push(s22 = new _et(this.O(lt()), this.O(lt()), this, this.options)) : s22 = i32[e42], s22._$AI(h42), e42++;
    e42 < i32.length && (this._$AR(s22 && s22._$AB.nextSibling, e42), i32.length = e42);
  }
  _$AR(t22 = this._$AA.nextSibling, i32) {
    for (this._$AP?.(false, true, i32); t22 && t22 !== this._$AB; ) {
      const i42 = t22.nextSibling;
      t22.remove(), t22 = i42;
    }
  }
  setConnected(t22) {
    void 0 === this._$AM && (this.v = t22, this._$AP?.(t22));
  }
};
var G = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t22, i32, s22, e42, h42) {
    this.type = 1, this._$AH = D, this._$AN = void 0, this.element = t22, this.name = i32, this._$AM = e42, this.options = h42, s22.length > 2 || "" !== s22[0] || "" !== s22[1] ? (this._$AH = Array(s22.length - 1).fill(new String()), this.strings = s22) : this._$AH = D;
  }
  _$AI(t22, i32 = this, s22, e42) {
    const h42 = this.strings;
    let o42 = false;
    if (void 0 === h42) t22 = z(this, t22, i32, 0), o42 = !st(t22) || t22 !== this._$AH && t22 !== R, o42 && (this._$AH = t22);
    else {
      const e52 = t22;
      let n52, r42;
      for (t22 = h42[0], n52 = 0; n52 < h42.length - 1; n52++) r42 = z(this, e52[s22 + n52], i32, n52), r42 === R && (r42 = this._$AH[n52]), o42 ||= !st(r42) || r42 !== this._$AH[n52], r42 === D ? t22 = D : t22 !== D && (t22 += (r42 ?? "") + h42[n52 + 1]), this._$AH[n52] = r42;
    }
    o42 && !e42 && this.j(t22);
  }
  j(t22) {
    t22 === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t22 ?? "");
  }
};
var Y = class extends G {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t22) {
    this.element[this.name] = t22 === D ? void 0 : t22;
  }
};
var Z = class extends G {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t22) {
    this.element.toggleAttribute(this.name, !!t22 && t22 !== D);
  }
};
var q = class extends G {
  constructor(t22, i32, s22, e42, h42) {
    super(t22, i32, s22, e42, h42), this.type = 5;
  }
  _$AI(t22, i32 = this) {
    if ((t22 = z(this, t22, i32, 0) ?? D) === R) return;
    const s22 = this._$AH, e42 = t22 === D && s22 !== D || t22.capture !== s22.capture || t22.once !== s22.once || t22.passive !== s22.passive, h42 = t22 !== D && (s22 === D || e42);
    e42 && this.element.removeEventListener(this.name, this, s22), h42 && this.element.addEventListener(this.name, this, t22), this._$AH = t22;
  }
  handleEvent(t22) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t22) : this._$AH.handleEvent(t22);
  }
};
var K = class {
  constructor(t22, i32, s22) {
    this.element = t22, this.type = 6, this._$AN = void 0, this._$AM = i32, this.options = s22;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t22) {
    z(this, t22);
  }
};
var Re = n3.litHtmlPolyfillSupport;
Re?.(B, et), (n3.litHtmlVersions ??= []).push("3.2.0");
var Q = (t22, i32, s22) => {
  const e42 = s22?.renderBefore ?? i32;
  let h42 = e42._$litPart$;
  if (void 0 === h42) {
    const t32 = s22?.renderBefore ?? null;
    e42._$litPart$ = h42 = new et(i32.insertBefore(lt(), t32), t32, void 0, s22 ?? {});
  }
  return h42._$AI(t22), h42;
};
var h3 = class extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    const t22 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t22.firstChild, t22;
  }
  update(t22) {
    const e42 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t22), this.o = Q(e42, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this.o?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.o?.setConnected(false);
  }
  render() {
    return R;
  }
};
h3._$litElement$ = true, h3["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: h3 });
var f3 = globalThis.litElementPolyfillSupport;
f3?.({ LitElement: h3 });
(globalThis.litElementVersions ??= []).push("4.1.0");
var o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r3 = (t22 = o3, e42, r42) => {
  const { kind: n52, metadata: i32 } = r42;
  let s22 = globalThis.litPropertyMetadata.get(i32);
  if (void 0 === s22 && globalThis.litPropertyMetadata.set(i32, s22 = /* @__PURE__ */ new Map()), s22.set(r42.name, t22), "accessor" === n52) {
    const { name: o42 } = r42;
    return { set(r52) {
      const n62 = e42.get.call(this);
      e42.set.call(this, r52), this.requestUpdate(o42, n62, t22);
    }, init(e52) {
      return void 0 !== e52 && this.P(o42, void 0, t22), e52;
    } };
  }
  if ("setter" === n52) {
    const { name: o42 } = r42;
    return function(r52) {
      const n62 = this[o42];
      e42.call(this, r52), this.requestUpdate(o42, n62, t22);
    };
  }
  throw Error("Unsupported decorator location: " + n52);
};
function n4(t22) {
  return (e42, o42) => "object" == typeof o42 ? r3(t22, e42, o42) : ((t32, e52, o52) => {
    const r42 = e52.hasOwnProperty(o52);
    return e52.constructor.createProperty(o52, r42 ? { ...t32, wrapped: true } : t32), r42 ? Object.getOwnPropertyDescriptor(e52, o52) : void 0;
  })(t22, e42, o42);
}
var appliedClassMixins = /* @__PURE__ */ new WeakMap();
function wasMixinPreviouslyApplied(mixin, superClass) {
  let klass = superClass;
  while (klass) {
    if (appliedClassMixins.get(klass) === mixin) {
      return true;
    }
    klass = Object.getPrototypeOf(klass);
  }
  return false;
}
function dedupeMixin(mixin) {
  return (superClass) => {
    if (wasMixinPreviouslyApplied(mixin, superClass)) {
      return superClass;
    }
    const mixedClass = mixin(superClass);
    appliedClassMixins.set(mixedClass, mixin);
    return mixedClass;
  };
}
var version = "3.0.0";
var versions = window.scopedElementsVersions || (window.scopedElementsVersions = []);
if (!versions.includes(version)) {
  versions.push(version);
}
var ScopedElementsMixinImplementation = (superclass) => (
  /** @type {ScopedElementsHost} */
  class ScopedElementsHost extends superclass {
    /**
     * Obtains the scoped elements definitions map if specified.
     *
     * @type {ScopedElementsMap=}
     */
    static scopedElements;
    static get scopedElementsVersion() {
      return version;
    }
    /** @type {CustomElementRegistry=} */
    static __registry;
    /**
     * Obtains the CustomElementRegistry associated to the ShadowRoot.
     *
     * @returns {CustomElementRegistry=}
     */
    get registry() {
      return (
        /** @type {typeof ScopedElementsHost} */
        this.constructor.__registry
      );
    }
    /**
     * Set the CustomElementRegistry associated to the ShadowRoot
     *
     * @param {CustomElementRegistry} registry
     */
    set registry(registry2) {
      this.constructor.__registry = registry2;
    }
    /**
     * @param {ShadowRootInit} options
     * @returns {ShadowRoot}
     */
    attachShadow(options) {
      const { scopedElements } = (
        /** @type {typeof ScopedElementsHost} */
        this.constructor
      );
      const shouldCreateRegistry = !this.registry || // @ts-ignore
      this.registry === this.constructor.__registry && !Object.prototype.hasOwnProperty.call(this.constructor, "__registry");
      if (shouldCreateRegistry) {
        this.registry = new CustomElementRegistry();
        for (const [tagName, klass] of Object.entries(scopedElements ?? {})) {
          this.registry.define(tagName, klass);
        }
      }
      return super.attachShadow({
        ...options,
        // The polyfill currently expects the registry to be passed as `customElements`
        customElements: this.registry,
        // But the proposal has moved forward, and renamed it to `registry`
        // For backwards compatibility, we pass it as both
        registry: this.registry
      });
    }
  }
);
var ScopedElementsMixin = dedupeMixin(ScopedElementsMixinImplementation);
var ScopedElementsMixinImplementation2 = (superclass) => (
  /** @type {ScopedElementsHost} */
  class ScopedElementsHost extends ScopedElementsMixin(superclass) {
    createRenderRoot() {
      const { shadowRootOptions, elementStyles } = (
        /** @type {TypeofLitElement} */
        this.constructor
      );
      const shadowRoot = this.attachShadow(shadowRootOptions);
      this.renderOptions.creationScope = shadowRoot;
      S(shadowRoot, elementStyles);
      this.renderOptions.renderBefore ??= shadowRoot.firstChild;
      return shadowRoot;
    }
  }
);
var ScopedElementsMixin2 = dedupeMixin(ScopedElementsMixinImplementation2);
var _lang_dec;
var _contentEditable_dec;
var _a;
var _init;
var _contentEditable;
var _lang;
var LitElementWw = class extends (_a = ScopedElementsMixin2(h3), _contentEditable_dec = [n4({ type: String, attribute: true, reflect: true })], _lang_dec = [n4({ type: String, attribute: true, reflect: true })], _a) {
  constructor() {
    super(...arguments);
    __publicField2(this, "options");
    __publicField2(this, "actions", {});
    __privateAdd2(this, _contentEditable, __runInitializers2(_init, 8, this)), __runInitializers2(_init, 11, this);
    __privateAdd2(this, _lang, __runInitializers2(_init, 12, this)), __runInitializers2(_init, 15, this);
    __publicField2(this, "_inTransaction", false);
  }
  connectedCallback() {
    super.connectedCallback();
    this.getAttributeNames().forEach((k22) => this.setAttribute(k22, this.getAttribute(k22)));
  }
};
_init = __decoratorStart2(_a);
_contentEditable = /* @__PURE__ */ new WeakMap();
_lang = /* @__PURE__ */ new WeakMap();
__decorateElement2(_init, 4, "contentEditable", _contentEditable_dec, LitElementWw, _contentEditable);
__decorateElement2(_init, 4, "lang", _lang_dec, LitElementWw, _lang);
__decoratorMetadata2(_init, LitElementWw);
__publicField2(LitElementWw, "shadowRootOptions", { ...h3.shadowRootOptions });
__publicField2(LitElementWw, "options", {});
__publicField2(LitElementWw, "actions", {});

// node_modules/@lit/reactive-element/css-tag.js
var t2 = globalThis;
var e3 = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s2 = Symbol();
var o4 = /* @__PURE__ */ new WeakMap();
var n5 = class {
  constructor(t7, e8, o8) {
    if (this._$cssResult$ = true, o8 !== s2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t7, this.t = e8;
  }
  get styleSheet() {
    let t7 = this.o;
    const s3 = this.t;
    if (e3 && void 0 === t7) {
      const e8 = void 0 !== s3 && 1 === s3.length;
      e8 && (t7 = o4.get(s3)), void 0 === t7 && ((this.o = t7 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && o4.set(s3, t7));
    }
    return t7;
  }
  toString() {
    return this.cssText;
  }
};
var r4 = (t7) => new n5("string" == typeof t7 ? t7 : t7 + "", void 0, s2);
var i = (t7, ...e8) => {
  const o8 = 1 === t7.length ? t7[0] : e8.reduce((e9, s3, o9) => e9 + ((t8) => {
    if (true === t8._$cssResult$) return t8.cssText;
    if ("number" == typeof t8) return t8;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t8 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s3) + t7[o9 + 1], t7[0]);
  return new n5(o8, t7, s2);
};
var S3 = (s3, o8) => {
  if (e3) s3.adoptedStyleSheets = o8.map((t7) => t7 instanceof CSSStyleSheet ? t7 : t7.styleSheet);
  else for (const e8 of o8) {
    const o9 = document.createElement("style"), n9 = t2.litNonce;
    void 0 !== n9 && o9.setAttribute("nonce", n9), o9.textContent = e8.cssText, s3.appendChild(o9);
  }
};
var c4 = e3 ? (t7) => t7 : (t7) => t7 instanceof CSSStyleSheet ? ((t8) => {
  let e8 = "";
  for (const s3 of t8.cssRules) e8 += s3.cssText;
  return r4(e8);
})(t7) : t7;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i3, defineProperty: e4, getOwnPropertyDescriptor: r5, getOwnPropertyNames: h4, getOwnPropertySymbols: o5, getPrototypeOf: n6 } = Object;
var a2 = globalThis;
var c5 = a2.trustedTypes;
var l2 = c5 ? c5.emptyScript : "";
var p2 = a2.reactiveElementPolyfillSupport;
var d2 = (t7, s3) => t7;
var u2 = { toAttribute(t7, s3) {
  switch (s3) {
    case Boolean:
      t7 = t7 ? l2 : null;
      break;
    case Object:
    case Array:
      t7 = null == t7 ? t7 : JSON.stringify(t7);
  }
  return t7;
}, fromAttribute(t7, s3) {
  let i5 = t7;
  switch (s3) {
    case Boolean:
      i5 = null !== t7;
      break;
    case Number:
      i5 = null === t7 ? null : Number(t7);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t7);
      } catch (t8) {
        i5 = null;
      }
  }
  return i5;
} };
var f4 = (t7, s3) => !i3(t7, s3);
var y2 = { attribute: true, type: String, converter: u2, reflect: false, hasChanged: f4 };
Symbol.metadata ??= Symbol("metadata"), a2.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var b2 = class extends HTMLElement {
  static addInitializer(t7) {
    this._$Ei(), (this.l ??= []).push(t7);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t7, s3 = y2) {
    if (s3.state && (s3.attribute = false), this._$Ei(), this.elementProperties.set(t7, s3), !s3.noAccessor) {
      const i5 = Symbol(), r9 = this.getPropertyDescriptor(t7, i5, s3);
      void 0 !== r9 && e4(this.prototype, t7, r9);
    }
  }
  static getPropertyDescriptor(t7, s3, i5) {
    const { get: e8, set: h7 } = r5(this.prototype, t7) ?? { get() {
      return this[s3];
    }, set(t8) {
      this[s3] = t8;
    } };
    return { get() {
      return e8?.call(this);
    }, set(s4) {
      const r9 = e8?.call(this);
      h7.call(this, s4), this.requestUpdate(t7, r9, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t7) {
    return this.elementProperties.get(t7) ?? y2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d2("elementProperties"))) return;
    const t7 = n6(this);
    t7.finalize(), void 0 !== t7.l && (this.l = [...t7.l]), this.elementProperties = new Map(t7.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d2("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d2("properties"))) {
      const t8 = this.properties, s3 = [...h4(t8), ...o5(t8)];
      for (const i5 of s3) this.createProperty(i5, t8[i5]);
    }
    const t7 = this[Symbol.metadata];
    if (null !== t7) {
      const s3 = litPropertyMetadata.get(t7);
      if (void 0 !== s3) for (const [t8, i5] of s3) this.elementProperties.set(t8, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t8, s3] of this.elementProperties) {
      const i5 = this._$Eu(t8, s3);
      void 0 !== i5 && this._$Eh.set(i5, t8);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s3) {
    const i5 = [];
    if (Array.isArray(s3)) {
      const e8 = new Set(s3.flat(1 / 0).reverse());
      for (const s4 of e8) i5.unshift(c4(s4));
    } else void 0 !== s3 && i5.push(c4(s3));
    return i5;
  }
  static _$Eu(t7, s3) {
    const i5 = s3.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t7 ? t7.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t7) => this.enableUpdating = t7), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t7) => t7(this));
  }
  addController(t7) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t7), void 0 !== this.renderRoot && this.isConnected && t7.hostConnected?.();
  }
  removeController(t7) {
    this._$EO?.delete(t7);
  }
  _$E_() {
    const t7 = /* @__PURE__ */ new Map(), s3 = this.constructor.elementProperties;
    for (const i5 of s3.keys()) this.hasOwnProperty(i5) && (t7.set(i5, this[i5]), delete this[i5]);
    t7.size > 0 && (this._$Ep = t7);
  }
  createRenderRoot() {
    const t7 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S3(t7, this.constructor.elementStyles), t7;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t7) => t7.hostConnected?.());
  }
  enableUpdating(t7) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t7) => t7.hostDisconnected?.());
  }
  attributeChangedCallback(t7, s3, i5) {
    this._$AK(t7, i5);
  }
  _$EC(t7, s3) {
    const i5 = this.constructor.elementProperties.get(t7), e8 = this.constructor._$Eu(t7, i5);
    if (void 0 !== e8 && true === i5.reflect) {
      const r9 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u2).toAttribute(s3, i5.type);
      this._$Em = t7, null == r9 ? this.removeAttribute(e8) : this.setAttribute(e8, r9), this._$Em = null;
    }
  }
  _$AK(t7, s3) {
    const i5 = this.constructor, e8 = i5._$Eh.get(t7);
    if (void 0 !== e8 && this._$Em !== e8) {
      const t8 = i5.getPropertyOptions(e8), r9 = "function" == typeof t8.converter ? { fromAttribute: t8.converter } : void 0 !== t8.converter?.fromAttribute ? t8.converter : u2;
      this._$Em = e8, this[e8] = r9.fromAttribute(s3, t8.type), this._$Em = null;
    }
  }
  requestUpdate(t7, s3, i5) {
    if (void 0 !== t7) {
      if (i5 ??= this.constructor.getPropertyOptions(t7), !(i5.hasChanged ?? f4)(this[t7], s3)) return;
      this.P(t7, s3, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t7, s3, i5) {
    this._$AL.has(t7) || this._$AL.set(t7, s3), true === i5.reflect && this._$Em !== t7 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t7);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t8) {
      Promise.reject(t8);
    }
    const t7 = this.scheduleUpdate();
    return null != t7 && await t7, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t9, s4] of this._$Ep) this[t9] = s4;
        this._$Ep = void 0;
      }
      const t8 = this.constructor.elementProperties;
      if (t8.size > 0) for (const [s4, i5] of t8) true !== i5.wrapped || this._$AL.has(s4) || void 0 === this[s4] || this.P(s4, this[s4], i5);
    }
    let t7 = false;
    const s3 = this._$AL;
    try {
      t7 = this.shouldUpdate(s3), t7 ? (this.willUpdate(s3), this._$EO?.forEach((t8) => t8.hostUpdate?.()), this.update(s3)) : this._$EU();
    } catch (s4) {
      throw t7 = false, this._$EU(), s4;
    }
    t7 && this._$AE(s3);
  }
  willUpdate(t7) {
  }
  _$AE(t7) {
    this._$EO?.forEach((t8) => t8.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t7)), this.updated(t7);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t7) {
    return true;
  }
  update(t7) {
    this._$Ej &&= this._$Ej.forEach((t8) => this._$EC(t8, this[t8])), this._$EU();
  }
  updated(t7) {
  }
  firstUpdated(t7) {
  }
};
b2.elementStyles = [], b2.shadowRootOptions = { mode: "open" }, b2[d2("elementProperties")] = /* @__PURE__ */ new Map(), b2[d2("finalized")] = /* @__PURE__ */ new Map(), p2?.({ ReactiveElement: b2 }), (a2.reactiveElementVersions ??= []).push("2.0.4");

// node_modules/lit-html/lit-html.js
var n7 = globalThis;
var c6 = n7.trustedTypes;
var h5 = c6 ? c6.createPolicy("lit-html", { createHTML: (t7) => t7 }) : void 0;
var f5 = "$lit$";
var v2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var m2 = "?" + v2;
var _2 = `<${m2}>`;
var w2 = document;
var lt2 = () => w2.createComment("");
var st2 = (t7) => null === t7 || "object" != typeof t7 && "function" != typeof t7;
var g2 = Array.isArray;
var $2 = (t7) => g2(t7) || "function" == typeof t7?.[Symbol.iterator];
var x2 = "[ 	\n\f\r]";
var T2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var E2 = /-->/g;
var k2 = />/g;
var O2 = RegExp(`>|${x2}(?:([^\\s"'>=/]+)(${x2}*=${x2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var S4 = /'/g;
var j2 = /"/g;
var M2 = /^(?:script|style|textarea|title)$/i;
var P2 = (t7) => (i5, ...s3) => ({ _$litType$: t7, strings: i5, values: s3 });
var ke2 = P2(1);
var Oe2 = P2(2);
var Se2 = P2(3);
var R2 = Symbol.for("lit-noChange");
var D2 = Symbol.for("lit-nothing");
var V2 = /* @__PURE__ */ new WeakMap();
var I2 = w2.createTreeWalker(w2, 129);
function N2(t7, i5) {
  if (!g2(t7) || !t7.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== h5 ? h5.createHTML(i5) : i5;
}
var U2 = (t7, i5) => {
  const s3 = t7.length - 1, e8 = [];
  let h7, o8 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", n9 = T2;
  for (let i6 = 0; i6 < s3; i6++) {
    const s4 = t7[i6];
    let r9, l3, c8 = -1, a4 = 0;
    for (; a4 < s4.length && (n9.lastIndex = a4, l3 = n9.exec(s4), null !== l3); ) a4 = n9.lastIndex, n9 === T2 ? "!--" === l3[1] ? n9 = E2 : void 0 !== l3[1] ? n9 = k2 : void 0 !== l3[2] ? (M2.test(l3[2]) && (h7 = RegExp("</" + l3[2], "g")), n9 = O2) : void 0 !== l3[3] && (n9 = O2) : n9 === O2 ? ">" === l3[0] ? (n9 = h7 ?? T2, c8 = -1) : void 0 === l3[1] ? c8 = -2 : (c8 = n9.lastIndex - l3[2].length, r9 = l3[1], n9 = void 0 === l3[3] ? O2 : '"' === l3[3] ? j2 : S4) : n9 === j2 || n9 === S4 ? n9 = O2 : n9 === E2 || n9 === k2 ? n9 = T2 : (n9 = O2, h7 = void 0);
    const u3 = n9 === O2 && t7[i6 + 1].startsWith("/>") ? " " : "";
    o8 += n9 === T2 ? s4 + _2 : c8 >= 0 ? (e8.push(r9), s4.slice(0, c8) + f5 + s4.slice(c8) + v2 + u3) : s4 + v2 + (-2 === c8 ? i6 : u3);
  }
  return [N2(t7, o8 + (t7[s3] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e8];
};
var B2 = class _B2 {
  constructor({ strings: t7, _$litType$: i5 }, s3) {
    let e8;
    this.parts = [];
    let h7 = 0, o8 = 0;
    const n9 = t7.length - 1, r9 = this.parts, [l3, a4] = U2(t7, i5);
    if (this.el = _B2.createElement(l3, s3), I2.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t8 = this.el.content.firstChild;
      t8.replaceWith(...t8.childNodes);
    }
    for (; null !== (e8 = I2.nextNode()) && r9.length < n9; ) {
      if (1 === e8.nodeType) {
        if (e8.hasAttributes()) for (const t8 of e8.getAttributeNames()) if (t8.endsWith(f5)) {
          const i6 = a4[o8++], s4 = e8.getAttribute(t8).split(v2), n10 = /([.?@])?(.*)/.exec(i6);
          r9.push({ type: 1, index: h7, name: n10[2], strings: s4, ctor: "." === n10[1] ? Y2 : "?" === n10[1] ? Z2 : "@" === n10[1] ? q2 : G2 }), e8.removeAttribute(t8);
        } else t8.startsWith(v2) && (r9.push({ type: 6, index: h7 }), e8.removeAttribute(t8));
        if (M2.test(e8.tagName)) {
          const t8 = e8.textContent.split(v2), i6 = t8.length - 1;
          if (i6 > 0) {
            e8.textContent = c6 ? c6.emptyScript : "";
            for (let s4 = 0; s4 < i6; s4++) e8.append(t8[s4], lt2()), I2.nextNode(), r9.push({ type: 2, index: ++h7 });
            e8.append(t8[i6], lt2());
          }
        }
      } else if (8 === e8.nodeType) if (e8.data === m2) r9.push({ type: 2, index: h7 });
      else {
        let t8 = -1;
        for (; -1 !== (t8 = e8.data.indexOf(v2, t8 + 1)); ) r9.push({ type: 7, index: h7 }), t8 += v2.length - 1;
      }
      h7++;
    }
  }
  static createElement(t7, i5) {
    const s3 = w2.createElement("template");
    return s3.innerHTML = t7, s3;
  }
};
function z2(t7, i5, s3 = t7, e8) {
  if (i5 === R2) return i5;
  let h7 = void 0 !== e8 ? s3.o?.[e8] : s3.l;
  const o8 = st2(i5) ? void 0 : i5._$litDirective$;
  return h7?.constructor !== o8 && (h7?._$AO?.(false), void 0 === o8 ? h7 = void 0 : (h7 = new o8(t7), h7._$AT(t7, s3, e8)), void 0 !== e8 ? (s3.o ??= [])[e8] = h7 : s3.l = h7), void 0 !== h7 && (i5 = z2(t7, h7._$AS(t7, i5.values), h7, e8)), i5;
}
var F2 = class {
  constructor(t7, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t7, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t7) {
    const { el: { content: i5 }, parts: s3 } = this._$AD, e8 = (t7?.creationScope ?? w2).importNode(i5, true);
    I2.currentNode = e8;
    let h7 = I2.nextNode(), o8 = 0, n9 = 0, r9 = s3[0];
    for (; void 0 !== r9; ) {
      if (o8 === r9.index) {
        let i6;
        2 === r9.type ? i6 = new et2(h7, h7.nextSibling, this, t7) : 1 === r9.type ? i6 = new r9.ctor(h7, r9.name, r9.strings, this, t7) : 6 === r9.type && (i6 = new K2(h7, this, t7)), this._$AV.push(i6), r9 = s3[++n9];
      }
      o8 !== r9?.index && (h7 = I2.nextNode(), o8++);
    }
    return I2.currentNode = w2, e8;
  }
  p(t7) {
    let i5 = 0;
    for (const s3 of this._$AV) void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t7, s3, i5), i5 += s3.strings.length - 2) : s3._$AI(t7[i5])), i5++;
  }
};
var et2 = class _et2 {
  get _$AU() {
    return this._$AM?._$AU ?? this.v;
  }
  constructor(t7, i5, s3, e8) {
    this.type = 2, this._$AH = D2, this._$AN = void 0, this._$AA = t7, this._$AB = i5, this._$AM = s3, this.options = e8, this.v = e8?.isConnected ?? true;
  }
  get parentNode() {
    let t7 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === t7?.nodeType && (t7 = i5.parentNode), t7;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t7, i5 = this) {
    t7 = z2(this, t7, i5), st2(t7) ? t7 === D2 || null == t7 || "" === t7 ? (this._$AH !== D2 && this._$AR(), this._$AH = D2) : t7 !== this._$AH && t7 !== R2 && this._(t7) : void 0 !== t7._$litType$ ? this.$(t7) : void 0 !== t7.nodeType ? this.T(t7) : $2(t7) ? this.k(t7) : this._(t7);
  }
  O(t7) {
    return this._$AA.parentNode.insertBefore(t7, this._$AB);
  }
  T(t7) {
    this._$AH !== t7 && (this._$AR(), this._$AH = this.O(t7));
  }
  _(t7) {
    this._$AH !== D2 && st2(this._$AH) ? this._$AA.nextSibling.data = t7 : this.T(w2.createTextNode(t7)), this._$AH = t7;
  }
  $(t7) {
    const { values: i5, _$litType$: s3 } = t7, e8 = "number" == typeof s3 ? this._$AC(t7) : (void 0 === s3.el && (s3.el = B2.createElement(N2(s3.h, s3.h[0]), this.options)), s3);
    if (this._$AH?._$AD === e8) this._$AH.p(i5);
    else {
      const t8 = new F2(e8, this), s4 = t8.u(this.options);
      t8.p(i5), this.T(s4), this._$AH = t8;
    }
  }
  _$AC(t7) {
    let i5 = V2.get(t7.strings);
    return void 0 === i5 && V2.set(t7.strings, i5 = new B2(t7)), i5;
  }
  k(t7) {
    g2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s3, e8 = 0;
    for (const h7 of t7) e8 === i5.length ? i5.push(s3 = new _et2(this.O(lt2()), this.O(lt2()), this, this.options)) : s3 = i5[e8], s3._$AI(h7), e8++;
    e8 < i5.length && (this._$AR(s3 && s3._$AB.nextSibling, e8), i5.length = e8);
  }
  _$AR(t7 = this._$AA.nextSibling, i5) {
    for (this._$AP?.(false, true, i5); t7 && t7 !== this._$AB; ) {
      const i6 = t7.nextSibling;
      t7.remove(), t7 = i6;
    }
  }
  setConnected(t7) {
    void 0 === this._$AM && (this.v = t7, this._$AP?.(t7));
  }
};
var G2 = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t7, i5, s3, e8, h7) {
    this.type = 1, this._$AH = D2, this._$AN = void 0, this.element = t7, this.name = i5, this._$AM = e8, this.options = h7, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = D2;
  }
  _$AI(t7, i5 = this, s3, e8) {
    const h7 = this.strings;
    let o8 = false;
    if (void 0 === h7) t7 = z2(this, t7, i5, 0), o8 = !st2(t7) || t7 !== this._$AH && t7 !== R2, o8 && (this._$AH = t7);
    else {
      const e9 = t7;
      let n9, r9;
      for (t7 = h7[0], n9 = 0; n9 < h7.length - 1; n9++) r9 = z2(this, e9[s3 + n9], i5, n9), r9 === R2 && (r9 = this._$AH[n9]), o8 ||= !st2(r9) || r9 !== this._$AH[n9], r9 === D2 ? t7 = D2 : t7 !== D2 && (t7 += (r9 ?? "") + h7[n9 + 1]), this._$AH[n9] = r9;
    }
    o8 && !e8 && this.j(t7);
  }
  j(t7) {
    t7 === D2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t7 ?? "");
  }
};
var Y2 = class extends G2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t7) {
    this.element[this.name] = t7 === D2 ? void 0 : t7;
  }
};
var Z2 = class extends G2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t7) {
    this.element.toggleAttribute(this.name, !!t7 && t7 !== D2);
  }
};
var q2 = class extends G2 {
  constructor(t7, i5, s3, e8, h7) {
    super(t7, i5, s3, e8, h7), this.type = 5;
  }
  _$AI(t7, i5 = this) {
    if ((t7 = z2(this, t7, i5, 0) ?? D2) === R2) return;
    const s3 = this._$AH, e8 = t7 === D2 && s3 !== D2 || t7.capture !== s3.capture || t7.once !== s3.once || t7.passive !== s3.passive, h7 = t7 !== D2 && (s3 === D2 || e8);
    e8 && this.element.removeEventListener(this.name, this, s3), h7 && this.element.addEventListener(this.name, this, t7), this._$AH = t7;
  }
  handleEvent(t7) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t7) : this._$AH.handleEvent(t7);
  }
};
var K2 = class {
  constructor(t7, i5, s3) {
    this.element = t7, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s3;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t7) {
    z2(this, t7);
  }
};
var si = { M: f5, P: v2, A: m2, C: 1, L: U2, R: F2, D: $2, V: z2, I: et2, H: G2, N: Z2, U: q2, B: Y2, F: K2 };
var Re2 = n7.litHtmlPolyfillSupport;
Re2?.(B2, et2), (n7.litHtmlVersions ??= []).push("3.2.0");
var Q2 = (t7, i5, s3) => {
  const e8 = s3?.renderBefore ?? i5;
  let h7 = e8._$litPart$;
  if (void 0 === h7) {
    const t8 = s3?.renderBefore ?? null;
    e8._$litPart$ = h7 = new et2(i5.insertBefore(lt2(), t8), t8, void 0, s3 ?? {});
  }
  return h7._$AI(t7), h7;
};

// node_modules/lit-element/lit-element.js
var h6 = class extends b2 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    const t7 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t7.firstChild, t7;
  }
  update(t7) {
    const e8 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t7), this.o = Q2(e8, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this.o?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.o?.setConnected(false);
  }
  render() {
    return R2;
  }
};
h6._$litElement$ = true, h6["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: h6 });
var f6 = globalThis.litElementPolyfillSupport;
f6?.({ LitElement: h6 });
(globalThis.litElementVersions ??= []).push("4.1.0");

// node_modules/@lit/reactive-element/decorators/custom-element.js
var t3 = (t7) => (e8, o8) => {
  void 0 !== o8 ? o8.addInitializer(() => {
    customElements.define(t7, e8);
  }) : customElements.define(t7, e8);
};

// node_modules/@lit/reactive-element/decorators/property.js
var o6 = { attribute: true, type: String, converter: u2, reflect: false, hasChanged: f4 };
var r6 = (t7 = o6, e8, r9) => {
  const { kind: n9, metadata: i5 } = r9;
  let s3 = globalThis.litPropertyMetadata.get(i5);
  if (void 0 === s3 && globalThis.litPropertyMetadata.set(i5, s3 = /* @__PURE__ */ new Map()), s3.set(r9.name, t7), "accessor" === n9) {
    const { name: o8 } = r9;
    return { set(r10) {
      const n10 = e8.get.call(this);
      e8.set.call(this, r10), this.requestUpdate(o8, n10, t7);
    }, init(e9) {
      return void 0 !== e9 && this.P(o8, void 0, t7), e9;
    } };
  }
  if ("setter" === n9) {
    const { name: o8 } = r9;
    return function(r10) {
      const n10 = this[o8];
      e8.call(this, r10), this.requestUpdate(o8, n10, t7);
    };
  }
  throw Error("Unsupported decorator location: " + n9);
};
function n8(t7) {
  return (e8, o8) => "object" == typeof o8 ? r6(t7, e8, o8) : ((t8, e9, o9) => {
    const r9 = e9.hasOwnProperty(o9);
    return e9.constructor.createProperty(o9, r9 ? { ...t8, wrapped: true } : t8), r9 ? Object.getOwnPropertyDescriptor(e9, o9) : void 0;
  })(t7, e8, o8);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r7(r9) {
  return n8({ ...r9, state: true, attribute: false });
}

// node_modules/@lit/reactive-element/decorators/event-options.js
function t4(t7) {
  return (n9, o8) => {
    const c8 = "function" == typeof n9 ? n9 : n9[o8];
    Object.assign(c8, t7);
  };
}

// node_modules/@lit/reactive-element/decorators/base.js
var e5 = (e8, t7, c8) => (c8.configurable = true, c8.enumerable = true, Reflect.decorate && "object" != typeof t7 && Object.defineProperty(e8, t7, c8), c8);

// node_modules/@lit/reactive-element/decorators/query.js
function e6(e8, r9) {
  return (n9, s3, i5) => {
    const o8 = (t7) => t7.renderRoot?.querySelector(e8) ?? null;
    if (r9) {
      const { get: e9, set: r10 } = "object" == typeof s3 ? n9 : i5 ?? (() => {
        const t7 = Symbol();
        return { get() {
          return this[t7];
        }, set(e10) {
          this[t7] = e10;
        } };
      })();
      return e5(n9, s3, { get() {
        let t7 = e9.call(this);
        return void 0 === t7 && (t7 = o8(this), (null !== t7 || this.hasUpdated) && r10.call(this, t7)), t7;
      } });
    }
    return e5(n9, s3, { get() {
      return o8(this);
    } });
  };
}

// algorithms/bfs.ts
function bfs(start2, graph, target) {
  let animation = [];
  let visited = {};
  let adjacent = {};
  for (let n9 of graph.nodes) {
    adjacent[n9.name] = [];
    visited[n9.name] = false;
  }
  for (let l3 of graph.links) {
    adjacent[l3.source.name].push(l3.target);
    adjacent[l3.target.name].push(l3.source);
  }
  let queue = [];
  queue.splice(0, 0, start2);
  visited[start2.name] = true;
  while (queue.length != 0) {
    let current = queue.pop();
    animation.push({
      type: "NODE",
      data: { names: [current.name], colors: ["green"] }
    });
    if (current.name == target) {
      animation.push({
        type: "NODE",
        data: { names: [current.name], colors: ["#32CD32"] }
      });
      return animation;
    }
    if (visited[current.name] == false) {
      visited[current.name] = true;
    }
    for (let node = 0; node < adjacent[current.name].length; node++) {
      if (!visited[adjacent[current.name][node].name] && !queue.map((node2) => node2.name).includes(adjacent[current.name][node].name))
        queue.splice(0, 0, adjacent[current.name][node]);
    }
  }
  return animation;
}

// algorithms/coloring.ts
function coloring(graph) {
  let animation = [
    {
      type: "NODE",
      data: {
        names: graph.nodes.map((n9) => n9.name),
        colors: graph.nodes.map((_3) => "red")
      }
    }
  ];
  let colors = [];
  for (let i5 = 0; i5 < graph.nodes.length; i5++) {
    colors[i5] = 0;
  }
  let adjacent = {};
  for (let n9 of graph.nodes) {
    adjacent[n9.name] = [];
  }
  for (let l3 of graph.links) {
    adjacent[l3.source.name].push(l3.target);
    adjacent[l3.target.name].push(l3.source);
  }
  if (graph.nodes.length == 1) return;
  for (let maxColors = 2; maxColors <= graph.nodes.length; maxColors++) {
    if (coloredRight(colors, graph, adjacent)) break;
    while (!coloredRight(colors, graph, adjacent) && colors.some((el) => el < maxColors - 1)) {
      const data = nextColoring(colors, maxColors, graph);
      colors = data.colors;
      animation = [...animation, ...data.animation];
    }
  }
  return animation;
}
function nextColoring(colors, maxColors, graph) {
  let newColoring = [...colors];
  let animation = [
    {
      type: "NODE",
      data: { names: [], colors: [] }
    }
  ];
  for (let i5 = 0; i5 < colors.length; i5++) {
    if (colors[i5] < maxColors - 1) {
      newColoring[i5] = colors[i5] + 1;
      animation[0].data.names.push(graph.nodes[i5].name);
      animation[0].data.colors.push(mapNumberToColor(colors[i5] + 1));
      for (let j3 = 0; j3 < i5; j3++) {
        newColoring[j3] = 0;
        animation[0].data.names.push(graph.nodes[j3].name);
        animation[0].data.colors.push("red");
      }
      break;
    }
  }
  return { colors: newColoring, animation };
}
function coloredRight(colors, graph, adjacent) {
  for (let i5 = 0; i5 < graph.nodes.length; i5++) {
    for (let neigh of adjacent[graph.nodes[i5].name]) {
      if (colors[i5] === colors[graph.nodes.map((node) => node.name).indexOf(neigh.name)]) {
        return false;
      }
    }
  }
  return true;
}
function mapNumberToColor(number) {
  if (number == 0) return "red";
  if (number == 1) return "yellow";
  if (number == 2) return "green";
  if (number = 3) return "blue";
}

// algorithms/cycle.ts
function cycle(graph) {
  let animation = [];
  let visited = {};
  let finished = {};
  let adjacent = {};
  for (let n9 of graph.nodes) {
    adjacent[n9.name] = [];
    visited[n9.name] = false;
  }
  for (let l3 of graph.links) {
    adjacent[l3.source.name].push(l3.target);
    adjacent[l3.target.name].push(l3.source);
  }
  function dfs2(current, parent, start2, path) {
    if (finished[current.name]) return;
    if (visited[current.name]) {
      if (current.name == start2) {
        animation.push({
          type: "NODE",
          data: { names: path, colors: path.map((x5) => "#32CD32") }
        });
      }
      return;
    }
    animation.push({
      type: "NODE",
      data: { names: [current.name], colors: ["green"] }
    });
    visited[current.name] = true;
    for (let node = 0; node < adjacent[current.name].length; node++) {
      if (adjacent[current.name][node].name !== parent)
        dfs2(adjacent[current.name][node], current.name, start2, [
          ...path,
          current.name
        ]);
    }
    finished[current.name] = true;
  }
  for (let node of graph.nodes) {
    finished = {};
    visited = {};
    dfs2(node, node.name, node.name, []);
    animation.push({ type: "RESET", data: {} });
  }
  return animation;
}

// algorithms/dfs.ts
function dfs(start2, graph, target) {
  let animation = [];
  let visited = {};
  let adjacent = {};
  for (let n9 of graph.nodes) {
    adjacent[n9.name] = [];
    visited[n9.name] = false;
  }
  for (let l3 of graph.links) {
    adjacent[l3.source.name].push(l3.target);
    adjacent[l3.target.name].push(l3.source);
  }
  let stack = [];
  stack.push(start2);
  while (stack.length != 0) {
    let current = stack.pop();
    animation.push({
      type: "NODE",
      data: { names: [current.name], colors: ["green"] }
    });
    if (current.name == target) {
      animation.push({
        type: "NODE",
        data: { names: [current.name], colors: ["#32CD32"] }
      });
      return animation;
    }
    if (visited[current.name] == false) {
      visited[current.name] = true;
    }
    for (let node = 0; node < adjacent[current.name].length; node++) {
      if (!visited[adjacent[current.name][node].name])
        stack.push(adjacent[current.name][node]);
    }
  }
  return animation;
}

// algorithms/dijkstra.ts
var dijkstra = (start2, graph) => {
  let animation = [];
  var dist = {};
  var prev = {};
  var neighbors = {};
  var q3 = [];
  for (var node of graph.nodes) {
    dist[node.name] = Infinity;
    prev[node.name] = [];
    neighbors[node.name] = [];
    q3.push(node);
  }
  for (var link of graph.links) {
    neighbors[link.source.name].push({
      name: link.target.name,
      weight: link.weight
    });
    neighbors[link.target.name].push({
      name: link.source.name,
      weight: link.weight
    });
  }
  dist[start2.name] = 0;
  animation.push({
    type: "SetNodeSubText",
    data: { node: start2.name, text: 0 }
  });
  while (q3.length > 0) {
    var u3 = getNodeWithLowestDist(q3, dist);
    animation.push({
      type: "NODE",
      data: { names: [u3.name], colors: ["green"] }
    });
    q3 = q3.filter((e8) => e8.name !== u3.name);
    for (var n9 of neighbors[u3.name]) {
      var alt = dist[u3.name] + n9.weight;
      animation.push({
        type: "LINK",
        data: {
          links: [{ source: u3.name, target: n9.name }],
          colors: ["green"]
        }
      });
      if (alt < dist[n9.name]) {
        dist[n9.name] = alt;
        animation.push({
          type: "SetNodeSubText",
          data: { node: n9.name, text: alt }
        });
        prev[n9.name] = u3.name;
      }
    }
  }
  return animation;
};
function getNodeWithLowestDist(q3, dist) {
  var currentMin = q3[0];
  for (var node of q3) {
    if (dist[node.name] < dist[currentMin.name]) {
      currentMin = node;
    }
  }
  return currentMin;
}

// algorithms/spanTree.ts
function spanTree(graph) {
  let animation = [];
  let done = false;
  let edgesOfSpan = [];
  let connectetComponents = [];
  for (let node of graph.nodes) {
    connectetComponents.push([node.name]);
  }
  while (!done) {
    let cheapestEdges = connectetComponents.map((x5) => null);
    for (let edge of graph.links) {
      if (connectetComponents.some(
        (comp) => comp.includes(edge.source.name) && !comp.includes(edge.target.name)
      )) {
        if (ispreferredover(
          edge,
          cheapestEdges[connectetComponents.map((node) => node.includes(edge.source.name)).indexOf(true)]
        )) {
          cheapestEdges[connectetComponents.map((node) => node.includes(edge.source.name)).indexOf(true)] = edge;
        }
        if (ispreferredover(
          edge,
          cheapestEdges[connectetComponents.map((node) => node.includes(edge.target.name)).indexOf(true)]
        )) {
          cheapestEdges[connectetComponents.map((node) => node.includes(edge.target.name)).indexOf(true)] = edge;
        }
      }
    }
    if (cheapestEdges.every((edge) => edge == null)) {
      done = true;
    } else {
      for (let edge of cheapestEdges) {
        if (edge !== null && edgesOfSpan.every(
          (e8) => e8.source.name != edge.source.name || e8.target.name != edge.target.name
        )) {
          edgesOfSpan.push(edge);
          animation.push({
            type: "LINK",
            data: {
              links: [{ source: edge.source.name, target: edge.target.name }],
              colors: ["green"]
            }
          });
        }
      }
      let newComponents = [];
      for (let edge of edgesOfSpan) {
        for (let j3 = 0; j3 < newComponents.length; j3++) {
          if (newComponents[j3].includes(edge.source.name) && !newComponents[j3].includes(edge.target.name)) {
            newComponents[j3] = [...newComponents[j3], edge.target.name];
          }
          if (newComponents[j3].includes(edge.target.name) && !newComponents[j3].includes(edge.source.name)) {
            newComponents[j3] = [...newComponents[j3], edge.source.name];
          }
          if (newComponents[j3].includes(edge.target.name) && newComponents[j3].includes(edge.source.name)) {
          }
        }
        if (!newComponents.some((x5) => x5.includes(edge.source.name)))
          newComponents.push([edge.source.name, edge.target.name]);
      }
      for (let i5 = 0; i5 < newComponents.length; i5++) {
        for (let j3 = 0; j3 < newComponents.length; j3++) {
          if (newComponents[j3].some((x5) => newComponents[i5].includes(x5))) {
            newComponents[i5] = [
              .../* @__PURE__ */ new Set([...newComponents[j3], ...newComponents[i5]])
            ];
          }
        }
      }
      connectetComponents = [...newComponents];
    }
  }
  return animation;
}
function ispreferredover(edge1, edge2) {
  return edge2 == null || edge1.weight < edge2.weight || edge1.weight == edge2.weight;
}

// utils/events.ts
function setAnimationStatus(status, emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animation-status-update", {
      bubbles: true,
      composed: true,
      detail: status
    })
  );
}
function dispatchAnimationEvent(emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animate-graph", {
      bubbles: true,
      composed: true
    })
  );
}
function setAlgoEvent(emitter, algo) {
  emitter.dispatchEvent(
    new CustomEvent("algo-update", {
      bubbles: true,
      composed: true,
      detail: algo
    })
  );
}
function dispatchGraphReset(emitter) {
  emitter.dispatchEvent(
    new CustomEvent("reset-graph", {
      bubbles: true,
      composed: true
    })
  );
}
function setAnimationPosition(position, emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animation-position-update", {
      bubbles: true,
      composed: true,
      detail: position
    })
  );
}
function setAnimation(animation, emitter) {
  emitter.dispatchEvent(
    new CustomEvent("animation-update", {
      bubbles: true,
      composed: true,
      detail: animation
    })
  );
}

// utils/sleep.ts
async function delay(ms) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7DUCI5S4.js
var spinner_styles_default = i`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;

// node_modules/@shoelace-style/localize/dist/index.js
var connectedElements = /* @__PURE__ */ new Set();
var translations = /* @__PURE__ */ new Map();
var fallback;
var documentDirection = "ltr";
var documentLanguage = "en";
var isClient = typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined";
if (isClient) {
  const documentElementObserver = new MutationObserver(update);
  documentDirection = document.documentElement.dir || "ltr";
  documentLanguage = document.documentElement.lang || navigator.language;
  documentElementObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir", "lang"]
  });
}
function registerTranslation(...translation2) {
  translation2.map((t7) => {
    const code = t7.$code.toLowerCase();
    if (translations.has(code)) {
      translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t7));
    } else {
      translations.set(code, t7);
    }
    if (!fallback) {
      fallback = t7;
    }
  });
  update();
}
function update() {
  if (isClient) {
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
  }
  [...connectedElements.keys()].map((el) => {
    if (typeof el.requestUpdate === "function") {
      el.requestUpdate();
    }
  });
}
var LocalizeController = class {
  constructor(host) {
    this.host = host;
    this.host.addController(this);
  }
  hostConnected() {
    connectedElements.add(this.host);
  }
  hostDisconnected() {
    connectedElements.delete(this.host);
  }
  dir() {
    return `${this.host.dir || documentDirection}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || documentLanguage}`.toLowerCase();
  }
  getTranslationData(lang) {
    var _a7, _b;
    const locale = new Intl.Locale(lang.replace(/_/g, "-"));
    const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
    const region = (_b = (_a7 = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a7 === void 0 ? void 0 : _a7.toLowerCase()) !== null && _b !== void 0 ? _b : "";
    const primary = translations.get(`${language}-${region}`);
    const secondary = translations.get(language);
    return { locale, language, region, primary, secondary };
  }
  exists(key, options) {
    var _a7;
    const { primary, secondary } = this.getTranslationData((_a7 = options.lang) !== null && _a7 !== void 0 ? _a7 : this.lang());
    options = Object.assign({ includeFallback: false }, options);
    if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
      return true;
    }
    return false;
  }
  term(key, ...args) {
    const { primary, secondary } = this.getTranslationData(this.lang());
    let term;
    if (primary && primary[key]) {
      term = primary[key];
    } else if (secondary && secondary[key]) {
      term = secondary[key];
    } else if (fallback && fallback[key]) {
      term = fallback[key];
    } else {
      console.error(`No translation found for: ${String(key)}`);
      return String(key);
    }
    if (typeof term === "function") {
      return term(...args);
    }
    return term;
  }
  date(dateToFormat, options) {
    dateToFormat = new Date(dateToFormat);
    return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
  }
  number(numberToFormat, options) {
    numberToFormat = Number(numberToFormat);
    return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
  }
  relativeTime(value, unit, options) {
    return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAS2SHYD.js
var translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "No options selected";
    if (num === 1)
      return "1 option selected";
    return `${num} options selected`;
  },
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "Toggle color format"
};
registerTranslation(translation);
var en_default = translation;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WLV3FVBR.js
var LocalizeController2 = class extends LocalizeController {
};
registerTranslation(en_default);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var component_styles_default = i`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var __defProp3 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc3 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a4, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp.call(b3, prop))
      __defNormalProp3(a4, prop, b3[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b3)) {
      if (__propIsEnum.call(b3, prop))
        __defNormalProp3(a4, prop, b3[prop]);
    }
  return a4;
};
var __spreadProps = (a4, b3) => __defProps(a4, __getOwnPropDescs(b3));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc3(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp3(target, key, result);
  return result;
};
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NLWS5DN7.js
var _hasRecordedInitialProperties;
var ShoelaceElement = class extends h6 {
  constructor() {
    super();
    __privateAdd3(this, _hasRecordedInitialProperties, false);
    this.initialReflectedProperties = /* @__PURE__ */ new Map();
    Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
      this.constructor.define(name, component);
    });
  }
  emit(name, options) {
    const event = new CustomEvent(name, __spreadValues({
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {}
    }, options));
    this.dispatchEvent(event);
    return event;
  }
  /* eslint-enable */
  static define(name, elementConstructor = this, options = {}) {
    const currentlyRegisteredConstructor = customElements.get(name);
    if (!currentlyRegisteredConstructor) {
      try {
        customElements.define(name, elementConstructor, options);
      } catch (_err) {
        customElements.define(name, class extends elementConstructor {
        }, options);
      }
      return;
    }
    let newVersion = " (unknown version)";
    let existingVersion = newVersion;
    if ("version" in elementConstructor && elementConstructor.version) {
      newVersion = " v" + elementConstructor.version;
    }
    if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
      existingVersion = " v" + currentlyRegisteredConstructor.version;
    }
    if (newVersion && existingVersion && newVersion === existingVersion) {
      return;
    }
    console.warn(
      `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
    );
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (!__privateGet3(this, _hasRecordedInitialProperties)) {
      this.constructor.elementProperties.forEach(
        (obj, prop) => {
          if (obj.reflect && this[prop] != null) {
            this.initialReflectedProperties.set(prop, this[prop]);
          }
        }
      );
      __privateSet3(this, _hasRecordedInitialProperties, true);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    this.initialReflectedProperties.forEach((value, prop) => {
      if (changedProperties.has(prop) && this[prop] == null) {
        this[prop] = value;
      }
    });
  }
};
_hasRecordedInitialProperties = /* @__PURE__ */ new WeakMap();
ShoelaceElement.version = "2.17.1";
ShoelaceElement.dependencies = {};
__decorateClass([
  n8()
], ShoelaceElement.prototype, "dir", 2);
__decorateClass([
  n8()
], ShoelaceElement.prototype, "lang", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R2T2D3TO.js
var SlSpinner = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
  }
  render() {
    return ke2`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = [component_styles_default, spinner_styles_default];

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2RCF7SLU.js
var formCollections = /* @__PURE__ */ new WeakMap();
var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
var userInteractedControls = /* @__PURE__ */ new WeakSet();
var interactions = /* @__PURE__ */ new WeakMap();
var FormControlController = class {
  constructor(host, options) {
    this.handleFormData = (event) => {
      const disabled = this.options.disabled(this.host);
      const name = this.options.name(this.host);
      const value = this.options.value(this.host);
      const isButton = this.host.tagName.toLowerCase() === "sl-button";
      if (this.host.isConnected && !disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
        if (Array.isArray(value)) {
          value.forEach((val) => {
            event.formData.append(name, val.toString());
          });
        } else {
          event.formData.append(name, value.toString());
        }
      }
    };
    this.handleFormSubmit = (event) => {
      var _a7;
      const disabled = this.options.disabled(this.host);
      const reportValidity = this.options.reportValidity;
      if (this.form && !this.form.noValidate) {
        (_a7 = formCollections.get(this.form)) == null ? void 0 : _a7.forEach((control) => {
          this.setUserInteracted(control, true);
        });
      }
      if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host));
      this.setUserInteracted(this.host, false);
      interactions.set(this.host, []);
    };
    this.handleInteraction = (event) => {
      const emittedEvents = interactions.get(this.host);
      if (!emittedEvents.includes(event.type)) {
        emittedEvents.push(event.type);
      }
      if (emittedEvents.length === this.options.assumeInteractionOn.length) {
        this.setUserInteracted(this.host, true);
      }
    };
    this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const elements = this.form.querySelectorAll("*");
        for (const element of elements) {
          if (typeof element.checkValidity === "function") {
            if (!element.checkValidity()) {
              return false;
            }
          }
        }
      }
      return true;
    };
    this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const elements = this.form.querySelectorAll("*");
        for (const element of elements) {
          if (typeof element.reportValidity === "function") {
            if (!element.reportValidity()) {
              return false;
            }
          }
        }
      }
      return true;
    };
    (this.host = host).addController(this);
    this.options = __spreadValues({
      form: (input) => {
        const formId = input.form;
        if (formId) {
          const root2 = input.getRootNode();
          const form = root2.querySelector(`#${formId}`);
          if (form) {
            return form;
          }
        }
        return input.closest("form");
      },
      name: (input) => input.name,
      value: (input) => input.value,
      defaultValue: (input) => input.defaultValue,
      disabled: (input) => {
        var _a7;
        return (_a7 = input.disabled) != null ? _a7 : false;
      },
      reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
      checkValidity: (input) => typeof input.checkValidity === "function" ? input.checkValidity() : true,
      setValue: (input, value) => input.value = value,
      assumeInteractionOn: ["sl-input"]
    }, options);
  }
  hostConnected() {
    const form = this.options.form(this.host);
    if (form) {
      this.attachForm(form);
    }
    interactions.set(this.host, []);
    this.options.assumeInteractionOn.forEach((event) => {
      this.host.addEventListener(event, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm();
    interactions.delete(this.host);
    this.options.assumeInteractionOn.forEach((event) => {
      this.host.removeEventListener(event, this.handleInteraction);
    });
  }
  hostUpdated() {
    const form = this.options.form(this.host);
    if (!form) {
      this.detachForm();
    }
    if (form && this.form !== form) {
      this.detachForm();
      this.attachForm(form);
    }
    if (this.host.hasUpdated) {
      this.setValidity(this.host.validity.valid);
    }
  }
  attachForm(form) {
    if (form) {
      this.form = form;
      if (formCollections.has(this.form)) {
        formCollections.get(this.form).add(this.host);
      } else {
        formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
      }
      this.form.addEventListener("formdata", this.handleFormData);
      this.form.addEventListener("submit", this.handleFormSubmit);
      this.form.addEventListener("reset", this.handleFormReset);
      if (!reportValidityOverloads.has(this.form)) {
        reportValidityOverloads.set(this.form, this.form.reportValidity);
        this.form.reportValidity = () => this.reportFormValidity();
      }
      if (!checkValidityOverloads.has(this.form)) {
        checkValidityOverloads.set(this.form, this.form.checkValidity);
        this.form.checkValidity = () => this.checkFormValidity();
      }
    } else {
      this.form = void 0;
    }
  }
  detachForm() {
    if (!this.form)
      return;
    const formCollection = formCollections.get(this.form);
    if (!formCollection) {
      return;
    }
    formCollection.delete(this.host);
    if (formCollection.size <= 0) {
      this.form.removeEventListener("formdata", this.handleFormData);
      this.form.removeEventListener("submit", this.handleFormSubmit);
      this.form.removeEventListener("reset", this.handleFormReset);
      if (reportValidityOverloads.has(this.form)) {
        this.form.reportValidity = reportValidityOverloads.get(this.form);
        reportValidityOverloads.delete(this.form);
      }
      if (checkValidityOverloads.has(this.form)) {
        this.form.checkValidity = checkValidityOverloads.get(this.form);
        checkValidityOverloads.delete(this.form);
      }
      this.form = void 0;
    }
  }
  setUserInteracted(el, hasInteracted) {
    if (hasInteracted) {
      userInteractedControls.add(el);
    } else {
      userInteractedControls.delete(el);
    }
    el.requestUpdate();
  }
  doAction(type2, submitter) {
    if (this.form) {
      const button = document.createElement("button");
      button.type = type2;
      button.style.position = "absolute";
      button.style.width = "0";
      button.style.height = "0";
      button.style.clipPath = "inset(50%)";
      button.style.overflow = "hidden";
      button.style.whiteSpace = "nowrap";
      if (submitter) {
        button.name = submitter.name;
        button.value = submitter.value;
        ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
          if (submitter.hasAttribute(attr)) {
            button.setAttribute(attr, submitter.getAttribute(attr));
          }
        });
      }
      this.form.append(button);
      button.click();
      button.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var _a7;
    return (_a7 = this.form) != null ? _a7 : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(submitter) {
    this.doAction("reset", submitter);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(submitter) {
    this.doAction("submit", submitter);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(isValid) {
    const host = this.host;
    const hasInteracted = Boolean(userInteractedControls.has(host));
    const required = Boolean(host.required);
    host.toggleAttribute("data-required", required);
    host.toggleAttribute("data-optional", !required);
    host.toggleAttribute("data-invalid", !isValid);
    host.toggleAttribute("data-valid", isValid);
    host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
    host.toggleAttribute("data-user-valid", isValid && hasInteracted);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const host = this.host;
    this.setValidity(host.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(originalInvalidEvent) {
    const slInvalidEvent = new CustomEvent("sl-invalid", {
      bubbles: false,
      composed: false,
      cancelable: true,
      detail: {}
    });
    if (!originalInvalidEvent) {
      slInvalidEvent.preventDefault();
    }
    if (!this.host.dispatchEvent(slInvalidEvent)) {
      originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
    }
  }
};
var validValidityState = Object.freeze({
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false
});
var valueMissingValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
  valid: false,
  valueMissing: true
}));
var customErrorValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
  valid: false,
  customError: true
}));

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAQXLKQ7.js
var button_styles_default = i`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js
var HasSlotController = class {
  constructor(host, ...slotNames) {
    this.slotNames = [];
    this.handleSlotChange = (event) => {
      const slot = event.target;
      if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
        this.host.requestUpdate();
      }
    };
    (this.host = host).addController(this);
    this.slotNames = slotNames;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        const tagName = el.tagName.toLowerCase();
        if (tagName === "sl-visually-hidden") {
          return false;
        }
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  test(slotName) {
    return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
function getTextContent(slot) {
  if (!slot) {
    return "";
  }
  const nodes = slot.assignedNodes({ flatten: true });
  let text = "";
  [...nodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });
  return text;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3Y6SB6QS.js
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath(subpath = "") {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName("script")];
    const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
    if (configScript) {
      setBasePath(configScript.getAttribute("data-shoelace"));
    } else {
      const fallbackScript = scripts.find((s3) => {
        return /shoelace(\.min)?\.js($|\?)/.test(s3.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s3.src);
      });
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }
  return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
var library = {
  name: "default",
  resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
};
var library_default_default = library;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js
var icons = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
};
var systemLibrary = {
  name: "system",
  resolver: (name) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return "";
  }
};
var library_system_default = systemLibrary;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js
var registry = [library_default_default, library_system_default];
var watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js
var icon_styles_default = i`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CCJUT23E.js
function watch(propertyName, options) {
  const resolvedOptions = __spreadValues({
    waitUntilFirstUpdate: false
  }, options);
  return (proto, decoratedFnName) => {
    const { update: update2 } = proto;
    const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
    proto.update = function(changedProps) {
      watchedProperties.forEach((property) => {
        const key = property;
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key);
          const newValue = this[key];
          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              this[decoratedFnName](oldValue, newValue);
            }
          }
        }
      });
      update2.call(this, changedProps);
    };
  };
}

// node_modules/lit-html/directive-helpers.js
var { I: et3 } = si;
var nt = (o8, t7) => void 0 === t7 ? void 0 !== o8?._$litType$ : o8?._$litType$ === t7;
var rt = (o8) => void 0 === o8.strings;
var ht = {};
var dt = (o8, t7 = ht) => o8._$AH = t7;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.O7VCMB7W.js
var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var SlIcon = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.initialRender = false;
    this.svg = null;
    this.label = "";
    this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(url, library2) {
    var _a7;
    let fileData;
    if (library2 == null ? void 0 : library2.spriteSheet) {
      this.svg = ke2`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
      return this.svg;
    }
    try {
      fileData = await fetch(url, { mode: "cors" });
      if (!fileData.ok)
        return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch (e8) {
      return RETRYABLE_ERROR;
    }
    try {
      const div = document.createElement("div");
      div.innerHTML = await fileData.text();
      const svg = div.firstElementChild;
      if (((_a7 = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a7.toLowerCase()) !== "svg")
        return CACHEABLE_ERROR;
      if (!parser)
        parser = new DOMParser();
      const doc = parser.parseFromString(svg.outerHTML, "text/html");
      const svgEl = doc.body.querySelector("svg");
      if (!svgEl)
        return CACHEABLE_ERROR;
      svgEl.part.add("svg");
      return document.adoptNode(svgEl);
    } catch (e8) {
      return CACHEABLE_ERROR;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.initialRender = true;
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getIconSource() {
    const library2 = getIconLibrary(this.library);
    if (this.name && library2) {
      return {
        url: library2.resolver(this.name),
        fromLibrary: true
      };
    }
    return {
      url: this.src,
      fromLibrary: false
    };
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a7;
    const { url, fromLibrary } = this.getIconSource();
    const library2 = fromLibrary ? getIconLibrary(this.library) : void 0;
    if (!url) {
      this.svg = null;
      return;
    }
    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library2);
      iconCache.set(url, iconResolver);
    }
    if (!this.initialRender) {
      return;
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== this.getIconSource().url) {
      return;
    }
    if (nt(svg)) {
      this.svg = svg;
      if (library2) {
        await this.updateComplete;
        const shadowSVG = this.shadowRoot.querySelector("[part='svg']");
        if (typeof library2.mutator === "function" && shadowSVG) {
          library2.mutator(shadowSVG);
        }
      }
      return;
    }
    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.emit("sl-error");
        break;
      default:
        this.svg = svg.cloneNode(true);
        (_a7 = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a7.call(library2, this.svg);
        this.emit("sl-load");
    }
  }
  render() {
    return this.svg;
  }
};
SlIcon.styles = [component_styles_default, icon_styles_default];
__decorateClass([
  r7()
], SlIcon.prototype, "svg", 2);
__decorateClass([
  n8({ reflect: true })
], SlIcon.prototype, "name", 2);
__decorateClass([
  n8()
], SlIcon.prototype, "src", 2);
__decorateClass([
  n8()
], SlIcon.prototype, "label", 2);
__decorateClass([
  n8({ reflect: true })
], SlIcon.prototype, "library", 2);
__decorateClass([
  watch("label")
], SlIcon.prototype, "handleLabelChange", 1);
__decorateClass([
  watch(["name", "src", "library"])
], SlIcon.prototype, "setIcon", 1);

// node_modules/lit-html/directive.js
var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e7 = (t7) => (...e8) => ({ _$litDirective$: t7, values: e8 });
var i4 = class {
  constructor(t7) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t7, e8, i5) {
    this.t = t7, this._$AM = e8, this.i = i5;
  }
  _$AS(t7, e8) {
    return this.update(t7, e8);
  }
  update(t7, e8) {
    return this.render(...e8);
  }
};

// node_modules/lit-html/directives/class-map.js
var Rt = e7(class extends i4 {
  constructor(s3) {
    if (super(s3), s3.type !== t5.ATTRIBUTE || "class" !== s3.name || s3.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t7) {
    return " " + Object.keys(t7).filter((s3) => t7[s3]).join(" ") + " ";
  }
  update(t7, [s3]) {
    if (void 0 === this.st) {
      this.st = /* @__PURE__ */ new Set(), void 0 !== t7.strings && (this.nt = new Set(t7.strings.join(" ").split(/\s/).filter((t8) => "" !== t8)));
      for (const t8 in s3) s3[t8] && !this.nt?.has(t8) && this.st.add(t8);
      return this.render(s3);
    }
    const i5 = t7.element.classList;
    for (const t8 of this.st) t8 in s3 || (i5.remove(t8), this.st.delete(t8));
    for (const t8 in s3) {
      const r9 = !!s3[t8];
      r9 === this.st.has(t8) || this.nt?.has(t8) || (r9 ? (i5.add(t8), this.st.add(t8)) : (i5.remove(t8), this.st.delete(t8)));
    }
    return R2;
  }
});

// node_modules/lit-html/static.js
var $e = Symbol.for("");
var xe = (t7) => {
  if (t7?.r === $e) return t7?._$litStatic$;
};
var er = (t7, ...r9) => ({ _$litStatic$: r9.reduce((r10, e8, a4) => r10 + ((t8) => {
  if (void 0 !== t8._$litStatic$) return t8._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t8}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(e8) + t7[a4 + 1], t7[0]), r: $e });
var Te = /* @__PURE__ */ new Map();
var Ee = (t7) => (r9, ...e8) => {
  const a4 = e8.length;
  let o8, s3;
  const i5 = [], l3 = [];
  let n9, u3 = 0, c8 = false;
  for (; u3 < a4; ) {
    for (n9 = r9[u3]; u3 < a4 && void 0 !== (s3 = e8[u3], o8 = xe(s3)); ) n9 += o8 + r9[++u3], c8 = true;
    u3 !== a4 && l3.push(s3), i5.push(n9), u3++;
  }
  if (u3 === a4 && i5.push(r9[a4]), c8) {
    const t8 = i5.join("$$lit$$");
    void 0 === (r9 = Te.get(t8)) && (i5.raw = i5, Te.set(t8, r9 = i5)), e8 = l3;
  }
  return t7(r9, ...e8);
};
var ke3 = Ee(ke2);
var Oe3 = Ee(Oe2);
var Se3 = Ee(Se2);

// node_modules/lit-html/directives/if-defined.js
var to = (t7) => t7 ?? D2;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.OEHLR4TU.js
var SlButton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["click"]
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.localize = new LocalizeController2(this);
    this.hasFocus = false;
    this.invalid = false;
    this.title = "";
    this.variant = "default";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.pill = false;
    this.circle = false;
    this.type = "button";
    this.name = "";
    this.value = "";
    this.href = "";
    this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    if (this.isButton()) {
      return this.button.validity;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    if (this.isButton()) {
      return this.button.validationMessage;
    }
    return "";
  }
  firstUpdated() {
    if (this.isButton()) {
      this.formControlController.updateValidity();
    }
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleClick() {
    if (this.type === "submit") {
      this.formControlController.submit(this);
    }
    if (this.type === "reset") {
      this.formControlController.reset(this);
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  isButton() {
    return this.href ? false : true;
  }
  isLink() {
    return this.href ? true : false;
  }
  handleDisabledChange() {
    if (this.isButton()) {
      this.formControlController.setValidity(this.disabled);
    }
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    if (this.isButton()) {
      return this.button.checkValidity();
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (this.isButton()) {
      return this.button.reportValidity();
    }
    return true;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    if (this.isButton()) {
      this.button.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
  }
  render() {
    const isLink = this.isLink();
    const tag = isLink ? er`a` : er`button`;
    return ke3`
      <${tag}
        part="base"
        class=${Rt({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${to(isLink ? void 0 : this.disabled)}
        type=${to(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${to(isLink ? void 0 : this.name)}
        value=${to(isLink ? void 0 : this.value)}
        href=${to(isLink && !this.disabled ? this.href : void 0)}
        target=${to(isLink ? this.target : void 0)}
        download=${to(isLink ? this.download : void 0)}
        rel=${to(isLink ? this.rel : void 0)}
        role=${to(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? ke3` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> ` : ""}
        ${this.loading ? ke3`<sl-spinner part="spinner"></sl-spinner>` : ""}
      </${tag}>
    `;
  }
};
SlButton.styles = [component_styles_default, button_styles_default];
SlButton.dependencies = {
  "sl-icon": SlIcon,
  "sl-spinner": SlSpinner
};
__decorateClass([
  e6(".button")
], SlButton.prototype, "button", 2);
__decorateClass([
  r7()
], SlButton.prototype, "hasFocus", 2);
__decorateClass([
  r7()
], SlButton.prototype, "invalid", 2);
__decorateClass([
  n8()
], SlButton.prototype, "title", 2);
__decorateClass([
  n8({ reflect: true })
], SlButton.prototype, "variant", 2);
__decorateClass([
  n8({ reflect: true })
], SlButton.prototype, "size", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlButton.prototype, "caret", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlButton.prototype, "disabled", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlButton.prototype, "loading", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlButton.prototype, "outline", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlButton.prototype, "pill", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlButton.prototype, "circle", 2);
__decorateClass([
  n8()
], SlButton.prototype, "type", 2);
__decorateClass([
  n8()
], SlButton.prototype, "name", 2);
__decorateClass([
  n8()
], SlButton.prototype, "value", 2);
__decorateClass([
  n8()
], SlButton.prototype, "href", 2);
__decorateClass([
  n8()
], SlButton.prototype, "target", 2);
__decorateClass([
  n8()
], SlButton.prototype, "rel", 2);
__decorateClass([
  n8()
], SlButton.prototype, "download", 2);
__decorateClass([
  n8()
], SlButton.prototype, "form", 2);
__decorateClass([
  n8({ attribute: "formaction" })
], SlButton.prototype, "formAction", 2);
__decorateClass([
  n8({ attribute: "formenctype" })
], SlButton.prototype, "formEnctype", 2);
__decorateClass([
  n8({ attribute: "formmethod" })
], SlButton.prototype, "formMethod", 2);
__decorateClass([
  n8({ attribute: "formnovalidate", type: Boolean })
], SlButton.prototype, "formNoValidate", 2);
__decorateClass([
  n8({ attribute: "formtarget" })
], SlButton.prototype, "formTarget", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlButton.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GGT72J62.js
var input_styles_default = i`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js
var defaultValue = (propertyName = "value") => (proto, key) => {
  const ctor = proto.constructor;
  const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
  ctor.prototype.attributeChangedCallback = function(name, old, value) {
    var _a7;
    const options = ctor.getPropertyOptions(propertyName);
    const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
    if (name === attributeName) {
      const converter = options.converter || u2;
      const fromAttribute = typeof converter === "function" ? converter : (_a7 = converter == null ? void 0 : converter.fromAttribute) != null ? _a7 : u2.fromAttribute;
      const newValue = fromAttribute(value, options.type);
      if (this[propertyName] !== newValue) {
        this[key] = newValue;
      }
    }
    attributeChangedCallback.call(this, name, old, value);
  };
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js
var form_control_styles_default = i`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;

// node_modules/lit-html/directives/live.js
var Ft = e7(class extends i4 {
  constructor(r9) {
    if (super(r9), r9.type !== t5.PROPERTY && r9.type !== t5.ATTRIBUTE && r9.type !== t5.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
    if (!rt(r9)) throw Error("`live` bindings can only contain a single expression");
  }
  render(r9) {
    return r9;
  }
  update(r9, [e8]) {
    if (e8 === R2 || e8 === D2) return e8;
    const i5 = r9.element, n9 = r9.name;
    if (r9.type === t5.PROPERTY) {
      if (e8 === i5[n9]) return R2;
    } else if (r9.type === t5.BOOLEAN_ATTRIBUTE) {
      if (!!e8 === i5.hasAttribute(n9)) return R2;
    } else if (r9.type === t5.ATTRIBUTE && i5.getAttribute(n9) === e8 + "") return R2;
    return dt(r9), e8;
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4RFB4FGM.js
var SlInput = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController2(this);
    this.hasFocus = false;
    this.title = "";
    this.__numberInput = Object.assign(document.createElement("input"), { type: "number" });
    this.__dateInput = Object.assign(document.createElement("input"), { type: "date" });
    this.type = "text";
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.helpText = "";
    this.clearable = false;
    this.disabled = false;
    this.placeholder = "";
    this.readonly = false;
    this.passwordToggle = false;
    this.passwordVisible = false;
    this.noSpinButtons = false;
    this.form = "";
    this.required = false;
    this.spellcheck = true;
  }
  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //
  /**
   * Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.
   */
  get valueAsDate() {
    var _a7;
    this.__dateInput.type = this.type;
    this.__dateInput.value = this.value;
    return ((_a7 = this.input) == null ? void 0 : _a7.valueAsDate) || this.__dateInput.valueAsDate;
  }
  set valueAsDate(newValue) {
    this.__dateInput.type = this.type;
    this.__dateInput.valueAsDate = newValue;
    this.value = this.__dateInput.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    var _a7;
    this.__numberInput.value = this.value;
    return ((_a7 = this.input) == null ? void 0 : _a7.valueAsNumber) || this.__numberInput.valueAsNumber;
  }
  set valueAsNumber(newValue) {
    this.__numberInput.valueAsNumber = newValue;
    this.value = this.__numberInput.value;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.emit("sl-change");
  }
  handleClearClick(event) {
    event.preventDefault();
    if (this.value !== "") {
      this.value = "";
      this.emit("sl-clear");
      this.emit("sl-input");
      this.emit("sl-change");
    }
    this.input.focus();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.formControlController.updateValidity();
    this.emit("sl-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleKeyDown(event) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      setTimeout(() => {
        if (!event.defaultPrevented && !event.isComposing) {
          this.formControlController.submit();
        }
      });
    }
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step);
    this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start2, end, selectMode = "preserve") {
    const selectionStart = start2 != null ? start2 : this.input.selectionStart;
    const selectionEnd = end != null ? end : this.input.selectionEnd;
    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ("showPicker" in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && !this.readonly;
    const isClearIconVisible = hasClearIcon && (typeof this.value === "number" || this.value.length > 0);
    return ke2`
      <div
        part="form-control"
        class=${Rt({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Rt({
      input: true,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${to(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${to(this.placeholder)}
              minlength=${to(this.minlength)}
              maxlength=${to(this.maxlength)}
              min=${to(this.min)}
              max=${to(this.max)}
              step=${to(this.step)}
              .value=${Ft(this.value)}
              autocapitalize=${to(this.autocapitalize)}
              autocomplete=${to(this.autocomplete)}
              autocorrect=${to(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${to(this.pattern)}
              enterkeyhint=${to(this.enterkeyhint)}
              inputmode=${to(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${isClearIconVisible ? ke2`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                ` : ""}
            ${this.passwordToggle && !this.disabled ? ke2`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible ? ke2`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        ` : ke2`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                ` : ""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlInput.styles = [component_styles_default, form_control_styles_default, input_styles_default];
SlInput.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e6(".input__control")
], SlInput.prototype, "input", 2);
__decorateClass([
  r7()
], SlInput.prototype, "hasFocus", 2);
__decorateClass([
  n8()
], SlInput.prototype, "title", 2);
__decorateClass([
  n8({ reflect: true })
], SlInput.prototype, "type", 2);
__decorateClass([
  n8()
], SlInput.prototype, "name", 2);
__decorateClass([
  n8()
], SlInput.prototype, "value", 2);
__decorateClass([
  defaultValue()
], SlInput.prototype, "defaultValue", 2);
__decorateClass([
  n8({ reflect: true })
], SlInput.prototype, "size", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlInput.prototype, "filled", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlInput.prototype, "pill", 2);
__decorateClass([
  n8()
], SlInput.prototype, "label", 2);
__decorateClass([
  n8({ attribute: "help-text" })
], SlInput.prototype, "helpText", 2);
__decorateClass([
  n8({ type: Boolean })
], SlInput.prototype, "clearable", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlInput.prototype, "disabled", 2);
__decorateClass([
  n8()
], SlInput.prototype, "placeholder", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlInput.prototype, "readonly", 2);
__decorateClass([
  n8({ attribute: "password-toggle", type: Boolean })
], SlInput.prototype, "passwordToggle", 2);
__decorateClass([
  n8({ attribute: "password-visible", type: Boolean })
], SlInput.prototype, "passwordVisible", 2);
__decorateClass([
  n8({ attribute: "no-spin-buttons", type: Boolean })
], SlInput.prototype, "noSpinButtons", 2);
__decorateClass([
  n8({ reflect: true })
], SlInput.prototype, "form", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlInput.prototype, "required", 2);
__decorateClass([
  n8()
], SlInput.prototype, "pattern", 2);
__decorateClass([
  n8({ type: Number })
], SlInput.prototype, "minlength", 2);
__decorateClass([
  n8({ type: Number })
], SlInput.prototype, "maxlength", 2);
__decorateClass([
  n8()
], SlInput.prototype, "min", 2);
__decorateClass([
  n8()
], SlInput.prototype, "max", 2);
__decorateClass([
  n8()
], SlInput.prototype, "step", 2);
__decorateClass([
  n8()
], SlInput.prototype, "autocapitalize", 2);
__decorateClass([
  n8()
], SlInput.prototype, "autocorrect", 2);
__decorateClass([
  n8()
], SlInput.prototype, "autocomplete", 2);
__decorateClass([
  n8({ type: Boolean })
], SlInput.prototype, "autofocus", 2);
__decorateClass([
  n8()
], SlInput.prototype, "enterkeyhint", 2);
__decorateClass([
  n8({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], SlInput.prototype, "spellcheck", 2);
__decorateClass([
  n8()
], SlInput.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("step", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleStepChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], SlInput.prototype, "handleValueChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V2OL7VMD.js
var tag_styles_default = i`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js
var icon_button_styles_default = i`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AYP3HPB7.js
var SlIconButton = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.label = "";
    this.disabled = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? er`a` : er`button`;
    return ke3`
      <${tag}
        part="base"
        class=${Rt({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${to(isLink ? void 0 : this.disabled)}
        type=${to(isLink ? void 0 : "button")}
        href=${to(isLink ? this.href : void 0)}
        target=${to(isLink ? this.target : void 0)}
        download=${to(isLink ? this.download : void 0)}
        rel=${to(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${to(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${to(this.name)}
          library=${to(this.library)}
          src=${to(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
  }
};
SlIconButton.styles = [component_styles_default, icon_button_styles_default];
SlIconButton.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e6(".icon-button")
], SlIconButton.prototype, "button", 2);
__decorateClass([
  r7()
], SlIconButton.prototype, "hasFocus", 2);
__decorateClass([
  n8()
], SlIconButton.prototype, "name", 2);
__decorateClass([
  n8()
], SlIconButton.prototype, "library", 2);
__decorateClass([
  n8()
], SlIconButton.prototype, "src", 2);
__decorateClass([
  n8()
], SlIconButton.prototype, "href", 2);
__decorateClass([
  n8()
], SlIconButton.prototype, "target", 2);
__decorateClass([
  n8()
], SlIconButton.prototype, "download", 2);
__decorateClass([
  n8()
], SlIconButton.prototype, "label", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlIconButton.prototype, "disabled", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q45FKJX7.js
var SlTag = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return ke2`
      <span
        part="base"
        class=${Rt({
      tag: true,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? ke2`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
SlTag.styles = [component_styles_default, tag_styles_default];
SlTag.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  n8({ reflect: true })
], SlTag.prototype, "variant", 2);
__decorateClass([
  n8({ reflect: true })
], SlTag.prototype, "size", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlTag.prototype, "pill", 2);
__decorateClass([
  n8({ type: Boolean })
], SlTag.prototype, "removable", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.54OW4TPT.js
var select_styles_default = i`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js
function getOffset(element, parent) {
  return {
    top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
    left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
  };
}
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
  const offset3 = getOffset(element, container);
  const offsetTop = offset3.top + container.scrollTop;
  const offsetLeft = offset3.left + container.scrollLeft;
  const minX = container.scrollLeft;
  const maxX = container.scrollLeft + container.offsetWidth;
  const minY = container.scrollTop;
  const maxY = container.scrollTop + container.offsetHeight;
  if (direction === "horizontal" || direction === "both") {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior });
    } else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
    }
  }
  if (direction === "vertical" || direction === "both") {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior });
    } else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
    }
  }
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3KSWVBQ5.js
var popup_styles_default = i`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v3) => ({
  x: v3,
  y: v3
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start2, value, end) {
  return max(start2, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x5,
    y: y5,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y5,
    left: x5,
    right: x5 + width,
    bottom: y5 + height,
    x: x5,
    y: y5
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x5,
    y: y5
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i5 = 0; i5 < validMiddleware.length; i5++) {
    const {
      name,
      fn
    } = validMiddleware[i5];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x5,
      y: y5,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x5 = nextX != null ? nextX : x5;
    y5 = nextY != null ? nextY : y5;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x5,
          y: y5
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i5 = -1;
    }
  }
  return {
    x: x5,
    y: y5,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x5,
    y: y5,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x5,
    y: y5,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x5,
      y: y5,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x5,
      y: y5
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset3 = clamp(min$1, center, max3);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max3 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset3,
        centerOffset: center - offset3 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d3) => d3.overflows[0] <= 0).sort((a4, b3) => a4.overflows[1] - b3.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d3) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d3.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d3) => [d3.placement, d3.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a4, b3) => a4[1] - b3[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x5,
        y: y5,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x5 + diffCoords.x,
        y: y5 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x5,
        y: y5,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x6,
              y: y6
            } = _ref;
            return {
              x: x6,
              y: y6
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x5,
        y: y5
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x5,
          y: limitedCoords.y - y5,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e8) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $3
  } = getCssDimensions(domElement);
  let x5 = ($3 ? round(rect.width) : rect.width) / width;
  let y5 = ($3 ? round(rect.height) : rect.height) / height;
  if (!x5 || !Number.isFinite(x5)) {
    x5 = 1;
  }
  if (!y5 || !Number.isFinite(y5)) {
    y5 = 1;
  }
  return {
    x: x5,
    y: y5
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x5 = (clientRect.left + visualOffsets.x) / scale.x;
  let y5 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x5 *= iframeScale.x;
      y5 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x5 += left;
      y5 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x5,
    y: y5
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x5 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y5 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x5 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x5,
    y: y5
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x5 = 0;
  let y5 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x5 = visualViewport.offsetLeft;
      y5 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x5,
    y: y5
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x5 = left * scale.x;
  const y5 = top * scale.y;
  return {
    width,
    height,
    x: x5,
    y: y5
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  let htmlX = 0;
  let htmlY = 0;
  if (documentElement && !isOffsetParentAnElement && !isFixed) {
    const htmlRect = documentElement.getBoundingClientRect();
    htmlY = htmlRect.top + scroll.scrollTop;
    htmlX = htmlRect.left + scroll.scrollLeft - // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect);
  }
  const x5 = rect.left + scroll.scrollLeft - offsets.x - htmlX;
  const y5 = rect.top + scroll.scrollTop - offsets.y - htmlY;
  return {
    x: x5,
    y: y5,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root2 = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root2.clientWidth - (left + width));
    const insetBottom = floor(root2.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root2.ownerDocument
      });
    } catch (e8) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
function t6(t7) {
  return r8(t7);
}
function o7(t7) {
  return t7.assignedSlot ? t7.assignedSlot : t7.parentNode instanceof ShadowRoot ? t7.parentNode.host : t7.parentNode;
}
function r8(t7) {
  for (let e8 = t7; e8; e8 = o7(e8)) if (e8 instanceof Element && "none" === getComputedStyle(e8).display) return null;
  for (let e8 = o7(t7); e8; e8 = o7(e8)) {
    if (!(e8 instanceof Element)) continue;
    const t8 = getComputedStyle(e8);
    if ("contents" !== t8.display) {
      if ("static" !== t8.position || "none" !== t8.filter) return e8;
      if ("BODY" === e8.tagName) return e8;
    }
  }
  return null;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.H24ENZMO.js
function isVirtualElement(e8) {
  return e8 !== null && typeof e8 === "object" && "getBoundingClientRect" in e8 && ("contextElement" in e8 ? e8 instanceof Element : true);
}
var SlPopup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.placement = "top";
    this.strategy = "absolute";
    this.distance = 0;
    this.skidding = 0;
    this.arrow = false;
    this.arrowPlacement = "anchor";
    this.arrowPadding = 10;
    this.flip = false;
    this.flipFallbackPlacements = "";
    this.flipFallbackStrategy = "best-fit";
    this.flipPadding = 0;
    this.shift = false;
    this.shiftPadding = 0;
    this.autoSizePadding = 0;
    this.hoverBridge = false;
    this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const anchorRect = this.anchorEl.getBoundingClientRect();
        const popupRect = this.popup.getBoundingClientRect();
        const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
        let topLeftX = 0;
        let topLeftY = 0;
        let topRightX = 0;
        let topRightY = 0;
        let bottomLeftX = 0;
        let bottomLeftY = 0;
        let bottomRightX = 0;
        let bottomRightY = 0;
        if (isVertical) {
          if (anchorRect.top < popupRect.top) {
            topLeftX = anchorRect.left;
            topLeftY = anchorRect.bottom;
            topRightX = anchorRect.right;
            topRightY = anchorRect.bottom;
            bottomLeftX = popupRect.left;
            bottomLeftY = popupRect.top;
            bottomRightX = popupRect.right;
            bottomRightY = popupRect.top;
          } else {
            topLeftX = popupRect.left;
            topLeftY = popupRect.bottom;
            topRightX = popupRect.right;
            topRightY = popupRect.bottom;
            bottomLeftX = anchorRect.left;
            bottomLeftY = anchorRect.top;
            bottomRightX = anchorRect.right;
            bottomRightY = anchorRect.top;
          }
        } else {
          if (anchorRect.left < popupRect.left) {
            topLeftX = anchorRect.right;
            topLeftY = anchorRect.top;
            topRightX = popupRect.left;
            topRightY = popupRect.top;
            bottomLeftX = anchorRect.right;
            bottomLeftY = anchorRect.bottom;
            bottomRightX = popupRect.left;
            bottomRightY = popupRect.bottom;
          } else {
            topLeftX = popupRect.right;
            topLeftY = popupRect.top;
            topRightX = anchorRect.left;
            topRightY = anchorRect.top;
            bottomLeftX = popupRect.right;
            bottomLeftY = popupRect.bottom;
            bottomRightX = anchorRect.left;
            bottomRightY = anchorRect.bottom;
          }
        }
        this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
        this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
        this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
        this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
        this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
        this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
        this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
        this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    await this.updateComplete;
    this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stop();
  }
  async updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("active")) {
      if (this.active) {
        this.start();
      } else {
        this.stop();
      }
    }
    if (changedProps.has("anchor")) {
      this.handleAnchorChange();
    }
    if (this.active) {
      await this.updateComplete;
      this.reposition();
    }
  }
  async handleAnchorChange() {
    await this.stop();
    if (this.anchor && typeof this.anchor === "string") {
      const root2 = this.getRootNode();
      this.anchorEl = root2.getElementById(this.anchor);
    } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
      this.anchorEl = this.anchor;
    } else {
      this.anchorEl = this.querySelector('[slot="anchor"]');
    }
    if (this.anchorEl instanceof HTMLSlotElement) {
      this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
    }
    if (this.anchorEl && this.active) {
      this.start();
    }
  }
  start() {
    if (!this.anchorEl) {
      return;
    }
    this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
      this.reposition();
    });
  }
  async stop() {
    return new Promise((resolve) => {
      if (this.cleanup) {
        this.cleanup();
        this.cleanup = void 0;
        this.removeAttribute("data-current-placement");
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
        requestAnimationFrame(() => resolve());
      } else {
        resolve();
      }
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl) {
      return;
    }
    const middleware = [
      // The offset middleware goes first
      offset2({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    if (this.sync) {
      middleware.push(
        size2({
          apply: ({ rects }) => {
            const syncWidth = this.sync === "width" || this.sync === "both";
            const syncHeight = this.sync === "height" || this.sync === "both";
            this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
            this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
          }
        })
      );
    } else {
      this.popup.style.width = "";
      this.popup.style.height = "";
    }
    if (this.flip) {
      middleware.push(
        flip2({
          boundary: this.flipBoundary,
          // @ts-expect-error - We're converting a string attribute to an array here
          fallbackPlacements: this.flipFallbackPlacements,
          fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
          padding: this.flipPadding
        })
      );
    }
    if (this.shift) {
      middleware.push(
        shift2({
          boundary: this.shiftBoundary,
          padding: this.shiftPadding
        })
      );
    }
    if (this.autoSize) {
      middleware.push(
        size2({
          boundary: this.autoSizeBoundary,
          padding: this.autoSizePadding,
          apply: ({ availableWidth, availableHeight }) => {
            if (this.autoSize === "vertical" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
            } else {
              this.style.removeProperty("--auto-size-available-height");
            }
            if (this.autoSize === "horizontal" || this.autoSize === "both") {
              this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
            } else {
              this.style.removeProperty("--auto-size-available-width");
            }
          }
        })
      );
    } else {
      this.style.removeProperty("--auto-size-available-width");
      this.style.removeProperty("--auto-size-available-height");
    }
    if (this.arrow) {
      middleware.push(
        arrow2({
          element: this.arrowEl,
          padding: this.arrowPadding
        })
      );
    }
    const getOffsetParent2 = this.strategy === "absolute" ? (element) => platform.getOffsetParent(element, t6) : platform.getOffsetParent;
    computePosition2(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware,
      strategy: this.strategy,
      platform: __spreadProps(__spreadValues({}, platform), {
        getOffsetParent: getOffsetParent2
      })
    }).then(({ x: x5, y: y5, middlewareData, placement }) => {
      const isRtl = this.matches(":dir(rtl)");
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.setAttribute("data-current-placement", placement);
      Object.assign(this.popup.style, {
        left: `${x5}px`,
        top: `${y5}px`
      });
      if (this.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        let top = "";
        let right = "";
        let bottom = "";
        let left = "";
        if (this.arrowPlacement === "start") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? value : "";
          left = isRtl ? "" : value;
        } else if (this.arrowPlacement === "end") {
          const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          right = isRtl ? "" : value;
          left = isRtl ? value : "";
          bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else if (this.arrowPlacement === "center") {
          left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
        } else {
          left = typeof arrowX === "number" ? `${arrowX}px` : "";
          top = typeof arrowY === "number" ? `${arrowY}px` : "";
        }
        Object.assign(this.arrowEl.style, {
          top,
          right,
          bottom,
          left,
          [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    });
    requestAnimationFrame(() => this.updateHoverBridge());
    this.emit("sl-reposition");
  }
  render() {
    return ke2`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Rt({
      "popup-hover-bridge": true,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${Rt({
      popup: true,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? ke2`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
SlPopup.styles = [component_styles_default, popup_styles_default];
__decorateClass([
  e6(".popup")
], SlPopup.prototype, "popup", 2);
__decorateClass([
  e6(".popup__arrow")
], SlPopup.prototype, "arrowEl", 2);
__decorateClass([
  n8()
], SlPopup.prototype, "anchor", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlPopup.prototype, "active", 2);
__decorateClass([
  n8({ reflect: true })
], SlPopup.prototype, "placement", 2);
__decorateClass([
  n8({ reflect: true })
], SlPopup.prototype, "strategy", 2);
__decorateClass([
  n8({ type: Number })
], SlPopup.prototype, "distance", 2);
__decorateClass([
  n8({ type: Number })
], SlPopup.prototype, "skidding", 2);
__decorateClass([
  n8({ type: Boolean })
], SlPopup.prototype, "arrow", 2);
__decorateClass([
  n8({ attribute: "arrow-placement" })
], SlPopup.prototype, "arrowPlacement", 2);
__decorateClass([
  n8({ attribute: "arrow-padding", type: Number })
], SlPopup.prototype, "arrowPadding", 2);
__decorateClass([
  n8({ type: Boolean })
], SlPopup.prototype, "flip", 2);
__decorateClass([
  n8({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (value) => {
        return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], SlPopup.prototype, "flipFallbackPlacements", 2);
__decorateClass([
  n8({ attribute: "flip-fallback-strategy" })
], SlPopup.prototype, "flipFallbackStrategy", 2);
__decorateClass([
  n8({ type: Object })
], SlPopup.prototype, "flipBoundary", 2);
__decorateClass([
  n8({ attribute: "flip-padding", type: Number })
], SlPopup.prototype, "flipPadding", 2);
__decorateClass([
  n8({ type: Boolean })
], SlPopup.prototype, "shift", 2);
__decorateClass([
  n8({ type: Object })
], SlPopup.prototype, "shiftBoundary", 2);
__decorateClass([
  n8({ attribute: "shift-padding", type: Number })
], SlPopup.prototype, "shiftPadding", 2);
__decorateClass([
  n8({ attribute: "auto-size" })
], SlPopup.prototype, "autoSize", 2);
__decorateClass([
  n8()
], SlPopup.prototype, "sync", 2);
__decorateClass([
  n8({ type: Object })
], SlPopup.prototype, "autoSizeBoundary", 2);
__decorateClass([
  n8({ attribute: "auto-size-padding", type: Number })
], SlPopup.prototype, "autoSizePadding", 2);
__decorateClass([
  n8({ attribute: "hover-bridge", type: Boolean })
], SlPopup.prototype, "hoverBridge", 2);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UW6SLYOK.js
var defaultAnimationRegistry = /* @__PURE__ */ new Map();
var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
function ensureAnimation(animation) {
  return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
}
function getLogicalAnimation(animation, dir) {
  if (dir.toLowerCase() === "rtl") {
    return {
      keyframes: animation.rtlKeyframes || animation.keyframes,
      options: animation.options
    };
  }
  return animation;
}
function setDefaultAnimation(animationName, animation) {
  defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
}
function getAnimation(el, animationName, options) {
  const customAnimation = customAnimationRegistry.get(el);
  if (customAnimation == null ? void 0 : customAnimation[animationName]) {
    return getLogicalAnimation(customAnimation[animationName], options.dir);
  }
  const defaultAnimation = defaultAnimationRegistry.get(animationName);
  if (defaultAnimation) {
    return getLogicalAnimation(defaultAnimation, options.dir);
  }
  return {
    keyframes: [],
    options: { duration: 0 }
  };
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3EPZX5HE.js
function animateTo(el, keyframes, options) {
  return new Promise((resolve) => {
    if ((options == null ? void 0 : options.duration) === Infinity) {
      throw new Error("Promise-based animations must be finite.");
    }
    const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
      duration: prefersReducedMotion() ? 0 : options.duration
    }));
    animation.addEventListener("cancel", resolve, { once: true });
    animation.addEventListener("finish", resolve, { once: true });
  });
}
function parseDuration(delay2) {
  delay2 = delay2.toString().toLowerCase();
  if (delay2.indexOf("ms") > -1) {
    return parseFloat(delay2);
  }
  if (delay2.indexOf("s") > -1) {
    return parseFloat(delay2) * 1e3;
  }
  return parseFloat(delay2);
}
function prefersReducedMotion() {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  return query.matches;
}
function stopAnimations(el) {
  return Promise.all(
    el.getAnimations().map((animation) => {
      return new Promise((resolve) => {
        animation.cancel();
        requestAnimationFrame(resolve);
      });
    })
  );
}

// node_modules/lit-html/directives/unsafe-html.js
var le = class extends i4 {
  constructor(i5) {
    if (super(i5), this.it = D2, i5.type !== t5.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t7) {
    if (t7 === D2 || null == t7) return this._t = void 0, this.it = t7;
    if (t7 === R2) return t7;
    if ("string" != typeof t7) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t7 === this.it) return this._t;
    this.it = t7;
    const i5 = [t7];
    return i5.raw = i5, this._t = { _$litType$: this.constructor.resultType, strings: i5, values: [] };
  }
};
le.directiveName = "unsafeHTML", le.resultType = 1;
var ae = e7(le);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6SQQ7EJK.js
var SlSelect = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController2(this);
    this.typeToSelectString = "";
    this.hasFocus = false;
    this.displayLabel = "";
    this.selectedOptions = [];
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.placeholder = "";
    this.multiple = false;
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.form = "";
    this.required = false;
    this.getTag = (option) => {
      return ke2`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(event) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </sl-tag>
    `;
    };
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".select__clear") !== null;
      const isIconButton = target.closest("sl-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
          } else {
            this.setSelectedOptions(this.currentOption);
          }
          this.updateComplete.then(() => {
            this.emit("sl-input");
            this.emit("sl-change");
          });
          if (!this.multiple) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        const currentIndex = allOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > allOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = allOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = allOptions.length - 1;
        }
        this.setCurrentOption(allOptions[newIndex]);
      }
      if (event.key.length === 1 || event.key === "Backspace") {
        const allOptions = this.getAllOptions();
        if (event.metaKey || event.ctrlKey || event.altKey) {
          return;
        }
        if (!this.open) {
          if (event.key === "Backspace") {
            return;
          }
          this.show();
        }
        event.stopPropagation();
        event.preventDefault();
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
        if (event.key === "Backspace") {
          this.typeToSelectString = this.typeToSelectString.slice(0, -1);
        } else {
          this.typeToSelectString += event.key.toLowerCase();
        }
        for (const option of allOptions) {
          const label = option.getTextLabel().toLowerCase();
          if (label.startsWith(this.typeToSelectString)) {
            this.setCurrentOption(option);
            break;
          }
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.open = false;
  }
  addOpenListeners() {
    var _a7;
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
    if ("CloseWatcher" in window) {
      (_a7 = this.closeWatcher) == null ? void 0 : _a7.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      };
    }
  }
  removeOpenListeners() {
    var _a7;
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }
    (_a7 = this.closeWatcher) == null ? void 0 : _a7.destroy();
  }
  handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "sl-icon-button");
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    if (event.key === "Tab") {
      return;
    }
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    if (this.value !== "") {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });
      this.updateComplete.then(() => {
        this.emit("sl-clear");
        this.emit("sl-input");
        this.emit("sl-change");
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("sl-option");
    const oldValue = this.value;
    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }
  handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values = [];
    if (customElements.get("sl-option")) {
      allOptions.forEach((option) => values.push(option.value));
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    } else {
      customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
    }
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    if (!this.disabled) {
      this.toggleOptionSelection(option, false);
      this.updateComplete.then(() => {
        this.emit("sl-input");
        this.emit("sl-change");
      });
    }
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var _a7, _b, _c, _d;
    this.selectedOptions = this.getAllOptions().filter((el) => el.selected);
    if (this.multiple) {
      this.value = this.selectedOptions.map((el) => el.value);
      if (this.placeholder && this.value.length === 0) {
        this.displayLabel = "";
      } else {
        this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
      }
    } else {
      this.value = (_b = (_a7 = this.selectedOptions[0]) == null ? void 0 : _a7.value) != null ? _b : "";
      this.displayLabel = (_d = (_c = this.selectedOptions[0]) == null ? void 0 : _c.getTextLabel()) != null ? _d : "";
    }
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index2) => {
      if (index2 < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index2);
        return ke2`<div @sl-remove=${(e8) => this.handleTagRemove(e8, option)}>
          ${typeof tag === "string" ? ae(tag) : tag}
        </div>`;
      } else if (index2 === this.maxOptionsVisible) {
        return ke2`<sl-tag size=${this.size}>+${this.selectedOptions.length - index2}</sl-tag>`;
      }
      return ke2``;
    });
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      this.emit("sl-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes, options } = getAnimation(this, "select.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
      }
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "select.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;
    return ke2`
      <div
        part="form-control"
        class=${Rt({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Rt({
      select: true,
      "select--standard": true,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": isPlaceholderVisible,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? ke2`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon ? ke2`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlSelect.styles = [component_styles_default, form_control_styles_default, select_styles_default];
SlSelect.dependencies = {
  "sl-icon": SlIcon,
  "sl-popup": SlPopup,
  "sl-tag": SlTag
};
__decorateClass([
  e6(".select")
], SlSelect.prototype, "popup", 2);
__decorateClass([
  e6(".select__combobox")
], SlSelect.prototype, "combobox", 2);
__decorateClass([
  e6(".select__display-input")
], SlSelect.prototype, "displayInput", 2);
__decorateClass([
  e6(".select__value-input")
], SlSelect.prototype, "valueInput", 2);
__decorateClass([
  e6(".select__listbox")
], SlSelect.prototype, "listbox", 2);
__decorateClass([
  r7()
], SlSelect.prototype, "hasFocus", 2);
__decorateClass([
  r7()
], SlSelect.prototype, "displayLabel", 2);
__decorateClass([
  r7()
], SlSelect.prototype, "currentOption", 2);
__decorateClass([
  r7()
], SlSelect.prototype, "selectedOptions", 2);
__decorateClass([
  n8()
], SlSelect.prototype, "name", 2);
__decorateClass([
  n8({
    converter: {
      fromAttribute: (value) => value.split(" "),
      toAttribute: (value) => value.join(" ")
    }
  })
], SlSelect.prototype, "value", 2);
__decorateClass([
  defaultValue()
], SlSelect.prototype, "defaultValue", 2);
__decorateClass([
  n8({ reflect: true })
], SlSelect.prototype, "size", 2);
__decorateClass([
  n8()
], SlSelect.prototype, "placeholder", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlSelect.prototype, "multiple", 2);
__decorateClass([
  n8({ attribute: "max-options-visible", type: Number })
], SlSelect.prototype, "maxOptionsVisible", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlSelect.prototype, "disabled", 2);
__decorateClass([
  n8({ type: Boolean })
], SlSelect.prototype, "clearable", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlSelect.prototype, "open", 2);
__decorateClass([
  n8({ type: Boolean })
], SlSelect.prototype, "hoist", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlSelect.prototype, "filled", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlSelect.prototype, "pill", 2);
__decorateClass([
  n8()
], SlSelect.prototype, "label", 2);
__decorateClass([
  n8({ reflect: true })
], SlSelect.prototype, "placement", 2);
__decorateClass([
  n8({ attribute: "help-text" })
], SlSelect.prototype, "helpText", 2);
__decorateClass([
  n8({ reflect: true })
], SlSelect.prototype, "form", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlSelect.prototype, "required", 2);
__decorateClass([
  n8()
], SlSelect.prototype, "getTag", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleOpenChange", 1);
setDefaultAnimation("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KZJNDGFO.js
var menu_item_styles_default = i`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

// node_modules/lit-html/async-directive.js
var mt = (i5, t7) => {
  const e8 = i5._$AN;
  if (void 0 === e8) return false;
  for (const i6 of e8) i6._$AO?.(t7, false), mt(i6, t7);
  return true;
};
var _t = (i5) => {
  let t7, e8;
  do {
    if (void 0 === (t7 = i5._$AM)) break;
    e8 = t7._$AN, e8.delete(i5), i5 = t7;
  } while (0 === e8?.size);
};
var wt = (i5) => {
  for (let t7; t7 = i5._$AM; i5 = t7) {
    let e8 = t7._$AN;
    if (void 0 === e8) t7._$AN = e8 = /* @__PURE__ */ new Set();
    else if (e8.has(i5)) break;
    e8.add(i5), gt(t7);
  }
};
function bt(i5) {
  void 0 !== this._$AN ? (_t(this), this._$AM = i5, wt(this)) : this._$AM = i5;
}
function yt(i5, t7 = false, e8 = 0) {
  const s3 = this._$AH, o8 = this._$AN;
  if (void 0 !== o8 && 0 !== o8.size) if (t7) if (Array.isArray(s3)) for (let i6 = e8; i6 < s3.length; i6++) mt(s3[i6], false), _t(s3[i6]);
  else null != s3 && (mt(s3, false), _t(s3));
  else mt(this, i5);
}
var gt = (i5) => {
  i5.type == t5.CHILD && (i5._$AP ??= yt, i5._$AQ ??= bt);
};
var $t = class extends i4 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i5, t7, e8) {
    super._$AT(i5, t7, e8), wt(this), this.isConnected = i5._$AU;
  }
  _$AO(i5, t7 = true) {
    i5 !== this.isConnected && (this.isConnected = i5, i5 ? this.reconnected?.() : this.disconnected?.()), t7 && (mt(this, i5), _t(this));
  }
  setValue(i5) {
    if (rt(this.t)) this.t._$AI(i5, this);
    else {
      const t7 = [...this.t._$AH];
      t7[this.i] = i5, this.t._$AI(t7, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/ref.js
var ii = () => new Zt();
var Zt = class {
};
var qt = /* @__PURE__ */ new WeakMap();
var Kt = e7(class extends $t {
  render(t7) {
    return D2;
  }
  update(t7, [i5]) {
    const s3 = i5 !== this.Y;
    return s3 && void 0 !== this.Y && this.rt(void 0), (s3 || this.lt !== this.ct) && (this.Y = i5, this.ht = t7.options?.host, this.rt(this.ct = t7.element)), D2;
  }
  rt(t7) {
    if (this.isConnected || (t7 = void 0), "function" == typeof this.Y) {
      const i5 = this.ht ?? globalThis;
      let s3 = qt.get(i5);
      void 0 === s3 && (s3 = /* @__PURE__ */ new WeakMap(), qt.set(i5, s3)), void 0 !== s3.get(this.Y) && this.Y.call(this.ht, void 0), s3.set(this.Y, t7), void 0 !== t7 && this.Y.call(this.ht, t7);
    } else this.Y.value = t7;
  }
  get lt() {
    return "function" == typeof this.Y ? qt.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MUXIBDFW.js
var SubmenuController = class {
  constructor(host, hasSlotController) {
    this.popupRef = ii();
    this.enableSubmenuTimer = -1;
    this.isConnected = false;
    this.isPopupConnected = false;
    this.skidding = 0;
    this.submenuOpenDelay = 100;
    this.handleMouseMove = (event) => {
      this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
      this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
    };
    this.handleMouseOver = () => {
      if (this.hasSlotController.test("submenu")) {
        this.enableSubmenu();
      }
    };
    this.handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
        case "Tab":
          this.disableSubmenu();
          break;
        case "ArrowLeft":
          if (event.target !== this.host) {
            event.preventDefault();
            event.stopPropagation();
            this.host.focus();
            this.disableSubmenu();
          }
          break;
        case "ArrowRight":
        case "Enter":
        case " ":
          this.handleSubmenuEntry(event);
          break;
        default:
          break;
      }
    };
    this.handleClick = (event) => {
      var _a7;
      if (event.target === this.host) {
        event.preventDefault();
        event.stopPropagation();
      } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a7 = event.target.role) == null ? void 0 : _a7.startsWith("menuitem")))) {
        this.disableSubmenu();
      }
    };
    this.handleFocusOut = (event) => {
      if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
        return;
      }
      this.disableSubmenu();
    };
    this.handlePopupMouseover = (event) => {
      event.stopPropagation();
    };
    this.handlePopupReposition = () => {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "sl-menu")[0];
      const isRtl = this.host.matches(":dir(rtl)");
      if (!menu) {
        return;
      }
      const { left, top, width, height } = menu.getBoundingClientRect();
      this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
      this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
      this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
      this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
    };
    (this.host = host).addController(this);
    this.hasSlotController = hasSlotController;
  }
  hostConnected() {
    if (this.hasSlotController.test("submenu") && !this.host.disabled) {
      this.addListeners();
    }
  }
  hostDisconnected() {
    this.removeListeners();
  }
  hostUpdated() {
    if (this.hasSlotController.test("submenu") && !this.host.disabled) {
      this.addListeners();
      this.updateSkidding();
    } else {
      this.removeListeners();
    }
  }
  addListeners() {
    if (!this.isConnected) {
      this.host.addEventListener("mousemove", this.handleMouseMove);
      this.host.addEventListener("mouseover", this.handleMouseOver);
      this.host.addEventListener("keydown", this.handleKeyDown);
      this.host.addEventListener("click", this.handleClick);
      this.host.addEventListener("focusout", this.handleFocusOut);
      this.isConnected = true;
    }
    if (!this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
        this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
        this.isPopupConnected = true;
      }
    }
  }
  removeListeners() {
    if (this.isConnected) {
      this.host.removeEventListener("mousemove", this.handleMouseMove);
      this.host.removeEventListener("mouseover", this.handleMouseOver);
      this.host.removeEventListener("keydown", this.handleKeyDown);
      this.host.removeEventListener("click", this.handleClick);
      this.host.removeEventListener("focusout", this.handleFocusOut);
      this.isConnected = false;
    }
    if (this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
        this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
        this.isPopupConnected = false;
      }
    }
  }
  handleSubmenuEntry(event) {
    const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
    if (!submenuSlot) {
      console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
      return;
    }
    let menuItems = null;
    for (const elt of submenuSlot.assignedElements()) {
      menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
      if (menuItems.length !== 0) {
        break;
      }
    }
    if (!menuItems || menuItems.length === 0) {
      return;
    }
    menuItems[0].setAttribute("tabindex", "0");
    for (let i5 = 1; i5 !== menuItems.length; ++i5) {
      menuItems[i5].setAttribute("tabindex", "-1");
    }
    if (this.popupRef.value) {
      event.preventDefault();
      event.stopPropagation();
      if (this.popupRef.value.active) {
        if (menuItems[0] instanceof HTMLElement) {
          menuItems[0].focus();
        }
      } else {
        this.enableSubmenu(false);
        this.host.updateComplete.then(() => {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        });
        this.host.requestUpdate();
      }
    }
  }
  setSubmenuState(state) {
    if (this.popupRef.value) {
      if (this.popupRef.value.active !== state) {
        this.popupRef.value.active = state;
        this.host.requestUpdate();
      }
    }
  }
  // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
  // newly opened menu.
  enableSubmenu(delay2 = true) {
    if (delay2) {
      window.clearTimeout(this.enableSubmenuTimer);
      this.enableSubmenuTimer = window.setTimeout(() => {
        this.setSubmenuState(true);
      }, this.submenuOpenDelay);
    } else {
      this.setSubmenuState(true);
    }
  }
  disableSubmenu() {
    window.clearTimeout(this.enableSubmenuTimer);
    this.setSubmenuState(false);
  }
  // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
  updateSkidding() {
    var _a7;
    if (!((_a7 = this.host.parentElement) == null ? void 0 : _a7.computedStyleMap)) {
      return;
    }
    const styleMap = this.host.parentElement.computedStyleMap();
    const attrs = ["padding-top", "border-top-width", "margin-top"];
    const skidding = attrs.reduce((accumulator, attr) => {
      var _a22;
      const styleValue2 = (_a22 = styleMap.get(attr)) != null ? _a22 : new CSSUnitValue(0, "px");
      const unitValue = styleValue2 instanceof CSSUnitValue ? styleValue2 : new CSSUnitValue(0, "px");
      const pxValue = unitValue.to("px");
      return accumulator - pxValue.value;
    }, 0);
    this.skidding = skidding;
  }
  isExpanded() {
    return this.popupRef.value ? this.popupRef.value.active : false;
  }
  renderSubmenu() {
    const isRtl = this.host.matches(":dir(rtl)");
    if (!this.isConnected) {
      return ke2` <slot name="submenu" hidden></slot> `;
    }
    return ke2`
      <sl-popup
        ${Kt(this.popupRef)}
        placement=${isRtl ? "left-start" : "right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `;
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AWJNGRYB.js
var SlMenuItem = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.loading = false;
    this.disabled = false;
    this.hasSlotController = new HasSlotController(this, "submenu");
    this.submenuController = new SubmenuController(this, this.hasSlotController);
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleMouseOver = (event) => {
      this.focus();
      event.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
    this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
    this.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const isSubmenuExpanded = this.submenuController.isExpanded();
    return ke2`
      <div
        id="anchor"
        part="base"
        class=${Rt({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? ke2` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
  }
};
SlMenuItem.styles = [component_styles_default, menu_item_styles_default];
SlMenuItem.dependencies = {
  "sl-icon": SlIcon,
  "sl-popup": SlPopup,
  "sl-spinner": SlSpinner
};
__decorateClass([
  e6("slot:not([name])")
], SlMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  e6(".menu-item")
], SlMenuItem.prototype, "menuItem", 2);
__decorateClass([
  n8()
], SlMenuItem.prototype, "type", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "checked", 2);
__decorateClass([
  n8()
], SlMenuItem.prototype, "value", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "loading", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlMenuItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("type")
], SlMenuItem.prototype, "handleTypeChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FXXKMG2P.js
var option_styles_default = i`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4L6M7RA3.js
var SlOption = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.current = false;
    this.selected = false;
    this.hasHover = false;
    this.value = "";
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleMouseEnter() {
    this.hasHover = true;
  }
  handleMouseLeave() {
    this.hasHover = false;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    if (typeof this.value !== "string") {
      this.value = String(this.value);
    }
    if (this.value.includes(" ")) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, "_");
    }
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const nodes = this.childNodes;
    let label = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!node.hasAttribute("slot")) {
          label += node.textContent;
        }
      }
      if (node.nodeType === Node.TEXT_NODE) {
        label += node.textContent;
      }
    });
    return label.trim();
  }
  render() {
    return ke2`
      <div
        part="base"
        class=${Rt({
      option: true,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
SlOption.styles = [component_styles_default, option_styles_default];
SlOption.dependencies = { "sl-icon": SlIcon };
__decorateClass([
  e6(".option__label")
], SlOption.prototype, "defaultSlot", 2);
__decorateClass([
  r7()
], SlOption.prototype, "current", 2);
__decorateClass([
  r7()
], SlOption.prototype, "selected", 2);
__decorateClass([
  r7()
], SlOption.prototype, "hasHover", 2);
__decorateClass([
  n8({ reflect: true })
], SlOption.prototype, "value", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlOption.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], SlOption.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], SlOption.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("value")
], SlOption.prototype, "handleValueChange", 1);

// components/algo_selection.ts
var _editable_dec, _algorithm_dec, _target_dec, _action_dec, _graph_dec, _event_dec, _animationStatus_dec, _currentTab_dec, _a2, _AlgoSelection_decorators, _init2, _currentTab, _animationStatus, _event, _graph, _action, _target, _algorithm, _editable;
_AlgoSelection_decorators = [t3("algo-selection")];
var AlgoSelection = class extends (_a2 = LitElementWw, _currentTab_dec = [n8({ type: String })], _animationStatus_dec = [n8({ type: String })], _event_dec = [n8({ type: Object })], _graph_dec = [n8({ type: Object })], _action_dec = [r7()], _target_dec = [r7()], _algorithm_dec = [n8({ type: String })], _editable_dec = [n8({ type: Boolean })], _a2) {
  constructor() {
    super(...arguments);
    __privateAdd(this, _currentTab, __runInitializers(_init2, 8, this, "algo")), __runInitializers(_init2, 11, this);
    __privateAdd(this, _animationStatus, __runInitializers(_init2, 12, this, "STOP")), __runInitializers(_init2, 15, this);
    __privateAdd(this, _event, __runInitializers(_init2, 16, this, null)), __runInitializers(_init2, 19, this);
    __privateAdd(this, _graph, __runInitializers(_init2, 20, this, {
      newLink: "",
      nodes: [],
      links: []
    })), __runInitializers(_init2, 23, this);
    __privateAdd(this, _action, __runInitializers(_init2, 24, this, "")), __runInitializers(_init2, 27, this);
    __privateAdd(this, _target, __runInitializers(_init2, 28, this, "")), __runInitializers(_init2, 31, this);
    __privateAdd(this, _algorithm, __runInitializers(_init2, 32, this, "SPANTREE")), __runInitializers(_init2, 35, this);
    __privateAdd(this, _editable, __runInitializers(_init2, 36, this, false)), __runInitializers(_init2, 39, this);
  }
  updated(_changedProperties) {
    const e8 = this.event;
    if (!e8) return;
    if (_changedProperties.has("event")) {
      console.log("event", e8);
      if (e8.detail.type == "NODE") {
        if (this.action == "execute") {
          if (this.algorithm == "BFS") {
            setAnimation(bfs(e8.detail.data, this.graph, this.target), this);
          }
          if (this.algorithm == "DFS") {
            setAnimation(dfs(e8.detail.data, this.graph, this.target), this);
          }
          if (this.algorithm == "DIJKSTRA") {
            setAnimation(dijkstra(e8.detail.data, this.graph), this);
          }
          this.animationStatus = "RUN";
          dispatchAnimationEvent(this);
          this.action = "";
          document.body.style.cursor = "auto";
          return;
        }
      }
    }
  }
  static get scopedElements() {
    return {
      "sl-button": SlButton,
      "sl-select": SlSelect,
      "sl-menu-item": SlMenuItem,
      "sl-input": SlInput,
      "sl-option": SlOption
    };
  }
  render() {
    return ke2`
            ${this.editable ? ke2`<sl-select
                          value=${this.algorithm}
                          @sl-change=${(e8) => setAlgoEvent(this, e8.target.value)}
                          label="Select Algorithm"
                      >
                          <sl-option value="SPANTREE">Span Tree</sl-option>
                          <sl-option value="COLORING">Graph Coloring (Brute Force)</sl-option>
                          <sl-option value="CYCLE">Cycle Detection</sl-option>
                          <sl-option value="BFS">BFS</sl-option>
                          <sl-option value="DFS">DFS</sl-option>
                          <sl-option value="DIJKSTRA">DIJKSTRA</sl-option>
                      </sl-select>
                      <p></p>` : null}
            ${this.algorithm == "DFS" || this.algorithm == "BFS" ? ke2`<sl-input @input="${(e8) => this.target = e8.target.value}" label="Target"></sl-input>
                      <p></p>` : ""}
            <sl-button
                @click="${async () => {
      if (this.animationStatus === "STOP") {
        setAnimationStatus("RUN", this);
        dispatchGraphReset(this);
        await delay(200);
        setAnimationPosition(0, this);
        if (this.algorithm == "CYCLE" || this.algorithm == "COLORING" || this.algorithm == "SPANTREE") {
          if (this.algorithm == "CYCLE") setAnimation(cycle(this.graph), this);
          if (this.algorithm == "SPANTREE") setAnimation(spanTree(this.graph), this);
          if (this.algorithm == "COLORING") setAnimation(coloring(this.graph), this);
          dispatchAnimationEvent(this);
          this.action = "";
        } else {
          this.action = "execute";
          document.body.style.cursor = "crosshair";
        }
      }
    }}"
                >Execute</sl-button
            >

            <sl-button
                @click="${() => {
      setAnimationStatus("STOP", this);
    }}"
                >Stop</sl-button
            >
            <sl-button
                @click="${() => {
      if (this.animationStatus === "RUN") {
        setAnimationStatus("PAUSE", this);
        return;
      }
      if (this.animationStatus === "PAUSE") {
        setAnimationStatus("RUN", this);
        dispatchAnimationEvent(this);
      }
    }}"
                >${this.animationStatus == "PAUSE" ? "Play" : "Pause"}</sl-button
            >
        `;
  }
};
_init2 = __decoratorStart(_a2);
_currentTab = new WeakMap();
_animationStatus = new WeakMap();
_event = new WeakMap();
_graph = new WeakMap();
_action = new WeakMap();
_target = new WeakMap();
_algorithm = new WeakMap();
_editable = new WeakMap();
__decorateElement(_init2, 4, "currentTab", _currentTab_dec, AlgoSelection, _currentTab);
__decorateElement(_init2, 4, "animationStatus", _animationStatus_dec, AlgoSelection, _animationStatus);
__decorateElement(_init2, 4, "event", _event_dec, AlgoSelection, _event);
__decorateElement(_init2, 4, "graph", _graph_dec, AlgoSelection, _graph);
__decorateElement(_init2, 4, "action", _action_dec, AlgoSelection, _action);
__decorateElement(_init2, 4, "target", _target_dec, AlgoSelection, _target);
__decorateElement(_init2, 4, "algorithm", _algorithm_dec, AlgoSelection, _algorithm);
__decorateElement(_init2, 4, "editable", _editable_dec, AlgoSelection, _editable);
AlgoSelection = __decorateElement(_init2, 0, "AlgoSelection", _AlgoSelection_decorators, AlgoSelection);
__runInitializers(_init2, 1, AlgoSelection);

// utils/updateGraph.ts
function deleteLink(graph, source, target) {
  return {
    nodes: [...graph.nodes],
    links: graph.links.filter(
      (link) => link.source.name !== source || link.target.name !== target
    )
  };
}
function deleteNode(graph, name) {
  return {
    nodes: graph.nodes.filter((node) => node.name !== name),
    links: graph.links.filter(
      (link) => link.source.name !== name && link.target.name !== name
    )
  };
}
function containsLink(graph, source, target) {
  return graph.links.filter(
    (link) => link.source.name === source && link.target.name === target || link.source.name === target && link.target.name === source
  ).length > 0;
}
function addNode(graph, name) {
  {
    if (!graph.nodes.map((node) => node.name).includes(name) && name) {
      let x5 = {
        newLink: "",
        nodes: [...graph.nodes, { name }],
        links: [...graph.links]
      };
      console.log(x5);
      return x5;
    } else {
      return graph;
    }
  }
}
function addLink(graph, source, target, weight) {
  return {
    newLink: "",
    nodes: [...graph.nodes],
    links: [
      ...graph.links,
      {
        source,
        target,
        weight
      }
    ]
  };
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FW7UWQXB.js
var tooltip_styles_default = i`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IXQOPD5K.js
var SlTooltip = class extends ShoelaceElement {
  constructor() {
    super();
    this.localize = new LocalizeController2(this);
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 8;
    this.open = false;
    this.skidding = 0;
    this.trigger = "hover focus";
    this.hoist = false;
    this.handleBlur = () => {
      if (this.hasTrigger("focus")) {
        this.hide();
      }
    };
    this.handleClick = () => {
      if (this.hasTrigger("click")) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
    };
    this.handleFocus = () => {
      if (this.hasTrigger("focus")) {
        this.show();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        this.hide();
      }
    };
    this.handleMouseOver = () => {
      if (this.hasTrigger("hover")) {
        const delay2 = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.show(), delay2);
      }
    };
    this.handleMouseOut = () => {
      if (this.hasTrigger("hover")) {
        const delay2 = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
        clearTimeout(this.hoverTimeout);
        this.hoverTimeout = window.setTimeout(() => this.hide(), delay2);
      }
    };
    this.addEventListener("blur", this.handleBlur, true);
    this.addEventListener("focus", this.handleFocus, true);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("mouseover", this.handleMouseOver);
    this.addEventListener("mouseout", this.handleMouseOut);
  }
  disconnectedCallback() {
    var _a7;
    (_a7 = this.closeWatcher) == null ? void 0 : _a7.destroy();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    if (this.open) {
      this.popup.active = true;
      this.popup.reposition();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  async handleOpenChange() {
    var _a7, _b;
    if (this.open) {
      if (this.disabled) {
        return;
      }
      this.emit("sl-show");
      if ("CloseWatcher" in window) {
        (_a7 = this.closeWatcher) == null ? void 0 : _a7.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => {
          this.hide();
        };
      } else {
        document.addEventListener("keydown", this.handleDocumentKeyDown);
      }
      await stopAnimations(this.body);
      this.body.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "tooltip.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.reposition();
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      (_b = this.closeWatcher) == null ? void 0 : _b.destroy();
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "tooltip.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.active = false;
      this.body.hidden = true;
      this.emit("sl-after-hide");
    }
  }
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  /** Shows the tooltip. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  //
  // NOTE: Tooltip is a bit unique in that we're using aria-live instead of aria-labelledby to trick screen readers into
  // announcing the content. It works really well, but it violates an accessibility rule. We're also adding the
  // aria-describedby attribute to a slot, which is required by <sl-popup> to correctly locate the first assigned
  // element, otherwise positioning is incorrect.
  //
  render() {
    return ke2`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Rt({
      tooltip: true,
      "tooltip--open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;
  }
};
SlTooltip.styles = [component_styles_default, tooltip_styles_default];
SlTooltip.dependencies = { "sl-popup": SlPopup };
__decorateClass([
  e6("slot:not([name])")
], SlTooltip.prototype, "defaultSlot", 2);
__decorateClass([
  e6(".tooltip__body")
], SlTooltip.prototype, "body", 2);
__decorateClass([
  e6("sl-popup")
], SlTooltip.prototype, "popup", 2);
__decorateClass([
  n8()
], SlTooltip.prototype, "content", 2);
__decorateClass([
  n8()
], SlTooltip.prototype, "placement", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlTooltip.prototype, "disabled", 2);
__decorateClass([
  n8({ type: Number })
], SlTooltip.prototype, "distance", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlTooltip.prototype, "open", 2);
__decorateClass([
  n8({ type: Number })
], SlTooltip.prototype, "skidding", 2);
__decorateClass([
  n8()
], SlTooltip.prototype, "trigger", 2);
__decorateClass([
  n8({ type: Boolean })
], SlTooltip.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch(["content", "distance", "hoist", "placement", "skidding"])
], SlTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], SlTooltip.prototype, "handleDisabledChange", 1);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 150, easing: "ease" }
});

// components/edit_graph.ts
var _newNode_dec, _newLinkWeight_dec, _selectedNode_dec, _action_dec2, _event_dec2, _graph_dec2, _a3, _EditGraph_decorators, _init3, _graph2, _event2, _action2, _selectedNode, _newLinkWeight, _newNode;
_EditGraph_decorators = [t3("edit-graph")];
var EditGraph = class extends (_a3 = LitElementWw, _graph_dec2 = [n8({ type: Object })], _event_dec2 = [n8({ type: Object })], _action_dec2 = [r7()], _selectedNode_dec = [r7()], _newLinkWeight_dec = [r7()], _newNode_dec = [r7()], _a3) {
  constructor() {
    super(...arguments);
    __privateAdd(this, _graph2, __runInitializers(_init3, 8, this, {
      newLink: "",
      nodes: [],
      links: []
    })), __runInitializers(_init3, 11, this);
    __privateAdd(this, _event2, __runInitializers(_init3, 12, this, null)), __runInitializers(_init3, 15, this);
    __privateAdd(this, _action2, __runInitializers(_init3, 16, this, "")), __runInitializers(_init3, 19, this);
    __privateAdd(this, _selectedNode, __runInitializers(_init3, 20, this, "")), __runInitializers(_init3, 23, this);
    __privateAdd(this, _newLinkWeight, __runInitializers(_init3, 24, this, 1)), __runInitializers(_init3, 27, this);
    __privateAdd(this, _newNode, __runInitializers(_init3, 28, this, "")), __runInitializers(_init3, 31, this);
  }
  static get scopedElements() {
    return {
      "sl-button": SlButton,
      "sl-tooltip": SlTooltip,
      "sl-input": SlInput
    };
  }
  updateGraph() {
    this.dispatchEvent(
      new CustomEvent("graph-update", {
        bubbles: true,
        composed: true,
        detail: this.graph
      })
    );
  }
  updated(_changedProperties) {
    const e8 = this.event;
    if (!e8) return;
    if (_changedProperties.has("event")) {
      if (this.action == "add node") {
        this.graph = addNode(this.graph, this.newNode);
        this.updateGraph();
        this.action = "";
        document.body.style.cursor = "auto";
        return;
      }
      if (e8.detail.type == "LINK") {
        if (this.action == "deleteLink") {
          this.graph = deleteLink(
            this.graph,
            e8.detail.data.source.name,
            e8.detail.data.target.name
          );
          this.action = "";
          this.updateGraph();
          document.body.style.cursor = "auto";
          return;
        }
      }
      if (e8.detail.type == "NODE") {
        if (this.action == "delete") {
          this.graph = deleteNode(this.graph, e8.detail.data.name);
          this.action = "";
          this.updateGraph();
          document.body.style.cursor = "auto";
          return;
        }
        if (this.action == "add link") {
          this.graph.newLink = e8.detail.data.name;
          this.updateGraph();
          this.action = "add link 2";
          this.selectedNode = e8.detail.data.name;
          return;
        }
        if (this.action == "add link 2") {
          if (!containsLink(this.graph, this.selectedNode, e8.detail.data.name) && this.selectedNode !== e8.detail.data.name) {
            this.graph = addLink(this.graph, this.selectedNode, e8.detail.data.name, this.newLinkWeight);
          }
          this.graph.newLink = "";
          this.updateGraph();
          this.action = "";
          document.body.style.cursor = "auto";
          return;
        }
      }
    }
  }
  render() {
    return ke2`
            <table>
                <tr>
                    <th>Add Node</th>
                    <th>Add Link</th>
                    <th>Delete Node</th>
                    <th>Delete Link</th>
                </tr>
                <tr>
                    <td>
                        <div class="buttonAndInput">
                            <sl-input @input="${(e8) => this.newNode = e8.target.value}" label="Name"></sl-input>
                            <sl-tooltip
                                content='Enter a name click "Add Node" and then click the graph to add a
          node'
                            >
                                <sl-button
                                    @click="${() => {
      this.action = "add node";
      document.body.style.cursor = "crosshair";
    }}"
                                    >Add Node</sl-button
                                ></sl-tooltip
                            >
                        </div>
                    </td>

                    <td>
                        <div class="buttonAndInput">
                            <sl-input
                                @input="${(e8) => this.newLinkWeight = e8.target.value}"
                                type="number"
                                label="Weight"
                            ></sl-input>
                            <sl-tooltip
                                content='Enter a weight click "Add Link" and then first click the source and
          then the target of the link to add a link'
                            >
                                <sl-button
                                    style=${"align-items: flex-end"}
                                    @click="${() => {
      this.action = "add link";
      document.body.style.cursor = "crosshair";
    }}"
                                    >Add Link</sl-button
                                ></sl-tooltip
                            >
                        </div>
                    </td>
                    <td>
                        <sl-tooltip
                            content='Click "Delete Node" and then the Node you want to delete to delete a
          Node'
                        >
                            <sl-button
                                @click="${() => {
      document.body.style.cursor = "crosshair";
      this.action = "delete";
    }}"
                                >Delete Node</sl-button
                            ></sl-tooltip
                        >
                    </td>
                    <td>
                        <div class="buttonAndInput">
                            <sl-tooltip
                                content='Click "Delete Link" and then the Link you want to delete to delete a
          Link'
                            >
                                <sl-button
                                    @click="${() => {
      document.body.style.cursor = "crosshair";
      this.action = "deleteLink";
    }}"
                                    >Delete Link</sl-button
                                ></sl-tooltip
                            >
                        </div>
                    </td>
                </tr>
            </table>
        `;
  }
};
_init3 = __decoratorStart(_a3);
_graph2 = new WeakMap();
_event2 = new WeakMap();
_action2 = new WeakMap();
_selectedNode = new WeakMap();
_newLinkWeight = new WeakMap();
_newNode = new WeakMap();
__decorateElement(_init3, 4, "graph", _graph_dec2, EditGraph, _graph2);
__decorateElement(_init3, 4, "event", _event_dec2, EditGraph, _event2);
__decorateElement(_init3, 4, "action", _action_dec2, EditGraph, _action2);
__decorateElement(_init3, 4, "selectedNode", _selectedNode_dec, EditGraph, _selectedNode);
__decorateElement(_init3, 4, "newLinkWeight", _newLinkWeight_dec, EditGraph, _newLinkWeight);
__decorateElement(_init3, 4, "newNode", _newNode_dec, EditGraph, _newNode);
EditGraph = __decorateElement(_init3, 0, "EditGraph", _EditGraph_decorators, EditGraph);
__publicField(EditGraph, "styles", i`
        td,
        th {
            padding: 10px;
        }

        td:not(:last-child),
        th:not(:last-child) {
            border-right: 1px solid;
            border-color: lightgray;
        }
        .buttonAndInput {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    `);
__runInitializers(_init3, 1, EditGraph);

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i5 = prefix.indexOf(":");
  if (i5 >= 0 && (prefix = name.slice(0, i5)) !== "xmlns") name = name.slice(i5 + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m4 = groups.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, subgroup = subgroups[j3] = new Array(n9), node, subnode, i5 = 0; i5 < n9; ++i5) {
      if ((node = group[i5]) && (subnode = select.call(node, node.__data__, i5, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i5] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x5) {
  return x5 == null ? [] : Array.isArray(x5) ? x5 : Array.from(x5);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups = this._groups, m4 = groups.length, subgroups = [], parents = [], j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, node, i5 = 0; i5 < n9; ++i5) {
      if (node = group[i5]) {
        subgroups.push(select.call(node, node.__data__, i5, group));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m4 = groups.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, subgroup = subgroups[j3] = [], node, i5 = 0; i5 < n9; ++i5) {
      if ((node = group[i5]) && match.call(node, node.__data__, i5, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update2) {
  return new Array(update2.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum2) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update2, exit, data) {
  var i5 = 0, node, groupLength = group.length, dataLength = data.length;
  for (; i5 < dataLength; ++i5) {
    if (node = group[i5]) {
      node.__data__ = data[i5];
      update2[i5] = node;
    } else {
      enter[i5] = new EnterNode(parent, data[i5]);
    }
  }
  for (; i5 < groupLength; ++i5) {
    if (node = group[i5]) {
      exit[i5] = node;
    }
  }
}
function bindKey(parent, group, enter, update2, exit, data, key) {
  var i5, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i5 = 0; i5 < groupLength; ++i5) {
    if (node = group[i5]) {
      keyValues[i5] = keyValue = key.call(node, node.__data__, i5, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i5] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i5 = 0; i5 < dataLength; ++i5) {
    keyValue = key.call(parent, data[i5], i5, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update2[i5] = node;
      node.__data__ = data[i5];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i5] = new EnterNode(parent, data[i5]);
    }
  }
  for (i5 = 0; i5 < groupLength; ++i5) {
    if ((node = group[i5]) && nodeByKeyValue.get(keyValues[i5]) === node) {
      exit[i5] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m4 = groups.length, update2 = new Array(m4), enter = new Array(m4), exit = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    var parent = parents[j3], group = groups[j3], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j3, parents)), dataLength = data.length, enterGroup = enter[j3] = new Array(dataLength), updateGroup = update2[j3] = new Array(dataLength), exitGroup = exit[j3] = new Array(groupLength);
    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update2 = new Selection(update2, parents);
  update2._enter = enter;
  update2._exit = exit;
  return update2;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update2 = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update2 = onupdate(update2);
    if (update2) update2 = update2.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update2 ? enter.merge(update2).order() : update2;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m4 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m4; ++j3) {
    for (var group0 = groups0[j3], group1 = groups1[j3], n9 = group0.length, merge = merges[j3] = new Array(n9), node, i5 = 0; i5 < n9; ++i5) {
      if (node = group0[i5] || group1[i5]) {
        merge[i5] = node;
      }
    }
  }
  for (; j3 < m0; ++j3) {
    merges[j3] = groups0[j3];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups = this._groups, j3 = -1, m4 = groups.length; ++j3 < m4; ) {
    for (var group = groups[j3], i5 = group.length - 1, next = group[i5], node; --i5 >= 0; ) {
      if (node = group[i5]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a4, b3) {
    return a4 && b3 ? compare(a4.__data__, b3.__data__) : !a4 - !b3;
  }
  for (var groups = this._groups, m4 = groups.length, sortgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, sortgroup = sortgroups[j3] = new Array(n9), node, i5 = 0; i5 < n9; ++i5) {
      if (node = group[i5]) {
        sortgroup[i5] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a4, b3) {
  return a4 < b3 ? -1 : a4 > b3 ? 1 : a4 >= b3 ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups = this._groups, j3 = 0, m4 = groups.length; j3 < m4; ++j3) {
    for (var group = groups[j3], i5 = 0, n9 = group.length; i5 < n9; ++i5) {
      var node = group[i5];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size3 = 0;
  for (const node of this) ++size3;
  return size3;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups = this._groups, j3 = 0, m4 = groups.length; j3 < m4; ++j3) {
    for (var group = groups[j3], i5 = 0, n9 = group.length, node; i5 < n9; ++i5) {
      if (node = group[i5]) callback.call(node, node.__data__, i5, group);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null) this.removeAttribute(name);
    else this.setAttribute(name, v3);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v3);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v3, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (v3 == null) delete this[name];
    else this[name] = v3;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i5 = this._names.indexOf(name);
    if (i5 < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i5 = this._names.indexOf(name);
    if (i5 >= 0) {
      this._names.splice(i5, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names2) {
  var list = classList(node), i5 = -1, n9 = names2.length;
  while (++i5 < n9) list.add(names2[i5]);
}
function classedRemove(node, names2) {
  var list = classList(node), i5 = -1, n9 = names2.length;
  while (++i5 < n9) list.remove(names2[i5]);
}
function classedTrue(names2) {
  return function() {
    classedAdd(this, names2);
  };
}
function classedFalse(names2) {
  return function() {
    classedRemove(this, names2);
  };
}
function classedFunction(names2, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names2);
  };
}
function classed_default(name, value) {
  var names2 = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i5 = -1, n9 = names2.length;
    while (++i5 < n9) if (!list.contains(names2[i5])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names2, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v3 = value.apply(this, arguments);
    this.textContent = v3 == null ? "" : v3;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v3 = value.apply(this, arguments);
    this.innerHTML = v3 == null ? "" : v3;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create2 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create2.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before) {
  var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
  return this.select(function() {
    return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t7) {
    var name = "", i5 = t7.indexOf(".");
    if (i5 >= 0) name = t7.slice(i5 + 1), t7 = t7.slice(0, i5);
    return { type: t7, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j3 = 0, i5 = -1, m4 = on.length, o8; j3 < m4; ++j3) {
      if (o8 = on[j3], (!typename.type || o8.type === typename.type) && o8.name === typename.name) {
        this.removeEventListener(o8.type, o8.listener, o8.options);
      } else {
        on[++i5] = o8;
      }
    }
    if (++i5) on.length = i5;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o8, listener = contextListener(value);
    if (on) for (var j3 = 0, m4 = on.length; j3 < m4; ++j3) {
      if ((o8 = on[j3]).type === typename.type && o8.name === typename.name) {
        this.removeEventListener(o8.type, o8.listener, o8.options);
        this.addEventListener(o8.type, o8.listener = listener, o8.options = options);
        o8.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o8 = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o8];
    else on.push(o8);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i5, n9 = typenames.length, t7;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j3 = 0, m4 = on.length, o8; j3 < m4; ++j3) {
      for (i5 = 0, o8 = on[j3]; i5 < n9; ++i5) {
        if ((t7 = typenames[i5]).type === o8.type && t7.name === o8.name) {
          return o8.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i5 = 0; i5 < n9; ++i5) this.each(on(typenames[i5], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type2, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type2, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type2, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params);
  };
}
function dispatchFunction(type2, params) {
  return function() {
    return dispatchEvent(this, type2, params.apply(this, arguments));
  };
}
function dispatch_default(type2, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups = this._groups, j3 = 0, m4 = groups.length; j3 < m4; ++j3) {
    for (var group = groups[j3], i5 = 0, n9 = group.length, node; i5 < n9; ++i5) {
      if (node = group[i5]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-dispatch/src/dispatch.js
var noop = { value: () => {
} };
function dispatch() {
  for (var i5 = 0, n9 = arguments.length, _3 = {}, t7; i5 < n9; ++i5) {
    if (!(t7 = arguments[i5] + "") || t7 in _3 || /[\s.]/.test(t7)) throw new Error("illegal type: " + t7);
    _3[t7] = [];
  }
  return new Dispatch(_3);
}
function Dispatch(_3) {
  this._ = _3;
}
function parseTypenames2(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t7) {
    var name = "", i5 = t7.indexOf(".");
    if (i5 >= 0) name = t7.slice(i5 + 1), t7 = t7.slice(0, i5);
    if (t7 && !types.hasOwnProperty(t7)) throw new Error("unknown type: " + t7);
    return { type: t7, name };
  });
}
Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _3 = this._, T3 = parseTypenames2(typename + "", _3), t7, i5 = -1, n9 = T3.length;
    if (arguments.length < 2) {
      while (++i5 < n9) if ((t7 = (typename = T3[i5]).type) && (t7 = get(_3[t7], typename.name))) return t7;
      return;
    }
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i5 < n9) {
      if (t7 = (typename = T3[i5]).type) _3[t7] = set(_3[t7], typename.name, callback);
      else if (callback == null) for (t7 in _3) _3[t7] = set(_3[t7], typename.name, null);
    }
    return this;
  },
  copy: function() {
    var copy = {}, _3 = this._;
    for (var t7 in _3) copy[t7] = _3[t7].slice();
    return new Dispatch(copy);
  },
  call: function(type2, that) {
    if ((n9 = arguments.length - 2) > 0) for (var args = new Array(n9), i5 = 0, n9, t7; i5 < n9; ++i5) args[i5] = arguments[i5 + 2];
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (t7 = this._[type2], i5 = 0, n9 = t7.length; i5 < n9; ++i5) t7[i5].value.apply(that, args);
  },
  apply: function(type2, that, args) {
    if (!this._.hasOwnProperty(type2)) throw new Error("unknown type: " + type2);
    for (var t7 = this._[type2], i5 = 0, n9 = t7.length; i5 < n9; ++i5) t7[i5].value.apply(that, args);
  }
};
function get(type2, name) {
  for (var i5 = 0, n9 = type2.length, c8; i5 < n9; ++i5) {
    if ((c8 = type2[i5]).name === name) {
      return c8.value;
    }
  }
}
function set(type2, name, callback) {
  for (var i5 = 0, n9 = type2.length; i5 < n9; ++i5) {
    if (type2[i5].name === name) {
      type2[i5] = noop, type2 = type2.slice(0, i5).concat(type2.slice(i5 + 1));
      break;
    }
  }
  if (callback != null) type2.push({ name, value: callback });
  return type2;
}
var dispatch_default2 = dispatch;

// node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root2.__noselect = root2.style.MozUserSelect;
    root2.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root2) {
    selection2.on("selectstart.drag", null);
  } else {
    root2.style.MozUserSelect = root2.__noselect;
    delete root2.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
var constant_default2 = (x5) => () => x5;

// node_modules/d3-drag/src/event.js
function DragEvent(type2, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x5,
  y: y5,
  dx,
  dy,
  dispatch: dispatch2
}) {
  Object.defineProperties(this, {
    type: { value: type2, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x5, enumerable: true, configurable: true },
    y: { value: y5, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch2 }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d3) {
  return d3 == null ? { x: event.x, y: event.y } : d3;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter2 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default2("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag2(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d3) {
    if (touchending || !filter2.call(this, event, d3)) return;
    var gesture = beforestart(this, container.call(this, event, d3), event, d3, "mouse");
    if (!gesture) return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d3) {
    if (!filter2.call(this, event, d3)) return;
    var touches = event.changedTouches, c8 = container.call(this, event, d3), n9 = touches.length, i5, gesture;
    for (i5 = 0; i5 < n9; ++i5) {
      if (gesture = beforestart(this, c8, event, d3, touches[i5].identifier, touches[i5])) {
        nopropagation(event);
        gesture("start", event, touches[i5]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n9 = touches.length, i5, gesture;
    for (i5 = 0; i5 < n9; ++i5) {
      if (gesture = gestures[touches[i5].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i5]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n9 = touches.length, i5, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i5 = 0; i5 < n9; ++i5) {
      if (gesture = gestures[touches[i5].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i5]);
      }
    }
  }
  function beforestart(that, container2, event, d3, identifier, touch) {
    var dispatch2 = listeners.copy(), p3 = pointer_default(touch || event, container2), dx, dy, s3;
    if ((s3 = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag2,
      identifier,
      active,
      x: p3[0],
      y: p3[1],
      dx: 0,
      dy: 0,
      dispatch: dispatch2
    }), d3)) == null) return;
    dx = s3.x - p3[0] || 0;
    dy = s3.y - p3[1] || 0;
    return function gesture(type2, event2, touch2) {
      var p0 = p3, n9;
      switch (type2) {
        case "start":
          gestures[identifier] = gesture, n9 = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        // falls through
        case "drag":
          p3 = pointer_default(touch2 || event2, container2), n9 = active;
          break;
      }
      dispatch2.call(
        type2,
        that,
        new DragEvent(type2, {
          sourceEvent: event2,
          subject: s3,
          target: drag2,
          identifier,
          active: n9,
          x: p3[0] + dx,
          y: p3[1] + dy,
          dx: p3[0] - p0[0],
          dy: p3[1] - p0[1],
          dispatch: dispatch2
        }),
        d3
      );
    };
  }
  drag2.filter = function(_3) {
    return arguments.length ? (filter2 = typeof _3 === "function" ? _3 : constant_default2(!!_3), drag2) : filter2;
  };
  drag2.container = function(_3) {
    return arguments.length ? (container = typeof _3 === "function" ? _3 : constant_default2(_3), drag2) : container;
  };
  drag2.subject = function(_3) {
    return arguments.length ? (subject = typeof _3 === "function" ? _3 : constant_default2(_3), drag2) : subject;
  };
  drag2.touchable = function(_3) {
    return arguments.length ? (touchable = typeof _3 === "function" ? _3 : constant_default2(!!_3), drag2) : touchable;
  };
  drag2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag2 : value;
  };
  drag2.clickDistance = function(_3) {
    return arguments.length ? (clickDistance2 = (_3 = +_3) * _3, drag2) : Math.sqrt(clickDistance2);
  };
  return drag2;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format) {
  var m4, l3;
  format = (format + "").trim().toLowerCase();
  return (m4 = reHex.exec(format)) ? (l3 = m4[1].length, m4 = parseInt(m4[1], 16), l3 === 6 ? rgbn(m4) : l3 === 3 ? new Rgb(m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, (m4 & 15) << 4 | m4 & 15, 1) : l3 === 8 ? rgba(m4 >> 24 & 255, m4 >> 16 & 255, m4 >> 8 & 255, (m4 & 255) / 255) : l3 === 4 ? rgba(m4 >> 12 & 15 | m4 >> 8 & 240, m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, ((m4 & 15) << 4 | m4 & 15) / 255) : null) : (m4 = reRgbInteger.exec(format)) ? new Rgb(m4[1], m4[2], m4[3], 1) : (m4 = reRgbPercent.exec(format)) ? new Rgb(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, 1) : (m4 = reRgbaInteger.exec(format)) ? rgba(m4[1], m4[2], m4[3], m4[4]) : (m4 = reRgbaPercent.exec(format)) ? rgba(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, m4[4]) : (m4 = reHslPercent.exec(format)) ? hsla(m4[1], m4[2] / 100, m4[3] / 100, 1) : (m4 = reHslaPercent.exec(format)) ? hsla(m4[1], m4[2] / 100, m4[3] / 100, m4[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n9) {
  return new Rgb(n9 >> 16 & 255, n9 >> 8 & 255, n9 & 255, 1);
}
function rgba(r9, g3, b3, a4) {
  if (a4 <= 0) r9 = g3 = b3 = NaN;
  return new Rgb(r9, g3, b3, a4);
}
function rgbConvert(o8) {
  if (!(o8 instanceof Color)) o8 = color(o8);
  if (!o8) return new Rgb();
  o8 = o8.rgb();
  return new Rgb(o8.r, o8.g, o8.b, o8.opacity);
}
function rgb(r9, g3, b3, opacity) {
  return arguments.length === 1 ? rgbConvert(r9) : new Rgb(r9, g3, b3, opacity == null ? 1 : opacity);
}
function Rgb(r9, g3, b3, opacity) {
  this.r = +r9;
  this.g = +g3;
  this.b = +b3;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a4 = clampa(this.opacity);
  return `${a4 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a4 === 1 ? ")" : `, ${a4})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h7, s3, l3, a4) {
  if (a4 <= 0) h7 = s3 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1) h7 = s3 = NaN;
  else if (s3 <= 0) h7 = NaN;
  return new Hsl(h7, s3, l3, a4);
}
function hslConvert(o8) {
  if (o8 instanceof Hsl) return new Hsl(o8.h, o8.s, o8.l, o8.opacity);
  if (!(o8 instanceof Color)) o8 = color(o8);
  if (!o8) return new Hsl();
  if (o8 instanceof Hsl) return o8;
  o8 = o8.rgb();
  var r9 = o8.r / 255, g3 = o8.g / 255, b3 = o8.b / 255, min3 = Math.min(r9, g3, b3), max3 = Math.max(r9, g3, b3), h7 = NaN, s3 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s3) {
    if (r9 === max3) h7 = (g3 - b3) / s3 + (g3 < b3) * 6;
    else if (g3 === max3) h7 = (b3 - r9) / s3 + 2;
    else h7 = (r9 - g3) / s3 + 4;
    s3 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h7 *= 60;
  } else {
    s3 = l3 > 0 && l3 < 1 ? 0 : h7;
  }
  return new Hsl(h7, s3, l3, o8.opacity);
}
function hsl(h7, s3, l3, opacity) {
  return arguments.length === 1 ? hslConvert(h7) : new Hsl(h7, s3, l3, opacity == null ? 1 : opacity);
}
function Hsl(h7, s3, l3, opacity) {
  this.h = +h7;
  this.s = +s3;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k3) {
    k3 = k3 == null ? brighter : Math.pow(brighter, k3);
    return new Hsl(this.h, this.s, this.l * k3, this.opacity);
  },
  darker(k3) {
    k3 = k3 == null ? darker : Math.pow(darker, k3);
    return new Hsl(this.h, this.s, this.l * k3, this.opacity);
  },
  rgb() {
    var h7 = this.h % 360 + (this.h < 0) * 360, s3 = isNaN(h7) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s3, m1 = 2 * l3 - m22;
    return new Rgb(
      hsl2rgb(h7 >= 240 ? h7 - 240 : h7 + 120, m1, m22),
      hsl2rgb(h7, m1, m22),
      hsl2rgb(h7 < 120 ? h7 + 240 : h7 - 120, m1, m22),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a4 = clampa(this.opacity);
    return `${a4 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a4 === 1 ? ")" : `, ${a4})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h7, m1, m22) {
  return (h7 < 60 ? m1 + (m22 - m1) * h7 / 60 : h7 < 180 ? m22 : h7 < 240 ? m1 + (m22 - m1) * (240 - h7) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v22, v3) {
  var t22 = t1 * t1, t32 = t22 * t1;
  return ((1 - 3 * t1 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t1 + 3 * t22 - 3 * t32) * v22 + t32 * v3) / 6;
}
function basis_default(values) {
  var n9 = values.length - 1;
  return function(t7) {
    var i5 = t7 <= 0 ? t7 = 0 : t7 >= 1 ? (t7 = 1, n9 - 1) : Math.floor(t7 * n9), v1 = values[i5], v22 = values[i5 + 1], v0 = i5 > 0 ? values[i5 - 1] : 2 * v1 - v22, v3 = i5 < n9 - 1 ? values[i5 + 2] : 2 * v22 - v1;
    return basis((t7 - i5 / n9) * n9, v0, v1, v22, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n9 = values.length;
  return function(t7) {
    var i5 = Math.floor(((t7 %= 1) < 0 ? ++t7 : t7) * n9), v0 = values[(i5 + n9 - 1) % n9], v1 = values[i5 % n9], v22 = values[(i5 + 1) % n9], v3 = values[(i5 + 2) % n9];
    return basis((t7 - i5 / n9) * n9, v0, v1, v22, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x5) => () => x5;

// node_modules/d3-interpolate/src/color.js
function linear(a4, d3) {
  return function(t7) {
    return a4 + t7 * d3;
  };
}
function exponential(a4, b3, y5) {
  return a4 = Math.pow(a4, y5), b3 = Math.pow(b3, y5) - a4, y5 = 1 / y5, function(t7) {
    return Math.pow(a4 + t7 * b3, y5);
  };
}
function gamma(y5) {
  return (y5 = +y5) === 1 ? nogamma : function(a4, b3) {
    return b3 - a4 ? exponential(a4, b3, y5) : constant_default3(isNaN(a4) ? b3 : a4);
  };
}
function nogamma(a4, b3) {
  var d3 = b3 - a4;
  return d3 ? linear(a4, d3) : constant_default3(isNaN(a4) ? b3 : a4);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y5) {
  var color2 = gamma(y5);
  function rgb2(start2, end) {
    var r9 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g3 = color2(start2.g, end.g), b3 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t7) {
      start2.r = r9(t7);
      start2.g = g3(t7);
      start2.b = b3(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n9 = colors.length, r9 = new Array(n9), g3 = new Array(n9), b3 = new Array(n9), i5, color2;
    for (i5 = 0; i5 < n9; ++i5) {
      color2 = rgb(colors[i5]);
      r9[i5] = color2.r || 0;
      g3[i5] = color2.g || 0;
      b3[i5] = color2.b || 0;
    }
    r9 = spline(r9);
    g3 = spline(g3);
    b3 = spline(b3);
    color2.opacity = 1;
    return function(t7) {
      color2.r = r9(t7);
      color2.g = g3(t7);
      color2.b = b3(t7);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a4, b3) {
  return a4 = +a4, b3 = +b3, function(t7) {
    return a4 * (1 - t7) + b3 * t7;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b3) {
  return function() {
    return b3;
  };
}
function one(b3) {
  return function(t7) {
    return b3(t7) + "";
  };
}
function string_default(a4, b3) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i5 = -1, s3 = [], q3 = [];
  a4 = a4 + "", b3 = b3 + "";
  while ((am = reA.exec(a4)) && (bm = reB.exec(b3))) {
    if ((bs = bm.index) > bi) {
      bs = b3.slice(bi, bs);
      if (s3[i5]) s3[i5] += bs;
      else s3[++i5] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s3[i5]) s3[i5] += bm;
      else s3[++i5] = bm;
    } else {
      s3[++i5] = null;
      q3.push({ i: i5, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b3.length) {
    bs = b3.slice(bi);
    if (s3[i5]) s3[i5] += bs;
    else s3[++i5] = bs;
  }
  return s3.length < 2 ? q3[0] ? one(q3[0].x) : zero(b3) : (b3 = q3.length, function(t7) {
    for (var i6 = 0, o8; i6 < b3; ++i6) s3[(o8 = q3[i6]).i] = o8.x(t7);
    return s3.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a4, b3, c8, d3, e8, f7) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a4 * a4 + b3 * b3)) a4 /= scaleX, b3 /= scaleX;
  if (skewX = a4 * c8 + b3 * d3) c8 -= a4 * skewX, d3 -= b3 * skewX;
  if (scaleY = Math.sqrt(c8 * c8 + d3 * d3)) c8 /= scaleY, d3 /= scaleY, skewX /= scaleY;
  if (a4 * d3 < b3 * c8) a4 = -a4, b3 = -b3, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e8,
    translateY: f7,
    rotate: Math.atan2(b3, a4) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m4 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m4.isIdentity ? identity : decompose_default(m4.a, m4.b, m4.c, m4.d, m4.e, m4.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s3) {
    return s3.length ? s3.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s3, q3) {
    if (xa !== xb || ya !== yb) {
      var i5 = s3.push("translate(", null, pxComma, null, pxParen);
      q3.push({ i: i5 - 4, x: number_default(xa, xb) }, { i: i5 - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s3.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a4, b3, s3, q3) {
    if (a4 !== b3) {
      if (a4 - b3 > 180) b3 += 360;
      else if (b3 - a4 > 180) a4 += 360;
      q3.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default(a4, b3) });
    } else if (b3) {
      s3.push(pop(s3) + "rotate(" + b3 + degParen);
    }
  }
  function skewX(a4, b3, s3, q3) {
    if (a4 !== b3) {
      q3.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default(a4, b3) });
    } else if (b3) {
      s3.push(pop(s3) + "skewX(" + b3 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s3, q3) {
    if (xa !== xb || ya !== yb) {
      var i5 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
      q3.push({ i: i5 - 4, x: number_default(xa, xb) }, { i: i5 - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a4, b3) {
    var s3 = [], q3 = [];
    a4 = parse(a4), b3 = parse(b3);
    translate(a4.translateX, a4.translateY, b3.translateX, b3.translateY, s3, q3);
    rotate(a4.rotate, b3.rotate, s3, q3);
    skewX(a4.skewX, b3.skewX, s3, q3);
    scale(a4.scaleX, a4.scaleY, b3.scaleX, b3.scaleY, s3, q3);
    a4 = b3 = null;
    return function(t7) {
      var i5 = -1, n9 = q3.length, o8;
      while (++i5 < n9) s3[(o8 = q3[i5]).i] = o8.x(t7);
      return s3.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-timer/src/timer.js
var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1e3;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f7) {
  setTimeout(f7, 17);
};
function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
  clockNow = 0;
}
function Timer() {
  this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay2, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay2 == null ? 0 : +delay2);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};
function timer(callback, delay2, time) {
  var t7 = new Timer();
  t7.restart(callback, delay2, time);
  return t7;
}
function timerFlush() {
  now();
  ++frame;
  var t7 = taskHead, e8;
  while (t7) {
    if ((e8 = clockNow - t7._time) >= 0) t7._call.call(null, e8);
    t7 = t7._next;
  }
  --frame;
}
function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}
function poke() {
  var now3 = clock.now(), delay2 = now3 - clockLast;
  if (delay2 > pokeDelay) clockSkew -= delay2, clockLast = now3;
}
function nap() {
  var t0, t1 = taskHead, t22, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t22 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t22 : taskHead = t22;
    }
  }
  taskTail = t0;
  sleep(time);
}
function sleep(time) {
  if (frame) return;
  if (timeout) timeout = clearTimeout(timeout);
  var delay2 = time - clockNow;
  if (delay2 > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

// node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay2, time) {
  var t7 = new Timer();
  delay2 = delay2 == null ? 0 : +delay2;
  t7.restart(function(elapsed) {
    t7.stop();
    callback(elapsed + delay2);
  }, delay2, time);
  return t7;
}

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default2("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id4, index2, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id4 in schedules) return;
  create(node, id4, {
    name,
    index: index2,
    // For context during callback.
    group,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id4) {
  var schedule = get2(node, id4);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set2(node, id4) {
  var schedule = get2(node, id4);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get2(node, id4) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id4])) throw new Error("transition not found");
  return schedule;
}
function create(node, id4, self) {
  var schedules = node.__transition, tween;
  schedules[id4] = self;
  self.timer = timer(schedule, 0, self.time);
  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start2, self.delay, self.time);
    if (self.delay <= elapsed) start2(elapsed - self.delay);
  }
  function start2(elapsed) {
    var i5, j3, n9, o8;
    if (self.state !== SCHEDULED) return stop();
    for (i5 in schedules) {
      o8 = schedules[i5];
      if (o8.name !== self.name) continue;
      if (o8.state === STARTED) return timeout_default(start2);
      if (o8.state === RUNNING) {
        o8.state = ENDED;
        o8.timer.stop();
        o8.on.call("interrupt", node, node.__data__, o8.index, o8.group);
        delete schedules[i5];
      } else if (+i5 < id4) {
        o8.state = ENDED;
        o8.timer.stop();
        o8.on.call("cancel", node, node.__data__, o8.index, o8.group);
        delete schedules[i5];
      }
    }
    timeout_default(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return;
    self.state = STARTED;
    tween = new Array(n9 = self.tween.length);
    for (i5 = 0, j3 = -1; i5 < n9; ++i5) {
      if (o8 = self.tween[i5].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j3] = o8;
      }
    }
    tween.length = j3 + 1;
  }
  function tick(elapsed) {
    var t7 = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i5 = -1, n9 = tween.length;
    while (++i5 < n9) {
      tween[i5].call(node, t7);
    }
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }
  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id4];
    for (var i5 in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i5;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i5 in schedules) {
    if ((schedule = schedules[i5]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i5];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id4, name) {
  var tween0, tween1;
  return function() {
    var schedule = set2(this, id4), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i5 = 0, n9 = tween1.length; i5 < n9; ++i5) {
        if (tween1[i5].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i5, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id4, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set2(this, id4), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t7 = { name, value }, i5 = 0, n9 = tween1.length; i5 < n9; ++i5) {
        if (tween1[i5].name === name) {
          tween1[i5] = t7;
          break;
        }
      }
      if (i5 === n9) tween1.push(t7);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id4 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get2(this.node(), id4).tween;
    for (var i5 = 0, n9 = tween.length, t7; i5 < n9; ++i5) {
      if ((t7 = tween[i5]).name === name) {
        return t7.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id4, name, value));
}
function tweenValue(transition2, name, value) {
  var id4 = transition2._id;
  transition2.each(function() {
    var schedule = set2(this, id4);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get2(node, id4).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a4, b3) {
  var c8;
  return (typeof b3 === "number" ? number_default : b3 instanceof color ? rgb_default : (c8 = color(b3)) ? (b3 = c8, rgb_default) : string_default)(a4, b3);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i5 = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i5, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i5, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i5) {
  return function(t7) {
    this.setAttribute(name, i5.call(this, t7));
  };
}
function attrInterpolateNS(fullname, i5) {
  return function(t7) {
    this.setAttributeNS(fullname.space, fullname.local, i5.call(this, t7));
  };
}
function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i5 = value.apply(this, arguments);
    if (i5 !== i0) t0 = (i0 = i5) && attrInterpolateNS(fullname, i5);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i5 = value.apply(this, arguments);
    if (i5 !== i0) t0 = (i0 = i5) && attrInterpolate(name, i5);
    return t0;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id4, value) {
  return function() {
    init(this, id4).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id4, value) {
  return value = +value, function() {
    init(this, id4).delay = value;
  };
}
function delay_default(value) {
  var id4 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id4, value)) : get2(this.node(), id4).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id4, value) {
  return function() {
    set2(this, id4).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id4, value) {
  return value = +value, function() {
    set2(this, id4).duration = value;
  };
}
function duration_default(value) {
  var id4 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id4, value)) : get2(this.node(), id4).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id4, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set2(this, id4).ease = value;
  };
}
function ease_default(value) {
  var id4 = this._id;
  return arguments.length ? this.each(easeConstant(id4, value)) : get2(this.node(), id4).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id4, value) {
  return function() {
    var v3 = value.apply(this, arguments);
    if (typeof v3 !== "function") throw new Error();
    set2(this, id4).ease = v3;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups = this._groups, m4 = groups.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, subgroup = subgroups[j3] = [], node, i5 = 0; i5 < n9; ++i5) {
      if ((node = group[i5]) && match.call(node, node.__data__, i5, group)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m4 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m4; ++j3) {
    for (var group0 = groups0[j3], group1 = groups1[j3], n9 = group0.length, merge = merges[j3] = new Array(n9), node, i5 = 0; i5 < n9; ++i5) {
      if (node = group0[i5] || group1[i5]) {
        merge[i5] = node;
      }
    }
  }
  for (; j3 < m0; ++j3) {
    merges[j3] = groups0[j3];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t7) {
    var i5 = t7.indexOf(".");
    if (i5 >= 0) t7 = t7.slice(0, i5);
    return !t7 || t7 === "start";
  });
}
function onFunction(id4, name, listener) {
  var on0, on1, sit = start(name) ? init : set2;
  return function() {
    var schedule = sit(this, id4), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id4 = this._id;
  return arguments.length < 2 ? get2(this.node(), id4).on.on(name) : this.each(onFunction(id4, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id4) {
  return function() {
    var parent = this.parentNode;
    for (var i5 in this.__transition) if (+i5 !== id4) return;
    if (parent) parent.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id4 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups = this._groups, m4 = groups.length, subgroups = new Array(m4), j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, subgroup = subgroups[j3] = new Array(n9), node, subnode, i5 = 0; i5 < n9; ++i5) {
      if ((node = group[i5]) && (subnode = select.call(node, node.__data__, i5, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i5] = subnode;
        schedule_default(subgroup[i5], name, id4, i5, subgroup, get2(node, id4));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id4);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default2(select) {
  var name = this._name, id4 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups = this._groups, m4 = groups.length, subgroups = [], parents = [], j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, node, i5 = 0; i5 < n9; ++i5) {
      if (node = group[i5]) {
        for (var children2 = select.call(node, node.__data__, i5, group), child, inherit2 = get2(node, id4), k3 = 0, l3 = children2.length; k3 < l3; ++k3) {
          if (child = children2[k3]) {
            schedule_default(child, name, id4, k3, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id4);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id4, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
  return function() {
    var schedule = set2(this, id4), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i5 = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i5)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i5, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i5, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i5, priority) {
  return function(t7) {
    this.style.setProperty(name, i5.call(this, t7), priority);
  };
}
function styleTween(name, value, priority) {
  var t7, i0;
  function tween() {
    var i5 = value.apply(this, arguments);
    if (i5 !== i0) t7 = (i0 = i5) && styleInterpolate(name, i5, priority);
    return t7;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i5) {
  return function(t7) {
    this.textContent = i5.call(this, t7);
  };
}
function textTween(value) {
  var t0, i0;
  function tween() {
    var i5 = value.apply(this, arguments);
    if (i5 !== i0) t0 = (i0 = i5) && textInterpolate(i5);
    return t0;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups = this._groups, m4 = groups.length, j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, node, i5 = 0; i5 < n9; ++i5) {
      if (node = group[i5]) {
        var inherit2 = get2(node, id0);
        schedule_default(node, name, id1, i5, group, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id4 = that._id, size3 = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = { value: reject }, end = { value: function() {
      if (--size3 === 0) resolve();
    } };
    that.each(function() {
      var schedule = set2(this, id4), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size3 === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id4) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id4;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default2,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t7) {
  return ((t7 *= 2) <= 1 ? t7 * t7 * t7 : (t7 -= 2) * t7 * t7 + 2) / 2;
}

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id4) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id4])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id4} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id4, timing;
  if (name instanceof Transition) {
    id4 = name._id, name = name._name;
  } else {
    id4 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups = this._groups, m4 = groups.length, j3 = 0; j3 < m4; ++j3) {
    for (var group = groups[j3], n9 = group.length, node, i5 = 0; i5 < n9; ++i5) {
      if (node = group[i5]) {
        schedule_default(node, name, id4, i5, group, timing || inherit(node, id4));
      }
    }
  }
  return new Transition(groups, this._parents, name, id4);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-brush/src/brush.js
var { abs, max: max2, min: min2 } = Math;
function number1(e8) {
  return [+e8[0], +e8[1]];
}
function number2(e8) {
  return [number1(e8[0]), number1(e8[1])];
}
var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x5, e8) {
    return x5 == null ? null : [[+x5[0], e8[0][1]], [+x5[1], e8[1][1]]];
  },
  output: function(xy) {
    return xy && [xy[0][0], xy[1][0]];
  }
};
var Y3 = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y5, e8) {
    return y5 == null ? null : [[e8[0][0], +y5[0]], [e8[1][0], +y5[1]]];
  },
  output: function(xy) {
    return xy && [xy[0][1], xy[1][1]];
  }
};
var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) {
    return xy == null ? null : number2(xy);
  },
  output: function(xy) {
    return xy;
  }
};
function type(t7) {
  return { type: t7 };
}

// node_modules/d3/node_modules/d3-force/src/center.js
function center_default(x5, y5) {
  var nodes, strength = 1;
  if (x5 == null) x5 = 0;
  if (y5 == null) y5 = 0;
  function force() {
    var i5, n9 = nodes.length, node, sx = 0, sy = 0;
    for (i5 = 0; i5 < n9; ++i5) {
      node = nodes[i5], sx += node.x, sy += node.y;
    }
    for (sx = (sx / n9 - x5) * strength, sy = (sy / n9 - y5) * strength, i5 = 0; i5 < n9; ++i5) {
      node = nodes[i5], node.x -= sx, node.y -= sy;
    }
  }
  force.initialize = function(_3) {
    nodes = _3;
  };
  force.x = function(_3) {
    return arguments.length ? (x5 = +_3, force) : x5;
  };
  force.y = function(_3) {
    return arguments.length ? (y5 = +_3, force) : y5;
  };
  force.strength = function(_3) {
    return arguments.length ? (strength = +_3, force) : strength;
  };
  return force;
}

// node_modules/d3/node_modules/d3-quadtree/src/add.js
function add_default(d3) {
  const x5 = +this._x.call(null, d3), y5 = +this._y.call(null, d3);
  return add(this.cover(x5, y5), x5, y5, d3);
}
function add(tree, x5, y5, d3) {
  if (isNaN(x5) || isNaN(y5)) return tree;
  var parent, node = tree._root, leaf = { data: d3 }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i5, j3;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x5 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y5 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (parent = node, !(node = node[i5 = bottom << 1 | right])) return parent[i5] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x5 === xp && y5 === yp) return leaf.next = node, parent ? parent[i5] = leaf : tree._root = leaf, tree;
  do {
    parent = parent ? parent[i5] = new Array(4) : tree._root = new Array(4);
    if (right = x5 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y5 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
  } while ((i5 = bottom << 1 | right) === (j3 = (yp >= ym) << 1 | xp >= xm));
  return parent[j3] = node, parent[i5] = leaf, tree;
}
function addAll(data) {
  var d3, i5, n9 = data.length, x5, y5, xz = new Array(n9), yz = new Array(n9), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (i5 = 0; i5 < n9; ++i5) {
    if (isNaN(x5 = +this._x.call(null, d3 = data[i5])) || isNaN(y5 = +this._y.call(null, d3))) continue;
    xz[i5] = x5;
    yz[i5] = y5;
    if (x5 < x0) x0 = x5;
    if (x5 > x1) x1 = x5;
    if (y5 < y0) y0 = y5;
    if (y5 > y1) y1 = y5;
  }
  if (x0 > x1 || y0 > y1) return this;
  this.cover(x0, y0).cover(x1, y1);
  for (i5 = 0; i5 < n9; ++i5) {
    add(this, xz[i5], yz[i5], data[i5]);
  }
  return this;
}

// node_modules/d3/node_modules/d3-quadtree/src/cover.js
function cover_default(x5, y5) {
  if (isNaN(x5 = +x5) || isNaN(y5 = +y5)) return this;
  var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x5)) + 1;
    y1 = (y0 = Math.floor(y5)) + 1;
  } else {
    var z3 = x1 - x0 || 1, node = this._root, parent, i5;
    while (x0 > x5 || x5 >= x1 || y0 > y5 || y5 >= y1) {
      i5 = (y5 < y0) << 1 | x5 < x0;
      parent = new Array(4), parent[i5] = node, node = parent, z3 *= 2;
      switch (i5) {
        case 0:
          x1 = x0 + z3, y1 = y0 + z3;
          break;
        case 1:
          x0 = x1 - z3, y1 = y0 + z3;
          break;
        case 2:
          x1 = x0 + z3, y0 = y1 - z3;
          break;
        case 3:
          x0 = x1 - z3, y0 = y1 - z3;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}

// node_modules/d3/node_modules/d3-quadtree/src/data.js
function data_default2() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}

// node_modules/d3/node_modules/d3-quadtree/src/extent.js
function extent_default(_3) {
  return arguments.length ? this.cover(+_3[0][0], +_3[0][1]).cover(+_3[1][0], +_3[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}

// node_modules/d3/node_modules/d3-quadtree/src/quad.js
function quad_default(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}

// node_modules/d3/node_modules/d3-quadtree/src/find.js
function find_default(x5, y5, radius) {
  var data, x0 = this._x0, y0 = this._y0, x1, y1, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q3, i5;
  if (node) quads.push(new quad_default(node, x0, y0, x32, y32));
  if (radius == null) radius = Infinity;
  else {
    x0 = x5 - radius, y0 = y5 - radius;
    x32 = x5 + radius, y32 = y5 + radius;
    radius *= radius;
  }
  while (q3 = quads.pop()) {
    if (!(node = q3.node) || (x1 = q3.x0) > x32 || (y1 = q3.y0) > y32 || (x22 = q3.x1) < x0 || (y22 = q3.y1) < y0) continue;
    if (node.length) {
      var xm = (x1 + x22) / 2, ym = (y1 + y22) / 2;
      quads.push(
        new quad_default(node[3], xm, ym, x22, y22),
        new quad_default(node[2], x1, ym, xm, y22),
        new quad_default(node[1], xm, y1, x22, ym),
        new quad_default(node[0], x1, y1, xm, ym)
      );
      if (i5 = (y5 >= ym) << 1 | x5 >= xm) {
        q3 = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i5];
        quads[quads.length - 1 - i5] = q3;
      }
    } else {
      var dx = x5 - +this._x.call(null, node.data), dy = y5 - +this._y.call(null, node.data), d22 = dx * dx + dy * dy;
      if (d22 < radius) {
        var d3 = Math.sqrt(radius = d22);
        x0 = x5 - d3, y0 = y5 - d3;
        x32 = x5 + d3, y32 = y5 + d3;
        data = node.data;
      }
    }
  }
  return data;
}

// node_modules/d3/node_modules/d3-quadtree/src/remove.js
function remove_default3(d3) {
  if (isNaN(x5 = +this._x.call(null, d3)) || isNaN(y5 = +this._y.call(null, d3))) return this;
  var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x5, y5, xm, ym, right, bottom, i5, j3;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x5 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y5 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (!(parent = node, node = node[i5 = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[i5 + 1 & 3] || parent[i5 + 2 & 3] || parent[i5 + 3 & 3]) retainer = parent, j3 = i5;
  }
  while (node.data !== d3) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent) return this._root = next, this;
  next ? parent[i5] = next : delete parent[i5];
  if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
    if (retainer) retainer[j3] = node;
    else this._root = node;
  }
  return this;
}
function removeAll(data) {
  for (var i5 = 0, n9 = data.length; i5 < n9; ++i5) this.remove(data[i5]);
  return this;
}

// node_modules/d3/node_modules/d3-quadtree/src/root.js
function root_default() {
  return this._root;
}

// node_modules/d3/node_modules/d3-quadtree/src/size.js
function size_default2() {
  var size3 = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size3;
    while (node = node.next);
  });
  return size3;
}

// node_modules/d3/node_modules/d3-quadtree/src/visit.js
function visit_default(callback) {
  var quads = [], q3, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
  while (q3 = quads.pop()) {
    if (!callback(node = q3.node, x0 = q3.x0, y0 = q3.y0, x1 = q3.x1, y1 = q3.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new quad_default(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new quad_default(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new quad_default(child, x0, y0, xm, ym));
    }
  }
  return this;
}

// node_modules/d3/node_modules/d3-quadtree/src/visitAfter.js
function visitAfter_default(callback) {
  var quads = [], next = [], q3;
  if (this._root) quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q3 = quads.pop()) {
    var node = q3.node;
    if (node.length) {
      var child, x0 = q3.x0, y0 = q3.y0, x1 = q3.x1, y1 = q3.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new quad_default(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new quad_default(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new quad_default(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new quad_default(child, xm, ym, x1, y1));
    }
    next.push(q3);
  }
  while (q3 = next.pop()) {
    callback(q3.node, q3.x0, q3.y0, q3.x1, q3.y1);
  }
  return this;
}

// node_modules/d3/node_modules/d3-quadtree/src/x.js
function defaultX(d3) {
  return d3[0];
}
function x_default(_3) {
  return arguments.length ? (this._x = _3, this) : this._x;
}

// node_modules/d3/node_modules/d3-quadtree/src/y.js
function defaultY(d3) {
  return d3[1];
}
function y_default(_3) {
  return arguments.length ? (this._y = _3, this) : this._y;
}

// node_modules/d3/node_modules/d3-quadtree/src/quadtree.js
function quadtree(nodes, x5, y5) {
  var tree = new Quadtree(x5 == null ? defaultX : x5, y5 == null ? defaultY : y5, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Quadtree(x5, y5, x0, y0, x1, y1) {
  this._x = x5;
  this._y = y5;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy = { data: leaf.data }, next = copy;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy;
}
var treeProto = quadtree.prototype = Quadtree.prototype;
treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
  if (!node) return copy;
  if (!node.length) return copy._root = leaf_copy(node), copy;
  nodes = [{ source: node, target: copy._root = new Array(4) }];
  while (node = nodes.pop()) {
    for (var i5 = 0; i5 < 4; ++i5) {
      if (child = node.source[i5]) {
        if (child.length) nodes.push({ source: child, target: node.target[i5] = new Array(4) });
        else node.target[i5] = leaf_copy(child);
      }
    }
  }
  return copy;
};
treeProto.add = add_default;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default2;
treeProto.extent = extent_default;
treeProto.find = find_default;
treeProto.remove = remove_default3;
treeProto.removeAll = removeAll;
treeProto.root = root_default;
treeProto.size = size_default2;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;
treeProto.y = y_default;

// node_modules/d3/node_modules/d3-force/src/constant.js
function constant_default5(x5) {
  return function() {
    return x5;
  };
}

// node_modules/d3/node_modules/d3-force/src/jiggle.js
function jiggle_default(random) {
  return (random() - 0.5) * 1e-6;
}

// node_modules/d3/node_modules/d3-force/src/collide.js
function x3(d3) {
  return d3.x + d3.vx;
}
function y3(d3) {
  return d3.y + d3.vy;
}
function collide_default(radius) {
  var nodes, radii, random, strength = 1, iterations = 1;
  if (typeof radius !== "function") radius = constant_default5(radius == null ? 1 : +radius);
  function force() {
    var i5, n9 = nodes.length, tree, node, xi, yi, ri, ri2;
    for (var k3 = 0; k3 < iterations; ++k3) {
      tree = quadtree(nodes, x3, y3).visitAfter(prepare);
      for (i5 = 0; i5 < n9; ++i5) {
        node = nodes[i5];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }
    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r9 = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x5 = xi - data.x - data.vx, y5 = yi - data.y - data.vy, l3 = x5 * x5 + y5 * y5;
          if (l3 < r9 * r9) {
            if (x5 === 0) x5 = jiggle_default(random), l3 += x5 * x5;
            if (y5 === 0) y5 = jiggle_default(random), l3 += y5 * y5;
            l3 = (r9 - (l3 = Math.sqrt(l3))) / l3 * strength;
            node.vx += (x5 *= l3) * (r9 = (rj *= rj) / (ri2 + rj));
            node.vy += (y5 *= l3) * r9;
            data.vx -= x5 * (r9 = 1 - r9);
            data.vy -= y5 * r9;
          }
        }
        return;
      }
      return x0 > xi + r9 || x1 < xi - r9 || y0 > yi + r9 || y1 < yi - r9;
    }
  }
  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i5 = quad.r = 0; i5 < 4; ++i5) {
      if (quad[i5] && quad[i5].r > quad.r) {
        quad.r = quad[i5].r;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i5, n9 = nodes.length, node;
    radii = new Array(n9);
    for (i5 = 0; i5 < n9; ++i5) node = nodes[i5], radii[node.index] = +radius(node, i5, nodes);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.iterations = function(_3) {
    return arguments.length ? (iterations = +_3, force) : iterations;
  };
  force.strength = function(_3) {
    return arguments.length ? (strength = +_3, force) : strength;
  };
  force.radius = function(_3) {
    return arguments.length ? (radius = typeof _3 === "function" ? _3 : constant_default5(+_3), initialize(), force) : radius;
  };
  return force;
}

// node_modules/d3/node_modules/d3-force/src/link.js
function index(d3) {
  return d3.index;
}
function find2(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}
function link_default(links) {
  var id4 = index, strength = defaultStrength, strengths, distance = constant_default5(30), distances, nodes, count, bias, random, iterations = 1;
  if (links == null) links = [];
  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }
  function force(alpha) {
    for (var k3 = 0, n9 = links.length; k3 < iterations; ++k3) {
      for (var i5 = 0, link, source, target, x5, y5, l3, b3; i5 < n9; ++i5) {
        link = links[i5], source = link.source, target = link.target;
        x5 = target.x + target.vx - source.x - source.vx || jiggle_default(random);
        y5 = target.y + target.vy - source.y - source.vy || jiggle_default(random);
        l3 = Math.sqrt(x5 * x5 + y5 * y5);
        l3 = (l3 - distances[i5]) / l3 * alpha * strengths[i5];
        x5 *= l3, y5 *= l3;
        target.vx -= x5 * (b3 = bias[i5]);
        target.vy -= y5 * b3;
        source.vx += x5 * (b3 = 1 - b3);
        source.vy += y5 * b3;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i5, n9 = nodes.length, m4 = links.length, nodeById = new Map(nodes.map((d3, i6) => [id4(d3, i6, nodes), d3])), link;
    for (i5 = 0, count = new Array(n9); i5 < m4; ++i5) {
      link = links[i5], link.index = i5;
      if (typeof link.source !== "object") link.source = find2(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find2(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }
    for (i5 = 0, bias = new Array(m4); i5 < m4; ++i5) {
      link = links[i5], bias[i5] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }
    strengths = new Array(m4), initializeStrength();
    distances = new Array(m4), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes) return;
    for (var i5 = 0, n9 = links.length; i5 < n9; ++i5) {
      strengths[i5] = +strength(links[i5], i5, links);
    }
  }
  function initializeDistance() {
    if (!nodes) return;
    for (var i5 = 0, n9 = links.length; i5 < n9; ++i5) {
      distances[i5] = +distance(links[i5], i5, links);
    }
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.links = function(_3) {
    return arguments.length ? (links = _3, initialize(), force) : links;
  };
  force.id = function(_3) {
    return arguments.length ? (id4 = _3, force) : id4;
  };
  force.iterations = function(_3) {
    return arguments.length ? (iterations = +_3, force) : iterations;
  };
  force.strength = function(_3) {
    return arguments.length ? (strength = typeof _3 === "function" ? _3 : constant_default5(+_3), initializeStrength(), force) : strength;
  };
  force.distance = function(_3) {
    return arguments.length ? (distance = typeof _3 === "function" ? _3 : constant_default5(+_3), initializeDistance(), force) : distance;
  };
  return force;
}

// node_modules/d3/node_modules/d3-timer/src/timer.js
var frame2 = 0;
var timeout2 = 0;
var interval2 = 0;
var pokeDelay2 = 1e3;
var taskHead2;
var taskTail2;
var clockLast2 = 0;
var clockNow2 = 0;
var clockSkew2 = 0;
var clock2 = typeof performance === "object" && performance.now ? performance : Date;
var setFrame2 = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f7) {
  setTimeout(f7, 17);
};
function now2() {
  return clockNow2 || (setFrame2(clearNow2), clockNow2 = clock2.now() + clockSkew2);
}
function clearNow2() {
  clockNow2 = 0;
}
function Timer2() {
  this._call = this._time = this._next = null;
}
Timer2.prototype = timer2.prototype = {
  constructor: Timer2,
  restart: function(callback, delay2, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now2() : +time) + (delay2 == null ? 0 : +delay2);
    if (!this._next && taskTail2 !== this) {
      if (taskTail2) taskTail2._next = this;
      else taskHead2 = this;
      taskTail2 = this;
    }
    this._call = callback;
    this._time = time;
    sleep2();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep2();
    }
  }
};
function timer2(callback, delay2, time) {
  var t7 = new Timer2();
  t7.restart(callback, delay2, time);
  return t7;
}
function timerFlush2() {
  now2();
  ++frame2;
  var t7 = taskHead2, e8;
  while (t7) {
    if ((e8 = clockNow2 - t7._time) >= 0) t7._call.call(void 0, e8);
    t7 = t7._next;
  }
  --frame2;
}
function wake2() {
  clockNow2 = (clockLast2 = clock2.now()) + clockSkew2;
  frame2 = timeout2 = 0;
  try {
    timerFlush2();
  } finally {
    frame2 = 0;
    nap2();
    clockNow2 = 0;
  }
}
function poke2() {
  var now3 = clock2.now(), delay2 = now3 - clockLast2;
  if (delay2 > pokeDelay2) clockSkew2 -= delay2, clockLast2 = now3;
}
function nap2() {
  var t0, t1 = taskHead2, t22, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t22 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t22 : taskHead2 = t22;
    }
  }
  taskTail2 = t0;
  sleep2(time);
}
function sleep2(time) {
  if (frame2) return;
  if (timeout2) timeout2 = clearTimeout(timeout2);
  var delay2 = time - clockNow2;
  if (delay2 > 24) {
    if (time < Infinity) timeout2 = setTimeout(wake2, time - clock2.now() - clockSkew2);
    if (interval2) interval2 = clearInterval(interval2);
  } else {
    if (!interval2) clockLast2 = clock2.now(), interval2 = setInterval(poke2, pokeDelay2);
    frame2 = 1, setFrame2(wake2);
  }
}

// node_modules/d3/node_modules/d3-force/src/lcg.js
var a3 = 1664525;
var c7 = 1013904223;
var m3 = 4294967296;
function lcg_default() {
  let s3 = 1;
  return () => (s3 = (a3 * s3 + c7) % m3) / m3;
}

// node_modules/d3/node_modules/d3-force/src/simulation.js
function x4(d3) {
  return d3.x;
}
function y4(d3) {
  return d3.y;
}
var initialRadius = 10;
var initialAngle = Math.PI * (3 - Math.sqrt(5));
function simulation_default(nodes) {
  var simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer2(step), event = dispatch_default2("tick", "end"), random = lcg_default();
  if (nodes == null) nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations) {
    var i5, n9 = nodes.length, node;
    if (iterations === void 0) iterations = 1;
    for (var k3 = 0; k3 < iterations; ++k3) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function(force) {
        force(alpha);
      });
      for (i5 = 0; i5 < n9; ++i5) {
        node = nodes[i5];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i5 = 0, n9 = nodes.length, node; i5 < n9; ++i5) {
      node = nodes[i5], node.index = i5;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i5), angle = i5 * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    nodes: function(_3) {
      return arguments.length ? (nodes = _3, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function(_3) {
      return arguments.length ? (alpha = +_3, simulation) : alpha;
    },
    alphaMin: function(_3) {
      return arguments.length ? (alphaMin = +_3, simulation) : alphaMin;
    },
    alphaDecay: function(_3) {
      return arguments.length ? (alphaDecay = +_3, simulation) : +alphaDecay;
    },
    alphaTarget: function(_3) {
      return arguments.length ? (alphaTarget = +_3, simulation) : alphaTarget;
    },
    velocityDecay: function(_3) {
      return arguments.length ? (velocityDecay = 1 - _3, simulation) : 1 - velocityDecay;
    },
    randomSource: function(_3) {
      return arguments.length ? (random = _3, forces.forEach(initializeForce), simulation) : random;
    },
    force: function(name, _3) {
      return arguments.length > 1 ? (_3 == null ? forces.delete(name) : forces.set(name, initializeForce(_3)), simulation) : forces.get(name);
    },
    find: function(x5, y5, radius) {
      var i5 = 0, n9 = nodes.length, dx, dy, d22, node, closest;
      if (radius == null) radius = Infinity;
      else radius *= radius;
      for (i5 = 0; i5 < n9; ++i5) {
        node = nodes[i5];
        dx = x5 - node.x;
        dy = y5 - node.y;
        d22 = dx * dx + dy * dy;
        if (d22 < radius) closest = node, radius = d22;
      }
      return closest;
    },
    on: function(name, _3) {
      return arguments.length > 1 ? (event.on(name, _3), simulation) : event.on(name);
    }
  };
}

// node_modules/d3/node_modules/d3-force/src/manyBody.js
function manyBody_default() {
  var nodes, node, random, alpha, strength = constant_default5(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_3) {
    var i5, n9 = nodes.length, tree = quadtree(nodes, x4, y4).visitAfter(accumulate);
    for (alpha = _3, i5 = 0; i5 < n9; ++i5) node = nodes[i5], tree.visit(apply);
  }
  function initialize() {
    if (!nodes) return;
    var i5, n9 = nodes.length, node2;
    strengths = new Array(n9);
    for (i5 = 0; i5 < n9; ++i5) node2 = nodes[i5], strengths[node2.index] = +strength(node2, i5, nodes);
  }
  function accumulate(quad) {
    var strength2 = 0, q3, c8, weight = 0, x5, y5, i5;
    if (quad.length) {
      for (x5 = y5 = i5 = 0; i5 < 4; ++i5) {
        if ((q3 = quad[i5]) && (c8 = Math.abs(q3.value))) {
          strength2 += q3.value, weight += c8, x5 += c8 * q3.x, y5 += c8 * q3.y;
        }
      }
      quad.x = x5 / weight;
      quad.y = y5 / weight;
    } else {
      q3 = quad;
      q3.x = q3.data.x;
      q3.y = q3.data.y;
      do
        strength2 += strengths[q3.data.index];
      while (q3 = q3.next);
    }
    quad.value = strength2;
  }
  function apply(quad, x1, _3, x22) {
    if (!quad.value) return true;
    var x5 = quad.x - node.x, y5 = quad.y - node.y, w3 = x22 - x1, l3 = x5 * x5 + y5 * y5;
    if (w3 * w3 / theta2 < l3) {
      if (l3 < distanceMax2) {
        if (x5 === 0) x5 = jiggle_default(random), l3 += x5 * x5;
        if (y5 === 0) y5 = jiggle_default(random), l3 += y5 * y5;
        if (l3 < distanceMin2) l3 = Math.sqrt(distanceMin2 * l3);
        node.vx += x5 * quad.value * alpha / l3;
        node.vy += y5 * quad.value * alpha / l3;
      }
      return true;
    } else if (quad.length || l3 >= distanceMax2) return;
    if (quad.data !== node || quad.next) {
      if (x5 === 0) x5 = jiggle_default(random), l3 += x5 * x5;
      if (y5 === 0) y5 = jiggle_default(random), l3 += y5 * y5;
      if (l3 < distanceMin2) l3 = Math.sqrt(distanceMin2 * l3);
    }
    do
      if (quad.data !== node) {
        w3 = strengths[quad.data.index] * alpha / l3;
        node.vx += x5 * w3;
        node.vy += y5 * w3;
      }
    while (quad = quad.next);
  }
  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };
  force.strength = function(_3) {
    return arguments.length ? (strength = typeof _3 === "function" ? _3 : constant_default5(+_3), initialize(), force) : strength;
  };
  force.distanceMin = function(_3) {
    return arguments.length ? (distanceMin2 = _3 * _3, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_3) {
    return arguments.length ? (distanceMax2 = _3 * _3, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_3) {
    return arguments.length ? (theta2 = _3 * _3, force) : Math.sqrt(theta2);
  };
  return force;
}

// node_modules/d3-zoom/src/transform.js
function Transform(k3, x5, y5) {
  this.k = k3;
  this.x = x5;
  this.y = y5;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k3) {
    return k3 === 1 ? this : new Transform(this.k * k3, this.x, this.y);
  },
  translate: function(x5, y5) {
    return x5 === 0 & y5 === 0 ? this : new Transform(this.k, this.x + this.k * x5, this.y + this.k * y5);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x5) {
    return x5 * this.k + this.x;
  },
  applyY: function(y5) {
    return y5 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x5) {
    return (x5 - this.x) / this.k;
  },
  invertY: function(y5) {
    return (y5 - this.y) / this.k;
  },
  rescaleX: function(x5) {
    return x5.copy().domain(x5.range().map(this.invertX, this).map(x5.invert, x5));
  },
  rescaleY: function(y5) {
    return y5.copy().domain(y5.range().map(this.invertY, this).map(y5.invert, y5));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// graph/buildGraph.ts
var initSize = 32;
var emphSize = 34;
function buildChart(svg, width, height, graph) {
  let radius = initSize;
  var simulation = simulation_default(graph.nodes).force("charge", manyBody_default().strength(-500)).force("center", center_default(width / 2, height / 2)).force(
    "collision",
    collide_default().radius(function(d3) {
      return d3.radius;
    })
  ).force(
    "link",
    link_default().id(function(d3) {
      return d3.name;
    }).distance(function() {
      return 150;
    }).links(graph.links)
  ).on("tick", ticked);
  svg.append("line").style("stroke", "lightgreen").style("stroke-width", 0).attr("class", "newlink");
  svg.on("mousemove", function(event) {
    const link2 = svg.select(".newlink");
    if (graph.newLink) {
      link2.style("stroke-width", 10);
      const source = graph.nodes.filter(
        (node2) => node2.name == graph.newLink
      )[0];
      link2.attr("x1", source.x);
      link2.attr("y1", source.y);
      link2.attr("x2", pointer_default(event)[0]);
      link2.attr("y2", pointer_default(event)[1]);
    } else {
      link2.style("stroke-width", 0);
    }
  });
  var glink = svg.on("mousedown", async (d3, i5) => dispatchEvent2(d3, i5, "SVG")).append("g").attr("class", "links").selectAll(".link").data(graph.links).enter();
  var link = glink.append("line").attr("class", function(d3) {
    return "link " + d3.source.name + d3.target.name;
  }).attr("stroke", "lightgray").attr("stroke-width", function(d3) {
    return 10;
  }).on("mousedown", async (d3, i5) => dispatchEvent2(d3, i5, "LINK"));
  var linktext = glink.append("text").attr("class", function(d3) {
    return "linktext " + d3.source.name + d3.target.name;
  }).on("mousedown", async (d3, i5) => dispatchEvent2(d3, i5, "LINK")).attr("text-anchor", "middle").text(function(d3) {
    return d3.weight;
  });
  var gnode = svg.append("g").attr("class", "nodes").selectAll(".node").data(graph.nodes).enter();
  var node = gnode.append("circle").attr("class", function(d3) {
    return "node " + d3.name;
  }).attr("r", radius - 0.75).attr("fill", "white").style("stroke", "black").on("mousedown", async (d3, i5) => dispatchEvent2(d3, i5, "NODE")).call(
    drag_default().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  ).on("mouseout", function(d3) {
    select_default2(this).attr("r", initSize);
  }).on("mouseover", function(d3) {
    select_default2(this).attr("r", emphSize);
  });
  var nodetext = gnode.append("text").attr("text-anchor", "middle").attr("class", function(d3) {
    return "nodetext " + d3.name;
  }).text(function(d3) {
    return d3.name;
  }).on("mousedown", async (d3, i5) => dispatchEvent2(d3, i5, "NODE")).on("mouseover", function(d3, i5) {
    gnode.selectAll(".node." + i5.name).attr("r", emphSize);
  }).on("mouseout", function(d3, i5) {
    gnode.selectAll(".node." + i5.name).attr("r", initSize);
  }).call(
    drag_default().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  );
  var nodesubtext = gnode.append("text").attr("text-anchor", "middle").attr("dy", "0.8em").attr("class", function(d3) {
    return "nodesubtext " + d3.name;
  }).on("mousedown", async (d3, i5) => dispatchEvent2(d3, i5, "NODE")).on("mouseover", function(d3, i5) {
    gnode.selectAll(".node." + i5.name).attr("r", emphSize);
  }).on("mouseout", function(d3, i5) {
    gnode.selectAll(".node." + i5.name).attr("r", initSize);
  }).call(
    drag_default().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  );
  function ticked() {
    nodetext.attr("x", function(d3) {
      return d3.x;
    }).attr("y", function(d3) {
      return d3.y;
    });
    nodesubtext.attr("x", function(d3) {
      return d3.x;
    }).attr("y", function(d3) {
      return d3.y;
    });
    linktext.attr("x", function(d3) {
      return (d3.source.x + d3.target.x) / 2;
    }).attr("y", function(d3) {
      return (d3.source.y + d3.target.y) / 2;
    });
    link.attr("x1", function(d3) {
      return d3.source.x;
    }).attr("y1", function(d3) {
      return d3.source.y;
    }).attr("x2", function(d3) {
      return d3.target.x;
    }).attr("y2", function(d3) {
      return d3.target.y;
    });
    node.attr("cx", function(d3) {
      return d3.x = Math.max(radius, Math.min(width - radius, d3.x));
    }).attr("cy", function(d3) {
      return d3.y = Math.max(radius, Math.min(height - radius, d3.y));
    });
  }
  function dragstarted(event, d3) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d3.fx = d3.x;
    d3.fy = d3.y;
  }
  function dragged(event, d3) {
    d3.fx = event.x;
    d3.fy = event.y;
  }
  function dragended(event, d3) {
    if (!event.active) simulation.alphaTarget(0);
    d3.fx = null;
    d3.fy = null;
  }
}
function dispatchEvent2(d3, i5, type2) {
  const event = new CustomEvent("svg-graph-event", {
    bubbles: true,
    composed: true,
    detail: { data: i5, type: type2 }
  });
  d3.srcElement.dispatchEvent(event);
}

// components/graph_component.ts
var _graph_dec3, _height_dec, _width_dec, _a4, _Graph_decorators, _init4, _width, _height;
_Graph_decorators = [t3("display-graph")];
var Graph = class extends (_a4 = LitElementWw, _width_dec = [n8()], _height_dec = [n8()], _graph_dec3 = [n8({ type: Object })], _a4) {
  constructor() {
    super(...arguments);
    __runInitializers(_init4, 5, this);
    __privateAdd(this, _width, __runInitializers(_init4, 8, this, 600)), __runInitializers(_init4, 11, this);
    __privateAdd(this, _height, __runInitializers(_init4, 12, this, 600)), __runInitializers(_init4, 15, this);
    __publicField(this, "_graph", {
      newLink: "",
      nodes: [],
      links: []
    });
  }
  get graph() {
    return this._graph;
  }
  set graph(value) {
    if (!value) {
      this._graph = {
        newLink: "",
        nodes: [],
        links: []
      };
    } else {
      this._graph = value;
    }
  }
  updated() {
    let svg = select_default2(this.shadowRoot.querySelectorAll(".chart")[0]).attr("width", this.width).attr("height", this.height);
    svg.selectAll("*").remove();
    console.log("graph", { ...this.graph });
    buildChart(svg, this.width, this.height, this.graph);
    const event = new CustomEvent("svg-update", {
      bubbles: true,
      composed: true,
      detail: svg
    });
    this.dispatchEvent(event);
  }
  render() {
    return ke2`<svg class="chart"></svg>`;
  }
};
_init4 = __decoratorStart(_a4);
_width = new WeakMap();
_height = new WeakMap();
__decorateElement(_init4, 4, "width", _width_dec, Graph, _width);
__decorateElement(_init4, 4, "height", _height_dec, Graph, _height);
__decorateElement(_init4, 3, "graph", _graph_dec3, Graph);
Graph = __decorateElement(_init4, 0, "Graph", _Graph_decorators, Graph);
__publicField(Graph, "styles", i`
        svg {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `);
__runInitializers(_init4, 1, Graph);

// graph/colorGraphForLinkAnimation.ts
async function colorGraphForLinkAnimation(svg, links, colors) {
  let gnode = svg.selectAll("g");
  let nodes = gnode.selectAll(".node");
  nodes.style("fill", "white");
  gnode.selectAll(".link").each(function(d3, _3) {
    if (links.every(
      (link) => link.source !== d3.source.name || link.target !== d3.target.name
    )) {
      select_default2(this).attr("stroke", "lightgray");
    }
  });
  for (let i5 = 0; i5 < links.length; i5++) {
    let x5 = gnode.selectAll(
      ".link." + links[i5].source + links[i5].target + ", .link." + links[i5].target + links[i5].source
    );
    x5.transition().attr("stroke", colors[i5]);
  }
}

// graph/colorGraphForNodeAnimation.ts
async function colorGraphForNodeAnimation(svg, names2, colors) {
  let gnode = svg.selectAll("g");
  let links = gnode.selectAll(".link");
  links.attr("stroke", "lightgray");
  gnode.selectAll(".node").each(function(d3, _3) {
    if (!names2.includes(d3.name)) {
      select_default2(this).style("fill", "white");
    }
  });
  for (let i5 = 0; i5 < names2.length; i5++) {
    let x5 = gnode.selectAll(".node." + names2[i5]);
    x5.transition().style("fill", colors[i5]);
  }
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YKKSQ2FG.js
var visually_hidden_styles_default = i`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NZB7GSOD.js
var SlVisuallyHidden = class extends ShoelaceElement {
  render() {
    return ke2` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = [component_styles_default, visually_hidden_styles_default];

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ESELY2US.js
function drag(container, options) {
  function move(pointerEvent) {
    const dims = container.getBoundingClientRect();
    const defaultView = container.ownerDocument.defaultView;
    const offsetX = dims.left + defaultView.scrollX;
    const offsetY = dims.top + defaultView.scrollY;
    const x5 = pointerEvent.pageX - offsetX;
    const y5 = pointerEvent.pageY - offsetY;
    if (options == null ? void 0 : options.onMove) {
      options.onMove(x5, y5);
    }
  }
  function stop() {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", stop);
    if (options == null ? void 0 : options.onStop) {
      options.onStop();
    }
  }
  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("pointerup", stop);
  if ((options == null ? void 0 : options.initialEvent) instanceof PointerEvent) {
    move(options.initialEvent);
  }
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXP7GVU3.js
var dropdown_styles_default = i`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXDTFLWU.js
var computedStyleMap = /* @__PURE__ */ new WeakMap();
function getCachedComputedStyle(el) {
  let computedStyle = computedStyleMap.get(el);
  if (!computedStyle) {
    computedStyle = window.getComputedStyle(el, null);
    computedStyleMap.set(el, computedStyle);
  }
  return computedStyle;
}
function isVisible(el) {
  if (typeof el.checkVisibility === "function") {
    return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
  }
  const computedStyle = getCachedComputedStyle(el);
  return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
}
function isOverflowingAndTabbable(el) {
  const computedStyle = getCachedComputedStyle(el);
  const { overflowY, overflowX } = computedStyle;
  if (overflowY === "scroll" || overflowX === "scroll") {
    return true;
  }
  if (overflowY !== "auto" || overflowX !== "auto") {
    return false;
  }
  const isOverflowingY = el.scrollHeight > el.clientHeight;
  if (isOverflowingY && overflowY === "auto") {
    return true;
  }
  const isOverflowingX = el.scrollWidth > el.clientWidth;
  if (isOverflowingX && overflowX === "auto") {
    return true;
  }
  return false;
}
function isTabbable(el) {
  const tag = el.tagName.toLowerCase();
  const tabindex = Number(el.getAttribute("tabindex"));
  const hasTabindex = el.hasAttribute("tabindex");
  if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) {
    return false;
  }
  if (el.hasAttribute("disabled")) {
    return false;
  }
  if (el.closest("[inert]")) {
    return false;
  }
  if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
    return false;
  }
  if (!isVisible(el)) {
    return false;
  }
  if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
    return true;
  }
  if (el.hasAttribute("tabindex")) {
    return true;
  }
  if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
    return true;
  }
  const isNativelyTabbable = [
    "button",
    "input",
    "select",
    "textarea",
    "a",
    "audio",
    "video",
    "summary",
    "iframe"
  ].includes(tag);
  if (isNativelyTabbable) {
    return true;
  }
  return isOverflowingAndTabbable(el);
}
function getTabbableBoundary(root2) {
  var _a7, _b;
  const tabbableElements = getTabbableElements(root2);
  const start2 = (_a7 = tabbableElements[0]) != null ? _a7 : null;
  const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
  return { start: start2, end };
}
function getSlottedChildrenOutsideRootElement(slotElement, root2) {
  var _a7;
  return ((_a7 = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a7.host) !== root2;
}
function getTabbableElements(root2) {
  const walkedEls = /* @__PURE__ */ new WeakMap();
  const tabbableElements = [];
  function walk(el) {
    if (el instanceof Element) {
      if (el.hasAttribute("inert") || el.closest("[inert]")) {
        return;
      }
      if (walkedEls.has(el)) {
        return;
      }
      walkedEls.set(el, true);
      if (!tabbableElements.includes(el) && isTabbable(el)) {
        tabbableElements.push(el);
      }
      if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root2)) {
        el.assignedElements({ flatten: true }).forEach((assignedEl) => {
          walk(assignedEl);
        });
      }
      if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
        walk(el.shadowRoot);
      }
    }
    for (const e8 of el.children) {
      walk(e8);
    }
  }
  walk(root2);
  return tabbableElements.sort((a4, b3) => {
    const aTabindex = Number(a4.getAttribute("tabindex")) || 0;
    const bTabindex = Number(b3.getAttribute("tabindex")) || 0;
    return bTabindex - aTabindex;
  });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4ZML5342.js
var SlDropdown = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 0;
    this.skidding = 0;
    this.hoist = false;
    this.sync = void 0;
    this.handleKeyDown = (event) => {
      if (this.open && event.key === "Escape") {
        event.stopPropagation();
        this.hide();
        this.focusOnTrigger();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      var _a7;
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.stopPropagation();
        this.focusOnTrigger();
        this.hide();
        return;
      }
      if (event.key === "Tab") {
        if (this.open && ((_a7 = document.activeElement) == null ? void 0 : _a7.tagName.toLowerCase()) === "sl-menu-item") {
          event.preventDefault();
          this.hide();
          this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var _a22, _b, _c;
          const activeElement = ((_a22 = this.containingElement) == null ? void 0 : _a22.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
          if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
            this.hide();
          }
        });
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this.containingElement && !path.includes(this.containingElement)) {
        this.hide();
      }
    };
    this.handlePanelSelect = (event) => {
      const target = event.target;
      if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
        this.hide();
        this.focusOnTrigger();
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      this.popup.active = true;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
  }
  focusOnTrigger() {
    const trigger = this.trigger.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
      this.focusOnTrigger();
    }
  }
  async handleTriggerKeyDown(event) {
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.getAllItems();
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
          await this.updateComplete;
        }
        if (menuItems.length > 0) {
          this.updateComplete.then(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const assignedElements = this.trigger.assignedElements({ flatten: true });
    const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
    let target;
    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        case "sl-button":
        case "sl-icon-button":
          target = accessibleTrigger.button;
          break;
        default:
          target = accessibleTrigger;
      }
      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  /** Shows the dropdown panel. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    var _a7;
    this.panel.addEventListener("sl-select", this.handlePanelSelect);
    if ("CloseWatcher" in window) {
      (_a7 = this.closeWatcher) == null ? void 0 : _a7.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        this.hide();
        this.focusOnTrigger();
      };
    } else {
      this.panel.addEventListener("keydown", this.handleKeyDown);
    }
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    var _a7;
    if (this.panel) {
      this.panel.removeEventListener("sl-select", this.handlePanelSelect);
      this.panel.removeEventListener("keydown", this.handleKeyDown);
    }
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    (_a7 = this.closeWatcher) == null ? void 0 : _a7.destroy();
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      this.emit("sl-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.panel.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.panel.hidden = true;
      this.popup.active = false;
      this.emit("sl-after-hide");
    }
  }
  render() {
    return ke2`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${to(this.sync ? this.sync : void 0)}
        class=${Rt({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
  }
};
SlDropdown.styles = [component_styles_default, dropdown_styles_default];
SlDropdown.dependencies = { "sl-popup": SlPopup };
__decorateClass([
  e6(".dropdown")
], SlDropdown.prototype, "popup", 2);
__decorateClass([
  e6(".dropdown__trigger")
], SlDropdown.prototype, "trigger", 2);
__decorateClass([
  e6(".dropdown__panel")
], SlDropdown.prototype, "panel", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlDropdown.prototype, "open", 2);
__decorateClass([
  n8({ reflect: true })
], SlDropdown.prototype, "placement", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlDropdown.prototype, "disabled", 2);
__decorateClass([
  n8({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], SlDropdown.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  n8({ attribute: false })
], SlDropdown.prototype, "containingElement", 2);
__decorateClass([
  n8({ type: Number })
], SlDropdown.prototype, "distance", 2);
__decorateClass([
  n8({ type: Number })
], SlDropdown.prototype, "skidding", 2);
__decorateClass([
  n8({ type: Boolean })
], SlDropdown.prototype, "hoist", 2);
__decorateClass([
  n8({ reflect: true })
], SlDropdown.prototype, "sync", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDropdown.prototype, "handleOpenChange", 1);
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.O6CEROC7.js
var color_picker_styles_default = i`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HF7GESMZ.js
function clamp2(value, min3, max3) {
  const noNegativeZero = (n9) => Object.is(n9, -0) ? 0 : n9;
  if (value < min3) {
    return noNegativeZero(min3);
  }
  if (value > max3) {
    return noNegativeZero(max3);
  }
  return noNegativeZero(value);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2OUC42YY.js
var button_group_styles_default = i`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RBPP5PLA.js
var SlButtonGroup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.disableRole = false;
    this.label = "";
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", true);
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", false);
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", true);
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", false);
  }
  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      const index2 = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button) {
        button.toggleAttribute("data-sl-button-group__button", true);
        button.toggleAttribute("data-sl-button-group__button--first", index2 === 0);
        button.toggleAttribute("data-sl-button-group__button--inner", index2 > 0 && index2 < slottedElements.length - 1);
        button.toggleAttribute("data-sl-button-group__button--last", index2 === slottedElements.length - 1);
        button.toggleAttribute(
          "data-sl-button-group__button--radio",
          button.tagName.toLowerCase() === "sl-radio-button"
        );
      }
    });
  }
  render() {
    return ke2`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
SlButtonGroup.styles = [component_styles_default, button_group_styles_default];
__decorateClass([
  e6("slot")
], SlButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  r7()
], SlButtonGroup.prototype, "disableRole", 2);
__decorateClass([
  n8()
], SlButtonGroup.prototype, "label", 2);
function findButton(el) {
  var _a7;
  const selector = "sl-button, sl-radio-button";
  return (_a7 = el.closest(selector)) != null ? _a7 : el.querySelector(selector);
}

// node_modules/lit-html/directives/style-map.js
var ee = "important";
var ie = " !" + ee;
var se = e7(class extends i4 {
  constructor(e8) {
    if (super(e8), e8.type !== t5.ATTRIBUTE || "style" !== e8.name || e8.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t7) {
    return Object.keys(t7).reduce((e8, r9) => {
      const s3 = t7[r9];
      return null == s3 ? e8 : e8 + `${r9 = r9.includes("-") ? r9 : r9.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s3};`;
    }, "");
  }
  update(t7, [e8]) {
    const { style: r9 } = t7.element;
    if (void 0 === this.ft) return this.ft = new Set(Object.keys(e8)), this.render(e8);
    for (const t8 of this.ft) null == e8[t8] && (this.ft.delete(t8), t8.includes("-") ? r9.removeProperty(t8) : r9[t8] = null);
    for (const t8 in e8) {
      const s3 = e8[t8];
      if (null != s3) {
        this.ft.add(t8);
        const e9 = "string" == typeof s3 && s3.endsWith(ie);
        t8.includes("-") || e9 ? r9.setProperty(t8, e9 ? s3.slice(0, -11) : s3, e9 ? ee : "") : r9[t8] = s3;
      }
    }
    return R2;
  }
});

// node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n9, max3) {
  if (isOnePointZero(n9)) {
    n9 = "100%";
  }
  const isPercent = isPercentage(n9);
  n9 = max3 === 360 ? n9 : Math.min(max3, Math.max(0, parseFloat(n9)));
  if (isPercent) {
    n9 = parseInt(String(n9 * max3), 10) / 100;
  }
  if (Math.abs(n9 - max3) < 1e-6) {
    return 1;
  }
  if (max3 === 360) {
    n9 = (n9 < 0 ? n9 % max3 + max3 : n9 % max3) / parseFloat(String(max3));
  } else {
    n9 = n9 % max3 / parseFloat(String(max3));
  }
  return n9;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n9) {
  return typeof n9 === "string" && n9.indexOf(".") !== -1 && parseFloat(n9) === 1;
}
function isPercentage(n9) {
  return typeof n9 === "string" && n9.indexOf("%") !== -1;
}
function boundAlpha(a4) {
  a4 = parseFloat(a4);
  if (isNaN(a4) || a4 < 0 || a4 > 1) {
    a4 = 1;
  }
  return a4;
}
function convertToPercentage(n9) {
  if (Number(n9) <= 1) {
    return `${Number(n9) * 100}%`;
  }
  return n9;
}
function pad2(c8) {
  return c8.length === 1 ? "0" + c8 : String(c8);
}

// node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r9, g3, b3) {
  return {
    r: bound01(r9, 255) * 255,
    g: bound01(g3, 255) * 255,
    b: bound01(b3, 255) * 255
  };
}
function rgbToHsl(r9, g3, b3) {
  r9 = bound01(r9, 255);
  g3 = bound01(g3, 255);
  b3 = bound01(b3, 255);
  const max3 = Math.max(r9, g3, b3);
  const min3 = Math.min(r9, g3, b3);
  let h7 = 0;
  let s3 = 0;
  const l3 = (max3 + min3) / 2;
  if (max3 === min3) {
    s3 = 0;
    h7 = 0;
  } else {
    const d3 = max3 - min3;
    s3 = l3 > 0.5 ? d3 / (2 - max3 - min3) : d3 / (max3 + min3);
    switch (max3) {
      case r9:
        h7 = (g3 - b3) / d3 + (g3 < b3 ? 6 : 0);
        break;
      case g3:
        h7 = (b3 - r9) / d3 + 2;
        break;
      case b3:
        h7 = (r9 - g3) / d3 + 4;
        break;
      default:
        break;
    }
    h7 /= 6;
  }
  return { h: h7, s: s3, l: l3 };
}
function hue2rgb(p3, q3, t7) {
  if (t7 < 0) {
    t7 += 1;
  }
  if (t7 > 1) {
    t7 -= 1;
  }
  if (t7 < 1 / 6) {
    return p3 + (q3 - p3) * (6 * t7);
  }
  if (t7 < 1 / 2) {
    return q3;
  }
  if (t7 < 2 / 3) {
    return p3 + (q3 - p3) * (2 / 3 - t7) * 6;
  }
  return p3;
}
function hslToRgb(h7, s3, l3) {
  let r9;
  let g3;
  let b3;
  h7 = bound01(h7, 360);
  s3 = bound01(s3, 100);
  l3 = bound01(l3, 100);
  if (s3 === 0) {
    g3 = l3;
    b3 = l3;
    r9 = l3;
  } else {
    const q3 = l3 < 0.5 ? l3 * (1 + s3) : l3 + s3 - l3 * s3;
    const p3 = 2 * l3 - q3;
    r9 = hue2rgb(p3, q3, h7 + 1 / 3);
    g3 = hue2rgb(p3, q3, h7);
    b3 = hue2rgb(p3, q3, h7 - 1 / 3);
  }
  return { r: r9 * 255, g: g3 * 255, b: b3 * 255 };
}
function rgbToHsv(r9, g3, b3) {
  r9 = bound01(r9, 255);
  g3 = bound01(g3, 255);
  b3 = bound01(b3, 255);
  const max3 = Math.max(r9, g3, b3);
  const min3 = Math.min(r9, g3, b3);
  let h7 = 0;
  const v3 = max3;
  const d3 = max3 - min3;
  const s3 = max3 === 0 ? 0 : d3 / max3;
  if (max3 === min3) {
    h7 = 0;
  } else {
    switch (max3) {
      case r9:
        h7 = (g3 - b3) / d3 + (g3 < b3 ? 6 : 0);
        break;
      case g3:
        h7 = (b3 - r9) / d3 + 2;
        break;
      case b3:
        h7 = (r9 - g3) / d3 + 4;
        break;
      default:
        break;
    }
    h7 /= 6;
  }
  return { h: h7, s: s3, v: v3 };
}
function hsvToRgb(h7, s3, v3) {
  h7 = bound01(h7, 360) * 6;
  s3 = bound01(s3, 100);
  v3 = bound01(v3, 100);
  const i5 = Math.floor(h7);
  const f7 = h7 - i5;
  const p3 = v3 * (1 - s3);
  const q3 = v3 * (1 - f7 * s3);
  const t7 = v3 * (1 - (1 - f7) * s3);
  const mod = i5 % 6;
  const r9 = [v3, q3, p3, p3, t7, v3][mod];
  const g3 = [t7, v3, v3, q3, p3, p3][mod];
  const b3 = [p3, p3, t7, v3, v3, q3][mod];
  return { r: r9 * 255, g: g3 * 255, b: b3 * 255 };
}
function rgbToHex(r9, g3, b3, allow3Char) {
  const hex2 = [
    pad2(Math.round(r9).toString(16)),
    pad2(Math.round(g3).toString(16)),
    pad2(Math.round(b3).toString(16))
  ];
  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r9, g3, b3, a4, allow4Char) {
  const hex2 = [
    pad2(Math.round(r9).toString(16)),
    pad2(Math.round(g3).toString(16)),
    pad2(Math.round(b3).toString(16)),
    pad2(convertDecimalToHex(a4))
  ];
  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function cmykToRgb(c8, m4, y5, k3) {
  const cConv = c8 / 100;
  const mConv = m4 / 100;
  const yConv = y5 / 100;
  const kConv = k3 / 100;
  const r9 = 255 * (1 - cConv) * (1 - kConv);
  const g3 = 255 * (1 - mConv) * (1 - kConv);
  const b3 = 255 * (1 - yConv) * (1 - kConv);
  return { r: r9, g: g3, b: b3 };
}
function rgbToCmyk(r9, g3, b3) {
  let c8 = 1 - r9 / 255;
  let m4 = 1 - g3 / 255;
  let y5 = 1 - b3 / 255;
  let k3 = Math.min(c8, m4, y5);
  if (k3 === 1) {
    c8 = 0;
    m4 = 0;
    y5 = 0;
  } else {
    c8 = (c8 - k3) / (1 - k3) * 100;
    m4 = (m4 - k3) / (1 - k3) * 100;
    y5 = (y5 - k3) / (1 - k3) * 100;
  }
  k3 *= 100;
  return {
    c: Math.round(c8),
    m: Math.round(m4),
    y: Math.round(y5),
    k: Math.round(k3)
  };
}
function convertDecimalToHex(d3) {
  return Math.round(parseFloat(d3) * 255).toString(16);
}
function convertHexToDecimal(h7) {
  return parseIntFromHex(h7) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color2) {
  return {
    r: color2 >> 16,
    g: (color2 & 65280) >> 8,
    b: color2 & 255
  };
}

// node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color2) {
  let rgb2 = { r: 0, g: 0, b: 0 };
  let a4 = 1;
  let s3 = null;
  let v3 = null;
  let l3 = null;
  let ok = false;
  let format = false;
  if (typeof color2 === "string") {
    color2 = stringInputToObject(color2);
  }
  if (typeof color2 === "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb2 = rgbToRgb(color2.r, color2.g, color2.b);
      ok = true;
      format = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s3 = convertToPercentage(color2.s);
      v3 = convertToPercentage(color2.v);
      rgb2 = hsvToRgb(color2.h, s3, v3);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s3 = convertToPercentage(color2.s);
      l3 = convertToPercentage(color2.l);
      rgb2 = hslToRgb(color2.h, s3, l3);
      ok = true;
      format = "hsl";
    } else if (isValidCSSUnit(color2.c) && isValidCSSUnit(color2.m) && isValidCSSUnit(color2.y) && isValidCSSUnit(color2.k)) {
      rgb2 = cmykToRgb(color2.c, color2.m, color2.y, color2.k);
      ok = true;
      format = "cmyk";
    }
    if (Object.prototype.hasOwnProperty.call(color2, "a")) {
      a4 = color2.a;
    }
  }
  a4 = boundAlpha(a4);
  return {
    ok,
    format: color2.format || format,
    r: Math.min(255, Math.max(rgb2.r, 0)),
    g: Math.min(255, Math.max(rgb2.g, 0)),
    b: Math.min(255, Math.max(rgb2.b, 0)),
    a: a4
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = (
  // eslint-disable-next-line prettier/prettier
  "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?"
);
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  cmyk: new RegExp("cmyk" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color2) {
  color2 = color2.trim().toLowerCase();
  if (color2.length === 0) {
    return false;
  }
  let named2 = false;
  if (names[color2]) {
    color2 = names[color2];
    named2 = true;
  } else if (color2 === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  let match = matchers.rgb.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color2);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color2);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.cmyk.exec(color2);
  if (match) {
    return {
      c: match[1],
      m: match[2],
      y: match[3],
      k: match[4]
    };
  }
  match = matchers.hex8.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named2 ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named2 ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named2 ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color2);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named2 ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color2) {
  if (typeof color2 === "number") {
    return !Number.isNaN(color2);
  }
  return matchers.CSS_UNIT.test(color2);
}

// node_modules/@ctrl/tinycolor/dist/module/index.js
var TinyColor = class _TinyColor {
  constructor(color2 = "", opts = {}) {
    if (color2 instanceof _TinyColor) {
      return color2;
    }
    if (typeof color2 === "number") {
      color2 = numberInputToObject(color2);
    }
    this.originalInput = color2;
    const rgb2 = inputToRGB(color2);
    this.originalInput = color2;
    this.r = rgb2.r;
    this.g = rgb2.g;
    this.b = rgb2.b;
    this.a = rgb2.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = opts.format ?? rgb2.format;
    this.gradientType = opts.gradientType;
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb2.ok;
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  getBrightness() {
    const rgb2 = this.toRgb();
    return (rgb2.r * 299 + rgb2.g * 587 + rgb2.b * 114) / 1e3;
  }
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  getLuminance() {
    const rgb2 = this.toRgb();
    let R3;
    let G3;
    let B3;
    const RsRGB = rgb2.r / 255;
    const GsRGB = rgb2.g / 255;
    const BsRGB = rgb2.b / 255;
    if (RsRGB <= 0.03928) {
      R3 = RsRGB / 12.92;
    } else {
      R3 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G3 = GsRGB / 12.92;
    } else {
      G3 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B3 = BsRGB / 12.92;
    } else {
      B3 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R3 + 0.7152 * G3 + 0.0722 * B3;
  }
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  getAlpha() {
    return this.a;
  }
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  setAlpha(alpha) {
    this.a = boundAlpha(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  }
  /**
   * Returns whether the color is monochrome.
   */
  isMonochrome() {
    const { s: s3 } = this.toHsl();
    return s3 === 0;
  }
  /**
   * Returns the object as a HSVA object.
   */
  toHsv() {
    const hsv = rgbToHsv(this.r, this.g, this.b);
    return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
  }
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  toHsvString() {
    const hsv = rgbToHsv(this.r, this.g, this.b);
    const h7 = Math.round(hsv.h * 360);
    const s3 = Math.round(hsv.s * 100);
    const v3 = Math.round(hsv.v * 100);
    return this.a === 1 ? `hsv(${h7}, ${s3}%, ${v3}%)` : `hsva(${h7}, ${s3}%, ${v3}%, ${this.roundA})`;
  }
  /**
   * Returns the object as a HSLA object.
   */
  toHsl() {
    const hsl2 = rgbToHsl(this.r, this.g, this.b);
    return { h: hsl2.h * 360, s: hsl2.s, l: hsl2.l, a: this.a };
  }
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  toHslString() {
    const hsl2 = rgbToHsl(this.r, this.g, this.b);
    const h7 = Math.round(hsl2.h * 360);
    const s3 = Math.round(hsl2.s * 100);
    const l3 = Math.round(hsl2.l * 100);
    return this.a === 1 ? `hsl(${h7}, ${s3}%, ${l3}%)` : `hsla(${h7}, ${s3}%, ${l3}%, ${this.roundA})`;
  }
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHex(allow3Char = false) {
    return rgbToHex(this.r, this.g, this.b, allow3Char);
  }
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  toHexString(allow3Char = false) {
    return "#" + this.toHex(allow3Char);
  }
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8(allow4Char = false) {
    return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
  }
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  toHex8String(allow4Char = false) {
    return "#" + this.toHex8(allow4Char);
  }
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  toHexShortString(allowShortChar = false) {
    return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
  }
  /**
   * Returns the object as a RGBA object.
   */
  toRgb() {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  toRgbString() {
    const r9 = Math.round(this.r);
    const g3 = Math.round(this.g);
    const b3 = Math.round(this.b);
    return this.a === 1 ? `rgb(${r9}, ${g3}, ${b3})` : `rgba(${r9}, ${g3}, ${b3}, ${this.roundA})`;
  }
  /**
   * Returns the object as a RGBA object.
   */
  toPercentageRgb() {
    const fmt = (x5) => `${Math.round(bound01(x5, 255) * 100)}%`;
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  }
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  toPercentageRgbString() {
    const rnd = (x5) => Math.round(bound01(x5, 255) * 100);
    return this.a === 1 ? `rgb(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%)` : `rgba(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%, ${this.roundA})`;
  }
  toCmyk() {
    return {
      ...rgbToCmyk(this.r, this.g, this.b)
    };
  }
  toCmykString() {
    const { c: c8, m: m4, y: y5, k: k3 } = rgbToCmyk(this.r, this.g, this.b);
    return `cmyk(${c8}, ${m4}, ${y5}, ${k3})`;
  }
  /**
   * The 'real' name of the color -if there is one.
   */
  toName() {
    if (this.a === 0) {
      return "transparent";
    }
    if (this.a < 1) {
      return false;
    }
    const hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
    for (const [key, value] of Object.entries(names)) {
      if (hex2 === value) {
        return key;
      }
    }
    return false;
  }
  toString(format) {
    const formatSet = Boolean(format);
    format = format ?? this.format;
    let formattedString = false;
    const hasAlpha = this.a < 1 && this.a >= 0;
    const needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith("hex") || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    if (format === "cmyk") {
      formattedString = this.toCmykString();
    }
    return formattedString || this.toHexString();
  }
  toNumber() {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  }
  clone() {
    return new _TinyColor(this.toString());
  }
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  lighten(amount = 10) {
    const hsl2 = this.toHsl();
    hsl2.l += amount / 100;
    hsl2.l = clamp01(hsl2.l);
    return new _TinyColor(hsl2);
  }
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  brighten(amount = 10) {
    const rgb2 = this.toRgb();
    rgb2.r = Math.max(0, Math.min(255, rgb2.r - Math.round(255 * -(amount / 100))));
    rgb2.g = Math.max(0, Math.min(255, rgb2.g - Math.round(255 * -(amount / 100))));
    rgb2.b = Math.max(0, Math.min(255, rgb2.b - Math.round(255 * -(amount / 100))));
    return new _TinyColor(rgb2);
  }
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  darken(amount = 10) {
    const hsl2 = this.toHsl();
    hsl2.l -= amount / 100;
    hsl2.l = clamp01(hsl2.l);
    return new _TinyColor(hsl2);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  tint(amount = 10) {
    return this.mix("white", amount);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  shade(amount = 10) {
    return this.mix("black", amount);
  }
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  desaturate(amount = 10) {
    const hsl2 = this.toHsl();
    hsl2.s -= amount / 100;
    hsl2.s = clamp01(hsl2.s);
    return new _TinyColor(hsl2);
  }
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  saturate(amount = 10) {
    const hsl2 = this.toHsl();
    hsl2.s += amount / 100;
    hsl2.s = clamp01(hsl2.s);
    return new _TinyColor(hsl2);
  }
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  greyscale() {
    return this.desaturate(100);
  }
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  spin(amount) {
    const hsl2 = this.toHsl();
    const hue = (hsl2.h + amount) % 360;
    hsl2.h = hue < 0 ? 360 + hue : hue;
    return new _TinyColor(hsl2);
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(color2, amount = 50) {
    const rgb1 = this.toRgb();
    const rgb2 = new _TinyColor(color2).toRgb();
    const p3 = amount / 100;
    const rgba2 = {
      r: (rgb2.r - rgb1.r) * p3 + rgb1.r,
      g: (rgb2.g - rgb1.g) * p3 + rgb1.g,
      b: (rgb2.b - rgb1.b) * p3 + rgb1.b,
      a: (rgb2.a - rgb1.a) * p3 + rgb1.a
    };
    return new _TinyColor(rgba2);
  }
  analogous(results = 6, slices = 30) {
    const hsl2 = this.toHsl();
    const part = 360 / slices;
    const ret = [this];
    for (hsl2.h = (hsl2.h - (part * results >> 1) + 720) % 360; --results; ) {
      hsl2.h = (hsl2.h + part) % 360;
      ret.push(new _TinyColor(hsl2));
    }
    return ret;
  }
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  complement() {
    const hsl2 = this.toHsl();
    hsl2.h = (hsl2.h + 180) % 360;
    return new _TinyColor(hsl2);
  }
  monochromatic(results = 6) {
    const hsv = this.toHsv();
    const { h: h7 } = hsv;
    const { s: s3 } = hsv;
    let { v: v3 } = hsv;
    const res = [];
    const modification = 1 / results;
    while (results--) {
      res.push(new _TinyColor({ h: h7, s: s3, v: v3 }));
      v3 = (v3 + modification) % 1;
    }
    return res;
  }
  splitcomplement() {
    const hsl2 = this.toHsl();
    const { h: h7 } = hsl2;
    return [
      this,
      new _TinyColor({ h: (h7 + 72) % 360, s: hsl2.s, l: hsl2.l }),
      new _TinyColor({ h: (h7 + 216) % 360, s: hsl2.s, l: hsl2.l })
    ];
  }
  /**
   * Compute how the color would appear on a background
   */
  onBackground(background) {
    const fg = this.toRgb();
    const bg = new _TinyColor(background).toRgb();
    const alpha = fg.a + bg.a * (1 - fg.a);
    return new _TinyColor({
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
      a: alpha
    });
  }
  /**
   * Alias for `polyad(3)`
   */
  triad() {
    return this.polyad(3);
  }
  /**
   * Alias for `polyad(4)`
   */
  tetrad() {
    return this.polyad(4);
  }
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  polyad(n9) {
    const hsl2 = this.toHsl();
    const { h: h7 } = hsl2;
    const result = [this];
    const increment = 360 / n9;
    for (let i5 = 1; i5 < n9; i5++) {
      result.push(new _TinyColor({ h: (h7 + i5 * increment) % 360, s: hsl2.s, l: hsl2.l }));
    }
    return result;
  }
  /**
   * compare color vs current color
   */
  equals(color2) {
    const comparedColor = new _TinyColor(color2);
    if (this.format === "cmyk" || comparedColor.format === "cmyk") {
      return this.toCmykString() === comparedColor.toCmykString();
    }
    return this.toRgbString() === comparedColor.toRgbString();
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.A6ZK6XGV.js
var hasEyeDropper = "EyeDropper" in window;
var SlColorPicker = class extends ShoelaceElement {
  constructor() {
    super();
    this.formControlController = new FormControlController(this);
    this.isSafeValue = false;
    this.localize = new LocalizeController2(this);
    this.hasFocus = false;
    this.isDraggingGridHandle = false;
    this.isEmpty = false;
    this.inputValue = "";
    this.hue = 0;
    this.saturation = 100;
    this.brightness = 100;
    this.alpha = 100;
    this.value = "";
    this.defaultValue = "";
    this.label = "";
    this.format = "hex";
    this.inline = false;
    this.size = "medium";
    this.noFormatToggle = false;
    this.name = "";
    this.disabled = false;
    this.hoist = false;
    this.opacity = false;
    this.uppercase = false;
    this.swatches = "";
    this.form = "";
    this.required = false;
    this.handleFocusIn = () => {
      this.hasFocus = true;
      this.emit("sl-focus");
    };
    this.handleFocusOut = () => {
      this.hasFocus = false;
      this.emit("sl-blur");
    };
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.input.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  handleCopy() {
    this.input.select();
    document.execCommand("copy");
    this.previewButton.focus();
    this.previewButton.classList.add("color-picker__preview-color--copied");
    this.previewButton.addEventListener("animationend", () => {
      this.previewButton.classList.remove("color-picker__preview-color--copied");
    });
  }
  handleFormatToggle() {
    const formats = ["hex", "rgb", "hsl", "hsv"];
    const nextIndex = (formats.indexOf(this.format) + 1) % formats.length;
    this.format = formats[nextIndex];
    this.setColor(this.value);
    this.emit("sl-change");
    this.emit("sl-input");
  }
  handleAlphaDrag(event) {
    const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha");
    const handle = container.querySelector(".color-picker__slider-handle");
    const { width } = container.getBoundingClientRect();
    let initialValue = this.value;
    let currentValue = this.value;
    handle.focus();
    event.preventDefault();
    drag(container, {
      onMove: (x5) => {
        this.alpha = clamp2(x5 / width * 100, 0, 100);
        this.syncValues();
        if (this.value !== currentValue) {
          currentValue = this.value;
          this.emit("sl-input");
        }
      },
      onStop: () => {
        if (this.value !== initialValue) {
          initialValue = this.value;
          this.emit("sl-change");
        }
      },
      initialEvent: event
    });
  }
  handleHueDrag(event) {
    const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue");
    const handle = container.querySelector(".color-picker__slider-handle");
    const { width } = container.getBoundingClientRect();
    let initialValue = this.value;
    let currentValue = this.value;
    handle.focus();
    event.preventDefault();
    drag(container, {
      onMove: (x5) => {
        this.hue = clamp2(x5 / width * 360, 0, 360);
        this.syncValues();
        if (this.value !== currentValue) {
          currentValue = this.value;
          this.emit("sl-input");
        }
      },
      onStop: () => {
        if (this.value !== initialValue) {
          initialValue = this.value;
          this.emit("sl-change");
        }
      },
      initialEvent: event
    });
  }
  handleGridDrag(event) {
    const grid = this.shadowRoot.querySelector(".color-picker__grid");
    const handle = grid.querySelector(".color-picker__grid-handle");
    const { width, height } = grid.getBoundingClientRect();
    let initialValue = this.value;
    let currentValue = this.value;
    handle.focus();
    event.preventDefault();
    this.isDraggingGridHandle = true;
    drag(grid, {
      onMove: (x5, y5) => {
        this.saturation = clamp2(x5 / width * 100, 0, 100);
        this.brightness = clamp2(100 - y5 / height * 100, 0, 100);
        this.syncValues();
        if (this.value !== currentValue) {
          currentValue = this.value;
          this.emit("sl-input");
        }
      },
      onStop: () => {
        this.isDraggingGridHandle = false;
        if (this.value !== initialValue) {
          initialValue = this.value;
          this.emit("sl-change");
        }
      },
      initialEvent: event
    });
  }
  handleAlphaKeyDown(event) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.alpha = clamp2(this.alpha - increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.alpha = clamp2(this.alpha + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "Home") {
      event.preventDefault();
      this.alpha = 0;
      this.syncValues();
    }
    if (event.key === "End") {
      event.preventDefault();
      this.alpha = 100;
      this.syncValues();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleHueKeyDown(event) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.hue = clamp2(this.hue - increment, 0, 360);
      this.syncValues();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.hue = clamp2(this.hue + increment, 0, 360);
      this.syncValues();
    }
    if (event.key === "Home") {
      event.preventDefault();
      this.hue = 0;
      this.syncValues();
    }
    if (event.key === "End") {
      event.preventDefault();
      this.hue = 360;
      this.syncValues();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleGridKeyDown(event) {
    const increment = event.shiftKey ? 10 : 1;
    const oldValue = this.value;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.saturation = clamp2(this.saturation - increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.saturation = clamp2(this.saturation + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.brightness = clamp2(this.brightness + increment, 0, 100);
      this.syncValues();
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.brightness = clamp2(this.brightness - increment, 0, 100);
      this.syncValues();
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const oldValue = this.value;
    event.stopPropagation();
    if (this.input.value) {
      this.setColor(target.value);
      target.value = this.value;
    } else {
      this.value = "";
    }
    if (this.value !== oldValue) {
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleInputInput(event) {
    this.formControlController.updateValidity();
    event.stopPropagation();
  }
  handleInputKeyDown(event) {
    if (event.key === "Enter") {
      const oldValue = this.value;
      if (this.input.value) {
        this.setColor(this.input.value);
        this.input.value = this.value;
        if (this.value !== oldValue) {
          this.emit("sl-change");
          this.emit("sl-input");
        }
        setTimeout(() => this.input.select());
      } else {
        this.hue = 0;
      }
    }
  }
  handleInputInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleTouchMove(event) {
    event.preventDefault();
  }
  parseColor(colorString) {
    const color2 = new TinyColor(colorString);
    if (!color2.isValid) {
      return null;
    }
    const hslColor = color2.toHsl();
    const hsl2 = {
      h: hslColor.h,
      s: hslColor.s * 100,
      l: hslColor.l * 100,
      a: hslColor.a
    };
    const rgb2 = color2.toRgb();
    const hex2 = color2.toHexString();
    const hexa = color2.toHex8String();
    const hsvColor = color2.toHsv();
    const hsv = {
      h: hsvColor.h,
      s: hsvColor.s * 100,
      v: hsvColor.v * 100,
      a: hsvColor.a
    };
    return {
      hsl: {
        h: hsl2.h,
        s: hsl2.s,
        l: hsl2.l,
        string: this.setLetterCase(`hsl(${Math.round(hsl2.h)}, ${Math.round(hsl2.s)}%, ${Math.round(hsl2.l)}%)`)
      },
      hsla: {
        h: hsl2.h,
        s: hsl2.s,
        l: hsl2.l,
        a: hsl2.a,
        string: this.setLetterCase(
          `hsla(${Math.round(hsl2.h)}, ${Math.round(hsl2.s)}%, ${Math.round(hsl2.l)}%, ${hsl2.a.toFixed(2).toString()})`
        )
      },
      hsv: {
        h: hsv.h,
        s: hsv.s,
        v: hsv.v,
        string: this.setLetterCase(`hsv(${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%)`)
      },
      hsva: {
        h: hsv.h,
        s: hsv.s,
        v: hsv.v,
        a: hsv.a,
        string: this.setLetterCase(
          `hsva(${Math.round(hsv.h)}, ${Math.round(hsv.s)}%, ${Math.round(hsv.v)}%, ${hsv.a.toFixed(2).toString()})`
        )
      },
      rgb: {
        r: rgb2.r,
        g: rgb2.g,
        b: rgb2.b,
        string: this.setLetterCase(`rgb(${Math.round(rgb2.r)}, ${Math.round(rgb2.g)}, ${Math.round(rgb2.b)})`)
      },
      rgba: {
        r: rgb2.r,
        g: rgb2.g,
        b: rgb2.b,
        a: rgb2.a,
        string: this.setLetterCase(
          `rgba(${Math.round(rgb2.r)}, ${Math.round(rgb2.g)}, ${Math.round(rgb2.b)}, ${rgb2.a.toFixed(2).toString()})`
        )
      },
      hex: this.setLetterCase(hex2),
      hexa: this.setLetterCase(hexa)
    };
  }
  setColor(colorString) {
    const newColor = this.parseColor(colorString);
    if (newColor === null) {
      return false;
    }
    this.hue = newColor.hsva.h;
    this.saturation = newColor.hsva.s;
    this.brightness = newColor.hsva.v;
    this.alpha = this.opacity ? newColor.hsva.a * 100 : 100;
    this.syncValues();
    return true;
  }
  setLetterCase(string) {
    if (typeof string !== "string") {
      return "";
    }
    return this.uppercase ? string.toUpperCase() : string.toLowerCase();
  }
  async syncValues() {
    const currentColor = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    if (currentColor === null) {
      return;
    }
    if (this.format === "hsl") {
      this.inputValue = this.opacity ? currentColor.hsla.string : currentColor.hsl.string;
    } else if (this.format === "rgb") {
      this.inputValue = this.opacity ? currentColor.rgba.string : currentColor.rgb.string;
    } else if (this.format === "hsv") {
      this.inputValue = this.opacity ? currentColor.hsva.string : currentColor.hsv.string;
    } else {
      this.inputValue = this.opacity ? currentColor.hexa : currentColor.hex;
    }
    this.isSafeValue = true;
    this.value = this.inputValue;
    await this.updateComplete;
    this.isSafeValue = false;
  }
  handleAfterHide() {
    this.previewButton.classList.remove("color-picker__preview-color--copied");
  }
  handleEyeDropper() {
    if (!hasEyeDropper) {
      return;
    }
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then((colorSelectionResult) => {
      const oldValue = this.value;
      this.setColor(colorSelectionResult.sRGBHex);
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }).catch(() => {
    });
  }
  selectSwatch(color2) {
    const oldValue = this.value;
    if (!this.disabled) {
      this.setColor(color2);
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
  }
  /** Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100. */
  getHexString(hue, saturation, brightness, alpha = 100) {
    const color2 = new TinyColor(`hsva(${hue}, ${saturation}%, ${brightness}%, ${alpha / 100})`);
    if (!color2.isValid) {
      return "";
    }
    return color2.toHex8String();
  }
  // Prevents nested components from leaking events
  stopNestedEventPropagation(event) {
    event.stopImmediatePropagation();
  }
  handleFormatChange() {
    this.syncValues();
  }
  handleOpacityChange() {
    this.alpha = 100;
  }
  handleValueChange(oldValue, newValue) {
    this.isEmpty = !newValue;
    if (!newValue) {
      this.hue = 0;
      this.saturation = 0;
      this.brightness = 100;
      this.alpha = 100;
    }
    if (!this.isSafeValue) {
      const newColor = this.parseColor(newValue);
      if (newColor !== null) {
        this.inputValue = this.value;
        this.hue = newColor.hsva.h;
        this.saturation = newColor.hsva.s;
        this.brightness = newColor.hsva.v;
        this.alpha = newColor.hsva.a * 100;
        this.syncValues();
      } else {
        this.inputValue = oldValue != null ? oldValue : "";
      }
    }
  }
  /** Sets focus on the color picker. */
  focus(options) {
    if (this.inline) {
      this.base.focus(options);
    } else {
      this.trigger.focus(options);
    }
  }
  /** Removes focus from the color picker. */
  blur() {
    var _a7;
    const elementToBlur = this.inline ? this.base : this.trigger;
    if (this.hasFocus) {
      elementToBlur.focus({ preventScroll: true });
      elementToBlur.blur();
    }
    if ((_a7 = this.dropdown) == null ? void 0 : _a7.open) {
      this.dropdown.hide();
    }
  }
  /** Returns the current value as a string in the specified format. */
  getFormattedValue(format = "hex") {
    const currentColor = this.parseColor(
      `hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha / 100})`
    );
    if (currentColor === null) {
      return "";
    }
    switch (format) {
      case "hex":
        return currentColor.hex;
      case "hexa":
        return currentColor.hexa;
      case "rgb":
        return currentColor.rgb.string;
      case "rgba":
        return currentColor.rgba.string;
      case "hsl":
        return currentColor.hsl.string;
      case "hsla":
        return currentColor.hsla.string;
      case "hsv":
        return currentColor.hsv.string;
      case "hsva":
        return currentColor.hsva.string;
      default:
        return "";
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (!this.inline && !this.validity.valid) {
      this.dropdown.show();
      this.addEventListener("sl-after-show", () => this.input.reportValidity(), { once: true });
      if (!this.disabled) {
        this.formControlController.emitInvalidEvent();
      }
      return false;
    }
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const gridHandleX = this.saturation;
    const gridHandleY = 100 - this.brightness;
    const swatches = Array.isArray(this.swatches) ? this.swatches : this.swatches.split(";").filter((color2) => color2.trim() !== "");
    const colorPicker = ke2`
      <div
        part="base"
        class=${Rt({
      "color-picker": true,
      "color-picker--inline": this.inline,
      "color-picker--disabled": this.disabled,
      "color-picker--focused": this.hasFocus
    })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-labelledby="label"
        tabindex=${this.inline ? "0" : "-1"}
      >
        ${this.inline ? ke2`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            ` : null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${se({ backgroundColor: this.getHexString(this.hue, 100, 100) })}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Rt({
      "color-picker__grid-handle": true,
      "color-picker__grid-handle--dragging": this.isDraggingGridHandle
    })}
            style=${se({
      top: `${gridHandleY}%`,
      left: `${gridHandleX}%`,
      backgroundColor: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            role="application"
            aria-label="HSV"
            tabindex=${to(this.disabled ? void 0 : "0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${se({
      left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
    })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${to(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity ? ke2`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${se({
      backgroundImage: `linear-gradient(
                          to right,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 0)} 0%,
                          ${this.getHexString(this.hue, this.saturation, this.brightness, 100)} 100%
                        )`
    })}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${se({
      left: `${this.alpha}%`
    })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${to(this.disabled ? void 0 : "0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                ` : ""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${se({
      "--preview-color": this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty ? "" : this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${!this.noFormatToggle ? ke2`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                ` : ""}
            ${hasEyeDropper ? ke2`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                ` : ""}
          </sl-button-group>
        </div>

        ${swatches.length > 0 ? ke2`
              <div part="swatches" class="color-picker__swatches">
                ${swatches.map((swatch) => {
      const parsedColor = this.parseColor(swatch);
      if (!parsedColor) {
        console.error(`Unable to parse swatch color: "${swatch}"`, this);
        return "";
      }
      return ke2`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${to(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${swatch}
                      @click=${() => this.selectSwatch(swatch)}
                      @keydown=${(event) => !this.disabled && event.key === "Enter" && this.setColor(parsedColor.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${se({ backgroundColor: parsedColor.hexa })}
                      ></div>
                    </div>
                  `;
    })}
              </div>
            ` : ""}
      </div>
    `;
    if (this.inline) {
      return colorPicker;
    }
    return ke2`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? "true" : "false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${Rt({
      "color-dropdown__trigger": true,
      "color-dropdown__trigger--disabled": this.disabled,
      "color-dropdown__trigger--small": this.size === "small",
      "color-dropdown__trigger--medium": this.size === "medium",
      "color-dropdown__trigger--large": this.size === "large",
      "color-dropdown__trigger--empty": this.isEmpty,
      "color-dropdown__trigger--focused": this.hasFocus,
      "color-picker__transparent-bg": true
    })}
          style=${se({
      color: this.getHexString(this.hue, this.saturation, this.brightness, this.alpha)
    })}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${colorPicker}
      </sl-dropdown>
    `;
  }
};
SlColorPicker.styles = [component_styles_default, color_picker_styles_default];
SlColorPicker.dependencies = {
  "sl-button-group": SlButtonGroup,
  "sl-button": SlButton,
  "sl-dropdown": SlDropdown,
  "sl-icon": SlIcon,
  "sl-input": SlInput,
  "sl-visually-hidden": SlVisuallyHidden
};
__decorateClass([
  e6('[part~="base"]')
], SlColorPicker.prototype, "base", 2);
__decorateClass([
  e6('[part~="input"]')
], SlColorPicker.prototype, "input", 2);
__decorateClass([
  e6(".color-dropdown")
], SlColorPicker.prototype, "dropdown", 2);
__decorateClass([
  e6('[part~="preview"]')
], SlColorPicker.prototype, "previewButton", 2);
__decorateClass([
  e6('[part~="trigger"]')
], SlColorPicker.prototype, "trigger", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "hasFocus", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "isDraggingGridHandle", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "isEmpty", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "inputValue", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "hue", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "saturation", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "brightness", 2);
__decorateClass([
  r7()
], SlColorPicker.prototype, "alpha", 2);
__decorateClass([
  n8()
], SlColorPicker.prototype, "value", 2);
__decorateClass([
  defaultValue()
], SlColorPicker.prototype, "defaultValue", 2);
__decorateClass([
  n8()
], SlColorPicker.prototype, "label", 2);
__decorateClass([
  n8()
], SlColorPicker.prototype, "format", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlColorPicker.prototype, "inline", 2);
__decorateClass([
  n8({ reflect: true })
], SlColorPicker.prototype, "size", 2);
__decorateClass([
  n8({ attribute: "no-format-toggle", type: Boolean })
], SlColorPicker.prototype, "noFormatToggle", 2);
__decorateClass([
  n8()
], SlColorPicker.prototype, "name", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlColorPicker.prototype, "disabled", 2);
__decorateClass([
  n8({ type: Boolean })
], SlColorPicker.prototype, "hoist", 2);
__decorateClass([
  n8({ type: Boolean })
], SlColorPicker.prototype, "opacity", 2);
__decorateClass([
  n8({ type: Boolean })
], SlColorPicker.prototype, "uppercase", 2);
__decorateClass([
  n8()
], SlColorPicker.prototype, "swatches", 2);
__decorateClass([
  n8({ reflect: true })
], SlColorPicker.prototype, "form", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlColorPicker.prototype, "required", 2);
__decorateClass([
  t4({ passive: false })
], SlColorPicker.prototype, "handleTouchMove", 1);
__decorateClass([
  watch("format", { waitUntilFirstUpdate: true })
], SlColorPicker.prototype, "handleFormatChange", 1);
__decorateClass([
  watch("opacity", { waitUntilFirstUpdate: true })
], SlColorPicker.prototype, "handleOpacityChange", 1);
__decorateClass([
  watch("value")
], SlColorPicker.prototype, "handleValueChange", 1);

// node_modules/bootstrap-icons/icons/trash3.svg
var trash3_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">%0A  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>%0A</svg>';

// components/manual_animations.ts
var _currentAnimationBeingEditet_dec, _recording_dec, _animationColor_dec, _recordedAnimation_dec, _action_dec3, _oldRecordedAnimation_dec, _event_dec3, _animationStatus_dec2, _currentTab_dec2, _editable_dec2, _svg_dec, _a5, _ManualAnimations_decorators, _init5, _svg, _editable2, _currentTab2, _animationStatus2, _event3, _oldRecordedAnimation, _action3, _recordedAnimation, _animationColor, _recording, _currentAnimationBeingEditet;
_ManualAnimations_decorators = [t3("manual-animations")];
var ManualAnimations = class extends (_a5 = LitElementWw, _svg_dec = [n8({ type: Object })], _editable_dec2 = [n8({ type: Boolean, reflect: true })], _currentTab_dec2 = [n8({ type: String })], _animationStatus_dec2 = [n8({ type: String })], _event_dec3 = [n8({ type: Object })], _oldRecordedAnimation_dec = [n8()], _action_dec3 = [r7()], _recordedAnimation_dec = [r7()], _animationColor_dec = [r7()], _recording_dec = [r7()], _currentAnimationBeingEditet_dec = [r7()], _a5) {
  constructor() {
    super(...arguments);
    __privateAdd(this, _svg, __runInitializers(_init5, 8, this, null)), __runInitializers(_init5, 11, this);
    __privateAdd(this, _editable2, __runInitializers(_init5, 12, this, false)), __runInitializers(_init5, 15, this);
    __privateAdd(this, _currentTab2, __runInitializers(_init5, 16, this, "algo")), __runInitializers(_init5, 19, this);
    __privateAdd(this, _animationStatus2, __runInitializers(_init5, 20, this, "STOP")), __runInitializers(_init5, 23, this);
    __privateAdd(this, _event3, __runInitializers(_init5, 24, this, null)), __runInitializers(_init5, 27, this);
    __privateAdd(this, _oldRecordedAnimation, __runInitializers(_init5, 28, this, [])), __runInitializers(_init5, 31, this);
    __privateAdd(this, _action3, __runInitializers(_init5, 32, this, "RECORDING")), __runInitializers(_init5, 35, this);
    __privateAdd(this, _recordedAnimation, __runInitializers(_init5, 36, this, [])), __runInitializers(_init5, 39, this);
    __privateAdd(this, _animationColor, __runInitializers(_init5, 40, this, "#4a90e2")), __runInitializers(_init5, 43, this);
    __privateAdd(this, _recording, __runInitializers(_init5, 44, this, "")), __runInitializers(_init5, 47, this);
    __privateAdd(this, _currentAnimationBeingEditet, __runInitializers(_init5, 48, this)), __runInitializers(_init5, 51, this);
  }
  static get scopedElements() {
    return {
      "sl-button": SlButton,
      "sl-tooltip": SlTooltip,
      "sl-input": SlInput,
      "sl-color-picker": SlColorPicker,
      "sl-icon": SlIcon
    };
  }
  firstUpdated(_changedProperties) {
    this.recordedAnimation = [...this.oldRecordedAnimation];
  }
  updated(_changedProperties) {
    if (_changedProperties.has("currentTab")) {
      this.currentAnimationBeingEditet = void 0;
    }
    const e8 = this.event;
    if (!e8) return;
    if (_changedProperties.has("event")) {
      if (this.currentTab !== "manual") return;
      if (e8.detail.type == "LINK") {
        if (this.action == "RECORDING" && this.recording == "LINK" && this.recordedAnimation[this.currentAnimationBeingEditet]) {
          let updatedAnimation;
          if (this.recordedAnimation[this.currentAnimationBeingEditet].data.links.every(
            (link) => link.source !== e8.detail.data.source.name || link.target !== e8.detail.data.target.name
          )) {
            updatedAnimation = {
              type: "LINK",
              data: {
                links: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet].data.links,
                  {
                    source: e8.detail.data.source.name,
                    target: e8.detail.data.target.name
                  }
                ],
                colors: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet].data.colors,
                  this.animationColor
                ]
              }
            };
          } else {
            let indexToRemove = -1;
            updatedAnimation = {
              type: "LINK",
              data: {
                links: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet].data.links.filter(
                    (link, index2) => {
                      if (link.source !== e8.detail.data.source.name || link.target !== e8.detail.data.target.name) {
                        return true;
                      } else {
                        indexToRemove = index2;
                        return false;
                      }
                    }
                  )
                ],
                colors: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet].data.colors.filter(
                    (_3, index2) => index2 !== indexToRemove
                  )
                ]
              }
            };
          }
          const newRecordedAnimations = [...this.recordedAnimation];
          newRecordedAnimations[this.currentAnimationBeingEditet] = updatedAnimation;
          this.recordedAnimation = [...newRecordedAnimations];
          colorGraphForLinkAnimation(this.svg, updatedAnimation.data.links, updatedAnimation.data.colors);
          return;
        }
      }
      if (e8.detail.type == "NODE") {
        if (this.action == "RECORDING" && this.recording == "NODE" && this.recordedAnimation[this.currentAnimationBeingEditet]) {
          let updatedAnimation;
          if (!this.recordedAnimation[this.currentAnimationBeingEditet].data.names.includes(
            e8.detail.data.name
          )) {
            updatedAnimation = {
              type: "NODE",
              data: {
                names: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet].data.names,
                  e8.detail.data.name
                ],
                colors: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet].data.colors,
                  this.animationColor
                ]
              }
            };
          } else {
            let indexToRemove = -1;
            updatedAnimation = {
              type: "NODE",
              data: {
                names: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet].data.names.filter(
                    (node, index2) => {
                      if (node == e8.detail.data.name) {
                        indexToRemove = index2;
                        return false;
                      } else {
                        return true;
                      }
                    }
                  )
                ],
                colors: this.recordedAnimation[this.currentAnimationBeingEditet].data.colors.filter(
                  (_3, index2) => index2 !== indexToRemove
                )
              }
            };
          }
          const newRecordedAnimations = [...this.recordedAnimation];
          newRecordedAnimations[this.currentAnimationBeingEditet] = updatedAnimation;
          this.recordedAnimation = [...newRecordedAnimations];
          colorGraphForNodeAnimation(this.svg, updatedAnimation.data.names, updatedAnimation.data.colors);
          return;
        }
      }
    }
  }
  render() {
    return ke2`<div style="padding: 4px">
            ${this.editable ? ke2`<div style="display: flex; gap: 8px">
                          <sl-button
                              style="margin-top: auto; margin-bottom: auto;"
                              @click="${() => {
      this.action = "RECORDING";
      this.recording = "LINK";
      document.body.style.cursor = "crosshair";
      this.recordedAnimation.push({
        type: "LINK",
        data: { links: [], colors: [] }
      });
      this.currentAnimationBeingEditet = this.recordedAnimation.length - 1;
      colorGraphForLinkAnimation(this.svg, [], []);
    }}"
                          >
                              Add LINK Animation</sl-button
                          >
                          <sl-button
                              style="margin-top: auto; margin-bottom: auto;"
                              @click="${() => {
      this.action = "RECORDING";
      this.recording = "NODE";
      document.body.style.cursor = "crosshair";
      this.recordedAnimation.push({
        type: "NODE",
        data: { names: [], colors: [] }
      });
      this.currentAnimationBeingEditet = this.recordedAnimation.length - 1;
      colorGraphForNodeAnimation(this.svg, [], []);
    }}"
                              >Add NODE Animation</sl-button
                          >
                          <sl-color-picker
                              value=${this.animationColor}
                              label="Select a color"
                              @sl-change=${(e8) => this.animationColor = e8.target.value}
                          ></sl-color-picker>
                      </div>

                      <p></p>
                      <table>
                          <tr>
                              ${this.recordedAnimation.map(
      (animation, index2) => ke2`<th>
                                      <span>${index2 + 1}. ${animation.type}</span>
                                  </th>`
    )}
                          </tr>
                          <tr>
                              ${this.recordedAnimation.map(
      (animation, index2) => ke2`<td>
                                      <div style="display: flex">
                                          <sl-button
                                              variant=${this.currentAnimationBeingEditet == index2 ? "danger" : "default"}
                                              @click="${() => {
        this.animationStatus = "STOP";
        this.currentAnimationBeingEditet = index2;
        if (animation.type == "NODE") {
          this.recording = "NODE";
          colorGraphForNodeAnimation(
            this.svg,
            animation.data.names,
            animation.data.colors
          );
        }
        if (animation.type == "LINK") {
          this.recording = "LINK";
          colorGraphForLinkAnimation(
            this.svg,
            animation.data.links,
            animation.data.colors
          );
        }
        document.body.style.cursor = "crosshair";
      }}"
                                              ><sl-icon name="pencil"></sl-icon
                                          ></sl-button>
                                          <sl-button
                                              @click="${() => {
        this.recordedAnimation = [
          ...this.recordedAnimation.filter((_3, i5) => i5 !== index2)
        ];
        this.currentAnimationBeingEditet = void 0;
        this.recording = "";
        document.body.style.cursor = "auto";
      }}"
                                              ><sl-icon src=${trash3_default}></sl-icon
                                          ></sl-button>
                                      </div>
                                  </td>`
    )}
                          </tr>
                      </table>

                      <p></p>` : null}
            <sl-button
                @click="${async () => {
      this.currentAnimationBeingEditet = void 0;
      if (this.animationStatus === "STOP") {
        document.body.style.cursor = "auto";
        setAnimationStatus("RUN", this);
        dispatchGraphReset(this);
        await delay(200);
        setAnimationPosition(0, this);
        setAnimation([...this.recordedAnimation], this);
        dispatchAnimationEvent(this);
      }
    }}"
                >Execute</sl-button
            >

            <sl-button
                @click="${() => {
      setAnimationStatus("STOP", this);
    }}"
                >Stop</sl-button
            >
            <sl-button
                @click="${() => {
      if (this.animationStatus === "RUN") {
        setAnimationStatus("PAUSE", this);
        return;
      }
      if (this.animationStatus === "PAUSE") {
        setAnimationStatus("RUN", this);
        dispatchAnimationEvent(this);
      }
    }}"
                >${this.animationStatus == "PAUSE" ? "Play" : "Pause"}</sl-button
            >
        </div>`;
  }
};
_init5 = __decoratorStart(_a5);
_svg = new WeakMap();
_editable2 = new WeakMap();
_currentTab2 = new WeakMap();
_animationStatus2 = new WeakMap();
_event3 = new WeakMap();
_oldRecordedAnimation = new WeakMap();
_action3 = new WeakMap();
_recordedAnimation = new WeakMap();
_animationColor = new WeakMap();
_recording = new WeakMap();
_currentAnimationBeingEditet = new WeakMap();
__decorateElement(_init5, 4, "svg", _svg_dec, ManualAnimations, _svg);
__decorateElement(_init5, 4, "editable", _editable_dec2, ManualAnimations, _editable2);
__decorateElement(_init5, 4, "currentTab", _currentTab_dec2, ManualAnimations, _currentTab2);
__decorateElement(_init5, 4, "animationStatus", _animationStatus_dec2, ManualAnimations, _animationStatus2);
__decorateElement(_init5, 4, "event", _event_dec3, ManualAnimations, _event3);
__decorateElement(_init5, 4, "oldRecordedAnimation", _oldRecordedAnimation_dec, ManualAnimations, _oldRecordedAnimation);
__decorateElement(_init5, 4, "action", _action_dec3, ManualAnimations, _action3);
__decorateElement(_init5, 4, "recordedAnimation", _recordedAnimation_dec, ManualAnimations, _recordedAnimation);
__decorateElement(_init5, 4, "animationColor", _animationColor_dec, ManualAnimations, _animationColor);
__decorateElement(_init5, 4, "recording", _recording_dec, ManualAnimations, _recording);
__decorateElement(_init5, 4, "currentAnimationBeingEditet", _currentAnimationBeingEditet_dec, ManualAnimations, _currentAnimationBeingEditet);
ManualAnimations = __decorateElement(_init5, 0, "ManualAnimations", _ManualAnimations_decorators, ManualAnimations);
__publicField(ManualAnimations, "styles", i`
        td,
        th {
            padding: 4px;
        }

        td:not(:last-child) {
            border-right: 1px solid;
            border-color: lightgray;
        }
    `);
__runInitializers(_init5, 1, ManualAnimations);

// graph/animateLinks.ts
async function animateLinks(svg, links, colors) {
  const translate_speed2 = 1e3;
  let gnode = svg.selectAll("g");
  for (let i5 = 0; i5 < links.length; i5++) {
    let x5 = gnode.selectAll(
      ".link." + links[i5].source + links[i5].target + ", .link." + links[i5].target + links[i5].source
    );
    x5.transition().delay(translate_speed2 * 2 / 5).duration(translate_speed2 / 5).attr("stroke", colors[i5]).attr("stroke-width", function(d3) {
      return 1;
    }).transition().duration(translate_speed2 / 5).attr("stroke-width", function(d3) {
      return 10;
    });
  }
  await delay(translate_speed2);
}

// graph/animateNodes.ts
var translate_speed = 2e3;
async function animateNodes(svg, names2, colors) {
  let gnode = svg.selectAll("g");
  for (let i5 = 0; i5 < names2.length; i5++) {
    let x5 = gnode.selectAll(".node." + names2[i5]);
    x5.transition().delay(translate_speed * 2 / 5).duration(translate_speed / 5).attr("r", 10).transition().duration(translate_speed / 5).attr("r", initSize).style("fill", colors[i5]);
  }
  await delay(translate_speed);
}

// graph/resetColors.ts
function resetColors(svg) {
  let gnode = svg.selectAll("g");
  let nodes = gnode.selectAll(".node");
  nodes.style("fill", "white");
  let links = gnode.selectAll(".link");
  links.attr("stroke", "lightgray");
}

// graph/setNodeSubText.ts
function setNodeSubText(svg, node, text) {
  let gnode = svg.selectAll("g");
  let x5 = gnode.selectAll(".nodesubtext." + node);
  x5.text(function(d3) {
    return text;
  });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XJU7WU2G.js
var tab_group_styles_default = i`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5VKIB4HA.js
var resize_observer_styles_default = i`
  :host {
    display: contents;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YJK4WDCI.js
var SlResizeObserver = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.observedElements = [];
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => {
      this.emit("sl-resize", { detail: { entries } });
    });
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }
  startObserver() {
    const slot = this.shadowRoot.querySelector("slot");
    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true });
      this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
      this.observedElements = [];
      elements.forEach((el) => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }
  stopObserver() {
    this.resizeObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  render() {
    return ke2` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
SlResizeObserver.styles = [component_styles_default, resize_observer_styles_default];
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlResizeObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], SlResizeObserver.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SXFLAUBY.js
var SlTabGroup = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.tabs = [];
    this.focusableTabs = [];
    this.panels = [];
    this.hasScrollControls = false;
    this.shouldHideScrollStartButton = false;
    this.shouldHideScrollEndButton = false;
    this.placement = "top";
    this.activation = "auto";
    this.noScrollControls = false;
    this.fixedScrollControls = false;
    this.scrollOffset = 1;
  }
  connectedCallback() {
    const whenAllDefined = Promise.all([
      customElements.whenDefined("sl-tab"),
      customElements.whenDefined("sl-tab-panel")
    ]);
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      this.repositionIndicator();
      this.updateScrollControls();
    });
    this.mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((m4) => !["aria-labelledby", "aria-controls"].includes(m4.attributeName))) {
        setTimeout(() => this.setAriaLabels());
      }
      if (mutations.some((m4) => m4.attributeName === "disabled")) {
        this.syncTabsAndPanels();
      }
    });
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);
      whenAllDefined.then(() => {
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
          var _a7;
          if (entries[0].intersectionRatio > 0) {
            this.setAriaLabels();
            this.setActiveTab((_a7 = this.getActiveTab()) != null ? _a7 : this.tabs[0], { emitEvents: false });
            observer.unobserve(entries[0].target);
          }
        });
        intersectionObserver.observe(this.tabGroup);
      });
    });
  }
  disconnectedCallback() {
    var _a7, _b;
    super.disconnectedCallback();
    (_a7 = this.mutationObserver) == null ? void 0 : _a7.disconnect();
    (_b = this.resizeObserver) == null ? void 0 : _b.unobserve(this.nav);
  }
  getAllTabs() {
    const slot = this.shadowRoot.querySelector('slot[name="nav"]');
    return slot.assignedElements();
  }
  getAllPanels() {
    return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === "sl-tab-panel");
  }
  getActiveTab() {
    return this.tabs.find((el) => el.active);
  }
  handleClick(event) {
    const target = event.target;
    const tab = target.closest("sl-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tab = target.closest("sl-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (["Enter", " "].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
        event.preventDefault();
      }
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const activeEl = this.tabs.find((t7) => t7.matches(":focus"));
      const isRtl = this.matches(":dir(rtl)");
      let nextTab = null;
      if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "sl-tab") {
        if (event.key === "Home") {
          nextTab = this.focusableTabs[0];
        } else if (event.key === "End") {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
          const currentIndex = this.tabs.findIndex((el) => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, "backward");
        } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
          const currentIndex = this.tabs.findIndex((el) => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, "forward");
        }
        if (!nextTab) {
          return;
        }
        nextTab.tabIndex = 0;
        nextTab.focus({ preventScroll: true });
        if (this.activation === "auto") {
          this.setActiveTab(nextTab, { scrollBehavior: "smooth" });
        } else {
          this.tabs.forEach((tabEl) => {
            tabEl.tabIndex = tabEl === nextTab ? 0 : -1;
          });
        }
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(nextTab, this.nav, "horizontal");
        }
        event.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  setActiveTab(tab, options) {
    options = __spreadValues({
      emitEvents: true,
      scrollBehavior: "auto"
    }, options);
    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;
      this.tabs.forEach((el) => {
        el.active = el === this.activeTab;
        el.tabIndex = el === this.activeTab ? 0 : -1;
      });
      this.panels.forEach((el) => {
        var _a7;
        return el.active = el.name === ((_a7 = this.activeTab) == null ? void 0 : _a7.panel);
      });
      this.syncIndicator();
      if (["top", "bottom"].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
      }
      if (options.emitEvents) {
        if (previousTab) {
          this.emit("sl-tab-hide", { detail: { name: previousTab.panel } });
        }
        this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } });
      }
    }
  }
  setAriaLabels() {
    this.tabs.forEach((tab) => {
      const panel = this.panels.find((el) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute("aria-controls", panel.getAttribute("id"));
        panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
      }
    });
  }
  repositionIndicator() {
    const currentTab = this.getActiveTab();
    if (!currentTab) {
      return;
    }
    const width = currentTab.clientWidth;
    const height = currentTab.clientHeight;
    const isRtl = this.matches(":dir(rtl)");
    const allTabs = this.getAllTabs();
    const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
    const offset3 = precedingTabs.reduce(
      (previous, current) => ({
        left: previous.left + current.clientWidth,
        top: previous.top + current.clientHeight
      }),
      { left: 0, top: 0 }
    );
    switch (this.placement) {
      case "top":
      case "bottom":
        this.indicator.style.width = `${width}px`;
        this.indicator.style.height = "auto";
        this.indicator.style.translate = isRtl ? `${-1 * offset3.left}px` : `${offset3.left}px`;
        break;
      case "start":
      case "end":
        this.indicator.style.width = "auto";
        this.indicator.style.height = `${height}px`;
        this.indicator.style.translate = `0 ${offset3.top}px`;
        break;
    }
  }
  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  syncTabsAndPanels() {
    this.tabs = this.getAllTabs();
    this.focusableTabs = this.tabs.filter((el) => !el.disabled);
    this.panels = this.getAllPanels();
    this.syncIndicator();
    this.updateComplete.then(() => this.updateScrollControls());
  }
  findNextFocusableTab(currentIndex, direction) {
    let nextTab = null;
    const iterator = direction === "forward" ? 1 : -1;
    let nextIndex = currentIndex + iterator;
    while (currentIndex < this.tabs.length) {
      nextTab = this.tabs[nextIndex] || null;
      if (nextTab === null) {
        if (direction === "forward") {
          nextTab = this.focusableTabs[0];
        } else {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        }
        break;
      }
      if (!nextTab.disabled) {
        break;
      }
      nextIndex += iterator;
    }
    return nextTab;
  }
  updateScrollButtons() {
    if (this.hasScrollControls && !this.fixedScrollControls) {
      this.shouldHideScrollStartButton = this.scrollFromStart() <= this.scrollOffset;
      this.shouldHideScrollEndButton = this.isScrolledToEnd();
    }
  }
  isScrolledToEnd() {
    return this.scrollFromStart() + this.nav.clientWidth >= this.nav.scrollWidth - this.scrollOffset;
  }
  scrollFromStart() {
    return this.localize.dir() === "rtl" ? -this.nav.scrollLeft : this.nav.scrollLeft;
  }
  updateScrollControls() {
    if (this.noScrollControls) {
      this.hasScrollControls = false;
    } else {
      this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1;
    }
    this.updateScrollButtons();
  }
  syncIndicator() {
    const tab = this.getActiveTab();
    if (tab) {
      this.indicator.style.display = "block";
      this.repositionIndicator();
    } else {
      this.indicator.style.display = "none";
    }
  }
  /** Shows the specified tab panel. */
  show(panel) {
    const tab = this.tabs.find((el) => el.panel === panel);
    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    return ke2`
      <div
        part="base"
        class=${Rt({
      "tab-group": true,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--rtl": this.localize.dir() === "rtl",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? ke2`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Rt({
      "tab-group__scroll-button": true,
      "tab-group__scroll-button--start": true,
      "tab-group__scroll-button--start--hidden": this.shouldHideScrollStartButton
    })}
                  name=${isRtl ? "chevron-right" : "chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls ? ke2`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Rt({
      "tab-group__scroll-button": true,
      "tab-group__scroll-button--end": true,
      "tab-group__scroll-button--end--hidden": this.shouldHideScrollEndButton
    })}
                  name=${isRtl ? "chevron-left" : "chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
};
SlTabGroup.styles = [component_styles_default, tab_group_styles_default];
SlTabGroup.dependencies = { "sl-icon-button": SlIconButton, "sl-resize-observer": SlResizeObserver };
__decorateClass([
  e6(".tab-group")
], SlTabGroup.prototype, "tabGroup", 2);
__decorateClass([
  e6(".tab-group__body")
], SlTabGroup.prototype, "body", 2);
__decorateClass([
  e6(".tab-group__nav")
], SlTabGroup.prototype, "nav", 2);
__decorateClass([
  e6(".tab-group__indicator")
], SlTabGroup.prototype, "indicator", 2);
__decorateClass([
  r7()
], SlTabGroup.prototype, "hasScrollControls", 2);
__decorateClass([
  r7()
], SlTabGroup.prototype, "shouldHideScrollStartButton", 2);
__decorateClass([
  r7()
], SlTabGroup.prototype, "shouldHideScrollEndButton", 2);
__decorateClass([
  n8()
], SlTabGroup.prototype, "placement", 2);
__decorateClass([
  n8()
], SlTabGroup.prototype, "activation", 2);
__decorateClass([
  n8({ attribute: "no-scroll-controls", type: Boolean })
], SlTabGroup.prototype, "noScrollControls", 2);
__decorateClass([
  n8({ attribute: "fixed-scroll-controls", type: Boolean })
], SlTabGroup.prototype, "fixedScrollControls", 2);
__decorateClass([
  t4({ passive: true })
], SlTabGroup.prototype, "updateScrollButtons", 1);
__decorateClass([
  watch("noScrollControls", { waitUntilFirstUpdate: true })
], SlTabGroup.prototype, "updateScrollControls", 1);
__decorateClass([
  watch("placement", { waitUntilFirstUpdate: true })
], SlTabGroup.prototype, "syncIndicator", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RISKC4J7.js
var debounce = (fn, delay2) => {
  let timerId = 0;
  return function(...args) {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      fn.call(this, ...args);
    }, delay2);
  };
};
var decorate = (proto, method, decorateFn) => {
  const superFn = proto[method];
  proto[method] = function(...args) {
    superFn.call(this, ...args);
    decorateFn.call(this, superFn, ...args);
  };
};
var isSupported = "onscrollend" in window;
if (!isSupported) {
  const pointers = /* @__PURE__ */ new Set();
  const scrollHandlers = /* @__PURE__ */ new WeakMap();
  const handlePointerDown = (event) => {
    for (const touch of event.changedTouches) {
      pointers.add(touch.identifier);
    }
  };
  const handlePointerUp = (event) => {
    for (const touch of event.changedTouches) {
      pointers.delete(touch.identifier);
    }
  };
  document.addEventListener("touchstart", handlePointerDown, true);
  document.addEventListener("touchend", handlePointerUp, true);
  document.addEventListener("touchcancel", handlePointerUp, true);
  decorate(EventTarget.prototype, "addEventListener", function(addEventListener2, type2) {
    if (type2 !== "scrollend")
      return;
    const handleScrollEnd = debounce(() => {
      if (!pointers.size) {
        this.dispatchEvent(new Event("scrollend"));
      } else {
        handleScrollEnd();
      }
    }, 100);
    addEventListener2.call(this, "scroll", handleScrollEnd, { passive: true });
    scrollHandlers.set(this, handleScrollEnd);
  });
  decorate(EventTarget.prototype, "removeEventListener", function(removeEventListener, type2) {
    if (type2 !== "scrollend")
      return;
    const scrollHandler = scrollHandlers.get(this);
    if (scrollHandler) {
      removeEventListener.call(this, "scroll", scrollHandler, { passive: true });
    }
  });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LE3KWASX.js
var tab_styles_default = i`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PET5PMJP.js
var id2 = 0;
var SlTab = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController2(this);
    this.attrId = ++id2;
    this.componentId = `sl-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("sl-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return ke2`
      <div
        part="base"
        class=${Rt({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
      >
        <slot></slot>
        ${this.closable ? ke2`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = [component_styles_default, tab_styles_default];
SlTab.dependencies = { "sl-icon-button": SlIconButton };
__decorateClass([
  e6(".tab")
], SlTab.prototype, "tab", 2);
__decorateClass([
  n8({ reflect: true })
], SlTab.prototype, "panel", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlTab.prototype, "closable", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
__decorateClass([
  n8({ type: Number, reflect: true })
], SlTab.prototype, "tabIndex", 2);
__decorateClass([
  watch("active")
], SlTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], SlTab.prototype, "handleDisabledChange", 1);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BQSEJD7X.js
var tab_panel_styles_default = i`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F3F3MIHY.js
var id3 = 0;
var SlTabPanel = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id3;
    this.componentId = `sl-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return ke2`
      <slot
        part="base"
        class=${Rt({
      "tab-panel": true,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
SlTabPanel.styles = [component_styles_default, tab_panel_styles_default];
__decorateClass([
  n8({ reflect: true })
], SlTabPanel.prototype, "name", 2);
__decorateClass([
  n8({ type: Boolean, reflect: true })
], SlTabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], SlTabPanel.prototype, "handleActiveChange", 1);

// node_modules/bootstrap-icons/icons/pencil.svg
var pencil_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">%0A  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>%0A</svg>';

// node_modules/bootstrap-icons/icons/braces-asterisk.svg
var braces_asterisk_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-braces-asterisk" viewBox="0 0 16 16">%0A  <path fill-rule="evenodd" d="M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6M7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5z"/>%0A</svg>';

// node_modules/bootstrap-icons/icons/caret-right.svg
var caret_right_default = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">%0A  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>%0A</svg>';

// manual_index.ts
var _algorithm_dec2, _mode_dec, _event_dec4, _currentTab_dec3, _animationPosition_dec, _animationStatus_dec3, _svg_dec2, _editable_dec3, _animation_dec, _graph_dec4, _a6, _GraphViz_decorators, _init6, _animation, _editable3, _svg2, _animationStatus3, _animationPosition, _currentTab3, _event4, _mode, _algorithm2;
_GraphViz_decorators = [t3("webwriter-manualgraphviz")];
var GraphViz = class extends (_a6 = LitElementWw, _graph_dec4 = [n8({ type: Object })], _animation_dec = [n8({ type: Object, attribute: true, reflect: true })], _editable_dec3 = [n8({ type: Boolean })], _svg_dec2 = [r7()], _animationStatus_dec3 = [r7()], _animationPosition_dec = [r7()], _currentTab_dec3 = [r7()], _event_dec4 = [r7()], _mode_dec = [r7()], _algorithm_dec2 = [n8({ type: String, attribute: true, reflect: true })], _a6) {
  constructor() {
    super();
    __runInitializers(_init6, 5, this);
    __publicField(this, "_graph", {
      newLink: "",
      nodes: [
        { name: "Ina" },
        { name: "Bob" },
        { name: "Chen" },
        { name: "Ana" },
        { name: "Ethan" },
        { name: "George" },
        { name: "Frank" },
        { name: "Hanes" }
      ],
      links: [
        { source: "Ina", target: "Bob", weight: 3 },
        { source: "Chen", target: "Bob", weight: 2 },
        { source: "Ana", target: "Chen", weight: 1 },
        { source: "Ana", target: "Frank", weight: 1 },
        { source: "Chen", target: "Frank", weight: 4 },
        { source: "Hanes", target: "Frank", weight: 4 },
        { source: "Hanes", target: "George", weight: 2 },
        { source: "Ana", target: "Ethan", weight: 1 }
      ]
    });
    __privateAdd(this, _animation, __runInitializers(_init6, 8, this, [])), __runInitializers(_init6, 11, this);
    __privateAdd(this, _editable3, __runInitializers(_init6, 12, this, false)), __runInitializers(_init6, 15, this);
    __privateAdd(this, _svg2, __runInitializers(_init6, 16, this, null)), __runInitializers(_init6, 19, this);
    __privateAdd(this, _animationStatus3, __runInitializers(_init6, 20, this, "STOP")), __runInitializers(_init6, 23, this);
    __privateAdd(this, _animationPosition, __runInitializers(_init6, 24, this, 0)), __runInitializers(_init6, 27, this);
    __privateAdd(this, _currentTab3, __runInitializers(_init6, 28, this, "manual")), __runInitializers(_init6, 31, this);
    __privateAdd(this, _event4, __runInitializers(_init6, 32, this, null)), __runInitializers(_init6, 35, this);
    __privateAdd(this, _mode, __runInitializers(_init6, 36, this, "edit")), __runInitializers(_init6, 39, this);
    __privateAdd(this, _algorithm2, __runInitializers(_init6, 40, this, "SPANTREE")), __runInitializers(_init6, 43, this);
    addEventListener("svg-graph-event", (e8) => {
      this.event = e8;
    });
    this.addEventListener("svg-update", (e8) => {
      this.svg = e8.detail;
    });
    this.addEventListener("animation-status-update", (e8) => {
      this.animationStatus = e8.detail;
    });
    this.addEventListener("animate-graph", this.animateGraph);
    this.addEventListener("graph-update", (e8) => {
      this.graph = e8.detail;
    });
    this.addEventListener("animation-position-update", (e8) => {
      this.animationPosition = e8.detail;
    });
    this.addEventListener("animation-update", (e8) => {
      this.animation = e8.detail;
      console.log(this.animation);
    });
    this.addEventListener("algo-update", (e8) => {
      this.algorithm = e8.detail;
      console.log(this.algorithm);
    });
    this.addEventListener("algo-update", (e8) => {
      this.algorithm = e8.detail;
    });
    this.addEventListener("reset-graph", this.resetGraph);
  }
  get graph() {
    return this._graph;
  }
  set graph(value) {
    if (!value) {
      this._graph = {
        newLink: "",
        nodes: [],
        links: []
      };
      return;
    }
    const g3 = {
      newLink: "",
      nodes: value.nodes.map((n9) => ({ name: n9.name })),
      links: value.links.map((l3) => ({ source: l3.source, target: l3.target, weight: l3.weight }))
    };
    this._graph = g3;
  }
  static get scopedElements() {
    return {
      "sl-button": SlButton,
      "sl-tooltip": SlTooltip,
      "sl-tab-group": SlTabGroup,
      "sl-tab": SlTab,
      "sl-tab-panel": SlTabPanel,
      "display-graph": Graph,
      "edit-graph": EditGraph,
      "manual-animations": ManualAnimations,
      "algo-selection": AlgoSelection,
      "sl-select": SlSelect,
      "sl-option": SlOption,
      "sl-icon": SlIcon
    };
  }
  async animateGraph() {
    if (this.animationStatus === "RUN") {
      if (this.animationPosition < this.animation.length) {
        const currentStep = this.animation[this.animationPosition];
        if (currentStep.type == "RESET") resetColors(this.svg);
        if (currentStep.type == "NODE") animateNodes(this.svg, currentStep.data.names, currentStep.data.colors);
        if (currentStep.type == "LINK") animateLinks(this.svg, currentStep.data.links, currentStep.data.colors);
        if (currentStep.type == "SetNodeSubText")
          setNodeSubText(this.svg, currentStep.data.node, currentStep.data.text);
        this.animationPosition = this.animationPosition + 1;
        await delay(2e3);
        this.animateGraph();
      } else {
        this.animationPosition = 0;
        this.animationStatus = "STOP";
      }
    }
  }
  updated(_changedProperties) {
    if (_changedProperties.has("editable")) {
      if (this.shadowRoot.querySelector("sl-tab-group").show)
        this.shadowRoot.querySelector("sl-tab-group").show("manual");
    }
  }
  resetGraph() {
    const temp = { ...this.graph };
    this.graph = void 0;
    this.graph = temp;
  }
  render() {
    return ke2`<div>
            ${this.renderModeSwitch()}
            <sl-tab-group
                @sl-tab-show=${(e8) => {
      this.animationStatus = "STOP";
      this.resetGraph();
      this.currentTab = e8.detail.name;
      document.body.style.cursor = "auto";
    }}
            >
                <!-- <sl-tab slot="nav" panel="manual">Animation</sl-tab>
                ${this.isContentEditable ? ke2`<sl-tab slot="nav" panel="graph">Graph</sl-tab
                          ><sl-tab slot="nav" panel="algo">Execute</sl-tab>` : null} -->

                <sl-tab-panel name="manual" ?active=${this.mode === "animation"}>
                    <manual-animations
                        .oldRecordedAnimation=${this.animation}
                        .event=${this.event}
                        ?editable=${this.isContentEditable}
                        currentTab=${this.currentTab}
                        animationStatus=${this.animationStatus}
                        .svg=${this.svg}
                    ></manual-animations>
                </sl-tab-panel>
                ${this.isContentEditable ? ke2`<sl-tab-panel name="graph" ?active=${this.mode === "edit"}>
                              <edit-graph .event=${this.event} .graph=${this.graph}></edit-graph>
                          </sl-tab-panel>
                          <sl-tab-panel name="algo" ?active=${this.mode === "execute"}>
                              <algo-selection
                                  .event=${this.event}
                                  ?editable=${this.isContentEditable}
                                  algorithm=${this.algorithm}
                                  currentTab=${this.currentTab}
                                  animationStatus=${this.animationStatus}
                                  .graph=${this.graph}
                              ></algo-selection>
                          </sl-tab-panel> ` : null}
            </sl-tab-group>

            <display-graph .graph=${this.graph}></display-graph>
        </div>`;
  }
  renderModeSwitch() {
    return ke2`
            <sl-select
                size="small"
                @sl-change=${(e8) => this.mode = e8.target.value}
                .value=${this.mode}
                default-value="edit"
            >
                <span slot="prefix">
                    <sl-icon
                        src=${this.mode === "edit" ? pencil_default : this.mode === "animation" ? caret_right_default : braces_asterisk_default}
                    ></sl-icon>
                </span>
                <sl-option value="edit"
                    ><span slot="prefix"> <sl-icon src=${pencil_default}></sl-icon> </span>Edit
                </sl-option>
                <sl-option value="animation">
                    <span slot="prefix"> <sl-icon src=${caret_right_default}></sl-icon> </span>Animation
                </sl-option>
                <sl-option value="execute">
                    <span slot="prefix"> <sl-icon src=${braces_asterisk_default}></sl-icon> </span>Execute
                </sl-option>
            </sl-select>
        `;
  }
};
_init6 = __decoratorStart(_a6);
_animation = new WeakMap();
_editable3 = new WeakMap();
_svg2 = new WeakMap();
_animationStatus3 = new WeakMap();
_animationPosition = new WeakMap();
_currentTab3 = new WeakMap();
_event4 = new WeakMap();
_mode = new WeakMap();
_algorithm2 = new WeakMap();
__decorateElement(_init6, 3, "graph", _graph_dec4, GraphViz);
__decorateElement(_init6, 4, "animation", _animation_dec, GraphViz, _animation);
__decorateElement(_init6, 4, "editable", _editable_dec3, GraphViz, _editable3);
__decorateElement(_init6, 4, "svg", _svg_dec2, GraphViz, _svg2);
__decorateElement(_init6, 4, "animationStatus", _animationStatus_dec3, GraphViz, _animationStatus3);
__decorateElement(_init6, 4, "animationPosition", _animationPosition_dec, GraphViz, _animationPosition);
__decorateElement(_init6, 4, "currentTab", _currentTab_dec3, GraphViz, _currentTab3);
__decorateElement(_init6, 4, "event", _event_dec4, GraphViz, _event4);
__decorateElement(_init6, 4, "mode", _mode_dec, GraphViz, _mode);
__decorateElement(_init6, 4, "algorithm", _algorithm_dec2, GraphViz, _algorithm2);
GraphViz = __decorateElement(_init6, 0, "GraphViz", _GraphViz_decorators, GraphViz);
__publicField(GraphViz, "styles", i`
        #subcontainer {
            width: 50%;
        }
        #container {
            display: flex;
            flex-direction: row;
            width: 100%;
        }
    `);
__runInitializers(_init6, 1, GraphViz);
export {
  GraphViz as default
};
/*! Bundled license information:

@webwriter/lit/index.js:
  (*! Bundled license information:
  
  @lit/reactive-element/css-tag.js:
    (**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/reactive-element.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  lit-html/lit-html.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  lit-element/lit-element.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  lit-html/is-server.js:
    (**
     * @license
     * Copyright 2022 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/custom-element.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/property.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/state.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/event-options.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/base.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/query.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/query-all.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/query-async.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/query-assigned-elements.js:
    (**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  
  @lit/reactive-element/decorators/query-assigned-nodes.js:
    (**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     *)
  *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
