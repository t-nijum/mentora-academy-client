import { toast } from "react-toastify";

const getInstalledApp = ()=>{
    const installedAppStr = localStorage.getItem('installedApp');
    if (installedAppStr){
        const installedAppData = JSON.parse(installedAppStr);
        return installedAppData;
     }
    else{
        return [];
    }

}

const addToStoreDb = (id) =>{
    const installedAppData = getInstalledApp();
    if(installedAppData.includes(id)){
        toast('Already exist this app!')
    }
    else{
        installedAppData.push(id);
        // console.log(installedAppData);
        const data = JSON.stringify(installedAppData)
        localStorage.setItem('installedApp',data)
    }
}
const removeFromStoreDb = (id) => {
    const installedAppData = getInstalledApp();
    const updatedData = installedAppData.filter(appId => parseInt(appId) !== parseInt(id));
    localStorage.setItem('installedApp', JSON.stringify(updatedData));
};
export {addToStoreDb, getInstalledApp, removeFromStoreDb}