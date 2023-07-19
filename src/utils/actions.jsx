
import { redirect } from "react-router-dom";
import { saveToLocalStorage, deleteItem } from '../utils/localStorage';


export const loginAction = async ({ request }) => {

    const formData = await request.formData();
    formData.get("email")
    console.log(request);
    saveToLocalStorage({ key: formData.get("email"), value: formData.get("password") })

    return redirect('/');
}

export const logoutAction = async ({ key }) => {
    deleteItem({ key: 'login' });
    return redirect('/login');
}
