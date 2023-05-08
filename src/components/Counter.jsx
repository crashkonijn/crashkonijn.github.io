export default ({count, title, sub}) => {
    return(
        <div className="animate text-center counter">
            <p className="text-6xl font-bold">{count}</p>
            <p className="text-4xl font-semibold">{title}</p>
            <p className="text-2xl">{sub}</p>
        </div>
    )
}