// Test script to verify frontend API calls
console.log('Testing inventory API calls...');

// Test 1: Add item
fetch('http://localhost:3001/inventory', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        dispositivo: 'Switch Test',
        ip: '192.168.1.10',
        modelo: '2960',
        status: 'Ativo'
    })
})
.then(res => res.json())
.then(data => {
    console.log('POST result:', data);

    // Test 2: Get all items
    return fetch('http://localhost:3001/inventory');
})
.then(res => res.json())
.then(data => {
    console.log('GET all result:', data);

    // Test 3: Update item
    if (data.length > 0) {
        return fetch(`http://localhost:3001/inventory/${data[0].id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                dispositivo: 'Switch Test Updated',
                ip: '192.168.1.11',
                modelo: '2960',
                status: 'Parado'
            })
        });
    }
})
.then(res => res.json())
.then(data => {
    console.log('PUT result:', data);

    // Test 4: Get updated items
    return fetch('http://localhost:3001/inventory');
})
.then(res => res.json())
.then(data => {
    console.log('GET updated result:', data);

    // Test 5: Delete item
    if (data.length > 0) {
        return fetch(`http://localhost:3001/inventory/${data[0].id}`, {
            method: 'DELETE'
        });
    }
})
.then(res => res.json())
.then(data => {
    console.log('DELETE result:', data);
    console.log('All tests completed!');
})
.catch(err => console.error('Test failed:', err));