import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({name, weight, height, imageSrc, base_experience}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton onClick={handleOpen}><InfoIcon/></IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={imageSrc}/>
                    <Typography id="modal-modal-title" variant="h3" component="h2">
                        {name.toUpperCase()}
                    </Typography>
                    <Typography id="modal-modal-description" variant="h6" sx={{mt: 2}}>
                        My Name is {name.toUpperCase()} and
                        I weigh about {weight} pounds!!. My height is {height} feet and my base experience is {base_experience}.
                        <Typography sx={{color:'red', fontWeight:'bolder'}}>TRUST ME AND I WILL WIN FOR YOU!, go LIKE ME!!! :)</Typography>

                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
