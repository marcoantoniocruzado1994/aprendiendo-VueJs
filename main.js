 const app=new Vue({
    el: '#taskApp',
    data:{
        nameApp:"Tareas con VueJs",
        tareas:[
            {
                title:"tarea1",
                hecho:false
            },
            {
                title:"tarea2",
                hecho:false
            },{
                title:"tarea3",
                hecho:false
            }
        ],
        nuevaTarea:"",
        estado:false
    },
    methods: {
        eliminarTarea:function(tarea)
        {
           this.tareas.splice(this.tareas.indexOf(tarea),1)
        }   ,

        add: function(e){
            e.preventDefault();
            this.tareas.push({title:this.nuevaTarea,hecho:this.estado})
            this.nuevaTarea=""
        }

    }
})