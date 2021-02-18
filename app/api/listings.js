import client from './client'

const endpoint = '/listings'

////Passing callback function as parameter
const addlistings = (listing, onUploadProgress) => {
    const data = new FormData();
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('categoryId', listing.category.value)
    data.append('description', listing.description)

    listing.images.forEach((image, index) => {
        data.append('images', {
            name: 'image' + index,
            type: 'image/joeg',
            uri: image
        })
    });

    if (listing.location)
        data.append('location', JSON.stringify(listing.location))

    return client.post(endpoint, data, {
        ////Calling parent function in child component 
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total)
    });

}

const getListings = () => client.get(endpoint)

export default {
    addlistings,
    getListings,
};