import AddJewelryForm from "../components/AddJewelryForm";
import JewelryList from "../components/JewelryList";
import { JewelryProvider } from "../contexts/JewelryProvider";

export default function JewelryPage() {
    return <>
        <JewelryProvider>
            <JewelryList />
            <AddJewelryForm />
        </JewelryProvider>
    </>
}