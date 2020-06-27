import React, { useEffect,useState } from 'react'
import { Jumbotron,Breadcrumb, BreadcrumbItem,Button  } from 'reactstrap'
import ProjectCard from '../Components/Projects/ProjectCard'
import QuoteBox from '../Components/QuoteBox'
import {getProjects} from '../API/Projects'
import { Spinner } from 'reactstrap';



export default function Projects() {
    
    const[data,setData] = useState([])
    const [loading,setLoading]=useState(true)


    const fetchProjects=()=>{
        getProjects()
        .then(response=>{
            console.log(response)
            if(response.success){
                setData(response.data)
            }
            else{
                console.log(response.message)
            }
        })
        .catch(error=>(console.log(error)))
        .finally(()=>setLoading(false))
    }

    useEffect(()=>{
        fetchProjects()
    },[])


    return (
        <div className="pt-5">
            <Jumbotron>
            <h1 className="display-4 font-weight-bold ml-3">Projects</h1>
                <Breadcrumb>
                <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Projects</BreadcrumbItem>
                </Breadcrumb>
            </Jumbotron>
            <section className="p-5">
                <div className="container px-5">
                    <div className="row pr-3">
                    <div className="btngroup">
                    <Button color="info" >ALL</Button>
                    <Button color="light" >HVAC</Button>
                    <Button color="light" >MEP</Button>
                    <Button color="light" >INTERIORS</Button>
                    <Button color="light" >PHE</Button>
                    <Button color="light" >MBS</Button>
                    <Button color="light" >FIREFIGHTING</Button>
                    </div>
                    </div>
                        {
                            loading ? 
                            (
                                <div className="row text-center pt-5">
                                <Spinner style={{ width: '5rem', height: '5rem' }} type="grow" color="primary" />
                                </div>
                            ):
                            (
                            data ? (
                                <div className="row mt-5">{data.map((item)=>(
                                    <ProjectCard project={item} key={item._id} />
                                )
                                )}</div>
                            ):(
                                <div className="row mt-5">
                                    No Projects Found
                                </div>
                            )
                            )
                        }
                </div>
            </section>
            <QuoteBox />
        </div>
    )
}
