import {useState} from react
function CreateClient() {

    const [clientData, setClientData] = useState({
        name:"",
        email:"",
        phone:"",

        })

    const [errors, setErros] = useState({
        name:"",
        email:"",
        phone:"",
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setClientData({
          ...clientData,
          [property]: value,
        });
    
        setErrors(
          validation({
            ...clientData,
            [property]: value,
          })
        );
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (errors.name ||errors.email || errors.phone 
            ) {
          alert("Por favor revise los datos introducidos. ");
        } else {
          //aca va el dispatch
    
          setClientData({
            name:"",
         email:"",
         phone:"",
            
          });
          
        }}
  return (

    <div className={style.conteiner}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={style.label} htmlFor="name">
            
            Nombre completo:
          </label>
          <input
            className={style.input}
            type="text"
            value={clientData.name}
            name="name"
            onChange={handleInputChange}
          />
          {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
        </div>
        
        <div>
          <label className={style.label} htmlFor="phone">
            Teléfono:{" "}
          </label>
          <textarea
            className={style.input}
            type="text"
            value={clientData.phone}
            name="phone"
            onChange={handleInputChange}
          />
          {errors.summary && (
            <span style={{ color: "red" }}> {errors.phone}</span>
          )}
        </div>

        <div>
          <label className={style.label} htmlFor="email">
            Correo:{" "}
          </label>
          <textarea
            className={style.input}
            type="text"
            value={clientData.email}
            name="email"
            onChange={handleInputChange}
          />
          {errors.summary && (
            <span style={{ color: "red" }}> {errors.email}</span>
          )}
        </div>
        
        <button className={style.button} type="submit">
          AGREGAR
        </button>
      </form>
    </div>
  )


}

export default CreateClient;
