import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { v4 as uuidv4 } from "uuid";

  
  


  

const MainPage = () => {
    const [loading, setLoading] = useState(false); // For setting page to a loader if needed
    const [task, setTask] = useState({
        id: uuidv4(),
        title:"",
        catagory: "",
        completed: false 
    }) // Default task object
    const [allTasks, setAllTasks]  = useState<object[]>([]) // Array of all tasks

    // Form submit handler
    const handleSubmit = (e: any) => {
        e.preventDefault(); // Doesn't reload the page after submit
        if(task.title != ""){
            setAllTasks(prevTasks => [...prevTasks, task]); // Adds the task to array
            console.log(allTasks);
            setTask({
                id: uuidv4(),
                title:"",
                catagory: "",
                completed: false
            })
        }
        
        // Sets Task back to defult 
      
    }

   // Handle Task Change
   const handleChange = (e : any) => {
    const {name, value}  = e.target;
    // Using the previous values of task to create new task
    setTask(prevTask => ({
        ...prevTask, [name] : value,
    }));
    
   }

   // Button for deleting 
   const deleteTask = (id: string) => setAllTasks(allTasks.filter((task) => task.id !== id));



  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <Card className="w-[350px] text-center ">
            <CardHeader className="text-center">Task Management</CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Task Name " id="title" name="title" className="mb-2" value={task.title} onChange={handleChange} />
                    <Input type="text" placeholder="Task Catagory" id="catagory" name="catagory" value={task.catagory} onChange={handleChange} />
                    <Button className="mt-3">Submit</Button>
                </form>
            </CardContent>
        </Card>




        {allTasks.map((task, index) => (
                  <div className="flex items-center justify-between w-[500px] mt-10" key={index}>
                  <Label >{task.title}</Label>
                  <Label>{task.catagory}</Label>
                  <Checkbox id="terms" />
                  <Button onClick={() => deleteTask(task.id)}>Delete</Button>
         </div>
                  
        ))}
     
            
     


    </div>
  )
}

export default MainPage