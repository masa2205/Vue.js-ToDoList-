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
           if(this.newthings == "")return;
           this.things.push({
               title: this.newthings,
               isChecked: false,
           });
           this.newthings = "";
       },
       deleteTodo: function(){
           this.things = this.things.filter(function(thing){
               return thing.isChecked === false;
           });
       },
   },
})