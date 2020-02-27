(function() {

  var els = document.querySelectorAll('.counter')

  Array.prototype.slice.call(els).forEach(function (el) {
    var initialValue = parseInt(el.innerText.replace(',', ''))
 	animateValue(el, initialValue, 260)
  })
  
  

  function animateValue(obj, value, duration) {
    var start
    obj.innerHTML = 0
    window.requestAnimationFrame(animateFrame)

    function animateFrame(timestamp) {
      if (!start) start = timestamp
      var progress = timestamp - start
      var next = Math.floor((value * progress) / duration)
      const current = (next < value ? next : value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      if (next < value) {
        obj.innerHTML = current
        window.requestAnimationFrame(animateFrame)
      } else obj.innerHTML = current
    }
  }

})()