function test() {
    return new Promise((resolve, reject) => {

        try {
            resolve({message: "Hola Test"})
        } catch (e) {
            reject({
                message: 'Error al realizar test',
                status: 500,
                details: e
            })
        }
    })
}

module.exports = {
    test
}
