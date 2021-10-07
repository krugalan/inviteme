

export const fetchHelper = async (type, url, data) => {
    let res = {};

    switch (type) {

        case 'GET':
            await fetch(url, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer alanykari2022', 'Content-Type': 'application/json' }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => res = response);
            return res;

        case 'POST':
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer alanykari2022',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => res = response);
            return res;

        case 'PUT':
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': 'Bearer alanykari2022',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => res = response);
            return res;

        case 'DELETE':
            res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer alanykari2022',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        default:
            res = await fetch(url, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer alanykari2022', 'Content-Type': 'application/json' }
            });
            return res.json();
    }

}