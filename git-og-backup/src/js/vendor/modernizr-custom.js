/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-supports-svgclippaths-touchevents-setclasses !*/
!(function (e, n, t) {
	function r(e, n) {
		return typeof e === n;
	}
	function o() {
		var e, n, t, o, s, i, a;
		for (var l in C)
			if (C.hasOwnProperty(l)) {
				if (
					((e = []),
					(n = C[l]),
					n.name &&
						(e.push(n.name.toLowerCase()),
						n.options &&
							n.options.aliases &&
							n.options.aliases.length))
				)
					for (t = 0; t < n.options.aliases.length; t++)
						e.push(n.options.aliases[t].toLowerCase());
				for (
					o = r(n.fn, 'function') ? n.fn() : n.fn, s = 0;
					s < e.length;
					s++
				)
					(i = e[s]),
						(a = i.split('.')),
						1 === a.length
							? (Modernizr[a[0]] = o)
							: (!Modernizr[a[0]] ||
									Modernizr[a[0]] instanceof Boolean ||
									(Modernizr[a[0]] = new Boolean(
										Modernizr[a[0]]
									)),
							  (Modernizr[a[0]][a[1]] = o)),
						S.push((o ? '' : 'no-') + a.join('-'));
			}
	}
	function s(e) {
		var n = b.className,
			t = Modernizr._config.classPrefix || '';
		if ((T && (n = n.baseVal), Modernizr._config.enableJSClass)) {
			var r = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)');
			n = n.replace(r, '$1' + t + 'js$2');
		}
		Modernizr._config.enableClasses &&
			((n += ' ' + t + e.join(' ' + t)),
			T ? (b.className.baseVal = n) : (b.className = n));
	}
	function i() {
		return 'function' != typeof n.createElement
			? n.createElement(arguments[0])
			: T
			? n.createElementNS.call(
					n,
					'http://www.w3.org/2000/svg',
					arguments[0]
			  )
			: n.createElement.apply(n, arguments);
	}
	function a() {
		var e = n.body;
		return e || ((e = i(T ? 'svg' : 'body')), (e.fake = !0)), e;
	}
	function l(e, t, r, o) {
		var s,
			l,
			u,
			f,
			c = 'modernizr',
			p = i('div'),
			d = a();
		if (parseInt(r, 10))
			for (; r--; )
				(u = i('div')),
					(u.id = o ? o[r] : c + (r + 1)),
					p.appendChild(u);
		return (
			(s = i('style')),
			(s.type = 'text/css'),
			(s.id = 's' + c),
			(d.fake ? d : p).appendChild(s),
			d.appendChild(p),
			s.styleSheet
				? (s.styleSheet.cssText = e)
				: s.appendChild(n.createTextNode(e)),
			(p.id = c),
			d.fake &&
				((d.style.background = ''),
				(d.style.overflow = 'hidden'),
				(f = b.style.overflow),
				(b.style.overflow = 'hidden'),
				b.appendChild(d)),
			(l = t(p, e)),
			d.fake
				? (d.parentNode.removeChild(d),
				  (b.style.overflow = f),
				  b.offsetHeight)
				: p.parentNode.removeChild(p),
			!!l
		);
	}
	function u(e, n) {
		return !!~('' + e).indexOf(n);
	}
	function f(e) {
		return e
			.replace(/([a-z])-([a-z])/g, function (e, n, t) {
				return n + t.toUpperCase();
			})
			.replace(/^-/, '');
	}
	function c(e, n) {
		return function () {
			return e.apply(n, arguments);
		};
	}
	function p(e, n, t) {
		var o;
		for (var s in e)
			if (e[s] in n)
				return t === !1
					? e[s]
					: ((o = n[e[s]]), r(o, 'function') ? c(o, t || n) : o);
		return !1;
	}
	function d(e) {
		return e
			.replace(/([A-Z])/g, function (e, n) {
				return '-' + n.toLowerCase();
			})
			.replace(/^ms-/, '-ms-');
	}
	function m(n, t, r) {
		var o;
		if ('getComputedStyle' in e) {
			o = getComputedStyle.call(e, n, t);
			var s = e.console;
			if (null !== o) r && (o = o.getPropertyValue(r));
			else if (s) {
				var i = s.error ? 'error' : 'log';
				s[i].call(
					s,
					'getComputedStyle returning null, its possible modernizr test results are inaccurate'
				);
			}
		} else o = !t && n.currentStyle && n.currentStyle[r];
		return o;
	}
	function v(n, r) {
		var o = n.length;
		if ('CSS' in e && 'supports' in e.CSS) {
			for (; o--; ) if (e.CSS.supports(d(n[o]), r)) return !0;
			return !1;
		}
		if ('CSSSupportsRule' in e) {
			for (var s = []; o--; ) s.push('(' + d(n[o]) + ':' + r + ')');
			return (
				(s = s.join(' or ')),
				l(
					'@supports (' +
						s +
						') { #modernizr { position: absolute; } }',
					function (e) {
						return 'absolute' == m(e, null, 'position');
					}
				)
			);
		}
		return t;
	}
	function h(e, n, o, s) {
		function a() {
			c && (delete q.style, delete q.modElem);
		}
		if (((s = r(s, 'undefined') ? !1 : s), !r(o, 'undefined'))) {
			var l = v(e, o);
			if (!r(l, 'undefined')) return l;
		}
		for (
			var c, p, d, m, h, g = ['modernizr', 'tspan', 'samp'];
			!q.style && g.length;

		)
			(c = !0), (q.modElem = i(g.shift())), (q.style = q.modElem.style);
		for (d = e.length, p = 0; d > p; p++)
			if (
				((m = e[p]),
				(h = q.style[m]),
				u(m, '-') && (m = f(m)),
				q.style[m] !== t)
			) {
				if (s || r(o, 'undefined')) return a(), 'pfx' == n ? m : !0;
				try {
					q.style[m] = o;
				} catch (y) {}
				if (q.style[m] != h) return a(), 'pfx' == n ? m : !0;
			}
		return a(), !1;
	}
	function g(e, n, t, o, s) {
		var i = e.charAt(0).toUpperCase() + e.slice(1),
			a = (e + ' ' + j.join(i + ' ') + i).split(' ');
		return r(n, 'string') || r(n, 'undefined')
			? h(a, n, o, s)
			: ((a = (e + ' ' + A.join(i + ' ') + i).split(' ')), p(a, n, t));
	}
	function y(e, n, r) {
		return g(e, t, t, n, r);
	}
	var S = [],
		C = [],
		w = {
			_version: '3.6.0',
			_config: {
				classPrefix: '',
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0
			},
			_q: [],
			on: function (e, n) {
				var t = this;
				setTimeout(function () {
					n(t[e]);
				}, 0);
			},
			addTest: function (e, n, t) {
				C.push({ name: e, fn: n, options: t });
			},
			addAsyncTest: function (e) {
				C.push({ name: null, fn: e });
			}
		},
		Modernizr = function () {};
	(Modernizr.prototype = w), (Modernizr = new Modernizr());
	var _ = 'CSS' in e && 'supports' in e.CSS,
		x = 'supportsCSS' in e;
	Modernizr.addTest('supports', _ || x);
	var b = n.documentElement,
		T = 'svg' === b.nodeName.toLowerCase(),
		P = w._config.usePrefixes
			? ' -webkit- -moz- -o- -ms- '.split(' ')
			: ['', ''];
	w._prefixes = P;
	var z = {}.toString;
	Modernizr.addTest('svgclippaths', function () {
		return (
			!!n.createElementNS &&
			/SVGClipPath/.test(
				z.call(
					n.createElementNS('http://www.w3.org/2000/svg', 'clipPath')
				)
			)
		);
	});
	var E = (w.testStyles = l);
	Modernizr.addTest('touchevents', function () {
		var t;
		if (
			'ontouchstart' in e ||
			(e.DocumentTouch && n instanceof DocumentTouch)
		)
			t = !0;
		else {
			var r = [
				'@media (',
				P.join('touch-enabled),('),
				'heartz',
				')',
				'{#modernizr{top:9px;position:absolute}}'
			].join('');
			E(r, function (e) {
				t = 9 === e.offsetTop;
			});
		}
		return t;
	});
	var N = 'Moz O ms Webkit',
		j = w._config.usePrefixes ? N.split(' ') : [];
	w._cssomPrefixes = j;
	var A = w._config.usePrefixes ? N.toLowerCase().split(' ') : [];
	w._domPrefixes = A;
	var k = { elem: i('modernizr') };
	Modernizr._q.push(function () {
		delete k.elem;
	});
	var q = { style: k.elem.style };
	Modernizr._q.unshift(function () {
		delete q.style;
	}),
		(w.testAllProps = g),
		(w.testAllProps = y),
		Modernizr.addTest('csstransforms', function () {
			return (
				-1 === navigator.userAgent.indexOf('Android 2.') &&
				y('transform', 'scale(1)', !0)
			);
		}),
		Modernizr.addTest('csstransforms3d', function () {
			return !!y('perspective', '1px', !0);
		}),
		o(),
		s(S),
		delete w.addTest,
		delete w.addAsyncTest;
	for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
	e.Modernizr = Modernizr;
})(window, document);
