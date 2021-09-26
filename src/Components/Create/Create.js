import React, { Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext,FirebasesContext } from '../../store/FireBaseContext';
const Create = () => {
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebasesContext)
  const date = new Date()
const history=useHistory()
  const[name,setName]=useState('');
  const[category,setCategory]=useState('');
  const[price,setPrice]=useState('');
  const[image,setImage]=useState(null);
  const handleSubmit=()=>{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            created_at:date.toDateString()
          })
          history.push('/')
        })
      })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number" 
            id="fname" 
            value={price}
              onChange={(e)=>setPrice(e.target.value)}
            name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):''}></img>
          
            <br />
            <input type="file"  onChange={(e)=>{
              setImage(e.target.files[0])
            }}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
