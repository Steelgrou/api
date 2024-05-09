import { useState } from 'react'
import React, { useEffect } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  const [category, setCategory] = useState([])
  const imgurl = "https://api.autozoomrental.com/api/uploads/images/"
  const getCategory = () => {
    axios({
      url: 'https://autoapi.dezinfeksiyatashkent.uz/api/categories',
      method: 'GET',
    }).then((res) => {
      console.log(res.data.data);
    }).catch((err) => {
      console.log(err);
    })

  }
  useEffect(() => {
    getCategory()
  })


  return (
    <div className='container'>
      {
        category && category.map((item, index) => (
          <div key={index}>
            {item.name_en}
            {item.name_ru}
            <img style={{width:'30'}} src={`${imgurl}${item.image_src}`} alt={item.name_en} />


          </div >
        ))
      }
    </div>
  )
}


