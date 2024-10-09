import React, { useEffect, useState } from 'react'

export default function UploadImage() {
  const [image, setImage] = useState({})  
  const [status, setStatus] = useState('idle')

  useEffect(()=>{
    return()=>{
        URL.revokeObjectURL(image.imagePreviewUrl)
    }
  },[image.imagePreviewUrl])

  const requestUploadImg = async (file)=>{
    try{
        setStatus('pending')
        const formData = new FormData()
        formData.append('file', file);
        const response = await fetch('https://api.escuelajs.co/api/v1/files/upload',
            {
                method: 'POST',
                body: formData
            }
        )
        return response.json()
    }catch{
        return false
    }finally{
        setStatus('idle')
    }
  }
  const handleUploadFile = async ()=>{
   const output = await requestUploadImg(image.file)
   console.log(output.location);
   
   setImage({...image, output: output.location, imagePreviewUrl: null}) 
   
  }
  const onChange = (e)=>{
    const imageUrl = URL.createObjectURL(e.target.files[0])
    setImage({...image, imagePreviewUrl: imageUrl, file: e.target.files[0]})
  }
  return (
    <div>
        <input type="file" name="image" onChange={onChange}/>
        <button disabled={status === "pending"} onClick={handleUploadFile}>{status==='pending'? 'UpLoading...': 'Upload'}</button>
        <div>
        <img src={image.imagePreviewUrl} alt="" width={300} />
        {image.output && <a href={image.output}>{image.output}</a>}
        </div>
    </div>
  )
}
