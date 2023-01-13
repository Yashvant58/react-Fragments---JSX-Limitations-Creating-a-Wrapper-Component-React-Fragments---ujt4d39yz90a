import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
      <>
      {listx.map((e)=>{
       return <ListItems valuex={e}/>
      })}
       
     </>
     
  )
}

export default List;