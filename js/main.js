(function (d) {
  var metas = d.getElementsByTagName('meta');
  var i;
  function gestureStart() {
    for (i=0; i<metas.length; i++) {
      if (metas[i].name === "viewport") {
        metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
      }
    }
  }
  if (navigator.userAgent.match(/iPhone/i)) {
    for (i=0; i<metas.length; i++) {
      if (metas[i].name === "viewport") {
        metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      }
    }
    d.addEventListener("gesturestart", gestureStart, false);
  }
}(document));

(function (w, d) {
  w.addEventListener('load', function () {
    var t = d.getElementById('front-end-web-developer');
    var h = d.querySelectorAll('#stephen-tudor > h1')[0];
    t.addEventListener('mouseover', function (e) {
      if (!h.classList) return;
      h.classList.add('active');
      return false;
    }, false);
    t.addEventListener('mouseout', function (e) {
      if (!h.classList) return;
      h.classList.remove('active');
      return false;
    }, false);
  }, false);
}(window, document, undefined));
