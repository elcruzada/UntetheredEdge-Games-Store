import { useState } from "react"
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";


const GameDeveloperImages = ({gameId}) => {
    const history = useHistory()
    const { closeModal } = useModal()
    const [imageUrls, setImageUrls] = useState([]);
    const [newImageUrl, setNewImageUrl] = useState('');
    const [errors, setErrors] = useState({});

    const handleAddImage = () => {
        if (newImageUrl.trim() !== '') {
            setImageUrls([...imageUrls, newImageUrl]);
            setNewImageUrl('');
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImageUrls = [...imageUrls];
        updatedImageUrls.splice(index, 1);
        setImageUrls(updatedImageUrls);
    };

    const handleImageUpload = async (e) => {
        e.preventDefault();


        if (imageUrls.length === 0) {
            setErrors({ imageUrls: 'At least one image URL is required' });
            return;
        }

        const formData = new FormData();
        imageUrls.forEach((imageUrl) => {
            formData.append(`urls`, imageUrl);
        });

        try {
            const response = await fetch(`/api/games/${gameId}/images`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const newImages = await response.json();
                console.log('New images:', newImages);
                setImageUrls([]);
                setNewImageUrl('');
                setErrors({});
            } else {
                const errorData = await response.json();
                console.error('Image upload error:', errorData);
                setErrors(errorData.errors);
            }
        } catch (error) {
            console.error('Image upload error:', error);
        }
        history.push('/games')
        history.push('/developer/portal')
        closeModal()
    };

    return (
        <>
                <div className='modal'>

                    <h2>Add images to your game</h2>
                    <form onSubmit={handleImageUpload}>
                        <h2>Add Images</h2>
                        {imageUrls.map((imageUrl, index) => (
                            <div key={index}>
                                <img src={imageUrl} alt={`gamePreview ${index + 1}`}
                                style={{maxHeight: '10rem'}}
                                />
                                <button type="button" onClick={() => handleRemoveImage(index)}>
                                    Remove
                                </button>
                                <input type="hidden" name="urls" value={imageUrl} />
                            </div>
                        ))}
                        <div>
                            <input
                                type="text"
                                value={newImageUrl}
                                placeholder='Place your image URL here'
                                onChange={(e) => setNewImageUrl(e.target.value)}
                            />
                            <button type="button" onClick={handleAddImage}>
                                Add Image
                            </button>
                        </div>
                        {errors.imageUrls && <span className="error">{errors.imageUrls}</span>}
                        <button type="submit">Upload Images</button>
                    </form>
                </div>
        </>
    )
}

export default GameDeveloperImages
