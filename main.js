var app = new Vue ({
   el: "#app",
   data: {
       things: [
        { title: 'やること1', isChecked: false,},
        { title: 'やること2', isChecked: false,},
        { title: 'やること3', isChecked: true,},
       ],
       counter: 0
   },
   methods: {
       add: function(){
           this.counter++
       },
   },
})