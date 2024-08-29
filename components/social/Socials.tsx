import { socials } from "@/app/utils/constants"
import { ISocialStyles } from "@/app/utils/interfaces"
import Link from "next/link"

function Socials({containerStyles, iconStyles}: ISocialStyles) {
  return (
    <div className={containerStyles}>
      {
        socials.map((social, index)=>{
          return(
            <Link key={index} href={social.path} target="_blank" className={iconStyles}>
              <social.icon/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Socials