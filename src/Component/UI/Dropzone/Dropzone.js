import React from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import './Dropzone.css';
import Dropzone from 'react-dropzone-uploader'


const DropZoneCustom = (props) => {

  

  // specify upload params and url for your files
  //const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  const getUploadParams = ({val}) => {
    console.log(val);
    return {}
  }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { 
    console.log(status, meta, file);
    props.uploadFile(file)
  }
  
  // receives array of files that are done uploading when submit button is clicked
  // const handleSubmit = (files, allFiles) => {
  //   console.log(files.map(f => f.meta))
    
  // }

  

  return (
    <Dropzone
      // getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      accept="image/*"
      multiple={false}
    />
  )
}

export default DropZoneCustom;
