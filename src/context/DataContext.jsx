import { createContext, useState, useReducer } from 'react';
import { ORDER_DATA } from '../constants/OrderData';
export const DataContext = createContext(
    {items:[],
        addItem: ()=>{},
        deleteItem:()=>{},
});

export  function DataProvider({children}){
    const initialData = ORDER_DATA;
    const [appData, setAppData] = useState(initialData);


    return( 
        <DataContext.Provider value = {{appData}}>
          {children}
        </DataContext.Provider>
    )
}