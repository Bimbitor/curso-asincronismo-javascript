

function validarURL(miurl) {
    try {
        new URL(miurl);
        return true;
    } catch (err) {
        return false;
    }
}


async function fetchData(url) {
    if (!validarURL(url)) {
        throw new Error("Invalid URL")
    }
    
    try {
        const response = await fetch(url);
        if(response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Something was wrong")
        }      
    } catch {
        throw new Error("Something was wrong")
    }
    
    
    
}

async function asinFn(){
    await fetchData('https://api.escuelajs.co/api/v1/categories');
    
    await fetchData('----');
    
    await fetchData('https://domain-a.com/api-1');
    
}

asinFn ()