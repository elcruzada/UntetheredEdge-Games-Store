import { useState } from "react"
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";


const GameDeveloperImages = ({gameId}) => {
    //this page is to post new images onto a developer page
    //make sure that you pass in an actual gameId that isn't hard-coded

    //also need a way later to uncheck those that you don't want as preview image
    //or find a way that when you update an image, you can check preview image
    // const gameId = 3
    const history = useHistory()
    const { closeModal } = useModal()
    const [imageUrls, setImageUrls] = useState([]);
    const [newImageUrl, setNewImageUrl] = useState('');
    // const [previewStates, setPreviewStates] = useState({})
    const [errors, setErrors] = useState({});

    const handleAddImage = () => {
        if (newImageUrl.trim() !== '') {
            setImageUrls([...imageUrls, newImageUrl]);
            // setPreviewStates({
            //     ...previewStates,
            //     [newImageUrl]: false
            // })
            setNewImageUrl('');
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImageUrls = [...imageUrls];
        updatedImageUrls.splice(index, 1);
        setImageUrls(updatedImageUrls);
    };

    // const handlePreviewChange = (imageUrl, isChecked) => {
    //     setPreviewStates({
    //         ...previewStates,
    //         [imageUrl]: isChecked
    //     })
    // }

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
            formData.append(`urls`, imageUrl);
            // formData.append(`preview[${index}]`, previewStates[imageUrl])
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
                // setPreviewStates({})
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
        history.push('/games')
        history.push('/developer/portal')
        closeModal()
    };

    return (
        <>
            {/* <div className='global-outer-container'> */}
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
                                {/* <input
                            type='checkbox'
                            checked={previewStates[imageUrl] || false}
                            onChange={(e) => handlePreviewChange(imageUrl, e.target.checked)}
                        /> */}
                                {/* <label>Preview</label> */}
                                <input type="hidden" name="urls" value={imageUrl} />
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
                </div>
            {/* </div> */}
        </>
    )
}

export default GameDeveloperImages
