const datosFormulario = (event) => {
    event.preventDefault();

    const formulario = new FormData(event.target)

    console.log("Name: ", formulario.get("nombre") + "\n" +
                "Last Name: ", formulario.get("apellido") + "\n" +
                "Email: ", formulario.get("email") + "\n" +
                "Company Name: ", formulario.get("company")+ "\n" +
                "Phone Number: ", formulario.get("telefono") + "\n" +
                "Message: " + formulario.get("mensaje") + "\n" 
    )

    alert("Name: " + formulario.get("nombre") + "\n" +
          "Last Name: " + formulario.get("apellido") + "\n" +
          "Email: " + formulario.get("email") + "\n" +
          "Company Name: " + formulario.get("company") + "\n" +
          "Phone Number: " + formulario.get("telefono") + "\n" +
          "Message: " + formulario.get("mensaje") + "\n"
    
    );

}