import { createContext, useEffect, useState } from "react";
import { dbObject } from "../helper/constant";


export const AppContext = createContext()

const AppProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const getData = async () => {
        try {
            const {data} = await dbObject.get('/users/auth.php')
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider