// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9828__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9829__i = 0, G__9829__a = new Array(arguments.length -  0);
while (G__9829__i < G__9829__a.length) {G__9829__a[G__9829__i] = arguments[G__9829__i + 0]; ++G__9829__i;}
  args = new cljs.core.IndexedSeq(G__9829__a,0,null);
} 
return G__9828__delegate.call(this,args);};
G__9828.cljs$lang$maxFixedArity = 0;
G__9828.cljs$lang$applyTo = (function (arglist__9830){
var args = cljs.core.seq(arglist__9830);
return G__9828__delegate(args);
});
G__9828.cljs$core$IFn$_invoke$arity$variadic = G__9828__delegate;
return G__9828;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9831__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9832__i = 0, G__9832__a = new Array(arguments.length -  0);
while (G__9832__i < G__9832__a.length) {G__9832__a[G__9832__i] = arguments[G__9832__i + 0]; ++G__9832__i;}
  args = new cljs.core.IndexedSeq(G__9832__a,0,null);
} 
return G__9831__delegate.call(this,args);};
G__9831.cljs$lang$maxFixedArity = 0;
G__9831.cljs$lang$applyTo = (function (arglist__9833){
var args = cljs.core.seq(arglist__9833);
return G__9831__delegate(args);
});
G__9831.cljs$core$IFn$_invoke$arity$variadic = G__9831__delegate;
return G__9831;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
