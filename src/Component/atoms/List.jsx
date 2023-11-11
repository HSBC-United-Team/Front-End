
export function List({ children, src }) {
    return (
        <li className="hover:scale-125">
            <a href={src}>
                {children}
            </a >
        </li>
    )
}