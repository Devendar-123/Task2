import React, { createContext } from 'react'
import Child from './Child'

const data = createContext();
const Parent = () => {
    const details = [
        {name:"Devendar", email:"devendar@gmail.com",animal:"Rabbit.jpg", flower:"Rose.jpg",place:"delhi.jpg",bird:"Peacock.jpg", id:1},
        {name:"Ajay", email:"ajay@gmail.com",animal:"Lion.jpg", flower:"tulip.jpg",place:"kolkata.jpg",bird:"Parrot.jpg", id:2},
        {name:"Kiran", email:"kiran@gmail.com",animal:"dear.jpg", flower:"lilly.jpg",place:"mumbai.jpg",bird:"Sparrow.jpg", id:3},
        {name:"Jeevan", email:"jeevan@gmail.com",animal:"Tiger.jpg", flower:"Hybiscus.jpg",place:"chennai.jpg",bird:"King Fisher.jpg", id:4},
        {name:"Keerthi", email:"keerthi@gmail.com",animal:"Elephant.jpg", flower:"jasmine.jpg",place:"goa.jpg",bird:"White Parrot.jpg", id:5},
        {name:"Mukesh", email:"mukesh@gmail.com",animal:"Cat.jpg", flower:"marie gold.jpg",place:"agra.jpg",bird:"Eagle.jpg", id:6},
        {name:"Ishu", email:"ishu@gmail.com",animal:"Kangaroo.jpg", flower:"white rose.jpg",place:"bangaloore.jpg",bird:"Vulture.jpg", id:7},
        {name:"Divyamsh", email:"divyamsh@gmail.com",animal:"Cheetah.jpg", flower:"lotus.jpg",place:"munnar.jpg",bird:"Woodpecker.jpg", id:8},
        {name:"Srikanth", email:"srikanth@gmail.com",animal:"Black panther.jpg", flower:"flower1.jpg",place:"kodaikanal.jpg",bird:"Ku Ku.jpg", id:9},
        {name:"Sanjay", email:"sanjay@gmail.com",animal:"Squirrel.jpg", flower:"flower 2.jpg",place:"kerala.jpg",bird:"Humming Bird.jpg", id:10},
    ]
  return (
    <div>
     <data.Provider value={{detail:details}}>
        <Child/>
     </data.Provider>
    </div>
  )
}

export default Parent
export {data}