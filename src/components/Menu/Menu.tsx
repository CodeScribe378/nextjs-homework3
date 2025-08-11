import Link from "next/link";

const Menu =()=>{
    return(
        <ul>
            <li><Link href={'/'}>Menu</Link></li>
            <li><Link href={'/cars'}>cars</Link></li>
            <li><Link href={'/form'}>form</Link></li>
        </ul>
    )
}
export default Menu