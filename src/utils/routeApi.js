async function request(url, options) {
    return fetch(url, options).then(checkResponse)
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getPolyline = async (coords) => {  
    return await request(`http://router.project-osrm.org/route/v1/driving/${coords[0]},${coords[1]};${coords[2]},${coords[3]}?alternatives=false&steps=true&geometries=geojson&overview=false&annotations=true`);
}
