$(function(){
    $("#miFormulario").validate({
        rules:{
            sku:{
                required: true,
                minlength: 8
            },
            nombre:{
                required: true,
                minlength: 3
            },
            cantidad:{
                required: true,
                minlength: 5
            },
            Categorias:{
                required: true
            }
        },
        messages:{
            sku:{
                required:"Debe código del árticulo",
                minlength:"Minimo 8 caracteres"
            },
            nombre:{
                required:"El nombre del producto es obligatorio.",
                email:"Formato correo no valido."
            },
            cantidad:{
                required:"debe ingresar una cantidad"
            },
            Categorias:"Debe elegir una categoria"
        }
    })
})