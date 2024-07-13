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
