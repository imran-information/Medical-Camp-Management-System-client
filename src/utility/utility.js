import axios from "axios"

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)
    return data.data.url
}

export const saveUserDb = async (currentUser) => {
    // save user to db if not exists
    console.log(currentUser);
    await axios.post(`${import.meta.env.VITE_API_URL}/users/${currentUser?.email}`, {
        email: currentUser?.email,
        name: currentUser?.displayName,
        photo: currentUser?.photoURL,
    })
}