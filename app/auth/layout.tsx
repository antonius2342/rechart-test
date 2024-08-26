
const AuthLayout = ({children}: { children: React.ReactNode}) => {
    return (
        <div className="h-screen flex item-center justify-center bg-black text-white ">{children}</div>
    )
}

export default AuthLayout