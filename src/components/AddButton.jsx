
import { Button } from 'primereact/button';

export default function AddButton(){
    return <>
    <Button className="px-4 py-2 bg-stone-500 text-white rounded hover:bg-stone-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition" label="Submit New Expense" />
    </>
}