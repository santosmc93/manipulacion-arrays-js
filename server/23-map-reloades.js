const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  console.log("array original", orders);
    const rta = orders.map(item => item.total);
  console.log("array totales", rta)
  // Aqui hacemos uso del map para generar un array nuevo con los valores total de cada objeto.

  // Ahora si queremos agrepar una propiedad extra al objeto
  // const rta2 = orders.map(item => {
  //     item.tax = 0.22; // A cada objeto dentro del array orders se le agrega la propiedad tax
  //     return item; // regresamos el valor del item ya con la propiedad agregada
  // })
  //console.log("array totales", rta2)
  console.log("array original", orders);
  // Aqui podemos comprobar que se añadio la propiedad tax al nuevo array rta2, pero tambien modifico el array original, esto sucede porque los arrays de objetos se guardan en referencias en memoria, por lo que al hacer el map estamos tambien cambiando la referenia de memoria OJO esto solo sucede con los arrays de objetos

  const rta3 = orders.map(item => {
    return {
      ...item,  // Spred operator, este hace una compia directa del item, pero solo el valor, no la referencia
      tax: 0.22 // Agregamos la propiedad que se va a añadir al objeto
    }
  })
  // De esta manera 
  console.log("array modificado", rta3);
  console.log("array original", orders);