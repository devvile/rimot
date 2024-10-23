import { DataContext } from "../context/DataContext"
import { useContext } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import AddButton from "./AddButton";
export default function OrdersTable(){
    const {appData} = useContext(DataContext);
    return (
    <section>
    <DataTable stripedRows className={"py-10"} value={appData}  tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name"></Column>
        <Column field="amount" header="Category"></Column>
        <Column field="price" header="Quantity"></Column>
        <Column field="total" header="Total"></Column>
    </DataTable>
    <AddButton/>
    </section>
             )
 {/*
    return<ul>
    {appData.map((el)=>{return(<li key={Math.random()}><p>{el.name}</p></li>)})}
    </ul>

    */}
}