(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-331244db"],{"55fc":function(e,t,i){},afae:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"container"}})},a=[],r=i("d225"),h=i("b0b4"),s=i("308d"),c=i("6bb5"),d=i("4e2b"),o=i("9ab4"),u=i("60a3"),b=i("5a89"),l=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.camera=null,e.scene=null,e.renderer=null,e.cube=new b["d"],e.width=-1,e.height=-1,e}return Object(d["a"])(t,e),Object(h["a"])(t,[{key:"init",value:function(){var e=document.getElementById("container");this.width=e.clientWidth,this.height=e.clientHeight,this.scene=new b["i"],this.camera=new b["h"](27,this.width/this.height,1,4e3),this.camera.position.z=2750;for(var t=1e4,i=new b["a"],n=new b["e"]({vertexColors:b["j"]}),a=[],r=[],h=800,s=0;s<t;s++){var c=Math.random()*h-h/2,d=Math.random()*h-h/2,o=Math.random()*h-h/2;a.push(c,d,o),r.push(c/h+.5),r.push(d/h+.5),r.push(o/h+.5)}i.addAttribute("position",new b["c"](a,3)),i.addAttribute("color",new b["c"](r,3)),i.computeBoundingSphere(),this.cube=new b["d"](i,n),this.scene.add(this.cube),this.renderer=new b["k"],this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setSize(this.width,this.height),e&&e.appendChild(this.renderer.domElement)}},{key:"animate",value:function(){requestAnimationFrame(this.animate);var e=.001*Date.now();this.cube.rotation.x=.25*e,this.cube.rotation.y=.5*e,this.renderer.render(this.scene,this.camera)}},{key:"mounted",value:function(){this.init(),this.animate()}}]),t}(u["b"]);l=o["a"]([Object(u["a"])({components:{}})],l);var w=l,m=w,p=(i("b1d7"),i("2877")),f=Object(p["a"])(m,n,a,!1,null,"77f5b524",null),v=f.exports;t["default"]=v},b1d7:function(e,t,i){"use strict";var n=i("55fc"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-331244db.5740dd6d.js.map