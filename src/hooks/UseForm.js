
import { useState } from "react"


export const useForm = (inputs = {}) => {
    const [formState, setFormState] = useState(inputs);
    
    const handleFormState = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => {
            return {...prevState, [name]: value}
        })
      };
      return {formState, handleFormState}
}


