
import styles from "./App.module.css";
import {User} from './User'


function App() {
  // const name = 'efe'
  // const surname =  <h3>Kırlı</h3>
  // const age = <h3>26</h3>
  // const email = <h3>efes@efekrl.com</h3>
  // const user = (
  //   <div>
  //     <h2>{name.toUpperCase()}</h2>  
  //       {surname} 
  //       {age}
  //       {email}
  //     </div>
  // )
  // ------------------------------------

  // const age = 25;
  // const isGreen = false;
 // ------------------------------------
  // const names = ["efe","samed","emre","mehmet","deniz"]
  // ------------------------------------

  // const users = [ 
  //   { name: 'efe', age : 26},
  //   { name: 'antoine', age : 28},
  //   { name: 'louis', age : 29},
  // ]

  const planets = [ 
    { name: 'Mars', isGasPlane: false},
    { name: 'Earth', isGasPlane: false},
    { name: 'Jupiter', isGasPlane: true},
    { name: 'Venus', isGasPlane: false},
    { name: 'Neptune', isGasPlane: true},
    { name: 'Uranus', isGasPlane: true},
    { name: 'Saturn', isGasPlane: true},
    { name: 'Mercury', isGasPlane: false},
  ];

  return (
    <div className={styles.App}>
      {/* call the components like of this */}
       {/* <User name='Efe' age={26} email='efe@efes.com'/> 
       <User name='Antoine' age={28} email='antoine@antoine.com'/> 
       <User name='Louis' age={29} email='louis@louis.com'/> 

       <Job salary = {100000} position ='Senior SDE' company ='Amazon'/>
       <Job salary = {80000} position ='Middle SDE' company ='Google'/>
       <Job salary = {60000} position ='Junior SDE' company ='Netflix'/>

        <h1 className={styles.name}> KIRLI</h1> */}


        {/* {age >= 18 ? <h1 className={styles.name}>OVER AGE</h1> : <h1>UNDER AGE</h1> }
        <h1 style={{color: isGreen ? "green" : "blue"}}>THIS HAS COLOR</h1>
      {isGreen && <button>CLICK ME !</button>} */}

        {/* <h1>{names[0]}</h1>
        <h1>{names[1]}</h1>
        <h1>{names[2]}</h1>
        <h1>{names[3]}</h1> */}

       {/* { names.map((name,key)=>{
         return <h1 key={key}>{name.slice(0,1).toUpperCase()}{name.slice(1) }</h1>
       })} */}

     {/* {users.map((user,key)=>{ 
      return ( 
        <User name={user.name} age={user.age} /> // User component
      )
     })} */}

    {planets.map((planet,key)=> 
     planet.isGasPlane && <h1>{planet.name}</h1>
    )}
    </div>
  );
} 
    // 01:04:15


// const User = (props) => {  // react component
//   // always be returning
//       return (
//         <div>
//           <h1>{props.name}</h1>
//           <h1>{props.age}</h1>
//           <h1>{props.email}</h1>
//         </div>
//       ) 
//     }

//   const Job = (props) => { 
//       return ( 
//         <div>

//               <p>
//               <strong>Salary :</strong>  {props.salary} <br></br>
//              <strong>Position :</strong> {props.position}<br></br>
//              <strong>Company :</strong>  {props.company}<br></br>
//             </p>
            
//         </div>
//       )
//   }




    //   const GetName = () => {   // js function
    //     return "Efes" 
    // }

    // every component needs to start with capital letter
    // const GetNameComponent = () => {  // react component
    //   return <h2>Efes</h2> // always be returning
    // }
export default App;
