import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {

    // const [ value, setValue ] = useState();// con [] y no con {} 
    
    const [ formValues, setFormValues ] = useState({
        name: '',
        email: '',
    });

    const { handleSubmit, register} = useForm();

    console.log(formValues);

    return (
        <>
            <h1>page CONTACT</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input id="" type="text" onChange={ event => handleChange(event,setValue) }/>
                    <p>{value}</p> */}

                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            {...register('name')}
                            // id="name" 
                            // type="text" 
                            // name="name" 
                            // onChange={ event => handleName(event, formValues, setFormValues)} 
                        />
                    </div> 

                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            {...register('email')}
                            // id="email" 
                            // type="email" 
                            // name="email" 
                            // onChange={ event => handleEmail(event, formValues, setFormValues)}  
                        />
                    </div>  

                    <div>
                        <input id="submit" type="submit" value="SEND"/>
                    </div>  



                {/* 
                    <p>
                        
                        <label htmlFor="fecha">Fecha</label>
                        <input id="fecha" type="date" name="color"/>
                        <input id="hora" type="time" name="color"/>
                        <input id="" type="color" name="color"/>
                        <input id="" type="range" name="color"/>
                        <input id="fecha2" type="datetime-local" name="color" alt="no usar nunca. dan problemas"/>
                    </p>
                    <p>
                        <label htmlFor="blanco">Blanco</label>
                        <input id="blanco" type="text" name="color"/>
                    </p>
                    <p>
                        <label htmlFor="negro">Negro</label>
                        <input type="tel" name="negro"/>
                    
                    </p>
                    <p>
                        <label htmlFor="number">Número</label>
                        <input type="number" name="number"/>
                    
                    </p>

                    <p>                        
                        <select id="country" name="country">
                            <option value="spain">España</option>
                            <option value="france">Francia</option>
                            <option value="germany">Alemania</option>
                        </select>
                   </p>
                */}
                {/* <p><input type="radio" /></p> */}
                {/* <p><input type="checkbox" /></p> */}

            </form>
        </>
    );
}

// const handleChange = (event, setValue) => {
//     console.log(event.target.value);
//     setValue(event.target.value);
// };

//const handleName = (event, formValues, setFormValues) => {
//    console.log(formValues);
//    setFormValues({...formValues, name: event.target.value});
//};
//
//const handleEmail = (event, formValues, setFormValues) => {
//    setFormValues({...formValues, email: event.target.value});
//    console.log(formValues);
//};

// escrito a mano
// const handleSubmit = (event) => {
//     event.preventDefault();
// };

const onSubmit = (data, event) => {
    console.log(data);
    // console.log(event);
}



export default Contact;