const Notification = ({ message,errorCondition }) => {
    if (message === null) {
      return null
    }
    if (errorCondition) {
        return(
            <div className='error'>
                {message}
            </div>
        )
    }


    return (
      <div className='success'>
        {message}
      </div>
    )
  }


  
export default Notification