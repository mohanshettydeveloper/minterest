import Header from "../../components/Header/Header";

const Gallery = ({selectedMokeMons}) => {
    console.log('selectedMokeMons=', selectedMokeMons);
    return (
        <div align='center'>
            <Header/>
            <h2>Selected MokeMons</h2>
        </div>);
};

export default Gallery;