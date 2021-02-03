import React from 'react'

const Form = (props) => {

   const [formData, setFormData] = React.useState(props.player)

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleSubmit(formData)
      props.history.push('/') 
   }

// UPDATE THE TEXT ON FORM
   const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value })
   }


   return (
      <div>
         <form className= 'form-container'>
      <input
         className= 'name-input'
        style= {{ width: '40vw' }}
        type="text"
        placeholder="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className= 'age-input'
        style= {{ width: '20vw' }}
        type= "Number"
        name= "age"
        placeholder= "age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        className= 'style-input'
        style= {{ width: '40vw' }}
        type="text"
        placeholder="style"
        name="style"
        value={formData.title}
        onChange={handleChange}
      />
      <input
      className= 'img-input'
        style= {{ width: '40vw' }}
        type="text"
        placeholder="image URL"
        name="img"
        value={formData.img}
        onChange={handleChange}
      />
    </form>
    <input 
    className= 'submit-btn'
    type="submit"  
    style= {{ width: "15vw" }} />
      </div>
   )
}

export default Form
