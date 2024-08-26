

interface HeaderProp {
    label: string
    
}
export const Header = ({ label} :HeaderProp) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center text-3xl">
            <h1 >Auth </h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )

}