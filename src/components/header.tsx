import Image from "next/image"
import Link from "next/link"
export default function Header() {
  return (
    <>
    
     <header className='header'>
       
    <Image width={100} height={100} alt="logo" src={'/picture/logo.png'} id="pic-logo"/>
    
           {/* navbar  */}
  <nav>   
    <Link href={'/'}> <span> Home </span></Link>
    <Link href={'/about'}> <span> About</span></Link>
    {/* <Link href={'/'}> <span> Skill</span></Link>
    <Link href={'/'}> <span> Project</span></Link> */}
    <Link href={'/contact-us'}> <span> Contact</span></Link>

</nav>
   </header>
   
   
    </>
  )
}
