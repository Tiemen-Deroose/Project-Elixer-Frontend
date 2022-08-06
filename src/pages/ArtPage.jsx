import AddArtForm from "../components/AddArtForm";
import ArtList from "../components/ArtList";
import { ArtProvider } from "../contexts/ArtProvider";

export default function ArtPage() {
    return <>
        <ArtProvider>
            <ArtList />
            <AddArtForm />
        </ArtProvider>
    </>
}