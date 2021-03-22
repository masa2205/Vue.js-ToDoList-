var app = new Vue ({
   el: "#app",
   data: {
       things: [
        { title: 'やること1', isChecked: false },
        { title: 'やること2', isChecked: false },
        { title: 'やること3', isChecked: true },
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
           this.newthings = ""
       },
       deleteTodo: function(){
           result = confirm("本当に終わりましたか？");
           if(result) {
              this.things = this.things.filter(function(thing){
                  return thing.isChecked === false;
              })
           }else{

           }
       },
   },
   computed: {
    setDate: function() {
        hiduke = new Date();
        year = hiduke.getFullYear();
        month = hiduke.getMonth()+1;
        day = hiduke.getDate();
        return this.transfer_data = year + '/' + month + '/' + day ;
        } 
   }
})