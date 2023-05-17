export async function getData(url) {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return {
        url: url,
        body: await res.text()
    };
}