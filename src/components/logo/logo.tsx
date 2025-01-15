interface logoProps{
    className: string
}
const Logo = ({className}:logoProps) => {
    return(
        <a href="#" className={className}><img src="/logo/logoUnikin.png" className="w-full h-full"/></a>
    )
}
export default Logo
