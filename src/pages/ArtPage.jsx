import AddIcon from '@mui/icons-material/Add';
import { Button, Card } from "@mui/material";
import { Link } from 'react-router-dom';
import ArtList from "../components/ArtList";

export default function ArtPage() {
    return <div className='flex'>
        <ArtList />
        <Card className='w-2/12 m-6 flex justify-center'>
            <Button component={Link} to='/art/add' color='primary' fullWidth><AddIcon size='large' /></Button>
        </Card>
    </div>
}