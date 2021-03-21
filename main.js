var app = new Vue ({
   el: "#app",
   data: {
       message: "Hello World",
       isChecked: true,
       things: [
        { title: 'やること1'},
        { title: 'やること2'},
        { title: 'やること3'},
        
       ],
       counter: 0
   },
   methods: {
       add: function(){
           this.counter++
       },
   },
})