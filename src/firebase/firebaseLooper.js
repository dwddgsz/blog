export const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach(element=>{
        data.push({...element.data(),id:element.id})
    })
    return data;
} 