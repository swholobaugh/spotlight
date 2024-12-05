const Card = ({ children }) => {
  return (
    <div className='bg-white shadow-sm rounded-lg p-6 mx-4 my-4 w-9/12 max-h-fit'>
      {children}
    </div>
  )
}

export default Card