import { NavLink } from "react-router-dom"
import GameDeveloperForm from "./GameDeveloperForm"
import { useState } from "react"

const GameDeveloperPage = () => {
    const gameId = 1
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

        // Validate the image URLs
        if (imageUrls.length === 0) {
            setErrors({ imageUrls: 'At least one image URL is required' });
            return;
        }

        // Create a new FormData object
        const formData = new FormData();
        imageUrls.forEach((imageUrl) => {
            formData.append('url', imageUrl);
        });

        try {
            // Send a POST request to the backend route with the game ID and image data
            const response = await fetch(`/api/games/${gameId}/images`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Images added successfully
                const newImages = await response.json();
                console.log('New images:', newImages);
                // Reset the form fields
                setImageUrls([]);
                setNewImageUrl('');
                setErrors({});
            } else {
                // Handle errors if the request was not successful
                const errorData = await response.json();
                console.error('Image upload error:', errorData);
                setErrors(errorData.errors);
            }
        } catch (error) {
            console.error('Image upload error:', error);
        }
    };

    return (
        <>
            <h1>Publish with us!</h1>
            <NavLink exact to='/developer/form'>
                Submit your application here
            </NavLink>
            <h2>Add images to your game!</h2>
            <form onSubmit={handleImageUpload}>
                <h2>Add Images</h2>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Image ${index + 1}`} />
                        <button type="button" onClick={() => handleRemoveImage(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <div>
                    <input
                        type="text"
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                    />
                    <button type="button" onClick={handleAddImage}>
                        Add Image
                    </button>
                </div>
                {errors.imageUrls && <span className="error">{errors.imageUrls}</span>}
                <button type="submit">Upload Images</button>
            </form>
        </>
    )
}

export default GameDeveloperPage
