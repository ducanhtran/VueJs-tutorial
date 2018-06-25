var app = new Vue({
  el: '#app',
  data: {
    message: 'Do you wanna build a Vue app?'
  }
})

var app = new Vue({
  el: '#app-2',
  data: {
    message: 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
  }
})

var app = new Vue({
  el: '#app-3',
  data: {
    seen: true,
    todos: [
      { text: 'Học JavaScript' },
      { text: 'Học Vue' },
      { text: 'Xây dựng cái gì đó hay ho' }
    ]
  }
})
