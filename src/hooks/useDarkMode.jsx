import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.jsx";


export const useDarkMode = (key, initialValue) => {
    const [ value, setValue ] = useLocalStorage(key, initialValue);
    
    const handleChanges = updatedValue =>{
        setValue(updatedValue);
    };
    
    useEffect(() => {
        
        if(value === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [value]);
    
        return [value, setValue, handleChanges]
    
    };