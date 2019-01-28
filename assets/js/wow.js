(function(){var d,f,c,e,a,g=function(h,i){return function(){return h.apply(i,arguments)}},b=[].indexOf||function(k){for(var j=0,h=this.length;j<h;j++){if(j in this&&this[j]===k){return j}}return -1};f=(function(){function h(){}h.prototype.extend=function(k,l){var i,j;for(i in l){j=l[i];if(k[i]==null){k[i]=j}}return k};h.prototype.isMobile=function(i){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(i)};h.prototype.createEvent=function(m,i,l,k){var j;if(i==null){i=false}if(l==null){l=false}if(k==null){k=null}if(document.createEvent!=null){j=document.createEvent("CustomEvent");j.initCustomEvent(m,i,l,k)}else{if(document.createEventObject!=null){j=document.createEventObject();j.eventType=m}else{j.eventName=m}}return j};h.prototype.emitEvent=function(j,i){if(j.dispatchEvent!=null){return j.dispatchEvent(i)}else{if(i in (j!=null)){return j[i]()}else{if(("on"+i) in (j!=null)){return j["on"+i]()}}}};h.prototype.addEvent=function(k,j,i){if(k.addEventListener!=null){return k.addEventListener(j,i,false)}else{if(k.attachEvent!=null){return k.attachEvent("on"+j,i)}else{return k[j]=i}}};h.prototype.removeEvent=function(k,j,i){if(k.removeEventListener!=null){return k.removeEventListener(j,i,false)}else{if(k.detachEvent!=null){return k.detachEvent("on"+j,i)}else{return delete k[j]}}};h.prototype.innerHeight=function(){if("innerHeight" in window){return window.innerHeight}else{return document.documentElement.clientHeight}};return h})();c=this.WeakMap||this.MozWeakMap||(c=(function(){function h(){this.keys=[];this.values=[]}h.prototype.get=function(n){var m,p,l,k,o;o=this.keys;for(m=l=0,k=o.length;l<k;m=++l){p=o[m];if(p===n){return this.values[m]}}};h.prototype.set=function(n,q){var m,p,l,k,o;o=this.keys;for(m=l=0,k=o.length;l<k;m=++l){p=o[m];if(p===n){this.values[m]=q;return}}this.keys.push(n);return this.values.push(q)};return h})());d=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(d=(function(){function h(){if(typeof console!=="undefined"&&console!==null){console.warn("MutationObserver is not supported by your browser.")}if(typeof console!=="undefined"&&console!==null){console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}}h.notSupported=true;h.prototype.observe=function(){};return h})());e=this.getComputedStyle||function(h,i){this.getPropertyValue=function(k){var j;if(k==="float"){k="styleFloat"}if(a.test(k)){k.replace(a,function(m,l){return l.toUpperCase()})}return((j=h.currentStyle)!=null?j[k]:void 0)||null};return this};a=/(\-([a-z]){1})/g;this.WOW=(function(){h.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:true,live:true,callback:null,scrollContainer:null};function h(i){if(i==null){i={}}this.scrollCallback=g(this.scrollCallback,this);this.scrollHandler=g(this.scrollHandler,this);this.resetAnimation=g(this.resetAnimation,this);this.start=g(this.start,this);this.scrolled=true;this.config=this.util().extend(i,this.defaults);if(i.scrollContainer!=null){this.config.scrollContainer=document.querySelector(i.scrollContainer)}this.animationNameCache=new c();this.wowEvent=this.util().createEvent(this.config.boxClass)}h.prototype.init=function(){var i;this.element=window.document.documentElement;if((i=document.readyState)==="interactive"||i==="complete"){this.start()}else{this.util().addEvent(document,"DOMContentLoaded",this.start)}return this.finished=[]};h.prototype.start=function(){var m,k,i,l;this.stopped=false;this.boxes=(function(){var o,n,q,p;q=this.element.querySelectorAll("."+this.config.boxClass);p=[];for(o=0,n=q.length;o<n;o++){m=q[o];p.push(m)}return p}).call(this);this.all=(function(){var o,n,q,p;q=this.boxes;p=[];for(o=0,n=q.length;o<n;o++){m=q[o];p.push(m)}return p}).call(this);if(this.boxes.length){if(this.disabled()){this.resetStyle()}else{l=this.boxes;for(k=0,i=l.length;k<i;k++){m=l[k];this.applyStyle(m,true)}}}if(!this.disabled()){this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler);this.util().addEvent(window,"resize",this.scrollHandler);this.interval=setInterval(this.scrollCallback,50)}if(this.config.live){return new d((function(j){return function(p){var o,q,s,n,r;r=[];for(o=0,q=p.length;o<q;o++){n=p[o];r.push((function(){var t,v,u,w;u=n.addedNodes||[];w=[];for(t=0,v=u.length;t<v;t++){s=u[t];w.push(this.doSync(s))}return w}).call(j))}return r}})(this)).observe(document.body,{childList:true,subtree:true})}};h.prototype.stop=function(){this.stopped=true;this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler);this.util().removeEvent(window,"resize",this.scrollHandler);if(this.interval!=null){return clearInterval(this.interval)}};h.prototype.sync=function(i){if(d.notSupported){return this.doSync(this.element)}};h.prototype.doSync=function(m){var o,k,i,n,l;if(m==null){m=this.element}if(m.nodeType!==1){return}m=m.parentNode||m;n=m.querySelectorAll("."+this.config.boxClass);l=[];for(k=0,i=n.length;k<i;k++){o=n[k];if(b.call(this.all,o)<0){this.boxes.push(o);this.all.push(o);if(this.stopped||this.disabled()){this.resetStyle()}else{this.applyStyle(o,true)}l.push(this.scrolled=true)}else{l.push(void 0)}}return l};h.prototype.show=function(i){this.applyStyle(i);i.className=i.className+" "+this.config.animateClass;if(this.config.callback!=null){this.config.callback(i)}this.util().emitEvent(i,this.wowEvent);this.util().addEvent(i,"animationend",this.resetAnimation);this.util().addEvent(i,"oanimationend",this.resetAnimation);this.util().addEvent(i,"webkitAnimationEnd",this.resetAnimation);this.util().addEvent(i,"MSAnimationEnd",this.resetAnimation);return i};h.prototype.applyStyle=function(k,l){var i,m,j;m=k.getAttribute("data-wow-duration");i=k.getAttribute("data-wow-delay");j=k.getAttribute("data-wow-iteration");return this.animate((function(n){return function(){return n.customStyle(k,l,m,i,j)}})(this))};h.prototype.animate=(function(){if("requestAnimationFrame" in window){return function(i){return window.requestAnimationFrame(i)}}else{return function(i){return i()}}})();h.prototype.resetStyle=function(){var n,k,i,m,l;m=this.boxes;l=[];for(k=0,i=m.length;k<i;k++){n=m[k];l.push(n.style.visibility="visible")}return l};h.prototype.resetAnimation=function(i){var j;if(i.type.toLowerCase().indexOf("animationend")>=0){j=i.target||i.srcElement;return j.className=j.className.replace(this.config.animateClass,"").trim()}};h.prototype.customStyle=function(k,l,m,i,j){if(l){this.cacheAnimationName(k)}k.style.visibility=l?"hidden":"visible";if(m){this.vendorSet(k.style,{animationDuration:m})}if(i){this.vendorSet(k.style,{animationDelay:i})}if(j){this.vendorSet(k.style,{animationIterationCount:j})}this.vendorSet(k.style,{animationName:l?"none":this.cachedAnimationName(k)});return k};h.prototype.vendors=["moz","webkit"];h.prototype.vendorSet=function(l,k){var i,j,m,n;j=[];for(i in k){m=k[i];l[""+i]=m;j.push((function(){var q,o,r,p;r=this.vendors;p=[];for(q=0,o=r.length;q<o;q++){n=r[q];p.push(l[""+n+(i.charAt(0).toUpperCase())+(i.substr(1))]=m)}return p}).call(this))}return j};h.prototype.vendorCSS=function(o,p){var l,k,n,i,m,q;m=e(o);i=m.getPropertyCSSValue(p);n=this.vendors;for(l=0,k=n.length;l<k;l++){q=n[l];i=i||m.getPropertyCSSValue("-"+q+"-"+p)}return i};h.prototype.animationName=function(j){var i;try{i=this.vendorCSS(j,"animation-name").cssText}catch(k){i=e(j).getPropertyValue("animation-name")}if(i==="none"){return""}else{return i}};h.prototype.cacheAnimationName=function(i){return this.animationNameCache.set(i,this.animationName(i))};h.prototype.cachedAnimationName=function(i){return this.animationNameCache.get(i)};h.prototype.scrollHandler=function(){return this.scrolled=true};h.prototype.scrollCallback=function(){var i;if(this.scrolled){this.scrolled=false;this.boxes=(function(){var l,k,n,m;n=this.boxes;m=[];for(l=0,k=n.length;l<k;l++){i=n[l];if(!(i)){continue}if(this.isVisible(i)){this.show(i);continue}m.push(i)}return m}).call(this);if(!(this.boxes.length||this.config.live)){return this.stop()}}};h.prototype.offsetTop=function(i){var j;while(i.offsetTop===void 0){i=i.parentNode}j=i.offsetTop;while(i=i.offsetParent){j+=i.offsetTop}return j};h.prototype.isVisible=function(l){var j,n,m,k,i;n=l.getAttribute("data-wow-offset")||this.config.offset;i=(this.config.scrollContainer&&this.config.scrollContainer.scrollTop)||window.pageYOffset;k=i+Math.min(this.element.clientHeight,this.util().innerHeight())-n;m=this.offsetTop(l);j=m+l.clientHeight;return m<=k&&j>=i};h.prototype.util=function(){return this._util!=null?this._util:this._util=new f()};h.prototype.disabled=function(){return !this.config.mobile&&this.util().isMobile(navigator.userAgent)};return h})()}).call(this);
