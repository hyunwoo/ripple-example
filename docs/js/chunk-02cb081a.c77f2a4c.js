(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02cb081a"],{"09fa":function(t,n,e){var r=e("4588"),i=e("9def");t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=i(n);if(n!==e)throw RangeError("Wrong length!");return e}},"0a49":function(t,n,e){var r=e("9b43"),i=e("626a"),o=e("4bf8"),a=e("9def"),u=e("cd1c");t.exports=function(t,n){var e=1==t,c=2==t,f=3==t,s=4==t,h=6==t,l=5==t||h,d=n||u;return function(n,u,v){for(var g,w,p=o(n),y=i(p),m=r(u,v,3),b=a(y.length),A=0,x=e?d(n,b):c?d(n,0):void 0;b>A;A++)if((l||A in y)&&(g=y[A],w=m(g,A,p),t))if(e)x[A]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return A;case 2:x.push(g)}else if(s)return!1;return h?-1:f||s?s:x}}},"0f88":function(t,n,e){var r,i=e("7726"),o=e("32e9"),a=e("ca5a"),u=a("typed_array"),c=a("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,h=0,l=9,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");while(h<l)(r=i[d[h++]])?(o(r.prototype,u,!0),o(r.prototype,c,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:u,VIEW:c}},1169:function(t,n,e){var r=e("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,n,e){var r=e("52a7"),i=e("4630"),o=e("6821"),a=e("6a99"),u=e("69a8"),c=e("c69a"),f=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?f:function(t,n){if(t=o(t),n=a(n,!0),c)try{return f(t,n)}catch(e){}if(u(t,n))return i(!r.f.call(t,n),t[n])}},"36bd":function(t,n,e){"use strict";var r=e("4bf8"),i=e("77f1"),o=e("9def");t.exports=function(t){var n=r(this),e=o(n.length),a=arguments.length,u=i(a>1?arguments[1]:void 0,e),c=a>2?arguments[2]:void 0,f=void 0===c?e:i(c,e);while(f>u)n[u++]=t;return n}},"38c6":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"container"}})},i=[],o=(e("63d9"),e("d225")),a=e("b0b4"),u=e("308d"),c=e("6bb5"),f=e("4e2b"),s=e("9ab4"),h=e("60a3"),l=e("5a89"),d=function(t){function n(){var t;return Object(o["a"])(this,n),t=Object(u["a"])(this,Object(c["a"])(n).apply(this,arguments)),t.camera=null,t.scene=null,t.renderer=null,t.width=-1,t.height=-1,t.vertexShader="\n    precision highp float;\n\t\tuniform float sineTime;\n\t\tuniform mat4 modelViewMatrix;\n\t\tuniform mat4 projectionMatrix;\n\t\tattribute vec3 position;\n\t\tattribute vec3 offset;\n\t\tattribute vec4 color;\n\t\tattribute vec4 orientationStart;\n\t\tattribute vec4 orientationEnd;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec4 vColor;\n\t\tvoid main(){\n\t\t\tvPosition = offset * max( abs( sineTime * 2.0 + 1.0 ), 0.5 ) + position;\n\t\t\tvec4 orientation = normalize( mix( orientationStart, orientationEnd, sineTime ) );\n\t\t\tvec3 vcV = cross( orientation.xyz, vPosition );\n\t\t\tvPosition = vcV * ( 2.0 * orientation.w ) + ( cross( orientation.xyz, vcV ) * 2.0 + vPosition );\n\t\t\tvColor = color;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );\n\t\t}\n  ",t.fragmentShader="\n    precision highp float;\n\t\tuniform float time;\n\t\tvarying vec3 vPosition;\n\t\tvarying vec4 vColor;\n\t\tvoid main() {\n\t\t\tvec4 color = vec4( vColor );\n\t\t\tcolor.r += sin( vPosition.x * 10.0 + time ) * 0.5;\n\t\t\tgl_FragColor = color;\n\t\t}\n  ",t}return Object(f["a"])(n,t),Object(a["a"])(n,[{key:"init",value:function(){var t=document.getElementById("container");this.width=t.clientWidth,this.height=t.clientHeight,this.scene=new l["m"],this.camera=new l["k"](50,this.width/this.height,1,10),this.camera.position.z=2;var n=new l["n"],e=5e4,r=[],i=[],o=[],a=[],u=[];r.push(.025,-.025,0),r.push(-.025,.025,0),r.push(0,0,.025);for(var c=0;c<e;c++)i.push(Math.random()-.5,Math.random()-.5,Math.random()-.5),o.push(Math.random(),Math.random(),Math.random(),Math.random()),n.set(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1,2*Math.random()-1),n.normalize(),a.push(n.x,n.y,n.z,n.w),n.set(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1,2*Math.random()-1),n.normalize(),u.push(n.x,n.y,n.z,n.w);var f=new l["f"];f.maxInstancedCount=e,f.addAttribute("position",new l["d"](r,3)),f.addAttribute("offset",new l["e"](new Float32Array(i),3)),f.addAttribute("color",new l["e"](new Float32Array(o),4)),f.addAttribute("orientationStart",new l["e"](new Float32Array(a),4)),f.addAttribute("orientationEnd",new l["e"](new Float32Array(u),4));var s=new l["l"]({uniforms:{time:{value:1},sineTime:{value:1}},vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,side:l["c"],transparent:!0}),h=new l["i"](f,s);this.scene.add(h),this.renderer=new l["p"],this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),t&&t.appendChild(this.renderer.domElement)}},{key:"animate",value:function(){requestAnimationFrame(this.animate);var t=performance.now(),n=this.scene.children[0];n.rotation.y=5e-4*t,n.material.uniforms["time"].value=.005*t,n.material.uniforms["sineTime"].value=Math.sin(.05*n.material.uniforms["time"].value),this.renderer.render(this.scene,this.camera)}},{key:"mounted",value:function(){this.init(),this.animate()}},{key:"beforeDestroy",value:function(){console.warn("Instancing BD"),this.scene.dispose(),this.renderer.dispose()}}]),n}(h["b"]);d=s["a"]([Object(h["a"])({components:{}})],d);var v=d,g=v,w=(e("ba5e"),e("2877")),p=Object(w["a"])(g,r,i,!1,null,"6d2a4c4f",null),y=p.exports;n["default"]=y},"63d9":function(t,n,e){e("ec30")("Float32",4,function(t){return function(n,e,r){return t(this,n,e,r)}})},9093:function(t,n,e){var r=e("ce10"),i=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},ba5e:function(t,n,e){"use strict";var r=e("df37"),i=e.n(r);i.a},ba92:function(t,n,e){"use strict";var r=e("4bf8"),i=e("77f1"),o=e("9def");t.exports=[].copyWithin||function(t,n){var e=r(this),a=o(e.length),u=i(t,a),c=i(n,a),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?a:i(f,a))-c,a-u),h=1;c<u&&u<c+s&&(h=-1,c+=s-1,u+=s-1);while(s-- >0)c in e?e[u]=e[c]:delete e[u],u+=h,c+=h;return e}},cd1c:function(t,n,e){var r=e("e853");t.exports=function(t,n){return new(r(t))(n)}},df37:function(t,n,e){},e853:function(t,n,e){var r=e("d3f4"),i=e("1169"),o=e("2b4c")("species");t.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&(n=n[o],null===n&&(n=void 0))),void 0===n?Array:n}},ec30:function(t,n,e){"use strict";if(e("9e1e")){var r=e("2d00"),i=e("7726"),o=e("79e5"),a=e("5ca1"),u=e("0f88"),c=e("ed0b"),f=e("9b43"),s=e("f605"),h=e("4630"),l=e("32e9"),d=e("dcbc"),v=e("4588"),g=e("9def"),w=e("09fa"),p=e("77f1"),y=e("6a99"),m=e("69a8"),b=e("23c6"),A=e("d3f4"),x=e("4bf8"),S=e("33a4"),E=e("2aeb"),_=e("38fd"),M=e("9093").f,I=e("27ee"),P=e("ca5a"),F=e("2b4c"),O=e("0a49"),T=e("c366"),j=e("ebd6"),V=e("cadf"),L=e("84f2"),U=e("5cc5"),W=e("7a56"),B=e("36bd"),R=e("ba92"),C=e("86cc"),N=e("11e9"),k=C.f,z=N.f,D=i.RangeError,Y=i.TypeError,J=i.Uint8Array,q="ArrayBuffer",G="Shared"+q,H="BYTES_PER_ELEMENT",$="prototype",K=Array[$],Q=c.ArrayBuffer,X=c.DataView,Z=O(0),tt=O(2),nt=O(3),et=O(4),rt=O(5),it=O(6),ot=T(!0),at=T(!1),ut=V.values,ct=V.keys,ft=V.entries,st=K.lastIndexOf,ht=K.reduce,lt=K.reduceRight,dt=K.join,vt=K.sort,gt=K.slice,wt=K.toString,pt=K.toLocaleString,yt=F("iterator"),mt=F("toStringTag"),bt=P("typed_constructor"),At=P("def_constructor"),xt=u.CONSTR,St=u.TYPED,Et=u.VIEW,_t="Wrong length!",Mt=O(1,function(t,n){return Tt(j(t,t[At]),n)}),It=o(function(){return 1===new J(new Uint16Array([1]).buffer)[0]}),Pt=!!J&&!!J[$].set&&o(function(){new J(1).set({})}),Ft=function(t,n){var e=v(t);if(e<0||e%n)throw D("Wrong offset!");return e},Ot=function(t){if(A(t)&&St in t)return t;throw Y(t+" is not a typed array!")},Tt=function(t,n){if(!(A(t)&&bt in t))throw Y("It is not a typed array constructor!");return new t(n)},jt=function(t,n){return Vt(j(t,t[At]),n)},Vt=function(t,n){var e=0,r=n.length,i=Tt(t,r);while(r>e)i[e]=n[e++];return i},Lt=function(t,n,e){k(t,n,{get:function(){return this._d[e]}})},Ut=function(t){var n,e,r,i,o,a,u=x(t),c=arguments.length,s=c>1?arguments[1]:void 0,h=void 0!==s,l=I(u);if(void 0!=l&&!S(l)){for(a=l.call(u),r=[],n=0;!(o=a.next()).done;n++)r.push(o.value);u=r}for(h&&c>2&&(s=f(s,arguments[2],2)),n=0,e=g(u.length),i=Tt(this,e);e>n;n++)i[n]=h?s(u[n],n):u[n];return i},Wt=function(){var t=0,n=arguments.length,e=Tt(this,n);while(n>t)e[t]=arguments[t++];return e},Bt=!!J&&o(function(){pt.call(new J(1))}),Rt=function(){return pt.apply(Bt?gt.call(Ot(this)):Ot(this),arguments)},Ct={copyWithin:function(t,n){return R.call(Ot(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return et(Ot(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return B.apply(Ot(this),arguments)},filter:function(t){return jt(this,tt(Ot(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(Ot(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){Z(Ot(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return at(Ot(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(Ot(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return dt.apply(Ot(this),arguments)},lastIndexOf:function(t){return st.apply(Ot(this),arguments)},map:function(t){return Mt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ht.apply(Ot(this),arguments)},reduceRight:function(t){return lt.apply(Ot(this),arguments)},reverse:function(){var t,n=this,e=Ot(n).length,r=Math.floor(e/2),i=0;while(i<r)t=n[i],n[i++]=n[--e],n[e]=t;return n},some:function(t){return nt(Ot(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return vt.call(Ot(this),t)},subarray:function(t,n){var e=Ot(this),r=e.length,i=p(t,r);return new(j(e,e[At]))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,g((void 0===n?r:p(n,r))-i))}},Nt=function(t,n){return jt(this,gt.call(Ot(this),t,n))},kt=function(t){Ot(this);var n=Ft(arguments[1],1),e=this.length,r=x(t),i=g(r.length),o=0;if(i+n>e)throw D(_t);while(o<i)this[n+o]=r[o++]},zt={entries:function(){return ft.call(Ot(this))},keys:function(){return ct.call(Ot(this))},values:function(){return ut.call(Ot(this))}},Dt=function(t,n){return A(t)&&t[St]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Yt=function(t,n){return Dt(t,n=y(n,!0))?h(2,t[n]):z(t,n)},Jt=function(t,n,e){return!(Dt(t,n=y(n,!0))&&A(e)&&m(e,"value"))||m(e,"get")||m(e,"set")||e.configurable||m(e,"writable")&&!e.writable||m(e,"enumerable")&&!e.enumerable?k(t,n,e):(t[n]=e.value,t)};xt||(N.f=Yt,C.f=Jt),a(a.S+a.F*!xt,"Object",{getOwnPropertyDescriptor:Yt,defineProperty:Jt}),o(function(){wt.call({})})&&(wt=pt=function(){return dt.call(this)});var qt=d({},Ct);d(qt,zt),l(qt,yt,zt.values),d(qt,{slice:Nt,set:kt,constructor:function(){},toString:wt,toLocaleString:Rt}),Lt(qt,"buffer","b"),Lt(qt,"byteOffset","o"),Lt(qt,"byteLength","l"),Lt(qt,"length","e"),k(qt,mt,{get:function(){return this[St]}}),t.exports=function(t,n,e,c){c=!!c;var f=t+(c?"Clamped":"")+"Array",h="get"+t,d="set"+t,v=i[f],p=v||{},y=v&&_(v),m=!v||!u.ABV,x={},S=v&&v[$],I=function(t,e){var r=t._d;return r.v[h](e*n+r.o,It)},P=function(t,e,r){var i=t._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[d](e*n+i.o,r,It)},F=function(t,n){k(t,n,{get:function(){return I(this,n)},set:function(t){return P(this,n,t)},enumerable:!0})};m?(v=e(function(t,e,r,i){s(t,v,f,"_d");var o,a,u,c,h=0,d=0;if(A(e)){if(!(e instanceof Q||(c=b(e))==q||c==G))return St in e?Vt(v,e):Ut.call(v,e);o=e,d=Ft(r,n);var p=e.byteLength;if(void 0===i){if(p%n)throw D(_t);if(a=p-d,a<0)throw D(_t)}else if(a=g(i)*n,a+d>p)throw D(_t);u=a/n}else u=w(e),a=u*n,o=new Q(a);l(t,"_d",{b:o,o:d,l:a,e:u,v:new X(o)});while(h<u)F(t,h++)}),S=v[$]=E(qt),l(S,"constructor",v)):o(function(){v(1)})&&o(function(){new v(-1)})&&U(function(t){new v,new v(null),new v(1.5),new v(t)},!0)||(v=e(function(t,e,r,i){var o;return s(t,v,f),A(e)?e instanceof Q||(o=b(e))==q||o==G?void 0!==i?new p(e,Ft(r,n),i):void 0!==r?new p(e,Ft(r,n)):new p(e):St in e?Vt(v,e):Ut.call(v,e):new p(w(e))}),Z(y!==Function.prototype?M(p).concat(M(y)):M(p),function(t){t in v||l(v,t,p[t])}),v[$]=S,r||(S.constructor=v));var O=S[yt],T=!!O&&("values"==O.name||void 0==O.name),j=zt.values;l(v,bt,!0),l(S,St,f),l(S,Et,!0),l(S,At,v),(c?new v(1)[mt]==f:mt in S)||k(S,mt,{get:function(){return f}}),x[f]=v,a(a.G+a.W+a.F*(v!=p),x),a(a.S,f,{BYTES_PER_ELEMENT:n}),a(a.S+a.F*o(function(){p.of.call(v,1)}),f,{from:Ut,of:Wt}),H in S||l(S,H,n),a(a.P,f,Ct),W(f),a(a.P+a.F*Pt,f,{set:kt}),a(a.P+a.F*!T,f,zt),r||S.toString==wt||(S.toString=wt),a(a.P+a.F*o(function(){new v(1).slice()}),f,{slice:Nt}),a(a.P+a.F*(o(function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()})||!o(function(){S.toLocaleString.call([1,2])})),f,{toLocaleString:Rt}),L[f]=T?O:j,r||T||l(S,yt,j)}}else t.exports=function(){}},ed0b:function(t,n,e){"use strict";var r=e("7726"),i=e("9e1e"),o=e("2d00"),a=e("0f88"),u=e("32e9"),c=e("dcbc"),f=e("79e5"),s=e("f605"),h=e("4588"),l=e("9def"),d=e("09fa"),v=e("9093").f,g=e("86cc").f,w=e("36bd"),p=e("7f20"),y="ArrayBuffer",m="DataView",b="prototype",A="Wrong length!",x="Wrong index!",S=r[y],E=r[m],_=r.Math,M=r.RangeError,I=r.Infinity,P=S,F=_.abs,O=_.pow,T=_.floor,j=_.log,V=_.LN2,L="buffer",U="byteLength",W="byteOffset",B=i?"_b":L,R=i?"_l":U,C=i?"_o":W;function N(t,n,e){var r,i,o,a=new Array(e),u=8*e-n-1,c=(1<<u)-1,f=c>>1,s=23===n?O(2,-24)-O(2,-77):0,h=0,l=t<0||0===t&&1/t<0?1:0;for(t=F(t),t!=t||t===I?(i=t!=t?1:0,r=c):(r=T(j(t)/V),t*(o=O(2,-r))<1&&(r--,o*=2),t+=r+f>=1?s/o:s*O(2,1-f),t*o>=2&&(r++,o/=2),r+f>=c?(i=0,r=c):r+f>=1?(i=(t*o-1)*O(2,n),r+=f):(i=t*O(2,f-1)*O(2,n),r=0));n>=8;a[h++]=255&i,i/=256,n-=8);for(r=r<<n|i,u+=n;u>0;a[h++]=255&r,r/=256,u-=8);return a[--h]|=128*l,a}function k(t,n,e){var r,i=8*e-n-1,o=(1<<i)-1,a=o>>1,u=i-7,c=e-1,f=t[c--],s=127&f;for(f>>=7;u>0;s=256*s+t[c],c--,u-=8);for(r=s&(1<<-u)-1,s>>=-u,u+=n;u>0;r=256*r+t[c],c--,u-=8);if(0===s)s=1-a;else{if(s===o)return r?NaN:f?-I:I;r+=O(2,n),s-=a}return(f?-1:1)*r*O(2,s-n)}function z(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function D(t){return[255&t]}function Y(t){return[255&t,t>>8&255]}function J(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function q(t){return N(t,52,8)}function G(t){return N(t,23,4)}function H(t,n,e){g(t[b],n,{get:function(){return this[e]}})}function $(t,n,e,r){var i=+e,o=d(i);if(o+n>t[R])throw M(x);var a=t[B]._b,u=o+t[C],c=a.slice(u,u+n);return r?c:c.reverse()}function K(t,n,e,r,i,o){var a=+e,u=d(a);if(u+n>t[R])throw M(x);for(var c=t[B]._b,f=u+t[C],s=r(+i),h=0;h<n;h++)c[f+h]=s[o?h:n-h-1]}if(a.ABV){if(!f(function(){S(1)})||!f(function(){new S(-1)})||f(function(){return new S,new S(1.5),new S(NaN),S.name!=y})){S=function(t){return s(this,S),new P(d(t))};for(var Q,X=S[b]=P[b],Z=v(P),tt=0;Z.length>tt;)(Q=Z[tt++])in S||u(S,Q,P[Q]);o||(X.constructor=S)}var nt=new E(new S(2)),et=E[b].setInt8;nt.setInt8(0,2147483648),nt.setInt8(1,2147483649),!nt.getInt8(0)&&nt.getInt8(1)||c(E[b],{setInt8:function(t,n){et.call(this,t,n<<24>>24)},setUint8:function(t,n){et.call(this,t,n<<24>>24)}},!0)}else S=function(t){s(this,S,y);var n=d(t);this._b=w.call(new Array(n),0),this[R]=n},E=function(t,n,e){s(this,E,m),s(t,S,m);var r=t[R],i=h(n);if(i<0||i>r)throw M("Wrong offset!");if(e=void 0===e?r-i:l(e),i+e>r)throw M(A);this[B]=t,this[C]=i,this[R]=e},i&&(H(S,U,"_l"),H(E,L,"_b"),H(E,U,"_l"),H(E,W,"_o")),c(E[b],{getInt8:function(t){return $(this,1,t)[0]<<24>>24},getUint8:function(t){return $(this,1,t)[0]},getInt16:function(t){var n=$(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=$(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return z($(this,4,t,arguments[1]))},getUint32:function(t){return z($(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return k($(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return k($(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){K(this,1,t,D,n)},setUint8:function(t,n){K(this,1,t,D,n)},setInt16:function(t,n){K(this,2,t,Y,n,arguments[2])},setUint16:function(t,n){K(this,2,t,Y,n,arguments[2])},setInt32:function(t,n){K(this,4,t,J,n,arguments[2])},setUint32:function(t,n){K(this,4,t,J,n,arguments[2])},setFloat32:function(t,n){K(this,4,t,G,n,arguments[2])},setFloat64:function(t,n){K(this,8,t,q,n,arguments[2])}});p(S,y),p(E,m),u(E[b],a.VIEW,!0),n[y]=S,n[m]=E}}]);
//# sourceMappingURL=chunk-02cb081a.c77f2a4c.js.map