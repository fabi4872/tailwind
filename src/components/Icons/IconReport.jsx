const IconReport = ({ ...props }) => {
  return (
    <svg 
      { ...props } 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      strokeWidth="2" 
      stroke="currentColor" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round">  
      <path stroke="none" d="M0 0h24v24H0z"/>  
      <polyline points="4 19 8 13 12 15 16 10 20 14 20 19 4 19" />  
      <polyline points="4 12 7 8 11 10 16 4 20 8" />
    </svg>
  )
}

export default IconReport;
