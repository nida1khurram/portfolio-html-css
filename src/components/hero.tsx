
import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
<section className="container">
 {/* left side home start */}
            <div className="home-content">
                <h1>Hi, I'm Nida Khurram </h1>
                <h2 >FRONTENED WEB DEVELOPER.</h2>
                <p>Welcome to my web developer portfolio! I'm Nida, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.</p>
                <Link href={'/'} className="btn">Hire Me</Link>
            </div>
           
           {/* right side start  */}
            <div className="box">
        <div className="pic-box">
        <Image width={200} height={200} alt="logo" src={'/picture/home-img.png'} />
        </div>
        <div className="content">
            <h3>Hi</h3> 
        </div>
    </div>

</section>
  )
}
