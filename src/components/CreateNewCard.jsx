import AddIcon from '@mui/icons-material/Add';
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

export default function CreateNewCard({ formLink }) {
    return <Card className='w-80 h-auto m-6 flex justify-center'>
        <Button component={Link} to={formLink} color='primary' fullWidth><AddIcon size='large' /></Button>
    </Card>
};