import React from 'react'

type InformationProps = {
    imageUrl: string,
    Tcontent: string,
    description: string,
}

const InformLayout: React.FC<InformationProps> = ({ imageUrl, Tcontent, description }) => {
  return (
    <div>
        <img src={imageUrl}/>
        <div>
            <div className=' font-workSans text-sm font-semibold'>{Tcontent}</div>
            <div className=' font-workSans text-sm '>{description}</div>
        </div>
    </div>
  )
}

export default InformLayout