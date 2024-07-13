function fetchData(callback) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        callback({ id: 10001 });
    }, 4000); // Simulate a delay of 4 seconds
}

test('Callback My Data', done => {
    function callback(data) {
        try {
            expect(data.id).toBe(10001);
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
}, 10000); // Set the timeout to 10 seconds (10000 ms)