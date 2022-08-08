import AddIcon from '@mui/icons-material/Add';
import { Button, Card } from "@mui/material";
import { Link } from 'react-router-dom';
import JewelryList from "../components/JewelryList";

export default function JewelryPage() {
    return <div className='flex'>
        <JewelryList />
        <Card className='w-2/12 m-6 flex justify-center'>
            <Button component={Link} to='/jewelry/add' color='primary' fullWidth><AddIcon size='large' /></Button>
        </Card>
    </div>
}