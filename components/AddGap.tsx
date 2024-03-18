interface AddGapProps {
  horizontal?: string, 
  vertical?: string
}

const AddGap:React.FC<AddGapProps> = ({horizontal, vertical}) => {
  return (
    <div className={`px-${horizontal} py-${vertical}`}></div>
  )
}

export default AddGap;