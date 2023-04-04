import { useState } from 'react'
import {UploadFile,UploadText} from '../components'
import './App.css'

function App() {
  const [file, setfile] = useState()

  return (
    <>
    <div className='ParentDiv'>
      <div className='child'>
        <UploadFile/>
      </div>
      <div className='child'>
        <UploadText/>
      </div>
    </div>
    </>
  )
}

export default App
