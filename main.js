var app = new Vue ({
   el: "#app",
   data: {
       things: [
        { title: 'やること1', isChecked: false,},
        { title: 'やること2', isChecked: false,},
        { title: 'やること3', isChecked: true,},
       ],   
       newthings:"",
   },
   methods: {
       add: function(){
           this.things.push({
               title: this.newthings,
               isChecked: false,
           });
           this.newthings = "";
       },
   },
})