import React ,{Component} from 'react'
import styled from 'styled-components'
import axios from 'axios' ;
import {Wooork ,Worktitle ,Part  ,Partdesc ,FirstPart ,Line ,Icon ,Parttitle ,Container} from './style.js'
class Work extends Component {
 

    state = {
        works :[]
    }

    componentDidMount()
    {
        axios.get('js/data.json').then(res => {this.setState({ works: res.data.works})})
    }
    render()    
        { 
            const {works} = this.state;
            const worklist = works.map( (workitem) =>{
                return(
                    <Part first ={workitem.id} key={workitem.id}>
                        <Icon className={workitem.icon_name}></Icon>
                        <Parttitle>{workitem.title}</Parttitle>
                        <Line ></Line>
                        <Partdesc >
                            {workitem.body}
                        </Partdesc>
                    </Part>
                )
            })

        return(
        <Wooork>
                <div className='container'>
                    <Worktitle>
                        My Work
                    </Worktitle>

                    {worklist}
                
                </div>

        </Wooork>
        )
    }
} 

export default Work;