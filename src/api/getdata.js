import request from 'superagent'

const postdata = () => {
    console.log("onload...")
    var file
        request
            .get('/api/get/postdata')
            .query({ query: 'Manny' })
            .query({ range: '1..5' })
            .query({ order: 'desc' })
            .set('API-Key', 'foobar')
            .set('Accept', 'application/json')
            .end((err, resp) => {
            if (!err) {
                console.log("success")
                file =  JSON.parse(resp.text)
                console.log(file)
                return file
            } 
            else {
                console.log("failed")
                console.log(err)
                console.log("end")
                return []
            }
            })
}
export default Importproducts