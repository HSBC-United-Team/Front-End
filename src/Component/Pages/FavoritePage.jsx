
import { Button } from "../atoms/Button"
import { Navbar } from "../organisms/Navbar"

const Fav = () => {

    return (
        <>
            <Navbar> Favorite</Navbar>
            <div className="flex justify-center">
                <Button>Add All To Cart</Button>
            </div>
        </>
    )
}
export default Fav